# From Policy to Practice: Governing AI for Global Impact

**India AI Impact Summit 2026 — Day 2 (2026-02-17)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 14:30 – 15:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 16 |
| 📅 **Date** | 2026-02-17 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/dnjbXDMRZbw?feature=share) |

## 🎤 Speakers

- Ashish Aggarwal, Nasscom
- Gail Kent, Google
- Ivana Bartoletti, Wipro
- Jules Polonetsky, Future of Privacy Forum
- Wifredo "Wifi" Fernández, xAI

## 🤝 Knowledge Partners

- Nasscom

## 📝 Summary

Trust is the infrastructure of AI adoption. This session focuses on what it takes in 2026 to govern AI for real world benefit, especially in the Global Majority. We move from principles to practice through sandboxes with clear entry and exit criteria, independent evaluation and red teaming, and reusable assurance artifacts such as model cards, audit logs, and incident reporting. We ask where interoperability and collaboration accelerate impact, and where sovereignty and geopolitics create friction.

## 🔑 Key Takeaways

1. Trust is the infrastructure of AI adoption.
2. This session focuses on what it takes in 2026 to govern AI for real world benefit, especially in the Global Majority.
3. We move from principles to practice through sandboxes with clear entry and exit criteria, independent evaluation and red teaming, and reusable assurance artifacts such as model cards, audit logs, and incident reporting.
4. We ask where interoperability and collaboration accelerate impact, and where sovereignty and geopolitics create friction.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/dnjbXDMRZbw/maxresdefault.jpg)](https://youtube.com/live/dnjbXDMRZbw?feature=share)

---

_[← Back to Day 2 Sessions](../README.md)_


## 📝 Transcript

Uh I think we are we are really up to capacity here. So Sudipto and Somia can you just manage the door so that uh we are uninterrupted. All right. All right.

So let's get started. So welcome uh and congratulations everyone. You have made it to one of the most interesting panels of the day. So, uh, give a round of applause to yourself.

&gt;&gt; All right. Perfect. So, um, &gt;&gt; don't be sorry for a photo. We'll start. Okay. Let's let's just take a moment. &gt;&gt; Come on. All

right. &gt;&gt; Okay. So, back to the business. So, uh I'm going to be your MC for the day uh for the session. And uh let me do uh couple of things which I listed for

myself in the opening. So one uh this is um uh is being organized by NASCOM in collaboration with FPF and as we know that you know uh future of privacy forum uh does a lot of interesting work. So we

are very happy to be collaborating with them as we get into this discussion. uh now uh the topic is policy to practice and we are going to test that on governance

and this is not just a conversation which we're having today in isolation uh and in leadup to this summit there were series of presummit meetings which were uh going deep just into that

conversation and I can understand some of you were not in that hall in that meeting in those rooms but I think uh two three things really stood out. One is the fact that uh uh how do you uh uh

think of uh intent when you think of governance from an industry lens and then how do you think about the science of putting that intent into practice and a lot of frictions happen because of

that. Second, sometimes intent itself is under pressure. There is competition, there is engagement, there is time to deployment. Those are the areas when governance come into pressure. So we're

going to go deeper into that. And ultimately I think it is also about shared responsibility. So when we think about the shares shared responsibility where it hits friction in terms of

governance is that when we in somehow attempt to pass on the responsibility to the other stakeholder rather than building the responsibility with us and this is true for all stakeholders uh it

can be true for regulators it can be true for users and it can also be true for the industry. So I think that's a broad lens in terms of saying that the work has been done and we are going to

build it forward. So now uh without much ado uh as we uh and by the way I am Ashish Garval. I head public policy at NASCOM. I've been doing this for some time and it's my privilege to have such

an interesting uh set of speakers and what I'm going to do is that I'm going to uh straight away dive into this uh conversation. So very uh lucky to have you Karina as part of this uh uh forum

and I said lucky because it is just so timely that uh uh you have a report that has uh really put the evidence of uh where the science is on some of these things when we think about you know

governance and and and that's so important because ultimately we we need to base ourselves in the reality of what is happening and u so Karina Prunki is a researcher uh at she's a senior research

fellow at the Oxford University and she's also the lead writer of this uh AI safety report which has just come out. It's a 173 pages report. I know a lot of people don't read but if you are in in

this session today you are already converted. If you have not read it please read that report. So Karina I'm going to straight away come to the topic uh in terms of you know typically

sometime I try to go into the big picture but with you I'm going to go into the nuts and bolts. So we talk about open weight models. And there is so much good about them in

terms of what they can enable people to do. Uh uh the fact that they can make access to uh models much more uh uh in a way which is cost effective and and really allow a lot of the people across

the value chain of AI to do so much more. But then they also come with their own risks and and as much as I understand once the openweight models are put into uh into the market then uh

then uh it's not that you can uh put the genie back into the bottle. So uh so so from that point of view I think uh to to help us understand uh what is it that you are seeing in terms of the evidence

to say that uh where where where does governance sit so so the trade-off is to make open weighted models more and more accessible and available but from a governance point of view uh where do you

think uh uh we are in terms of confidence levels uh where do you think uh uh are there ways to measure this well and and also uh which are the areas where uh governance would be

non-negotiable uh in terms of if you wait against making the models available where you would say that no in those areas uh we cannot do this unless ABC is met. So so really you have about I took

maybe a lot of time to explain this question but uh I'll give you more than double the time to give an answer. Thank you Karina. Yeah &gt;&gt; thank you very much. I also should say

that we have a 20page policymaker summary of the report. So you don't have to dive into the 173 pages. Um so yes, so open weight models are a tricky beast because as a she said once they're out,

they're out there and it's really difficult to to take them back or to modify them. So when we think about how to evaluate the risks of open weight models, we first have to ask ourselves

or open weight systems, we first have to ask ourselves, you know, what what is being released. It makes a difference whether it's the weights, the parameters of the models or whether it's also the

training data, whether there's also um you know whether the model has like a tool belt that allows it to uh to use tools. So um that's the first step what is it that is being released because

that bears on how uh on you know how we can apply safeguards. The second step is to measure what can a model do. So the capabilities so very often the capabilities of of systems directly

translate into the risks. So you might have for example a system that's very good at detecting flaws in software. the software vulnerabilities um that allows you to patch up software uh you know to

find the flaws and to patch them but it also allows you to find the flaws and exploit them. So there is always this dual use potential of uh general purpose of general purpose AI. So understanding

the capabilities of an open weight model also gives you an understanding of the potential risk that model might pose. Then the third step would be to understand the misuse potential of the

model. So how easy is it to remove the safeguards and how easy is it for example to fine-tune a model uh to output harmful content and you can you can test that. I mean the the way to

test it is I mean it's currently an evolving landscape so it's quite hard to hard to test it but you can you can try to adversarily fine-tune your model to create harmful outputs and this is just

this misuse potential is of course a big factor when we think about the safety of uh open weight models just to give you an example um open weight systems are now regularly used to I mean there are

thousands of openw weight systems out there that have been fine-tuned to output uh pornographic content or um so see some material. So this is really a challenge that we're seeing currently.

Now the last step that we uh that would be to do some ecosystem monitoring. So basically understanding you know who has modified the model or you know a fine-tuned version was based on which

model. So model provenence and just understanding how open weight models develop over the course of their of their lifespan. Now I think one of the biggest uh mistake that's being made in

uh in governance is often to just confuse or to compare open weight models open weight systems with closed weight systems. But they're very different as uh Ashish said because we can temper

open weight models. We can uh we can data break them. we can fine-tune fine-tune them to produce harmful content and once they're out it is really difficult to navigate that. Now

just bridging over to the governance part um so from a governance perspective the best thing to do is to try to govern the model before it is released. So for example, a good release strategy would

be to first test an openw weightight uh model and like have it have only a small circle of researchers access to the model in order to to figure out how safe it is, how easily safeguards can be

removed. Um there are also some technical ways you can technical sorry technical techniques that you can use to make open weight models a bit more resistant to tampering. For example,

data curation or uh some unlearning techniques. All of those are in the early in the early stages. But &gt;&gt; uh is there an example of a good openweight mo model release which you

have seen or is there is example of a bad model release which you have seen in the openw weight category just real world anything? &gt;&gt; Yeah. Yeah, I mean I don't want to I

don't want to point fingers here, but I just to give you an like a good example would be to have the staged release um to have um first, you know, only have a limited amount of people access to the

model and then before letting it out. Um, also to have good ecosystem monitoring in place and a bad example would be, you know, what we're currently seeing with, you know, deep fake image

generation where there's really a big ecosystem of models that can be easily used or are fine-tuned. I mean, there are thousands of models out there that can be fine-tuned to generate um, CESA

material. &gt;&gt; All right, great. So, uh, no, thank you for that. Uh, uh, Karina, I'm going to come to you, Jules. uh I mean uh and I know we have been discussing and you

have been really uh uh looking at this landscape for a very long time. So uh but but we are now in the context of AI. So uh when you look at uh jurisdictions across the world I mean uh in some sense

you know what is really hard to do in practice today. uh uh so we can look at it in two lens and I'll go back to this original theme that uh where the intent is aligned but u then again in terms of

uh technical limits unclear measurement we are not able to uh uh you know uh meet the governance expectation and the other is uh where the challenge comes from the incentives in terms of what we

talked about competition or user engagement and so on so forth and uh where do you see those tensions sit and what is it that you think is working uh where we have probably you know the

traditional tools of risk management audit u and all of those other uh governance mechanisms work very well in this AI world and where do you think they don't and therefore uh that adds a

dimension where we still don't have a fix any thoughts on that and you can obviously compare some geographies but uh but it'll be good to get some real sense in terms of examples

&gt;&gt; thanks and I'll share based on uh where I sit and so uh future privacy forum uh is comprised of the chief privacy leaders of 200 plus companies, many global, many local um lead AI governance

officers. Many of the privacy and data protection people have seized or been voiced on to play a very significant role in AI governance even though of course the issues go far broader. uh but

we also do a lot of capacity building with data protection regulators, civil society groups. So we try to be the center place where the academics and civil society and uh people who are

thinking the hard issues through uh come together to talk to compare notes to come up with those best practices. So the challenge many of these organizations have had at the beginning

is who in this area of AI where it's permeating every aspect from how you deal with employees to how you market to you know how you do research um who has their arms around this um is it the

privacy lead well they don't have the full scope uh or there are these new AI responsible AI people they may not have sort of the full scope so we're seeing a huge scramble uh to figure out what does

your infrastructure look like and if you're not a giant global company with lots of people and lots of capacity uh where do you situate this? Is this a legal role? Is it too technical for the

legal folks to lead? Here's what we're seeing. We saw initially many of the privacy and legal people sort of grab it. They they know how to deal with those regulators. who was the first

regulator to sort of say to uh uh open AI stop you may not operate in my country the grante the Italian data protection regulator right so uh uh many of them uh were the first to step up but

they didn't necessarily get additional uh resources um and they initially started creating a little bit of a gatekeeping a little bit of a choke point at the same time the business was

allin we have to go we have to move if we don't move fast we're going to be you know disintermediated by all the competitors uh we can't wait for you to tell us exactly what this means under

the EU AI act and we can't wait for you to tell us exactly what does anonymization under the data protection you know law in India going to look like and so we see the business now seizing

hiring its people to scale maybe the nice way to put it to scale AI governance um but now they're doing impact assessments and the data protection lead is doing the same but

different impact assessment to comply ly with automated decisioning to comply with California's laws to comply with global laws that look the same that are about you know assessing whether or not

the data can be used for training. So uh still a little bit of chaos and a lot of diversity and organizations actually figuring what's the role of the humans and all of those humans now are trying

to lean a little bit harder on AI to do these sort of assessments and to sort of scale governance and of course we know all the issues around you know accuracy and so on and so forth but the tools are

getting you know quicker and the feedback I'm getting from people who've trained models on years of assessments and years of reviews that they're getting very good quick information.

They still have to do some work and obviously but they're they're getting surprisingly uh increasingly uh good um good results. Um

I'll add just one more piece. um you raised the um incentives and the pressures and um you know I'm old enough to have lived through I was the chief privacy officer at AOL once upon a time

and I was old enough to sort of live through wow websites are exciting and there's ads and uh we all love the ads it keeps everything free and then we saw all the critique and concern is the

advertising you know stealing data marketing too aggressively doing all these sorts of things because we didn't have really good baseline lines and even though good actors were trying to live

up to some responsible level of standard, lots of other companies and startups and this and this, it hard to hold the line when somebody else is increasingly going one step further. And

so we made a little bit of a mess and we have a lot of, you know, negative reaction regulatory reaction around the world around adtech. And then when mobile launched, everybody was going to

be very respectful. It's location information. No one's going to use something sensitive like that. And then again we saw sort of the the pressures. So it's urgent that we have whether it's

law best practices standards it's urgent that we have clear understandable baselines otherwise the competitive pressures over time end up forcing a bit of a rush to the bottom but also make it

hard. We are so dependent on each other in this business right everyone is not building a foundation model. Everybody's working with tools that are built on other tools that are built on other

tools that are built on other tools. You can't comply unless an entire chain of companies are all in the same boat about what it actually means to not be biased. What does it mean to have legitimately

collected the data? So, we need those consensus rules, whether it's law, policy, uh, industry standards, the faster we can put them in place, even if they're not perfect and we can tweak

them over time, the sooner we can ensure that the incentives are fair. All right, Jules. So, no, thank you very much. I think um there is a bit of a progress is what I'm sensing from uh

what we heard till now and also this point you made right uh we don't want a race to the bottom rather than we what what we want is people to shine the light on the good practices and and

create more momentum around that. So, uh Gail now you have heard the scientist you have heard the think tank but uh it is a place like Google where the rubber hits the road right? So uh uh and Gail

Ken, she's the director of global affairs and public policy at Google. So um given uh where you sit in terms of uh uh uh multiple jurisdictions and so forth, I'm going to uh focus your

attention on the entire idea of looking at the world as a fragmented place when it comes to regulation. So, so the question for you is that uh when do you choose to apply one set of uh governance

uh uh uh let's say u you can call it tools you can call it a standard and when you uh try to do what the local law requires in terms of localizing and then uh uh and and this is to get the your

baseline but then I also want to understand is there an example where uh you have said all right uh the baseline is good but we are going to raise the bar and we are going to apply something

which is uh to a higher standard of governance and we will do it globally. So uh help us understand that Gab. Yeah. &gt;&gt; Yeah. And and thank you for that question and it's great to be here in a

country that itself is thinking about and and demonstrating so much diversity and I think if I'm going to hopefully pull a couple of like Indian examples to show how we're thinking about this

global versus local. I think my starting point is to say it's not an eitheror. If you are building a product that is used like search, which is um which is used by billions of users around the world,

you really need to be thinking about both. And you're not going to achieve a product that has the level of success that search has over the last 20 years and that we hope Gemini will have h

without thinking about both like the local and the global. So I think ours um h like two two starting points. Um first of all we very much think that um when you're building part building products

and in particularly when you're thinking about governance you have to be doing it in partnership. We know that our users do not expect us to be coming up unilaterally

with our own sort of like principles. They expect us to be doing that in partnership really with sort of like um three other entities. So they expect us to be acting responsibly. Um they also

expect us to be working with governments. They expect us to be thinking about their needs. But they very much think expect us to be um using the great knowledge whether it's from

academia or or from think tanks to inform how we're how we're thinking. So that's like partnership and governance is absolutely critical. The other thing that we spend a lot of time thinking

about are what are those principles that are raising the bar and for us on on AI it is like our our foundational principles are ones about being like are universal. So they're about being

socially beneficial. They're about um avoiding unfair bias, building and testing for safety and being accountable to people. And that's really bedrock of the of the products that we're building

um using AI. whether that's search Gemini or anything that we're doing in cloud. So let's like start with like safety and like what does that look like in terms of building a a global standard

and very much we our goal is to make sure we are producing safe um safe systems because we know that when it comes to systems that are trusted um people have an expectation of safety

they also have a clear expectation of of privacy and we're not going to get trust if we're not thinking about those. So what does it look like when we're thinking about safety in Gemini? We're

thinking about the model itself. How can we make all the things that you talked about like how can we make sure that it is itself a safe a safe model? Um whether that's about what the model

itself can do or what users could use it for. How does that then um what does that then look like when it's the models are implemented um in products like um like Gemini? How can we define those

principles and then make sure that we are um that we are testing and constantly about how things might operate locally. So let me give sort of like two examples

of um uh of how we might think about that locally um and what nuance that we need to understand. This is really where having those conversations with users with governments and with civil society

um really helps um locally as well. So um what we know um about our users in India is they are the biggest users of multimodality. So what that means is that while some other countries might

just be reading text in India there is a huge reliance on video on audio um on images uh to both convey information and to understand information. So what does um what does that mean in terms of like

you know we need to think about that local content when we're thinking about safety and when we're thinking about privacy and when we're thinking about governments more generally. The other

point um that h sort of slightly different like way of thinking about it is when we're thinking about risk what is the benefit of some of the um the products that we are producing that

might help the Indian government and other governments understand about risk. So tomorrow you can come and listen to me talk in a different panel about creativity and AI. So what are some of

the benefits that you can get from image generation as well as some of the risks and that then plays into very much like what what are the what are the governance models that we need to put in

place. &gt;&gt; All right, my last bit was about an example. uh uh um I don't know whether that came through but uh if I were to give you a choice between an example to

also reflect on what Jules spoke spoke about right given in the context of AI the speed with which models are released is important and we know that uh you know if I'm not going to repeat some of

the past but I think Google has uh probably uh held itself to a certain standard in terms of how you think about it. So any reflections on how that plays out as it is it attention or not a

problem? I &gt;&gt; I think because our AI principles are there regardless of what the model is. We are always holding ourselves to to that standard like we take the um we

take our responsibility to be respon to be bold and responsible very seriously because we it doesn't you know we might know how many different versions of the Gemini model have come out. That's not

what um our users are necessarily thinking about. We know that they expect the same standards of safety and privacy regardless of what the model is. So it's it's like it is a standard regardless of

how quickly we have to get models out. &gt;&gt; No, that's good to reiterate and really appreciate that. Uh uh I'm going to come to you Ivana. Uh so uh Ivana, you are the global privacy uh and AI governance

officer at Vipro. You know, it used to be a nice and boring world. uh uh we were happily going around and doing what we do as IT services industry and now AI happened and and suddenly we are part of

the same exciting bunch and in governance boring is the high standard. So uh so u so when you think about that uh and in this AI world and you are wearing the deployer hat so um is the

governance sitting with the client is it where is where is your skin in the game in terms of governance so that's the kind of a context I want to lay out and then I want to also understand that uh

so that's point number one the the sub part of this is that so you are doing what your client is asking you to do so therefore um does governance uh come into your track at all? And the third

question is can you also give me an example to illustrate where the client wants a solution. You know what you're doing. You tell them look look you're going to do this but uh you need unless

you do this well this is going to bite you in terms of where it matters and and and then obviously there are these are business decisions so there are cost implications and all of that that also

probably comes in. So how is that conversation really shaping up and and and help us understand therefore what is really deployer uh ecosystem sitting in the governance context and what is the

importance of it and what do you do Ivana &gt;&gt; easy question so uh so first of all I wanted to say thank you for this panel I want to say thank you for NASCOM as you

know we we pro work very closely with you and thank you for all the work that you're doing championing especially right now the uh IT eosystem system here in India and I wanted to say thank you

for to the privacy uh future forum the future privacy forum for the inspiration that they've given me over the years and I wanted to to come to to answer your questions I just wanted to start when

Jules pick it up because Ju said you know in companies we've had these at the beginning it was the privacy people who went into this field because we have an understanding of risk we have an

understanding of how to to run a global program and all of this and it's exactly what happened to many organizations including mine. I was chief privacy officer and I took on AI governance. I

actually uh took the initiative to take it on and then what happened was that we did what many organizations do many deploy organization as well. What we do is you set up a task force. You bring

the entire company together. And then you realize one thing. You realize that it's not enough. And you realize this as a you realize this as a deployer in the first place

because you realize that the customers out there, they want you to be proactive and they're not just there to say, "Hey, I want to innovate like this and just do it for me." They

say, "I expect that what you do is compliant, is safe, brings long-term value. So, you need to really change the way that you think about it." So, what I did was, and I am grateful

that at my company, I was given the leeway and the freedom to set up the governance structure as I and others thought it was it it was important to do. And you know a lot of teaching that

came through your organizations have been really useful to me. So what we did was let's shift the narrative. So the narrative here is the governance is not a tick the box exercise of compliance.

It's not is actually part of our strategy capacity to generate growth and to offer our clients sustainable long-term value.

This is a mindset shift that is not easy. It's not easy. &gt;&gt; Do you get push back? &gt;&gt; I can't say. I can't say. I've got people watching from my company. I can't

say [laughter] but no I mean no because I've good at what I do. Okay. And second because it's there is a real understanding now but it's not an easy

change and it's not an easy change because many organizations like ours across the world we've been just saying okay the clients will tell us what to do we do it then it doesn't work like that.

So I go to client meetings and I say to them and they expect us to work together. They say you bring on the Google tool, you bring all this tool, you bring this all this uh open source

tool. How are you actually protecting me and that's where you have the whole discussions and some of it they go onto the liability side. So we had to upskill a lot of our legal teams and that was

part of the governance to make sure that we can handle this conversation. So part of the governance is the legal team, the vendor team because obviously you work with a lot of third party with Google

with many others and we say okay where does the responsibility end you know there is another big thing big theme and then you sit with the client where you discuss they say for example take a now

the big thing everybody wants to go agentic and of course there are massive issues but you sit with the client and they want to roll it out and you say no and You want the example? I can't give

you the client, but I'll give you the example. The client says, "We want to roll it out. We want to go 50% agentic." You say, "Hold on a sec. Hold on a sec. There are risks here. You have cascading

hallucinations." [snorts] You have to define what is your human intervention. And it's not the same for everybody. What does it mean to be it to be meaningful? Hold on. We're going to do

we suggest that you do a roll a roll out which is um you know, one step at a time. We start with the easiest areas where there is there are less risk and then we roll it out.

&gt;&gt; All right. No, I'm just giving you a hand signal because I'm the conversation because this is the first round and I want to uh give him that space. So um we all know X, we all know

Grock, we know SpaceX and uh we have Vfredo who is representing XAI. So uh so a very interesting place. So uh from what I thought was a boring kind of a conversation which is already

interesting on the deployer model and deployers just for you to understand are doing a lot of heavy lifting when it comes to governance. Uh but moving on from that uh so uh uh um vifilo I'm

going to pose that trade-off thing for you because uh we uh we kind of you know look at it this in a in a way that sometime governance is binary and and you just do it but but I think there are

important questions which we should really understand. So um uh when we think about you know uh in terms of input and output. So think of input as uh going into the AI and and and when

and therefore what what metric for governance is probably in terms of transparency and and and then the output is the content uh which which is out there and

then uh then then the brakes we apply in terms of making sure that the content is uh is uh not deep fake is not misleading and all of that then then I think the brakes become the governance. So uh and

the trade-off is that you are uh you are rightfully trying to protect your trade secret and you're also probably pushing the envelope in terms of what you think in terms of speech, in terms of freedom

and all of that. So so reflecting on where you are today um uh can you give us some examples uh in terms of how does uh governance sit in your conversation when you think about products, when you

think about competition, when you think about scaling up. Uh it'll be lovely to hear from you. Thank you. &gt;&gt; Thank you so much. Um and thank you all for being here. AI policy governance hot

ticket. Um but I you know just moment of personal privilege. I'm just this is my first time in India and this AI summit is like really incredible. Um just the amount sheer amount of people that are

here and the enthusiasm. Um so thank you to the government and thank you to NASCOM for having us. I need to collect uh just some some input here just to know sort of who's in the room. I see

folks of all ages. Raise your hand if you're a student. Yeah, that's awesome. Thanks for being here. Um and curious startups in the room, folks working on startups. Okay,

great. Anyone have an X or Twitter account as some folks call it? Okay, cool. Anyone used Grock before? &gt;&gt; Okay, great. Um, no, that's that's really awesome. So, I appreciate

everyone's enthusiasm. Um, and I think everyone here probably uses an AI assistant of some sort or interacts with AI every single day. Um, so yeah, XAI is one of uh the several like big bigger

frontier labs though so many companies working on AI. I think it's touching. It's every single company. &gt;&gt; Fredo, you do realize I have tough follow-up questions for you. Absolutely.

So please, please, please uh let's let's come to the meat of this. [laughter] &gt;&gt; Sure. Thank you. Um I did caveat. It was a moment of personal privilege. Um so you know you can go to x.ai/safety

right now and you'll look at and you'll see some foundational documents that outline how we think about uh safety. Uh safety is everyone's job at XAI, right? It's not one particular department or

team. uh it is foundational to what we do and governance is foundational to the work of everyone at the company. Um but at at that web page what you'll see is our frontier AI framework. We had to

rename it uh due to California laws that were passed uh last year but it's our risk management framework and that will go into detail on how we think about the different risks that AI may pose. um you

know how models may behave um how models evolve over time the different types of risk uh whether it's dual use technologies um you know child safety risks self harm

risks political bias sophancy all these different things you'll also see our model cards and th those are published when we put out uh our models so you'll see our Grock code uh model card you'll

see uh Grock 4 and Grock 4.1 model card uh soon to be uh Groc 4.2 which will be released soon that a lot of folks have been waiting on. Um, and I think those model cards have sort of becoming best

practices uh amongst the frontier labs that really get into the meat um of of model training um you know the different benchmarks that we're testing against how we do evaluations, how we think

about those different risks and those different models because as these models advance um certain risks become more prominent or more you know uh have more potential. So we're constantly thinking

about that. Um and then you know as we deploy these models um we have uh the benefit of sort of building in public um you know XAI and X uh sort of work in tandem and and we operate you know one

of the bigger public social media platforms and that's also where the AI conversation is happening where engineers are spending their time every single day where policy researchers and

and and others are giving us constant feedback and so we have this really sort of building in public feedback loop that helps us sometimes mitigate these risk and make quick uh corrections and so all

this kind of work together um you know for us addressing risk &gt;&gt; all right no uh we are delighted to have you and welcome to India and hopefully you'll have a much uh richer experience

as you complete your travels so okay all right so now I'm going to be uh switching tracks in terms of the speed of some of this uh because I can see the clock and I can see our uh Spock looking

at me and she's still smiling But uh that could change rapidly. So Karina coming to you uh uh you know u uh wearing your scientist hat what is that one place where uh uh you know regulator

expectation and science is in your sense meeting in terms of where you see that okay fine uh the regulators expect that from governance point of view and and we are ready from a uh uh technical point

of view in some sense and and the second example is that uh where you see in terms of uh uh uh the uh the areas of tensions where uh uh when you look forward you will see a regulator's

expectation in terms of governance increase but there is lack of clarity in terms of what can be technically done. So for uh and and you can also link it to the fact that uh if you want to

explain that where perhaps technically transparency is possible but it is not the tech the science but it is the other parameters like maybe uh commercial interests which are probably holding

back transparency but uh you have as much time to answer as I've taken to ask. &gt;&gt; I'll hurry up. So um I think where both could meet would be in terms of

transparency around the details on how the models were trained. So you know there already are the safety frameworks, there are uh model cards but just or going into more details would be uh

really useful to just ensure there are standardized uh safety evaluations and that policy makers understand how companies have um have evaluated and and tested their and built their models.

Second point um is so the challenges are one of the biggest challenge is what we call the evaluation gap in the report. So this is that very often we we test our models against benchmarks and we do

that in laboratory settings but quite regularly the benchmark performance doesn't really translate into real world performance or real world safety. So you might have a model that passes a medical

exam but uh so you know for medical students but then in real world contexts it still gives you misleading potentially harmful answers in 19% of cases. So this is a big problem and

that's really one one that uh we're going to have to look at like how can we make uh how can we make the testing the pre-eployment testing of models more robust. All right. Thank you. Uh Jules,

uh coming to you, I mean let's uh look at where you expect or where you would want to drive action in terms of you know governance uh improvements and take some kind of a highstake use case. You

could take child safety, you could take uh you know healthcare, you can take even an adtech which is uh in some sense the prevailing model and what would you want to see uh come good better in by

early 2027. Uh let's give it a 12 month odd window. So and brief answer thank you and I'll not lose my moderator mic. So you'll please take Ivana's mic. Yes. So,

&gt;&gt; so since we're the future of privacy forum, let me give you a little bit of next steps because this is what people expect and demand of us. Um, we're seeing a lot of the leading researchers

moving from focusing on scaling LLMs to spatial intelligence. So, we dealt with all the issues of scraping all the text in the world, scraping all the images. Now we're scraping the real world so

that the next level of improvement can be based on understanding the physics, understanding the way um physical world works. This is critical to self-driving. It's critical to medicine. It's critical

to so many areas. But the people in this room who hopefully have some interest in governance are then saying, of course, wait, you're scraping what my face, you're scraping my home. I want a robot

that knows how to make coffee. It's got to watch a million people make coffee in their house. um we um so quickly identifying so that we are beginning to deal with the bystander privacy issues

and all of the ethics and inclusiveness issues um that are going to come along with scraping the world quick. Um in India of course we have the data protection act and uh how it deals with

an anonymization and deidentification is going to be so critical right we step out of some but not all problems when we can say well we deidentified the data so we don't have a problem but those

standards are in flux and if we don't know what's in and what's out then how do we possibly you know safeguard the data uh the Europeans are moving in one direction other jurisdictions are going

in another direction we need a little bit of clarity uh there and quickly I'll give a vote for benchmarks with the imperfections that our colleague Harris has pointed out because some so much of

what we're talking about here is engineering driven and when you give the engineering team do what is reasonable here minimize the risks of harm they're like give me a number give me a metric

so we need to reduce some of this to benchmarks effective benchmarks hopefully but we need benchmarks for privacy we need benchmarks for many of these other safety and risk and

governance issues and then the last thing I'll say is you all know sort of one trust and some of these other platforms that sort of launched to help with governance and I remember saying

it's too complicated you can't just put out a one-sizefits-all platform but it turns out with millions and millions of people around the world all who don't have a lawyer sitting at their side or a

governance expert or a compliance expert we need something good enough every startup has some ambition of working globally so tell them you need a whole team of lawyers dealing with all the

complexity it's impossible so we need platforms Credto AI just launched something hopefully we'll see others that give all of you free or lowcost access to decent enough advice that lets

you assess lets you have different governments frameworks sort of built in in one easy way. &gt;&gt; All right, great. uh um so uh one thing which I will double click is that from

an India context getting the data protection law implemented well in the next 12 odd months is really a high priority and if that happens it'll do a lot of good for governance and second

thing is that as as a tech industry what we are interested in is how do we make technological governance tools really available to solve some of these issues this compliance is not no longer the

kind of compliance that we were used to. So with that coming to Gail again, uh so Jules has just left you maybe 30 seconds shorter than what you would have got. So [laughter] but anyway so uh what is that

one area where you know uh potentially that you took a decision as a company uh where uh you felt that while the rules and uh regulations around governance was still in a gray zone but you decided to

go ahead and do something and second is that where do you see most friction in the uh coming times in the maybe next 12 to 24 months uh when you think about you know the way AI is being rolled out the

way uh you have a suite of uh uh you know products across the length and breadth of this AI and and uh where really you know from a government point of view you see those conversations

really sharpening. &gt;&gt; Um so I think we're in a fortunate place in that we are generally in agreement agreement in one area which is that I think we're all now um seeing that the

riskbased approach is working. So we have that as a principle. I think an area where we're going to be um really thinking about what governance looks like and what it looks like in terms of

the products we're building is one that you mentioned which is AI agents. So if I I mean it's also one you know it's very exciting being in California at the moment and um as it is I think in in

India as well when we're thinking about what potential AI brings uh for everyone and in particular when we're thinking about our products like search and Gemini that are already serving billions

of people what does it mean to be really truly integrating AI into these um you know in a way that we have consistently done over the last 20 years but is offering greater opportunities and

agents is an agentic as one of those clear spaces. You know, Google's um uh mission is to organize the world's information. You probably all understand that. But it's also to make it

universally accessible and useful. So we are moving from giving people information to helping them get things done and that's agentic. But what does governance look in this space and it's

where and I'll be super brief because there's lot not a lot of time. we are going back to our principles to those AI principles and what does it mean to make sure that we are being accountable. So

how do we make sure that there still are those human in the loop? Where is the best place to have that? Then if we're looking about making sure that we're not um that we continue to make sure that we

are that we're avoiding creating or reinforcing unfair bias. What does that look like? We're asking agents to take steps and a lot of it is stuff that we've we've touched on already. What

data is being used? How are we making sure that we're that we're red teaming? But still those same principles, but I'd say agentic is the area that to answer your question whether it's still agree.

&gt;&gt; All right. No, that could be a unanimous answer. And I did promise you I'll ask you one followup. So do you see in the next 12 odd months or more the questions in governance when we think about

copyright do you think we'll get to a better place in terms of our understanding and and a kind of a shared uh uh you know uh way of looking at it. &gt;&gt; I if I take I could take the entire four

minutes to answer that question. I think that um the discussion around um use of data for AI um will be one that will continue and I think we will probably get to a more nuanced position where we

are um looking at both what's the benefit of the models and how do we put in place um governance standards when it comes to the output of the models. &gt;&gt; All right. Thank you. And India is

having a lot of interesting conversation on this topic. So we hope we contribute to that discussion. uh Ivana uh I mean you explained it so well I'm tempted to skip you but no I'll ask you a follow-up

question I have a great question for you sorry just joke um so if you take a a kind of an example you know like a like a important use case maybe it's healthcare maybe it's the government

services and when uh you are really uh deploying a lot of those uh uh uh digital transformation solutions um can you walk us through that uh in some of these things that uh how does uh

governance really play out? Uh are are there even standards where the at least from a government point of view do they know how to assess for this? Because a lot of the time there it from a

technology point of view it just slows down adoption. So uh so governance as a way of making sure that they they are able to adopt faster. Um any any where are we in the world? Are we still in

early days or we are we are much better? Yeah, I mean I think um it varies if I may say in the sense that I think a lot of organizations they have set up a lot of our clients they've set up governance

structures and to an extent they realize when it comes to actual implementation of AI and transformation that is not enough and that's where I think it it's really

important because starting from acceptability criteria of use cases right um to you know bringing the whole organization from the legal team to the risk managers to that is also where

they're struggling. Okay. And it's normal because we are all evolving so quickly in this space. Okay. So they uh so there is cocreation I would say on that in the sense that depends on your

organization obviously but across different areas of organization there is a request that say hey how are you going to support with these areas. Okay that's one element. Then there is another

element where they say for example okay we are doing this specific transformation in healthcare and they say how do we make sure that we have privacy cyber security resilience data

protection uh and legal safeguards embedded in what we're doing and that's that's the complex one because that's where you as a as a a deployer you offer your view you say for example our

platforms that's how we've created them right but they also O say um they also say to you that's where also negotiations and issues around liabilities all that comes in

um and this is where the tools become important because this is where and this is where India can play a big role is where you &gt;&gt; so what will help

&gt;&gt; sorry &gt;&gt; what will help further because we we are so interested in adoption &gt;&gt; yes I think what helps forward is so the technolleal approach is going to be

crucial here and this is where India can lead is creating tools that enable people enable sort of the clients and the customers that we serve to really be able to to manage the governance.

&gt;&gt; So I'm going to take that and and I'm going to move to uh our last speaker. Uh so Vfredo uh I think uh I'm going to give you a kind of a scenario. So u and this is about the

shared I want to get your perspective on the shared liability how it sits between society the user in the sense and the government and the regulator. So uh let's uh talk about a teenager who is

using grock and uh what would you set as a default experience in terms of what controls uh should lie uh uh with the parents and and in some sense uh with with the user itself and uh what are

kind of a scene where you would expect government to lay down the rules and and where do you think as a platform you would set the default? Uh help us understand a little bit of that. Yeah, I

think that question is one that governments around the world are wrestling with when it comes to AI or when it comes to use of social media. We've seen the Australians ban social

media for uh kids under 16. We're seeing those similar types of proposals all around the world. Um and they're not easy. I mean, what is the role of the parent in in their child's use of

technology? Um I think parents are grappling with that every single day and that's not for a company to dictate. Um and you know certainly governments around the world have different norms

and expectations and and I think the implementation of this is going to vary and we will comply with with the laws of the countries in which we operate. Um but I think and this is a question I've

been at Twitter and X and XAI for a while now. Um, you know, we dealt with this in in the on the X platform and social media general is like what is, you know, X is not really catered to to

teenagers. We don't have a lot of teen teenage users. Um, but what is a teenager's right to access information, right? And now with AI, what is their right uh to have, you know, the

universe's knowledge at their fingertips? But I think we can all agree, right? We there are some fundamental safeguards that that we all agree there's illegal behavior that we

we can all agree on that we want to prevent, right? We want to prevent child sexual abuse and and other forms of child safety. Um, you know, we want to prevent uh self harm, right? This, you

know, we don't want our our platforms, you know, being used um, you know, to facilitate harm, right? And that's really what it comes down to. what foreseeable harm can we see with the use

of this technology? And that's sort of what I think we we entirely get your message and I we're going to take that for a a resounding yes for governance at least. And with that uh so Karina, thank

you for uh joining us. Wifredo, it's your first visit here. Uh so delighted to have you and and &gt;&gt; I'll finish up my points next time. &gt;&gt; Oh no. And and Gail uh equally delighted

to have you here. Thank you. and Ivana as always and Jules it has been wonderful talking to you and you guys have been a wonderful audience. Thank you very much. This is Ashish Shagaral

from NASCOM and this is the end of our panel. Thank you. If you could just come in the front,
