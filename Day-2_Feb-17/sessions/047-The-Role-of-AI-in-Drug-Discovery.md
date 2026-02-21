# The Role of AI in Drug Discovery

**India AI Impact Summit 2026 — Day 2 (2026-02-17)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 11:30 – 12:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 16 |
| 📅 **Date** | 2026-02-17 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/GqBRf712hig?feature=share) |

## 🎤 Speakers

- Aditya Kulkarni, Avammune
- Aditya Kulkarni, Avammune
- Jonathan Picker, Harvard Medical School
- Jonathan Picker, Harvard Medical School
- Parag Saxena, Vedanta Capital
- Parag Saxena, Vedanta Capital
- Vibhu Aggarwal, Miimansa
- Vibhu Aggarwal, Miimansa

## 🤝 Knowledge Partners

- Department of Science & Technology

## 📝 Summary

Modern drug discovery is in three parts: Finding a promising gene variant, translating that to a molecule that can be given to a patient and finally testing it in human clinical trials. The speakers will share their experiences and challenges in each of these three steps.  AI is being increasingly used in each of these steps and the speakers will describe the the role of AI in each part.

## 🔑 Key Takeaways

1. Modern drug discovery is in three parts: Finding a promising gene variant, translating that to a molecule that can be given to a patient and finally testing it in human clinical trials.
2. The speakers will share their experiences and challenges in each of these three steps.
3. AI is being increasingly used in each of these steps and the speakers will describe the the role of AI in each part.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/GqBRf712hig/maxresdefault.jpg)](https://youtube.com/live/GqBRf712hig?feature=share)

---

_[← Back to Day 2 Sessions](../README.md)_


## 📝 Transcript

that you used to have to pay and it was a real problem. So if we move on to the fourth uh submarine, could open standards democratize AI? So give yourself a quick intro and give us two

minutes. Okay. Uh hey everyone uh my name is Sam Bartuk and uh I'm u working with the vCluster as head of developer relations and I am also the founder of cube

simplify. U so very interesting topic could open standards democratize AI. Um like everyone have already said over here uh there are a few points that we discussed u so anyone should be able to

be the builder uh because when you have the closed source model how do you build on top of that you know we don't want smaller the only the few big giants controlling everything that is out there

so we saw when deepc came and some of the open source models started coming up hugging face started coming up how everyone you know created their own set of rack pipelines and built their own

mini AI data center factories uh then also coming to you know want to give you the the same highlight from the container ecosystem where where I kind of belong. So there was this docker that

came up and docker kind of revolutionized how do you run in the containers. Then came the open container initiative and open standard for how you build containers. That's how it is

important. So you you had Linux and then it was again open standard open source uh and then all the on top of that you had sousi built their own flavors. Red Hat built their own flavors. So it we

have to enable like the open-source ecosystem and the open standards enable everyone to build something that is meaningful. Another example is like Rohit recently built skill kit. Uh so

it's it's important because right now when you create a skill and you uh build it for one particular agent and you want to switch the agent, you have to rewrite your skill. Why do you need to do that?

There has to be open standard and open way. In order to do that so that every you don't waste your time, your money saved uh and you are you know uh doing that. Uh another thing is observability

like we we had data dog New Relic and then came open telemetry. As soon as open telemetry came in as an open standard, the whole observability ecosystem is now stabilizing. So that's

that's the power of uh open source and open standards that they bring in. Even the bigger players are then forced or they contribute. So Docker itself contributed to the open container

initiative which is what we need. So anthropic building MCP is a very good step that the bigger players want others to join forces and build those open standards. So it doesn't have to be

built in silos. it has to be built together. So where the big organizations, smaller organizations have to come together building and adoption. So adoption was a key thing.

So building and adopting these open standards so that uh we can democratize the AI. So I think it plays a very big role over there. Thank you. &gt;&gt; And when we talk about democ Yes, thank

you. [applause] When we talk about democratizing AI, we often talk about the enduser and giving people the access as users of AI. But there's another piece to it and that

other piece is about you all building your own projects and building your own businesses on the back of it. And what Ro um what we're talking about here is the the way that um Docker in particular

became a standard around the cloud native ecosystem and enabled people to build businesses. Kubernetes is similar. You start to see businesses around this. You start to see engagement and

interoperability. And what those standards allow us to have is interoperability. And then when you innovate and you build businesses around those open or de facto standards, what's

happening is that you're able to collaborate, you're able to build things that people will adopt quickly. And it really is part of the power of open source that you have that access to a

standard to a de facto standard that enables this interoperability and for people to come in and use what you have built. Um we are launching on Thursday evening a video. It's only a short

video. We'll be launching it on the the evening and you'll see it on our website and it has one of the MCP founders talking about the value of that standard and why anthropic has put it into a

foundation in the same way as we saw the cloud native foundation build out around the cloud native ecosystem. We're starting to see the strength in that open-source ecosystem. There's a talk

this afternoon with the OECD and I think Roost are also here and they've built um tools that you can use when you're building your AI that will support you building your AI that are all open

source. So just as some pointers. Okay, so let's move on to the biggest concern people generally have about AI security. So does identity secure Aentic AI? and maybe you can explain a little bit about

identity if that's not an unfair question as you start. All right. So, please introduce yourself and &gt;&gt; Yep. &gt;&gt; Uh, hi everyone. I'm Shvai. So, that's

the question in case anyone missed it. Um, so I come from an AI and a machine learning background as well. And I've been a code contributor to a bunch of different open source projects within

the CNCF uh landscape as well. And I got to work a lot closely with the Docker team when they were launching the Docker MCP uh gateway or the catalog. And that was essentially one of the ways in which

they were trying to address this particular concern. So when we talk about identity there are it it basically goes two ways right. One is identity for what type of MCP tool call I should

make. So you know Rohit spoke about authorization. So uh MCP officially supporting the oath 2.1 which basically means that you can go very deep into the fine grain authorization in terms of

which particular MCP tool call can be made by a specific user but how you can actually also discover because in an enterprise situation you probably don't want to showcase certain MCP tools that

can be made or can be discovered by certain type of users. So that's more around the authorization and you know the the fine grain scopes that you can make when it comes to making these tool

calls or even with the typical agent behavior. But the other part of the identity is also that can the agent actually understand the intent behind the user right for example uh one of the

wonderful discussions that we were having was uh that how does uh like let's say you're using claude and you ask claude that go to amazon.com and make me this xyz purchase. So does

Amazon know that which particular user has actually made that call because it's basically the agent in between that's making the tool call to call Amazon but do we have enough uh spoke do we have

enough scopes and permissions and have we given that layer of identity that can identify that Amazon as a system backend system can identify yes I'm actually giving the private information about the

account for this given user. So we have to think about the policies in terms of how you define the o because what you have to do is that if you have a multi-layer agentic system the level of

scopes of permissions basically reduces as you go. So you started the most o but you also have to keep in mind as you are making this entire agentic flow you don't lose the identity of who made that

original call right so that that is why the traceability or the auditability of what tool calls are being made and how those are being made is also equally important so how you trace that whether

the MCP tool calls were made with the right intent uh that also is equally important right so you have to it's basically two ways you control what MCP does and how it makes the tool calls,

who is making the tool calls, but you also keep a accountability of when it made that agent call uh whether it is secure enough or not because you have prompt injections, you have all of these

uh security uh challenges that you can basically run into. And the policies that you define about how MCP tool calls will be made is not just limited to the authorizations, but it's also more about

how agents also communicate with each other. So you basically merge A2A protocol with MCP and you think about like you know how the SPI FFE these type of uh you know security protocols can

also be now made alongside MCP. So that's the great thing about open standards that you can now incorporate it with different type of models with other security principles that you

typically have always had with software development but now we can adopt them for agentic systems as well. &gt;&gt; You had a great conversation. There's been a lot of good conversation in the

room. So coming on to data. Data is the problem and the answer. You introduce yourself and give us two minutes. We're going to be bang on time if you stay to time.

&gt;&gt; Uh yes. So data is the problem and the answer that captures I think a central paradox u in modern AI. So our mighty team where are you? Um we set out and we identified a few uh problems uh which

are lack of experimental data, proprietary silos, privacy risks, bias, risk costs and also a reluctance in some cases to share. Um my name is James Lovegriv. I'm public policy lead for

guess who? Red Hat. Um and of course the answer surprise surprise open source um open collaboration and perhaps a bigger room. Um but in more detail I'm conscious of time uh again my mighty

team came up with some ideas. Yes. So quantity is there but there's a lack of quality uh and thus the role for upstream projects uh to democratize AI model improvement. Um of course uh Red

Hat's involved in a number of these one such as Instruct Lab we encourage you to have a good look at um but otherwise uh what else is there? Sorry I'm conscious of time. and then also data science

pipelines uh the need to sort of automate and clean and process um and then the power of model serving uh which is out there to again help uh India and other countries to uh democratize AI

models. So um thanks back to you Manda. &gt;&gt; Thank you. Brilliant. So as we get to our final uh group and our final topic I can feel the anticipation mounting in the room. Are

data centers going to solve our challenge? So, let's have a quick show of hands. Who thinks data centers will solve the You have a very limited positive

response there, Simon. &gt;&gt; A very optimistic response. So, I'm Simon. Uh, I'm from a company called Sibo. We had a great discussion, very interactive. So we started talking about

yeah are they all going to be just big big data centers or actually are we going to see much smaller data centers. So quick some facts big data centers today many of these companies are

renaming themselves rather than from data centers they're calling themselves AI factories. Okay, we're moving from uh racks with power of the H200 about 25 kilowatt to the B200

about 130 kilowatt to the next version that comes out in September half a megawatt per rack. 2027 Nvidia are telling us they will be two

megawatt per rack. Okay. So, are these data centers going to need the size or is it all just going to be smaller data centers with massive power? But what does that mean for India? Yeah. So, in

India, the data centers are today all in tier one cities. They go to tier 2 cities, tier three cities. Do you have the power infrastructure, the water capacity to deploy these largecale

deployments? And will the local residents, local population want to have, you know, their water taken away from them, the power that they need for lighting, cooking, you know, again, not

being available because you need two megawws per rack. Actually, we're going to start talking a different uh currency. That won't be the measure anymore. The measure

with the leading companies today are tokens per kilowatt. Okay, so tokens per kilowatt. So we're going to see some big AI factories where the big training jobs are working, but also we're going to see

edge data centers, much smaller data centers, less power, less cooling, but close to the population for inferencing. &gt;&gt; Thank you. So I am really proud of you all working

so hard this morning to bring us this fantastic content. We will pull that content together and we are producing a report on AI openness of as many conversations as we can pull into a

report across the summit. It will be available by 5:00 p.m. IST on Friday. I'm probably going to be up all night the night before making sure it is. You'll see our video on Thursday night

with the MCP founder. Tomorrow at 10:30, we will be next door with an amazing panel on resilience and uh sovereignty. Thank you all for coming. I hope to see you at some of the other sessions I'm

speaking at. And ladies and gentlemen, before you rush off, just one more thanks to all of our wonderful leaders. [applause] &gt;&gt; Thank you very much.

&gt;&gt; I'm glad. I just wish we had more space. Can you get me as I'm moving? That'll be nice. I guess that's Somebody have control of this mic or can

you hear me? &gt;&gt; Okay. Good morning. Namaskar. My name is Parag Parak Sakena and uh I have the privilege of having two very skilled people in the world of

drug discovery. Dr. Dr. Jonathan Picker who has come down all the way from Boston where he is at Harvard as a professor of genetics.

He's also trained as a surgeon. And then we have Vibu Agarwal who I first met when he was at Stanford about a decade ago and he runs a company in India that's germanine to the topic

that we're going to talk about. runs a clinical trials company. Uh so as a oneline background what I've done for this is my fifth decade of investing in

venture capital companies and uh so we've had the benefit of a lot of time in investing in companies and seen a lot of wonderful trends and I'm particularly excited about biotech and

tech if you can't be in venture capital without being in tech. So we do a lot of tech and once upon a time we used to do retail. Uh

so that's my way of background and uh this is an area drug discovery that we have invested in a lot of companies over a long period of time. Uh and I'll lay out for you over the

next 10 minutes somewhere between 7 and 12 what we hope to talk about. And as you know the title of this is the role of AI in drug discovery and modern drug discovery AI is really

important for it and I don't know how many of you are in either of these fields AI or anything related to pharma can I have a show of hands

okay very good be kind to us when you ask questions we are worried about people who know too much so uh if we take modern drug development

and break it down. I break it down to three high level parts looking at the view from the mountaintop. The three parts are first in today's world finding a gene variant that is of interest and

Dr. picker will say more about that as he goes along. But in simplistic terms, you collect vast amounts of data from people, right? Which can be blood from which you can extract DNA or RNA or you

can do proteomics. You know, there's a variety of things that you can do and that gives you data. And then you have phenotypic data. You know, how tall are they? What do they weigh? What's their

BMI? therefore what's their clinical condition when they come in their blood pressure perhaps their A1C you know so a variety of things depending on what you're interested in for certain kind of

patients you'll also have radiology as data right so the obvious rule of AI is to look through all of that and see if there's patterns that they can detect if they can detect that there's a

commonality of gene variance with people that have the same condition right so if you look through a large number of people and go through that you'll be able to come to

helpful conclusions which then you can do something with and this is important for two reasons it's obviously important because if you are in India perhaps you find something that might be classified

as a rare disease but when you take percentages of 1.4 4 billion. It's large numbers of people, right? But the other thing that's really important is if you find an interesting pathway, a way that

something works, that is a globally useful proposition. And if this was a debate and we were having a debate, I would say this house believes that India has two significant advantages over the

rest of the world in doing drug discovery in AI. Right? What I just talked about is one of them which is primarily because of the vast population but almost more importantly

the endogamus pockets of population that you have and if you're like me I had to look up the word endogamus when I first came across it. It's you know people who have a high degree of

intermarriage and you can go further than that and you have consanguinous marriage marriage between cousins right and and we have large pockets of both of

these and that gives rise to a much higher frequency of certain genes in those populations. So you're starting out with the advantage. It's a hundred to a thousand times depending on the

population. A 100 to thousand times, right? And so the obvious implication of that is you now need 100th of the samples or 1,000th of the samples if you have the right set of samples to be able

to find an interesting gene. May or may not work, but you at least are doing the work quickly because you're doing less and it's costing less. That's a huge advantage that we have in India. So you

know for those who are in the business already think about that as you get into you know thinking about the future. This is a place which we have a structural advantage in and we should use it.

Right? There have been a lot of press about the Chinese and rare earths. This beats the hell out of rare earths. Right? A much bigger deal. Right? That's one. two which I'll say very little

about because we don't have an expert and it's also not a strength in India. I hope it will be over time and there are people certainly trying it. In fact, we had a speaker that had unfortunately had

to cancel that has actually taken you go from gene variant now you need to get to molecule right so in simple terms you got an interesting you know set of DNA and now how do you make that into a pill

that you take or an infusion that you have if it's IV or an injection right how do you go from there to there that's so-called translation right and then the third part is the use of AI on clinical

trials. By the way, in the second part, there are lots of interestings that you have. In fact, wandering around somewhere here should grab him if you can is Dehabis who won the Nobel Prize

for his work on folding of proteins which is in that middle step. Right? So there's a lot of interesting things going on in AI there. And the third is having got a molecule that you think

will work, you now need to try it in humans to actually see if it works. You have to prove it, right? Clinical trials, human clinical trials and Vibu will talk about that uh when we get to

it and the use of AI, the challenges in the use of AI, right? Some headline facts. This is a huge market as I'm sure you know. Roughly $1.75 trillion dollars is spent on pharmaceuticals globally.

Right? Important thing to know is 20% of all generics come from India. Globally come from India. 40% of prescriptions in the US of generic drugs are drugs that come from

US. Right? So when somebody you know reaches for their lipid equivalent I'm 71 so I take lots of these drugs. for their lipid equivalent looks for their uh amoxicylin for their kids you know

the the probability that this was made in India is what I just cited right depending on where you are but globally it's 20%. So we have a space over there which

means you have things like distribution which means you have things like some manufacturing skills because we also make biosimilars right so you're also dealing with things like antibodies

you're also deal with bioimilars right where little bugs are doing the work for you instead of uh having catalytic chemical reactions right so big market a place we already have

significant fingers in and in both this and the third I think we also have a huge advantage because in numbers not in value but in numbers we are the software producer for the world right in terms of

the skill set that we have right and if I was running any of those companies and some of those people are here I would exhort them I would say you know stop whatever you're doing in fact leave this

conference now go and start go and find a subset of your team that can do bioinformatics which can be used across the whole spectrum of what I've been talking about or further up the value

chain you know do more stuff do the do the multimodal AI models which are not hard to do right they are not hard to do they just need focus on doing that right so if you know two of you guys actually

were thinking of starting a a great idea with a consumer app that delivers in 15 minutes I would exhort you to abandon that idea and use that skill skill set in this right we've been able to do it

look at UPI right we came from nowhere we do we did in January more than 20 billion transactions right that's well more than Mastercard little bit less than Visa but those guys

are operating in 200 countries right so if you could do that if you could get there in a few years we should certainly be able to get to bionformatics to clinical trials where we have these same

edges the vast population. Right. So, I probably took more time than I intended to. I'll stop there and hand it off to Jonathan who will introduce himself briefly and go on from there. [applause]

&gt;&gt; Thanks, Barack. Um, as uh Prague said, I'm a geneticist, a clinical and molecular geneticist. I've been in the field since the 1990s, and I came into it with the goal of using genetics to

change medicine. It was clear uh that you know if you really want to understand a problem and deal with it you go to the software uh that uh is the code for everything that falls out. Now

interestingly uh like many people who not everybody who's here but those who are old enough to remember when the human genome project in 2003 announced the completion of the first annotated

genome there was tremendous excitement. There was a belief that medicine was going to change. Unfortunately, it's changed much less than we expect as a result of this. Sure, there's been some

spectacular individual successes with particular disorders that have been transformed. But for most of us, uh, genetics, genomics has not really changed the care that we received. And,

uh, you know, we have to ask the question why. We have so much information from decades of research in genetics and in uh medical research generally and yet the field hasn't moved

forward. The reason uh really there's a number of reasons. One of them is the sheer amount of data and the complexity of it. And this is where I think AI really is going to shine. uh it can do

what we as humans can't which is to take this data and assimilate it and uh tease out uh the critical elements that uh give direction for drug design. Now that's the hope. There are some

challenges though and the first is though we have a tremendous amount of information in uh it's really just the tip of what's there. In fact if we take all the information of the last multiple

decades in medical research genomic and others and let AI go at it as is happening. The estimates are that within two to five years we will have extracted most of the useful information that can

be translated into care and it'll be a case of diminishing returns thereafter. So we need more data. Now fortunately there's an enormous amount more. In fact, uh estimates are that we would

need to have the genomic data of at least a 100 million people um in order to have it powered enough to be able to produce drugs across the spectrum that would really transform medicine. Now,

it's not just 100 million genomes. Genomes actually are relatively commoditized. uh if we have the blood uh we can put them through the machines. We can obtain them. We can put the data on

the cloud or wherever. The challenge is matching those genomes to the phenotype or the clinical spectrum of the individual. And by phenotype I mean who we are, where do we come from, what is

our background, what's our state of health, what's our state of disease, and how has this progressed over time? What's the natural history of who we are? genetics uh plays a very major role

in all of these and they're all critical as we look towards drug development. Um that's the first part is we don't have enough data yet. We need to acquire it now. Uh that's one problem. Another

problem is that over 80% of the genomic and indeed medical uh data that we have comes from people of European and primarily north European ancestry. Now this is a relatively homogeneous group

particularly compared to uh people from India. Why? Because uh the populations tend to merge and uh crossbreed with each other uh leading to a gradient of difference across the different

populations. Whereas in India uh with the cultural and historical uh background of the last several thousand years most of the subops are as parag said relatively indogamous and therefore

within each of over 4500 plus populations uh we have relative islands of genetic uh variability. Then on top of course we have a relatively high rate of

consanguinity in terms of uh looking recessive disorders that have genes of very powerful effect and uh that can be very directed towards research. So we're both missing the diversity and uh we

don't have enough data. Now it's not feasible at least right now to go out and get a 100 million uh people well phenotyped and genotyped uh to feed to the AI machine. So we need to think of

uh alternatives that we can use now to move uh the research and the opportunity for drug development forward. There's a number of ways that can be done this. Certainly the field is cognizant of this

and um biologists uh working in AI have developed a number of techniques including uh the the creation of um virtual patients and virtual data banks that can be used. Uh there's

extrapolation to populations that haven't been represented in the genome. Um and other tools where we create virtual data to model uh questions on to try to find uh ways forward for possible

pathways that we can target. That's great. accept that this is virtual and it's not it's not real data and uh and we need the real data because we're both uh missing critical variants that may

not be population in the European uh databases. So if we don't even know they exist, we certainly can't look to see whether they're meaningful targeting. And we also have the problem again that

the homogeneous populations that have been studied um share uh a wide spectrum of varants that cloud the significant ones simply because so many are shared. You say which of these uh 2,000 is the

significant one when people with the disease may have may have uh all of them because of common background. So diversity is scientifically necessary. Now on top of that uh and this this goes

a little bit beyond the remmit of today's conversation we have to think about the fact that diversity is politically and regulatory important um organizations such as the FDA or the uh

EMA the European uh medicine agency require diverse populations now in order to allow approval for uh drugs that may have been designed to go forward. We don't have that AI can create uh the

most wonderful drugs in the world but we're not going to be able to apply them. So we need this now we can do do this by including populations. India is uh really at a nice position as a bridge

between both the east and west in terms of having uh the diversity in one country, one regulatory apparatus um and with the uh scientific and administrative skills to be able to

obtain this data. And very understandably there's great concern about sharing this data with third parties whether they be in other countries or external sources. Um we

know historically that data has been abused and has not been to the advantage of the donors. So um we need to think about how do we not just get the data but how can we meaningfully uh use it in

a way that protects the participants and the country. um as well as providing an ethical framework so that it will be used for the betterment of the individuals who provide. So it's

increasingly difficult to send the data out to a common center for analysis. Instead, what we can do is we can consider uh a federated educational approach where let's uh bring the AI in.

We develop uh an a AI algorithms and tools to answer a particular uh interrogatory request about a genomic uh region that may be ripe for chemotherapy.

We provide it uh locally uh within country or within the specific institute and we allow them to carry out the analysis. They release none of the data of the

individuals uh that they uh studied but they provide the uh results and the and the metadata to uh the common uh central agency that may be collecting from many different regions to allow these

insights to be developed. So this uh protects as well as allowing us to move forward. Now um I think this this will be the way forward. Um in terms of what we'll do with the genomics, uh it is

sequence, it is code. It doesn't necessarily mean that because gene A has a change at position Y that it leads to a protein change that's significant, but it provides the catalyst for us to then

look at uh transcriptional um studies as well as proteomics and other omics that are functional uh that can then be used by uh the drug developers to say okay this pathway is

disrupted here. We need a molecule that either targets right there or that targets upstream or downstream demands it and that provides the fuel for the drug discovery. Um we do need the data

though. uh I believe uh you know India may be in a unique position to provide the uh the population diversity alongside other parts of the world but primarily uh

India could start the drive itself and with this I believe uh that we're really well positioned to change the paradigm for uh drug discovery and uh usher in uh the genomic era that the human genome

originally uh proposed. So uh with that I'll uh pass you over. &gt;&gt; Thank you for the very insightful comments. A quick word about myself. I'm Vibhu. Uh I have a long and checkered

past. Um I finished undergrad way back in 97 and then my first love in life was computational linguistics. So I ended up building the first textto-spech engine for Indian languages. And then uh later

on you know through a sequence of personal events I came in contact with computational biology and I realized that a lot of skills that I had picked up as an engineer and as a computational

linguist start to apply immediately to biology and then I went off to do a PhD at Stanford and since then I I came back in 22. I run this really fun team called Mimansa AI. one of my colleagues is

here. We also have a booth in the expo hall. I'd encourage you to come and visit us. And um initially I had thought of focusing on the algorithmic aspect of AI as it applies to drug development.

But both the speakers who went before me um have um spotlighted the data aspect of of AI. So Parag talked about data efficiency and how finding these consanguinous populations uh could

possibly ease the problem of doing these studies which can be linked at linkage studies done at scale. And then uh Jonathan talked about the specific information content in this data and uh

its value to finding relevant phenotypes that we can then pair against genotypes. So I'll probably I I was just trying to rejig my my spiel in my head as they were talking and I I I I will admit up

front that I I need to do that. I will start with the data aspect as well and then go on to the algorithmic aspect. So um specifically because uh the the area that I work in is um clinical studies.

So everything that happens till the time you're testing a candidate molecule on mice on monkeys and cell lines and so on. so forth is known as pre-clinical and then when you start to do first in

human trials and look at safety first and then efficacy and then e efficacy at scale and then safety postmarket all that is clinical and uh

it doesn't seem uh the you don't see the magic of AI manifesting itself in this regime very clearly until you pause and think about it a little bit. So I think most people or a lot of people here in

this room would be aware of the fact that 80% of clinical trials do not make their enrollment targets. And this this this this is an average number. Averages can be very misleading.

So you need to look at the variance above and below the average. So if you're looking at rare disease, something that Parak spotlighted a little while back, uh you will see that

most of these clinical trials are not multi-arm trials. they end up being open label single arm trials. Why? Because you just cannot find uh enough patients to enroll in those trials. Even if you

were to find enough patients to enroll in those trials, uh as an investigator, you may not be able to convincingly argue in favor of equipoise. So it becomes unethical to find to to have a

control arm for these trials. So what do you do in such a situation? And this really is one of the burning problems of taking a drug which otherwise looks promising in the pre-clinical world to

human subjects and human patients. And uh this is really where the availability of the right kind of data being able to find these phenotypes, being able to quickly and efficiently enroll patients

in these trials can make a big difference. uh how many of us have actually participated or or are familiar with the clinical trial workflow or okay so uh

every time you want to do a trial it's mandatory that you will you know at least in broad brush strokes spell out what you want to do in that trial. So there's a clinical trial

registry where you'll say what the end points are, what the objective is, what the therapeutic agent is, some basic details about the study design and also sometimes a study protocol as well. Now

from that point to finding 5, 10,500, 500 or 5,000 patients that you want to enroll in that trial is can be unimaginably complex. Um I have been

trying to work in this space in India and early before I was in India in the US as well. Uh I I'll share an example without naming the actors. So I went to a hospital that that's very well known

in in Delhi NCR and they are a clinical trial site for some of the global pharma companies. Uh they're running a multiple myoma trial. I won't say anything more because

then I'll give away the name of the hospital. But I went and asked them I said so you're looking at a you know a patient with a certain profile a certain medical history they should be treatment

knife they should have multiple myoma with certain types of cytogenetic characteristics how do you find these patients and believe you me the answer was I'll

just go and ask the floor manager you know this is really I mean it takes a if you have to think about this for a while before it sinks in there is no way that you can accelerate drug develment-

velopment or try to do this for a 100 therapies in one go. There's no way to scale this kind of a process and this is really where AI can step in and and be a really uh big gamecher.

So one of the things that I and my colleagues learned in the last two and a half years of trying to work with hospitals and health insurance companies is that the data that occurs in the

process of routine care routine care not clinical trials also known as real world data can be uh useful. So if you have a you know think think of an eligibility criteria written for a let's say the

multiple myoma trial uh you could you know give that to a study coordinator and have them sift through patient records of a hospital to find eligible patients. It's very time consuming and

uh you know I don't know I don't have a good estimate of how long a study coordinator will do that but this is exactly the kind of activity or a task where AI will excel at because this is

actually a search problem uh those of you who have worked with language models and and understand how they work you can think of a patient's medical record

as an embedding for those of us who are who are not familiar with embeddings. Think of 768 floatingoint numbers strung together in a vector representing each and every

aspect of a patient's medical record. So their diagnosis, their social history, their medical history, previous treatments, what procedures they are undergoing, what medications they are

on, what they are allergic to, everything is embedded in this 768 dimensional vector in semantic space. Now if you were to create an equivalent vector or an equivalent representation,

let me say, for the eligibility criterion of the trial that you want to run, you could just go and match the criterion to the most to the best suited patient or a set of

patients in your search space. It's as simple as that. H how many of you disagree here? Well, turns out that it is a fairly complex process. One of the reasons for

that is the state in which the data actually exists in these patient repositories. This is true world over but particularly true in India where 80% if not more of

clinical information exists as unstructured notes which means the information is not captured in neat tables where you have labs and prescriptions and uh you know standard

codes for diagnosis and so on. It is written like a long narrative like an essay. Patient so and so showed up. This is what they had. This is what we gave them. This is what their medical history

was. and doctors, residents, nurses will routinely make up acronyms. So they will, you know, they will have something like they'll have a mention of MI and MI could stand for myocardial inffection.

It could stand for mital insufficiency. Take your pick. So when you actually start to build systems that will do this, these are the problems that you have to grapple with. like many of us

who've been in this space now for close to you know a decade and we've you know we've we've seen the classical systems the classical NLP pipelines which absolutely sucked at doing any of this

and now we are in this world of these large language models and the rich dense semantic representations I don't think you would put us at fault for being overly optimistic that we are there we

are there we striking distance of solving at least some of these problems so I think I think that's a very important opportunity for AI to address. And then I had promised I'll say

something about the algorithmic bit which which I I I kind of I alluded to it as well because I think u the the the super cool or the super sexy problem which is finding the molecule or the

therapeutic agent to go after the target. Uh you know at one level is also a search problem. And when you can define a search in terms of a quantifiable objective, then it becomes

an optimization problem. What does that really mean? U I want to find something which is specific to a target. Uh let us say I can quantify specificity by a score on a scale of 1 to 10. So I

want something which is specific nine times out of 10. Okay, just just making this up. I also want something which is uh uh which doesn't go and stick to anything which is not a target. So

offtarget um activity I want to minimize and then there are all these admit kind of parameters. So the drug should be absorbable. It should be distributable. It should there it worry about its

metabolism and so on and so forth. So human beings cannot do this for machines. This is a this is a piece of cake. So you frame this as a as as a jointly

optimizable criteria and uh have the right kind of data uh that you can go and search inside and then this is a problem which is cut out for AI. So I I think I might I might

have been wandering a little bit all over the place. So I I'll just pause here. Parag unless you want me to go on which I definitely can see the question. &gt;&gt; Sure. Sure.

Okay, go ahead. &gt;&gt; Good afternoon sir. My name is Somatiari. I'm from Priyagra and my question is that can AI fully replace the traditional method of discovery the

drug? Why or why not? So maybe I'll start here. Um as a doctor I sincerely hope AI cannot replace me. But [laughter] what I I think in truth is uh as in

other areas I I think AI is going to make a fantastic partner and do a number of things. It's going to decrease the error rate significantly. um you talked about um the medical

records. Uh I was sort of laughing inside because just because they're in electronic form doesn't mean that acronyms that are have different meanings aren't there. And the uh a

misdiagnosis is not then carried through for the rest of that patient's life. It is it's just electronic and therefore now assumes a holier uh sense of uh value. Uh AI will pick up on these

differences. AI will help doctors to make better diagnosis. Where I think AI uh needs physicians is in relating the data to the reality of the person. So when we're thinking about

a drug that uh we want to treat something, okay, obviously a cure is the best answer possible. But it may be that we're uh trying to mitigate the problems, decrease them. And then the

question you have to ask is what is the actual problem? What is it that impacts the person? For instance, somebody with a neurodeenerative disorder, you may say, "Well, they're weak. They can't

walk. Uh they drool. Uh this is the problem." But actually, maybe what we really need to do is make sure that the drug that we designed for them allows them to manage with that problem um or

to also uh get additional benefit. Are they psychologically able to cope? Um what is it that the patient needs? I think a human is needed for this and in that sense the human being uh the human

doctor is better able to see what is needed for the drug developers uh to uh turn into something meaningful for care. &gt;&gt; Thank you so much sir. Thank you. &gt;&gt; Yeah very briefly. So I I think um I

wholeheartedly agree with Jonathan and uh you know there are a couple of data points that that you can look at. For example, if you were to go to the FDA's page of uh uh approvals for software as

a medical device devices, uh there are about 13 to 1400 of these which currently stand approved. And you will see that none of these or maybe beyond one or two most of these the

overwhelming majority of these have been approved only in their role as an adjunct device. So not to replace humans. They're not going to do uh autonomous

anything. So they are going to be used for triaging for assisting the human and so on and so forth. And then uh going back to my earlier point I really think this is a search problem. The I I

strongly believe that drug discovery is a is is an information workflow and getting to to the to the right answer is actually a search problem. A search uh you know for those coming from an AI

background is is an optimization problem and an optimization is only as good as the objective function that you write. You still need human beings to write the objective functions.

&gt;&gt; Yeah, go ahead. &gt;&gt; Hi everyone. So thank you for sharing very vital information. I'm from origin life sciences Hyderabad and we are building our own AI product that starts

from retroynthesis nuclear magnetic resonance normal heat generation admit and all that and you rightly pointed that there is a good amount of data in the market pupcam USPTO NMR shift and

all that and they take you up to a good stage about your model benchmarking but if you want to go to the production that's not good enough so my question and suggestion is as a community are we

doing something to on the concept of federated machine learning wherein we say okay companies don't want to share the data but they get the problem statement they train the models locally

and transfer only the weights not the data so are we doing something on those concept for a better data in the market &gt;&gt; you want to talk about maybe federated learning

sharing models &gt;&gt; yeah uh this is interesting there was uh a few years ago uh seven seven pharmas uh including I think GSK and number of other ones uh tested the hypothesis by

uh carrying out uh federated uh studies where each of them had uh different uh aspects. They every every drug company has a chemical library which they jealously guard uh not only is it the

molecules but also understanding of the biology of how those molecules act. Uh now in an ideal world this data would be available to everybody but of course it's proprietary and it's uh helping the

company to move forward. uh but there's different aspects uh of the knowledge and so uh these uh companies uh carried out a federated study where they looked at aspects of uh

the data that they had and they shared again the metaanalysis uh that was openly available to all of them. uh they were then able to take it back and as a result improve uh the

utility of the knowledge uh for translation into potential targets. Uh this benefited everybody, nobody was hurt. Uh but it very much like I talked about protecting the uh rights of the

individuals who participate in studies, it protected their rights. So I think the models been uh tested and and found at least in the initial period uh to be viable. Uh we need to see uh if it uh

can continue and how regulations uh hopefully will uh promote this rather than hinder. &gt;&gt; Was there one here? &gt;&gt; Yeah, just one question.

&gt;&gt; Do you mind if I just make a very quick comment? &gt;&gt; So your question was is something being done about federated machine learning? Uh there is the uh national health uh

the AI strategy for health the national AI strategy for health document that's going to be released at 4 p.m. today. I strongly encourage you to go and be part of that session. Get a copy of that

document. If you were to build a word cloud based on the text in there, the word federated would show up at least as big as this. So something is being done. Is it adequate? Well, uh I I don't think

so because it is one thing to have the machinery to do federated learning. The problem is really that we don't have the incentives to do federated learning. Let us say I am an owner of data. Let's say

I'm a Midanta or a Fortis or one of the 100 government medical colleges in in any big state like UP where I come from. Why would I share the data? What is in it for me? In fact, there are aund at

least 100 things that could go wrong and I could lose my job tomorrow. So I could be sued for malpractice. I could take that some prankster could take that data and you know line it up against some

some uh care gap analysis standards and I could get me into a lot of trouble. The reason why this apparently has worked in the US and Parak could correct me is because there is no I'm sorry for

sounding cliche but there is an ecosystem of data sharing. There are there are generators of data. there's regulation in place on how that data should be processed and how in a safe

bioethical manner it can be shared with people who want to do something meaningful with it. I think that is missing along with incentives and parag if you could put on your venture

capitalist background and say something about what it would take to incentive align. I think it's a really important question and and a and a without data we're not going anywhere. So your

thoughts ju &gt;&gt; just to finish that so that we can have more questions. There are a number of projects that started off as data sharing. I'm sure you know about Nash

which Vanderbilt did with a handful of uh companies Amgen Regenon etc. right? So data sharing from the beginning there are other people that have developed uh other models. a good company to look at

just to read what they do is Tempest Tempest AI uh which again you know gave something to each partner but then said part of what's going to happen is we're going to share it with everybody right

and so they collect data but they also make that widely available so there's a reason for you you have your data on 100,000 patients but you'll have access to a million perhaps right so those are

different formats that people have used I The same kind of thing obviously can happen in India where the hospital chains for example could get together and say let's have a sharing and make it

possible and that's a step in the whole chain right we trying to ask a question yeah go &gt;&gt; where's the mic hello sir my name is seal I wanted to

ask like uh in recent studies like uh AI is performing more better and accurately on synthetic data training so is it right to use or is it like we should we be using synthetic data in in the case

in the case of medical let me let me start and if you want to add to that uh so there is use and alpha fold is probably the most uh well-known example of that right but they've got to

start somewhere if you look at the major startups doing this there's another famous one called Zyra which is uh David Baker's lab who also won the Nobel Prize you know you know, unusual startup that

was backed by a billion dollars, you know, in the first round. Uh, but they part of the issue they have is where do they start from, right? So, it's one thing to figure out the geometry, the

folding of the protein, but you have to begin from somewhere else. That's the human data part, right? You still need to do that. Now, maybe we'll figure out a way uh to get around that, but I don't

see that in the near term. That's, you know, something that's so raw that I don't see it, but may maybe it'll happen. &gt;&gt; Yeah. And just to add to that, uh what I

would say is absolutely concerns about synthetic data, but again, we don't have enough data at the moment. What I will say is that uh it appears to have value sufficient that uh both the FDA and the

EMA uh and culturally very different um analytics have both moved uh to regulate uh the use of synthetic data and its application. Uh and I think it's interesting because you see the cultural

differences between Americans and Europeans in this. the Americans uh want uh determination that the tools being used are robust and reliable. Uh they can then be applied and the data can be

considered in uh when you're looking at uh does this potential drug or does this variant that's been found have value. The Europeans on the other hand are saying that uh the tools used for the

synthetic data must be trained on diverse populations. So the represented. So they're taking a human first uh approach. Uh the Americans are taking a technology first approach. Both believe

uh that it's necessary in order to help uh move the medical research and drug development forward. &gt;&gt; Yeah. Go ahead in the back. &gt;&gt; Oh, could you give him the mic?

&gt;&gt; The gentleman behind you. No, I'm really compelled to 30 seconds. I want to make sure that my angst against synthetic data comes across very clearly. I think &gt;&gt; I think synthetic data is one of the

most poorly understood notions to have arrived on the scene in the last couple of years. And until you think about how synthetic data is actually generated, you don't really appreciate it till you

believe that it's something that will just drop onto your plate from the sky. How how do you generate a synthetic patient record for example? Yeah, but how like how

&gt;&gt; combining the randomness of the data combining the multiple data into randomness create new data. &gt;&gt; Yeah, but like you drill a little bit further into that and you'll realize

that what you're actually doing is sampling from from a ginormous multivaried distribution. You've got something like 20 30,000 parameters. Each one could some of them are

categorical, some of them are quantitative. And now you have to sample in a such a manner so that you're still within the same distribution. It is non-trivial which is why a synthetic

data set which mirrors a patient and lets you do any kind of investigation that you would do on a real patient in my opinion doesn't exist. Synthetic data sets are purpose-built and that's a data

science way of saying that is that you constrain the problem. So you you're trying to create a synthetic data set for predicting myioardial infection for predicting mortality for predicting

start of palative care. those kind of data sets are good and if you formulated the problem clearly uh yeah I I think it's a good thing to do &gt;&gt; on a per population per problem basis I

want to extend the question and just one thing I want to please shed the light on the problem optimization that mentioning start at the basic level can you shed a little

light on Uh, I might ask you to spell out the question into a multivaried approach could be

taken to a multivaried approach. The more the variables that you have and the more your function, the less your function looks like a parabola, the more tricky it becomes. So I was trying to

when I I I believe you're referring to some of my comments on search as optimization that was a little bit handish but essentially the concept I was trying to communicate as the same

you're trying to find something which is best right now defining the objective function means specifying best in terms of either a lowest value or a highest value or a range of values. If you can

do that you can turn your search into optimization. &gt;&gt; Okay. Namaste and good afternoon to respected sirs and madams and respected doctors, professors from India and

foreign countries. My question is what is the need, role and status of a regulatory mechanism particularly in drug discovery using artificial intelligence or data science or

integrative technologies and tools relating to a chronic diseases like talismia, Parkinson's etc. like integrating holistic traditional medicine and modern

medicine towards a precision medicine related drug discovery like Sanjivani or Amritum medicines which we are having historical perspective to cure these chronic diseases. What is the

need, role and status of a common regulatory authority locally and globally perspective towards ethical, moral, clinical, medicinal and legal, technological perspective?

I &gt;&gt; I was hoping you would make me answer that because it's it is incredibly high dimensional. So you you're talking about a regulatory

perspective. uh the need the status and the status of a regulatory framework. &gt;&gt; Yes sir. &gt;&gt; For drug discovery which

&gt;&gt; in local and global perspective like USFDA &gt;&gt; well into clinical trials. &gt;&gt; I think the role of a regulator uh you know you you can approach it from a

legal standpoint and then you can also approach it from an ethical standpoint. the ethic. So drug discovery if you if you think step back and think about it

it's a giant science experiment and it's an experiment that at some stage the later stages in particular involves humans. So it is uh the the unless you want to repeat what happened

during the time of the Nazis and the Tuskigi days and all all the bad things that can possibly go wrong when you do science experiments on human beings. you want to have a very strong stable

ethical framework. So I think the ethical underpinnings and the eth the need the the ethical need for a regulatory framework are more than obvious. Now um the the legal aspect I

think is is a little bit more complicated. Uh we are fortunate that now we have in India the digital personal data protection act which is the first step uh which says which

really brings into spotlight the notion of consent. Um I think of like a lot more needs to be done before you have some of these regulations actually become part of the

SOPs which ethics committees uh and and and regulators which will look at this data and then uh no give a go no go on it uh transpires I don't have anything concrete like maybe you could break your

question down into smaller buckets that I can parse a little more easily and then &gt;&gt; yes uh relating to DPDP act 2023 relating to data privacy and data

security particularly in clinical trials uh to make a echofriendly healthy safety and secured system complicated. Yes sir medicine medical field itself is a very

sensitive field to be frank and honest a very valuable field I think on a very important point. Yes sir. In this aspect local global integrate is mandatory particular

&gt;&gt; 2023 today is really and if I'm allowed to be a little bit critical it's a statement of good intent. It doesn't have teeth. For example it says you should anonymize data. uh like it it it

applies to personal personal data and lot of people are taking the view that if you do not want to explicitly go and seek a patient's consent one way to do that and actually escape the DPDP is by

anonymizing the data so then it doesn't remain personal data anymore how do you actually do that is a completely it's it's a gray area and again uh my team has done something in that space you

very welcome to go and talk to Shodi who's sitting here or go and visit the booth so again goes back to the problem of how data exists. It's unstructured. There is PHI lurking in the data. How do

you deal with it so that you know you can you you're not on questionable ethical or legal footing when you want to make repurpose that for research? I think all that still needs to be done.

&gt;&gt; Thank you, sir. &gt;&gt; I'll just very quickly add I absolutely agree with everything here. One thing I would add is when we talk about things like consent, uh there's a world of

difference between consent and informed consent. So the regulations are there, but we also need to think about it right back at the medical school and other areas to make sure the people who are

carrying them out are doing it with the uh the way they were intended. Uh it can often be very divergent. &gt;&gt; Thank you, sir. Thank you, Dors. Do we have that mic back?

[laughter] &gt;&gt; Okay. So, I'm from and I'm a data scientist and I &gt;&gt; go ahead. &gt;&gt; I'm audible, right? Yeah. Okay. So, my

question was like primarily for Parag and then in extension to everyone else. You said that everyone all of us the corporate people should ditch everything else that we're working on and run

towards this from because we are based in India and it's a like on a gold mine but as the talk progressed we saw that there are a lot of we are not yet there from the data perspective so first

question is like apart from regulatory and everything keeping everything aside how can we right now today start uh anything from in in that drug discovery phase uh how can we contribute uh

because like the data with the PI and everything synthetic data is always there but apart from that how else we can start &gt;&gt; yeah so I think the there there are

variety of steps and it's a question of what you know you get excited by doing right in anything that you do right uh but the problem has many different parts that need to be solved you heard

Jonathan say that you know optimally if you data on a 100 million people, you'd be able to do something meaningful with it. Right? There he's thinking about all diseases, right? Maybe not all but hell

of a lot, a very large percentage. You'll still have some very rare. So, one thing we need is just data itself. The data, as we've just spent two minutes talking about how that data

needs to be properly collected and the issues around it, right? There's the ethical part, the informed consent, right? And you know, we have a company that does that. And informed consent can

be just like the Apple or Samsung things that you sign. You know, you can't use the damn thing till you tick on I agree, right? If anyone here reads it, I want to meet you. Uh, right? Or or you know

the stuff you do when on something much more serious than using a phone. You sign up for a mutual fund, you know, do you actually read all that stuff, you know, before you do it? So informed

consent I think in should actually be as simple as possible. I think it should be less than one page and I think it should only be explained by a medical person right it should really be simple and

then after that if you anonymize the data you can deal with that but as a problem that is a problem collecting data purpose collected as opposed to going to five hospital chains and saying

give me your data and then finding out that oh I wish I knew what cholesterol was I make that up but when you purpose collect it then you have solved all the possible which might mean

100 plus variables. So it's an expensive proposition doing it up front right when when you're doing that. So that's an example of something you could do. But if you're inclined towards you know

organizing data or looking at it and reviewing it then and bioinformatics might be the way you know that you say okay I'm going to solve this part of the problem right and if you're essentially

just a computer scientist by the way we have to go in like two minutes uh then there's the whole business of the modeling itself right which is an exciting thing you know for some people

so I think it depends upon what you're doing so if you do it today any of these you know is it's a function of what excites you &gt;&gt; but the data is not available with us

&gt;&gt; you have to collect the data &gt;&gt; so first first thing is solving the data problem which AI can also help with because we are in that &gt;&gt; AI will sort through that data when you

have it AI will take that data and say here are my conclusions I look at the data and I see this pattern I'm simplifying it right &gt;&gt; your question was what can I do now your

question was what can I do now &gt;&gt; yeah come and work at me mansa Yeah. Can I Are we done, sir? Can I ask just one one quick question? &gt;&gt; Okay. One last question.

&gt;&gt; One last question. &gt;&gt; Yeah. &gt;&gt; Yeah. Thank you all the distinguished speakers. Very interesting and pertinent points. I'll just quickly ask to Dr.

Vibhu the point you mentioned about EHR challenges the unstructured data. Quickly although government of India already launched way back national health digital mission for the metadata

standards across all hospitals. what is your feedback uh in terms of the hospitals you have worked so far in India in terms of compliance to that metadata because if we know that I think

that will solve majority of the problem related to the data structure &gt;&gt; so you're referring to ABDM which I think is a very well thought out and very well laid out scheme as of now it's

a statement of good intent if you look at the number of hospitals that are actually contributing data to ABDM are becoming ABDM compliant that number is minuscule and there are lots of

operational challenges why hospitals are not able to do that. We can meet offline and discuss that. &gt;&gt; We got to stop here. I want to thank all of you. I want to thank Vibu and

Jonathan for having come down uh to present here. And once more, let me just repeat my exhortation. Go out and push this. I want all of you guys to be messengers uh and convey the message

that we've transported to you. Thank you very much. &gt;&gt; Thank you. [applause] We have printed out the photos. Uh you if you want I can
