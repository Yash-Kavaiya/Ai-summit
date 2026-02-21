# Beyond the Cloud: The Sovereign AI Moment

**India AI Impact Summit 2026 — Day 2 (2026-02-17)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 11:30 – 12:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 6 |
| 📅 **Date** | 2026-02-17 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/sY3TfVBQVb8?feature=share) |

## 🎤 Speakers

- Bernard Nguyen, Nvidia
- Mr.Abhinav Aggarwal, Fluid AI
- Mr.Balasubramanian V, NABARD
- Mr.Raghav Aggarwal, Fluid AI
- Mr.Ritwik Rath, HPCL

## 🤝 Knowledge Partners

- Fluid AI

## 📝 Summary

While much of the world defaults to cloud-hosted AI, a growing cohort of  enterprises and public sector institutions are charting a different course — deploying powerful AI models on their own infrastructure, on their own terms.

## 🔑 Key Takeaways

1. While much of the world defaults to cloud-hosted AI, a growing cohort of  enterprises and public sector institutions are charting a different course — deploying powerful AI models on their own infrastructure, on their own terms.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/sY3TfVBQVb8/maxresdefault.jpg)](https://youtube.com/live/sY3TfVBQVb8?feature=share)

---

_[← Back to Day 2 Sessions](../README.md)_


## 📝 Transcript

on the day. &gt;&gt; So quick intro from us. Um Rago and me are co-founders at Fluid AI. We are uh been in the space for about 15 years. So back when AI was a very different animal

as what it is today and I was a CA, he was a CFA. We were both dropouts uh from Amabad and ISB Hyderabad. So we had a super passion for technology and learning. What prompted us after doing

our CA and CFA to get into tech was when we dropped when we won the techrunch disrupt hackathon in New York. So this was back in 2012. That's what kind of prompted us to get into the space and

along that journey you know we've done some fun things. We've made Warren Buffett's official AI version and we've also uh you know worked with a lot of enterprises uh globally across the world

including a Mastercard including a Bank of America um and obviously closer to home uh we worked with a lot of the organizations here and uh you know along that journey it's been about 5 years in

the agentic AI space so our first version was a fine-tuned version of GPD Neo long before everything kicked off. So before we introduce our panel um you know we wanted to start with one really

interesting experiment right only 60 about 66% of consumers have said that geni regularly drives value from them in their daily worlds right that's a crazy number 66%.

When you look at enterprises the same mi MIT institute and the same Mckenzie did this research and it's only 5%. Right. And why do we think that is? So here's a quick experiment to tell us why that

exists. &gt;&gt; You guys have screens at the back also so you can see this. &gt;&gt; So you have to start at the left arrow, end up at the right arrow. As soon as

you solve it, raise your hands. Right? Start at the left arrow, end up at the right arrow. As soon as you solve it, raise your hands. &gt;&gt; I I see one hand up there. Two actually.

&gt;&gt; Okay. &gt;&gt; Okay. So see a lot of perfect four five U. So we're about 15 20 seconds in. Um and I feel a lot of smart people gestured to me that they're probably

going to do something like this cuz it's actually an unsolvable maze. Right? But we're so used to approaching problems, right? I all I said was start from the left arrow, end up at the right arrow,

right? I never said go through the maze. I never said solve the maze. But we're so used to seeing a problem we solved before and take the most complicated route or approach to solving it. And

today's panel is going to be a lot about how do we leverage agentic AI in super interesting ways and really reframe the way we think about these problems. Right? Apply first principles thinking

so that we're no longer just thinking of the regular way of solving a problem. And that's why I want everyone to come into this panel and the session today with a very very open mind.

So quickly to introduce our panelists, we have Bernard Nin. I hope I I did justice to the surname. I've been practicing. Uh he's the director of engineering at NVIDIA. So for and and

before that was at Meta. Uh he's just flown in yesterday from San Francisco almost a 25hour flight. So uh u you know really appreciate him coming down for the session today. for for the coder

folks out there. If you've ever used PyTorch distributed training, PyTorch distributed as a library uh a lot of the credit goes to Bernard. Uh and even at Nvidia, a lot of the distributed

trainings uh as well as a lot of stuff around Nemo etc. Uh is part of what Bernard kind of takes care of and leads. uh along with him we have uh you know Ritik Rat GI he's the executive director

for SAP uh for is and SAP at HPCL uh he's been leading uh a lot of the charge along with his team in the generative AI agent AI space right they were one of the first almost a year and a half ago

to deploy a start deploying an agentic AI platform uh including fluidi's aentici platform for almost 24 AI use cases and in a very different space right oil and gas uh which is a really

phenomenal thing. So welcome Ritig G and we look forward to your insights here and we have uh Vala Subrian GI he's the CGM at Nabad uh the chief general manager and he also leads the analytics

at Nabad which is the which is the regulator for all of a large amount of the cooperative banks all over India. So it's super exciting to have uh Balaji here today with us and

&gt;&gt; and Nad's done some fantastic work using agentic AI. They have in fact done a new process where they're going to be launching about 20 new geni use cases. So really looking forward to his

insights on this. &gt;&gt; Awesome. So let's get the panel started and we we'll get to it. So I think the first thing that we wanted to talk about right and my first

question was going to be for Ritig G. uh when you're looking at a lot of the AI that's coming um you know especially now we're looking at on-prem infrastructure and sovereign AI in a big way right the

traditional model was okay have everything on the cloud have it all rest over there um and suddenly now there's this new trend of deploying it on prem tell us a little bit about your thinking

when your team took that decision and and what went behind that thought process of why sovereign AI Yeah, Vinv, I think you'll give me a slack because uh I just ran a sprint

from the airport and I thought I'll be the third panelist to go but sorry but nevertheless before I can catch my breath and you shot this question. So basically sovereignity comes and the

need for sovereign AI comes from two fronts. The first thing is that when we started this and as Aina was saying it was almost a year and a half two years back or if I remember it was May June

kind of timeline in 2024 and trust me I and my team were just getting into the generative AI space and it was something which was not understood beyond the chat deputies of the world.

The second thing is being a PSU oil company uh we are a national critical in information infrastructure setup. So it also makes it imperative for us to ensure that the data stays on prem to

the extent possible and if not it stays within the geography of the country. So that's where I don't think it was much of a brain it was much much of an evaluation that went into that we are

very clear that we would like to experiment on prem there two things first thing is we really don't know and about the capabilities of that there are lot of people who came and uh and if I

can use the word loosely pedled jennai it was before you came so the understanding therein was also very thin we wanted to be sure where we are venturing into. So the when this and

with this backdrop so it was very critical for us to be careful cautious and as I we were discussing some time back I would say with my team it was a cautious adventurism for ush to evaluate

whether uh just giving us value beyond the GPS of the world. &gt;&gt; Yeah. &gt;&gt; Awesome. And I love that word cautious

adventurism right because uh it's actually very beautifully termed because you you kind of you want to go out there experiment do the latest but you also want to kind of as a large enterprise

right and and as such a large public sector you also want to make the right steps and the right footing because moving down a direction becomes very difficult to change bal from your

perspective we've done about you know you're looking at about 20 generative AI and agentic use cases again completely onrem M running on on Nvidia hardware. How is how has your decision-m been when

was it was cost a big factor in terms of you know long-term budgeting uh when it comes to you know leveraging a lot of AI uh within the within the organization uh and all the other decision-m because

being a regulator I think the data is also very critical. So give us your some thought process around how you went about that. Uh first of all I mean thank you for the

opportunity. I mean truly appreciate it and uh obviously it is an honor to be in this distinguished panel along with other members aso to be in front of this distinguished crowd. Now uh coming to

this particular question that you're making uh see uh obviously for public undertaking public undertakings as Rituji has already mentioned uh taking a call or starting a geni project is not

at all easy. uh obviously there are so many internal committees which have to be negotiated through then so much of convincing to be actually done so the considerations especially whether we

should go in for a on-prem or a cloud-based application obviously you ask any IT company today they will first say go for cloud that is the in thing so now in that sort of a scenario to take a

call that you should go in for a onrem obviously you it's it's like swimming against the current. So there are a number of strategic considerations that we actually took. Uh the first one is

strategic independence that is we don't want we don't want to be dependent on one particular hyperscaler forever. So whether we can have actually truly independence as far as this particular

project is concerned. The second is uh the organizational boundaries. We wanted that entire project whether it is models, whether it is orchestration

platform, whether it is compute, everything to be within our control. Sovereign control was the second primary consideration. And the third thing is uh you may have seen during the last two to

three years a number of changes have actually happened both in regulatory as well as sovereign threat. If you recall, government of India came up with DPDP act way back in 2025. Then subsequently

notified the DPDP rules last year. Then ABI actually came up with uh the free AI committee and the committee published reports a few months before. So the evolving regulatory as well as uh

sovereign I mean uh statuto requirements actually places a lot of responsibility on publicity undertakings whether it is in terms of uh compliance requirements whether it is in terms of data

localization and also to ensure that uh controlled infrastructure. So the choice that uh we going for an on-prem implementation uh becomes a compliance requirement

rather than a technological preference. So I think that sums up. &gt;&gt; Awesome. Awesome. And and Bernard for you, you know, you've seen it from the technology side of things, right? What

changed in the last 12 months that suddenly sovereign onrem suddenly became a very viable option, right? Was it a better set of open models? Was it better hardware like the Hopper series that's

become very popular? And now we have Blackwell. Is that enabling them to do this a lot better on prem? And what are you seeing the next six months? right or the next one year with the new tech

that's coming is it getting even better I know we were discussing um you know Rubin and and the new tech that's coming within the CPUs as well so give us your thoughts what's kind of cause this whole

whole sovereign wave and what's going to keep it running &gt;&gt; yeah uh first before getting into that thank you for inviting me uh it's a pleasure to be here in India and New

Delhi and also with this team panelists um it's my privilege to be here thank Thank you so much. Uh so I think I'll start with you know Ritwick mentioned chatgpt. I think that was the

kind of the inception of AI is now something that is doing something a user can understand. You know before AI sounded like a lot of science and wasn't clear how practical. So now you have

this uh amazing chat agent but it was closed. It was you know proprietary and we started to see a lot of other models and companies come out with their own chats and these are also closed

systems and the the concept of open and open source has been around way before AI. I mean if I think about the Linux operating system or or we use all we all use git for source control uh open

source has been around for a long time but AI being new uh AI is catching up with open and open source. So something that you know going to your question uh is has become more and more clear is the

proliferation of open-source AI specifically uh new models that are coming out. Uh it used to be you would hear of a new uh significant AI model drop every couple months, you know, and

it was very easy to keep track of the pace of the industry. Uh and and so what we're seeing now is new model drops are happening very frequently. Uh but I want to define what open means with respect

to these open models. So when you hear about uh all of these new models, a lot of the models, they are open in the sense that the weights are available on hogging face. So you and I we can

download these models, we can take the weights and we can run inference on them. We can put them into an application and use them. But as far as uh actually say retraining these models

and what were the recipes to build these models, many of them are not out in the open. So I'll take uh I I want to mention what Nvidia is doing. So Nvidia is very much leaning into

this uh notion of making AI open and available uh starting from the hardware uh and through the software stack. So for example uh we are putting out these our latest models are the Neotron 3 uh

the the nano and then super and ultra are coming and we are not just putting out the model weights but also the recipes to reproduce these models pre-train fine-tune post-train all of

this is available so what this means for the enterprise is that now I can see not only I can choose different models but I can see how to make my own AI platform and tailor it to my data my use cases

and build best of breed models uh from these &gt;&gt; awesome um I just want to comment on on something as well and I think um in my conversations so like I think we come

from the software side right uh I think what's been interesting is also is that when you look at models on prem and uh Balaji and Rit I would love for you guys to come in on this

Is cost a factor? Right? Because when you consume these models on cloud, it becomes a token based thing, right? But wherein when you're doing it on prem, uh it's independent of that, right? If the

models improve uh as long as your hardware is scaled enough, you're you're able to budget these things better in some sense. Uh which becomes a sort of a problem, right? If your consu agents are

token hungry, they're consuming so much. Do you think that sort of played a role in sort of getting this back on prem? Sorry. uh it obviously plays uh and the bigger challenge is uh once you have

gone into production you have rolled out a few business use cases then the thing starts paying back though not in the same measure as other technology investments but the early stage

investment which goes into this is definitely an uphill task and to get that budget for that of I think Mr. Chabal subman will also eco. It's not an easy thing because

the experimentation cycle that goes into hitting that sweet spot where you say that okay we have arrived and we have three four five use cases which can be deployed in the company till that time

you have a lot of non-believers but then what happens I think ja also like uh Jen and agent take are also a lot of boardroom talks so that somehow eases the whole equation because if

others are doing there is something we also need to do and that's how things were for us. Yeah. &gt;&gt; Yeah. See the thing is uh uh when we are going on uh there is a

predictability as far as the cost to be incurred is concerned that is we know upfront say for example over a period of five or six years this is going to be the cost which I'm going to incur as far

as hardware is concerned as far as the compute as far as the orchestration layer then the implementation cost of that uh obviously uh when you go for on-prem you use you tend to use open

source models. Of course, models are free. But uh when you are going for a cloud-based solution obviously it will consume tokens and again uh genai being a new technology and uh the biggest

difference between genai and other technologies is that uh especially if you are actually implementing a rag based chatbot so on and so forth you have practically no control on for what

purpose the user is actually going to use it because you have actually put a set What do you call you created a knowledge base and you are you &gt;&gt; are just getting into the unknown in the

sense the users can play with it. Users can actually use it for in their work or users can actually come up with completely unknown completely uh use cases which you had never imagined.

Whereas in the case of a regular IT project you know I mean the workflows I mean they cannot actually go this way that way. So the actual extent to which your chat I mean your rag based I mean

chatbots are going to be used it's completely unknown. &gt;&gt; So as a result of which that adds that additional element of uncertainty as far as a cost which is going to be incurred

when you are especially going for a cloud-based model. So and especially uh if you're not giving a firm number especially in our settings it's becoming very difficult to it becomes generally

very difficult to convince any the committees and get the approval as so yes uh the fact that I mean we went for on-prem actually helped a lot in giving a firm number what what the cost is

going to be over the next five six years regardless regardless of the extent of usage because the rest of the things anyway will be taken care of. So that actually played a significant part.

&gt;&gt; No, in fact coming to users asking random queries, uh we did this AI avdar of Warren Buffett and the number two question that Warren was asked. So we expected people to ask him about

investments and you know family life or whatever was what does he think of Donald Trump. So I think uh very true you know when you look at something agentic gen the users's field of vision

is unlimited and you have to sort of respond to that. So yeah that's that's very true absolutely and you know coming to the second part uh use cases is a is a big layer right and here we have a you

know great example we have oil and gas we have banking regulatory very different industries and we're seeing the use cases explode when it comes to AI right we're seeing SAS companies now

getting devalued by 20 20% overnight logistic companies losing 20% in their stock market prices because the theory is that essentially AI is going to subsume all software in the next 6

months to a year. Um Bernard this is for you as you see this trend and then we'll get to Ritig G and Balaj on on the use cases more specifically in their sector but Bernard when you're seeing a lot of

these use cases come into the market uh since you've done a lot of distributed trainings you've played around a lot with you know spend your days with a lot of these models are you seeing the trend

for use cases be this one single know-it-all autonomous agent backed by a great frontier model that's doing everything from oil and gas to pipelining to regulatory to banking to

insurance to retail um and even within an org right from HR to let's say IT to uh you know the marketing teams are you seeing this one agent that's autonomous that's handling everything and like

bunch of tools for it or are you seeing the trend more specialized agents specialized models rolling out for very specific layers of an organization when you're seeing it in the enterprise side.

&gt;&gt; Yeah, that's a great question. Um, and I want to tie it back to the costs and the ROI that we're discussing. Yeah, fully agreed uh that you know the AI running AI models can be costly, but we

can be optimized about it. So for example, uh to answer your question, I would say that there's uh different cases for different size models. So, so first off, what am I talking about as

far as cost? Uh, I think about tokens essentially as you know the the cost. So, when I'm running a model, so a certain GPU can process uh tokens you know at a certain rate and when I

consider what models smaller models uh can essentially uh generate a token for me much faster than larger models. However, there's a trade-off. uh larger models have more weights and are able to

have more intelligence built into them. Uh that said, you can what we're seeing is that you can train small models to be highly specialized and be best-in-class state-of-the-art for their specific

task. So as long as that you know what the bounds of that model is, then you can have a small model. Uh definitely. Uh so getting into the agentic AI uh what we're seeing is that yes there can

be many of these specialized agents and these are all running smaller models and inference is much faster much cheaper for these uh where you might need uh say larger models is where you need a larger

model to do deep reasoning deep understanding uh in a more general sense. uh but you can you can essentially route your use cases you know the the ones that require the

deeper thinking more general thinking to the larger models and the more specialized use cases to the the specific agents and uh we were talking about you know agent to agent earlier

and uh here's where uh you can you can also have uh I'll just you know I didn't answer your question previously but with respect to hardware uh something that Nvidia is doing is uh is making the

hardware align with what where we see things are going for example with their Ruben uh that that's going to be a new CPU with a lot more threads uh for uh and you know CPUs have always been great

at multi- threading so that's that's going to come into play with kind of switching between uh you know different agent loads and then we're in these rack scale systems the memory is much larger

so you can have uh all these agents deployed within Iraq and they can share the same memory space. So rather than having to pass around lots of data and all of this is essentially bringing down

the cost of of running uh a genai a very intelligent and complex AI system. &gt;&gt; Awesome. So you know there you heard it. I think that's super interesting, right? Memories and that's already there with

the new DJX Sparks, right? The memory is going to be shared with GPU CPU and the CPU is going to start looking slightly more not not effectively like a GPU but closer to a GPU in terms of its

threading and its performance. So that's that's super interesting. We're excited now for for the next generation that Nvidia is going to bring. Um coming to Balaji and Ritig G, right? We've we've

seen amazing use cases across both your sectors, right? Right. In in oil and gas we have you know everything from refining automations that have been done

to the pipeline sensors to logistics to even the sales teams leveraging AI for training to multiple multip even like going through all the data that's there and and similarly bal and nabard you've

seen use cases across you know personal assistant for teams you've seen use cases that are across the data that that Nabad will have across better processes internally um and It's it's spanning so

many use cases. So Baji maybe first you can you can you can give us your thoughts. But when you're looking at deploying Agentic AI not as one use case but almost this platform approach where

I'm going to take 15 20 30 use cases how does that change and and what have you seen in that journey? uh &gt;&gt; see the first thing that we need to recognize and realize and recognize is

that a gen project is not actually similar to an IT project. When you are going for an IT project, you're actually going to automate or a set of workflows which is I mean coming under one

function uh or one particular department or maximum a set of departments. So you take any normal application whether it is loan management system or loan origination system or HR system or risk

management system or even an ERP system it actually caters to certain defined functions. Now a geni project is completely different

from this. a single genai project I mean multiple uh models executing different agents through a single orchestration platform can actually cut across different functions can cut across

different departments can cut across different enterprise applications altogether. So uh the use cases that you actually look at uh for the purpose of implementing a gen

project is basically left to your imagination. say that is how I mean when we started the internal discussions actually on different requirements of different

departments we found I mean obviously uh uh thanks to uh I mean where we are today uh we have a single solid orchestration platform which is capable of uh which is capable of being used for

the purpose of what do you call uh for holding multiple models and you can build uh specific agents on top of it and deliver through a single

orchestration platform and with the help of MPCs you can actually embed across different uh what do you call enterprise applications so what we found is uh unlike in the case of normal IT

application IT projects it's always in the case of genai it is always better to have one project with multiple functionalities rather than having multiple genai projects

catering to different individual applications. So this will help in uh controlling of obviously having a single overarching governing principle across the entire uh models agents etc. And

also it will help you to what do you call uh reuse different models reuse different pipelines data pipelines which you have created. It'll also help you to exercise a higher level of privacy as

well as risk which is actually generated out of this uh what of large scale implementation of geni projects. So I think uh uh architecturally uh platform approach cutting across the entire

organization uh that is what our thinking is that that is what we have seen so far is a better approach as far as geni implementation is concerned. Awesome and

Ritig G for you if you can you know again on the same lines and also talk about how are you guys thinking about use cases when you take up you know there's so much and oil and gas being a

very interesting sector I feel you know when you look at retail and you look at banking those use cases are talked about a lot right customer support call center support um you know standard KYC

&gt;&gt; not so glamorous as an industry &gt;&gt; exactly but I think the the stuff that happens in oil and gas right is so amazing the kind of use cases that are coming out of there. So tell us a bit

more about the platform approach as well as how are you you looking at use cases within within oil and gas and then Raav you could maybe come in to tell us more about the general industry use cases

that we're seeing. &gt;&gt; Yeah I think uh what Mr. Balorun talked about is the same approach that we have also taken and the doors are closed and uh I'm dreading to say that I am not a

great fan of GPS to be very candidate. Okay. Uh I see a lot of young faces and a lot of my contemporaries also get into all the geni engines that are available and then try to source their

knowledge from I some of an old school thought. I would prefer to go through my own literature form of my own solution. So that's where I pushed my team hard and you are also you know you are also

aware of that that if you have to invest something and jennai like uh what the Navad example is also it is not an it's not typically in IT project where you invest and you have an RO which is

defined okay you are still looking at areas which are uncertain and when you are the proponent of something in an organization which is as large as

It is very important that the first few experiments don't fail and people need to see value which is coming out of that otherwise what will happen it'll get derailed it will not get the executive

support that you need to keep it forward. So what we did is we looked at actually and the other area is sorry for the dig aggression because I was just trying to

collect the thoughts and uh see the whole issue is that you need to be very creative with what you can do with the gen it has immense capabilities. It's the application

which will lead to very very useful use cases. Okay, for one and it's a very fond example of mine. Uh we have periodic medical examinations which are conducted every year and we have uh we

used to have a setup which was a monolithic way of entering the reports because unless you update your reports you are not supposed to continue getting all the reimbursements and all that you

get. And the first time when we ran it on our enterprise platform, trust me when I'm saying that the average time per employee was around 4 hours. People would read from the note, type it

in, then confirm that. Then it would go through a workflow process and by the time it got approved, all my peers in the company were shouting at me. In fact they said put your secretary to

this job so that she would be entering our data and we can't be wasting so much of time and then we sat together and my team is here. So on the front row someone and anamika. So

when we did a bit of a soularching with the HR team also what we realized is that every year we have close to 5,000 people going through this cycle and you can do the maths and that's a huge

productivity drain in a company like us and we are a very lean organization as far as manpower is concerned. Okay. So when you're talking about 20,000 person days getting wasted in a year that's

right person hours it's a huge huge drill and that's where we got uh thinking that why do we do that let's try to use geni for parsing through all that that is coming in and you're aware

of that and trust me this and to cut a long story short this came down to the people who are young like uh my friends sitting there it was around 5 minutes was the time that it took

20 seconds for the parsing the rest because we didn't want the engine to confirm the content. Okay, we what we said is that it's very human and it's very personal and of course Mr. Bal

Subramani was talking about the DPDP part of it. So we wanted the consent of the employee before ensuring that the data was committed but when we did the later uh study the average usage time

came down to 18 minutes from 4 hours. So that's something which you gift back to the company. The second thing is that uh uh while we are an oil marketing organization, we are a very large

logistics organization as well. If you see our spread, we have more than 23,000 retail outlets across the country. Now we have got so many supply points. So it's a logistical challenge and

when we come out with a tender for engaging transporters it's a huge thing and it happens at the industry level okay it's a multi-car contract which is placed and we don't we want to be

compliant in every stage and this was an use case when we looked at that and trust me when I say so if you look at the tender bits that are submitted it'll be as tall as I if you pile that up.

Okay. And that's where the power of the engine comes in. Okay. So, what you need to is to be imaginative about it where to use AI

and what are the complementing set of wrapper solutions that you need to build around it. It's like I had a boss sometime always used to tell me don't think of solutioning like playing

cricket. Okay, you have one bat. Now of course people take two or three bats but always think of that as a golf game. Okay, you have different you have a teing one, you have quarters. Okay, so

depending on the needs. So think of that whole thing. So one is to think of ja as a platform. The other thing is to think through the solution as an end to end value chain. So once you do that then

you know where the AI part fits in where you need to get automation plugged into it and you may also need a wrapper form which will be on top of that. So that's how we imagine our applications and I'm

very proud to say that the team has come out with a lot of fabulous ones which has not only reduced the efforts that we had it has improved compliance significantly it has taken over the

rigger from the field and today people are seeing value. I think the first 6 8 10 months was tough for us. It was very difficult to excite people to think beyond the GPS but today the plenty of

use cases that are coming in and which are really really very very exciting. No, absolutely. And I think um you know I think you hit on a very important point, right? I think people just look

at a lot of AI use cases as this this personal assistant GPT that I'll make available to the org. But how can you take four hours to 5 minutes? How can you automate a refinery? How can you

look at pipeline? How can you logistics like you mentioned? So not just run-of-the-mill use cases, but really go deep into the business and and transform it. uh and and that's what the team team

at HPCL has done. Uh I I think it's phenomenal to see. So Raghav, I think would love to hear from you uh from a general perspective, right? What are those use cases across industries that

as as technology providers you're seeing in AI really deliver value, excite customers, um be very very powerful. &gt;&gt; Yeah. So I think above uh you know going

forward from what Ritu g and balasuram g was saying it's basically essentially when you go beyond point use cases right I think a lot of time it gets very exciting one team one business

picks up a use case and says I'm deploying this and they show value also but then it comes back to that framework right when the whole organization needs to take it front does it have the

governance does it have the data security built into this Right? Does it have the budgetary? Right? It's great when 15 users are using it in one part of the org, but when you're talking

about use cases which affect 5,000, 20,000 employees or uh tenders which are running into multi-million dollars, then it doesn't cut it when it's okay, it's great and a P and all right, it needs to

be platformized. It needs to be in the organization. And that's where a framework, right, a use, so you put the platform in and then you put these use cases on that platform, right? So when

we work with organizations at fluid what we tell them to say is okay plot your use cases on this framework value on one side and operational change or feasibility on the other side and then

you get the sweet spot right where there's an intersection between where high value high operational feasibility go there right then obviously with the platform approach you can go down

further right you can say okay now I'm going to take on high operational risk but there's a lot of value so I'm going to attack those that's when you have the political capital to sort of go ahead

and the platform is already taken care of the data security side. So that's largely the journeys we are seeing out there. One thing that's really exciting us is a lot around uh voice AI. I think

voice is going to be a framework which not only brings in uh you know everyone is using AI today but there's a huge percentage of the population which is not using it because literacy and just

basic technology keeps them out. I think voice will bring them in into the playing field and second is AI hitting the geni world hitting the traditional ML world. I think they are seen as two

separate worlds right now. I think that intersection will be very powerful when ji sort of sits on top of ML and sort of creates a wonderful perspective and let's say you know an ML model says okay

this is the right product to pitch to this customer and GI creates an custom pitch for him right and maybe has a voice conversation with that customer. So those kind of powerful use cases are

coming. Absolutely and and I think with please &gt;&gt; yeah Raav you touched up on a very important the digital divide that is existing is possibly because we are very

very uh oriented around English as the language of interaction okay and we have also done a small pilot here and we're seeing that if you see the kind of people who use our solutions then not

only this people who can use and operate in English or in some cases Hindi Well, the biggest divide which is coming in adoption of any kind of digital

technology is the language divide and uh I was very excited. Of course we have not gone into production as yet but we had done a P and it was amazing and I see a lot of potential in bridging this

divide this gap which is existing because of the language barrier and the apprehension of a large sector of the population for reaching out and trying out something

&gt;&gt; is going to be very soon braced uh with the voice AI which is coming in thanks for bringing it up &gt;&gt; no absolutely and you know even within HPCL now it's amazing right when

logistics are running and a truck driver gets a call in their own local language when the IoT when he breaks too harshly and the IoT sensor goes off they can actually get a call in real time from an

AI telling them you know what's going on tell me a bit more about it and you know obviously with fluid we've kind of done that amazing work with you guys uh Bernard coming to you you know there's

so much excitement like like Raa Rit you mentioned about voice right Nvidia's launched their own voice models persona is out um you know there's a lot of excitement around Nemo and the agent

toolkit and how it orchestrates all these agents. Open claw is becoming very exciting you know in the consumer world at least so far right with or as people know as claudebot moldbot now open claw

what are you seeing in the next 3 years that's exciting you most when it comes to all these AI trends uh which one kind of or outside of these what's exciting you for the next three years when it

comes to AI and agentic AI &gt;&gt; so yeah I know that there's a lot of great work happening Uh first on the language piece uh yeah I mean there's different contemporaries here uh I just

mentioned um you know there's araten and and saram and you know there's all these uh indic native uh language models that are handling speech to text text to speech and and so yeah seeing that

happen at the user interface so to speak then yeah this really opens up AI to the general you know general anyone uh and it's critical I mean this is something that I think is key to the sovereign AI

uh message is that the the culture the language all of that is very accessible and usable so with those models becoming state-of-the-art at the front end the input and the output and then you have

uh you know the most state-of-the-art reasoning happening in between and you have agents happening uh that can you know do very uh different tasks for you. So at least on the yeah going to the

open claw so that's more of a personal agent in the consumer space. So for example that would be for me you know I'm visiting Delhi for the first time in my life it's exciting I don't know what

to do so I ask open claw okay you know here's my budget uh for a daily spend you know make sure that my hotel uh make me meals activities plan every day uh stick within that budget and uh and you

know if you spend more in the hotel one day then you have to spend less on you know dinner lunch that day and then now go and wrote these for me. I mean that's the uh that's the dream right that would

take me a lot of googling a lot of searching here calling that's a lot of time and I I think right now the reality is that what what I described is more of like a a long horizon use case uh and uh

the reality is that you know maybe certain some of these things you know they might succeed like one one of these steps might succeed 99% of the time And then if you require 100 of those things

to happen, 99 to 100th is meaning you're going to fail the overall job, you know, or you'll only succeed maybe 20% of the time, which is a pretty high failure rate. So that's today. What I see

happening in the next 3 to 5 years is that these long horizon tasks will actually become very very highly successful. And um and I just gave consumer examples. I mean in the

enterprise uh you know I think fluid you guys here have all the great examples. I think what we what we'll be seeing is a much more high degree of confidence in being able to entrust agents with these

missionritical tasks. I think right now we're getting a feel right what what are the existing tasks and uh you know a lot of human oversight and it's great I see it automating parts of it. Uh what will

be really exciting is uh yeah being able to handle more of these mission critical tasks and and uh I'll just go back to I think something you know that our our NVIDIA CEO likes to say is that when AI

is uh able to accomplish you know a lot of these tasks for you it's not that you just have extra time and you just sit around and and don't do anything else. it's you can do more and the the

potential for every person uh every you know employee in the workforce uh you know to be able to be you know empowered is really exciting. &gt;&gt; So ne next trip to India you'll have an

AI book your book your flights I hope &gt;&gt; that yeah that that would have been great this time I had to talk to a couple humans to make it happen. So soon uh Bali coming to you um you know on the

same vein was when you looked at deploying Agent across the enterprise did you see it more as a defensive strategy that okay everyone's going to have it so we must get it in or did you

see it as an offensive strategy that let's be early let's get the value quickly and show the world what's possible and what do you see 3 years from now uh you know companies and

regulators and organizations ations that don't end up deploying it versus ones that do it. What will that differentiation look like 3 years hence for for making that decision early?

&gt;&gt; Now the first part of your question the answer is neither. I mean it is neither offensive or nor defensive strategy which actually originally started this particular project. I was in charge of

data and we were looking at some mechanism because obviously the stat says that every organization has got 60 to 70% of their data in unstructured format in the in the files so on and so

forth. So uh all those traditional methods of uh drawing insights from unstructured data like uh keyword search so on and so forth text analytics etc was not actually giving the kind of

result that that we were actually looking forward to. So it is at that time we started uh the PC's with genai. The first P itself clearly demonstrated the power of genai actually for the

purpose of uh dealing with unstructured data and how to extract value from it. So that is how it originated. Now sitting here today I can give a passion saying that I mean it is strategic

offensive defensive all those things but that is not how it actually originated. The second part of the question that you asked is I mean I'm not the right person to say I mean where the where the gen

and its ecosystem is going to be or the institutions institutions are going to be 3 years from now primarily because I mean uh earlier Bernard was actually mentioning I mean companies are churning

out new models every second day or se second month actually so the pace is going to go on increasing but definitely the institutions which are adopting jai uh will actually have at least three

advantages very common advantages which it's no-brainer for me to say. First obviously is uh they'll be able to derive much higher levels of productivity, efficiency, uh customer

traction, customer satisfaction using this particular systems. When I say customer satisfaction, it's not only external but internal as well which uh refugee has elaborated in great detail.

The second point is uh companies will be able to look at each customer in its as an individual in the sense you'll be able to do a hyper level personalization

using gen which means um company can actually give tailor services completely differently for each of us even though the broad parameters may be same but it can be completely packaged uh customized

in individualistic ways. This is the second one. Hyperpersonalization is absolutely possible now. And the third thing which I which I'm reasonably confident is I mean some leading

companies have already started doing it. Today uh a lot of enterprises will be looking at Genai systems from an efficiency or productive perspective. But however 3 years hence those

institutions which have actually adopted or which are adopting jai right now uh will have uh we'll be looking at it as a decision infrastructure not as a productivity tool in the sense uh they

will be having I would assume that a number of agents who are actually taking decisions autonomously within the set parameters rather than uh what do you call human beings actually taking those

decisions. I mean HPCL is a great case. I mean in the sense they have already executed certain use cases where some of the things are actually cutting down the time going forward as we gain confidence

as the institutions gain confidence in the output and the value which is which these systems are actually generating obviously I don't think uh the day is very far off when we actually delegate

the entire responsibility of taking decisions itself to those systems. So I think broadly these three areas I think very confidently we can say &gt;&gt; Ritig your thoughts on the same and then

Raa maybe you can give us the overview of the entire panel. &gt;&gt; Yeah sure. &gt;&gt; Okay so I think I'll be lying if I say that this was a strategic choice. I was

one of the naysayers when this proposal was brought to me. uh team is here uh and I took them through the grinder because uh initially to be very candid didn't make a great sense to me that why

should we use it and why should we invest so much of money but that's one advantage of having youngsters in your team okay they're very persistent they dog and uh they get get a lot of

consumer experiences into the enterprise which is otherwise missing in people like us I remember the first set of requirements which had come and uh when we went through that the interaction was

totally like what is the value that's going to come to me what is that why should I give you this much of money and trust me it went through two or three iterations and end of that we came out

with 20 or 24 uh use cases where I said okay it's a fair balance we need to have a basket where the portfolio is adjusted uh some which are possibly improving your productivity something which is

efficiency See and that's how the journey started. So it was not a very cut and dried story for me to tell you. But coming back to the companies which are early adopters, the first thing is

uh they will have more use cases to go to. Second thing is that it'll do into the enterprise ecosystem much more seamlessly as compared to people who will be adopting it less. The

third thing is that you know what are the challenges that are there. The areas where you need to focus on whether it is uh about the large language models that you look at or you need to look at very

niche but iteratively usable smaller language models. The third thing is that you also start developing the partner ecosystem because trust me this is a domain where unless

you have a good partner to handle you in the early stage it becomes very difficult. So my takeaway would be that see I can't unlike uh Mr. Valur and I can talk about hyperpersonalization

because we are majorly into a commodity market. So there very little distinction between the products that we supply from our competitors but efficiency, productivity, compliance, safety. Okay.

And breaking the language barrier. So these are the five major takeaways for us. Nice. Raab, do you want to wrap? &gt;&gt; Yeah. So I think uh one of the key things and I was in a discussion um a

little earlier. I think the key thing is agentic and sovereign is like water. It's a utility. I think that's what it's going to be across the organization. It's going to cut across so powerfully

and that's where organizations need to go to the gym today right I think taking from what Ruj was saying you need to build that muscle you need to build a partner network you need to build a

governance in like Balaji was saying you need to build a technology to be forward thinking like Bernard was saying and you need to get it all together lined up today rather than wait for it to happen

a year or two down the line so uh with that I think I'd like to end the panel today and uh you know thank you for all for being such a great audience Thank you. And u

at the end we're also going to give um so we've launched a new book called 10x your productivity using AI. It's going to be out in stores in two weeks time. We're going to give one copy to each

panelist and keep a lookout for it. But you've been a great panel been a great audience. I know there were a lot of people standing at the back listening very keenly people trying to get in as

well. So I really like to thank everyone in the audience for for being there for the session and being so enthusiastic. &gt;&gt; Thank you.
