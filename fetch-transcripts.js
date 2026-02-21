const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    mod.get(url, {headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'Accept-Language': 'en-US,en;q=0.9'}}, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function getTranscript(videoId) {
  const page = await fetch('https://www.youtube.com/watch?v=' + videoId);
  
  // Extract captions data
  const match = page.match(/"captions"\s*:\s*(\{.*?\})\s*,\s*"videoDetails/s);
  if (!match) return null;
  
  try {
    const captions = JSON.parse(match[1]);
    const tracks = captions?.playerCaptionsTracklistRenderer?.captionTracks;
    if (!tracks || tracks.length === 0) return null;
    
    // Prefer English, fallback to first
    let track = tracks.find(t => t.languageCode === 'en') || tracks[0];
    let baseUrl = track.baseUrl;
    
    // Fetch transcript XML
    const xml = await fetch(baseUrl);
    
    // Parse XML transcript
    const segments = [];
    const regex = /<text start="([\d.]+)" dur="([\d.]+)"[^>]*>(.*?)<\/text>/gs;
    let m;
    while ((m = regex.exec(xml)) !== null) {
      const text = m[3]
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\n/g, ' ')
        .trim();
      if (text) {
        const start = parseFloat(m[1]);
        const mins = Math.floor(start / 60);
        const secs = Math.floor(start % 60);
        segments.push(`[${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}] ${text}`);
      }
    }
    
    return segments.length > 0 ? segments.join('\n') : null;
  } catch(e) {
    return null;
  }
}

async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Already has transcript?
  if (content.includes('## 📝 Transcript')) return 'skip';
  
  // Extract video ID
  const urlMatch = content.match(/youtube\.com\/live\/([\w-]+)/);
  if (!urlMatch) return 'no-video';
  
  const videoId = urlMatch[1];
  
  try {
    const transcript = await getTranscript(videoId);
    if (!transcript) return 'no-transcript';
    
    // Append transcript to file
    const newContent = content.trimEnd() + '\n\n## 📝 Transcript\n\n' + transcript + '\n';
    fs.writeFileSync(filePath, newContent);
    return 'ok';
  } catch(e) {
    return 'error: ' + e.message;
  }
}

async function main() {
  const baseDir = '/home/ec2-user/.openclaw/workspace/Ai-summit';
  const days = ['Day-1_Feb-16', 'Day-2_Feb-17', 'Day-3_Feb-18', 'Day-4_Feb-19', 'Day-5_Feb-20'];
  
  let total = 0, ok = 0, noVideo = 0, noTranscript = 0, skipped = 0, errors = 0;
  
  for (const day of days) {
    const sessDir = path.join(baseDir, day, 'sessions');
    const files = fs.readdirSync(sessDir).filter(f => f.endsWith('.md')).sort();
    
    console.log(`\n=== ${day} (${files.length} files) ===`);
    
    for (const file of files) {
      total++;
      const filePath = path.join(sessDir, file);
      const result = await processFile(filePath);
      
      if (result === 'ok') { ok++; process.stdout.write('✓'); }
      else if (result === 'skip') { skipped++; process.stdout.write('s'); }
      else if (result === 'no-video') { noVideo++; process.stdout.write('.'); }
      else if (result === 'no-transcript') { noTranscript++; process.stdout.write('x'); }
      else { errors++; process.stdout.write('!'); console.error(`\n  ${file}: ${result}`); }
      
      // Rate limit - 1 second between requests
      if (result !== 'skip' && result !== 'no-video') {
        await new Promise(r => setTimeout(r, 1000));
      }
    }
  }
  
  console.log(`\n\n=== DONE ===`);
  console.log(`Total: ${total} | Transcripts added: ${ok} | No video: ${noVideo} | No transcript: ${noTranscript} | Skipped: ${skipped} | Errors: ${errors}`);
}

main().catch(console.error);
