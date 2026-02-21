# From Co-Design to Courtroom: Building a Fair Trial Adviser for Justice Systems

**India AI Impact Summit 2026 — Day 2 (2026-02-17)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 10:30 – 11:30 |
| 📍 **Venue** | Sushma Swaraj Bhawan | Nalanda Banquet |
| 📅 **Date** | 2026-02-17 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/HBKHuprGfjY?feature=share) |

## 🎤 Speakers

- Daisy Peterson, Oxford Institute of Technology and Justice
- Lodovica Raparelli, Oxford Institute of Technology and Justice
- Wassim Hamidouche, Microsoft

## 🤝 Knowledge Partners

- Oxford Institute of Technology and Justice

## 📝 Summary

This session explores how collaborative, human-centred AI can strengthen fair trial guarantees across justice systems. Drawing on results from a pre-Summit hackathon, it presents a prototype Fair Trial Adviser that delivers transparent, citation-based legal guidance across languages. The discussion will highlight co-design, ethical safeguards, explainability, and inclusive access, alongside emerging guidelines for safe, responsible, and judicial AI. 

## 🔑 Key Takeaways

1. This session explores how collaborative, human-centred AI can strengthen fair trial guarantees across justice systems.
2. Drawing on results from a pre-Summit hackathon, it presents a prototype Fair Trial Adviser that delivers transparent, citation-based legal guidance across languages.
3. The discussion will highlight co-design, ethical safeguards, explainability, and inclusive access, alongside emerging guidelines for safe, responsible, and judicial AI.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/HBKHuprGfjY/maxresdefault.jpg)](https://youtube.com/live/HBKHuprGfjY?feature=share)

---

_[← Back to Day 2 Sessions](../README.md)_


## 📝 Transcript

other jurisdictions where we're seeing dramatic backlogs in the judicial system. So for example, in Brazil there are 80 million pending cases even though judges decide an average of 11 cases per

day. And in India there are 50 million pending cases including 180,000 cases that are more than 30 years old. And the challenge is not just about a lack of time or resources but also the fact that

the right to a fair trial is complicated. As our pro co-founders wrote in their book, the fair right to a fair trial is actually broken down into 13 different component rights which have

been interpreted by 25 international human rights bodies across more than 28,000 decisions. So for judges and defense lawyers that are struggling with time constraints already, they really

don't have the time to go through all of these decisions or a 10,000page textbook about how to protect the right to fair trial in judicial proceedings. So at this point we might ask, well

surely AI can change that. Um if judges are overwhelmed and lawyers are overstretched, if the law is too complex or too difficult to navigate

quickly, isn't this exactly the kind of problem that AI was designed to solve? But here's what we found when we interviewed judges for our AI justice atlas. In many jurisdictions, AI tools

have been developed for courts by commercial technology companies. often not in local languages and judges not give being given mandatory training on AI. For example, a recent UNESCO survey

of judicial actors around 96 countries found that 44% uh are already using AI tools in their work, but only 9% receive training on how to use them. So, the technology is

moving faster than the safeguards and that's the problem that we're trying to resolve. &gt;&gt; Yeah, thank you Daisy. this u that's clearly set the challenge. So let's move

uh from why to to what uh what exactly is the first real advisor and how was it designed to address uh the challenges you have just described. &gt;&gt; Thank you. I'm just trying to change

There we go. Um, the fair trial advisor is an AI powered expert system designed to help judges and lawyers navigate the complexity of the right to a fair trial. This is a right that 175 states parties

have consented to under the international covenant on civil and political rights. As I mentioned, the right to fair trial is a complex rule and the body of law is

so vast and difficult to access quickly in the midst of actual proceedings. The I the advisor is designed to solve that access and usability problem. It is trained on the 10,000page book the right

to a fair trial in international law and the freedom of speech in international law written by our co-founders uh which systematically analyzes and synthesize synthesizes those thousands

of decisions by component. So instead of requiring a judge or lawyer to search through databases, indexes, chapters, or more, the FTA allows them to ask the practical questions in plain language.

For example, can a trial continue if a defendant becomes ill and leaves the courtroom? Or does the use of covert recordings violate the right against self-inccrimination?

What safeguards are required when AI generated evidence enters the courtroom? The system then provides a clear structured answer grounded in authoritative legal sources with

citations and reasoning. In terms of the technical elements, the fair trial advisor uses a retrieval augmented generation system. [snorts] This means that the AI does not generate

answers from general training data. Instead, it retrieves relevant material from a pre-approved legal data set and generates responses that are grounded in those sources.

This approach mitigates the hallucinations think concerns that we are seeing across a number of jurisdictions and ensures traceability and accountability.

Um as was said the tool is being developed in partnership with Microsoft's AI for good lab and the office of responsible for AI um who are serving as both technical and thought

partners. And I'll just briefly mention that importantly the fair trial advisor is not supposed to replace human judgment. It is a support tool only. Its purpose

is to assist judges and lawyers by making binding international standards accessible instantly, reducing the time spent searching through materials and helping ensure that proceedings meet due

process standards. &gt;&gt; Thank you, Daisy. Um, now that we understand what the F trial advisor is, let's make this more concrete to the audience.

uh could you walk us through the typical use case where the where a judge or lawyer might actually ask the fertial advisor and what kind of response they would receive.

&gt;&gt; Yes. And I think we have a video demonstration if it's going to Yes. So this is the fair trial advisor as it currently stands. It looks a lot like a chatbot but it's more

um you can type in a question at the bottom. So the first question that's being asked is the defendant has fallen ill and left the courtroom. I'm not sure when they will return. Can I proceed

with the trial with their council present? The chatbot or sorry the fair trial advisor then provides a response with clear citations to legal decisions.

Sometimes it asks you a follow-up question for clarification and once you respond it will give you a clear answer with citations and a conclusion. So, as you can see here, there are the

citations um which are all accessible in the book, but they're also cited in full format with the references to the to the data. And then there are other examples. For

example, you can ask it, I'm a judge in a criminal trial. The trial was scheduled to take three days, but I think I have heard enough after one day. [clears throat] And you can ask the tool

whether or not it's legal to end the trial early. Um the tool will then give you a clear response with a recommendation at the end which I hope it's doing on screen

but I might be sure but there's the demo. &gt;&gt; Interesting. Really really nice tool. So that bring us nicely to how this tool

was tested in real world scenarios. Uh so Daisy you mentioned it a hack. Yeah you have mentioned it a hackathon. Could you describe what the hackathon involved and what you were hoping to

learn from it? &gt;&gt; Yes, sorry we mentioned it in discussions before this. That's why [laughter] um the hackathon was a day and a half

event held at the University of Oxford back in January. Um and it bring it was aimed to bring together judges, magistrates, lawyers, technologists, academics, civil society representatives

and students. It was designed in as an official pre-event for this summit and marked the first structured co-design phase for the fair trial adviser. So at the beginning of the event uh

participants were introduced to the conceptual foundations for the fair trial adviser, the structure of fair trial rights and international law, the tech technical architecture of the

prototype and UNESCO's ethical frameworks for AI and the rule of law. From there the hackathon moved into a hands-on collaborative decision. So participants

were divided into groups and asked to engage directly with our prototype and discussions were structured around three core challenges. Um first user experience how the tool should function

um for difficult for different audiences. Second ethical and transparency frameworks. So what safeguards and governance principles should guide its

development and third legal knowledge curation and integration. So this question is about how to structure and prioritize the authoritative legal resources.

And the aim of the hackathon was not to provide a finished product but to stress test and early design choices and to ensure that the tool was being built with the people that were actually going

to use it. So what we aimed to achieve was three-fold. Um first we wanted to clarify the tools core purpose and target audience. Uh like I said the right to a fair trial is complex and

context specifics specific and different users including judges, lawyers or frontline advisers have different needs. So the hackathon helped us think clearly about where the tool could have the

greatest impact. Second to ensure that ethical safeguards and trust are embedded within the the product from the outset. So given the sensitivity of judicial decision-making and the risks

of over reliance on AI in the justice sector, we wanted early candid discussions about transparency, accountability, judicial autonomy and misuse prevention.

And then finally, we hope to refine the legal architecture of the system. So the fair trial advisor is grounded in authoritative source material and uses like I said a ragbased approach to

minimize hallucinations and the hackathon allowed us to explore how international standards domestic law and evolving jurisdict prudence should be curated and integrated in future

iterations. So in short the hackathon was our co-design exercise. Um it brought together expertise that no one single person could bring to the table alone

and it allowed us to move from abstract visions into practical design questions. Um yes &gt;&gt; great Daisy to hear about the hackathon. So let's move on the validation and the

user feedback. uh so once people started interacting with the advisor in this scenario the next uh questions I would ask is uh what did they actually think about the tool

&gt;&gt; I think I have yes um so you might not be able to see it from the slide but the result of the hackathon was overwhelmingly positive um the vast majority of participants said that the

fair trial advisor was useful to supporting fair justice systems and fair trial guarantees. Um on this slide you see that the two most common strengths identified were

first that the fair trial advisor save significant time in legal research and second that it provides clear and well ststructured guidance. We also received some qualitative feedback which has been

really useful in our post hackathon discussions with Microsoft's AI for goodl. Um, so first a lot of the participants focused on the usability of the tool. They flagged practical issues,

things like enabling the enter key to submit queries, fixing formatting in the footnotes, and improving guidance on how to ask follow-up questions. Second, there was a strong message about

clarity of purpose. Um, several groups said that they need we needed to be clear about who the tool was actually going to be used by. um and if forced to prioritize, it was recommended that we

focus on judges first and get that right and then expand carefully to other users. Um they also raised branding questions such as whether or not this tool was an advisor or whether or not

it's more of just a legal information tool or a judicial compass as one user called it. Um third, the participants emphasized the scope of the tool. So the advice was

to keep it narrow and do one thing really well rather than try and solve all of the problems in one go and then expand gradually um through the tool and also through other jurisdictions. It the

aim really was to build a solid foundation around fair trial guarantees that we knew was going to work for across um the world with the international standards.

Then there was also strong support for domestic integration. So right now the fair trial advisor is built on international case law and how countries can abide by their international

obligations to uphold the right to fair trial. Um rather than keeping it international, several groups recommended piloting it in one jurisdiction and co-designing it

with the local judges and lawyers and integrating it with the domestic criminal codes and procedural rules um and being clear about how international fair trial standards interact with

national law. And then finally, there was a strong emphasis on accessibility and inclusion. Suggestions include jurisdiction filters, the ability to select relevant treaties, incorporating

different languages, exporting and share functions, mobile optimization, and voice interaction for users with limited literacy. At the same time, participants cautions against making the tool so

accessible that it became over relied on by judges. Um, so I think the overall picture was this. uh participants saw a real value in the tool especially in saving time

and delivering structured guidance but they also made it clear that if this tool was going to be used to support fairness in courts um it must be focused carefully scoped and domestically

grounded there were a number of themes fairly focused on transparency oversight and responsible scope so I will connect that with the data that I'm showing on the

slides so this should be Question eight. If you look at the first graph which asks what needs improvement in the tool, one area that stood out really clearly was citation and sourcing. Um this was

by far the most frequently selected area for improvement during the hackathon. participants repeatedly emphasized that the citations given to the user, whether that's a judge, a lawyer, or

[clears throat] an individual um wanting to know whether or not their fair trial guarantees have been violated, was that the citations must be clear, complete, and clickable. Users must be able to

trace the answers back to the primary sources, not just the textbook. That's the underlying data for the tool. Um there was also concerns about the transparency for how the tool works. Um

and this was flagged as an area that needed improving. And in the discussions, participants asked, [clears throat] you know, what model is being used, how

is the data curated, how often is it going to be updated, and what kind of things are going to be excluded and why? And one really interesting example that we got from the hackathon was the tool

actually being able to be used to um overcome the fair trial guarantees. you could kind of use it to play devil's advocate and uh get around the fair trial standards. So that's something

we're trying to improve. Um and there was also a strong view that if the tool is going to operate in the judicial environments, it cannot function as a black box. It must be clear the whole

way through how it's being developed, the things that are being used to provide the answers and where the data is coming from. And then we asked the participants,

what increases trust? Maybe that's oh that was the question that was there before I couldn't see but um the top ranked factors from the participants were clear citation of

authoritative sources evidence of accuracy regular expert auditing and validation transparency about how the AI generates responses independent oversight mechanisms and clear data

privacy safeguards. So what people really prioritized over the hackathon was verifiability and independent scrutiny. Participants stressed that the tool must explicitly acknowledge its

limitations. It must avoid overconfidence. It must not encourage over reliance especially among legally trained users who may assume it is more authoritative than it is. And there were

also important discussions about judicial autonomy, cultural and jurisdictional sensitivity and data protection. So what does this mean for our

safeguards for the tool? Um well taken together the feedback suggests that the ethical safeguards for the fair trial advisor must include first a clearly defined narrow core function.

Second retrieval based architecture grounded in curated authoritative legal material. Third independent validation processes. Fourth, clear statements about

limitations and appropriate use by judges, lawyers or victims. Fifth, data privacy guarantees and clear retention policies. And sixth, ongoing updates and maintenance with visible

last updated indicators so users are able to know how new the information is. Um, in other words, the conversation shifted from can AI answer the question to under what condition should the AI

answer the question. Um and perhaps the most encouraging takeaway was that the participants did not reject the AI injustice principle. Um but in fact many saw that it had strong potential as long

as it's clearly done right. Um and these kinds of things are being protected by the tools developers. &gt;&gt; Great. Thank you. This is very important for uh the tools and get all this

feedback from the participants. So let's uh close by looking ahead. So Daisy, what are the next step of the fertial advisor and what does this go from here? &gt;&gt; Thank you. And that's the exciting part.

This is really just the beginning of the institute's work. Um the institute only launched in October, so we're still really developing the tools um in real time.

I think the first step for us is going to be refining the tool. So we will continue to work closely with Microsoft's um AI for goodlab to improve the tool technically, visually and

structurally. The version that I showed on screen um was already a new tool that had been developed in the week between since the hackathon and we're going to keep trying to make sure that it's uh

accessible and um attractive for a user. Uh so this will include addressing the usability feedback from the hackathon about navigation, clearer follow-up guidance, export functions and filters.

And we're also hoping to have another hackathon to test the the next iteration in the future. We also think that testing is going to be critical. So um one priority is piloting the tool in

domestically integrated the domestic tool in a specific jurisdiction that we feel would really benefit from the use of the tool. Um we also want to pilot the fair trial advisor in different

judicial contexts including regional courts or human rights bodies. One example being the African court on human and people's rights. Um and we hope that this will ensure

that the tool reflects different legal cultures and traditions. We are also exploring the idea of developing domestic AI tools like I said. So not just focusing on the

international standards but also building specific um domestic tools that can be used across different jurisdictions. Um the international version would focus on the glo global

human rights standards and comparative juristprudence whereas the domestic versions integrate local law and procedural guidance to ensure that fair trials are being protected not just

under the international legal rules but also under the domestic standards. Uh then on inclusivity, we are hoping to introduce different languages into the tool. This is one of our highest

priorities um so that the tool can be made available in more local languages. Currently, it's only available in English. So this is a real working point for us. And finally, I think we'll just

keep continuing to feedback on to uh build upon the feedback that we've received. And like I said, the aim of the hackathon was never to provide a final product, but to try and ensure

that the the route that we are taking is correct one and that we are bringing in the people that are actually going to be using the tool to work out what's going to work well for them and how to ensure

that we can make this product um as useful as possible across different jurisdictions and across different users. So that I think brings me to my final

point and we're finishing early. Um, if anybody would like to get in touch with us to talk about our work or the fair trial advisor, I would really encourage you to do so. Uh, like I said,

we're interested in hearing everyone's perspective. So, um, please do reach out with any um, insights you might wish to provide, whether or not you're a data scientist, a lawyer, civil society,

anybody, we'd love to hear from you. So, yes, thank you very much. Yeah, thank you Daisy for all this uh features and perspective that will definitely enhance the advisor. So with that uh we will

close the panel discussion and open the floor um to questions from the audience. So I personally have many questions uh about this important improvising tool. But first I would like to give the

audience the opportunity to engage with uh with Daisy first. So please if you have any questions uh about this topic you can get the microphone there lawyer from uh

&gt;&gt; just on the jurisdictions you're covering. &gt;&gt; Yeah. So you're focusing very much on international jurisdictions, but then are you breaking it down within um

sectors within those jurisdictions. So for example, what I'm alluding to here is let's take the UK as an example. We have uh different rules, procedural rules for civil matters, intellectual

matters, family uh if you look at this internationally, family law is going to be critical, I think, for this. So are you breaking it down by sectors? That's a really good question and

honestly I'm not sure I have the answer because the UK version is really in its early stages. We're just looking at how we're going to scope it out. Right now the tool is focused on any proceedings

that fit within the international fair trial guarantees. So that includes things like tax proceedings. Um, when it comes to the UK standard, we probably I think we're going to try and make it as

broad as possible as long as we have access to the rules that we can feed into the tool to ensure that it's drawing from the right kind of material. Um, but that's a really good question

that will be taking home with me um to raise and whilst we're exploring the the concept of having, you know, the domestically integrated fair trial advisor.

&gt;&gt; Thank you. If you have any other questions from audience. Yeah. &gt;&gt; Hello, this is Amit. Uh I represent design intelligence. Uh you mentioned uh

that uh citations are a challenge. So could you specifically explain what are the key challenges there that we as a technologist can address because in other areas we have some great solutions

to deal with the references and their cross validation and appropriate citations. So what are specific challenges in the legal jurisdiction or the court cases and data that uh you

need to refer to? &gt;&gt; Thank you. Um, one of the key things we were trying to resolve and that's part of the reason why we're using the the book as the primary data source is the

aspect of obviously the hallucinations um, and being able to trace back the source. If you use if you're a judge using a advisor, it's really central that you have a clear uh route to track

back to find the the source to make sure that you're relying on something that actually exists. Um, [clears throat] so right now we're trying to make sure that not only is the tool taking you to

the the case that's citated cited in the book, but actually taking you to the actual case itself. Right now the tool will site the case. Um, but it will site the page number that it's on in the

book. And we're trying to make sure that you actually get to the original source rather than getting to what we say about well what um, Amal and Philipper said in the book. For the domestic version, the

issue is then going to be making sure that this is the same thing. Um, and like I said, we're still exploring that and trying to make sure that it's going to be as responsible as possible and

that there is that going to, you know, avoid having that black blocks blackbox approach to the judicial AI tools. So, um, I think that's the key concern is really the traceability.

Thank you very much. Thank you. &gt;&gt; Um, hi, my name is AA and I'm from AAMI. We work at the intersection of tech and justice in India. Something I'm curious

about is if you were to ask a similar question on the right to fair trial to a generic LLM like chat GPD, how would the answer sort of compare to a very specific chatbot like this one?

&gt;&gt; Thank you. Uh, it's a great question. Um so the book has actually only been licensed to uh for the fair trial advisor. It's published by Oxford University Press and Amal and Philipper

were given the rights to use it within the adviser but chat GPT won't access it because it's behind the payw wall of the Oxford University Press website. Um, so that's the first thing, but also again

then you've got the citation problem, which is what we're trying to fix with the fair trial advisor and making, you know, whereas our tool will take you to the original source, anything you're

getting online is probably going to take you to the commentary rather than um the clear citate like uh citable legal framework behind it. So yes, but that's a great question. Thank you.

&gt;&gt; Hello. Hi. Hi. Um I'm Mayang Sharma. I lead uh digital investigations at JS Held. Um I had a query. This is by the way it's a fascinating tool that you have here. Um suppose for a moment u the

judge uses the fair trial adviser to uh interpret a specific statute and uh later that interpretation becomes grounds for an appeal um due to maybe a potential hallucination or uh some sort

of bias in the retrieval. uh is the system logging the specific chain of thought. Uh the reason I'm asking as a forensic investigator is that if I have to reconstruct why a judicial error uh

occurred, &gt;&gt; do you want to &gt;&gt; would I be able to have access to these logs? &gt;&gt; That's a really good question. Um

&gt;&gt; or are the judges uh interactions with AI privileged and therefore not open? I think right now it disappears and we're trying to make sure the one problem is obviously the confidentiality of the

things that are coming in and making sure that the data protection is there. Um so right now the framework I don't think would be there and that's definitely something that we need to

build on and I think a lot of that will also come from the guidance that we're giving judges when using the tool. I.e. it like we said it shouldn't be something that's overly relied on. an

advisor, not a decision maker. Um, but I do think that's a key thing and again, it'll be something that I'm taking home with me and is the benefit of having discussions like this to learn from

these things and receive these insights. So, thank you. &gt;&gt; Yes. &gt;&gt; Sorry, another question. &gt;&gt; That's great.

&gt;&gt; Sorry, another &gt;&gt; does the tool when you when you were referring back to the citations. So I'm assuming like either case law or a particular strategy, but let's let's

focus on case law. &gt;&gt; Does it give the actual legal practitioner the underlying men's rare behind that citation and and how it's been used?

&gt;&gt; And the reason why I'm asking that is simply because using the example you gave of um the client becomes ill and leaves court. Now we all know that in certain in every case it'll be on the

facts. &gt;&gt; Yeah. So the gra the seriousness of the illness will determine the next step potentially. So does the citation retrieved from your tool give that

degree of men's rhea? &gt;&gt; It gets it it gets the I suppose what you're calling the men's rhea from the commentary in the book. So that is the answer that you get from the tool but

it's based on what the book says rather than what the underlying source says right now. And I think again that's one of the areas that we're trying to develop is bringing in the actual tool

underlying the book. Um yes but I do think that's again it's key and &gt;&gt; yes &gt;&gt; yes because otherwise like I said you

you don't want to become too over reliant on what is essentially the commentary in the book. You want the underlying resource. Um, so not only is that something that we're looking to do

with the domestic tool, but also it's about improving the international tool to ensure that those kind of things are then included in the judicial response and the uh the reasoning that comes from

the rel well the um reference to the tools. Sorry. Thank you. &gt;&gt; Thank you for your questions. We still have time. If you have any questions, feel free to ask your questions. Uh

otherwise I have cup. Oh there is a question there. Yeah. &gt;&gt; Hi I'm Praa and my question is uh what uh design choices separate um the AI created uh tools from uh legally

dangerous chatbots for example there have been inst instances of AI hallucinations of lately. &gt;&gt; Thank you. Um I think the difference is the data that

goes in as we've said I think it's uh whereas if you've got a chatbot you're not really having that protection against the hallucination aspect um our tool by using the rag frame which maybe

was can talk more about um it's drawing on the data set only so it's supposed to be more authoritative in its legal guidance that it's giving um because it's based on this text the underlying

textbook and the sources within it rather than drawing from multiple resources and having um the potential to hallucinate some of the cases but maybe you could

&gt;&gt; yeah I can add more context for this question actually the LLMs or these generative models starts to hallucinate usually when when they don't have the question or the right answer when they

have don't have the right answer for the questions so what make these tools uh have less hallucination is we have all this data we are providing. So the tools can find exactly the right answers based

on all these references uh which are like more uh close to the the questions that the lawyer might ask and this make the tools less uh hallucinating compared to other models which are more general

but they might hallucinate because they don't have all these references uh in this specific topics. &gt;&gt; Thank you. [clears throat] Is there any

&gt;&gt; uh we can still take more questions if you have otherwise I can Oh, there's question there please. [laughter] &gt;&gt; Hi uh this is Prashanj there. So uh do you see this going beyond the scope of

fair trial advisory &gt;&gt; like can you this will this expand into other data sets of uh legal uh uh jurisdictions right &gt;&gt; so and how how do you see that happening

&gt;&gt; I mean I I think it would be great if it could um but the problem is having the rights to the underlying data set and one of the things that we you know we're really proud of for the fair trial

advisor is having it based on the on the the textbooks. Um I suppose we could perhaps think about doing something related to freedom of speech because we've got the freedom of speech book

already integrated into the tool. Um but otherwise I think we would struggle to expand it to different international rules and guarantees but I would love to see those kinds of initiatives happening

um with other with other textbooks in the area. So &gt;&gt; yeah, thank you Daisy. I can ask you a couple of questions to explore different angles also.

&gt;&gt; Okay. &gt;&gt; Uh so based on what we have seen so far, what are the main challenges to scaling technical, legal and institutional and how do these challenges differ between

regions? &gt;&gt; Thank you. That's a great question. Um, I think the most obvious problem from a probably a technical perspective is having the digital infrastructure in

place and having judges that know how to use these kind of tools in their practice without becoming over reliant on them. So that's you know as we've seen with our AI justice atlas which is

one of the institute's key initiatives there's a real difference across jurisdictions on how courts are digitized firstly um and how states are going about training their judiciary to

deal with the challenges of AI and I'm sure that these discussions are happening a lot this week uh at the summit and so I think that's one problem another problem is having the actual

underlying resources so the laws the cases um the procedural guarantees uh digitized in the first place to have them fed into the tool. Um we that's not guaranteed across every

jurisdiction and it sometimes it's quite hard to attain. So that can be important for the comparison across the jurisdictions. and then I think maybe the scoping

deciding how and what kind of rules we want to include. I mean that kind of picks up one of the questions from the audience whether or not we want to include the fair fair trial rules in the

family context or uh whether or not it's going to be something broader and I think that even that question can differ depending on the kind of rules that are available across jurisdictions. So yes,

lots of challenges to think about in the in the months and years to come. &gt;&gt; Great. Uh hopefully we will see all these features integrated in the next versions of advisor. So uh we still have

time for questions. So I will ask a second question. So given the statistics you shared earlier uh backlogs, pre-trial detention, lack of training, what do you think the fair trial advisor

could uh have the most immediate impact? I think the most obvious response is the judicial case management and for the judges um kind of at the intersection of making sure that hopefully cases

criminal cases particularly are decided more swiftly um and with the fair trial guarantees there to to support them. Um, so I think that's probably the the key uh impact area, but I also think there's

a real potential use by the parties and by the uh lawyers in the case to ensure that you know the fair trial is being conducted fairly even if not from the judicial backlog perspective. So yes

[clears throat] but thank you. &gt;&gt; Good. Thank you. So maybe I will ask one last question. &gt;&gt; Uh which I find very important. How do you prevent the tools from being misused

and for example to tactically delay proceedings for example? Yes, I think that's a great question and like I said at the hackathon it was I mean it it wasn't funny but there were some

examples of some of the um participants in the room trying to get the tour to play devil's advocate and you know give it advice on how to overcome the fair trial guarantees and make sure that they

weren't going to be held accountable or uh something worrying but I think that's a real problem and it's again something we're exploring the solution to with the AI for good lab. Um

it might be that we decide to limit the scope of questions that the tool can answer and maybe that will be that the tool decides to give it a straight no to that kind of question but um we don't

really have the solution yet and that's one of the great things about the hackathon is we were able to learn about that problem in the room with the participants which we maybe may not have

learned um ourselves. So yes, &gt;&gt; yeah, to add more uh context for these questions, uh we can still also fine-tune these LLMs uh with alignments to make them don't answer all these uh

toxic questions for example or limit the the scope of answering only uh questions related to these topics. &gt;&gt; Uh so with that u I would like to close the session if there is no more

questions from the audience since we have more time. Uh but otherwise hello question &gt;&gt; one at the back. &gt;&gt; So I just want to ask is it it works

offline without internet. &gt;&gt; Sorry could you repeat that? &gt;&gt; This this tool works offline without internet. &gt;&gt; Uh um not right now. I think it

currently relies on the internet access. Uh but that's a really good question as well and again something we will need to consider. Um Rosim, I don't know if you have any insights on whether or not

that's even possible. [laughter] &gt;&gt; Yeah, this is the next step. step we are considering. So we will have two options. The first one is um uh online access to this tool. Uh like the LLMs

will run on uh remote servers and we need connection actually to to to to access to the LLMs. Uh the other options we can also offer is to run everything uh locally but this will need also some

uh compute requirements to deploy the model uh the inference also to perform the inference in real time. So uh first we are providing this through internet access which is secure access to

internet but the second option can be also considered for uh local deployments of the system for more secure uh deployments. But of course this will need some requirements uh from the

providers to be able to run the LLM locally for realtime inference and optimization. &gt;&gt; And another last question is how much lawyer is now syncing with this tool? uh

in the commercial perspective how much they want to buy kind of this tool how much how much spending they have for this &gt;&gt; how was it I how much they're

&gt;&gt; spending spending mean is there any how if if they want to uh deploy the tool they have there must be the budget no for this is a cost right so as for your survey how is like what is your

&gt;&gt; the tool is going to be we're hoping open access um so there shouldn't be any sort of requirements on any financial income or for us as a institute. Um and it's being developed by us within the

institute with Microsoft AI for good lab. So it's yes I think &gt;&gt; so is it is it free for the lawyers? &gt;&gt; It will be once it's available. is currently still in the prototyping phase

but I'm pretty sure that's the &gt;&gt; yeah usually how we operate at AI for good lab at at least like we provide everything open source like all the materials will be open source if any

institution around the world want to use it they can take uh all what we are providing they can deploy it and we can might also in sometimes provide some u technical expertise if you have any

issue in deployments etc but it's not a commercial products that you can buy, deploy. It's something that we provide for free, open source for everyone and we can provide more technical expertise

if you have any issues in uh deploying this system. But it's not a product like just a prototype that we are providing for open. &gt;&gt; Okay, I understood but I just want to

understand key how many lawyers how lawyers are now syncing with this? How many percentage like lawyers are comfortable with this tool? How in in percentage how many lawyers

are comfortable with this tool like they like to use it and they want this transformation in their firm in individual level like small lawyers big law firms whatever

&gt;&gt; we haven't got the data on it but we'd like to think that everybody wants it. &gt;&gt; Thank you. That is what I want. Yes. Nice. Nice. Thank you. &gt;&gt; Yes. I mean from the fair from the

hackathon like I said the the response was positive and that you know everyone was saying that it was going to help support the fair trials but that was from a mixed audience that didn't

exclusively include lawyers and judges. So um but like I said I hope everybody wants to use the fair trial adviser. [gasps] Yeah.

&gt;&gt; Yeah. &gt;&gt; Sorry insurance perspective about reliance on such tools as opposed to our own training and our own backgrounds.

&gt;&gt; Yeah. Uh but there is still a lot of enthusiasm because anything that helps to do our tasks um and do it in a way in which is within the rules as well for from our perspective

&gt;&gt; is generally welcome but most law firms are embracing it but it's there needs to be most law firms are also having to employ incentives for practitioners to use it.

&gt;&gt; Yeah. Well, thank you for the positive um response. But yes, and I hope the same is true for courts where there's the the infrastructure and training in place uh for it to be done responsibly.

&gt;&gt; So I have a question. My name is Robin. I'm a lawyer. I'm a legal compliance lawyer. So uh how this kind of tool help to address the pendency in court especially in India where we have large

set of pendency. Can these kind of tools assist the judges to sort out that penency? Are we targeting that? &gt;&gt; Would could you just repeat the question a little? Sorry, I was just struggling

to hear with the background. &gt;&gt; In India, we do have a lot of pendency of court cases [clears throat] and that is uh bit struggling because we have less number of judges and the cases are

huge. So I feel that AI can really help uh to address that uh part because like you mentioned in one of your slide that uh this tool can help to reduce the time to research.

&gt;&gt; So uh can it really address that part? &gt;&gt; Yes, we hope so. um particularly in the like I said the kinds of cases that fall within with when we use in the international tool um the right to a

fair trial you know instead of looking through a thousand pages which summarize 28,000 decisions on the right to a fair trial having something that you can just type into the computer and uh get a

response within a minute probably maximum we hope will help with the backlog problem particularly in the kinds of criminal cases that uh would really benefit benefit from the use of

the tool. So the answer I hope is yes. &gt;&gt; And how how is uh how are we integrating legal education or training part with these kind of developments especially AI and legal uh

area. How are we integrating the legal education? &gt;&gt; That's a great question. Um I don't know if that's something we can resolve as an institute. So I think it's something

that is a much bigger problem around the world. Um we would like eventually to include guidelines on how judges can use the tool responsibly as I've said but in terms of the broader training that's

required to understand the tool and how much reliance should be placed on it. Um that's ultimately something that we are advocating for as an institute and you know we're collaborating with UNESCO on

their MOO about uh judicial AI um particularly on fair trial guarantees. So it's these kinds of initiatives that I think are really crucial and if we can find a way to integrate our projects

within them then I think that's great. Uh so yes &gt;&gt; thank you. Thank you. &gt;&gt; Okay. Uh if we don't have more questions from the audience uh there is one

question that I can please &gt;&gt; thank you. Uh we have lot of content and you process that content using AI tools uh the LLM models on the data and data comes from uh varied sources and that's

what the referencing challenges we discussed earlier. Now uh we have three things data model and presentation. So if you look at the other industry for example in healthcare for doctors when

we provide solutions we call them giving aid not necessarily decision support. It's not necessarily the the final outcome that they should implement. Whereas in manufacturing setting we do

take that as a final outcome that that that can be implemented. So presentation becomes a real key uh uh important driver for implementing that decision. So now when it comes to court cases uh

you have presentation framework I think that might be uh need that that need to uh be included in the tool. uh why I'm saying that because if you look at uh case paperwork or if you look at

affidavit uh uh that are on the bond paper or stamp paper uh and that is design uh and lot of that data is to do with not only the text but also the graphic processing the image processing

aspect uh uh recognition of that and then recreation of that uh uh so that uh reports uh and the lot of paperwork that goes into doing paper uh into court proceeding things can be uh either as an

evidence and then post-processing of all of that needs to be included. So I think the tool needs to have a presentation framework as well not just the dashboard of monitoring uh statistical aspects and

analytical aspects of data but also reporting mechanism. So what are your thoughts on that? Thank you. &gt;&gt; Thank you. Do you have any &gt;&gt; uh yes um I can answer this question.

&gt;&gt; Okay. Uh I think it's it's very interesting uh question and um I think it we can I think now with LLM we can integrate uh the call to many other external tools uh uh to process the data

and I really agree like with uh what these tools is providing is not the final decision. It's just providing some references guidance to speed up and take the right decision to the lawyer and the

judges. And in terms of analysis, of course, this can be uh features that can be added. It can be directly integrated into the tool or calling some uh more uh specialized tools for data processing uh

data processing for example. And in terms of input uh for now we are considering only uh text but uh in the future one of the features we can add also is to consider speech uh from

converting the speech to text and also consider multimodality that we can provide an image a video that we can process instead on only uh text. This can be like a real uh new features uh

very helpful, useful that we can add at the input and also at the output processing analyzing the data providing the best feedback uh to the lawyers, the judges that they can take right

decisions and reduce all the delay they might have without using AI tools. &gt;&gt; Welcome. Okay. I think uh if we don't have more questions uh there is one here. Yeah.

Please we still have time. &gt;&gt; Hello. Yeah. So first thing just I want to ask is this is a tool right? So I just want to understand on the back end uh are you using some generic LLM or you

have your own thing on the back end how it works? Yes, of course, we are not developing uh proprietary tools for this case. Uh we are using existing uh LLMs. Uh I don't

know exactly which LLM we are using because uh we have access to uh in the Microsoft Foundry all existing LLMs. But the idea here is um the approach is using a rag retrieval augmented uh uh

system then training this new LLM. So the idea is we provide new data with the rag we can access to the right data according to the input of the user but in the back end the idea is to use the

most efficient existing LLMs with additional context that comes from the data we are providing to the tools. So the idea here is not to build a new LLM because LLM building LLM it have very

high cost and it needs huge data and it doesn't make sense to train LLM only on this uh data because it's relatively very small to existing data use it to train LLM but the idea is to leverage

the best existing LLM that we can access to and use them with rag system. Okay nice thank you thank you very much. Yeah. So I just just one more question. Is it fine?

&gt;&gt; Yeah. We have still two minutes. &gt;&gt; Yeah. Thank you. So uh last question is if you are existing LLM so you anything you can use any model. So if any developer want to change the model is it

possible? &gt;&gt; Uh yeah as I said before if uh the for now we are not offering this feature like the LLM which is used is fixed. uh but we have to explore uh first to offer

this possibility to select the LLM we have to explore uh how the responses differ with different LLM which which one is the best for this case I think for that we need more testings with real

users to get the feedback but what we can offer at least when we can use the system offline we can offer the possibility that the user can use any open weights LLM locally like which is

independent from what we are providing but we just give them the API that they can use any open weights LLM existing uh on hecken phase for example but they can run locally with the right license etc

but we are not managing this part this is up to the user to deploy whatever they want on LLM but the idea is to make it open to use any existing LLM so &gt;&gt; in that scenario you are providing the

basic structure and the person using the API can customize it as per his needs and all I understood But in that case you are what about the tokenization and all this stuff. So like that is handled

by you or what? &gt;&gt; Yeah. All tokenizations are part of LLM. So we don't uh we don't operate or touch this because when you have tokenizer it is already optimized for the LLM. So

changing the tokenizer will not help like getting better performance etc. So I think the idea is just to be able to use different LLMs at different scales. for example 4 billion, 10 billion, 15

billion according to the performance we want and also to the compute capa capacity we have if you want to integrate it internally uh from the user perspective.

&gt;&gt; Okay. So what I understood so I if I want to use the tool I I have to purchase some key of open air or something and integrate in your tool like that so I can build to the open AI

for the tokens. uh for us we are not uh specifically relying on uh open AI we are using u all lms that are deployed on um Azure funary which is a Microsoft tool but the idea

yes if you have like uh the key &gt;&gt; to access to this service you can use any LLM offered by Azure Foundary for example &gt;&gt; okay great thank you thank you very much

&gt;&gt; thank you &gt;&gt; yeah thank you very much &gt;&gt; uh good Good morning all. Thank you for joining session. Uh your exit is behind you only

and right hand side your exit behind
