# Demystifying Voice Stack - What Makes Voice AI Work at Scale

**India AI Impact Summit 2026 — Day 3 (2026-02-18)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 17:30 – 18:30 |
| 📍 **Venue** | Sushma Swaraj Bhawan | Chanakya Auditorium |
| 📅 **Date** | 2026-02-18 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/yoARU2QXTrU?feature=share) |

## 🎤 Speakers

- Ananth Nagaraj, Gnani.ai
- Debdoot Mukherjee, Meesho
- Deepika Mogilishetty, EkStep Foundation
- Maitreya Wagh, Bolna
- Sunil Gupta, Yotta

## 🤝 Knowledge Partners

- EkStep Foundation

## 📝 Summary

This session brings together practitioners building and operating Voice AI systems in real-world settings. The session follows an Ignite-style format with short, structured talks to enable clarity and comparison across layers of the stack. The focus is on what is working today, where constraints exist, and which decisions will matter over the next 12–18 months. The session concludes with a discussion that connects insights across the Voice AI stack for builders, adopters, and policymakers.

## 🔑 Key Takeaways

1. This session brings together practitioners building and operating Voice AI systems in real-world settings.
2. The session follows an Ignite-style format with short, structured talks to enable clarity and comparison across layers of the stack.
3. The focus is on what is working today, where constraints exist, and which decisions will matter over the next 12–18 months.
4. The session concludes with a discussion that connects insights across the Voice AI stack for builders, adopters, and policymakers.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/yoARU2QXTrU/maxresdefault.jpg)](https://youtube.com/live/yoARU2QXTrU?feature=share)

---

_[← Back to Day 3 Sessions](../README.md)_


## 📝 Transcript

Enterprises are integrating voice into customerf facing applications, internal workflows, a scale and complexity that demand reliability and the governments are deploying it to

reach citizens across languages, geographies with various level of digital literacy use cases that are genuinely different from what it was designed to be by the startups and the

private sector. Each of these contexts brings its own set of constraints, its own definition of success and its own failure modes. And that's exactly what makes the

conversation worth it. The common thread across all this is once you move from prototype to scale, the stack starts to matter in a ways that you didn't anticipate.

latency, multilingual support, infraost, evals, governance frameworks, all of that that keep you what's being deployed.

These aren't a theoretical concept anymore. They are problems that's being solved right now by practitioners in this room and beyond. The session is designed to surface exactly what's

working, what's real constraint and what the decision will matter in the next 12 to 18 months. Today we are using an ignite format. Uh actually there are four speakers. Each one of them um

represent one layer in the YCI stack. We will have seven minutes each by each speaker. Seven slides and one minute per slide. This will be fast and practitioner. We'll cover infra and

telephony evals and orchestration policy and governance and the consumer and adopter perspective. By the end of this session, you should walk away with a clear mental model of what the full

stack of YCI is, a sharp sense of where the trade-offs live and practical signals where you can what you can take back whether you are building, deploying or governing these systems. With that,

let me start the session and introduce our first speaker. Sunil Gupta. Sunil is a co-founder and CEO of Yota. Sunil is enabling India's AI infrastructure backbone through sovereign cloud and

high performance compute. He plays a key role in powering AI innovation with scalable GPU infrastructure. Welcome Sunil and I'll ask you to come on the stage.

Good evening. I think uh because this session is all about voice AI or voice uh uh enabled AI, I don't need to give the context. Uh Indian AI is going to run on voice.

Indian AI is going to run on languages. This is the context. I'm sure you all must be debating since morning. I will rather specifically focus on if we have to oh yeah thank you. If we are to

really go from a pilot to production scale and that production scale is going to be masses going to be population because what we are trying to address one part is there will be people who are

carrying smartphones they are already having internet connections. So the way voice is getting carried on a data network is very very different than the way voice is carried on a typical old

generation telecom network. A bigger part of Indian population still is using feature phones. They may still be using landlines which is our old generation calling system. We all must have

forgotten. By the way even when you make a normal phone call and not a WhatsApp call even then you are using a typical old generation PSTN system at the back end. So we are actually talking about

two telecom networks at the back end. One is a telecom network which is what we say is following the PSTN network the old generation telecom network which will be enabled when you are trying to

make a call from a normal phone and there'll be separate network which is a data network where data is carrying your voice like when you talk to a telegram or signal in WhatsApp but then the voice

signal is getting converted into packets and getting cars a data network. So essentially a voice-based AI is not just a problem of the model builders who are building the models to serve uh whatever

context you are putting the the model into at the back end. It can be agriculture based model or education based model or healthcare based model. But on the top of that you are putting a

text to speech or rather in the starting you're putting speech to text model. Maybe you are putting a conversion language conversion model in the back end. Then that is coming to your core

model which is answering your question again converting your languages back. From that the data output of that again is getting converted to speech and the fun begins after that. Again when it's

getting controlled speech some system we call it voice gateway need to identify who is the recipient of the guy the guy who originated was he coming through a data network was he coming through a

PSTN normal feature phone a or a typical you know the typical telephone line so when you are talking at a population scale besides making sure that at the back end your model is rightly designed

rightly scalable it's not too large you know the inferencing speed is very very high you have to go right amount of fuel full power in terms of GPUs and all the things so that concurrently millions of

requests can be answered but is also equally important that the voice network the telecom network which is bringing the voice call into your data center or where the model is running in and also

the network which is taking the call back to the device to the uh originator is also equally important and that is where in Indian system you know this this issue start coming in that what is

the constraint Indian telecom network if you remember in our older olden times that they used to be marred with voice calls getting dropped. They used to be marred with uh

noise coming in the voice lines. We also are quite used to talking uh in a mix of Hindi, English, Marathi, Canada, Mallayalam you know we all are very very comfortable talking in. So when you are

trying to put all these things and then you add on the that this is millions of people trying to make all the real time. It's not a one-time conversation right that in chat you are doing you are

putting a prompt to the model the model will answer and you're quite okay if the answer is coming let's say in 2 seconds 3 seconds you're okay with that but just imagine when you're talking to the model

you are doing a conversation the way we are as human beings are talking to each other if and we all know the when when we talk to a call center if we are not getting a response literally instantly

as if we are doing a conversation within few seconds we'll feel oh these guys are not responsing I'll rather disconnect my call so the challenge here as I'm saying again is the telecom network the

concurrency of millions of users the network being clean being able to handle so much of traffic and then taking your response which is happening the processing at the back end and then

carrying its own latency and then giving to the user experience as if it's all happening in real time so the telecom part plays as [clears throat] much a bigger role as much as the model part in

in in in in the when when we talking about the voice telephone part of course I'm talking as you can see in the slide the the backend processing part also beyond telecom network when you are

coming to data centers and this is something which is not a context of voice I'm talking on every forum in every uh you know right now there's so much of PC's and pilots are happening

even in conventional AI you know when we are not talking about voice but the moment you go from a P stage or a pilot stage to a production stage then the issue of start of of production the

scale will start coming in there's like a startup getting into a mature organization suddenly you feel now you have to support to supposed to start uh handling uh millions of customers you

cannot afford a downtime something which you could have afforded in pilot stages and you cannot afford any performance degradation also though not only the telecom network at the back end how much

fuel power in terms of computing power you are putting in so that the inferencing is happening at real-time speed that also becomes equally important so from infrastructure point

of view the computing power in data center and the whole quality of the telecom network and the efficiency of this real-time conversion between voice to data and all that all becomes very

very important. Now I think I have I I I was obviously while the I know format is one slide one minute per slide and there are seven slide but I trying to cover the whole

story in general. So I'll skip something which I have just spoken but this is a complexity in India. You know I just explained that normal voice feature phone and normal telephone line will use

a PST and network the old generation telecom line. But if you are making a data call like a WhatsApp call it follow a different network altogether. This network will have a different qualities.

We obviously are talking different languages that that brings its own uh problem. We talk mix of language brings its own problems. Of course uh you know the network quality plays a role. You

know uh these networks are not good. There can be always noises into that. All these things need to be taken care of when we are talking about a voice AI solution to be taken on a mass

production scale. And uh yeah again I just covered that what will happen when users instead of just using a chat interface to put a prompt and then answering when they are

just conversing in their normal language the behavior changes. Your expectation is if I'm not getting answer in milliseconds I will rather drop it because I will feel the machine or

whatever bot or machine I'm working is not responsive. So I will rather like all this to be very very uh efficient and very very real time. So what need to be done essentially at the back end as I

said sizing of the compute infrastructure in data center become very important that calculation has to be done up front do it on a system it obviously cannot be

done in-house by anybody it's just too costly millions of dollars will get consumed if you try to build GPUs yourself if you try to do on cloud just make sure the contracts you have the

cloud operators is that they are able to give you lesser capacity when the traffic is less and but they are able to bust you with huge amount of GPU capacity when suddenly let's say the

traffic is very very high and let's say there's a occasion like a Diwali or independence day or a holi and suddenly the traffic on the the bot is very very high depending on the context can be

whatever the maybe some the variation time specific variation will be there so how you are able to keep your cost low by keeping lesser compute in regular time but that is scalable instantly in

case the load increases and again cable to come down that type of commercial contract that technical capability has to be there and for sure Everything whether it is voice network the network

telecom part or whether the data center part everything has to be completely completely redundant as I'm saying the things are meant to fail I'm running GPUs for two years now I know every

single day my GPUs fail when huge models like servers and all getting trained some GPU failing will just stop the whole you know the training sequence so suddenly you just end up restarting a

thing when you are putting this thing into production training is fine you know you can stop the training you can start retraining but when you're into production millions of people coming in

anything dropping any GPU failing any network element failing any storage failing any cable failing will actually fail the whole voice transaction so how you ensure that every single system not

only is performance-driven but also is very very what we call as active active deployment if one system fail the another component is always there and people even don't get to know that you

know that anything is happening at the back end so this is something which is very very important this is the key lessons we need to do that and and one more thing which you can see on the

right uh box is that because voice is so much latency sensitive and you are talking about realtime conversations you may not have time for your prompt your call to go let's say from Gojhati to a

data center in Bombay where everything is getting processed and then it's again traveling the uh telecom network to Gojhati back and giving to your device it means the real use case of edge AI in

our language we call it edge data centers or edge processing will actually come in if If effectively somebody is originating a call in Gojhati, the processing of that call, the model

should reside right in Gojhati itself. So that the entire process of call coming in, processing, model doing the needful work, converging into his language, converting into voice, giving

to his device, everything should happen in millisecond. That is where I think our industry is waiting for us 20 years to have real use cases of edge data centers and edge processing. I think

this is a use case the industry is waiting and you will see uh I would say uh you know spread of edge data centers in India if voice telephon takes big way right now we all are comfortable running

all our GPUs everything in central data centers but once voice telephon at mass scale takes off which I'm sure it will take the promise it's giving the the mass scale edge data centers will have

to come across the length and breadth of the country and this is possibly I'll just take this as my last slide that how can you deploy as I said putting in this type of infrastructure putting getting

millions and billions of dollars. I think even if you are backed by the best of the private equity, nobody will give you that fund. The only solution in this case is cloud. But the moment you put on

cloud, suddenly we feel what will happen to my data, what will happen to compliance, what will happen to risk. And that is where I think a technical solution that within a cloud

environment, you are able to create air gaps. We are able to make sure that one customer's data does not get mixed with the other data. Coupled with regulatory uh you know what is DPDP talking for

example, you know that that user data should be should be private. it should not be disclosed. All those things needs coming in. So the in between solution which I think word over I'm seeing is

neither you do everything yourself inhouse neither you do on any global uh you know cloud operator you rather are trying to do within the boundaries of your country into a sovereign cloud

because the sovereign cloud operator is not conflicted between the laws of the land and laws of their parent organization into some different country. They'll follow the laws of the

land. There'll be no doubt about it. So even if technically they try to do something wrong government will catch them. The real solution for scaling of this will be that these solutions are

adopted on sovereign clouds which are not only running in central places somewhere in India but also are deployed at the edge level also. And uh this actually shows that how exactly voice

will work. There are many many cost element to that. If you have to do voice AI on a very very large scale, ultimately in India any and every technology solution become very very

successful like UPA is example and there are many many examples our mobile adoption everything is example when you give the maximum benefits to user at lowest possible cost either you make it

free because the indirect benefits are very very high like UPI or you make it so cost effective that people just adopt mass scale. So if you to do that every single of these elements which I'm

talking about whether it is the GPUs you are doing whether the size of the model you're talking about whether the telephon charges you are talking about whether the storage of the data talking

about all these thing will have to the done at such a massive scale that economy start coming in and the usage of processing this voice telephon end to end becomes so low that people either

are getting it free or people are paying a very very small price to that and that is something which will lead to a huge scaling up of this entire uh promise of I would say voice AI and uh yeah I think

I've covered all this use cases are many I'm sure other speakers will also be talking about the use cases of voice AI thank you very much thank you Sunil for giving an insight

onto the entire infrastructure and telephon layer and we'll hold the questions for the end uh and we'll ask together with the Let me call upon the next speaker Matria

Vag. Matria is founder of Bolna. Matria is building voice automation platform designed for real business workflows and customer engagement. His focus lies in simplifying how enterprises deploy

conversational voice at scale. With that, let me invite Matria for the session. Yeah. So I think Sunil did a perfect job at explaining what is important in voice

AI infra and as he said um there's very less tolerance to things breaking and at the end of the day you see voice AI agents today already you might have had calls with voice AI agents what Bolna is

building is sort of the middle ground between the infra and the final agent or the final call which is the orchestration layer which sort of ties everything together but the question is

does India need its own voice AI orchestration layer what is special about is yeah so why does it matter right India speaks multiple languages and there are

multiple reasons why you need a specific to India orchestration platform the first is privacy data residency we talked a lot about speech to text LLM text to speech telephony different

models but most of these models run on GPUs and clouds based out outside of India which is a major problem in any hospital any BFSI any government level scale that you actually want to start

reaching privacy data residency basically means that every model that is being run is either being run on Indian sovereign models or models hosted in Indian clouds so that you are protecting

the protect protecting the data of each enterprise that you're working with second is cost sensitivity over here the difference between Indian enterprises and American enterprises is how price

sensitive every call or every minute is when at the end of the day voice AI is automating labor labor which is much cheaper in India compared to anywhere else in the world which basically means

going down from 3 rupees a minute to 2.8 8 rupees a minute is a massive thing and a massive priority for Indian enterprises but not the same in America. So that means making sure that you are

utilizing tokens both input and output extremely well is something that is extremely important over here. And finally when we say multilingual demand it just does not mean picking up the

right model. We'll talk about this more in this presentation but India is one of the few countries which has a truly multilingual demographic where people not only speak different languages they

speak many languages in the same sentence itself and understanding those nuances is super important for any voice AI. So what are the complexities with multilingual voice AI? First is the

default code switch. When a call starts you are not sure what language the person is going to speak. Hiring for this is a massive problem which has not been solved. But voice AI can actually

understand what language a person is comfortable speaking right from the first few sentences. From the first greeting sentence itself, the right models, the right prompts, the right

code has to be brought into the platform so that the conversation can continue seamlessly in the language the user wants to speak. But even then it's not one language. We speak English, right?

Which means we speak the language in Hindi. But if I say tinchar patch, you might not even know what I'm saying because we're so used to speaking numbers in English. We're used to

speaking email addresses in English. So that basically means that if the AI starts speaking to you with Hindi numbers, the person is going to be perplexed. That essentially means that

you need to understand what is the weights and biases that a person gives to multiple languages and speak in that tone back to the human. Something which AI which off-the-shelf LLMs are not

really built for. A lot of things in voice AI are pre-built such as alerts or things or guardrails or function tooling which essentially means that a message will be sent that hey I'm fetching your

calendar right now. But in a Hindi conversation you can't have these to happen in English. So even these pre-recorded or predefined messages need to now be translated in the language the

conversation is going in so that the conversational flow is not broken. And finally, websites, PDFs, documents are all mostly in English, but sometimes in local languages as well. Even they need

to be translated into the language of the call uh when the call is happening. Now, you might think that hey, this is simple, right? Like this is just translation. But this has to happen

under 100 milliseconds because it's happening inside a call. It's not fine for you to completely run this from scratch. You have to make sure it is running while the call is happening

without breaking the flow of the call. Which is why a multilingual orchestration similar to what we are building is extremely important. But then what about humans in the loop,

right? Like we hear a lot about how AI has not completely automated things. You still need a human in the loop. And that completely we completely agree with that. There are still multiple layers in

the space where we actively use human in the loop either ourselves or with the client we work with. Of course, we don't believe AI can handle every calls. Any escalations, sensitive data, situations

where customers have that bias that they need a human to solve it need to be intelligently understood by the AI without the person having to say, "Hey, let me please talk to a human." We sort

of build our agents around a way that we understand when the the the job that the AI was meant to do is not happening correctly. And with the context in the call, it gets seamlessly transferred to

a human without the human having to specifically ask for this. Evals and analytics is still extremely new in AI. A lot of people talk a lot about how earlier a lot of time was spent in

building things that building things has now been taken over by AI and that means testing is now becoming more and more humanled and more and more important. We need humans to define what good means

because good could mean different in different calls. In sometimes when a person says they want to talk to a human, a client might want them to transfer whereas in other times they

might want them to press a little bit more. So we allow the people who are testing our products to define what good means and then redefine our prompts to sort of meet what their definition of a

good call is. And finally, audits are something we work on very closely with each of our customers because at the end of the day, our at the end of the day, human intelligence still is something

that is slightly superior to AI in certain situations. We do have humans who are spending hours every day fds building agents and having a level of complexity that they can bring into

agents that sort of take agent prompt from 90% to 100%. Something which is tough for AI to do autonomously. So what works in agent orchestration, right? Um as already Sunil has said

there are multiple models speech to text LLM and text to speech and telephony. Each model is either the cheapest or the quickest or the highest in quality. We don't really believe there will be one

model to rule them all situation ever in the future. And that primarily means each call you do needs to run on different models for all of these layers. We have clients who are doing a

call to someone in sitting in the Mumbai office using the model which has the most modern form of English which might be 11 labs today. But that same agent if they're calling someone in Nagpur it

would be using Cartisia which sounds a little more DIY and that same model if you want to run it on a slightly cheaper on on a slightly cheaper sense you would use serv there right and we see that

every week if not every day newer models are being built and it is impossible for an orch for an agentic platform who who are focusing on many different things to keep in touch with this. So that's where

we come into use because if you're building on a model today and that model suddenly is not the best for your use case tomorrow, if you're using an orchestration platform, it sort of

becomes just a drop down that you have to change. And we feel that these models are going to grow more and more. We're seeing so many newer models, so many smaller models come up on a daily basis.

even like indie models being run in smaller universities and research labs which are actually competing with these larger models in specific domains or specific metrics such as being the

cheapest or being the quickest and we and we're really enthusiastic about like how this is going to play out in the future. Now, what are common failure modes in

multi-agent flows? Like two places where voice AI breaks the most when you're doing complex AI calling. The first is understanding what went wrong. Right? We've talked a lot about the

complexities here. There's a ST that is translating complex multilingual speech into text. There is an LLM that is getting a response. There is a texttospech that might hallucinate and a

telephone which might break. Right? Given our experience of telephon in general, what fails when a call fails? The customer is going to say call what does that mean right? At what point did

something break? So the only way to solve that is to have detailed log tracing where you can understand what is the level that broke and then actually do the right escalation. The second

thing is impact of changes which basically means when you make a small change in the prompt which is something you have to do on a daily basis it could cause a cascading effect of problems

that sort of completely ruin the final calling experience where you do not really understand that was happening. These are situations where you have to do regression testing across the full

agent chain to find out at which stage what change you made is going to break. There are many observability many new testing suite platforms coming up and it's quite exciting to see them grow and

sort of simulate how calls would run in in the real world before someone has to try. However, today what we're seeing is clients still are doing this testing themselves manually. they do want to run

100,000 even with larger enterprises like 10,000 calls with their own team internally and sort of make sure that they're running before they're ready to put something into production.

Finally, how do you measure real business impact? We believe voice AI helps in three things. Saving time, saving cost, and scaling. Time, of course, recruitment processes take time

because they cannot be parallel. They are linear. To hire 10,000 people, you have to do 10,000 interviews one after the other. And by the time you've done the 10,000 interviews, the first person

probably has already found a new job. Voice AI really helps in these places where you can simultaneously call all 10,000 people and run things on a parallel level. Cost saved is probably

the most important in in in in from from the Indian context. Uh costs of constantly scaling goes beyond just salaries. It goes to infrastructure. it goes to to to getting an office space

and laptops and all of that as well. Voice AI essentially allows you to scale seamlessly and at scale even reduce costs with the optimizations that you can start doing. And finally, ease of

scale. Most of our customers in fact are not massive enterprises but very rapidly growing companies. The point is if a company grows 10x growing your calling team 10x is impossible at the same time

which basically means you no longer remain close to your customers which is a cardinal sin for any sort of company right voice AI sort of essentials that sort of sort of guarantees that you can

scale your customer interactions your inbound customer support requests as well as how close you are with your customers without really going out of your way

and yep that's basically it so we're building orchestration and I think now what is built on top of orchestration to make the final call really seamless. I think we'll have other people talking

about that. Thanks guys. Thank you Matria. And I think layer by layer it's uh getting interesting to know from infrastructure to the orchestration how the voice is evolving.

I think one of the core aspect of also voicei is the policy and governance. Is the data safe? Is the consent taken? What are the governance around it? And to talk about the policy and government,

let me invite uh Deepipika Deepika Mletti. She's chief of policy and partnership at AXA Foundation. Deepika works at the intersection of technology, policy and ecosystem collaboration. She

focuses on enabling responsible inclusive adoption of digital public technologies at scale. With that, let me invite the Okay.

Oops. Something happened. Okay. I'm just going to use my seven minutes to go through the seven slides very quickly. I'll try. Okay. Um the

thing about voice is I think we've been hearing so much about how AI will scale only through voice in India. And that's true. That is true. But when we think about voice, what is

it that we need to think about is what I'm going to talk about. I think one thing you have to remember is that voice is also biometric. It's very different from any other form

of data. So the sense of responsibility doesn't stop at merely saying I've taken your consent. It actually goes beyond that to talk about what else am I taking care of

so I don't actually uh violate your trust when I'm engaging with you and also don't do anything which is beyond what I'm required to do. Yeah. So I want to make the proposition that this whole

consent is only the beginning. It is not by beginning of the whole story. It's not by any means the end of the responsibility that we all have when you're dealing with voice.

Um in India we have sort of three layers of overlapping of frameworks and I want us to pay very close attention to this partly because um as far as a I'm not voice and it's it's like voice has

existed right the previous two speakers have spoken about voice it's talked about telephoneony has existed lots of things has existed what does voice in the world of AI look like is the only

question that you have to look at right so we can't pretend like there are no regulatory frameworks in We keep acting as if because it's not AI, there is no regulatory framework in

place. Yeah. But I want to keep my conversation very much to voice AI without getting into the rest of it because that could take a while. Uh digital personal data protection regime

is now in force. It fully comes in force by May of next year. So all your consent and what you want to do with the voice data is a very integral part of that narrative and that

is in fact law. As far as AI is concerned, there is the AI governance framework which has been recently released. It's not a law and also because of the

position India has taken in terms of thinking about this because we've not decided to legislate AI yet. We've decided to allow innovation to happen but with certain guard rails. So the

governance framework gives us that framing. Is it nearly enough? Is it suggestive? These are all questions much like um it really depends on how the industry

and the ecosystem decides to engage with it either with responsibility or you can just treat it as a suggestion. If you go by the name in the way we actually deal with most

suggestions like traffic rules which is in fact law actually or rules like you have to wear a helmet which is also law. We treat those things as suggestions. So I'm quite curious to see how the

ecosystem treats a guidance framework. If you treat it like wearing a helmet or not we're in a little bit of trouble. Yeah. But I'm trying to tell you that that's what the system I mean the

government system has chosen this path mostly to give space for innovation otherwise one could have legislated. Yeah. But what's also happening and I'm using the third column really on the

BFSI and RBI merely as an indicative example which is a sectoral level frameworks and guidelines and regulations and guidances which are coming in because more and more there's

a belief that we may have to look at sectoral frameworks rather than overarching frameworks. Uh this third column exists merely as an example. It's not by any means to

actually push everyone in the room to think that that's the only framework that exists. Yeah. I want to talk about the consent problem and what's on screen is essentially a

comparison between what the law requires us to do and what actually happens. I won't read it out in a great amount of detail because in many ways it's quite self-explanatory. The problem is uh it's

more our mindset and attitude towards law and what we think is required of us and what is actually needed from a safety perspective. If we were to approach this whole

problem not as I need to take consent because I'm required to take consent. Two, I need to create a safe experience for my user because that's how I'm trusting and value. I'm creating trust

and valuing my user. We may actually do a lot more things much more meaningfully and easier than ticking the box of box of consent. I of course have uh put a provocative

statement there which is where voice AI breaks the law right now. It's mostly to push people to think a little bit more. It's not to say that you're actually breaking the law but

these binaries of what happens and what's required is where all the debate I have encountered with product managers in domains across many ecosystems I'm part of this is what I've stuck with.

Yeah. I think there are three risks um enterprises are not ready for that will hit India first this third party trap

it's like it's not me it's the other guy and in AI it's actually quite interesting because we end up having to play blame the models for things and things like that there are lots of other

guys to blame him. But when things go south, we may quickly find that we will not have um the other guy to blame because responsibility at some level will stick

at the solution end also. So therefore taking it seriously is very Um the language bias blind spot. A good example could be if we don't pay attention to the nuances of language.

You're offering a loan to a Telus speaking person. Based on the information the person gave you, you've denied them the loan. Same facts a Hindi- speakaking person has given you,

you've given them the loan. Why? Because your system just didn't understand them better. Now that

bias is very real right. So it's not some model bias at the back end. It's actually like uh inability of having trained things properly or having paid attention to the require. So you're

causing inherent differences here which may you end up doing if you don't pay attention to language with that level of seriousness. So voice is not just voice, it's voice for something. So therefore

language comes into the question of voice quite effectively. Um and also lastly of course the deep fake liability gap. Um I think that's the highest sort of um harm question. Um

the the liability gap here is also going to hit us fairly quickly if you're not careful. And and you know this is already happening. It's not like this is, you know, the scams

and all of that that we're engaging with. Um, so what I want to just put on the table for us to consider is

how do you get prepared? How do you need to start thinking about things and how do you get prepared? I think we are going to move into a framework. There's going to be um a

graded liability chain. too many different parties are involved. So you can't actually put all the liability on one end. So it's likely to end up becoming a graded liability

change which means auditability, traceability, all of these questions. So short answer to the question is start maintaining records. How your decision-m is happening? Record

it carefully, thoughtfully. If something is not working, change it. Declare and show that you've tried to fix the problem. So

we've been used to a world in which uh liability is about identifying someone's mistake and ringing their neck. You need you need one neck to hold that framework of how to pin liability. We may have to

rethink a little because if you change it to okay it is responsibility I have tried to fix it. I have done this now see I made best efforts even with best efforts this happened. Okay, now let's

what do so that's sort of the new frame of thinking rather than saying this guy violated the law let me go catch his neck I'm not saying we're there yet but

it's likely to end up like that because of the complexity of the ecosystem we are in so the short thing that I think at this stage we need to pay attention to is about looking at

how to enable accountability at every stage in the game and think about accountability at every stage in the game And at some level also uh a lot of responsibility within organizations and

even kind of uh institutions where boards have to very seriously take ownership on this question of safety. I mean it's it's safety in general but I'm talking about it in the context of

voice. It's not just the last my the developer who did something. It can't be left to that person because in the end that's how the systems are designed but it's important that it actually be

looked at it. And lastly, I think um uh doing annual uh data audits and things like that. Basically, we're asking for more accountable behavior which demonstrates a duty of care rather than

oh you may you messed up let me penalize you that may also be needed but you have to put more onus on demonstrating of duty of care. Um

I'm I'm sort of restating what you have to prepare for. The DPDP compliance window is the next 18 months. Actually 15 3 months are up. So that's definitely there. Um you will find a lot of

sectoral frameworks and guidelines that will come up. So depending on which industry you're catering to, you will find some of that emerging because you're seeing that happen already with

BFSI. uh when DPDP enforcement begins the world will change and voice is going to be sitting in the middle of it because

you'll be the making most amount of calls and people will feel comfortable talking and saying things if you don't pay attention to proper consent frameworks

and that's the other thing right the entire industry is focused on how do we um sound more human which is great but the problem with sounding more

human, you also make people more vulnerable because they get comfortable and start saying things they wouldn't actually say to an to something that they thought was synthetic.

So I think there is a balance there somewhere that one needs to work towards. Uh I mean there are a bunch of to-dos for voice AI companies which I've mentioned already actually.

uh map the data flow uh you know build your uh oh the other thing is your deletion pipeline is as important as your collection pipeline the reason is

the point I made first which is voice is biometric which means if you store it and do things with it that people didn't realize you are you are actually going to be crossing

lines that you didn't imagine you were going to cross so actually it's very important to um to be more um accountable at every stage of how you're using this information and I would

certainly encourage limit purpose, limit collection, limit time. That's the only sensible way to deal with it and localize as much as possible so the control is in the hands of the user and

less in yours. Thank you. Thank you Deepika. Um what a great insights into lot of policy and data guidelines that we often overlook as the

ecosystem partners and maybe something that the everyone knows about it but given so many other things to solve for this gets often overlooked. So thank you for the session and let me invite our

next speaker uh Mr. Sibdut Mukharji to represent the adopter side of the view the enterprises the corporates the governments that which are adopting voice solution how are their thought

processes what their constraint is and uh let me introduce Mr. Dud leads AI initiatives and he's head of demand engineering at Misho. Uh and Misho is one of the earlier adopters of the AI

and DBud brings deep experience in deploying AI systems at massive consumer scale. He work his work bridges advanced AI research with real world production challenges. With that let me ask the two

to come over. Good evening everyone. Cool. Um I think thank thanks for the opportunity Santos. It's a very important panel. Um

I'm sort of visiting this summit most sessions um especially where big representation from US or big tech is coming people are like really surprised by the emphasis on

voice AI and this is one of the components or disciplines in AI which definitely needs to be led by India because it's very very important for India. So thanks for organizing this

panel. So I'll start with the [clears throat] what user problems do does voice solve right and I'll talk about two things here. Uh the first thing why

is it better now? Yeah. So the first reason why it is important for India in particular and we've been talking about uh this and but it could be extended to other nations in the global south or

certain other uh demographic profiles which are not um very sort of comfortable using mobile and technology. uh is the what we call the thinking versus the typing gap, right? And um

like I I've been sort of in a lot of companies uh where we have processed indic language text and so even a simpl simplistic phrase like right is sort of

spelt out in like several hundreds of ways. We actually counted the number of spelling variations of every phrase that can happen and it's it's a very painful experience right um you're thinking in

an indic language in your mother tongue and you're trying to type using a alien English keyboard in Latin and you make lots of mistakes you take a lot of time very very far from efficient and it's

sort of the first um reason voice needs to be a very very important channel to solve for access right and to really um provide that freedom of expression which today is getting lost in translation.

The other important problem which is perhaps less talked about but I think is like I would regard this as one of the top reasons why conversational systems uh specifically in a lot of consumer

internet apps specifically e-commerce there have been attempts at building conversational shopping agents let's say and by and large they have not been successful at least I don't see any

single application which is really really disrupted and and made a large dent to how shopping works or it could be extended to other domains as well and one of the reasons is most consumer

internet applications follow the feed UX right so people just open up the feed and then they keep scrolling right to to discover so that's how discovery works It works through feed browsing. Now

imagine if you put in a chat assistant, right? It'll cover half of the screen which is anyway small. So you're very like you're sort of left with a very small real estate and more importantly

like switching back and forth between this chat UI and the feed UI is very cumbersome, right? And so that's like one of the top reasons why even though like LLMs are there and the technology

is there, you would see chat assistants have really not disrupted um consumer internet apps in a big way. And I feel voice has that opportunity, right? Because with voice it's almost like you

turn on a microphone and you can turn it off or on whenever you want and the rest of the experience of browsing remains the same right it's almost like hey there is an additional partner who's

just standing by your side and guiding you on how to use the app and that's a that's very transformative and I I think it's transformative for people who know the language and people who don't know

the language. It's transformative for everyone. Um and I hope uh more attention on voice AI uh starts building like giving rise to a lot of new products and new ways of uh navigating

apps that we all use every day. Cool. So what are the trust barriers in adoption? uh and this is the tricky problem and uh I think uh my fellow panelists talked about uh so it it can

go two ways but like the first thing is like when you are talking to a bot right the the first impression that users have is what do I expect out of this bot is not very clear right so very often when

there is a voice bot that one is talking too. I mean, I'm sure all of you have gotten these calls and and so on and even if you have a problem, sometimes you're unsure whether hey, can this bot

actually solve this problem or not, right? Um and I think that is one key barrier uh which which is like what to expect, right? Uh and that of course gets amplified uh if you the bot starts

making mistakes. Uh you sort of almost feel that hey like this is this problem that I have this bot cannot solve. Uh so like whenever the voice feels unnatural or um the conversation feels scripted uh

it feels repetitive uh right um there is a trust barrier and whenever there is a trust barrier it's very difficult to overcome right so um and purely from this perspective it is very important to

design not just voice and like not affect like the text to speech and all of that and that's a very large component of it but also design conversation structures in a very humane

manner right and with in a sense that it is not feeling scripted right so and when you can bridge this technology gap or like really sort of uh earn the trust of the customer.

uh on language and inclusion. I think uh this is one of the problems that we keep talking about uh very important to solve in India, right? Uh we often overlook the fact that uh there's 700 plus

dialects which are active dialects, right? And um thanks to the India AI summit there is a lot of momentum and narrative on this particular topic and uh I I feel very happy and proud that

finally some momentum is is um gaining in in this direction. Uh it is really sad right like I mean like the Hindi that you speak in in Bihar and Rajasthan or Hana are so very different. uh and

like yet we we sort of only talk about one language, right? Uh um the the Tamil that you speak in Maduray and Madras are are very very different. So can you really

have your agents go beyond the top languages that we are building for and can you think like if you can do that right I mean I I feel that there is serious customer delight which can be

unlocked right when your agent really speaks your dialect uh it it just feels like home. Um and then there are other um issues like like with dealing with background noise. Uh most of India is

operating in very low bandwidth um situations. So how do you make your solution work across all of these uh constraints? Behavior change versus novelty. I think

uh till the last two three years I think we've had these voice assistants and like we've talked to a lot of them but like many a times it's it's been it's it's really sort of built that uh strong

retention right people have um done good cool things which sort of are good oneoff um cool uh and fun um use cases but have failed to move beyond that. And to me, retention of pretty much any

consumer product is defined when what you expect to the the app to solve, it solves that, right? When that happens, when perception uh of the solution,

you can deliver on that perception retention happens. Right? And um in case of voice AI, right? I I talked about trust and how it's important to to cross that trust barrier, but it really boils

down to the consistency in problem solving, right? Can you solve the problems consistently? Um, can you reduce friction, right? And that will drive retention. Uh one of the things

that I sort of uh like feel here is many a times our AI agents have like they they jump into problem solving and action because of just how they are made. They do not understand the user's

problem deeply. Right? So how do you first clarify before acting? How do you confirm that your understanding of whatever you solution you want to render is actually what the person requires and

then uh you you can sort of probe deeper but don't probe keep on probing unnecessarily and then finally act right and wherever you are unable to deal with the situation you escalate

so I think if you do these uh you would get to that behavior change and you'll get to retention on your app on measuring ROI. Uh I think um on ROI the gold standard is of course how do you

run AB tests and prove that in AB tests it's you're getting a significant lift on the business metrics that you care about. It could be conversion lift. It could be uh your seesat and and CES and

and and some of those things in a in a support context. But many times depending on like how much uh sample size and how much throughput and you have getting to that

statistically significant outcome can be timeconuming right so what is very important is very clearly define what are the leading indicators of success right so for instance in a customer

support context maybe seesat or ces is your outcome metric but let's getting a repeat call within the next day is a very good proxy of whether the solution is working or not. Right? So do

track leading indicators, define them and and track them. And then uh what is very important is also deep observability which brings me to the next point around building right

feedback loops. Right? So it's very important and I think uh uh Maitra and others talked about it the importance of tracing all parts of your system right and it's important to not just for

observability and spotting errors but it's also important to like treat this as your key uh go-to place to do continuous problem discovery. Right? So rarely when you launch a voice AI

assistant or any product for that matter you would hit u like 100% of the problem. So how do you keep discovering problems and how do you keep solving them? You can only do justice to them if

you have good feedback loops. Yeah. So I'll close with um like how do you unblock adoption at scale like largely um uh like these are the points that if you if you do well so the first

and foremost you try to identify the most important high volume use cases and where you can add value. Uh try start with the simple ones which are low stakes before going into the high stakes

scenario. You treat reliability very very seriously because that drives retention. So you track the correctness, the consistency of problem solving. Uh is it a tight latency

um and and can you recover gracefully whenever you're uncertain and then treat observability uh and continuous improvement as your mode. Right? So um that's it. wish you

all the best and uh look forward to many novel and useful voice AI assistance coming through. Um thank you so much. Thank you for giving us the perspective of how the adopters look at it and how

um they look at solving problems at scale. But let me ask just one question to the all the panelists and give me your perspective. You have to look at it the voice AI

um in the next 12 to 18 months. I'm not even going further down. What is the one unlock from your perspective which can take it to a scale right and from each one of your perspective? What is the one

biggest uh unlock that India may need uh from the platform infrastructure benchmarking policy uh adoption perspective and in in any order I would ask all of you to just uh take a moment

think about it and if you could answer that. Yeah. Yeah. Um we've been talking about this Santos shaft line. So I think one of the key um unblocks that I personally feel

is very important is in the space of hey wherever there is a user who's calling in is particularly anxious or frustrated. How do you empathize deeply? Have a empathetic conversation.

um certain times you'll not be able to solve the problem but at least you can lend a year and like try to pacify uh do the best that you can right so the these are like very humane skills which I feel

um the AI uh like we we really need good research and uh uh some foundational breakthroughs before which we can sort sort of uh cross these boundaries. So yeah. So so that's one from my side.

&gt;&gt; Thank you. &gt;&gt; Yeah. So one unlock that we are seeing happen as well is in the mindset of enterprises and customers and of course even people speaking to voice AI. Um

what what we're seeing today is a lot of pe like when we're talking to clients or talking to people who want to adopt voice AI there are still questions like hey will it sound human and I think you

talked about this very well that the goal of voice is not to replace a human or to sound human it's to solve a problem right and we see that uh in data just of our own calls we see that the

call drop rate in the first 10 seconds is extremely high you pick up the call there's a voice AI talking you immediately cut After that between 10 to 30 seconds is

extremely low and then again it starts sort of tapering back up which basically means that once you go beyond why is this voice AI calling me people are happy to have the conversation. We've

had 15 20 minute interviews. We've had long discussions about which how should I plan my next Italy trip or whatever uh reason the call is happening. But I think there is this click that's

happening even we we measured the number of times someone asks hey is this AI &gt;&gt; that has reduced for sure but another thing that has reduced is people asking that the AI saying that yes and the call

still continuing that has gone up a lot &gt;&gt; so we're seeing that people are now understanding that yes they can have a nice conversation with an AI if it is solving the problem for them and no

longer being that how can I and clients are no longer asking us hey will we be able to fool people into thinking this is a human and I think that's the direction in which this should be going

as well. &gt;&gt; So, so it doesn't need to be human like it has it can be a bot and still can have a meaningful conversation. &gt;&gt; Exactly. If you trusted that it will

solve your problem it probably will solve your problem today as well. &gt;&gt; Sure. Thank you. &gt;&gt; Uh no I actually conquer with both the panelists and see fundamentally we as

humans uh you know don't want somebody to act as what he or she is not. &gt;&gt; Yeah. So if you're a AI declare you are AI right and I think we will still go ahead with that you know we have uh you

know handled even regular you know press one press two press three we have handled that also as much frustrated be maybe what we have handled till that time we know within let's say few

seconds it will give me some value ad which I want to receive from that so if AI is doing it and obviously is going to do that role very very beautifully in the right context talking to the model

giving the right answers and all that thing it can do lot of conversations and you context driven conversation. So but I would say if in some manner the right in the starting uh instead of me asking

are you AI and then it says I'm AI you actually declare I'm AI in some way right by some symbolism I think that would rather add trust instead of reducing trust and second as I said

because we are not talking about talking to a interface and getting some answer and then we have time for digesting what the interface is giving to me but here I'm doing a conversation like I'm doing

with a human so that uh speed, efficiency, you know, no lagging in the whole conversation, uh, no dropping the call, right? All those things become very very important. Yeah.

&gt;&gt; Thank you. Thanks. &gt;&gt; I think it's been occurring to me more and more over the last couple of days of listening to people is that we because we are living in an AI world, we're

expecting this thing to behave much better than we did &gt;&gt; as humans. our exp our experience of call center calls are not really great let's be and

that was a human on the other end but the reason I make this point and why this has relevance on the policy front is it is the opportunity to do better so therefore if we actually are able to to

to your point of build trust by acting trustworthy &gt;&gt; so so the one thing that I think will truly change is if we stop treating this idea of policy and consent and

requirement as a requirement rather than it is actually the most important thing I have to do because I have to take care of this person. &gt;&gt; So that sort of sense of care if we were

to shift the mindset this would move much faster and be more meaningful because ultimately it's not about a perfect conversation it's about solving the problem.

&gt;&gt; Yeah. No, I think thank you uh thank you for a wonderful session. I think uh this is one of the most uh richer content session that I have personally attended. So thank you for putting effort and and

bringing your thoughts to uh in this room. With that we'll end the session by just giving you Please
