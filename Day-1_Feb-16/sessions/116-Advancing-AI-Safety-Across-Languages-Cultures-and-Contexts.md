# Advancing AI Safety Across Languages, Cultures and Contexts

**India AI Impact Summit 2026 — Day 1 (2026-02-16)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 16:30 – 17:30 |
| 📍 **Venue** | Bharat Mandapam | West Wing Room 4 B |
| 📅 **Date** | 2026-02-16 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/gMjyBB7itvE?feature=share) |

## 🎤 Speakers

- Fabrice Ciais, G42
- Marzieh Fadaee, Cohere
- Natasha Crampton, Microsoft
- Nicolas Miailhe, PrismEval
- Nitarshan Rajkumar, Anthropic
- Peter Mattson, MLCommons
- Sara Hooker, Adaptable Intelligence
- Sunayana Sitaram, Microsoft Research
- Wan Sie Lee, Singapore AISI
- Wassim Hamidouche, Microsoft

## 🤝 Knowledge Partners

- Microsoft

## 📝 Summary

This panel discussion will explore why multilingual safety is essential for inclusive AI governance, addressing emerging risks such as jailbreaking in low-resource languages, and the current lack of culturally grounded benchmarks and evaluation frameworks. Participants will examine the challenges of building culturally sensitive safety datasets and ensuring that AI models can be developed, evaluated, and deployed safely across diverse linguistic and socio-cultural contexts, and highlight opportunities for collaborative research and open evaluation infrastructure.

## 🔑 Key Takeaways

1. This panel discussion will explore why multilingual safety is essential for inclusive AI governance, addressing emerging risks such as jailbreaking in low-resource languages, and the current lack of culturally grounded benchmarks and evaluation frameworks.
2. Participants will examine the challenges of building culturally sensitive safety datasets and ensuring that AI models can be developed, evaluated, and deployed safely across diverse linguistic and socio-cultural contexts, and highlight opportunities for collaborative research and open evaluation infrastructure.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/gMjyBB7itvE/maxresdefault.jpg)](https://youtube.com/live/gMjyBB7itvE?feature=share)

---

_[← Back to Day 1 Sessions](../README.md)_


## 📝 Transcript

from zero. It was actually accelerated at the Paris AI summit where Singapore shared early results from a very interesting joint cross country red teaming work bringing together local

experts from nine Asia-Pacific countries. I think um to stress test how risk and harms patterns can vary across region, languages and styles of expression. A core takeaway was that the

same model performing the same task can show materially different safety failure rates depending on languages and cultural contexts which really demonstrate that safeguards is

calibrated in one language and do not necessarily generalize to others. And so Paris helped to catalyze this conversation. Delhi is where we need to advance solutions and we move beyond

only translation toward shared evaluation methods and we have a very diverse group of speakers today spanning as was research government industry and I'm glad to open the discussion uh to

actually hand the floor to my colleague Natasha Kremton chief responsible officer of Microsoft [applause] Well, good afternoon everyone. It's a

real pleasure to be here with so many leaders from across sectors and around the world and really to be having today's conversation here in India which is home to this extraordinary linguistic

diversity and cultural diversity and lots of lived experience of navigating both. It's clear to me that from the work that I do at Microsoft and beyond that

multilingual and multicultural capability for AI is not a nice to have, but it's essential to the broad and beneficial diffusion of AI. And the reason for that is pretty simple.

Adoption only follows when systems reliably work in the languages people actually use and the cultural context in which they use them. Many of today's most powerful general

purpose AI models are trained largely on publicly available web data, but actually fewer than 5% of the world's spoken languages are meaningfully represented online.

And within that narrow slice, English really dominates. So we've got about 42% of widely used cruel data sets been in English alone. What we've seen is that that imbalance

has real consequences. When AI safety mechanisms are calibrated primarily in English to reflect English speakaking norms, they miss culturally indirect phrasing. They miss idioms.

They miss humor and those misses affect what models refuse, how they follow constraints and how they behave in safety critical scenarios. What we've seen is that these gaps

matter most for contextual harm. So think about scams and manipulation and social engineering situations where intent is often hinted at but not stated outright.

And it's got broader uh security implications as well. We've seen that low resource languages and non-Latin scripts have been exploited by adversarial actors to bypass model or

system level safeguards. And that's partly because they were never tested in those contexts. So the question before us today is not whether multi-ingual evaluation matters.

The question is how we build it in a way that is rigorous, reusable, and grounded in real world use. At Microsoft, we've been investing in this problem across research and

evaluation and deployment. Concretely, we've been supporting the multilingual, multicultural and multimodal expansion of ML Common's AI luminate benchmark, which Peter will speak um about later

today. Microsoft research in India uh through the work of our uh colleagues Sunayyama and uh Kika who is also with us today have been advancing Samia a community centered approach to

evaluating model behavior in real world contexts and through our Microsoft research accelerator and our research hubs in India and Africa we've been advancing project Gecko an effort to

co-design AI applications with local communities to support agriculture and education in East Africa and South Asia. For all of these exciting and ambitious projects, we're also clear at Microsoft

that no single company or institution can solve this alone. And the encouraging news is that we're not starting from scratch. Um, as you've just heard, across the global AI

evaluation community, real work is already happening. And in fact, we're privileged to have the leaders of several of these work streams here with us today.

So in Singapore, as my colleague Hector explained, IMDA has brought together language and cultural experts from across the Asia-Pacific region to red team AI systems against region specific

harms. Here in India, Sarai at IIT Madras is showing what culturally grounded testing looks like. They've been developing ways to surface the bias and stereotyping

patterns that actually matter locally. And last year in Tokyo, the GP center proposed a multicultural AI consortium, moving beyond translated prompts to shared evaluation infrastructure,

especially for low resource languages. This is why the India AI impact summit comes at such a critical moment. This week offers a real opportunity to convene stakeholders around practical

collaboration to make multilingual and multicultural evaluation more rigorous, more reusable, and more grounded in local contexts. If we get this right, we enable AI's benefits to scale across

contexts, cultures, and languages. The diffusion of trustworthy AI systems doesn't happen by accident. It happens because we choose to design, evaluate, and govern systems for the world as it

actually is multilingual, multicultural, and deeply interconnected. With that, it's my pleasure to hand over to my colleague Sunniama, who's going to moderate today's panel. Thank you very

much. &gt;&gt; [applause] &gt;&gt; Thank you so much Natasha for those opening remarks. And as you can see here, we have an amazing panel of

experts from industry, academia, research, startups, and so on. And so I'm really excited to actually um learn from them about their um you know, their own uh experience on advancing

multilingual AI safety. And so what I'll do is I'll ask each panelist one question and as I ask them the question I will introduce them just to save some time. So I'm going to start with um

Sarah Hooker who's the co-founder of uh Adaption Labs which she you know founded recently after a really successful stint being the head of Coher uh Coher Labs. And so the question that I have Sarah

for you is that uh you've been a leading voice on multilingual safety. You wrote the article on the divide and so I want to ask you what do you think the most urgent safety gaps are? um uh basically

preventing multilingual safety evaluation and what do you think some approaches to close those gaps could be that uh you're thinking about in your new venture?

&gt;&gt; Yeah. So I think this is oh excellent. So this is not enough. That was a lovely introduction. Maybe I'll throw a few thoughts out there. So one of the

biggest gaps about multilingual safety is that uh it is not only a question of language coverage. There's a question of contextual what is unsafe here is completely different from what is

considered unsafe uh in the US. I think the best example of this uh which was very interesting when we started this work there was a very famous data set released by a frontier AI lab that was

about AI safety issues and the examples were decidedly American. I'm uh and one of the examples was someone threatening to go tepee a house and I had no idea what that meant. uh it means that to go

throw toilet paper at a house. This is very specific and very uh interesting because that data set was used by basically every single frontier AI lab to align its models. And what that says

is two things. One is that we have an issue where frankly we need more ecosystems of talent that are uh building and owning the full stack to represent exactly what uh are considered

harms. But then the second thing is it is not just about language coverage. It's essentially a question also of of context. Um what this means is that things that would be fun to talk about

today with the whole panel is um one is how do we also uh deal with adversarial safety issues that emerge over time as people interact with technology. So this is a third element that I think is often

not talked about. There are new uh there are new safety issues that emerge as people interact with AI for different um over time. For example, fraud and people targeting people with voice agents or

people taking advantage of someone who's susceptible. Uh these are all issues which have become easier to to become a threat because now AI is so cheap to deploy. And so I think it has to be more

holistic. Um for me, I'm a researcher. I'm a computer scientist. I spent my whole career in frontier labs. Uh my responsibility has been building these systems and so I think very carefully

about these things like how do we think about the safety of them for now adaption. I think this goes to the second question. Um with adaption our main goal is how do we make it very

efficient to adapt and this is crucial because right now we ship the same model to billions of people around the world. And fundamentally we're shipping the same um judgments and red lines about

what is safe and what's unsafe. And I think it's it's really core to how we build intelligence that we have to think about it as like how do we cheaply and efficiently adapt to uh really local as

well as global AI. So maybe I'll pause there. I'll also just note Marzia did much of she championed a lot of the work. Even the paper mentioned Marzier was part of it and so Marzia should also

weigh in on this but I know you have a tailored question for each of us so I'm going to turn her back. &gt;&gt; Yes. Thank you so much Sarah for that thoughtful response. So next I want to

ask um WC Lee who's the who's from the Singapore AC about um the Singapore IMDA work that you've been uh leading and um so this has become um you know a leading hub for safety testing especially for

the multilingual joint testing exercise that you did. So I was wondering what did it teach you about what's really hard to standardize across different uh countries across different languages and

what do you see as the most sort of realistic role for these kinds of um you know ACS &gt;&gt; um yeah thanks thanks for having me and uh happy to share a little bit more

about what we've done um I think from very practical very kind of down to earth ways of approaching it we realize that it's even as simple as um translating a a a data set. It's really

you you can't expect it to actually work the same across different languages. As Sarah mentioned, context is important. Um the the kind of um prompts that are used in certain data sets may not be so

relevant in certain countries. We tried to do uh agentic multilingual testing. I think it was quite uh ambitious at the time to try to do that and we realized even tool calling doesn't work so well.

um you know in agentic you have a you have a a trajectory that you want you expect the agent to go through and if you find that it's uh it's number one um calling the wrong tools do we need also

need to translate the tools and so on so so the the testing infrastructure and the testing um data and and and all the related elements to that actually it's not so easy to set up for multilingual

um you assume that it'll be easy but it's it's not the matter of translation so that's on I think the second thing is also certain kinds of expectations in terms of what's acceptable as Sarah

mentioned in one context may be quite different from another for another and so we need to come to some kind of common understanding around um um what what's actually harmful right in

different countries um and that requires us to and yet find as you as you mentioned standards how do you have different expectations and yet have certain standards that's why We wanted

to work on things like common taxonomy that's a little bit different in terms of what you think about bias or cultural harms um across different countries. So last year as as uh as was mentioned by

Hector and by Natasha we we did red teaming exercise that brought like um about nine countries. This year we
