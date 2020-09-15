import {CaseSections, IntroSection, DesignProcess} from "./case-studies";


export const INTROS: IntroSection[] = [
  {
    id: 1,
    title: "Robot Nannys for Sheltering in Place",
    description: "How might we design tools to help working parents manage their work" +
      " vs. home lives while they shelter in place during the COVID-19 Pandemic?",
    imgUrl: './assets/img/frank-intro.png',
    problemTitle: "PROBLEM SPACE",
    problemDescrip: "Many towns around the country have closed schools, parks, offices and so much more due to the" +
      " COVID-19 Global Pandemic. For many working parents, this means they are not only managing a shift to" +
      " remote work, but also having to provide childcare and homeschooling all at the same time.",
  },
  {
    id: 2,
    title: "Group Scheduling App",
    description: "How can groups of people digitally schedule meeting times in a way that " +
      "is easy, honest and time-efficient?",
    imgUrl: "",
    problemTitle: "",
    problemDescrip: "",
  },
]

export const CRIT: CaseSections[] = [
  {
    sectionTitle: "OVERVIEW",
    sectionImg: "./assets/img/crit-overview.png",
    sectionDescrip: "This design exercise was the final project in a Computational Media course I took at UC " +
      "Santa Cruz. We worked on it in the Spring of 2020, just as shutdowns were beginning to take place across " +
      "the country. As a group we felt overwhelmed by the state of the world, and wanted to approach this project " +
      "in a playful, provocative, and imaginative way to combat some of it’s inherent heaviness. For this reason," +
      " we decided to approach our problem space through Critical Design, a sub-space in Design Thinking that" +
      " doesn’t necessarily yield concrete solutions, but rather provocative designs that spark broad, critical " +
      "discussions around complex social issues.",
  },
  {
    sectionTitle: "DESIGN PROCESS",
    sectionImg: "./assets/img/crit-process.png",
    sectionDescrip: "We followed Stanford’s School of Design’s 5-Step approach (shown above) in our design process.",
  }
]

export const CRITPROCESS: DesignProcess[] = [
  {
    title: "Empathize ",
    subtitle: " | User Research",
    description: "Each team member interviewed a working parent to help us further understand their needs." +
      " We asked questions about their day-to-day lives, how their work and home lives have changed through" +
      " COVID, and most importantly, how they are feeling about all of it. We found that all of our users " +
      "expressed a shared concern with how to manage their time while working remotely and also caring for " +
      "their children.  Some of the key factors that were holding extra stress for our users were their parental" +
      " duties, relationships with their partners, and a lack of time for themselves. ",
    img: "",
  },
  {
    title: "Define ",
    subtitle: " | Narrowing Scope",
    description: "Based on our user-interviews, it was clear that our users needed a toolset to help them" +
      " better manage the many tasks that come with being both a worker and a parent. To further narrow our" +
      " problem-space, we decided to focus specifically on child-care and the challenges that come with it " +
      "for working parents.",
    img: "",
  },
  {
    title: "Ideate ",
    subtitle: " | All Ideas Are Worthy",
    description: "As a group, we approached our ideation phase with a “yes and” mindset. We knew that " +
      "we would find our best idea when we accepted all as worthy, no matter how whacky. We practiced quick" +
      " brainstorming so as not to get stuck or settled too early. Ultimately, we decided to explore the idea" +
      " of a Robot Nanny that could minimize some of the childcare workload and stress for working parents.",
    img: "",
  },
  {
    title: "Prototype ",
    subtitle: " | Sketches, Wireframes & Lofidelity Mockups",
    description: "We first sketched our Robot Nanny on paper, and then created digital versions of them on Figma. " +
      "We also started creating Lo-Fi mockups of a corresponding tablet app for the Robot.",
    img: "./assets/img/crit-proto.png",
  },
  {
    title: "Test ",
    subtitle: " | What Works, What Doesn’t?",
    description: "During this stage, we ran informal interviews with target users to get feedback on our designs." +
      " Because this was a critical design exercise, we were most concerned with big-picture questions. We wanted to" +
      " know if this design would have a direct impact on our users’ lives, if it could alleviate stress, and also" +
      " if there were any unintended impacts of it. One user expressed concern that their child might not immediately" +
      " like or trust a Robot to take care of them. All users expressed unanimous excitement for the general idea of" +
      " a Robot Nanny. ",
    img: "",
  },
]

export const CRITFINAL: CaseSections[] = [
  {
    sectionTitle: "FINAL DESIGN",
    sectionImg: "./assets/img/crit-final.png",
    sectionDescrip: "With all of our research, prototyping, and feedback in mind, we created Frank, " +
      "The Robot Nanny. We used Figma to finalize our illustrations, animations and ultimately create our video."
  }
]

export const CRITREFLECT: CaseSections[] = [
  {
   sectionTitle: "REFLECTIONS",
   sectionImg: "",
   sectionDescrip: "While I’m proud of our final design, I’m left with some questions and concerns" +
     " that must be addressed. Particularly, I want to focus on some implications of our design regarding accessibility" +
     " and privacy, as noted below."
  }
]

export const CRITREFLECTSECTIONS: CaseSections[] = [
  {
    sectionTitle: "Cost and Accesibility. Who is Frank For?",
    sectionImg: "",
    sectionDescrip: "Realistically, how might it be possible for FRANK to be affordable and still include" +
      " all its high-tech features? This should not be a luxury only available to the rich. I acknowledge" +
      " that in its current state, the families that need our design the most may not be the ones who can afford it." +
      " This is a major concern."
  },
  {
    sectionTitle: "Privacy Concerns",
    sectionImg: "",
    sectionDescrip: "I also question privacy issues FRANK may raise. Could a personal robot intensify the dangers " +
      "of the surveillance-state that are already hyper-present in our society?"
  },
  {
    sectionTitle: "Final Thoughts",
    sectionImg: "",
    sectionDescrip: "With all of this in mind, this was a very valuable exercise in critical design that stretched " +
      "me to think about how to imagine futures rather than just solve for them. I hope this critical and playful " +
      "design can serve as an initial exploration in the intersections of sheltering-in-place, work, and child-care."
  },
]
