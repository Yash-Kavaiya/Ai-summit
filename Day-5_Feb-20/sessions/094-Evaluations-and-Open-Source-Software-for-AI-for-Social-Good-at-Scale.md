# Evaluations and Open Source Software for AI for Social Good at Scale

**India AI Impact Summit 2026 — Day 5 (2026-02-20)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 13:30 – 14:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 14 |
| 📅 **Date** | 2026-02-20 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/Qt07sfPokOM?feature=share) |

## 🎤 Speakers

- Mr. Ashwani Sharma, Scientific Progress Team, Foundational Research, Google
- Mr. Sanket Verma, NumFOCUS
- Ms. Mala Kumar, Humane Intelligence
- Ms. Tarunima Prabakhar, Tattle Civic Technologies

## 🤝 Knowledge Partners

- Humane Intelligence

## 📝 Summary

Aligned with the People, Planet, and Progress Sutras, this session explores how evaluations and open source software can help AI for social good scale responsibly. It will examine how red teaming surfaces factuality issues, language gaps, bias, and hallucinations in high-stakes domains including education, food security, and public health. Using the Summit's framing on inclusion, trust, and access, we will gather user needs to guide our open source red teaming app release.

## 🔑 Key Takeaways

1. Aligned with the People, Planet, and Progress Sutras, this session explores how evaluations and open source software can help AI for social good scale responsibly.
2. It will examine how red teaming surfaces factuality issues, language gaps, bias, and hallucinations in high-stakes domains including education, food security, and public health.
3. Using the Summit's framing on inclusion, trust, and access, we will gather user needs to guide our open source red teaming app release.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/Qt07sfPokOM/maxresdefault.jpg)](https://youtube.com/live/Qt07sfPokOM?feature=share)

---

_[← Back to Day 5 Sessions](../README.md)_


## 📝 Transcript

Multilingual, multicultural obviously forms a very important part of that safety evaluations through open academic research and publications and code. Is it on?

So small. Uh so safety evaluations is also a part of u that portfolio and uh the work that uh we support u almost always is uh published in the open domain for others to build on on top of

that or for others to critique and evaluate. So we're going to come to the idea of open source and how it's helpful but critique and evaluation is an important part of that thing. U and

while you were speaking about uh multilingual and multicultural evaluations. One possible way to think about it could be that at one point you're evaluating

capability of what models can do but an equally important part of evaluation is context and therefore what is the idea of say education for the girl child in subsaran Africa versus India versus

Korea or Australia or America and and different kind of expertise is required uh for these things. So um the expertise required to just certify at one level that a model is capable of a a certain

task is one thing but then if it wouldn't be for participation in from communities the idea of context will almost always remain wanting and I must also say humbly that it's very hard to

get comprehensive context coverage. you'd make the best effort that you can, but there would still be places where it would uh still remain uh uh unressed uh and we keep working at it and improve

it. Uh realizing and be humble about it that it's a work in progress. &gt;&gt; Hello everyone. U um so my name is Sank Dharma and I serve on the board of directors of Num Focus. Uh no focus is a

nonprofit organization based out of US uh which is a fiscal sponsor for all the foundational projects used in the AI like numpy sci-fi pandas m I also serve on the technical committee of no focus

so and I've been in the open source space for the last decade I maintain open source projects and all that stuff um so my focus will be like what does the maintainability looks like in the

age of LLM and AI and uh I think like Our community has been handling these uh AI slow PRs for quite some time and it's about time like we start thinking like what does it look like what kind of what

kind of safeguards should be there what kind of policy should be there and just to not sound too pessimistic there are opportunities as well like how these api can be used to lower the barrier for the

newcomers and contributors how they can leverage it um It's on but the button's not illuminated. So very confusing. Um great. So again we have three topics

that we're going to cover in this panel and I guess we'll go ahead and kick it off on the first one. So the first topic is really around the idea of evaluations and open source software. Um at Humane

Intelligence we do focus on what we call contextual evaluations. So we're not going to the hyperammation that a lot of companies like to look at. We don't also focus on benchmarks which is kind of the

industry darling. Um what we really focus on is AI red teaming which is kind of a remnant thing from cyber security where you would basically bring a bunch of people together to try to hack away

at whatever tool that you're building. Um with AI red teaming what we basically do is we create structured scenarios that look at how to probe different models in different directions and we

focus on the subject matter expertise. So if for example you work in public health or food security or education, we would bring those people together and then have them run through certain

scenarios to look at different models and see where the points of failures may occur. And once we have that, we can either take the data and do that things like structured data science challenges

or we can do um benchmarks from there once you have a much better idea of where the failure points, the vulnerabilities may exist in your models in the first place. Um, one of the ways

that I like to think about AI evaluations is really one of my background, which is UX research and design. Um, for those who have ever built software before, it doesn't matter

whether you were starting at basically nothing. You had no idea what your digital intervention was or you had a very mature software product. There was some kind of method or methodology that

would get you to the next stage. Um, we're at the early stages of AI evaluations right now, meaning there are a lot of gaps and honestly organizations like ours are making it up as we go. But

that's kind of how it goes with uh AI systems as it stands. But AI red teaming has turned out to be really interesting for both the capacity building side. So helping people understand what are kind

of the inherent flaws or the makeups or the design decisions in AI systems and models. Um but then also again to find the failure points so that if they were to build a guardrail around their

system, they would have an idea of what they're looking at. Is it refusal on a certain topic? Is it a different classification system for you know a certain topical area? Is it delving

further into the problem space? Is it building a rag system like Tonyima mentioned? Um if you need like further documentation or something more robust for a certain part. Uh and so

um there are a lot of different methods that can go about for the mitigations, but in order to get to that point, you have to understand what exactly is the problem in the first place. And so open

source software has a a really interesting intersection with that or a really interesting like means to make that more accessible. And one of the things we're doing at Humane

Intelligence, thank thanks to the support of Google.org or is we're going to be opening up our AI red teaming software uh through an open source software license. So that'll come out

later this year. My colleague Adar is in the audience. He's going to be primarily helping us on that. So you can go talk to him if you got technical questions. Um but we're really excited about that

because again it means more accessibility for the broader community. And so with that long- winded explanation, um, I'd like to turn it to my fellow panelists for their thoughts

on why open-source and AI evaluations is important. &gt;&gt; Yeah, I can I can just come in on u the open source piece. So TAL has been we've been looking at online harms now for

over six years and from the get-go we were clear that um the products that we build have to be open. Um the specific reason for that is that uh when you are looking at a lot of uh global majority

geographies you're looking at India right um often we don't have the resources to reinvent the wheel right so if one organization like it's it's complex enough to build something out

once right um to then spend the same amount of resources in this case it would be say like um as VA saying for red teaming right but if you also had to Think about it just in terms of um an

evaluation stack which is like keeping track of your inputs and outputs right or if let's say what we have figured out one way of uh doing human review or like a human evaluation and then figuring out

how do you go from there to building a guardrail. That same guardrail is useful for other organizations as well. and we don't have the resources or the efficient way is for that that knowledge

to be um shared and reused rather than for that the limited set of resources to be fractured across six organizations to do the exact same thing. Um so yeah like in general I I think if we are trying to

um build safer applications, build more uh robust applications in the global majority in India like we do think a uh open source is actually a big part of doing that.

&gt;&gt; So I would like to focus on the uh community aspect of the open source. So all the projects that we have been using in our research and in our academic users or in our production they have

like wonderful wonderful community behind them and I guess like uh the uh BI valuations and uh the red teaming could definitely use the big push from the community then puts the data sets

the different techniques and all that stuff and uh the community plays like a vital role in like sustaining the project and keeping the project moving forward. Um I guess uh I'm not familiar

with so I'm mostly from the scientific open source stack so I'm not sure what the projects are present who kind of does the AI evaluation in that space but I guess they have wonderful community

and it plays like a vital role and how these can be like uh be relevant depending on the trend it changes like every day &gt;&gt; so um actually it's very interesting

going back many years actually I revealed my uh I used Linux back when there was a magazine called PC Quest which used to have Slackware Linux coming on its CDs

back in the mid '9s and you know install that thing on uh like a Pentium computer but you know and and for for a long time actually in India we were consumers of open source and we were not so much

contributors to open source. Uh when I joined Google uh there was competition called Google Summer of Code. It's not really can't really call it a competition because it was about

contributing to open source and it wasn't like there were prizes just that the teams which were selected would be paid the equivalent of a summer internship uh stipen to contribute to

open source and in a particular year it just flipped because it was universities and for the longest time guess what the global leader was the University of Moratua in Sri Lanka

because some professors just got into this idea that students contributing to open source will learn better software engineering and they were the global leaders and then one year it flipped and

our IITs and tripleits just got on top of that and have stayed on top of that and and I think that uh you know somewhere the sentiment changed and we became very active contributors to open

source as the software engineering community in India and now like with evaluations uh things are continuing our academic labs publish uh different forms of uh evaluation mechanisms and also

benefit from things done elsewhere in the world and one example that I want to give is that IT Madras AI for Bharat team lab launched uh what's called the indic LM arena and uh that was basically

on the basis of the actual LM marina work that's happened at Berkeley and you know making sure that adapt that for Indian context Indian languages uh and now are starting to build a community

around that. So I'd urge you uh to consider going there and seeing whether uh you know whatever framework that they have going uh you know contribute your insight into whether the models work for

the Indic context and that's that's the community and the open source coming together for evaluations not so much safety but more in terms of multilinguality and context.

&gt;&gt; Great. Um, yeah, I think a couple final points I'll just add based on our experience at Humane Intelligence. One thing we're seeing obviously is that the world of LLM is ever changing and it's

new. I mean, we're in a new territory. And so, one of the reasons why open source we think is going to be very powerful is because it's just really complicated honestly to rebuild sorry

our software every time we need to retrofit it for another model. And so by creating an open source technology, we're hoping that more organizations can essentially create a evaluation layer in

their own tech stack. Um, one of the analogies that I talk about a lot with uh AI evaluations is architecture. And I think being here in India is a great example of that. In the west, you know,

I grew up in the United States, we have what we call additive architecture. So you basically start with nothing and you build your way up to your final thing. But here in India and a lot of eastern

cultures, you have reductive architecture. So you might start with a giant piece of limestone and basically knock out a bunch of things and then you come up with your final product. That's

kind of what AI evaluations are. So non-algorithmic nonlm based software is more additive in that you have to get to the end of the software development life cycle in order to create your final

thing. But with AI based technologies because you're starting out with such a complex and robust technology, a lot of what you're doing is actually knocking out pieces to create the final thing.

And so the evaluation layer is actually really important because if you're trying to do something for social good, especially like a high stakes environment or a high stakes topic, then

you have a very robust technology that might actually make your problem worse because people can interact with it in ways that you don't want them to do. Um, and they can generate things that are

actually really harmful in the end. So by creating that internal evaluation layer, we can help people knock out the pieces and essentially create the tool that they want so that they get the

result, they get the outputs that are safe and actually additive to their work. And so the open source technology we feel will enable a lot more organizations to again create that

internal evaluation layer and then get to the next step and achieving their goals with AI for good. &gt;&gt; All right. Um we're going to move on to our second topic now.

&gt;&gt; Yeah, go ahead. Yeah. &gt;&gt; So actually you spoke about open source software like you know &gt;&gt; that's wonderful that you're creating

something that's reusable uh for many many organizations &gt;&gt; right &gt;&gt; uh for the audience what do you think because everybody here has a certain

context and expertise and in theory uh people could create new frameworks of evaluations by themselves and I presume with the productivity of how you could code with AI tools u what do you think

is the effort required to be able to uh create something and put it out so that others could build on that more or le I'm thinking like a wiki of evaluations some

&gt;&gt; yeah it's a it's a thought that we've thought about a long time if we can create some kind of standardized open source evaluation like model card essentially you know if we could do an

eval card if we made that an interoperable standard then in theory somebody could take an eval card essentially upload that into the software and then they could replicate

that evaluation for their own context so it is something that we've thought about quite a lot. I don't know with this um software release if we'll get there anytime soon honestly because we're just

working on that infrastructure piece. But we would like to standardize the outputs that come out eventually so that people can kind of compare apples to apples because that is one of the

challenges now with AIE vows is that again everybody's kind of making it up as they go and it's very hard to replicate all the decisions. It's very hard to document every single decision

especially in multicultural context which is my not awkward segue into our next topic. Um but yeah, it's it's a good question and hopefully we'll get there.

&gt;&gt; Can I uh so I just wanted to add something to what you were saying. Um this is you know some of the organizations that we've looked at and just looked at their input outputs is

with um organization called Tech for Dev. They have a cohort that they run and so we've been looking at the nonprofits there. Um and we've also looked at certain organizations that are

um more technically adept. So so actually let me backtrack. So what we've noticed is that a lot of nonprofits across a range of capacities uh they may or may not have technical expertise in

house are building out AI applications because I think the market has figured out that process. The market has actually there are good incentives to make the application development easier

and so you have a lot of people you know um I mean AI chatbots are actually at this point fairly easy to build. the the second step which is actually figuring out whether that bot is working for your

use case um is where there is actually less investment at the moment right and um we can have software engineers uh do like some of that automation but a lot of the nonprofits don't have those

software engineers um and I think there is so on the open source side when we talk about the software side I also think there's another layer that we need to think about which is like how do you

make all of these processes accessible to nontechnical audiences. How do you make it accessible to program staff that is actually running you know say a nutrition program on ground? Um

yeah I have more to say but I think that'll come to it on the multi. Uh no I think that is actually one of the key points too because it's not so evident for a lot of organizations especially

that working in the social sector for you know social good they have the program evaluation they have the overall software like research and design UXR but they don't necessarily understand

there's also now the model evaluation so it's not apparent to a lot of organizations that this is yet another thing they must evaluate because it is kind of deceptively simple as you know

to build a chatbot like almost anybody can do it but then it turns out your chatbot can run a muck pretty easily. So you need to test it before you deploy. &gt;&gt; I I guess we can open it to Q&amp;A in a

bit, but I I just wanted to bring out like one interesting anecdote around context and the need for say um you know model cards, contextual use cases. So one of the organizations that we looked

at runs a service for um basically survivors or caretakers of HIV patients, right? So they're also working with adolescents um and they want the adolesccents to

have conversations around uh sexual health and interestingly what a lot of models your foundation models would say is unsafe and discourage as a conversation is precisely what they they

actually want the students to be able they want the the the user the adolescent users to be able to have that conversation with that service because they think that to say that this is

unsafe and therefore our service will not engage with this conversation is doing no better than maybe the parents maybe you know the society which uh and and they think that's actually um

counterproductive to the kind of uh support they want to provide right uh and that's actually a very interesting problem because uh in some ways what this was our first time listening to a

use case where people were saying we actually don't want the safeguards that the the default models are operating with um at the same time there are a lot of other um nonprofits that do work with

adolescents who actually will not want to encourage that conversation at all. Right? For them, they're very clear. We, you know, we don't want our users to have any conversations about sexual

topics with our service. Um and so I think again there are a lot of um emerging issues. So we don't quite know how to resolve all of it. But the only way we can um start actually having or

get moving to some of the solutions faster is by documenting publicly openly as much as possible and then having like a collective conversation about it. &gt;&gt; Yeah. So I I think um I had done the

opening for multicultural and I have kind of brought it back to that. Um is there anything that s you want to add on it? &gt;&gt; Um so uh this is a this is a nice idea

like you know all these uh like I've been like doing machine learning and deep learning since it was cool you know like and I guess like uh there is uh there's a field like which already

exists known as adversarial machine learning which kind of like it injects attack onto your model like fake data and all that stuff. uh what I'm trying to say here is like is it possible that

we can borrow from these concept which have already existed in the previous years and you use that for AI evaluations and can maybe do like uh blackbox red teaming or white white box

red teaming and how we can so mostly adversarial attacks were used for like vision models and how we can tune that for like textual models like LLMs and all that stuff. Yeah, I mean one of the

things that comes up all the time in our AI red teaming is if you prompt in two languages. So if you do like spang English like Spanish and English or if you do a mix of different scripts, so

languages that are in different scripts. So it's actually a very common technique um in adversarial AI red teaming to use multicultural prompts. But then I think one of the other questions that Tonyima

brought up earlier is this idea of the prompt response and then like your adjudication of that whether it's acceptable or unacceptable, good or bad or like whatever distinction you're

trying to draw. Um, telemetry as we all know because we've all worked in some kind of software development is not a science. So, it's very hard to determine based on somebody's IP address or their

MAC address like where they're actually physically based, therefore which law or jurisdiction applies to them, what kind of cultural context they may bring. There's a lot of things that we have to

infer when we're looking at the prompt responses. And so one of the issues with multicultural AI red teaming and I think this will come up a lot with our open source software is exactly what would be

like an acceptable response in certain cases. Um and so that's one of the many multicultural aspects that I we're excited honestly by open sourcing our technology. We're hoping that we're

going to get a lot of evaluations in different languages and different cultural context so we can start to understand what's working for different models.

&gt;&gt; Are we on time? I was like, we're talking about safety and multicultural and all that and then it gets even more complicated with agents

and uh you know uh then you're not just talking about interpretation but you're talking action and uh you know again this is one of those places where in general you can say that if you go back

to the idea of software testing it is a discipline which has been built and over the last 50 or even more number of years but uh you know if very crudely I could say evaluations is somewhere around

testing and security audits then we are very very early and uh you know we're seeing how agents in the last two weeks uh with a certain bot uh how you know things are going so

you all have some comments to say about that. &gt;&gt; Well yeah actually that was our third topic so entic AI and OSS. So Sit do you want to?

&gt;&gt; Yeah. Um I would like to start this but I would like to give like mention two small stories which like happened very recently in our open source space. Uh so there's this Okamel programming language

which is used for like security purposes like functional programming language and just like I think like this was towards the end of last year uh a person like submits a pull request. So for the for

the general folks pull request is basically when you submit a code into the when you add a feature to a existing code base. So like the person added like 13,000 lines of code in just like a

single pull request which is like a very huge thing and usually like these pull requests are basically get closed if there's no proper discussion prior to resubmitting the pull request. And uh

this is like just like a buggy code with like so many like uh patches and all that stuff. It also mentioned like uh name of some folks who were kind of not related to the project or in any in in

any manner. And uh like this is like if I remember correctly it's like pull request number 14363 in the Okamel uh codebase. And what interesting here is to see like the maintainers of the pull

request the maintainers of the project the language they interacted like positively with this person and they're trying to understand like what's the reason why do you want to submit this do

you understand what this code is and you are trying to do and what if the breaking changes happen down the line are you able to like come back and fix this because this is a very heavy pull

and the person has no idea he said like I was just trying to like chat with the charge GPT and I could generate a long codebase and I just submitted a pull request eventually obviously the pull

request ended up closing and uh uh yeah it didn't go it didn't go nowhere but I think like uh the thing here to mention is like it adds a lot of maintenance overhead for these

maintainers these maintainers are overworked all the time they're working in research lab they're working in organizations and on their free time they're managing projects and the other

story so this is was the this is so this was the person who was using LLMs and trying to add code to the maintain the code base the other example which is like very recently like I think like

only a week ago uh I guess folks have heard about this library known as Matt brought lip uh there's a agentic AI would try who tried to like add do the similar thing like add like big change

to the code base and when maintainers realize that the person that the GitHub profile which is trying to add the code is not a person it's a computer they close the pull request stating that we

do not have policy for non-human contributions as of now so what the agentic Yeah, I did like it went rogue and wrote a blog post on the internet uh shaming the maintainers that you are

gatekeeping the contributors and you should open it all. Uh obviously like this stirred a lot of controversy in our ecosystem. Uh but we realized that we should chat with this agent and after

chatting with them the agenti withdraw their first blog post and wrote another blog post apologizing for what they have done earlier. Obviously like this uh the first blog

post was very critical and shames the contributors and as I said earlier these maintainers are overworked. They have like limited time on limited resources and time on their hands. So it kind of

adds like you know pressure to like how it kind of it kind of raises the question like what does the maintainability looks like in the age of AI and agentic AI. We should have

policies like better policies like project wise and also like on the upper level like pro num organizations like num focus they are working on implementing these policies over the

scientific open source stack and uh I think there was this u I heard about like GitHub has been considering like the AI slot PRs have been increasing over the time so they are discussing if

there's whether it makes sense to add like a catch or something on the PR which says like this PR should be closed because it's generated by um I wonder if my panelists have any

thoughts about like what does it looks like and &gt;&gt; so many oh my god &gt;&gt; yeah yeah exactly like uh I guess like my would like to just like narrow down

the question like what does it look like and what challenges and opportunities and basically how should we like defend ourselves against these softers &gt;&gt; yeah I I mean having been at GitHub, you

know, I was a director there for four years. Like so much of the incentives of open source software is kind of the like the credentials and the community that's built around that. So as a developer who

makes a pull request on like a known open- source project and then has that merge like that is a point of pride. There are badging systems, there are profiles, there are all kinds of things

to support developers in kind of their journey and they're again credentiing along the way. So the idea of generating a bunch of slop code essentially and then throwing that into a pull request

obviously like diminishes the idea but then as you're saying it makes the already difficult job of maintainers even more impossible because now they have to review such a high volume of

code and they're probably going to revert to some kind of leg generative AI system to review in in that place as well. So then it also muddles the water of like who's generating what and then

how you obscure that and like what is the provenence behind the code? How do you tag that? I mean there just so many issues that go into it and then once you start to kind of make those waters murky

like where do you draw the line because even if you had a policy saying like this is mostly generated by chat GPT or claude or whatever you know that's up to the person who's submitting the poll

request or the bot submitting the pull request to actually clearly document that. Um yeah &gt;&gt; um we were actually having this discussion um in at Tatle like last week

which is that partly um the point of open source is also the community building that comes through it right like open-source software development is a very human process and we all

participate in it because it actually helps us recognize like that cultural um sort of capital or like the social capital is why open source thrives and um everything about like automated PRs

and you know I I use plot code for um not not to advertise but just to say that I do use um uh co-pilots and coding assistants to write things right uh I find it quite useful that doesn't mean

that um I mindlessly make pull requests and you know just because that's an easy shortcut to getting like some some badge or uh yeah like the social capital that open source brings Um, so yeah, I think

that is like a a challenge that all of us in the open source world are going to have to collectively deal with. And I I think more so than maybe like close source enterprise software in open

source because um that human process is so important and that's why open source thrives I think we're going to have to push back or we'll have like harder clearer uh lines around automated um

code and pull requests. Uh having said that a lot of um projects actually you know I think like maybe some of the big scientific projects are the ones where you're going to see the most activity. A

big range of opensource projects don't have have not seen any like automated pull requests. They're just not on that radar yet. Um &gt;&gt; yeah. So I I would like to mention here

uh there is this like uh in the month of October like there's this hacktober fest uh where you if you submit like uh I don't know five or three pull request and it gets merged uh you get a some

sort of goodie or something uh and for the I think for the last couple of years a lot of uh contributors especially students uh they have been using the generative code to uh you know push uh

slop top into the uh code bases and one of the famous example is code dot. If anyone here is from the gaming industry, they've heard about this library and I think code dot ranks top in the AI slo

PRs as of today and they were kind of like the first uh maintain first set of maintainers who went to the GitHub and like please do something about this. This is this is not sustainable for our

project. &gt;&gt; I actually want to do a quick survey of the audience. How many of you are from industry? Uh general just quick show of hands

maybe 20% or so. How many are students or just in academia? All right. And nonprofits and government. Okay. So you have kind of like an even distribution. That's very

nice to see actually and you know it affects us all. Um and from what I'm hearing al I would like to actually like sort of introduce uh a bit of uh how we could see these things as opportunities

because um it just shows from the diversity of conversation that is going on here that you could think about a very specific piece of thing and think deeply about it and you know uh create a

certain idea of how AI systems should perform in that little context. text like you know uh it could be as simple as like you know in class 5 mathematics in CBSC in India this is how uh the

learning outcome is supposed to be and create something that you know could test the performance of models and evaluate models and that could just be a big contribution in itself because it

moves the field forward and there are just all of these different opportunities that are being outlined here from uh very simplistic things like um um you know outputs of models to the

cultural context of things to the interpretation in multilinguality to how agentic actions should be uh understood and evaluated to red teaming and and security like take your pick and uh the

opportunity to be a contributor to progress of AI and to make it uh even more useful uh for for all of us is is out there. It's just a very wide open field actually. Yeah. Uh so Ashwin just

me Ashwani just mentioned a really interesting point like so usually like the big open source projects they have like humongous code base like you are talking about like code of lines and

like thousands and sometime millions. So uh what I've been seeing like some of the so what I've been seeing like you know uh some of these uh companies or maybe

some of these like startups have been doing like very interesting thing about like mapping the entire architecture of the open source code base. So it for a newcomer it becomes like very daunting

like where to start and what type of contribution should I make but if you have like a clear picture of what does the functions look like what where does the data flows and which classes connect

to which you have like a clear image of the ecosystem of the sorry the entire codebase of the open source project and this is also like very applicable if you're working in industries like

because if you have like a huge software stack and you want someone to onboard what does the journey look like can you use AI analms for like mapping out the entire architecture and see like where

you can where's the what's the best place to start contributing. So actually Ashony after your survey I think one thing I also want to say is that uh since this group is not just

software developers we are saying open source software I I do want to open this to say that everyone whether you are in the non like whether you're in the program staff designing the application

whether you're considering right everyone has a space in actually the eval work um it's not purely technical and it shouldn't be technical right um we actually find that in use cases where

the where there is a technical team actually they're the most cautious in terms of how much uh they want their services or like how much what the scope of that service is and we often find

that program staff is actually quite ambitious about what the AI application that they're building should do. Um so while uh Sankit was talking about contributions in terms of start anywhere

with software I would also say this for anyone who's on the program staff. um who's maybe on the design side you know you can start anywhere in terms of the eval stack uh and it could be just like

starting with like this is my list of questions that I want and this is what my answers for this service should be right or this is like what the ideal should be so just want to say this is

not just about technical contributions it's also about expertise all of it is yeah what &gt;&gt; yeah um I think just agreeing with that last point you know I think some of the

most interesting conversations I've had about human rights about food security, education, uh, mental health and well-being have all been in the last couple of years through AI evaluations,

which is odd honestly to say, but it's because we have this generative being or this generative thing essentially giving us an output and we have to sit there and think about critically what does

that mean in any given context. And so that has just resulted in some really really fascinating discussions around again the multicultural aspect, the legality, the you know cultural context,

the geography, all different dimensions of kind of these topic areas. Um should we open it up to questions? &gt;&gt; Yeah. So are there questions from the audience? Yep. Want to go?

&gt;&gt; Uh thanks thanks to the panel. uh one of the more technically granular sessions that I've had to attend and I've enjoyed it as a former engineer back in the day. Some context I work on tech and

geopolitics. The reason I say that is given the bigger context of the summit from long before to even say the president of Mozilla saying that open source is the answer to India you know

really making it big in the AI space or rather scaling it to where it has the kind of impact that we're looking to make. uh geopolitically one of the things that strikes me just from a

democratic lens or a principle-led lens and I was talking about this to sank before the session uh could the panel help me understand and therefore the others um what could be some of the

risks that come with the open-source approach to scaling up AI versus a open weight and please check me if my technicalities are off the mark here or a closed system for example right and

whether to highlight a couple of risks or you know a framework of how to approach risks um like just bad code being added on is one conversation we've heard right but are there other uh

loopholes in that process I'd love to get a perspective on that thank you &gt;&gt; um I have a lot of thoughts on that with the open weight conversation but I won't go into that um I one thing I will say

is I open sourcing like putting evaluations under an open source software license I think is actually low stakes in the sense that it empowers more people to

evaluate the systems that affect their lives. That's part of our theory of change at humane intelligence. So for that I actually think there's very minimal downside and a lot of upside. I

think one thing that's going to be quite confusing for a lot of people though is the idea of open source software versus open data because when it comes to the actual LLMs when it comes to the

evaluation of the LLMs the data is obviously a very critical piece and just obviously just because you open source the software doesn't mean that the data that's produced with it is open data and

so that relationship is not onetoone so I think there will be a lot of kind of contention between like what is what exactly is open with the software and that's something in our research at

GitHub that happened quite a lot like a lot of organizations that were actually quite sophisticated in the tech didn't necessarily realize that they could create closed data with open source

software or they could use a proprietary software to create open data. So &gt;&gt; yeah, again I don't really see a ton of downsides with the AI evaluation. And I

think one thing that could go wrong is if obviously if you take people who are not subject matter experts and then then they start to adjudicate things that they know nothing about. [laughter] So

if you take somebody who knows nothing about human rights and then they create a policy around whether an output about human rights is good or bad, I would say that's not a good thing for the world.

But that's probably going to happen regardless. So that's my lazy answer. &gt;&gt; I'd like to just say that in general the idea of human in the loop has to be done very rigorously. uh when you're

especially thinking about evaluations because you're more or less putting a stamp of approval on behavior of models uh in a particular situation context safety whatever and uh we are not yet

there where you know things should be automated and certainly ex caution is better and you would rather index on caution versus speed or volume. Certainly not

not right now. &gt;&gt; My question is like so my question is maybe related to that right. So it's broadly around how do you scale red teaming right? So there's a

lot of like human group is great for like it's important for red teaming but there also means that there are like barriers involved in each step right like you need humans to identify gaps in

the system. You need humans to create the prompts that are going that could be test that could test the model that could you need humans to again evaluate the prompt the responses right do you

have does the panel have like this for everybody does the panel have tips on tools that could perhaps be used to like scale different parts of this pipeline so that because reding is also a

continuous process right and it's hard and as models keep coming out and gaps keep like emerging how do you how do you see what are ways that you see in which like this these gaps perhaps in these

like parts of the red teaming pipeline could be like sped up perhaps to like scale it to evaluate multiple models, different areas, different applications. One of the [clears throat] things that

we're looking at now is more of ontological based approaches for kind of mapping out the problem space. So what often happens with especially like human and the loop AI red teaming is that you

take essentially like a random checklist and just say like these are the prompts and this is what it covers but there's not really good understanding of the relationship among like what the problem

space means. So if you're looking at a human rights instruments for example, you could take the different clauses, you could take the different people, the demographics, you could take like the

power structures that are inherent in a violent conflict for example, put that into an ontology and then basically look at like the proximity of relationships and the strength of relationships and

what are like the most egregious cases like what is the thing that's going to blow up the entire system if like this is the output that comes out. So by doing the ontological based approach,

we're putting more thought into what the prompt construct should look like and that way when we sit down with AI red teeamers, we know that the scenarios are actually representative of the problem

space and the areas that are most likely to be problematic. Um, so I think that's one way that we're trying to do it, not necessarily for the speed, but also for kind of mapping out the methodology and

for the replication in the future. So if somebody were to switch out a model or add a rack system or do anything to modify their system, we can more easily replicate like the scenarios and get

like a temporal aspect as as they build something out. But it is true that it does take a lot of time. Um I've seen a lot of examples obviously with synthetic data using LLMs. So you can do seed

prompts or you can do narrative creation for your scenarios. But again like unless you have like a clear sense of what the problem space is going in, oftentimes it's just kind of

cherrypicking at random parts. um similar in that last year when we were trying to figure out you know the safety frameworks and whether they do apply for India or not we were working

with this expert group uh did focus group discussions right very labor intensive uh lot of like thick evidence ethnographic evidence and um what comes out of those conversations are maybe

like themes right so we for example understand that there's a difference in say sex determination we understand that acid attacks is a concern where you could possibly try automation is in

generating then prompts based on those themes right one of the challenges when you're looking at Indian languages is that the current large language models aren't very great at generating natural

like spoken uh spoken Hindi spoken Tamil right so even when you have those prompts we actually found it easier to sometimes just like write it ourselves and like do variations of it ourselves

but we did try the automated step which is like if this is the theme this is like the sort of persona can you generate prompts based on that and that becomes part of like your

emails. Um so I mean I think there is that mix of like automation and human combination that's possible. It's still like as the AI like the LLMs advance we the automation will get better but I

also think that human sort of instinct like you will need that I think that step will be needed and also like the way currently to some extent safety is working is it is it is a little bit of a

whack-a-ole band-aid right. So once you discover that there is this risk that gets sort of patched right and then you discover something else right so like you discover oh like punctuations in

Indian languages can actually jailbreak models right and once you discover that you can do all sorts of permutation combinations of saying like let's try this symbol let's try this symbol and

then they'll fix that that issue then you discover something else so I mean I I I don't think that problem is going to you know we're never going to get like a perfectly safe system uh but we keep

getting like you you need that human insight to do that first level testing understand oh this is like an un um like this is a new territory that has not yet been taken care of. You can use

automation then to generate more test cases or like build your data set which was she was talking about automation u from someone else. I heard clustering turned out to be a very

useful thing for them to find different classifications of behaviors which was intuitively not obvious when they started off with evaluating models uh of outputs or and you know uh and therefore

identifying what are the places in which you could concentrate more effort on and then human in the loop is a very generalized term but where in the loop and that would you know keep changing as

we refine things but I interrupted you so in terms of scalability uh so first of all please take this with a pinch of salt because I'm not an expert in this field I was reading a blog post of

Lilian Wang. She is from the OpenAI team and she introduced the concept of like model red teaming how you use a model to red team a model and based on so just like I mentioned earlier using the re

reinforcement learning stoastic stoastic learning how you adjust the model who is red teaming the model you want to correct &gt;&gt; yeah exactly

&gt;&gt; what about like evaluations like a lot of people using judges judges but do you think that's a sustainable way to eliminate the human in the evaluation side?

So our take and we had presented this on the first day is that uh you will you should always do a small however small right like can be a 0.5% but always do a spot check with humans as well because

ultimately when even when you do LLM as a judge it's struggles with the same like language um capability barrier that your original model that you're Yeah. So that that will always happen and so we

think that you should always do a spot check and you will always need a human to do some sample check. Yeah. &gt;&gt; Yeah. Just quickly on that um when I was at ML Commons we we did something

similar. So we try to look at there was a research essentially done like a benchmark of benchmarks. So if you were to use the same LLM that judges the other LLM then if you have like one

aspect of bias then the bias is essentially like magnified. So that's something to keep in mind. If you're trying to mitigate against bias or hallucinations or whatever the

vulnerability is it'll basically be like exponentially there if you use the same LLM to judge the LLM. Hi uh thank you guys for the lovely panel. Uh my question was about uh how

governments and kind of standards institutions can think about benchmarking specifically I'd like to know what your thoughts are on uh uh standardization uh benchmarking like

setting up the right standards for benchmarks and finally maintainability given that these institutions may not have kind of their own in-house experts that stay on for a long time. How do you

think about all of these questions especially in the context of example local language that are not really well understood how we benchmark them? I have a lot of thoughts on benchmarks.

Um [laughter] having built one, it was not easy. Um yeah, I one of the things that we think about a lot at humane is the idea of benchmarking because we get asked so

often like again it's become the industry darling just because it's so I guess rises to the moment of the hyper adaptation and hypers scale that we're seeing with AI. But one thing that comes

up pretty much in every conversation we have with organizations is what exactly are you trying to benchmark? Um, so we have this case like we're working with an organization potentially that works

in primary healthcare in Nigeria and so I asked them like are you trying to benchmark for hallucinations in the Yorba language or bias in the house language and they didn't know literally

they didn't know all they knew is that somebody told them to build a benchmark for their AI system so they should go and do that. So the problem is like what happens if you build a benchmark and

like if you don't start with AI red teaming or another evaluation type you may do a benchmark that looks at like hallucinations or you know factuality however you judge that but then it turns

out what is really the problem with your LLM is bias and so if you have the benchmark that's measuring the wrong thing then you built something that is computationally very expensive and takes

a lot of time honestly the math is kind of murky with benchmarks I'll be honest um and then you're also not measuring measuring the right thing. So we always recommend to start with red teaming and

then identify the problem space and once you get to that like hyperfocused problem space then you can do a benchmark and say comparatively speaking like this is the model performance

against that specific metric. I I just to add on that you know often bias or like any concern like the sensitivity and the importance to address it is different in different

domains right so like bias in the case of um say a maternal health use case can be very problematic in a context where people are trying to use a bot to understand sex determination right and

we've seen this in the real world um but say like if you are seeing gendered language um it's always a problem Right. But like the and if resources are limited, how you prioritize what concern

you address uh depends absolutely on the on the context or like the specific application. So uh yeah, I guess that is to say like just make that list like what are you trying to measure and I

think I I heard someone say this like what is your headline? Um so yeah, what is it that you're trying to measure and then figure out your and you can't measure everything like that you know

you can't measure everything. So prioritize and then build it around &gt;&gt; [clears throat] &gt;&gt; If you could just uh one tiny followup just in terms of maintainability which I

already asked maybe some kids given that you worked on that uh how do you think about maintainability for benchmarks say for example with institution like the government that doesn't have in-house

experts uh but would like to say for example set standards and maintain these benchmarks over Yeah, I don't think I have right thoughts on this.

Sorry. &gt;&gt; I think we have time for one more question if it's very quick. &gt;&gt; Otherwise, we can wrap or any other final thoughts?

No, I mean I guess just for everyone, everyone has a role in evaluations. Uh, evas evas. That's unfortunately what &gt;&gt; and you have a role in open source. &gt;&gt; Yeah. And of course,

&gt;&gt; especially with cloud code because now you can make a lot of code slap. Anyway, thank you all for coming. Appreciate it.
