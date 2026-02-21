# Building AI Readiness: From Compute to Capability

**India AI Impact Summit 2026 — Day 5 (2026-02-20)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 09:30 – 10:30 |
| 📍 **Venue** | Bharat Mandapam | West Wing Room 4 A |
| 📅 **Date** | 2026-02-20 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/kFiPHMpVTC8?feature=share) |

## 🎤 Speakers

- Dr. Paneerselvam M, Ministry of Electronics & IT
- Thomas Zacharia, AMD
- Timothy Robson, AMD

## 🤝 Knowledge Partners

- AMD

## 📝 Summary

The proliferation of Generative AI, driven by the advent of Large Language Models (LLMs), Visual Language Models (VLMs), and Agentic workflows, has fundamentally transformed the requirements for high-performance computing infrastructure. For the users of the IndiaAI compute portal and the broader ecosystem, the selection of Graphics Processing Units (GPUs) has evolved from a simple metric of peak floating-point performance (FLOPS) into a complex optimization challenge involving memory bandwidth, interconnect topology, and architectural specialization.

## 🔑 Key Takeaways

1. The proliferation of Generative AI, driven by the advent of Large Language Models (LLMs), Visual Language Models (VLMs), and Agentic workflows, has fundamentally transformed the requirements for high-performance computing infrastructure.
2. For the users of the IndiaAI compute portal and the broader ecosystem, the selection of Graphics Processing Units (GPUs) has evolved from a simple metric of peak floating-point performance (FLOPS) into a complex optimization challenge involving memory bandwidth, interconnect topology, and architectural specialization.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/kFiPHMpVTC8/maxresdefault.jpg)](https://youtube.com/live/kFiPHMpVTC8?feature=share)

---

_[← Back to Day 5 Sessions](../README.md)_


## 📝 Transcript

So congratulations to all of you. You should be proud. And I just want to say that on behalf of the 30,000 AMDers worldwide and particularly 10,000 in in India, I I just want to congratulate you

and thank you for this opportunity to have this discussion. Since we are a small group, I think we'll keep it informal and uh and I want to make sure that somebody please keep track of time

so that I'm I do justice to my uh colleagues in uh here and the D the topic that I've been asked to talk about is sort of building AI readiness from compute to capability in AI in this

field of AI these days there seem to be an overindex indexing of AI I and GPUs when in reality AI is much broader. GPU is obviously a significant part of the core infrastructure, but but what we do

at AMD is to to really provide a full suite of AI capability from AI on, you know, AI PCs to core infrastructure to all the way out to the edge. And I have my colleague Tim from AMD. So we

decided that we're going to uh tag team and so I'm going to focus perhaps a little bit on the sovereign side and uh and then Tim can focus on the enterprise side that that's all it's okay with you.

So let's just talk about sovereign uh AI in practice and exploring the motivators. So this particular slide was something that is created by by the Department of Energy uh in the

United States as part of a new initiative that was kicked off by uh the Trump administration called the Genesis mission. And I had um a role to play in terms of trying to to support and

address uh in in crafting this initiative. And the framing is very simple. If you look at the the top line, uh I don't know whether this has a pointer

&gt;&gt; pointer. It's okay. So the top line, the white uh line is funding in the United States for R&amp;D. Today, United States spends about a trillion dollars a year in R&amp;D. That's

just mindboggling. Not all of that is government spend. It's roughly about say 20 to 30% US government and the rest industry. The bottom line is what we consider research

output efficiencies. So the problems are getting harder. It is getting more challenging. And even though we are t tackling trying to tackle really important problems

uh the sense is that throwing money is not having the same rate of return. And this slide basically asks a question, how do we reduce the gap? And and the the the

at least the the the thesis for the Genesis mission is that you can use AI as a way to accelerate scientific discovery. The Genesis

mission has three area three areas of importance for us. For people who don't know about US Department of Energy, US Department of Energy is the nation's largest physical science uh agency. So

it has it operates through 17 national labs. Some of the earliest ones like the one Oakidge National Laboratory which I used to lead before joining AMD came to being during the Manhattan project and

Manhattan project about 65% of the entire funding of Manhattan project was at Oakidge National Laboratory and in addition to you know in fact I think the prime minister

mentioned that about nuclear energy both the destructive aspect ect as well as the the significant uh outcomes that came out of that from nuclear medicine to nuclear navy to nuclear energy these

all came you can trace back to Manhattan project so US department of energy is not only responsible for energy uh but it's really a science organization it's got

three priorities one is just discovery science second is energy and the third is national security and and national security. uh you America has a really interesting

uh things a way of keeping the the nuclear arsenal away from the military in the sense that it is the department of US department of energy and not US department of defense or department of

war that is responsible for the nuclear arsenal and the three lab directors lasos livermore and sandia has to certify each year that the arsenal is ready for the president of the United

States. So this is a thesis hypothesis. If you think about research, if you look at the left side, it starts with hypothesis, then you conduct experiments, get the data, and today you

take the data, use AI, machine learning, etc. You get analysis. What you're trying to do is to make this much faster by so that you can have science outcomes coming out faster and do it in a reduced

cost because you cannot throw more and more money at this problem and enhance global collaboration. uh I think there is a genuine interest on the part of the US that uh this is

this whole premise is not just a US issue and so I think that uh there is likely announcements that suggest that countries like Japan and Europe and UK and others may be part of this overall

approach to drive sovereign AI for those aspects of um AI deployment and scaling that is uniquely a government or state function. So that is I mentioned broadly scientific discovery, energy and

national security. But if you look at the scientific discovery further to the next step then you will see healthcare, education, skilling all these things that are fundamentally

um a government function and this is not a easy task because if you think about uh how these uh institutions research is done I mentioned large fraction of it in the

private sector a lot of it is done in academia funded by government and and then of course at national labs in the United states, India has its own set of national labs, academia,

etc. So what you need to do is to take a look to see how do you integrate all these data. We at least the US Department of Energy operates these large multi-billion dollar light

sources, the neutron sources, specialized um scientific experiments. You need to be able to incorporate all these things. So you have to federate the compute and

data. You have to have cloud enabled lab operations which is not how things are done today. security and governance by design. Especially when you're thinking about uh public private partnerships.

Even in the enterprise commercial scale, you want to make sure that you have uh you know secure computing, you have confidential computing, you can maintain integrity, but also if you think about

national security, you have additional layer and then you want composable standards first infrastructure. So, so this uh this particular um program was kicked off by Secretary

Wright, well the president of the United States, then Secretary Wright and um the last fourth quarter of last year and the first announcement was done with uh Lisa Sue, our CEO, because one of the things

that they wanted to do was a unique public private partnership and so so the core infrastructure which is currently called American Science Cloud This program is just being stood up is going

to be run on an MI355 cluster uh which is what the this entire program that is aimed at driving innovation is going to be run on. And so we are really excited that we are part of this initially US

and soon an international effort to drive innovation in those areas that are uniquely government function. Um I've had a ringside seat on in computing for the last 30 years and been

responsible for a lot of supercomputing deployment. A dozen or so the last four or five of them were number one systems in the top 500 each first of a kind. This is another important thing.

Innovation, you know, if you think about AI, AI didn't happen magically uh by with Nvidia or AMD. It happened because US government took the risk to invest in first kind systems. So, we were the

first to deploy a 30,000 Nvidia GPUs when people thought that CUDA was a four-letter word. Now, everybody thinks that this is this amazing software. But change comes hard to people and and so I

just want you to know that particularly all of you are youngsters things are going to evolve. If you think that AI AI is just like the prime minister said it's just the early stages. So you have

to be open and you have to be part of this drive for effective scalable and and and impactful AI. Then deep learning came. We had this mixed precision computation. Then generative AI and last

year was really agentic AI. And some of us think that this year we're going to focus increasingly on governance. Not governance does not mean regulation. There is a role for regulation for by by

governments. But governance is that how do you want if you want to have agentic systems driving accelerating innovation you want to make sure that that input or the output has a person in the loop. The

one way to simply think about it is that if you are researchers here if you have a professor who got a dozen students who are doing research you don't let this the students just go publish things.

that is the professor's responsibility, there is the peerreview committee etc. So you want that uh human in the loop in order before you can update and let this thing to drive innovation while it also

allows it to do things that are that AI does best. So this is how we think about compute to capability. A model of national AI readiness is we want it rests on talent uh talent and readiness

of talent giving people access to to compute and models. Research enablement is key uh because you want people to operate AI in an environment where you're questioning

things and innovating all the time as opposed to assuming that what we in the industry is providing you is the only solution right so I think the if you think if you look at countries that are

leading in AI there is a very strong R&amp;D and innovation foundation that is allowing you to lead because there are people who are questioning every time somebody says something to make sure

that it is validated. It's continuing to innovate. Start up an innovation layer because you want to take these ideas and start new companies because many of these new innovation uh and new

technologies may be led by people with new ideas and opportunities and of course ultimately enterprise and public sector adoption. We strongly believe and again I heard

Prime Minister Modi say open ecosystem and open-source open platforms these things you know if you think about iOS and Android India I find has a lot of penetration of Android systems

because inherently open systems allows you to innovate without getting locked into vendors and so we as AMD has a commitment to make both our hardware infrastructure and our software

infrastructure to be based on open standards so that you can innovate around this thing any part of this uh infrastructure can be uh can be innov you know can be part of a new startup or

new company adding to that that is also an important way for India to become part of the supply chain on the semiconductor ecosystem because you don't have to start with an attempt to

go in for two or three nanometer you can actually do amazing work and be part of leading leading edge technology at different form factors. So I mentioned a little bit about how we think about uh

agentic flows and AIS can work is this is simply the way you think about it. The inner loop is an autonomous loop where AI and agentic AI does things what it what it can do fast it can it can it

can operate if you have a 100,000 GPUs you have 100,000 agents tackling this problem and and doing the you know it can actually go through the hypothesisdriven experiments and

simulation uh campaign scale coordination machine speed execution etc. But we do not allow it to update the outcome until a human in the loop has had the opportunity to

validate to make sure that we don't have unintended consequences. Now, how do you build this thing? So, this is this is if you haven't gone to the AMD booth, I would encourage you to

do this is my only plug in this uh presentation. We spent a ton of money to bring this Helios rack here just so that you can have a sense of what is not what this particular rack can do but giving a

glimpse of what is possible the next year and the year after. So we in 2007 myself and two of my colleagues uh started what is called the exoscale program and the challenge was to deliver

an exoscale system for under 20 megawatt because if you had just scaled the capability in 2007 it would have taken three to four gawatt and we knew that the government was now going to sign 4

billion dollars for power just electricity alone to run that computer. So we were motivated to drive that and we delivered that first exoscale system while frontier at Ultridge for less than

20 megawatt. Okay. Everybody thought it was crazy. It cannot be done. But there are some things very you know when you put audacious goals people rally around and then deliver. this particular rack

in one rack there are 72 GPUs that will deliver 2.9 exoflops of AI compute which is FP4 not FP64 just to be very clear but for AI capability you get 2.9 exoflops of compute capability for 220

kilow right that even in for somebody who's been in field for a long time is just mind-blowing. This is where we are headed. I mean this

is a AI is a fastest adoption of any technology that humanity has introduced. We've gone from 1 million active users to 1 billion in a matter of just couple of years and we are headed to 5 billion

users. So there is lot of opportunity to innovate in this field and all of us are going to continue to create these opportunities. As Lisa said we are entering the Yara scale. So already

people are thinking about the next thousand right. So let me just say you can you can get to zera scale by just taking 300 of those racks and putting together and then it's another

3x. So I would say in the next 10 years maybe we would be at this 10,000 factor. So the kind of problems that you're thinking about should not be constrained by what you can do today. By the time

you figure out the solution for an important problem, compute will be there. That is what we in the industry like to promise you. And and I think advancing national

economies these are one of the things that you know people might you would be forgiven if you thought that you know does AMD do these things and how prevalent are our compute capabilities.

I think Tim is going to tell you that our our our our GPUs and our systems are in every hyperscaler uh globally and and when it comes to HPC and national

priority um missions, AMD is B and the leader. If you listen to President Mcron, he referenced uh Alice Raul which is the first AI factory that uh the French

government announced the CEA announced which is based on AMD MI430X which is a variant of the MI450 out on on the rack that you see outside. So I will close by saying that a shared path forward is

really what we are looking for. I know India is in the early stages and we are really delighted to actually have this conversation. Thank you very much. &gt;&gt; Introduce yourself.

&gt;&gt; I'd like to invite our next speaker Shrim uh Paneer Salv CEO of the Matei startup hub at Ministry of Electronics and IT uh government of India. Uh Dr. Paneer Salv is a distinguished leader

with over two decades of expertise in innovation, management, strategic growth and market development. He's been instrumental in advancing India's startup ecosystem and fostering

impactful partnerships between the government, industry and entrepreneurs. In his prior roles, Dr. Madan Gopal served as senior adviser and vice president and chief innovation officer

at T-Hub and has had experience in consulting and education. Dr. Parish Thank you. Thank you. And a very warm good morning to all of you. And uh I'm so glad to be uh here amongst you and

especially among some of the very uh distinguished speakers and tech leaders from AMD. Thank you AMD for this opportunity uh for having me uh this morning. Uh let me um so you know seated

between two technology leaders. I'm not even going to attempt to talk much about technology and and I'll try and share a little bit perspective on the topic about how do you really build this AI

readiness from a more from a business perspective as well as of course technology is a very integral part of it but let me attempt to build some uh context and how do you really build the

the business readiness for adopting AI especially in the Indian context because this is uh you know uh very important to not just to adopt technology but also change the uh mindset to uh to work with

this particular kind of technology which is very different from some of these things that we have seen in the past. It's not a software that you can buy off the shelf and implement it. This is this

is something very different and AI uh generative AI is is changing the way businesses operate. In fact uh let me quickly uh do a understand the composition of the room. I mean how many

startup founders how many enterprise corporates and startup founders wonderful corporates working in large enterprises

wonderful and uh innovators researchers wonderful great so it's it's uh you know in fact one of uh Thomas' client validated uh you know this is an interesting technology that seem to have

you know have been uh gone really uh uh really viral or really uh you know adoption is so fast in the D2C space direct to consumer space and the enterprises are still catching up if if

I may correct me if I'm wrong I think there's a lot of SMBs and large enterprises I mean large enterprises may be working on it building but SMBs definitely and in India we call them

micro small and medium enterprises they're still figuring out what it is and still so it's very interesting unlike in the past where most softwares are earlier adopted by the uh by the

enterprises and and and then it later calculated into the individual usage as well. So this is this this is the first change that I've been seeing and it's it's very very powerful that way. Having

said that you know uh one of the most uh critical I mean coming to the topic about you know AI readiness uh you know compute to capability and but I'll also add one more C to it which is change

management. I think the fundamental uh you know need for businesses especially SMBs medium small and medium businesses and and and for startups this is an opportunity because you're almost an AI

native coming into this market but legacy businesses legacy especially in India wherememes are SMBs are largely owner proprietordriven family businesses family driven it's going to be a very

important understanding uh uh of the technology but it's more important to understand change and change management in this context because here you're not really uh buying something off the shelf

but you need to now change your uh your fundamental uh way of your business operates and your business workflows. Some of the some of the uh you know processes can be redundant. Some of the

there could be new uh processes, new steps coming into your workflow and some of them could be human-driven and most of them could be agent agent driven. Right? So you got to this is an

opportunity for most SMBs or for or in terms of readiness is to understand how ready how how ready are you to accept change and change and be ready for the change management and to kind of adopt

AI into that business. I think that's fundamentally the most important thing there's and and some of we were discussing what could be the barriers of change. uh there's of course uh you know

there are there is understanding of the technology there is the investment part into it then there is the talent capability that needs to be invested in and last but not the least it's also

about what what is the return on investment is going to be right some of these things are to be looking at but uh I always uh I am an optimist and I always say uh small and medium

enterprises or SMBs or business owners are extremely uh you should never underestimate their business acumen And and if they if you show value to them, they will buy. If you I'm not just

talking aboutmemes in in Delhi or in Bombay or or in in or enterprises in in in large cities. But if you look at beyond uh uh these cities, there are you know in Quimtor or in Mirat or in or in

in in Bumnesh where there are businesses that are contributing to the growth of India by operating or manufacturing and developing uh products and services. How are if you show them value in this part

in the in in the technology in the adoption of AI, they will eventually want end up buying into it and kind of changing it. But the truth is how who is going to demonstrate this cap this

change to them and who's going to demonstrate this value and how is it going to happen uh is something a business opportunity for for the startups themselves right to my if you

you know AI readiness quotient could be a starting point you know because what you don't measure you don't manage so if you if you really want to build this model of AI readiness quotient you know

and then slowly integrate and unlearn the existing processes and and there could be a huge opportunity around building this business and some of it could be just a turnkey project build

operate and transfer to the to the small businesses owners and stuff. So it's important to understand the change part of it. It's critical to understand the the change in workflow and business's

processes and and most importantly it is important to facilitate this change and readiness uh in for the SMBs with some sort of and people who have done it in the past people who have proven

capabilities because that's something equally important it's not uh easy to find that set of talent pool but that's important because it's uh one of the uh cap need for readiness is also a very

strong set of advisory consultants or support system that who can come and guide and implement or and execute and implement the the entire readiness for you. I think that's something which is

very very critical. Having said that, if you own you know how many of you you know one I always draw the parallel with the CRM right uh we large enterprises buy CRM uh medium enterprises do how

much do you think is an average utilization of a CRM in the in the in these companies would be &gt;&gt; negligent yeah I think in India it's it's it's

around 28% of the the entire as the Arab suit is used in a very effective manner. Maybe it is much better in in in in the western world. But the truth is it's what I'm sharing to share it's not

technology for technologies sake but it is important to understand how this technology is going to be leveraged in the business and and that is something which which is going to be a very very

critical factor in the in the implement adoption of AI and and businesses be becoming ready for AI ready uh adoption is also very very critical. So uh and in fact in some of the uh if you look at

the medium enterprises are I mean I'm not talking about large because they they completely understand what this is going to do to their businesses. If you look at the SMB space which is very

large space in India for them it's important to kind of uh drive this point that we need to ensure that they understand how this is going to transform their business and this is

going to transform their capabilities. So by and large there are uh huge opportunities in the SMB businesses for transforming themselves through AI. Then comes first is the is the is the intent

uh which is very very important. Then comes the investment which because it's it's going to cost them not just money but change uh in terms of the talent capability change in terms of the

reporting structures change in terms of the business business supply chain management everything is going to go through a very significant and that requires investment in terms of so the

first eye is is what I call intent second is investment and third is implementation because the most important aspect is also driving implementation support is very very

critical. So we have this put by itself is a is a business opportunity for a lot of you know a lot of uh startups and and consulting companies because it's going to be such a transformative uh

technology that is going to drive this. So largely if you look at if you look at uh netnet I think the primary thing that we need to look at is uh how do we really uh uh everybody understands the

uh the need for AI but how does it really work for my business? How does it really going to transform and change my uh uh uh SM you know medium enterprise and how does how much is going to uh

really add value to the way we are doing things is something that we need to be clearly demonstrated and that is where it I think the rest will follow because once you understand the business need of

it then then the compute capability and then the data layer and data layer followed by the by the uh you know what I call intelligence or a layer uh and then it is it's going to be the

interface because that's where the other layers come in because data intelligence and interface each of them are having going to play a very very critical role and that's something that they will

figure out because for each businesses this is going to be very different right because uh data alignment is also not easy because in India the data exists in different forms and different structures

in silos you know even in large enterprises one one data set doesn't talk to another one department data doesn't you know is able to talk to another so syn synthesizing this is

going to be a very very important uh part to your readiness then comes the intelligence layer which is synthesizing and making uh making sense out of this data making insights out of drive

drawing insights out of this data and and then comes the interface layer where most of it is there going to really driven by by agents by agentic AI and of course uh as as Thomas mentioned there

is always going to be a human in the loop perspective but uh as we progress this is going to change as well. So uh you know the two fundamental things that I want to share. One is the the entire

transformation ready uh for in the readiness space for AI is an opportunity for uh uh for uh you know certain uh change and intent needs to be very very clear. And then comes the uh the

curiosity to learn about this little bit more for each business owner. And then then comes the implementation part of it. And then startups have a very very uh critical role to facilitate this

because you are coming in as almost as AI natives with with an understanding of this and you can really go out and demonstrate value and help implement uh the entire readiness improve the

readiness quotient or improve the readiness quotient for small and medium enterprises and and and ensure that uh you know this is a a broad-based growth opportunity for businesses across the

country and not limited to just a few of right so there is huge potential and I think enough has been spoken that the the the summit itself is a is a is a proof of the kind of curiosity we have

had 267,000 uh in you know registrations people who have registered for the la in the last 5 days uh un unexpected overwhelming response to some extent

that we couldn't really handle it Right. At the same time, it it it gives us immense uh immense pride and and uh and uh excitement for the amount of curiosity and uh the the youngsters in

India across India is who have traveled here from the length and breadth of country to understand what is AI going to be and how this is going to impact and what the opportunities are and that

is itself is a fantastic starting point and and uh as I said uh you you know there's lot of happen this is in Indian sovereign models coming the tech the the five layers the infrastructure the

design you know all the layers are are being worked upon in the Indian context and and we are ready as a nation we are ready as a as a government to facilitate this this uh real disruptive

transformative technology but the truth is it's you know it's also important for it has to percolate into all the layers of the society be uh just not just limit itself to

large and large corporates but also to to small and medium enterprises and of course it is already percolated well into the D2C to the individual users and it's much much beyond the uh beyond the

you know chat GBTs of the world right so with that I think uh I once again take the opportunity to thank the entire team from AMD and uh we have had some interesting conversation and I look

forward for the continued part partnership with AMD and Matei startup hub because in our perspective uh you know corporates have a huge role to play in the success of the startups. Yeah.

Thank you so much and thank you. &gt;&gt; Right. Okay. 15 minutes. Good. I thought I had 30. So get strap in. This is going to go quick. Okay. So, I think thank you very much Thomas. Thank you very much

doctor. I'm sorry I don't know it's not on the screen anymore but that's a fantastic introduction a lot of the way of why we need the compute and how it's going to be put in into India. There's a

couple of things that I want you guys to think about as I go through my 30th of November 2022. The world changed. Chat GPT was launched. And I'm willing to bet that

everyone in this room, myself included, what we thought we knew about AI changed two years ago. What we thought even after church EP changed a year ago. what we thought changed and what I'm hoping

is as you leave here other things would have changed in the last 45 minutes of listening to these talks. Okay, so I'm going to skip through the reason why we need to go through uh and

need compute. But I think one thing that is very very very important is things are moving so fast and things are moving in a way that we cannot predict that the only way that anybody is going to be

successful is an open ecosystem and you know both of the esteemed gentlemen before me have alluded to this as well and I'm going to take you through specifically around software. I mean

everything to do with AI really I'm a hardware guy. I used to design chips but everything today is software right and I was talking to one of my colleagues and I said okay so I'm going to India we're

going to do this and we're going to go through and I said is it really going to be the you know are they going to understand Tim India is software this is what we do

he said this you're going to be in front of the pe the the best people in the world that are going to understand what you want to talk about so I'm really going to to focus on the software side

of that and one of the things that I wanted to do understanding that we had our esteemed colleague from mighty here is we do have lots and lots of experience in this space and one of the

things that I want to highlight is some work that we did with Lumi in Finland. Now why is this important? So within Europe almost all the languages are Indo-European right if you know a little

bit Greek if you know a bit little bit of um Latin if you know a little bit one of the languages there's 27 countries in Europe so let's call it 27 languages and then you have Finland

Finland is a urelic language nothing to do with any other language in Europe absolutely different construct different base different absolutely everything.

And so what we found working with the guys in Finland is they were coming to us because they they put in this Lumi superco computer and they said okay so we have a small country in uh Europe 5

million native speakers and we have to take all of this work that's been done you know English big codeex Spanish big codex Hindi English big codeex of all of that to do your training suddenly you

have a language of five million people how do you get that language into your LLM model so that it becomes useful. Now, I'm probably going to get the pronunciation really really wrong here,

okay? But I did actually use chat GPT to look at the 22 Indian languages, right? So, if we look at Bordo, Conani, Dogri, Cindi, Nepali, there's less than 5 million people that speak those

languages. So how do you get an Indian LLM that caters for everybody in India as we've seen from President Money AI for all all of that kind of thing and this is the the kind of area that with

mighty this is where we would like to work with you guys and be able to bring some benefit of the work that we've been able to do. Now remember the first date 30th of

November November 2022 this machine was inaugurated. So it was put together all of the systems were put together. It was all brought up. The chips were made years

before this machine was inaugurated my birthday 13th of June 2022 6 months before chat GPT came out. So this machine with 12,000 GPUs that had the foresight from the Finnish

government was using AMD technology to run AI before chat GPT came out. It's a lot of people that think that a lot of the stuff from AI has come from uh a specific area. This again let's

think of our our way of of thinking. We were there and we have the ability. We actually did the Bloom 176 billion parameter model. It was an open model made for European languages. So again,

we would love to bring this knowledge and use with the Indian ecosystem to make this uh successful for everybody. Um I'm not going to spend a lot of time on hyperscalers. Um they're obviously an

important part of the market. It's where a lot of the the um capabilities go into. We're there. We have tens of thousands of GPUs. We actually have uh uh as uh as Thomas mentioned, we have

the Helios uh system coming here. Please go and take a look at it. It's uh if you like Harvard, it's an interesting piece of kit. Um but really the idea here is whether you're in a hyperscaler

uh or whether you're in any other area um you know there is an ability uh to have a wider ecosystem and again inference so AMD specifically it's not really an AMD pitch but there is there

was an idea in the market that AMD was inference only that dates from Q1 2024 that's 2 years old so again we have to kind of change that thinking right that's that's older thinking we actually

Now, um, again, completely open source. Uh, there's a Primus ecosystem, uh, or a Primus tool, uh, fully open source, which enables you to be able to do all of the training that you need to do, uh,

for all of your indic languages or for your use cases. Uh, which again is completely open enterprise AI. Uh, this one I think is an interesting one. Uh, I know when I

started going out to customers and going out to enterprise customers, the difference in customer knowledge on what AI was was amazing, right? You go into one customer and they say, "Okay,

so this is our use case and we're seeing these kinds of sizes of matrices. So we're doing these optimizations." Uh, and then you go into another customer and and you say, "What are you

doing around AI?" And the guy goes, "Oh yeah, we're doing geni." Okay, great. Yeah. What you doing with geni? Um, we're using LMS. Okay, great. So using an MS. what we think of uh L LM and they

had no idea right it's just we have to do something with AI and and that has changed over the last 18 months and you know chatbot was something that most people said okay that makes sense I

understand chatbot we can fine-tune the model we can do an internal uh AI assistant within the company and now we're starting to see with the agentic workflows this entire plethora of

different use cases coming through and so how then do you take it from a research institute or people that actually get onto your accelerator whether that's a GPU or a TPU or an FPGA

or whatever else and get it to a stage where actually people within a a corporation can use it and so this is something that you know has been understood and again no lock in open

everything here is something that can be used uh without having to uh tie you in to one particular area and actually you know I'll come on to it a little bit later as well It's also something that

I've been very impressed with with the infrastructure that mighty have put into place with the public private partnership. You have GPUs, you have TPUs, you have uh

uh Inferencia and you have all of the different types of accelerators available to you within the Indian ecosystem that might have made available to you. Um I'll come on to that a little

bit later uh more but again the idea here is that whatever the ecosystem is or whatever the uh compute that you're using you're able to go from an area where whether it's in the cloud or

whether it's an on-prem you have an ability to be able to give uh your employees within your enterprise an ability to be able to use that uh AI assistant or um tool

um neoclouds. So these are the kind of what we call the smaller clouds. You know, they're not the hyperscalers. They're a little bit more nimble. Uh they are a little bit more available to

doing things a little bit different. A lot of these guys are doing sort of uh bare metal and managed Kubernetes services. Uh but it is coming to areas where they're becoming like APIs, token

factories. There's an ability for these guys to be able to provide you with compute quickly, easily uh and at reasonable pricing uh to enable you in whatever it is you're trying to do. um

we find these are the first movers in the market and again in the same way that we're integrated and working with the hyperscalers we have these relationships with the uh neoclouds and

actually we're working with uh quite a few of the guys here in India as well uh to to make that available for you as well so um the whole idea again here is there is that compute that's available

uh please go out and understand the benefits or the the trade-offs between the different types of compute that you have out there and get the right solution uh for you guys.

Now, I'm assuming that most people here are going to be startups and again startup is an interesting area, right? So, you have a startup, you know what you want to do. You absolutely uh are

laser focused on getting your MVP out there, getting in front of customers, how do you generate some value, how you generate some revenue, although that these days is less and less important it

seems as people get uh funding even sometimes before a product. But one of the things that you guys have to be sure of is that the the uh compute that you have and the capabilities that you have

are capable for the products that you actually have to then go and put into position. And so this is an area where we understand that proof of concept uh it's very important and again I was uh

chatting with the CEO of mighty here before it's something he was saying you know PC to PO you know you have to be able to make sure that you understand the technology and how you can take that

to market before you can actually go and invest in it. So, we have a couple of different ways that we can help here within the ecosystem. You could actually go on there. Right now, there's the AMD

developer cloud. You can get I think it's 50 or 100 hours of free compute. You want to go on how does AMD work? You know, it it it's always going to be uh

dependent on use case and what you're trying to do, but there is a huge TCO advantage which of course is important for startups. Get onto the dev cloud, get it working. Uh we actually provide

Docker containers. So that's everything put into a single Docker so you can download a Docker and run it so you don't have to spend your time and your energy uh installing all of the

software, putting everything together, get everything working. We've done all of that for you. Take the Docker down. Get your model off of Hugging Face, get your weights off of Hugging Face, use

your own model and and do something else. Whatever there is that's in there uh in the open open source ecosystem is there and it's going to work. Uh give it a go, give it a play. And then of course

from that we can take you into our accelerator cloud a little bit more sort of hands-on making sure we understand what you're doing helping guiding and assisting you and moving yourself

forward there. And then of course we have the relationships in with the industry you know try and buy being able to get you access to the computer and being able to get you um the the right

uh solution at the right kind of price. So this is something also that I really want to highlight. Yeah. &gt;&gt; So, day zero support of models. Now, we we announced this. So, Quen 3 Codeex

came out last week. Day zero support on AMD. Uh uh BU came out with one of their paddle models this week. Day zero support on AMD. What does day zero support mean? What it means that it's

not the first time we've seen this code. It runs on AMD. It's guaranteed. It's optimized. You know, a lot of people think that to run something in AI, you need a specific GPU. The whole point is

with day zero support that's absolutely false right again with Lumi pre-hat GPT in 2022 we're building LLMs for effectively Indic type langu languages right um so the ability is there if

there's a new model coming out you want to run it you want to test it you want to see how it works for you guys uh then that is there and and runs out of the box and you know again if we look at

this line in the middle you know PyTorch if you look at the history of PieTorch uh you know there were lots of signitaries uh on PyTorch to make sure that that was available for everybody.

AMD was one of them. Uh this mainly comes out of Microsoft and Meta who did not want to be closed in to a single supplier. Um so actually what you're doing with PyTorch is you're writing

Python code, right? You're not writing vendor specific code. It's an open ecosystem. That's the whole point, right? You don't want to be tied, you know? It's going to stifle innovation.

It's going to increase costs. So, PyTorch came out and that is the basis of 99% of all of the customers I talk to, right? They're all writing Python under PyTorch. Uh Jax is uh then coming

forward. Triton, this is uh a Pythonike language which is specific for gem optimization. Again, if you're getting to that area where you're actually seeing the gem sizes that are coming

through from your operations and want to do gem level operations, then Triton enables you to do that at the compiler level. So then you really don't even need you can be completely agnostic of

what the underlying hardware is. The the the ecosystem and the underlying compute becomes kind of abstracted away because Triton enables you to run on anybody. It's just a compile for the new

architecture. Um if we look at these models on the bottom here, you know, President Modi uh this week has announced sort of the first sort of 12 Indian languages. I

can't wait to get you guys here, right? Uh fully supported day zero support. You know, just to give you an example here, Deepseek, of course, when Deep Seek came out, they did some things a little bit

special. You know, the multi head latent attention was new. We had day zero support with Deep Seek. Why? Because we're one of the main contributors to SG Lang,

there's not a tiein to an inference engine here. It's an open ecosystem. So, we were able to come out of the the door with with better TCO, better performance, better cost, and full

support through SG Lang on that Deep Seek model, which was, you know, the leader of its time because of our complete commitment to the open ecosystem.

Just to give you an again, you're walking out of here in 45 minutes with changed ideas. This is what we're going for here. Um, so I did have two minutes. I now have five. I don't know who bought

me extra time, but I owe you a beer. Okay, so really actually that's kind of the end of the the pitch here. One thing I would say is uh we do have a booth here 5 to 10. I'm sorry. I'm going to do

a little bit of a an AMD uh plug at the end here, but do come by uh see us. You know, uh we actually have, you know, we have some of the Neoclads there. We have some model uh creators, vendors, uh some

ecosystem partners there. Uh you know, come see come change your mind. Uh come see what's available within an ecosystem uh with uh with the the compute that's available for you guys.

Okay. Thank you. &gt;&gt; Sorry. Yeah. Yeah. So since somehow in India we managed to create time. Um so I I want to introduce my colleague who's going to actually

talk about physical AI robotics. &gt;&gt; Yeah. So just I'll let you go. &gt;&gt; So introduce yourself. &gt;&gt; So first of all I'm Jil Jil Garcia. I'm French. So we can talk about LLMs for

French language if you want. But so I'm French. I'm based in France but I'm covering worldwide and I'm focusing on physical AI for the communications and robotics and industrial. So we have been

talking a lot about AI and most of the people are thinking AI means GPUs big cloud and what we are seeing is a big shift that's another change that we are seeing change management. So I'm the

change management first but changing is we are seeing the AI moving into the edge and moving into the far edge which is industrial robotics uh vehicles as well in the networks and so for that you

need to have different type of beast GPUs is one aspect of it but you need to have very profound different technology that AMD has as part of the bread portfolio that we have these technology

need to be able to sense, perceive, act, react in a so quick manner that there is no time to go back to the cloud for that. And so this technology need to be of course that will be inference but

need to be able to take decisions and act very safely, reliability, reliable without having to rely on the cloud. And so that's a new change that we are seeing at AMD on the physical AI which

will become very very important for us is how do we take what we have learned in the cloud and how do we make it available in the physical AI software is a big things full stack meaning hardware

and software being able to deliver to the customers solutions is what AMD is aiming for and so our CEO Lisa was Lisa Sue was saying It's AI anywhere and one size does not fit all. Meanings that if

you want to address a robot, you cannot put a GPU into it. It will burn to hell. So you will need to have a very dedicated accelerator with a high software stack open source that will be

able to have this robot perceiving, visualize, act, touch, and being able to act accordingly to what his purpose will be. at CES early January Lisa Su bring on stage

gin01 which was the first humanoid build on AMD technology and that's just impressive everything has been done by a startup in Italy to make this humanoid being able

to sense visualize touch when somebody is touching it and when touching something to act and react very rapidly without having to rely on on the centralized source. So I will not be

longer than that is physical AI is probably something that India by the way will have lot of things to act into because GPUs are there already where physical AI is something that you will

have to create lot of things related to medical related to autonomous networks autonomous cars autonomous plants industrial and that's where I think India will starve with all the startups

and capability to use accelerator that are much smaller than what GPU are and this is all available today in the AMD portfolio. So I will stop here encourage you to come to the MD boost and we can

continue the discussion. Thank you. &gt;&gt; Well, so we gave you a lot of information on AI, gave you four different accents. I think the French guy probably carries the day.

Uh but my one message is that stay curious as all of us have said things are going to change and continue to change at a rapid pace and you know people talk about so many thousands of

GPUs that will not be the metric because you will find that we there's a whole lot of interest in trying to to provide you with even more powerful GPUs for core infrastructure but at the same time

provide you very lightweight low power at the edge. and and so I think stay curious look from from a startup community point of view for a research point of view for

academic point of view look for really interesting problems challenges to deliver infrastructure that you need because ultimately there's applications ways where it is going to change society

at large that's too thank you very Yes. So actually AI impossible

usually.
