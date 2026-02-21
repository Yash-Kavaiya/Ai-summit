#!/bin/bash
# Fetch YouTube transcripts for all AI Summit sessions

BASE="/home/ec2-user/.openclaw/workspace/Ai-summit"
TMPDIR="/tmp/transcripts"
mkdir -p "$TMPDIR"

ok=0; fail=0; skip=0; novideo=0

for day in Day-1_Feb-16 Day-2_Feb-17 Day-3_Feb-18 Day-4_Feb-19 Day-5_Feb-20; do
  echo ""
  echo "=== $day ==="
  
  for f in "$BASE/$day/sessions/"*.md; do
    fname=$(basename "$f")
    
    # Skip if already has transcript
    if grep -q "## 📝 Transcript" "$f"; then
      skip=$((skip+1))
      printf "s"
      continue
    fi
    
    # Extract video ID
    vid=$(grep -oP 'youtube\.com/live/\K[\w-]+' "$f" | head -1)
    if [ -z "$vid" ]; then
      novideo=$((novideo+1))
      printf "."
      continue
    fi
    
    # Download subtitle
    outfile="$TMPDIR/$vid"
    rm -f "${outfile}.en.vtt"
    
    python3 -m yt_dlp --write-auto-sub --sub-lang en --skip-download --sub-format vtt \
      -o "$outfile" "https://youtube.com/watch?v=$vid" 2>/dev/null
    
    if [ -f "${outfile}.en.vtt" ]; then
      # Convert VTT to clean text with timestamps
      # Remove duplicate lines, tags, and empty lines
      transcript=$(python3 -c "
import re, sys
with open('${outfile}.en.vtt') as f:
    content = f.read()

lines = content.split('\n')
result = []
seen = set()
for line in lines:
    if line.startswith('WEBVTT') or line.startswith('Kind:') or line.startswith('Language:'):
        continue
    if '-->' in line:
        continue
    if not line.strip():
        continue
    # Remove VTT tags
    clean = re.sub(r'<[^>]+>', '', line).strip()
    if clean and clean not in seen:
        seen.add(clean)
        result.append(clean)

# Group into paragraphs (every ~5 lines)
output = []
for i in range(0, len(result), 5):
    chunk = ' '.join(result[i:i+5])
    output.append(chunk)

print('\n\n'.join(output))
" 2>/dev/null)
      
      if [ -n "$transcript" ]; then
        # Append to markdown file
        printf '\n\n## 📝 Transcript\n\n%s\n' "$transcript" >> "$f"
        ok=$((ok+1))
        printf "✓"
      else
        fail=$((fail+1))
        printf "x"
      fi
      rm -f "${outfile}.en.vtt"
    else
      fail=$((fail+1))
      printf "x"
    fi
    
    # Small delay
    sleep 0.5
  done
done

echo ""
echo ""
echo "=== DONE ==="
echo "Transcripts added: $ok | Failed: $fail | Skipped: $skip | No video: $novideo"
echo "Total: $((ok+fail+skip+novideo))"
