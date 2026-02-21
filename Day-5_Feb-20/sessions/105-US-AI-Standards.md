# U.S. AI Standards

**India AI Impact Summit 2026 — Day 5 (2026-02-20)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 13:30 – 14:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 9 |
| 📅 **Date** | 2026-02-20 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/zXbyHjKemeE?feature=share) |

## 🤝 Knowledge Partners

- U.S. Embassy New Delhi

## 🔑 Key Takeaways

_Notes to be added after watching the session._

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/zXbyHjKemeE/maxresdefault.jpg)](https://youtube.com/live/zXbyHjKemeE?feature=share)

---

_[← Back to Day 5 Sessions](../README.md)_


## 📝 Transcript

help these agents work with each other smoothly and and protocols are so important because that's how builders interact with these products and how we make them interoperable and open to the

rest of the world to sort of build on that for your own businesses for your own benefits. And so we have an amazing panel here today. Um we have um so first of all I'm Suhang. I'm senior policy

advisor for AI at Emerging Tech at the White House. Um we're joined with Austin Erin who's the director for the center for AI standards and innovation at the department of commerce which really is

the standard for the center for a lot of AI activity within US government setting standards driving innovation measuring AI systems improving mutrology and a lot of the smartest people in in US

government are within Austin's organization and then we have the the four um frontier AI companies from the United States. So, we're very happy to be joined by uh Mike Celo, who's the

head of global affairs at Anthropic. Um we have Owen Lauder at uh Google DeepMind um who's the senior director and head of frontier policy and public affairs. Um we have Mike Brown um who is

head of growth and operations for open AI for our countries and of course uh we have uh Weii Fernandez who is the director for global government affairs at XAI. So really the amazing lineup of

US industry, I said this in a previous panel, but American companies are spending 700 billion dollars into AI infrastructure this year, just this year alone. Um, and um, they probably won't

like it that I say this, but they're competing very hard against each other to make AI models cheaper and more powerful for you guys to build on and and to drive those applications. And so

this is going to be a panel on on how we make that happen, how we standardize interfaces with those AI systems. And so first I'm just going to ask a question to to the AI companies that are

sat here. Um so over the past few months I think we've seen the emergence of a ecosystem of standards that move to support the deployment of AI agents. I think one of the most notable ones is

Anthropics model context protocol which a lot of other companies are building off of right now and is sort of becoming the industry standards. Of course, you have uh Google DeepMind's uh ATA agent

to agent protocol of OpenAI's agent commerce protocol and then XAI of course has been working on its highly secretive and famous macroart agent project. And so all the companies here are very much

involved in in sort of this agent discussion. And so maybe open it up to the companies here to tell us a little bit about what these agent protocols actually do um and and what they have

unlocked. And it's sort of to sort of the builders who are sat here at the audience, what do they enable a software engineer or AI engineer at India or other countries to to create.

&gt;&gt; Okay. Uh well, first I want to start off by thanking SHA and OSTP for organizing this panel. Um and also it's great to be here with Austin. I think uh Anthropic has really had a really strong

partnership with the Trump administration and appreciated uh the leadership of uh Secretary Lutnik and uh expanding and enhancing uh the Center for AI standards and innovation um which

is really critical to making this technology work for everybody in a manner that's safe, responsible and and open. Um MCP is a universal open standard for connecting AI systems to

the tools and data sources that people already use. So imagine uh the the knowledge bases inside of an enterprise. Um you can imagine government data sources. Uh the Indian government of

course is a real leader in uh in um why am I forgetting the acronym right now? Uh DPI sorry uh and just has massive amounts of data that are already digitized and available. And so MCP is a

way that you can connect your AI models and agents to those data sets and also tools in a really, you know, simple and intuitive way. You just need to give the model a rough description of what's in

the data source and what kind of tools or how can it access it. And then the model will intuitively know um how it can use those data sources. The same way that somebody in your enterprise or your

organization would know if I want to get payroll data, I need to go to this human resources system. If I want to get data about, you know, our revenue, I need to go into or whatever your uh particular

tools are. You know, before MCP, you really had to build all these systems in a very bespoke manner, which meant that uh if you built them with one with one model or one uh one uh vendor, you were

kind of stuck because you'd have to rewrite everything if you wanted to switch. MCP being this open source protocol that's supported by all of the major AI companies. Uh it means that you

really have this degree of interoperability which just enables the whole system to be much more open and competitive. Um uh we also recently built uh skills which is a set of

instructions that teach uh agents how to perform specific tasks. The way that that I describe this or think about it is you know imagine a new person joins your team. um you spend a little bit of

time teaching them, you know, how to do work uh the way that your organization does it and then you expect them to just be able to follow those instructions all the time. So you kind of teach once and

then they're able to do that. It's the same thing with skills which also is another open protocol where you can uh build these skills and then if you decide that you know you want to switch

from uh Anthropic to any of the other uh fine companies here on the panel um you can move those skills over. And so that interoperability and data portability is really a critical piece of making this

an opening competitive environment. &gt;&gt; Amazing. Thank thank you Mike and yeah thank you to see how thank you to OSTP and the US government for for the event and and all the partnership and a big

thank you and and congrats to our Indian hosts on a on a fantastic summit week. If you take a step back it has been I think a really exciting week a demonstration of how advanced AI is now

being used around the world to do incredible things. It's been really exciting seeing the way that people are using Gemini right across India. Really exciting to see the way that you know in

every everyone in India from worldclass scientists using Alphafold to to teachers and students using AI in the classroom. And I think with all of the progress that we've seen in the last few

years, it's easy to forget sometimes that this is still relatively new technology. We're still in the relatively early innings of working out how to develop this technology and use

it for um for good. And one of the things that we need to do, I think Seah covered this very well in his uh opening gambit is build out this ecosystem of technical standards to make sure that we

can continue using this technology um in the right ways. There's a couple of ways that we're thinking about these standards. One is technical standards, interoperable standards, and then also

standards for testing these systems, making sure that we can use them in a in a reliable and secure way. We really want to contribute right across the piece here. So, we're excited. We have a

various standards that we have contributed to the ecosystem. Our agent to agent standard that see how mentioned. This is basically a standard for how agentic systems talk to each

other. At the moment it's a little bit tricky for agents to converse with each other. You have to often write bits of bespoke code for an agent to talk to an agent or they have to be running on the

same walled garden code base. So what we do with with agent to agent is essentially have a a sort of digitized clipboard of information that an agent will share with another agent. What's my

ID as an agent? What are my capabilities? What am I trying to do? How do I take data? What are my security requirements? This is going to be absolutely fundamental to sort of

greasing the wheels of the the agentic economy. UCP, another standard that we're working on. So we have our universal commerce protocol at Google. This essentially does the the same

thing, but it's for how agents talk to websites and payment systems. This is going to be transformative for business. It's great to be able to partner with companies right around the world,

whether it's Walmart and Target in the US or Flipkart and Infosys in India that we're working with across these these agents. Excited to see what everyone is going to do with the technology that we

can we can enable with this. Thanks for the tip. Um, hi everyone. My name is Michael Brown. Uh, my name placard says George Osborne who's a colleague. He, uh, got tied up in

another, uh, panel, so I'm here. Uh, George and I work extremely closely together, but he has a much nicer accent because he's from the UK. &gt;&gt; I'm doing my best here.

&gt;&gt; You're doing very well, I might say. Very well. Um for me this is a fun panel because um it feels like a very collaborative and cooperative opportunity to grow the pie

and the companies uh you know that are on either of our side are extraordinary companies with extraordinary humans and um it's fun to just work with them in some of these areas. Um, you know, if I

were going to kind of explain why we're here in this particular panel to my kids who are 9/11, I would sort of say, look, are there countries out there in the world where when you get to a stoplight,

red means go? I don't think so. I think mostly red means stop and green means go. I mean, if I'm wrong, I apologize. I'm not an expert. But you know having sort of shared understanding in

countries rich and poor uh advanced and still developing around how things work I think grows the pie because it allows builders to build in a way um that everyone can kind of know that what

they're building is going to be both secure and is going to be accessible and hopefully enjoyable or useful to people anywhere in the world. Um, and I think each of the companies up here is

contributing something uh great uh to that. Um, you know, I've joined OpenAI relatively recently, but like MCP to me is something like I just knew. It's like that's really important. And like while

Anthropic introduced it, hopefully Anthropic would agree with this that now it's just like the thing, right? And I think that's terrific that it's the thing. Um, you know, Owen also mentioned

in commerce. Um, I don't know if these standards compete or if it's uh cooperative, but at OpenAI uh we have a commerce protocol as well for the same thing because there's a world where

these agents uh are going to be out shopping for us, which is kind of fun, right? So, you know, if the agent knows that you're planning on taking a family vacation and you it knows that you want

to visit Goa and the agent can go actually secure uh your travel uh flights and your hotel. um these commerce protocols can do that. So agents of different companies

potentially in different countries can all partner and work well together because they understand how they're supposed to be looking for shared information and how that information

should be shared. There's a there's a kind of a shared understanding there. Um and so I think all of us are working to build these protocols to grow the pie uh to create more democratization, more

commerce, uh more benefit for everyone by having uh these common protocols in place. &gt;&gt; Uh thank you and great to be with you all here and thank you to the government

uh for having us. What a exciting week. Um you know frenetic and kinetic and chaotic as I was saying uh earlier. So it's just an honor to be here um and to feel the energy um and all the

innovation and and to meet a bunch of different builders uh across India. Um so weirdo Fernandez folks call me weii for short. It's a nickname I got in the 90s before wireless internet was a

thing. Um so my name became relevant later. Um but yeah this is certainly a topic that brings us all together which is wonderful. Um, you know, XAI is only two and a half years old. So, the

foundational work done by these peer companies have enabled us to to accelerate our development. We're we're better because of those. Um, and we're better because we can all build on top

of those. Um and these standards and protocols that that folks have built um and that we sort of lay out and sort of agree to as an industry and as governments um really make sure that not

just us four uh compete, right? This enables a ton of innovation. So you know on the X side and you know XAI and X um sort of operate in tandem. Uh it's been really neat to see uh the AI community

sort of build and test and discuss and debate in public. So like when Molt Book was taking off, I think you likely found out about it on X. Um and and so it's just neat to see the ecosystem sort of

converge in in that discussion space. Um and just in thinking about this panel and thinking about moldbook in particular is like well do we regulate um social media platforms that are agent

driven. Um just it brings like all these really novel questions um about about how we regulate. But I think at the end of the day, we all agree that these open standards that are creating sort of

this, call it a layer, call it a new ecosystem, call it a parallel um internet um are just really crucial for for our development of the internet at large. And so yeah, excited about the

the panel and the discussion here today. &gt;&gt; Thank you so much, Fifi. Um your name is formalized in the 802.11 protocol, which is what allows my phone to connect to the internet in DC and here in India. So

it's extremely relevant. &gt;&gt; I'm going to use that. That's awesome. &gt;&gt; Um, so I think we've heard a little bit from our companies who are engaging a lot of dynamic activity pushing out

agent protocols of all kinds. And I think there's a lot of industry excitement over agents right now. One of the big announcements that we're here to make today also director Katios made

early on the main stage is the agent standards initiative and that is something that is let out of Casey in NIST. So I'll turn to Austin to introduce that.

&gt;&gt; Absolutely. and thank you Sah and thank you to OSTP for convening this event and to my fellow panelists. I'll start with a brief introduction of my organization. So I am the acting director for the US

center for AI standards and innovation. Our background we were founded about two years ago as the US AI safety institute. In June of last year, commerce secretary Howard Lutnik refounded us as the center

for AI standards and innovation which signal a shift from sort of safety concepts to standards and innovation. And our remit is to be the front door to industry to working with the US

government. Um there's I think two aspects of our organization I think that bear note is first that we're located within the department of commerce. We are commerce focused. We are industry

focused. We work with all of the companies on this panel. Some of them we have formal uh research or uh pre-eployment evaluation agreements with so that we can work with them on their

models and the research questions they're tackling. We also do take seriously our role trying to serve as a front door to the US government for industry. We want to make sure that when

industry is trying to navigate government that they're speaking to the right people that the people in government they're speaking to have advisers who understand frontier AI and

Agentic AI. Um and also that the industry isn't being overwhelmed by um duplicative requests from different a aspects of government. You don't want 10 different agencies asking the same

company basically the same thing and creating unnecessary work. And so we try to act in sort of a coordinating role to make sure that industry is being heard and they're navigating US government.

The other aspect of our organization that bears not is we're located within NIST the National Institute of Standards and Technology and NIST has an over century long track record of um not

regulating but helping industry um through uh consensus develop voluntary standards and best practices. Um the acting director of NIST, Craig Burkhart, he likes to talk about tail lights,

brake lights on the back of a car. I'm sure you all see them in India. It's the same color red as it is in the US. That's because it was a N standard of what exactly color um red is going to be

on the tail lights. But another important aspect of that anecdote is it wasn't government that said this is the color red that you all must use. It was industry came together and with the help

of NIST experts through a convening, they they agreed on what the color should be. And so now when we look at it, you know, what does the future bring and where can NIST bring its

industrydriven consensus based voluntary standards work into the new AI world? We're looking to AI agent standards. So as Sah said, we announced this week a AI agent standards initiative which is

looking at all facets of AI and AI agents. Um there's a couple aspects of it that have already been announced that we're working on and I'll tick through those relatively quickly. Um the first

is we have a request for information out in the field. Um it closes in March and we encourage you to to engage with us and provide comments on um AI agent security. Um AI agents obviously bring a

whole host of new security challenges. Um and we'd love to hear from you and your organizations about what challenges you are facing. Um learning and identifying those challenges is a first

step. Once we identify those challenges, we can then take the next step of seeing where can NIST's approach of voluntary standards and best practices documents, how can they help address and mitigate

those those challenges. Um, another aspect, our colleagues at NIST, the information technology laboratory or ITL, they have a draft out for comment on AI agent identity and authorization.

Again, encourage you to engage and and interact with them. Um, a third initiative that we recently announced is we're going to hold sector specific listening sessions hopefully in April in

the sectors of education, healthcare, and finance where we're going to convene um various members of industry and and say to them, look, there's this great technology out there called AI. Have you

heard of it? AI agents? Why aren't you adopting it? What challenges are you facing? And we may not be able to solve those challenges, but maybe we can. And so one example I give and I don't know

that it's going to be something we find out but for instance in the education and healthcare sector there's business concerns and existing regulatory concerns about PII personally

identifiable information. And perhaps what we'll learn through these listening sessions is that um hospitals or schools aren't deploying AI because they can't reliably evaluate how AI agents are

handling the PII. And so that's something that Casey, my organization, could develop metrology, benchmarks, evaluations, best practices, documents that could give confidence to those

types of institutions that the the agents are performing as desired and maybe that's a step that we could take through voluntary consensus driven best practices and standards that unlocks

adoption. Um, so we we're very focused on that. We're looking forward to learning what those challenges are. I don't know if the challenge I mentioned is actually a challenge facing industry.

Um, and and that's part of NIST's approach, which is we in DC, we only see a small slice of what's going on in industry. We only have a tiny window into the world. And so it's it comes

from a place of humility. We don't know what the challenges people are facing. Um, the companies that are on this panel, they they're doing an incredible job coming up with protocols for some of

the challenges that they're facing. We talked about agent to agent for how agents communicate. We talked about MCP for how agents navigate databases. We talked about UCP and OpenAI's commerce

protocol for engaging in e-commerce. And I'm sure through these conversations, we're going to identify other areas where open source protocols where standards, best practices could help

unlock adoption and implementation. And we're really excited to work with both both you and all your institutions and companies on stage to identify those opportunities and see how we can

leverage NIST's convening authority to help. &gt;&gt; Thank you so much for that, Austin. Um I think to re-emphasize this standards initiative is really to want wanting to

make sure that the products that we build on top of each other interoperable such that if there's a builder in India builder in Kenya building on top of our AI products American companies can use

them as well American companies can buy from them as well and similarly if you want to switch a different model nothing is sort of locked in and I think this really ties back to a perspective that

we sort of as US government in particular the Trump administration has about AI and AI products. We think back a lot on the history of the internet and what that enabled for the world but also

what that enabled for America. Um I think there was a perspective in the US from the previous administration that technology had to be strictly locked down and we think that's a mistake. We

want to share the best AI technologies with the rest of the world. And that's also a sort of leading message that our delegation has here at the India AI summit. And when we think back at the

success of the internet, what enabled that? There's actually a number of um companies and countries that tried to create their own closed version of the internet that were centralized that were

tied to particular nations and their own telecom networks. And they saw a little bit of success. A lot of them were state subsidized but none of them really scaled to the global level of the

worldwide web. And the worldwide web became so successful precisely because of the protocols that the US government had supported. The US government had made a very intentional effort actually

of commerce to make sure that the internet was an eentralized system. um created protocols like TCP IP, HTTPS, the sort of um internet suite that was actually funded by the US government

back then to create independent development of these protocols that enable the rest of the world to build on that. And what you had is really this win-win situation where the entire world

now benefits from sort of the access of the internet, the ability to build applications, companies on top of that that's driven so much prosperity for countries around the world, but also

made Silicon Valley one of the most wealthy places in human history. And it is because of this open commerce and that's what we really want to create with a world of AI in the future as

well. I think just to add a bit on to what um Austin had said sort of the agent security piece. Why is agent security so important to us? It's precisely because of adoption. You need

security to drive adoption. If you look back again also at the history of the internet um the development of the secure sockets layer SSL and then eventually HTTPS was what enabled

e-commerce. And so again, I think it's a lot about the efforts that we're going to be working with industry together to make sure that there is this standards ecosystem that there are these

interoperable um interfaces that everyone can build on and trust to create the the AI economy that we're all looking forward to. Um, so I'll stop ranting, but I'll I'll turn to the

companies here and I guess I'll I'll ask you all how how do you see sort of the future of AI standards and and agent development and how can AI agent standards really reflect the same

principles that um enable the open internet including interoperability and including security. &gt;&gt; Sure. I feel like I need to somehow fit an automobile analogy in here since, you

know, there's there's been a setting. Um, maybe I'll use my favorite one, which is, you know, right now if you go to buy a car, uh, and you go down to the the car dealership,

uh, those cars are going to have a bunch of metrics that you can use that have been independently determined to understand the characteristics of that vehicle. So, it'll tell you what the

fuel economy is, how far can you drive on a gallon or liter of gas, um how does it perform in various types of crash tests. Um these are all uh uh you know metrics that are um done in a

standardized way that uh are uh oftentimes done by third parties and so you can have sort of trust and confidence in them and you can know what kind of car you you want to buy. you

know, maybe I'm a single person and I like to drive fast and so I'm just worried about head-on collisions because I'm going to be going as fast as the car can possibly go and that's the biggest,

you know, danger for me. Or maybe I have a family and I'm worried about, you know, what happens if we get hit from the side and and I've got kids in the back seats. Um, you know, a piece that

this standardization can can help us get to is having that same kind of confidence in knowing what you're purchasing. um that you know customers and governments and the public uh you

know can have. I think another real benefit and it's really aligned with uh I think some things that Michael Katzios the OSTP director talked about today um and also in an op-ed that he had in the

Financial Times around exporting the American AI stack right um there's a lot of concerns today uh about um sovereignty about having control uh over systems in your data and so on and a way

that I think you can both use the best technology in the world um which sometimes times come from from American companies but also have confidence that uh there's resilience in the system is

really having things be built to open uh open standards right and that that gives you the ability to um you know decide to make changes if today Anthropic is producing you know the best technology

and tomorrow it's X or it's uh open AI or someone else you can change uh or you know maybe an open open source model gets good enough at the use case that you want and you want to switch over

from um a proprietary model to an open source model. So I think that's the what this what this can enable. I think that's sort of the opportunity that we have uh ahead of us and and I think that

the the vision of the AI security standards work that uh Casey's going to be working on is you know if you're going to entrust these systems with access to your personal data or your

financial data or you know the ability to do things in the real world on behalf of your enterprise or what have you. You need to have some sense that you know there's security, there's au

authentication for things. Um that there's an ability to come back and check with the user before making you know certain significant decisions or or taking certain significant actions and

that you can test and evaluate and report that information in a way that is intelligible to the customer that they know what they're buying and they know when to trust and they know, you know,

when not to trust. What's up there? &gt;&gt; Yeah. You know, well said and it endorse a lot of what um Mike mentioned there and and Austin and Seow as well. I do

think there's a lot you can learn from the history of standards in various different industries that we can apply to AI. See how mentioned some of the early internet standards and I'm just

about old enough to remember people in the early 90s talking about how they would never ever ever put credit card information on the internet. That would be absolutely insane. And it sort of was

when you had information being shared in in plain text in a totally unencrypted way. Then you have the the secure layer that that see how mentioned HTTPS and it's completely unlocked the modern um

internet economy as we know it to be. History of electrical standards as well actually this was something that drove the the adoption of electrical products in the late 20th um and early 21st uh

century. You had a scientific approach to standardizing units of measurement like ohms and volts and ampers which allowed power supplies to connect their energy

to the grid. It also meant that you could invent things like fuses which could be set to a certain amp um amp amperage and if you had electrical current above that it would uh it would

shut itself off. Um so I think we need to continue learning from history. I think there are a few principles that we should take forward as we do that. I think open standards as we've been

discussing is the right way to go. You need technically robust standards that are really informed by an understanding of the technology and and how they they work and we should be looking to to

prioritize interoperability as well. Maybe final thought for this piece is is also learning from standards that are not done well. There are many industries that have not quite gotten this right.

We will all have traveled here. A lot of us have traveled here from around the world having to bring adapters with us because our electrical products won't plug into the wall. It's really really

annoying. It's actually also a massive hindrance on commerce as well because it means if you're producing a computer or another electronic um application, you have to have a different plug socket in

every single country around the world that you're developing your product for. So things to avoid as well we need to be mindful of. &gt;&gt; I love these uh kind of comparisons uh

that both of you gave the automobile and then you know the electricity because they really resonate with me anyway. Um one thing this is more food for thought than an answer because I don't know the

answer. Um but you know there are standards that kind kind of make the agentic world go and I think because that the innovation is happening so fast it's it's sort of my opinion that the

research labs that are kind of foot on the gas or on the electrical pedal um are are leading those standards in collaboration because we're the ones kind of just moving very fast. And by we

I I mean all of these companies and then you know others as well who who do what we do. Um and I think that will continue for some time. Um but then I think there's a question of when and how

industry gets involved in standard setting. And then there's another question which is interoperability or interconnect between and among industries. And so for example um one

thing I I'm I'm pretty sure of at OpenAI and I I would suspect uh my friends up here might agree if not I stand corrected but we absolutely want industries to be driving industry

standards rather than you know third parties who aren't party to the industry. So the healthcare industry should be very much in the driver's seat to establish its set of protocols and

norms for how kind of applications work in the healthcare industry. I mean that's probably not too much of a surprise. Shouldn't be uh open AAI or you know any other company who isn't a

healthcare company setting those standards and forcing them on anyone. Uh I think OpenAI also thinks that uh it necessarily shouldn't be the government setting those industry standards but

rather industry in partnership with government working together. Um and then things also get in interesting at least to my mind when you start thinking about different industries working together

right so if you have insurance uh working with the automobile industry or something two humongous but separate industries and how they're going to have to come together to set up uh norms for

how agentic uh systems work and how data is shared I think government can probably play an important uh role in bringing together industries to uh establish those dialogues, but the

industries uh certainly still need to be front and center in establishing uh what works for them because they are the practitioners and the experts on you know what their customers need, what

their colleagues need. Um, and so I think we're all going to have to kind of navigate that world together. Um, and figure out what is the role for the research labs, how does government uh,

support uh, and then how does industry play a leadership role in both uh, governing and building for itself industry specific standards for the future of AI.

&gt;&gt; Yeah, I think this conversation has been a bit of a history lesson. I appreciate that. Um, and it made me think about how I used to get music when I was a kid, and some of the panelists may

appreciate. Um, you know, there was there these music catalogs that would come to your house. You'd select however many compact discs you wanted, CDs. Um, you'd put cash or a check in an envelope

and send it away, and some weeks later, magically, um, some CDs would appear on your doorstep. Um, so when I think about, you know, instructing an agent to go download music, uh, or acquire music

on my behalf, like I'd much rather have that then. I don't know how we used to put so much trust in a system, um, without standards or, you know, a process that could not be audited. Um,

so I think sort of the the guiding principles uh that have developed the internet still apply. Um, we want privacy pres preserving technology. We want technology that allows us to audit.

We want technology that considers authenticity. Um, we want technology that considers uh means of consent. Um, and to Michael's point, I think ultimately agents serve the user and

agents serve organizations. And so if we view it through that lens, um, it it should guide us right. they don't they don't serve us as the model developers. So

&gt;&gt; great. Thank you all so much for that. So that was a bit of a a nerdy discussion on standards, a bit of a history lesson. I love that. Um but we're also here right now at the India

AI impact summit talking to a country of builders talking to the developing worlds which are some of the most dynamic AI markets in the world. And so I think it'll also be amazing to hear

from the panelists here and including Austin how you all are engaging with the rest of the world on these standards, how your organizations are engaging with other countries on AI and what are the

most exciting applications you've seen develop on top of your standards and products. &gt;&gt; I I guess I'll lead off. Um the main one of the main forums that Casey engages

internationally is through the international network for advanced AI measurement evaluation and science. It's a bit of a mouthful of a name. Um but it's 10 countries that have established

AI security institutes or like we do the And we meet a couple times a year. We also engage in informal technical and scientific exchanges. Um and we share best practices in in measurement and

evaluation science. In December, we met in San Diego on the sidelines of the NERUPS conference and we sat down and discussed sort of open questions and measurement science and the challenges

that we're facing and we published a blog post I think in about a week ago that summarizes some of the areas of consensus and the open questions and there the work we're doing I think is

very important because when we talk about the evaluation of AI systems particular capabilities uh particular um security vulnerabilities etc it's important for us to have consensus on

the methodologies. linear period.
