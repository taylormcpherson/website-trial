import { WorkCard } from "./work-card";

export const CARDS: WorkCard[] = [
  { id: 1,
    title: 'MOBILE / WEB',
    description: 'UI / UX Designer',
    imgUrl: 'url(./assets/img/card-1.png)',
    routerLink: "/group-scheduling",
  },
  { id: 2,
    title: 'CRITICAL DESIGN',
    description: 'Researcher, Visual Designer',
    imgUrl: 'url(./assets/img/card-3.png)',
    routerLink: "/critical-design"
  },
  { id: 3,
    title: 'USER RESEARCH',
    description: 'UX Researcher, Writer',
    imgUrl: 'url(./assets/img/card-2.png)',
    routerLink: "/apprenticeship-learning",
  },
  { id: 4,
    title: 'PLAYGROUND',
    description: 'Side Projects',
    imgUrl: 'url(./assets/img/card-4.png)',
    routerLink: "/side-projects",
  },

];
