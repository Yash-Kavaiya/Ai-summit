# From Insights to Action for Resilient, High-Performance Data Centres

**India AI Impact Summit 2026 — Day 2 (2026-02-17)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 09:30 – 10:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 6 |
| 📅 **Date** | 2026-02-17 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/Vnt-8y7Q7oM?feature=share) |

## 🎤 Speakers

- Mr. Ben Kroposki, Power Systems Engineering Center, U.S. DOE National Laboratory of the Rockies
- Mr. Jal Desai, U.S. DOE National Laboratory of the Rockies
- Mr. Reji Kumar, Indian Smart Grid Forum
- Ms. Jaquelin Cochran, U.S. DOE National Laboratory of the Rockies

## 🤝 Knowledge Partners

- U.S. Department of Energy (DOE) National Renewable Energy Laboratory (NREL)

## 📝 Summary

As AI-driven computing demand accelerates, data centers are emerging as complex, dynamic loads on modern power systems. This session examines how AI and advanced energy technologies are being deployed to enable resilient, flexible, and high-performance AI data center infrastructure. It features applied research about hybrid grid architectures, advanced cooling and geothermal systems, predictive digital twins, geospatial and transmission siting and planning tools, and the ARIES platform for large-scale testing and risk reduction.

## 🔑 Key Takeaways

1. As AI-driven computing demand accelerates, data centers are emerging as complex, dynamic loads on modern power systems.
2. This session examines how AI and advanced energy technologies are being deployed to enable resilient, flexible, and high-performance AI data center infrastructure.
3. It features applied research about hybrid grid architectures, advanced cooling and geothermal systems, predictive digital twins, geospatial and transmission siting and planning tools, and the ARIES platform for large-scale testing and risk reduction.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/Vnt-8y7Q7oM/maxresdefault.jpg)](https://youtube.com/live/Vnt-8y7Q7oM?feature=share)

---

_[← Back to Day 2 Sessions](../README.md)_


## 📝 Transcript

What we all know is people think oh AI doesn't run on algorithms alone right it runs on electricity and the objective of this session is simple but urgent as AI scales globally right data centers are

becoming foundations for economic growth and national resilience and how AI infrastructure grid integration policy coordination can work together to build resilient economies.

So today is about leadership, technical leadership, system leadership and policy leadership. So let's explore how we can move forward. So to kick things off, I would

like to invite Dan Oats uh on the stage who is the acting deputy director, US Department of State, Bureau of Cyerspace and Digital Policy, Office of Emerging and Critical Technology Policy.

Um, good morning everyone and uh, thank I want to thank the National Lab of the Rockies for uh, organizing this uh, important discussion. As stated, my name is Dan Oats. I'm the deputy director and

the State Department's Bureau of uh, cyerspace and digital policy. Our team really advances an open, secure, interoperable tech ecosystem to support economic growth, protect national

security uh, and reflect democratic values. And today I'm going to help set some of the broader context for what are US AI priorities before we dive into the infrastructure uh questions that will

drive this panel. So as the global leader in AI development and industry, the US is committed to sharing its technologies to enable countries around the world to realize the economic and

societal benefits of AI. Last July, President Trump released America's AI action plan that reflects a fundamental truth. Um AI is a foundational technology that will define economic

growth, national security and global competitiveness for generations of in the future. The action plan is built on three pillars. First, strengthening American AI innovation or promoting US

AI leadership to ensure Americans benefit from AI's transformative potential while avoiding overly precautionary regulation. AI systems must be built from the ground up with

freedom of expression in mind. Second, we're building American AI infrastructure. Um, President Trump signed an executive order to accelerate federal permitting of data center

infrastructure, recognizing the AI leadership requires the physical foundation to support it. This is directly relevant to today's discussion around energy systems and data centers.

Third, leading in uh international AI diplomacy and security. We launched the American AI exports program to promote full stack American technology packages and we want to make it easy for friends

and partners around the world um to adopt US AI technologies that have been proven through performance, trust and security. So AI infrastructure isn't just about compute. It's also about what

makes it's also about the entire ecosystem that makes AI possible um including secure reliable energy systems. So as AI scales globally, data centers are becoming critical

infrastructure and catalysts for energy system modernization, the AI race will determine not just our technological leadership, but also um the balance of power and wealth of

nations. It will determine whether democratic values or open markets uh guide it will determine whether democratic values and open markets or authoritarian models guide AI's

development worldwide. And the US wants to partner with countries around the world to build long-term capabilities and become AI creators, not just consumers, contributing to a vibrant

global ecosystem. I think the technical challenges that you'll discuss today on this uh panel on high efficiency data centers, intelligent power systems, energy optimization. They're not just

engineering problems. They're really strategic imperatives um that shape which countries can fully participate in the AI revolution. So, I look forward to the panel and I'll turn it over to the

moderator. Thank you. &gt;&gt; Good morning. My name is Jacqueline Cochran and I am associate lab director of the National Lab of the Rockies, formerly known as ENIL. And I'm really

excited to bring up my panelists. Could you all please come up? AI infrastructure is scaling at an unprecedented pace not only in my country here around the world. The

question is no longer whether data centers will strain power systems but whether leadership, technology and policy can ensure that they strengthen power systems and economic resilience.

So let me before we dive into questions let me quickly introduce our esteemed panelists for today's sessions. Right. We will start with my old friend Mr. Abishek Ren. He is from uh his CEO

of BSES Rajani Power, one of Delhi's primary electricity distribution companies who which brings he brings deep experience in utility operations and system reforms. Next to him another

old friend Mr. Dr. Samir Saxenna, chairman and managing director of grid India, responsible for national level transmission planning and real-time system operations where largecale

highdensity demands such as AI data centers meet grid stability and coordination. And then from the technology side, we have Som Fukan, director and head of

customer and partner engineering at Intel working at the forefront of computer compute architecture performance per watt innovation and hardware software integration.

And then representing the hypers scale perspective is Kartik Krishna, principal for energy projects at Amazon web services where he focuses on integrating largecale AI data centers with local

energy systems and long-term infrastructure planning. And finally we have Mr. Deepes Nanda, CEO of TCS's AI data center business, leading the development of next generation AI native

hypers scale ready data center platforms, bringing a unique blend of power sector leadership and digital execution. Together, this group represents the full

AI infrastructure ecosystem from grid planning and semiconductor design to hypers scale de deployment and execution on the ground. All right, let's begin looking at how AI data centers are

already reshaping power systems today and how this growth is being experienced on the ground. So I think I'll sit okay &gt;&gt; back. Okay, we're going to start with

you Mr. Ranjan. BRPL manages one of India's most densely loaded urban distribution networks. How are AI data centers changing how you approach load forecasting, capital

investment and reliability planning at the city level? &gt;&gt; Thank you Jacqueline and thank you to the National Lab of Rockies for having me here organiz organizing this

wonderful um panel on a beautiful morning. See as far as hyperscalers data centers are concerned. As of now we do not see anything in Delhi but

in Delhi NCR we do. For example in Noa there are certain hyperscalers which is maybe hardly 20 25 km away from South Delhi or East Delhi they're coming up. Now if we do not plan them according to

uh resource planning in the sense like grid where it is to be cited it is going to be a strain on the grid because the kind of gawatt requirements from each of the hyperscaler is very

very huge 1 gawatt one hyperscaler something like that. So planning when we do forecasting of the demand and the planning as such it's not only from the content perspective

it's not about power as such power can be because India's national grid is there which is a one asynchronous grid as you have already done the study I think that was in 2017

that uh resource planning study that was done by then USA okay it's more about the network the carriage part of Suppose you have in the heart of the demand center at 11 KV or 33 KV. In

fact, 1 gawatt will not be at 11 KV, 33 KV. These will be at I mean 220 KV or something like that or 66 KV, 220 KV and above. So therefore a it is not going to impact

the medium and low voltage grid the gigas scale hyperscalers. But then the way in India how we are organized that is central level transmission operators like CTU grid

India or maybe state level STUs in India at that level the planning needs to be there where how and where the grid substation 220x 66 or 220 x 33 has to be created

substation we're dedicated to the same apart from this since the base load is very very you know uh uh uh stable in a hypers scalar generation sources so would have to be

also long duration stable generation sources in US you're going for nuclear India we are just starting maybe it'll take another 10 years 15 years to reach there so for the time being there has to

be a mix of approach are you going to dependent on grid completely which may not be possible so apart from grid you should have a local say long duration maybe 6 hour 8 hour or 9 hour 10 hour

battery storage some technology colloccated with that center some captive generation as well maybe renewable generation with solar and wind alike nuclear comes in later on so it in

a nutshell the planning has to be done through meticulous modeling exercise it's not like you simply apply for connectivity and it's not like a small connectivity

it's a big one gawatt is a very big one and it has to be comprehensive it can't be peacemeal transactional so just like the CA creates a national plan for transmission for normal loads I believe

there would be a national plan for sighting of possible sites where the data centers can open and that has to be preddecided otherwise it may lead to chaos and unnecessary adding of wires

here and suboptimal optimization and therefore the burden of tariff on the end consumers. &gt;&gt; Thank you so much. All right. Next, we'll turn to Mr. Saxa.

From a national system operator perspective, how does the rise of AIdriven data centers change transmission planning and real-time grid balancing and what new risks and

opportunities does this create at the national level? &gt;&gt; Thank you. Uh first of all I would like to thank National Laboratory of the Rockies for inviting me and having me

here today. Uh of course this is a paradigm shift that we are going to see over the next few years. Uh in fact these are data centers we consider as very dense and intense loads that are

coming unlike bulk loads that we used to have at the distribution level. Now these would be at the transmission level because sub transmission they may not be able to cater this kind of requirement.

In fact the scale at which these are growing presently by 2030 uh the size of data center penetration would probably be something equivalent to that of one of the state demands that we are seeing

maybe 8 to 10 gaw. So even that size is going to be very significant. Now this load is manifests on the grid. It is uh variable. It is spiky. It has sharp uh ramps. Uh and it is so much variable and

uh in fact uh there are silent exists also from the system. Anything happens on the grid sides that data centers prefer to qu quietly isolate themselves. Uh they are uh inverter based. So would

uh so a big chunk of load like one to 1.5 gawatt or maybe a couple of gawatt simply walking out of the system quietly creates a disturbance kind of situation for the grid and uh we need to plan for

it. We need to be able to uh handle this uh in a more planned manner rather than having it in a random fashion. So from our from our operator's perspective the planning for the infrastructure one of

our firstly it has to be very reliable robust transmission uh system has to be there uh along with the connectivity like I think Abhishek has already mentioned uh reactive power compliance

fault right through all those kind of uh uh things must come be put in place that is one side the other side is the resource adequacy side such uh large chunks of uh demand and uh they must be

made obligated to meet the resource adequacy requirements not only in terms of the primary energy requirements but also for the reserves and balancing requirements. So here comesulinguling a

forecasting and shoulduling I understand that the AI uh especially uh during the prompt phase that we understand that it is highly unpredictable. So forecasting and shoulduling would be

a challenge for these entities and uh here again uh I believe that uh this is something that needs to be handled at the demand side itself because everything cannot be passed on to the

grid. &gt;&gt; The grid cannot absorb all these risks. The other side I think is uh another important aspect is that u many jurisdictions across the world require

these data centers to come mandatorily with some sort of generation to be able to uh handle these variations and u ensure adequacy part of it. So I think in India also our systems and uh uh the

codes and uh standards need to evolve further to be able to cater to this kind of new requirement before this I mean uh a large chunk chunk comes into the system and of course energy storage uh

uh and all need to be integrated with that. So I would stop at that. Thank you. I'm I'm just going to add that our laboratory partnered with grid India 10 years ago and it's amazing how many

comments now today are similar to back then right it's like how do you plan for all these changes for something large that's variable that's coming on the grid that

has impacts to the grid and it's it's a lot of the same tools today that we were using then like what regulatory changes what new balancing structures so it's it's but one thing that gives me really

excited is that India has had so much change in the last 10 years and so it's really it just it's very exciting to think of how easily you're going to manage all these changes going forward.

[laughter] Okay, so now Mr. We've gone as AI workloads explode, how is Intel improving performance per watt at both the chip and system level and why does

that matter for data centers operating at scale. So I think uh in this whole scheme of things the silicon providers are the problem child right that's they are the ones that creating this whole

power issue right so I think from an Intel perspective we are trying to address it at three levels first of course is at the silicon level itself so if you look at the 18A process if you're

reading about it we have introduced three technologies okay first one is called ribbon fed so what's happening is that it allows the stacking of the gates closer to one another so it essentially

allows to switch transistors at lower voltages that a reduces power. That's kind of one. Second, we're also introducing something called power via. So typically

in silicon design for those who are interested, you really I mean the complexity of power and data lines is very very kind of interdependent. So with power via we are able to get the

power on a on a back plane rather than a front plane. It is increasing the efficiency of the silicon by 15%. So that's kind of number two. The third piece that we talk about is something on

packaging. We have something called foros that's you know reasonably popular right now across hyperscalers as well. If you see what it does is that it allows a stacking of memory and silicon.

And if you really look at power generation in a silicon level the IO between the memory and silicon is the biggest thing that comes in. Okay. So to be able to re put it together it reduces

the IO distance hence reduces the power. So these three things at a cynical level on 18A is something that we are introducing in the platform. Now coming at a system level right we have always

been a big uh proponent of heterogeneous AI. Every workload does not require the guzzlers of you know GPUs and accelerators we talk about. So Intel has something which we call as appropriate

silicon for the workload including custom silicon. So we work with platform providers and hyperscalers to say based on your workload what silicon do you need right including for example a lot

of workloads can run on your PC client nowadays if you're able to distribute that workload across across the kind of silicon you want to use that's a second thing on power you really want to do

right the third thing of course is the workload itself and AI is a you know problematic workload but if you really look at this workload and you what you really need is observability

so when I'll give you an example. Okay. Uh we ran a workload end to end across you know CPUs and GPUs as an example. The end to end latency when you run on a mix of CPUs and GPUs is about 15% or 15

second between end to end start from where you have the CPU and where you have the output. But if you take a single task so which is very comparable to run it on a CPU versus GPU mix

heterogeneous or just orbit I mean or or just a GPU mix. But if you want to just compare a single component saying hey what is my training workload on this right obviously the heterogenity doesn't

work. So our the way we are looking at is these three things right a transistor level make sure it counts B workshop at a system level you're talking about the designs or custom silicon to be able to

meet the workloads and power requirements that you have and third work with the customers and partners so they understand this heterogeneity and be able to dissipate the power so that

you know people treat us less as a problem child but more as a problem solver. &gt;&gt; Thank you. Okay Mr. Krishnan, as AWS scales AI data centers globally, how do

you decide where and how to deploy AI data centers so that it aligns with local energy systems, regulatory environments, and long-term economic priorities? What has worked and what

hasn't worked? &gt;&gt; Uh first of all, thanks to uh NLR for this opportunity. Uh good discussion to have right and at the right opportunity. AI is just scaling in India. It's not

scaled yet. Uh a lot of these problems are in the future. So we we are not facing it today. We might face it 18 months, 24 months, 36 months from now. And uh we still have an opportunity to

correct it or to address it. Uh coming to what we as hyperscalers look for. Uh three four things. Uh one is speed and certaintity of power. Uh so we have our load projections and let's

say we need power in 18 months. So uh we need certaintity that the power can be delivered in that 18 months. Uh and then some visibility on the ultimate capacity. So let's say the data center

is 150 or 200 megawatt capacity. We obviously are not going to consume that power on day one. We will ramp to meet that demand. But we should have visibility of hey is there a network

augmentation that needs to be done whether that will get done on time. So that's one. Uh second is visibility to 100% renewable energy. So we want to run our data center sustainably. Uh so

visibility to 100% renewable uh is extremely important. Uh third that we look at is regulatory coherence. uh like if a a country or a state has a data center policy, there are electricity

regulations, uh then there are open access policy, uh then there are certain permits and transmission planning. We see whether they are coherent. It should not happen that one is saying something

else uh as compared to the other and uh the last but not the least is uh certainty of power prices over a longer period. So we are I mean our decisions are based on a 15 20 year projections uh

and we need reasonable certaintity uh of power prices. This is not to say that the power prices have to remain flat for 15 20 years but we say that it has to be reasonably uh predictable. So that's

about that's four or five things that we will typically look at when we are setting up a AI data set. &gt;&gt; Great. Thank you. Okay. Funny Mr. at TCS with platforms like Hypervault,

you operate where AI strategy meets real world execution. From a systems integration perspective, where do you see the biggest gap between AI data center ambition and day-to-day

operations and how are integrated platforms helping to close that gap at scale? &gt;&gt; Thank you very much. Uh very happy to be here and uh with this eminent panel. Uh

I think a lot has been set here in terms of um how infrastructure planning uh is a key element of getting into the AI data center part of the business. Uh India as was mentioned is very early in

its AI data center journey. Uh we have 1.6 gawatt of data centers for sure but uh those are mostly to serve the needs of edge and cloud storage. Now as you move towards AI uh the big difference as

all of us know is the dense requirement for power. So you're looking at anywhere between 10 to 12x additional power that's needed. Uh India I think is very well positioned at this point in time as

compared to the rest of the world. So if I were to peg India versus the the United States of America, uh our ability in the next you know 24 to 36 months to add capacity in parallel with the AI

deployment that will happen in India more for inference load will probably be faster than what the US can do at the same time because the US is just maxed out right now in terms of power uh power

both in terms of generation capacity as well as in terms of transmission and distribution capacity. So that's a big advantage for India. And that comes from the fact that the policies that the

Indian government has embarked upon in the last you know 1015 years especially on renewable energy is now coming to four. Uh so we have the ability to produce renewable energy and then supply

through open access to the zones which are data center popular. Now most of the hyperscalers like for example Amazon uh would work around a concept called zones. Once they have established a

position in a particular zone, they tend to expand in that same zone and hence policies that are written towards making sure that those zones are adequately planned well in advance for the physical

infrastructure because remember the AI models are coming at a pace which is much faster than physical infrastructure in terms of setting up a power plant, transmission lines can catch up. That

gap is anywhere between 30 to to you know 36 months which is the issue right now in the US. In India we have a head start because we have additional power available at this point in time. um we

should do well in terms of making sure that those data center zones whether it's Na'vi Mumbai for example or whether it's Hyderabad for example in the next you know few quarters there should be

you know robust planning in place to make sure that those zones are adequately catered to and then the concept of coming up with newer zones in the country um it'll be a factor not

just of power infrastructure but also how can you network these sites because ultimately all the data that gets stored in these sites uh will have to go to a end consumer outside of the site and

hence that network connectivity is important. The other element in terms of energy systems that these large data centers will need is the element of cooling uh and hence to make sure that

on day one the planning process is very well integrated also to uh ensure that the director chip cooling that'll be required just given the quantum of heat that will get generated. I think that's

an element that we are working on very very closely. So what I expect is that in the next uh few years India will probably add in the range of 2 to 3 gawatt. We have adequate renewable

energy capacity. Even our pumped hydro projects probably will come in line to coincide with the buildout of the data centers and hence our ability to offer roundthe-clock green electricity um at a

rate that's affordable for the term of the contract will be important. Now what the hyperscalers need to do is that the term of the contract that the hyperscalers need to contract for

utilities in India has to be long-term. Currently that's in the range of say 7 years but that's not adequate. You can't recover your capital cost within that period. Then there's an optionality of

extension. So again from a policy point of view when hyperscalers get together I think they need to underwrite uh utility capacity on power uh water and networking for that tenure only then you

will see that these business models will become more and more predictable there'll [snorts] be a decent return for the investor and hence that's how the sector will grow the gap between

ambition that you mentioned and what's happening on the ground right now I think it's all about timing timing and how you know efficiently we get our planning process in place and how

intelligently we design the systems. Um points were made on this panel on say for example battery energy storage system. It's a good concept but then the area required for you know for a best

system as compared to the density of power needed for a backup system in that area are two different things. It's like 2x more when you use batteries. uh in the world of data centers what I've

quickly uh understood is that it's about high quality utilities. It is lesser about cost and it is about highquality utilities. Lastly I would say is that the element of safety for example uh

making sure that there are you know codes and standards that uh speak very well to all aspects of safety uh not just of the data security but the safety of constructions. These are going to be

massive sites. So if you look at uh a typical data center rack, maybe that of say Intel or any of the players, it's a massive piece of equipment. Each weighs around 5,000 lb. If you look at the

architecture on power that needs to support that, there is a UPS that backs it up. At the back of the UPS, there's a large diesel engine that backs it up. At the back of that, you have two grid

independent lines on a N plus1 configuration. So you have so much of electrical gear that goes in and then it's was mentioned earlier on this uh panel that the load curve is not

consistent. You have spikes, you have harmonics to cure that you have additional electrical equipment that goes in and hence the aspect of safety when we write the policy or you know

when we get together to think about what else is important for this sector uh to be sustainable in the long term. I think it's it's all elements that go around safety and then I would say it's about

quality. Third is execution. Now the expectation there is this massive race that's going on right everybody wants to overtake the other person. You have new models that

come up you know every few weeks right uh quote unquote they drop a model. Now if if your rack density as it's defined if it changes say from 90 kilowatt to 160 kowatt physical infrastructure is

not yet designed to adapt to that change. So there are big questions around obsolescence risk for physical hard infrastructure that will be put up and hence that's another important

debate that forums like these need to discuss. Once we have safety in place, once we have gone into details of quality, once we have known about uh at what pace we need to ex execute and yet

uh not make these large assets obsolete, then is the element of cost. Again on that parameter I think India is very well placed in terms of cost because the cost per megawatt of buildout in India

currently is highly competitive and the fact that this summit is happening in India I'd just like to also make that case that this is the market for us to be in

&gt;&gt; great okay so we have heard uh across the suite of panelists about some many of the changes that are happening that um but now what what else needs to change? So I'm going

to talk to each panelist about what they would like to see changed in terms of coordination planning policy or something else that can help them keep pace with growth. Okay. So we're going

to go back in the same order. All right. Mr. Renon, from an urban distribution utility perspective, what needs to change for distribution infrastructure to keep pace with rapidly growing AI

data center demand? &gt;&gt; Thanks, Jack. And uh Deepesh mentioned some of the good points about design of hyperscalers and then how integrated it would be to the network and also the

business models. Now in a distribution perspective the distribution resource planning becomes very very important. The resource adequacy planning was

introduced in India a couple of years ago maybe two three years ago which was mainly about the supply side but from the network side integrated resource planning and resource planning

distribution resource planning is very very important that needs to change. So that is the amendment that needs to be done in the resource adequacy regulations the

grid code where the transmission plan should not be assumed as a copper plate. So that will give you idea about where to site flexible resources like in case of hyperscalers it would be more of

chemistry change. What is that? So vanadium redux. In the recently concluded Indian energy week, there were vanadium redux 20 ft containers on display which can be you know uh stacked

up as a Lego Lego brick. Okay. Just like a Lego brick very compact unlike lithium uh lithium ion chemistry. So and which are long duration storage. So the the chemistry is completely different. The

long duration may be 20 hours 24 hours more than that the kind of base generation. So the planning needs to be changed. The grid code starts with the grid code. So

just like we have connectivity regulations or GNA regulations. I think this should be classified as a mass load as uh my colleague was uh talking about Mr. succulations

they should be given a special category and then therefore the planning would start from there otherwise this may lead to chaos and uh ultimately the businesses might not be profitable uh or

if it is loaded on the end customers that might not be liked by the regulator as well. So instead of doing all those problems a the grid code b the regulations need to be changed and c the

special status to uh this kind of load hyperscalers in the gna regulations to be there and then the systems are already there and so it will be taken care of in the planning level

technologies are there which can uh you know jump off especially coll-located generation and as balancing reserves as Mr. Suction was saying and this could be co-optimized.

&gt;&gt; Great. Thank you Mr. Saxenna. What about you? What what would you like what changes would be really helpful for your coordination and planning? &gt;&gt; Yeah. So uh from a operator's

perspective uh even during the planning we start uh right from the planning phase itself uh the information flow as well as very close coordination from the people who are trying to put in the data

centers right from the demand the plan exactly what they are trying to do and what time frame and of course uh with the planning agencies as well as the transmission utilities and the system

operators it is extremely close coordination that is required and uh The more important part of the planning exercise is that the uh models for studies, system studies, uh dynamic

studies, all those must be very very clearly uh mandated and they must be provided by the uh data centers so that they are able to do that and uh in fact empowering the data centers also uh to

be on the electrical side also to develop expertise on the electrical side. We saw this in the integration phase. In in the re integration part we saw that the developers were simply kind

of trying to do plugand play. They were not bothered about the technical requirements of the grid. They were not uh equipped also to be able to carry out the studies to do fault analysis and all

those kind of things and take corrective action. They were largely dependent on the OEMs. So we would like to prefer that this kind of gap is not there with such large loads. It's not affordable in

fact. So that is one from the planning side. On the operation side, very close coordination with the load dispatch center for forecasting, scheduuling, balancing, uh providing reserves is also

very important going forward. The data center should be able to provide load shifting, peak shaving, uh maybe uh reactive power support also as and when required. Ancillary services, demand

reduction that can also they can participate. So all these services would become important because these are large chunks and they are easily doable. You can directly have a signal sent out to

them. So all those things are becoming very very important. So this kind of close coordination must be developed and uh uh they must come in as responsible citizens towards the grid as well.

&gt;&gt; Right. Thank you. &gt;&gt; Great. Okay. Mr. Fukan. Um, what design or system choices across the stack from silicon to full systems most effectively translates performance per watt gains

into real efficiency at data center scale. &gt;&gt; So I think it's uh like in any hyperrowth market um people often over overlook the need for cost and

sustainability versus design like like I think my my my esteem friends represent they say now people are looking for quality versus cost. That's never true. But to be able to be sustainable, you

really need to look at a design that's sustainable over time irrespective of the cost curve. So a few things needs to happen. Um I think if you look globally and you or you know Mr. Saken and etc

would know more there are you know data centers out there with a pee of 1.06 06 1.1 what have you but if you look at the India AI mission that is set up although the the goal was set there we were not

able to achieve that to be able to do and we we kind of land up at 1.3 1.4 for so step one I think data center providers need to reook at data center design okay to be able to make sure can

we meet the pee from a sustainability perspective that's one right what does it require it requires as I said the heterogenity of platforms that can give you the power requirement that you're

talking about you really need to look at computation and other platforms across to be able to do that second thing the IO is important and I think um Mr. Nanda touched upon it. I think photonix is a

nesting right. You should be able to use newer technology like optics to be able to a reduce the power and increase the transmission what have you to be able to meet the cost. Last but not the least, I

think um as an as a country or as a set of people who are looking at sustainability in the long run, the future is always open, right? Supporting for open systems, open

ecosystems, for organizations to work together to meet to one common infrastructure is what has been sustainable in the technology industry and AI is no different. So if I were to

ask a conversation for scale that you're talking about I think step one I think the government needs to set be firm about setting you know pee standards so that it reduces you know Mr. to success

work in terms of making sure it's predictable. B, you really need to look at newer technology like optics to be able to meet the conversation of what kind of transmission power you're

looking at or transmission distance you're looking at. And third, I think there needs to be and that India has done well. We have we've been very committed to open source what have you,

right? We really need to be very focused on open so that we know that it's sustainable and long-term versus getting locked into one architecture versus another. Those are treating that I would

request it out to be for this to happen in the country. &gt;&gt; Great. Thank you. Okay, Mr. Kristen, from AWS's experience scaling AI data data centers worldwide, where do

coordination challenges with utilities or regulators most often slow deployment and what has proven most effective in overcoming those frictions? So I was uh talking to Saku Saka G uh

backstage and uh I think uh the fundamental difference between traditional uh cloud services versus AI. I think there's a lot of confusion there is no clarity and uh I think we as

hyperscalers should also do a better job of explaining that like today uh like saxi rightly said that uh AI data centers the load behavior is slightly different as compared to traditional DCs

and it needs to be dealt differently that's a fact and uh so that one thing I think uh it's a challenge uh in the sense that uh both of us have to come together we have to explain that there

is this difference and uh how it needs to be treated separately and what our expectations are our expectations also are slightly different for an AI data center as compared to let us say a

traditional DC so that's one uh second is just the planning cycle right as a DC our planning horizon is 15 to 20 years uh the transmission planning cycle at the state level at least is 5 years

regulatory certaintity is for 2 years so the planning cycles are different right so at somewhere the planning cycles has to merge we have to be more long-term in terms of planning. Uh third is more

policy. Uh India has really good policies to be honest. I think uh the PG also touched that abundance of renewable and there are multiple models of securing renewable power. There is green

tariff. There is uh virtual power purchase agreements. We can buy Rex from the market. Uh there is physical PPA. But uh uh so let's let's talk about physical PPAs. State wise it differs. In

some states uh there is let us say monthly banking. Uh in some states there is time of use banking. Uh in some states the banking is reduced only to the solar generation of so somewhere

this policy coherence across state should be there. it will help us to take better decisions. And uh uh last but not the least is

there are policies in place in terms of incentives for data centers or uh certain waiverss but on ground the implementation of these policy is a challenge like that's what we have seen

that there could be an electricity duty waiver or there could be an incentive on energy rebate but on ground actually getting that rebate there are administrative challenges there is a

process in place But it takes about let us say 18 months or two years to actually uh get those incentives. So yeah I think high level these would be the challenges that we see.

&gt;&gt; Thank you. Okay Mr. Nunda as AI data centers move toward higher power densities and liquid cooling where do traditional data center models break down and what needs to be rethought from

the ground up? I think um between the conventional data centers uh and the AI data centers uh the design philosophy is going to be very different. We're going to get

together on day one between uh the semiconductor manufacturer between the hyperscaler and the data center designer. Uh that probably did not happen in the earth data centers. It was

more looked like a building where you just go and put racks. These are going to be complex energy systems. So that's one big change uh that will happen and that'll happen just given the kind of

power requirement. Uh but I'll also add to the comments that I made earlier in terms of what else can India do. So India is is at a advantageous position as I mentioned earlier also given the

fact that we have a single national grid uh not there in many countries uh which also means that there is a different power price in different parts of you know those countries which gives us an

advantage. uh the Indian states currently are competing for investment on data centers uh and that's super attractive that is not the case internationally and I hope

it remains in India um you know till we become a force to reckon with uh so on your question of the coordination on policy I think if all of us speak in unison uh with the states who are

currently vying for investment and make sure that uh those investments are translated into infrastructure projects in quick time. I think we would have served ourselves very very well. Third

just learning from the issues that uh data center buildout in the United States of America are facing and I quote that example because that's the country where maximum buildout is happening

currently. Um I think India has a huge manufacturing footprint right now and a lot of that is underutilized uh especially on the power side. So if you say for example turbines if you take

you know uh whether it's wind turbines or gas turbines or steam turbines and so on uh in the US that's maxed out and there is no availability till 2030 2031 company companies like say you know GE

or seammens and so on are sold out completely. we have that capacity. Same with electrical gear, right? So I think um this is the moment for us and as has been said by you know my fellow

panelists for us to quantify by state by location what is the demand and then kickstart the manufacturing process so that we have enough gear in place as this exponential growth takes off.

Finally also sources of uh power. So we've talked about uh renewables. Um I'm also a firm believer that uh we will also need back off the meter power in the sense that these campuses will have

to be self-sustained at some point in time and to that extent uh India should um rethink the approach towards gasbased power generation. We as a country we have around 45 million tons of import

capacity and that's ideally located across the periphery of the country. We have a very good pipeline network and hence again as hyperscalers look at the zones where they want to build out large

data center campuses it'll augur extremely well for India to kickstart the gas based power you know for these plants uh because when it comes to affordability I think the data center

operators and the hyperscalers uh that may not be the issue as compared to conventional power &gt;&gt; uh because it was mentioned earlier I think it was Abhishek mentioned that

ultimately my user should my consumer which is the consumer that they serve currently as a distributor should not get impacted on the cost of electricity. That's another policy dimension that we

need to work upon. &gt;&gt; Well, we could have a whole other session on rate design but for now let's just uh we'll have a lightning round. Um and so for each panelist

uh tell me the the theme of this is collaboration. though uh of this panel. So what to address any of your biggest like disconnects today between where you are,

where you're going, what others are doing. What would one what is one collaboration that could close the gap fastest? And I will take any order. &gt;&gt; Lightning round one.

&gt;&gt; Uh adoption of heterogenity or silicon diversity. I think that would be one key one, &gt;&gt; right?

&gt;&gt; Okay. Provision of reliability services by the data centers would definitely uh uh improve the system operation side. &gt;&gt; Taking the cues. So this is the design of the hyperscalers. The technology

collaboration which is flexible grid integraable just like you have electrolyers which can flex. So that kind of technology I'd say hypers scale is taking a bigger

bet on India which I think they already are. So I think uh the good and the bad thing are the same. Uh AI data centers are the power density is very high like in the

same footprint you're talking about gawatt capacity. I think in the next five years we'll talk about gigawatt capacity. Why I'm saying it's good and bad? uh it's bad because you would want

the data centers to be spread out right so that the strain on the network is not that much but that's not happening why I'm saying it is good is you know the pockets that you need to focus on you

know like uh Deep rightly mentioned he spoke about Nav'i Mumbai or he spoke about Hyderabad we exactly know the pockets where the data centers are coming up and we should give special

attention to those pockets when it comes to network augumentation much ahead in time right network augmentation or like saxi rightly said that there could be a problem of fault currents being injected

or harmonics or voltage flicker. So the good thing is that you can arrest it at that point like if you put in proper checks and balances these things can be arrested at the local grid itself

uh and it it will not pass on to the grid. So uh planning I think we have to get better at planning more localized planning I don't see problem on the generation side upstream uh transmission

uh network is also robust but when it comes to localized network wherein the data center clusters are forming that is where I think we should collectively focus and plan better.

&gt;&gt; Wonderful. And then on our last few minutes, um would do any of you have a question for one of the others on the panel. &gt;&gt; I'd like to take this opportunity to ask

uh you know sir you on battery energy storage and the role that it'll play um to stabilize grid power for large data center campuses. Any thoughts on that? because that's a

topic that you know we've been looking at and I know that India has embarked on a journey of buying massive capacity of battery energy storage. How how do you see that playing out?

&gt;&gt; So I think uh energy storage uh is definitely going to be playing a very very important role especially in the context of data centers. In fact, that is uh where you can actually absorb the

ramps uh and uh maybe provide backup, provide reliability service, provide voltage support, all those kind of uh reliability services can also come out from the battery energy storage systems

and in fact uh uh it could offer uh some sort of uh shifting of uh demand as well. So all this I think uh should definitely come through in the form of local support uh to the data centers.

So, &gt;&gt; so Deep just to add uh this is another commercial opportunity for you, business opportunity. So, you run data centers, right? So, that is a main business. But

then when you add these resources, unlocking lithium chemistry, you can talk about any other chemistry which I attributed to maybe the vanium redux which is a flow chemistry. There could

be many other sodium ion batteries long duration ones because this is a very stable base kind of load data centers are. So if you have this and then the regulations which are in place ancillary

services regulations may be amended as market based are getting introduced ancillary service on market is already there now SRAS that is secondary reserve ancillary service and primary they are

going to be market based in short-term future short-term future so that could be a way where you are making your lives easier also there's a money spending prop opportunity where in your you know

valuation sheet. One of the line items would be how I'm flexing my data centers without impacting the reliable operation and making money out of it. But next one thing Jacine I wanted to add here as we

are becoming more and more datadriven data dependent data is just like becoming our oxygen air. So the data centers definitely are going to be very very crucial and critical infrastructure

as like in India or anywhere else we are classifying the power infrastructure as very critical and they are very soft targets. Now the islanding schemes of power in in

India for example for cities like Mumbai, Delhi, Hyderabad, Bengaluru where these data centers are likely to come up they need to be brushed and dusted now because if the islanding

schemes are not properly operating in Mumbai there was a case I think in October of 2020 or 2021 where there was a failure because of some transmission glitch something happened and there was

cascade failure. Here the hydro power in the western guards were not able to sync up or you know supply power to Mumbai city of Mumbai. So those things will be cat catastrophic because why the data

centers if they fail then your critical life support your police enforcement maybe um airports hospitals they're all going to die down. So therefore the islanding schemes uh have to be dusted

and there we need more technological inputs. It's not no longer a power play because it's going to impact your lives. Data centers are now heart of lives actually.

&gt;&gt; Well, thank you. This has been a fascinating discussion and it is clear that all these choices that we're making today are going to be shaping our economy for decades to come. And I want

to give a round of applause to our panel and then Okay. But I'm others you want to come up. I'm going to invite now my colleague Adash Nagar Rajan to give some closing

remarks and then stay for the next panel. We're going to be going uh more into data centers. &gt;&gt; Thank you. Please please stay back and ask your question sir. This is a very

important topic but little later once we end the session is it we'll figure it out sir. Oh my god. Okay we'll figure it out sir.

Thank you. Thanks for your voice. Um so the this whole journey of AI as a data center and the load growth is so rightly mentioned by Jacqueline. uh what India went through 10 15 years

ago huge huge change huge change in demand here in this case we are adding huge demand of gigawatt scale adding a new state even a

variability of 5 to 10% is hundreds of megawatts it's huge um and as this committee so rightly pointed out um this will be successful only when there is a knowledge exchange and a

handshake across all the stakeholders present here and the categories of stakeholders the chip manufacturers as model developers the solutions the discoms and the national grid operators

all put together when there is a harmony of knowledge that's when it becomes highly successful organized and I believe the leaders here have already communicated that um and with that I

want to take a next few minutes to provide the moment to all the panelists. Uh let's let me invite uh Jacqueline please give the moment to Abhishek Ranjan CEO of BRPL

the momentto that we'll give we have &gt;&gt; thank you thank you sir uh let's let's see let's have Mr. Samasa please you can come stand. Thank you sir. You can come in

the front a better picture for everyone. Thank you. Uh let's have uh Mr. uh M Krishna. Sorry Fukhan. Sorry for that. Uh Mr. Krishna please. Thank you.

And Mr. Nanda. Thanks a lot. Thanks a lot. Please stay back. We have an equally interesting yet more technical session following right after

this same place. Uh we'll be replaced with more eminent guests as well. So please stay back and listen to that as well. Thank you.
