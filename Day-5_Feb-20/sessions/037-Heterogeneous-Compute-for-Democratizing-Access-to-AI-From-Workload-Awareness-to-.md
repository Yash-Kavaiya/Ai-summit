# Heterogeneous Compute for Democratizing Access to AI: From Workload Awareness to Scalable Deployment

**India AI Impact Summit 2026 — Day 5 (2026-02-20)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 10:30 – 11:30 |
| 📍 **Venue** | Bharat Mandapam | West Wing Room No. 6 |
| 📅 **Date** | 2026-02-20 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/A5-023Szooc?feature=share) |

## 🎤 Speakers

- Bhawna Agarwal, Hewlett Packard Enterprise, India
- Daisy Chittilapilly, Cisco
- Dr. Durga Malladi, Qualcomm
- Gokul Subramaniam, Intel India
- Kazim Rizvi, The Dialogue
- Prof. Kamakoti V., Padma Shree, IIT Madras
- Shri D. Sridhar Babu, Telangana Government

## 🤝 Knowledge Partners

- Intel Technology India Pvt. ltd.

## 📝 Summary

This practitioner-led session will discuss how to address critical challenge of making AI economically viable and globally accessible by moving beyond the "GPU-only" paradigm to strategic, workload-aware compute architectures. Featuring technology leaders alongside government stakeholders, panel will demonstrate how matching AI workloads to the right hardware mix—CPUs, NPUs, TPUs, and GPUs—can reduce costs while maintaining performance i.e., maximize RoI. The discussion focuses on practical deployment strategies, from edge-cloud orchestration to real-world placement decisions.

## 🔑 Key Takeaways

1. This practitioner-led session will discuss how to address critical challenge of making AI economically viable and globally accessible by moving beyond the "GPU-only" paradigm to strategic, workload-aware compute architectures.
2. Featuring technology leaders alongside government stakeholders, panel will demonstrate how matching AI workloads to the right hardware mix—CPUs, NPUs, TPUs, and GPUs—can reduce costs while maintaining performance i.e., maximize RoI.
3. The discussion focuses on practical deployment strategies, from edge-cloud orchestration to real-world placement decisions.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/A5-023Szooc/maxresdefault.jpg)](https://youtube.com/live/A5-023Szooc?feature=share)

---

_[← Back to Day 5 Sessions](../README.md)_


## 📝 Transcript

with them 14 languages. Voice is the most natural user interface to devices around you. So the idea is not to actually keep typing and texting but it's about the usage of voice but in

native languages which actually work very nicely and that means that you have to make sure that the use cases are built on top of it. So that's what our focus is from a processor standpoint.

One final note and given that I have maybe just one minute. Another aspect of heterogeneous computers is disagregation of compute within the network itself. What I mean by that is at some point in

time you might have extremely good connectivity to the network and at some other point in time you might have zero connectivity to the network. And the question to ask is do you want your AI

user experience to be invariant to the quality of the communications that you have at that point in time or do you want it to depend on it? Obviously you want it to be invariant. That means you

must have the ability to run inference directly on devices. Not that you want to do it all the time, but when you can, why not? Today, we can run up to a 10 billion parameter model, multimodal

model, state-of-the-art on a smartphone and a sub 1 billion parameter model in your glasses without necessarily charging your device the whole day. It's once every 24 hours. So, we've come a

long way in that which means use the data centers, use the edge cloud as and when necessary. They have a role to play. at the same time make sure that we also build for devices where the

inference actually occurs and users directly perceive that's where the data originates. So it's important to think about it that way. &gt;&gt; I think there's also a yeah

there's there's also a very strong environmental aspect to this and which often gets unnoticed and undisclosed but that element is also very important in terms of efficiently managing the energy

requirements because energy as we also know is finite. Um and so I think you one thing which I struck to me which you spoke about was inferences and a lot of what's happening in India is also around

inferencing models right so I mean in terms of the genai story which we have we have almost 300 geni startups which are building on top of the large language models and India is definitely

leading the way in terms of application layer there's no doubt about that now of course with server and others we also building sovereign large language models right so we are sort of as minister

Vashnav has spoken about every you know piece of the puzzles we are there in terms of fitting that puzzle together um I'd like to come to uh Mr. Arun Shetty uh sir is with Cisco and you know we

just want to take it further from where u duras had left in terms of talking about enterprise adoption at scale and you know of course with Cisco what are the challenges bottlenecks which you see

in terms of compute availability connectivity which Cisco is trying to do which you see in generally in the compute architecture also in terms of AI access and also integration complexity

so we would love to get your thoughts in terms of those bottlenecks and yeah take it from there. &gt;&gt; Looks like the mic is not &gt;&gt; that's the first bottleneck.

&gt;&gt; Yeah. Yeah. So yeah, as you know we connect and protect the &gt;&gt; this should be working right. Yeah. Yeah. Yeah. As you know we connect and protect even in the AI area era right we

started in the internet we came into the cloud and we are in this era. First of all, thank you very much for having me and it's indeed a pleasure to be uh representing this esteemed panel. Uh so

I I think what I'll do is I'll summarize based on what others have spoken actually and I think that those are real problems. Uh the first one is clearly the three impediments for AI adoption is

one is clearly infrastructure constraints and we all spoke about it and all they all spoke about it. The first one is the power. Power is a challenge will be a challenge. I think

USC is expecting it will be 63 gawatt of power in couple of years what they require. Okay. And then the compute is a problem. We did recognize that the compute is becoming a problem. And then

uh Kamagoti sir did tell that Cisco is in networking. What are you doing in networking? and networking will be a problem actually and then we need to see how we need to address and clearly it

has to be a fitforpurpose solutions because you not only do huge data centers and I think what we see is in couple of years you will see there is more inferencing happening at the edge

and that's what we need that's what the how the world will move and uh that's why solutions have to be fit for purpose for sure the second bigger challenge what we have is the security and the

safety aspect So that is something what we need to pay lot of attention because as the adage says what if you can't see you can't trust right you can't trust something

what you can't see so you need to have the visibility across the stack and also you need to see whether the models what we are using are the right models for us or is there anything malicious into the

models itself actually vulnerabilities in that model so the security aspect becomes security and safety aspect becomes very very important because the models hallucinate you can inject uh

toxicity into the model. So those are the challenges what we need to address as far as what we use. So I think it is very very important to build our models and if you look at the models all the

models were built using the public data which was the text voice and uh video data. So but however the enterprises the government has the best data sets. So why can't we use those data sets? So the

third impediment what we have today is the data gap and data gap is essentially I need to have highquality accessible and manageable data and we can build GPTs using that. what we can

call it as a machine GPT what we can build using that use that for inferencing use that for training use that for inferencing and we get lot of uh quality use of AI without data the

which is a fuel for the AI today you can't really move forward on the AI and I think these are the typical three problems and the ways we are looking at addressing this is clearly one is I will

not be able to build huge data center for a specific specific use case. So take a use case and then see how fast I can give that infrastructure a comprehensive secure AI factory or a

secure infrastructure whether it is in the data center or in the edge actually so that people can focus on building the uh use cases or the applications on top of it and the second thing comes on the

safety and the security aspect of it and how we can do the defense mechanism and the third one is the data. So these are the three problems what Cisco is trying to address along with the ecosystem

partners of course because this is not a problem what you can solve alone actually. Yeah. Thank you. &gt;&gt; Yeah I think I don't know if my m okay.

Yeah. And I'll I'll sort of take from the security point which you have spoken and I'll come back to Dr. Kamakoti. I think we have on the clock it shows seven but on my watch it shows 15.

&gt;&gt; Yeah. So I'll go by my watch. Uh yeah. So Dr. Kamakoti would like to focus on critical infra and public systems here and uh as you know that as with the advent of AI, we're going to use it

across these sectors as well. So how important do you see heterogeneous compute in terms of contributing to national resilience to safeguard and to sort of you know ensure that our

critical infrastructure public systems are secure as well. So today uh the type of uh things that we need to do for each one of these actions right the type of inferencing

type of response time you need as Shetty mentioned it's it's going to be diff different I hope all of you have seen uh yes prime minister and always they say need to know right you need to know

right and now what happens is if I have if I'm going to make a model that has understood the entire data then this that the model and it is used by someone that s someone should they need to know

that data that's a very important question so that's where the entire aspect of cyber security comes in and that's why we are all saying that we have we need to have sovereign models as

he rightly pointed out we can have adversarial AI which can go poison the whole thing and then make it teach make it tell things that you know should not be told or need not be told okay so this

is this is something that we need to very much look at from a security point where I do an inferencing and my training data set goes for a toss number one. So we need to have something for

for education at least as a director of uh you know one of the premier students in the country what my worry is that for education like how we have sensar board for uh you know movies what we should

make models for which certain details alone should be fed into it. See it's a bacha right whatever you teach what it'll tell you back probably do a little more uh generative on that. So this is

number one. Number two is again coming back to Cisco itself right you do deep packet inspection and basically you do it based on signatures today the the whole story is changing dynamically the

malware can change it signature. So that's going to be the biggest challenge now and what sort of inferencing they are going to do they have to bring some more different architecture and that

will be an heterogeneous architecture now and so so ultimately you know u as you see know what you see the trust component I always repeat this I'll finish with this with my one minute so

trust is uh you know friends uh you know if you want to define a is equivalent to E that's the definition right if you want to define A you have to come with B which is equivalent to A so equivalence

in discrete mathematics equivalence relation should satisfy three properties reflexive symmetric transitive trust is not reflexive I don't trust myself sometimes trust is not symmetric

I trust sah may not trust me trust is not transitive I trust Google trust you I may not trust you trust is in addition Trust is context dependent. I trust you on something I don't trust you on

something else. It is temporal morning I trust you evening I don't trust you. So right so so the main thing is we have to build that mathematically defined trusted and if you go to uh you know

some of the search engine and define trust you get 1 million uh hits for that. So so that is going to be the most important part. So specifically on the heterogeneous we will have certain

different types of security issues something which AI can solve something which is originating because of AI and that's where all of us edge connectivity server all the three people have to work

together and and we will teach and he'll put policy in so on the yeah so but both of you are equally playing an important role in terms of policy.

Dr. Koti, you're also you know very influential and important figure in India's AI policy. So of course lots to learn from you. Gokul very quickly would like to come to you and know just sort

of taking away in terms of the practical deployment models and what are the sort of examples you're seeing which demonstrate that we are moving towards heterogenous compute right and what

needs to be done to also get get to that level. Um so um I I I started off with workload and I'll go back to the same thing. So um one of the things that uh we're

looking at and and it's critical is to see what vertical really needs what kind of domain specific uh models and then try to apply that as much as possible as edge inferencing and contain the the the

walls that are there that prevents a to work efficiently. primarily it's like memory you know the connectivity the IO the thermal and then the power so from an edge inferencing standpoint there are

quite a few things that are being done be it an education segment where you want more translation data being available transcription so that the knowledge is being imparted in a way

that you have with the right data with the lowest power that's meaningful for the student um and more importantly when we talk security it's not only about protecting data uh the models we keep

talking data and models it's protecting the user that's even more fundamental and how you can ensure that that happens second thing is applying it to other verticals be it small and medium

business I think there is a great opportunity there where uh edge inferencing and putting compute with the right kind of power that can translate the businesses into actually using AI

more effectively. Um the last aspect that I want to also uh touch upon is in terms of just power. you know as we go from 1 gig to 9 to 10 gig in the next 5 years in the country we have to realize

that um um India is challenged by three uh physical things that we cannot run away from land water and power and these are very important aspects that uh it will drive how we set up our

infrastructure and you know uh almost you know you know 100% of your power energy that comes into a data center 40% goes into cooling 40% into your compute and 20% on connectivity and and there is

this famous uh you know uh metric that you use the PUE the power usage efficiency it has to be as close to one as possible that all the power that you give goes to the most important thing

which is the computer not to the cooling and things and there are a lot of technologies that are being played with respect to how much you can air cool on a rack per rack uh and and that was okay

up to about 25 kowatt and as you start to get to 100 you have to use liquid cooling and then how we can set that infrastructure up and for for a country like India it's absolutely important to

look at what hybrid energy solutions we can go with because just pure renewable may not be able to address it you'll have to have something that is stable and be able to do something off-grid so

that you know there is that dependency for you to get the data from the data centers and push as much as possible to edge because edge is all about reach how can I take it to places across the

country where there is no access to connectivity it's about how can I leaprog with verticals that have not used technology as much. We've always done a leaprogging in in in India and

this is a great moment for us and total cost of ownership. Those are those are the big areas. &gt;&gt; Thank you Google. And I think as we are approaching the end of the panel, I'll

sort of like to go to Duda and uh Dr. Shetty also in terms of closing remarks and the way forward. So to both of you I'll pose this question uh in terms of uh the next 2 to four years because I

think the AI we don't think too far ahead we can't do 5 year planning or 10 year planning 2-ear planning is sufficient so what enterprise outcomes are you both looking at maybe we can

start with DA in terms of defining India's access to compute access to infrastructure capacity uh and also sort of building in scale cost efficiency and energy efficiency so

So I'll keep it brief. Uh uh I think what I'm looking forward to uh with all the conversations here and uh in other parts of the world as well where the problems are somewhat similar is uh the

ability to distribute compute across the entire network. So think of a combination of inference that runs in devices uh to the largest extent that's possible edgecloud on-prem servers where

a lot of the localized processing can be done and these can be done in aircooled cards. By the way, the point that was made earlier is absolutely relevant. You don't necessarily need liquid cooling

all the time. You can do aircooled cards and then just use aircooled servers and running up to 100 to 300 billion parameter models which are getting pretty sophisticated. That's the edge

cloud. And as you go deeper from there onwards, then you have the data centers. It then mitigates the overall requirements or what you need in uh in a data center. And instead of therefore

concentrating the entire compute in one single location and then building it for just that alone, a holistic approach of devices edgecloud plus data center is probably what we are looking forward to.

Uh from Qualcomm we call it as hybrid AI. Uh it's not just a uh just a marketing slogan but it is something that we truly believe in. &gt;&gt; Thank you.

&gt;&gt; Yeah. Yeah. Since the infrastructure part has been addressed here so let me talk a little bit more on safety and security aspect. uh I think one of the things what we need to understand about

the models is these models are very intricate and very complex uh and it's also nondeterministic because if you give an input not necessarily the output will be the same like a standard

application correct so that's that's why it is nondeterministic so what one should be doing right uh there are two aspects of safety and security I'll just touch upon why it is important to know

that actually safety is all about we want the models to work in a certain way but it is not working in that certain way or the way we want actually that is the first part of it that's where the

toxicity part hallucination uh all those challenges come actually the second part of it is the security part wherein bad actor from outside can change the behavior of the model so we

need to be careful about both the things actually so what one should be doing say for example uh I think uh kamakotis are also told about users to have that security users also to be secured right

so it is essential that the organizations or the country has to build that actually so which means if I'm accessing a chat GPT and sending some confidential info the system should

stop me so that is the when I'm accessing a third party application the system should be smart enough to stop me saying that hey you can't be sharing that information that's not allowed for

you to share that. So that's something which is already happening in organizations today. The second part of it is the first party application. I'm building a application and I'm using a

model. So now the organization should be able to scan what all my AI assets are because one of the biggest challenges for enterprise is the shadow AI applications. They don't know what

people are doing actually. So I need to clearly know what all my assets are. That is number one. I detect all my assets or discover all my assets and next is I should scan and also ensure

that these models and the applications what I'm using are not vulnerable. If it is vulnerable then I need to put guard rails around it or I need to fix those problems. And the similarly there are

organizations who are already telling that there are a lot of risks. So you need to nit my and oas for telling that there are a lot of risk associated with that and we need to

ensure that we need to stop that. So that is something what Cisco is focus our focus to see how we can use AI to defend the uh to defend against all these malishness and also the

vulnerabilities what we see. &gt;&gt; Thank you so much Dr. Shaki. I think with this uh we'll probably uh close the panel but I'd like to invite uh honorable minister sir once again for

his very quick pleasing remarks and you have sort of set the stage so well and I think all of us are highly motivated to sort of you know build on this you've heard us in the last 1 hour what are

your thoughts you know um would love to hear from you in terms of your closing address uh thank you and in fact it's a great pleasure to be with eminent padmasi

Professor Kamakoti G and Kokal G and Da Prasad G and Mr. with Shetty uh sharing their truly professional experience around how the as a policy maker or how we should view the things especially in

terms of you know power, electricity, uh water and the land how we should be well equipped to provide all these things where all the eminent panelists over here or the eminent people of the days

would be thinking of of putting my primary challenge they have posed before us try to provide all the things we are here to provide test remaining and in fact uh you know thanks uh once again uh

for a very apt very apt dialogue over here. Ultimately we have to all me as a policy maker and you all technocrats and u you know innovators have to think the the basic agenda for

this AI impact welfare for all happiness for all. Thank you for inviting me. Thank you so much. With this we will have to close the panel. I'd like to thank all our

panelists and uh also invite uh colleagues uh Sarah from Intel uh to hand over the give. Yeah. But we'll just have a group photo.
