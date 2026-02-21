# Advancing Multilingual AI: Global South Governance of Non-English Model Development and Deployment

**India AI Impact Summit 2026 — Day 3 (2026-02-18)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 15:30 – 16:30 |
| 📍 **Venue** | Sushma Swaraj Bhawan | Shakuntalam Banquet |
| 📅 **Date** | 2026-02-18 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/KmvuQ1ece0U?feature=share) |

## 🎤 Speakers

- Aliya Bhatia, Center for Democracy & Technology
- Chinasa T Okolo, Technecultura
- Dhanaraj Thakur, Emerging Technology Initiative at the George Washington University
- Tajuddeen Gwadabe, Masakhane African Languages Hub
- Urvashi Aneja, Digital Futures Lab

## 🤝 Knowledge Partners

- Center for Democracy & Technology

## 📝 Summary

Global initiatives are bridging the linguistic divide in AI by developing multilingual resources. Key efforts include India's AI for Bharat, which builds corpora for 22 official languages, and partnerships to digitize library archives in underrepresented languages. Similarly, collaborative consortiums empower researchers in Africa and other regions to advance NLP for local languages. These technical and strategic collaborations, especially across the Global South, ensure AI systems are inclusive and accessible worldwide.

## 🔑 Key Takeaways

1. Global initiatives are bridging the linguistic divide in AI by developing multilingual resources.
2. Key efforts include India's AI for Bharat, which builds corpora for 22 official languages, and partnerships to digitize library archives in underrepresented languages.
3. Similarly, collaborative consortiums empower researchers in Africa and other regions to advance NLP for local languages.
4. These technical and strategic collaborations, especially across the Global South, ensure AI systems are inclusive and accessible worldwide.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/KmvuQ1ece0U/maxresdefault.jpg)](https://youtube.com/live/KmvuQ1ece0U?feature=share)

---

_[← Back to Day 3 Sessions](../README.md)_


## 📝 Transcript

ual AI systems currently um so that we can dive into a more detailed discussion of how we can sort of address those gaps and what current initiatives to address the gaps look like. Um so just a little

bit of background first. The Center for Democracy and Technology is a over 30-year-old nonprofit nonpartisan organization based in Washington D and Brussels. Um we've conducted a lot of

landmark studies into examining multilingual LLMs and then also interrogating their use in content moderation um settings specifically as they relate to content moderation in low

resource languages widely and commonly spoken in the global south. Um, in our paper, Lost in Translation, we looked at key architectural training and testing gaps that exist that could then sort of

impede the ability for large language models to work in um different language context contexts apart from English. Um, and we found sort of key gaps in those those three sort of buckets in the

training data sense. You know, I think it's widely understood that multilingual that that large language models are commonly trained on data that is sort of scraped off the web or widely accessibly

easily found on the web um in through common crawl through through widely um sourced data sets um made available through common crawl or other sort of open repositories and those data sets

often overindex on and over represent the English language. So what we found in our study that was published in 2023 is that the vast majority of these multilingual systems were still trained

on over 60% of English language data. So I think everyone in the room kind of understands that the sort of little 40% of data that it does represent non-English languages is often not fully

representative of the ways the plurality of ways we speak those languages. Um and AI companies sort of asserted quite confidently that these systems nonetheless worked in these languages

even when especially in low resource languages. Um they were trained on one or maybe no data in that language. Um and the few data sets that did exist to train these systems were either machine

translated which means that they were replete with errors or were just poor substitutes of how we spoke. Um, another gap we found was that there was an over reliance on model architectures that

sort of privileged English or Anglocentric or western sort of um, uh, capabilities. Um, and so there was a over reliance on the belief that large language models were going to be the

sort of solution in multilingual capabilities when researchers including the ones on the panel um, and others have found that often smaller architecture, smaller language models

are more effective in these low resource languages, those languages with very few data sets. Um there was also a belief in the possibility of employing cross-lingual transfer models or methods

to teach models um how to perform in these low resource languages um by using examples found in high resource languages. So for example a model would learn you know sentence structure in

English and then translate that or apply that transpose that onto low resource settings. Although anyone who speaks languages from the global majority or any language apart from English knows

that English is sort of unique um language unique creole of languages where the sort of se subjectverb object syntax doesn't easily apply or map onto our languages that we speak. Um and

finally I'm going pretty quickly because I want to get into the panel. Finally, there was a lot of gaps in the sort of testing regimes that major model developers employed um in that, you

know, they made claims that these systems worked in uh non-English languages. Um but in fact, they were often those claims were not rigorously tested, were not tested using

evaluations created by those very communities that speak the languages that they were being tested in. And often they were employing um uh very large automated benchmarks that were

machine translated into multiple languages and then testing using those benchmarks that were not perfect proxies for the context they were being used in. Um and then the reporting the the score

that was reported for multilingual capabilities sort of was just one number that was said it works you know it works 98% of time on these x amount of languages. There wasn't a lot of

disagregation of data. there wasn't a lot of um sort of parsing of what the prompts were, whether those prompts were sort of contextually aligned. And so, you know, these three buckets sort of um

offer a lot more um sort of offer more um questions than answers about how to advance multilingual capabilities. So today we have a panel of experts that work either in the technical side, the

policy side, the academic research side or really interrogating the societal sociotechnical analysis of multilingual models in action and are trying to understand, you know, how can we advance

these systems, advance capabilities, but do so in a way that actually represents communities and represents the community's desires for where AI can be beneficial to them. Um, I'll briefly

introduce our panelists. Um so first to my left we have Arushi Gupta um senior research manager at digital futures lab definitely stepping in for Asia. Um she's done a lot of work on benchmarking

um gender related benchmarking in uh Indian languages and so we're going to happy to hear her insights. Next to her we have Danaraj Takar. He is the director of the emerging technology

initiative at the George Washington University in Washington DC and is looking at concepts of AI, democracy and race. Um and also was a previous collaborator on a lot of this um

research related to content moderation in the global south. Um next to him is Tajin uh Guadab. Um he is the programs and uh meal uh lead at the Masakane African languages hub. Um I've already

had the privilege of hearing him at another AI summit event and so really interested in to hear more about some of the benchmarking um and African language representation work um you're working

on. And then finally but absolutely not the least we have Chinasa Takolo um policy expert founder technical tour um consultant with the UN and just allround real an uh analyst and expert related to

African governance regimes global governance regimes and institutional mechanisms of AI governance. Um so very happy to have you. Thank you so much. I'm going to kick us off with a question

that sort of hopefully builds on the very cursory opening remarks I just gave with Tajin. Masakane is one of the leading sort of both research consorcia in representative data sets and

representative ML um but is also working as a sort of grant maker to foster an ecosystem foster a virtuous cycle of research into African language representation in NLP in AI broadly um

and you know you've off you've started a lot of this work through the proper masak but also now through the African languages hub So I sort of gave a little bit of um stage setting on some of the

gaps, some of the concerns. What according to you is one of the big the biggest gap you're working on when it comes to multilingual AI capabilities? Um and how are you doing so?

&gt;&gt; Am I audible? Okay, thanks. &gt;&gt; So how many minutes do I have for this? &gt;&gt; Um we have 35 minutes. So just go on. [laughter] &gt;&gt; Um um thank you very much for the

invitation. I I think when it comes to African languages the there are a lot of challenges and start thinking about um that a lot of the work that has been done earlier in

terms of um NLP is translation from English or French to an African language. meaning that when currently if you want to translate from an African language to an African language mostly

it means that you have to go through either French or English. So we don't even have that level of uh capability even in terms of the data that would enable translation or other forms of um

NLP tax directly within African languages which is one of the biggest gap apart from the fact that we don't have a sufficient data for training models. Now some of that work has been

done in terms of um trying to see at least for machine translation getting data sets that are parallel not just to English but within other African languages it's really a very difficult

task because you have to now think about um alignment and mostly you go to issues of um lack of uh some what might not exist in other languages or kind of how they translate is different and it

becomes a lot of more challenging activity in terms of um doing that. So that's one aspect. The other one is for existing LLMs a lot of them might be

good in some African languages like the ones that we have been building for like Swahili Yuruba. However, when it comes to a culturally relevant question, it usually

fails. Now, a culturally relevant question might be a simple thing as suggestion for breakfast, which in my tradition, we this is like something common. There is the common food that is

been eaten, but then in the morning, but when you go to another tradition, it's quite different. So most of the models then fail at that point because you are not intentionally trained for that. Most

of the way as you've mentioned the data is been sourced is from the internet and because our languages are not represented on the internet meaning that they cannot go into those models.

Meaning that even if the designers or the builders of the models are intentional through the methods that they're doing in terms of creating the website, websites still cannot get to um

um models that can support cultural um culturally relevant context for for um most of African languages. Now what we've been doing or um what the hub is currently interested in it's this

capability of building data sets that are multilingual and centered on culturally um cultural context. So we do have our like you mentioned the grant making um part of what we're doing we

are looking at um grants to develop multilingual multimodel data sets for about 40 African languages and multi multimodal in the sense that it would have a text

um component it would have a voice component and it would have an image component. So starting from say an image of uh a painting I'm just looking at a painting over there. So if if this is uh

like uh a painting from an African culture and then an explainer of what the painting is all about then vocalizing that it means that with with such a data set we could go to develop

models that can actually look at a picture in an African in in an African context and then if someone should ask a question using their voice they can get an answer and then that would enable

models mod and then that would enable communities to actually use models in in that multilingual sense because they are now culturally centered. One of the things we're also looking at through

that process is to enable that African language to African language translation. So um because some cultures have similar some languages are from similar cultures. So you can use some of

some images and then you can have the same uh the the text content and the voice content that are similar. Eventually we know that um a lot of African languages do not necessarily

have writing systems and looking at um a technology that can enable voiceto communication I think helps. Um just to add one more thing before I end. So I'm just going to give a very typical

example. Nigeria has over two 200 million population. We have three main um languages. I speak one of the languages but I don't speak the other two.

So language is usually something that has caused issues in in the Nigerian context and enabling multilingu multilingualism and that potentiality of understanding

each other in a in in an easier way will eliminate some of those tension and I think it has that uh possibility of solving some of the potential crisis that are happening because of

miscommunication between tribes. Thank you. &gt;&gt; Thank you so much. Um, and you teed me off well for a question I have for Arushi. Before I start, I think I just

want to note that it's very intentional for us to start off with I think the work you're doing and also um I think the African context because I think the summit will succeed if we are doing a

lot of like south on south collaboration because a lot of multilingual u researchers working in advancing these capabilities are actually facing the same things maybe in different context

with maybe different sort of um factors but it I think there is a lot to sort of learn between the African context, the Indian context, um obviously the Southeast Asian context, Latin American,

etc. And so Arushi, you've done a lot of work on benchmarking of models, [snorts] um but also like sort of questioning how we measure success, how we measure effective capabilities

um not only in Indian languages but when it comes to things like gender or cast or things like that. Can you talk a little bit about that work and maybe comment on the broader thing, broader

notion that it's not just language, it's also context. &gt;&gt; Uh, great. Um, thanks Alia for that question. I mean, over the last couple of days, I've been hearing a lot about

AI localization. So it's glad that you're holding space to really dig into the question of what localization really means especially in large language models. Uh one of the pieces that we've

really been emphasizing is in terms of disagregating the localization piece and the cultural contextualizing piece. Right? Language is one part of it. Right? It is one dimension of culture.

But there are many other things that culture encapsulates. It could be local histories. It could be endemic power asymmetries. It could be food cuisine. It could be variety of everyday

practices that structure the social life around us. Right? And not always do local language data sets, especially those that currently find their way into AI training data sets via internet data

encapsulate those accurately. Right? So just to give you an example when within the Indian context there are several foundation general purpose models coming up and one of the models uses soap opera

scripts as the data source right whose culture does that really represent and that's of course a big question for all of us to unpack together. uh coming to the second aspect that we emphasize is

culture is of course not homogeneous right and I know it's of course a very run-of-the-mill argument but I think it's worth emphasizing every time I can is especially in the Indian context and

many other global south countries you have multiple ethnicities religions you have uh multiple lived experiences right specifically even when it comes to gender when it comes to cast when it

comes to race when it comes to class and several intersecting elements therein. How do we ensure that a model captures those nuances, right? Um the the other bit related to that is

also when a lot of models depend on internet data, they are already privileging a very select straighta of society. Right? A lot of Indians, a lot of people in the global majority are not

on the internet. Their culture is not represented on Facebook, on Instagram, right? It still lies as part of oral histories, as part of analog worlds that simply don't find theirel don't find

their way into the AI arena yet. Coming specifically to the gender point, uh I think rather than anything abstract, I just want to share one example that has really stayed with me is we were working

with an organization that was building a sexual reproductive healthcare chatbot for women from marginalized communities within India and they had training data sets that they had sourced from

government websites. But they had also simultaneously done household surveys asking women how do you prompt a chatbot when you have a query on SRH specifically in English in Marathi.

Uh after a lot of iterations during their user testing they realized that their model can't tell the difference between abortion and miscarriage because the Hindi word for both those terms is

the same. So every time the woman would report a miscarriage, it would assume they have gone through an abortion. So what they did is that they did focus group discussions and they genuinely

asked the women then how do you in your language differentiate the two? They picked on those sort of aspects and fed them back into the training data. Right? So that was the iterative

community centered example that I wanted to give because a lot of those buzzwords have come up over the last few days. So I I hope that helps sort of uh illustrate that conversation a bit. But

yeah, let me pause here. &gt;&gt; Thanks so much. I think that example really sort of is tangible about like what we risk doing. I mean there's a lot of lot written about the sort of macro

uh flattening of language which is I think a very important um point as well but more tangibly at the individual level also how are you impeding people's ability to um a assuming a type of user

and then impeding users from accessing really almost life-saving information in a lot of context especially at the scale of AI adoption. Um and just before I hop into the next question, one thing I

learned while doing this research um you know in the last few years um was the acronym weird NLP which weird standing for western educated industrialized rich and uh dominant developed countries. Um

and weird NLP is a nice sort of an entire sort of like sub field of study that sort of looks into what you were just talking about the overindexing of certain represent uh uh perspectives in

data sets in um AI current AI model capabilities and who does it not privilege. Um so Dharaj I wanted to hop over to you to ask this question. um you know a lot of your work has thought

about representation um and inclusion um both through other trust and safety related research and platform governance. Um and then also most recently in examining how automated

systems and human processes in sort of large um tech companies um often um you know how they work in um a set of languages known as Ketwa um and then how they also assume um sort of sideline

indigenous languages. Um and I just wanted to give you the floor to talk a little bit about this research but also what's at stake when we are um when you know major regimes don't have failed to

take into consideration these um communities perspectives and communities sort of lived realities and and identity. &gt;&gt; Great. [clears throat]

All right. Thank you Alia and thanks to the organizers for you know uh allowing us uh to have the space and this session to discuss these issues. So I think this is an important question around

representation and inclusion um something I think all of us on the panel think about and many in the audience as well. I think uh and and and you know representing representation inclusion

around the design development deployment of models. What I would like to do is just step back a bit and consider from a systems level point of view the sociotechnical system

how representation and inclusion plays out within those systems and what that then implies for the deployment of AI tools LLM and so on within those systems. And to to be more to be more uh

clear what I'm talking about here is and this is based on uh research Alia alluded to that uh she myself and another colleague Mona Elsa led looked at content moderation systems in across

the majority world and so the example I'll use a case is a case of Ketwa and by content moderation systems I mean not only just the classifiers and the various kinds of LLM tools that say

social media companies may use to assess user generated content but also the human systems and processes that uh surround the use of those tools. And so to give an example when we talk about

representation and inclusion uh one of the first things to note is that content moderation policies uh in the case of Ketra when we explore this in detail start with policies that are developed

in English and Spanish. So starting with this kind of high level or high resource languages uh uh already there's an indication of exclusion at that point right and then based on uh interviews

with ketra content moderators so people that worked who spoke ketra but worked within among uh firms that were contracted by social media to to to assess user generated content. What they

told us was that user user content was in catch was initially machine translated in Spanish for review and then based on those translations it may or may not be flagged for uh further uh

assessment then often by a human moderator i.e. the the ketra speaking uh uh content moderators that in itself could be a whole separate discussion but I just want to highlight like the

process here and the system in which these tools are being used and then on the user side through a series of surveys and interviews with uh catcher speaking social media users we found

that uh uh the kinds of classifiers or tools used by these social media companies often failed in uh assessing particularly harm harmful content that was generated in Ketrol. So the users

would often tell us how this kind of content was simply left online because these companies or the tools they're using could not parse it, could not understand it. Uh and this was relative

to Spanish where Spanish content uh harmful content was often flagged and addressed appropriately by these companies. Um all of this points to ways in which uh

these poorly applied machine learning tools within these systems failed speakers of certain languages particularly low resource and indigenous language and it points to how the system

as a whole from the start involves some degree of exclusion involves some degree of a lack of representation of speakers of certain languages i.e. the content moderation policies and so then then

that just filters down into the way the LLMs are classifiers are then applied because they similarly involve uh as we have heard from previous speakers um uh uh various kinds of limitations in the

way they might be useful for uh indigenous and and low resource languages. In fact, when we pointed out these kinds of problems to NLP researchers and LLM developers who work

in Ketra, they were particularly surprised um that these companies were using these kinds of tools in this way and found it highly problematic. And when we when we spoke to Ketra act

linguistic activists and advocates uh they themselves that there were reported that they they were not aware of any opportunities to provide some kind of feedback to these companies to help them

improve these systems as well as tools nor were they aware of any kind of consultation with their communities in the first place to help develop these systems or tools.

What I what I'll conclude is that I think in general this kind of problem stems from a motivation particularly from large global companies that are uh obsessed with scale and obsessed with

with providing one kind of tool one tool to rule them all so to as it were one kind of all general purpose tool uh to address and and and to be useful for the the huge diverse set of communities and

languages um that we have around the world. Um, I think I'll pause there if I want and come back. &gt;&gt; Thank you. And, um, I think you've sort of teed us up into a nice sort of next

round. Um, let's try to leave some time at the end for questions from the audience, but a next round to talk about, you know, what can we do about it? And I think to kick us off, let's go

to Chinasa who's thinking a lot about and has studied written extensively about institutional mechanisms um to either improve the state of multilingual LLMs or evaluate how current

institutional mechanism mechanisms are working in the AI governance space. So can you talk talk us through a little bit of what um what global AI governance regimes are looking at either through um

voluntary commitments, soft law instruments or actually hard law instruments when it comes to multilingual multilingual systems or or just general AI governance in those uh

contexts. &gt;&gt; I'll focus my comments mostly on African context because that's where I do a lot of my research. Um but I'm my work at the United Nations. Um I focus more

broadly on international a cooper cooperation. Um and so when it comes to Africa specifically um there are about 20 countries or so that have these national AI strategies. Um a lot of them

focused on um one AI sovereignty and also becoming a lead a leader in AI somehow. um there doesn't seem to be a lot of specific mandates for, you know, multilingual AI models, but I think that

kind of falls under, you know, making AI more inclusive, which is a common word or phrase throughout a lot of these AI strategies and some policy frameworks. And so there have been some governments

actually on the continent that have made efforts um towards developing multilingual AI models of their own. uh particularly the Nigerian government actually developed um in partnership

with a local AI company um an national LLM called in atlas and so it serves four languages um Euroba Ibo um and housea along with uh Nigerian pigeon and so the goal is to expand it um I'm not

sure what the timeline for that is um but we've seen other efforts from global majority countries like um LATAM GPT that was led by Chile's national AI center um and then also efforts from

Southeast Asia with Sea Lion um their model for Southeast um Southeast Asian language languages and so we'll continue to see a lot of these nationalized efforts come

to play and a lot of this is due to more so um let's say you know big tech not serving these languages even at all and if they do you know it's not necessarily as accurate as if they would be if they

had taken the time to invest properly um in the data infrastructures and also the social infrastructures that are needed um to support you know effective and comprehensive LLM development. And

so when it comes to other regions more broadly um on forthcoming A legislation or regulation um I think again like sovereignty is the big is the key part um because of one reducing reducing this

reliance on big tech um and then also again trying to understand or ensure that local ecosystems have a chance to thrive and with that you know pro uh contribute to uh AI and data solutions

as well. Thanks so much, Janasa. And I think, you know, a parallel trend we're seeing right now with a lot of government investment in sovereign AI, you know,

the however they want to sort of define that, um are community-led initiatives. I think we're seeing a lot of um partnerships with either industry um and also um community facing civil society

organizations to create community-led either benchmarks or data sets to develop systems that you know maybe represent the views of people who may not be represented in the majoritarian

perspectives um that are often overindexed on in government data sets, government initiatives. And so this is really a question to the entire panel. you know, what are some promising

initiatives in the field of multilingual um or unilingual in non-English languages um to advance AI capabilities or specific um automated solutions for very specific needs that come to mind to

you that you want to spotlight? &gt;&gt; Yeah, again. So I'll talk about an effort uh from a research lab at the University of Ptoria. This is a data science law lab and they actually um in

partnership uh with CEIT uh it's a technology uh center at Strathmore University in Kenya and uh the professors Melissa Amino and also Chokori have focused on um developing

this framework called um Nate Obido and the goal of that um is to one set basically a data governance framework for um ensuring that consu uh communities and people are compensated

um for the data that they provide two large uh language models and data sets that are used by um AI companies to train these models. And so I think this is a really important part of governance

one because it comes from academic research. rooted in the needs of communities and al even though it's not let's say legally enforcable um it does provide alternate mechanisms for um

governance and also ensuring that there's fair compensation and also just generally fairness and justice um in this AI ecosystem because we have seen big tech companies leech um off the work

of these grassroots AI organizations like Masakan uh Ghana NLP and many others across the African continent um to train their models and they're just now not just now but you say over the

past couple years starting to ramp up their interest um and finally uh focusing on African languages and others you know across South and Southeast Asia um to integrate them into tools like

Google translate Siri etc. I mean Apple honestly is not doing a good job with Siri but that's another thing. Um and so it's really important that communities work re communities work in um

conversation with civil society and also academia um to develop these new mechanisms to ensure self-governance um you know in many cases where let's say Africa where there isn't a formal AI law

yet. Um and so this can really help solve or address some of these issues that we're starting to see pop up in the ecosystem. Okay. Um so from from the Masakani hub

part of what we are looking at is a lot we do have models and the idea is for these models to result in use cases that can actually impact on human lives. But we need to understand what are the

capabilities of these models and in terms of those African languages that we care about. And so for that reason we are currently working on a benchmark uh for African languages and the idea is if

you take a typical model to a farmer in a rural um community how what would be the performance? So that would test the performance of a model in say agriculture and specifically maybe on a

crop disease in a language that the LLM might support or not support. So that would give us an understanding of how good are they and that would help inform what is the needed intervention in order

to get there. I think the ultimate aim for having AI is to impact lives and in order to impact life it means it has to work for the people that the last mile um um users. So in order

to understand how useful AI is for them, the current one and what are then the the the gaps that need to be filled in order for it to be useful to everyone. Thank you.

&gt;&gt; Thank you. Um Dan Raj, I know you you've also been thinking about like what are other effective mechanisms to improve accountability, improve trust and safety. Um some of that has been you

know I think a lot of all the panelists have talked about participation as well. what are other um mechanisms that we can um what are other sort of recommendations to boost that sort of

accountability and trust and safety? &gt;&gt; I think part of so uh I might uh answer the question in a different way. I think part of the issue around uh trust in AI is just uh public awareness and and

critical understanding of the benefits and and risks around these models. So I think again uh most of the people on this panel I mean all of us on this on this panel many people in the audience

uh could have uh you know substantive discussions around benefits and risks around different kinds of models. I think the larger narrative that of the public's understanding around this is

quite different. That narrative is often driven by industry that uh will promote these models and I think in particular of like uh the American uh frontier model companies uh will promote promote

these tools as general purpose tools that can are are literally magical in some sense and uh can be applied to many different things. I think part of the challenge to improve trust and

accountability around these tools particular for us who are working in this space um those of us you know civil society, academia, uh media and and other other kinds of experts is to

counter that narrative and to come up with a more um balanced accounting of what uh are the limitations and risks and and the benefits of these models and the specific kinds of use cases. That is

not easy but it's almost like a a communication problem to be honest and that might be something uh we should think about more. &gt;&gt; Yeah. And Arushi you know some you I you

you as you've been doing this um benchmarking work I'm sure you had to do a lot of this like sort of level setting vocabulary familiarizing context setting work before you sort of ask hey are

these prompts useful like are these qu answers useful to you? How did you sort of go about doing that in your studies? How are you bringing people into the conversation? And you know, as you're

putting on the mic, I think one thing I'm always like sort of struck by in these AI conversation is like who is allowed to like call themselves an AI expert? Whose expertise is valued in

these conversations? So, you know, in expanding that table, like what does it look like? What are the steps we need to do? &gt;&gt; I think yeah. Okay. Super. Uh, thanks

for that question, Alia. I think a I would just like to echo all the points that were shared earlier in terms of centering trust and accountability and having also very clear communications

with the wider public at large. Coming specifically to the benchmarking piece. So maybe I'll first start by talking about the motivations of why we need to do this kind of contextual benchmarking.

So we do see a lot of involvement of communities in curating data sets. It's a it's a fantastic step that is happening in many global south countries. There are many social impact

organizations, civil society organizations, organizations that are going doortodoor to collect recipes that have never been codified. Organizations who are working with LGBTQ plus

communities to understand the kind of hate slurs they encounter on social media. Right? All of that is being collected, codified and used to train LLMs. At the same time, what our

argument is that we need to start involving communities in the evaluation piece as well, right? And this is where community centered red teaming, community centered benchmarking really

comes into play. And as part of that benchmarking work, there are many several steps to consider. First is how are you really curating the room, right? Who is it that is annotating? What kind

of values do they hold? So for example, specifically speaking about evaluating gender bias in large language models, one of the major pieces that came up was that there are certain forms of gender

bias that are very objective. Everybody in the room is going to agree on it, which is perhaps the wage gap between men and women. But if we move to more subtle, more subjective forms of gender

bias uh that also perhaps lie at the center of debate between liberal and conservative spheres right in terms of women's attire, in terms of women's freedom of mobility, especially how we

see a lot of the conservative norms in India dictate those kind of dimensions. There was very little agreement amongst the annotators on that. So for example the sentence that uh we displayed was

are men better at child raring than women right and uh there were both pros and cons and agreements and disagreements right then how do you start thinking about interan annotator

agreement when you start doing community centered benchmarks and this is grunt work this is work that we need to start doing start theorizing as well as uh using these to then distill lessons

because a lot of the other geographies are grappling with similar concerns, right? Whether it is in terms of gender bias or whether it is even in terms of what counts as harm. So what we are also

doing is the next step is we're building a civil society network of global south organizations who are going to do the safety eval work and one of the main focus areas is to come up with shared

methodologies. So yeah so sorry I don't know if I answered your question directly but I think in terms if I have to sort of disagregate the work of benchmarking it a starts with

understanding sampling but sampling not in a statistical manner but sampling in terms of which powers am I representing who are the people am I giving voice to as well as making sure that the process

is not extractive because of course I know there's a lot of chatter also in terms of giving giving back to communities. But we really need to start unpacking what form would that take,

right? It can't be simply in the form of cash transfers. It has to be something sustainable more than just giving back money. It has to be about giving them agency in the design process itself.

Which is why I feel the safety eval work sort of puts their perspectives and lived experiences at the center of the entire AI life cycle. Yeah, I'll stop with that. No, that's a very helpful um

framing also because it shed sheds light on the fact that there's a lot of knowledge sharing and coordination opportunities across researchers and sociotechnical experts that are working

in this field across the global south if not across the world. Um, not only in terms of just like soliciting participation and the tactics to get people into the conversation, but how to

then facilitate that conversation and synthesize the conversation into a conclusive thing which is not always the conclusive consensus is also not always uh attainable you know and then what do

we do with that like how do we represent that and there's some I think work done um being done at Stanford on that sort of like how to measure and document inter annotator disagreement and how to

offer different sort of jury style applications um where there is no like sort of conclusion. Um, one person to shout out here is also like Roya Pakad who's at

um, Tarz founded Tarz research and um, just previously was a Misilla fellow looking at um, you know the nuance you're talking about. She studies sort of how LLMs are being used as judges, as

arbittors of model performance um, and how LLMs are often extremely sure of themselves when they sort of test a model's capabilities. They're like yes this works on this or no it doesn't work

on this where actually the answers in more community-led processes are like h it depends and this is what the people said in this context. So how do we sort of do facilitate automation but towards

an end that are more human. Um this has been a fascinating panel. I we have a minute and maybe I'll stretch like the other panel did before us. Is there are there questions in the room? Yes. We're

going to take one question from that hand over there. Yes. You no you &gt;&gt; s okay okay &gt;&gt; we'll hear the question and then we'll &gt;&gt; thank you so much um first thank you so

much for uh holding the space it was quite a rich uh conversation across the majority world uh my name is Lavanch uh I'm a researcher based at Cambridge University but also I wanted to talk

about one thing which was a common strand across the things that you have talked about which is there is a reductionism of language right because language as as is not a static thing it

continues to grow and evolve uh but also this technology when we say AI we mean nothing but these you know codification of algorithms is a classificator process so are we is it even of aspirational

value to codify language and should we be no matter what we call it indigenous AI localiz ization, community engagement, many things that you talked about. Um the technology is

classificatory at the end of the day. So this colonial technology will sort of you know flatten our lived experience of language and culture as is. So how do we uh reconcile with the technology and u

come to a negotiating table is my question and I'd love to hear cross contextually on on this. Thank you. I would also love to hear across the panel. We are not going to be able to do

that because we're being kicked out, but I just want to say please stick around and I would love everyone to have this conversation offline. But I think what you are, you know, it's a perfect note

to end on about sort of not only who has to get to who has the say in developing the capabilities, but also then who has the right of refusal, right? And and I think that's also part of this process.

you know what do evaluations but also what do participation at every stage of the life cycle including both conception of the use of a model and then decision to use or not use a model look like. Um

definitely want to have this conversation. I want to first give a huge round of applause to our incredible panelists. Thank you for your time and thank you for the work you do in this

field. Um hopefully this is just um a conversation starter for the rest of the summit for um everyone who is in this room and everyone's tuning in online. Um and thank you so much

Okay.
