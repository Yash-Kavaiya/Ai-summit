# The Future is Intelligent: AI in the Cloud-Native Era

**India AI Impact Summit 2026 — Day 1 (2026-02-16)**

---

## 📌 Session Details

| | |
|---|---|
| ⏰ **Time** | 14:30 – 15:30 |
| 📍 **Venue** | Bharat Mandapam | L1 Meeting Room No. 16 |
| 📅 **Date** | 2026-02-16 |
| 🎥 **Video** | [▶️ Watch on YouTube](https://youtube.com/live/dZKdeUN7QlY?feature=share) |

## 🎤 Speakers

- Bharath N R, Mirantis
- Prithvi Raj, Mirantis
- Satyam Bhardwaj, Mirantis

## 🤝 Knowledge Partners

- Mirantis Inc.

## 📝 Summary

In order for AI infrsatructure not to be locked into a few vendors, open source cloud native tools could be more widely explored.  This is a first step towards building production AI systems on one's own terms keeping data sovereign, optimising expensive GPUs and serving models more efficiently. This session will explore the use of these tools and include real lessons from industry deployment. 

## 🔑 Key Takeaways

1. In order for AI infrsatructure not to be locked into a few vendors, open source cloud native tools could be more widely explored.
2. This is a first step towards building production AI systems on one's own terms keeping data sovereign, optimising expensive GPUs and serving models more efficiently.
3. This session will explore the use of these tools and include real lessons from industry deployment.

## 📺 Video

[![Watch on YouTube](https://img.youtube.com/vi/dZKdeUN7QlY/maxresdefault.jpg)](https://youtube.com/live/dZKdeUN7QlY?feature=share)

---

_[← Back to Day 1 Sessions](../README.md)_


## 📝 Transcript

Am I audible? &gt;&gt; I think folks at the back are suggesting I'm not. Am I audible? &gt;&gt; Can you increase the volume for this?

Hello. Am I audible? I think that's too loud. All right, folks. That was uh quite a wait for our session to get started. Of course, if we have members of parliament

sitting here, I think uh our session takes some time. But uh great to see such a crowd. I I haven't seen such a full house for our talk. Even if uh I think we three have delivered around 50

talks in the last one year. This is the largest we are seeing in terms of the room capacity. I mean we have seen 200 folks but yeah overcrowded of course. So we are going to talk about uh AI in the

cloud native era. Uh just a show of hands how many folks are working with cloud kubernetes or AI. Okay. Okay. All of you I'm I'm sure you have you're not you have not just turned

up for the talk without knowing what the talk is about. So uh we have an agenda. uh usually uh I I try to keep the agenda open to interpretation not a specific agenda but

we are going to talk about ourselves we are going to talk about the state of opensource AI how AI is today in the Kubernetes ecosystem we are going to talk about uh building the

infrastructures of today and then we'll of course uh talk about tooling strategy the challenges that we are facing in the cloudnative era and how you can run AI on your platform so the cake is

basically the layers that we are going to cover. So we we are going to cover layer by layer how to reach the right strategy how you can build your platforms or what's the right platform

strategy today moving towards uh the AI native world and a congregation between the cloud native and the AI ecosystem. &gt;&gt; Okay. Okay. I think they want us to have a group photo first before we start our

talk. So we'll we'll do that. Are you related to the organizing? Can you give me some space? All right, folks. Sorry for the delay. We can get started now. A lot of photo

ops and all that stuff. I hope we can utilize some of the AI we are learning here to improve the food that's that's outside as well. But uh moving ahead, uh a quick introduction of us. My name is

Priti Raj. I'm a senior community manager at Mirantis. I am also a CNCF ambassador. Folks who are aware of the CNCF or want to ask any questions feel free to reach out. I work uh uh for KCD

Bangalore as well organizing KCD Bangalore. I traveled for from Bangalore this morning and I'm straight at this venue. Uh but yeah, I do a lot of stuff on the platform engineering side. So if

you have any questions on platform engineering, feel free to uh ask me post the session. a quick introduction of uh uh Bhat and Satyam. &gt;&gt; Hey everyone, good afternoon. Um so my

name is Bharat. Uh we all from Morantis and I lead the open source program office team uh at Mirantis. For those of you uh who don't know what OSPO is, OSPO is primarily you know a team which

focuses on upstream technologies and uh you know contributes back to the community the tools and technologies that we end up using in enterprises and as you might know most of the tools and

technologies directly or indirectly is dependent on open source stuff. So yeah, so that's what Mo uh Mirantis focuses on. Uh like we're going to talk about the product in this uh in this session,

but yeah, primarily that &gt;&gt; Hello everyone. Uh I am Satyam. Um I'm with the same team OSPO at Mirantes. I'm a software engineer. Um so yeah, we contribute to a lot of open source

technologies. Uh I'm mainly towards the CNCF landscape if you know about it. um Kubernetes that's where I'm I specialize with vendor neutral composible infrastructure and and you know our

slides are related to that so you'll see picture of it so a little bit about meantis because a lot of folks might not be aware but uh Mirantis is one of the pioneers of uh

private cloud environments the journey started back in 1999 when I was born but uh the company has been pretty robust been doing a lot of things in the private cloud ecosystem. A lot of end

users clearly who started using Docker and now moved on to Docker Enterprise uh use Mirantis. People who used OpenStack and are aware of the OpenStack uh landscape that was again driven by

Mirantis and today again the Kubernetes and the platform engineering with uh the AI implementation is uh being driven by Mirantis. So you can see this has been the journey

uh the private cloud pioneers of around 2011 2015 and then uh we moved on to open infrastructure acquiring docker enterprise the launch of mirantis openstack kubernetes and mirantis

kubernetes engine uh and of course lens which is uh an interactive UI for utilizing kubernetes uh and then this has been the AI revolution where we are focusing more on coordinant which which

of course bhat is going to talk about and how the AI landscape is. So let me start from the basics. Uh I know a lot of folks must be aware of a lot of things. Uh but I'm going to start from

where the idea of cloud initiated or what was the idea behind cloud. What customers expected or what the end user expected was a simple interaction between a data center and a cloud

environment. Usually it was a public cloud environment. how it started but this is how the reality is of today. You see multi cloud environments uh and I mean you see so many data centers one

organization is not even using one cloud provider. One organization might be using using Azure and then AWS and then have some edge environments a private cloud hybrid cloud in place and then

there are so many APIs under the hood interacting with each and every cloud each and every service and instead of being simple cloud in itself has become so complicated for its users or

companies and what started as one cluster one cloud has become multiple clusters thousands of clusters 20 plus clusters is pretty simple for a particular team. There's no unified

control and platform engineering as something which is called so-called niche in today's ecosystem even if I believe it has existed since the mainframe days has become pretty

complex. I mean you can see there's Kubernetes as the uh I mean common control plane or the OS of the future under the hood but you can still see so many APIs that are interacting with each

other and making things complex. So the idea as I said is to make Kubernetes as the common control plane and you can see I mean uh I I believe calling Kubernetes as the OS of the future is is not too

optimistic. It's the reality. We are moving towards a generation especially with how people are moving from virtual machines, VMs and hyperscalers to utilizing containers and Kubernetes in

their ecosystems. Kubernetes is going to be the common control plane and a powerful control plane, a powerful scheduler for all your infrastructures. Uh with this uh I'll talk a little bit

about the cloudnative survey that was uh I mean curated by the CNCF and you see today we have around 15.6 6 million cloudnative developers. Developers who are utilizing some form of Kubernetes

technology and 52% of them are a IML developers which is more than a half 7.1 million of course and as you can see 36% of them have already utilized or are running AI workloads on Kubernetes in

some form they are utilizing some sort of agents with Kubernetes. uh Kubernetes are being run on GPUs and then 18% of them are in the planning phase where you can call them in the developmental phase

where they are utilizing multiple workflows to reach that production phase but we we are already noticing a big change in the last couple of years especially with the LMS growing with how

agents have come in people are moving towards utilizing Kubernetes in their AI workloads So with this I'll allow Satyam to talk a little bit about the challenges that we

are facing while building AI infrastructures and then we'll move on to tooling and how platforms look like in today's world. Thanks. Thanks Prit for building the

nice foundation. Um, okay folks. So let's talk about AI. Okay. So we are already talking about AI and when we talk about AI the first thing that comes to your mind is

somewhere on the you know an interface you're going to prompt something and you see some results but when you prompt something it's just not models. It's the whole stack. So when you do a request to

chat, it goes to some GPU in some data center and that's where your infrastructure the whole chain you know the the supply chain starts. Okay. So there's GPUs um when you have GPUs you

have you have storage networking um monitoring as well. So all of those are the aspects of you know when you develop an AI application and one can't reiterate on building

intelligent application um without defining you know proper infrastructure and now and now so much so that we are burning GPUs I mean literally combustion and so

the demand is going again higher and higher so companies are looking to you know optimize their infrastructure as well making it readily available to the development team.

Okay. So yeah, we're going to talk about infrastructure. Um I'm going to start with Kubernetes. So Prit already built a base and I saw a lot of folks here who already know about the Kubernetes. But

I'm going to try and give a very simple explanation of Kubernetes and why this tool is so much you know popular around. So think about it. So you have an application and you are running it on

server. Server is basically a computer and let's say you have five of those machines and if you can make it possible to run that application if one of the you know the machines goes down you know

the seamless networking storage and everything all together interconnected that's kubernetes so it's not just web application you can think about in terms of AI applications as well

okay so kubernetes is a very resilient infrastructure for deploying any kind of application um you also get automation scaling and auto healing out of the box. And if you know Kubernetes is also the

second largest open source project um after the Linux it has a self-governing body. So you know not a singular company who is in control of what goes on is the maintainers is the open source

maintainers who control the um the life cycle of the whole Kubernetes. Okay. So Kubernetes is a mature tool. Um and it has a very huge ecosystem. Um so so

what what companies are doing they can build on top of Kubernetes API. So let's say you have a business application where you want some sort some specific you know tooling. Um let's say you want

some sort of KV cache optimization or something around training or you know some optimization. So you can the companies can build their own APIs around Kubernetes. They can open source

it and reiterate quickly to develop their application. So to give you some examples if you've heard about kserve llmd so any sort of a IML pipeline in the you know the whole mlops pipeline

any sort of application you can think about you should be able to find it if not you can always create your own open source application and you know get the community to you know get feedback and

contribute there. So when AI wave took place um we know you know AI wave from chatd 2022 or something um so kubernetes was uniquely positioned to answer some of the infrastructure challenges that we

see right now and that's why we call it the present of intelligent operations not the future okay so yeah I talked about why kubernetes is ideal for you know the AI

era and kubernetes the tooling is GPU aware. You also get autoscale autoscaling for the infrastructure across clouds. But as the Kubernetes adoption matured,

the complexity also exploded. So you have multicluster, multicloud. So you can also expect inconsistent APIs, you can think about clusters, you know the the five machines that we just talked

about in different regions and let's say 100 of those that's already a complexity. So we have fragmented tooling which is a new challenge and this is just infrastructure I'm not yet

coming to the you know AI thing. So this is infrastructure challenge. So let's say if you want to deploy 50 of those clusters you'll be dealing with n number of YAML which is what we don't want. We

want one YAML one you know turnkey YAML to deploy all all infrastructure maybe as GPU or without GPU. Yeah. So you know building on that so these are the infrastructure challenges

that we have right now. Um starting with the multiloud complexity. So as en environment grace grows uh visibility also gets worse.

So as I told that if it's in if the infrastructure in different regions you don't have control over you don't have a centralized view of each of your clusters and you know tooling tooling

becomes fragmented. So even githops principles. So if you have heard about some of the githops tools in this ecosystem um they can't handle this stress you know so

so cluster starts to drift across environments then second we have also regul regulation and compliance um you would have heard about the recent drives the sovereignity drives across Europe

and all um so yeah so we have requirements around the data privacy um audit trails and cyber security as But to do that we want consistency and visibility across our environments.

Yeah. And we have now regulation and compliance. If you see one the other points um this this adds to the whole new layer to the AI organizations want to on board GPU faster and improve GPU

utilization and support multi-tenency etc. But without automation all of that becomes difficult and expensive. So the so the takeaway is simple. Modern infrastructure is harder and without

automation we can't do we can't reiterate faster. &gt;&gt; Okay. So we just talked about the infrastructure challenges. Now let's talk about the AI infrastructure

challenges. And we can basically put them into three categories. The the first is tech complexity. So it's not just Kubernetes which comes around when you talk about the AI infrastructure.

There are different toolings and because there are so many toolings we don't have standardization. Okay. There are countless frameworks, platforms etc.

And everything has to integrate correctly. Everything has to scale. Everything has to stay updated. Next is operational efficiency. So even after let's say if you are a company

you're building your own tech stack own infrastructure around the GPUs and AI. So even if you have the stack assembled the real challenge begins with operating it um as we talk about utilization

provisioning speed um also the networking around it. So all of those matters and lastly the customer experience you know or a user experience we want fast

onboarding. Um so you know the state of the you know current world where if you want to request a GPU on any of the hyperscalers it's going to take you 6 weeks and if if it's one of the you know

high-end texts in some countries it's just not available as well. So we want fast onboarding um preconfigured environment and reliable performance as well. So this is all that makes AI

infrastructure a little complex um and unpredictable as well. And lastly one of the challenge I want to talk about you know technically is multi-tenency

because these devices are so high-tech and you know they are costly as well. So we don't want developers to have their own set of GPUs which is going to cost like more than 20,000 for one high-end

GPU. Um so for that stuff we have multi-tenency. Um so you can think about it. Um we have different algorithms and with other with with you number of vendors we have different sort of

algorithms. For example AMD or you want to use uh Nvidia they will have different sort of slicing algorithms. you if you had heard about time slicing or or multi-instance GPU even with that

we have challenges for example fragmentation um noisy neighbor because essentially we are sharing memory there and we're going to all talk about all of this how we can resolve this in the

upcoming slides okay that's me with me right thank you so much Satyam let me go back to the previous slide on so these are three examples because Your node is never distributed in a single

form or we are in the hyperscaler world where we believe that resources can be in one form or one data center. That's not how it exists in terms of multi-tenency in the AI ecosystem. You

can see in one way there are tenants which are interacting with just VMs over the hypervisor but you can see a tenant interacting directly with the hypervisor and the nodes as well and that is where

I feel and then there's the tenant which is interacting with the operating system that can be your Kubernetes or your Linux and then there are people who are hosting their workloads or Windows or

Mac as well. So multi-tenency as I said there are different teams there are different enterprises utilizing their workloads in different ways per team and that is why it is complex and has so

many options and that is where I believe the the AI way of doing platform engineering is ensuring that you're not just uh having your multicluster multi cloud orchestrations in place but you

are also ensuring that your GPUs uh that are hosting all your multi-tenant ecosystems are also having say a a multicluster or a multiGPU orchestration in place. But before that uh before we

talk about platforms, we'll talk about the Kubernetes AI conformance. I believe a lot of you who are utilizing Kubernetes are aware of the Kubernetes conformance. But the idea behind the

Kubernetes AI conformance was to ensure that you you are able to make your AI workloads running on Kubernetes repeatable as well. uh many of the tooling that's out there

even if you are say you utilizing your GKE or your AKS all the Kubernetes service providers are conformant in nature which ensures that that there's a sense of uh you know uh it it can't be

it works on my cluster but it doesn't work on yours that that's not how it's going to work in terms of what you know implementing Kubernetes in the AI ecosystem and that's where I think a set

of folks alongside the CN and CCF came together to ensure that your AIM ML workloads are portable even if you're hosting them on your GKE or your AKS or your private cloud environments. Uh you

are able to run it on your clusters and then it's giving the ecosystem a clear baseline. So you you can check out how you can make sure that your platforms are AI uh conformant or Kubernetes AI

conformant. But these are the six factors driving it. Of course the hardware accelerators uh which pull up your GPU or pull up your uh hyper scalers you need to ensure that they are

uh of course conformant your operators which are helping you interact interact with uh different systems scheduling you need to ensure while you are scheduling one resource at a particular time again

it's conformant and the last three points security uh as I spoke about or as Satyam spoke about uh we are moving towards the the dora ometrices in uh Europe, the CVS and the security audits

have become pretty important and then the observability side of things. I'm not sure how many of you folks are using open telemetry or any other observability tools but the the way uh

um a Kubernetes driven AI platform is seen is that you need to ensure that you are using the right tooling which I mean has the the right audit is perhaps CNCF graduated because it goes through

multiple audits and then drives your platform performance of course. So these are the three pillars of opensource AI today. I mean we of course talk about agents which is the last

stage but let's start from the beginning which is training your models and as you can see PyTorch has already has around an 80% share of training on hugging face but training your models is nothing but

ensuring that you have the right data in place. You are able to develop your models with the right data sets and then you move on to the inference side of things. inferencing is nothing but

ensuring that you are having the live data training on a model that is already trained and that is where the idea of LLMD VLM uh AI bricks uh comes into place. will take a look at the couple of

projects and then of course agents that's the the last step where you have the agents in place they're interacting with your systems they are doing the uh activities or tasks you want them to do

it can be node selection it can be identifying the memory it can be interacting with an MCP server so these are the three pillars of open source AI today that are majorly driving the AI

journey towards uh you know your cloudnative ecosystem and here is an example of an inferencing uh tool which is AI bricks. uh of course it's uh now becoming a part of the CNCF but it's an

open-source initiative which you know drove the idea of geni inference infrastructure and uh it's it's a very popular tool I hope you are able to read about it once uh I mean you leave the

session and similarly there's LLMD again it's based on a distributed infrastructure it uses the I mean it uses Kubernetes inference gateway and VLM together to build build the

distributed inference uh uh ecosystem which of course has an aware routing a disagregated serving and KV cache but these are two popular inference tooling out there that are driving the

cloudnative plus AI native ecosystem together and then how is Kubernetes driving inferencing I mean what has the Kubernetes ecosystem or the Kubernetes

special interest groups done to ensure that uh It's it's easier to allocate your resources. It is easier to understand what kind of resources a particular infrastructure or a

Kubernetes platform wants. And that is where we are live with Kubernetes 1.35 which went into G recently. But the dynamic resource allocation similar to like say

a dynamic uh uh dynamic volume provisioning which is in the storage part of things helps you allocate your resources uh in the right way helps you allocate your hardware accelerators and

it's already in G with 1.34 and 1.35 so make sure you are able to try it out the the contributors again are from Nvidia Kevin being a good friend of mine so let's talk tooling people who are using

platform platforms. Uh let's let's talk tooling. Let's talk a little bit of platform engineering. And we'll start with my idea of platform engineering or my idea of how platforms look like. This

is an example of a five-step platform that I have built. It's built on five simple steps on how you can start platform engineering. And then it has the substeps. Of course, you start with

the developer experience. You need to ensure that the developers are getting the right portal or the right standardized tooling. And developers don't want to learn code. I'm not sure

how many of you here are developers in the room. But you you know that beyond development, you're doing everything else. You're not just writing code. You're asked to do integration testing.

You're asked to do uh I mean you're asked to do chaos engineering, resilience engineering. you're asked to learn the whole CNCF landscape which I myself use the microscope to zoom in and

identify all the tooling. So developers want to go beyond learning new tooling and infrastructure and that is where the developer experience comes into play and backstage has been a very

prominent opensource tool but you can see the options and then you move on to the security identifying the CVS mitigating them um I mean your software supply chain assurance putting the right

policies in place with OPA or Kyverno and then comes the foundation of your platform which is your CI/CD which is your infrastructurees code your man manage ing your APIs and I believe I

mean Orgo has been one of the most popular tools driving the GitHub side of things but again you see Kong for the API management you see feature becoming a very popular feature flagging tool and

feature flags is a very important aspect again your applications are dynamic you need a particular feature so that creates the foundation of a platform and then comes resilience engineering of

course managing your incidents through incident management chaos engineering your integration testing, your software reliability management. And lastly, it's your uh cost cloud cost management and

the insights and the observability part where perhaps you're using data dog or uh elastic search or open search right now with the open source ecosystem becoming robust in the logging side of

things and then open telemetry of course for the the the aspects of monitoring, logging and tracing. So this is how I see the platform of today and how the platform engineering side of things are

driven. But we'll talk about certain tooling which drives the AI native platform engineering. The f first tool that I have taken is KSGPT. I'm sure many of you know about it. It's a

debugging tool. Uh once things go wrong in your system or there's something wrong in your system, you need to go through the logs and that's a hassleful process. and K test GPT acts as an LLM

basically powered by the your CLI and ensures that you are able to debug anything going wrong in your Kubernetes uh environment and it's it's basically using Genai to analyze your cluster

state your cluster provisioning and remediation suggestions of course the second tool is K agent it acts uh as an agent built on a Kubernetes native framework and it is a very popular tool

ble to orchestrate different agents in your Kubernetes ecosystem. You can build, you can deploy, you can manage your AI agents in Kubernetes. And this is how the architecture looks like. This

is the second tool I believe pretty vital for your platform foundation. The third tool is Kittops. I'm sure many of you who are utilizing uh containers or uh are aware a aware of the OCI uh

artifactory are aware that on the OCI side of things it's more about the Docker runtime but Kittops has made it easier by packaging all your DevOps practices as an a IML model and this is

a very popular tool today. Uh a lot of my folks even at Cloud Foundry are utilizing this tool. So you can standardize how you package your a IML workloads and then deploy them using

kittops cubeflow and kserve. Kerve of course is on the production side of things. I will just talk about cubeflow so that I'll allow bhat to get some time and talking

about tooling and platform engineering how you deploy it. So CubeFlow of course while you are uh I mean developing or deploying your AI model in the in production it goes through a

developmental phase where again you are utilizing a lot of tools you're hosting you know GPUs you're hosting your A IML workloads on say AWS or Azure and then you're using Kubernetes as the OS or the

orchestrator but there has to be a workflow between the interaction between the clouds and the Kubernetes uh operating system in itself. self and that is where CubeFlow comes in. It acts

as a workflow and it helps you build your AI platforms on top of CubeFlow which ensures that there's a simpler interaction not just in your developmental phase but also in your

production phase making tools extensible modular and scalable. So this is my idea of an AIdriven platform. I spoke about platform engineering but these are some tools that are driving the AIdriven

platform of today. You can start with an AIdriven developer portal. I have seen Nebius it's an enterprise tool but a very popular and a very secure one. Again chain guard and saleoint are doing

a lot of things around AI security which which you can check out. QAI I thought is one of the upcoming tools or the growing tools that is built that is not just allowing agentic Kubernetes but

it's also allowing agents multiple agents run on a Kubernetes ecosystem or a cluster there's GitLab of course driving AI for software delivery harness and then the tools that I spoke about

and eventually it's your AI sur which is helping you with the resiliency aspect of it and uh cube cost cast ai which are which are very popular cost optimization tools driving the cloud cost management

side of things. So this is what an MCP server looks like for a cloudnative tool. You can see MCP servers basically act as USBs for different tooling ensuring that you have

a standardized approach. You are able to interact with each and every aspect of your tool. I've seen MCP servers for each and every cloud native tool out there. But that's what is simplifying

tooling for you. it was pretty hard to use certain tooling in the cloud native ecosystem but MCP servers have ensured that you're able to interact with different components of the tool. So

these are some stats on the AI infrastructure explosion and how things have moved ahead and hopefully we are going to see 75% of the cloudnative engineers being AI IML engineers in the

next couple of years and perhaps if we have an AI summit in a couple of years I'll come back to deliver that talk but this I'll allow Bat to take over and Bat to talk about the AI product side of

things and how uh you can build the platform engineering aspect using an an AI workflow. All right, thanks Prby. Thanks. So yeah, that was a lot of information, right? Um

I want to quickly go through this and then sum up so that we can move on to the next phase, right? Um the challenges the challenges that are primary involved in um coming up with the entire AI

infrastructure workflow is that it can take weeks to properly set up uh do things manually which is again a real pain because uh to work with Nvidia drivers if any of you have done that

you'll know the pain uh for us to set up everything from scratch uh is one of the biggest challenges right now Right? And so this eats into the development life cycle wherein you want to focus on your

building the AI apps and not building the platform but eventually you'll uh land on this. Right? [snorts] So yeah before this um to sum up what what we're trying to like why are we here? So what

we're trying to say is the enduser experience is something that a lot of AI models are focusing on. Every day we have a new model. Every day models are getting better and better in the things

that are doing and then specialization is taking place but what about the platform side of things what about the things that are powering the backend side of things right so the

infrastructure of AI is what we want to talk about and in that journey we saw the challenges from the developers perspective from the platform engineering perspective and then the

whole new world of cloudnative engineering there's like too much information too many things to catch up on um you know in in this open source world.

So the last bit that Pritri talked about the five steps in making a you know resilient future ready AI platform is what one such open-source project called cordin focuses on. Um

the the difference is in the composable nature. So the approach taken to build this platform lies on how to make it composable. why composable platform engineering is so

important. So think about this end user workflow right you have your development team you have your QA you have your you know chaos engineering team and you have your devops team each team requires a

different um set of requirements for the platform to come up if you don't make it composable from a platform engineering perspective then you'll sit there trying to deliver custom solutions for each

team which is just not very good optimal engineering. So making it composable what that gives us is for QA team let's say they need you know a 10 node cluster all you need to do is change the

configuration for development team they need a quick test cluster of four nodes you can do that QA team chaos engineering probably needs uh you know four node distributed across clouds so

that we can test the real you know stress testing and all that that could be easily configured as well. So the composible nature of the system becomes extremely important. Right? So I'm not

going to spend too much time on this because I want to show you in real time what these means. But I think this is already pretty much talked about the common control plane

being Kubernetes is really the key over here. Right. [snorts] Yeah. So I think this gives us a lot of information. So the approach that uh cordant has taken is uh relying on the upstream

open-source projects and separating this whole platform engineering problem into essentially three parts. One is the cluster management, second is the state management and third is the

observability part. So observability part is pretty straightforward. No matter what kind of a platform you build, if you don't have eyes and ears, there's really not much we can do,

right? So using open-source tools such as Prometheus, Graphfana, open cost, open telemetry and all these things bundled into a platform. Right? Now comes the other two bits. So there's

cluster management and there's state management. [snorts] So it's essentially the two mirror images of platform engineering. While this talks about the day zero things of stuff, this talks

about day two things of stuff. So for cluster management, we are utilizing the upstream uh Kubernetes project called as cluster API. If you guys have heard of Cappy that is the standardized way to

provision clusters right. So when this was standardized and uh you know a structure was formed around it all the other cloud providers too agreed that right this is the way to do it and then

for example if I take AWS this cluster API provider for AWS and so on and so forth for Azure for GCP for OpenStack for bare metal and so on right so we're using that now for state management what

I'm talking about here is that let's say you do have your cluster now what now we need to deploy applications Right? For the people to deploy applications, you need certain tooling in place. One

example I can give you is about ingress. So everybody uses ingress. No matter what kind of application you build, you need networking in place that could be handled by state management. Right. In

the interest of time, I'm going to skip ahead. Yeah. So in in in the service management um you know aspect we've built an open system where everything is handled via catalog wherein we can

basically install the services that we need in order to manage the platform that we want. I'm going to show you a live example hopefully and uh talk about that in depth you know rather than uh

through the slides. Um just before that live demo I want to focus on um cordant AI by explaining what infrastructure as a service platform is right. So the

technological stack that we want to build on is using infrastructure as a service. So what happens is the bottommost layer we have the bare metal service. So like I said because Cappy is

so extensible and works you know plays nicely with all the platforms out there we can either think about this being your AWS or this being your Azure or this being your actual bare metal

private cloud. On top of this we're going to install the operating system of your choice. Right now on top of that we'll have the GPU provisioning. What happens in GPU provisioning is we'll end

up using the infrastructures like Nvidia or you know AMD. Of course Nvidia is the most popular one but then some use cases uh we have seen wherein AMD is also um you know requested for. Now on top of

this so while this forms the infrastructure layer right now comes the software engineering or tooling layer. This is where the core of coordin comes into picture where utilizing the

underlying infrastructure we will deploy Kubernetes clusters on top. Now finally um if again the example I'm going to show you in the live demo is of Nvidia as well. So just talking about Nvidia uh

let's say there are GPU operators to be installed right that sits on top and so this is composable again. So as you can see my point like I'm trying to emphasize that each layer in this is

like choose uh you know option that we can choose and plugandplay infrastructure. Now with Nvidia as an example again uh I showed you this earlier wherein each

layer is building on top of you know one another while the bottommost layer being the infrastructure layer and the topmost layer being the actual application layer. Now we are focusing on the middle

part here which is where the Kubernetes clusters uh are you know uh basically uh organized and then on top of the Kubernetes clusters the services are deployed. So as you can see the

operating system um which contains the container runtime and then the container management with the GPU as well is part of this compute layer. So yeah

before I I show that uh two things we should know about cordant right everything is templating system so the emphasis on infrastructure as code is something that's avoided here so I'm

sure you guys must have used let's say I don't know anible terraform crossplane all these tools right so all this comes into the category of infrastructure as code so while they're really extensible

and powerful It does bring in the additional requirement of you [snorts] know external tooling and the maintenance burden that you have to do with that you

know some of the practical challenges are finding the right kind of people who are experts in those particular technologies which is something that lot of companies struggle with because again

these are niche that's something that cordant avoids as well again because it literally just relies on helmcharts so as long as you're aware of yaml and helmcharts and cubectl that is all you

need. [snorts] So the day zero cluster templates is what you need and as you can see every uh cloud has a template that is predefined and pre-built and you can choose the configuration that you

want based on the templates that we have and then the services exactly mirror them wherein you can choose the services by the templates based on the kind of applications we need. Right? [snorts]

So here's an example of cluster deployment. Actually I'm going to skip this because I want to show it to you on the on the real thing as well. Right. So um yeah Satyam if you could just uh open

the you know application. Okay. While he's opening that, let me talk about the open-source components that was there in the previous slide. [snorts] So in the container runtime, uh

we use something called K0S. So if you guys have played around with Kind, K3S, K3D and all these, right? So these are basically Kubernetes distributions and K0 is yet another such Kubernetes

distribution, right? So K0S is the underlying container runtime. On top of that uh we are using the cappy and all the cloud providers out there. [snorts] Now in conjunction to that the state

management is managed by sweltos. So sweltos is another open source project uh you know which is used extensively. It was really nicely paired with argod and and uh similar stuff before but now

the githops is nicely integrated uh into this as well. Right. Yeah. So this is what I want to show. uh if you just scroll up a little bit. So here's the definition of how your

entire configuration for a AI ready Kubernetes cluster look like looks like. Right? So the first part of the YAML is defining the cluster spec and the second part of the YAML is defining the service

spec and cluster spec uh for this example I've chosen Azure to do it and as you can see we're just choosing the template and then we're specifying what uh flavor and image we need for control

plane and what flavor and image we need for worker and the critical part over here is that for the worker nodes we're choosing a VM that has a uh you know Tesla T4 Nvidia GPU available

So this is again one of the examples of composibility I'm talking about. If you want to swap out then we can just swap this out with another flavor for a bigger GPU. Let's say an H100 or an A100

or so on. [snorts] And if you scroll down this is where the services are mentioned. So you just need to mention the service the Nvidia GPU operator and then the STO services manager and KSER

and K native that uh we mentioned earlier right. [snorts] And if you go to the other tab. Yeah. And uh if you can just run the script. So the example that I've taken to

showcase here is a AI based application which uses translation from one language to another. So I think we're running out of time. Essentially what what I wanted to talk about was showing that the

entire stack was built like I would say about 15 to 20 minutes starting from the provisioning of the Kubernetes cluster where it goes to Azure spawns the VMs and you know all the networking

components and storage components and the GPUs and then installing these services on top which is the Nvidia GPU operator and all the other things that I um you know uh showed you and then

finally running this application on it right I don't think we'll hear because there's no mic connected there but essentially I had you know offline AI models running wherein it's translating

you know a welcome message from English to Hindi [snorts] and the way the application is built is also that we can yeah I think the audio is being played right now but yeah basically we can uh

swap out the AI models also that are being used to to choose the models that we That that's the thing I want to show. Can we go back to the PPT again? &gt;&gt; All right. So one limitation that I

noticed and something that India is really working on is the need for uh AI native sorry India native AI work. Right. For example, the voice that I wanted to show you is uh is that we are

lacking in India's specific AI models compared to the models that are there in the in the world. Right? So this is something that we can take away from the session. Um you know the emphasis on

India native models. So what's the future looking like? I I think I'll leave you with this single slide wherein we've already built the initial infrastructure Kubernetes layer and

we've built the uh you know AI GPU layer and finally the future is looking into integrated MCPS right so wherein on top of all this now my cluster and application should be able to talk to

the various MCP servers and also um be autonomous in that nature. So yeah, uh I think I'll leave with that. We can connect later for Q&amp;A and talk more. Yeah. Thank you so much for this

opportunity. Thank you all. [applause]
