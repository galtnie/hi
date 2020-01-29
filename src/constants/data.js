import homeDesktopImg from "images/first_main_desktop.svg";

import devListSprite from "../images/dev_list_sprite.svg";

import mediaSprite from "../images/media_sprite_desktop.png";

import angular from "../images/angular.png";
import vue from "../images/vue.png";
import react from "../images/react.png";
import next from "../images/next.png";
import node from "../images/node.png";
import nuxt from "../images/nuxt.png";

import clutch from "../images/clutch.svg";
import upwork from "../images/upwork.png";
import goodfirms from "../images/goodfirms.png";
import themanifest from "../images/themanifest.png";
import youteam from "../images/youteam.png";

export const logo = "HI";
export const navigationList = [
  {
    name: "Services",
    link: "/services"
  },
  {
    name: "Technologies",
    link: "/technologies"
  },
  {
    name: "Portfolio",
    link: "/portfolio"
  },
  {
    name: "Company",
    link: "/company"
  },
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Contact us",
    link: "/contacts"
  }
];
// import homeMobileImg from "images/first_main_mobile.svg";

export const upperContainertexts = {
  home: {
    text: "Let us build an app for you while you are enjoying the coffee.",
    button: "Start building apps",
    image: homeDesktopImg
  },
  services: {
    title: "Complete service package",
    text:
      "We offer web and hybrid application development service along with the full pack of supporting services. Quality assurance, project management and UI/UX design are fully integrated into our workflow to create successful products."
  },
  technologies: {
    title: "Fresh ideas and technical innovations in application development",
    text:
      "Advanced and cutting edge technologies for developing web and mobile applications, allow you to implement quality products on time"
  },
  portfolio: {
    title: "Our projects",
    text:
      "The applications we created ride the wave of modern trends in web services and utilize components required by any business that wants to take the advantages of global web market."
  },
  company: {
    title: "We realize your ideas",
    text:
      "That’s not the secret, the project fully depends on the team who works on it. 2muchcoffee is obsessed with Angular here. We develop custom solutions for niche target enterprises and help your business to expand."
  }
};

export const projectKickoff = {
  title: "Let's kickoff your project",
  text:
    "We are happy to see you on our website. Just let us know if we can start making something great together."
};

export const footerNavigationOptions = [
  [
    { name: "Services", link: "/services" },
    { name: "Web Development", link: "/services" },
    { name: "Mobile Development", link: "/services" },
    { name: "UI/UX Design", link: "/services" },
    { name: "Solutions for Startups", link: "/services" },
    { name: "Code Review", link: "/services" }
  ],

  [
    { name: "Technologies", link: "/technologies" },
    { name: "Angular", link: "/technologies" },
    { name: "Vue", link: "/technologies" },
    { name: "React", link: "/technologies" },
    { name: "Next.JS", link: "/technologies" },
    { name: "Node.JS", link: "/technologies" },
    { name: "Nuxt", link: "/technologies" }
  ],

  [
    { name: "Portfolio", link: "/portfolio" },
    { name: "Music App", link: "/portfolio" },
    { name: "E-commerce SAAS", link: "/portfolio" },
    { name: "Education Platform", link: "/portfolio" }
  ],

  [{ name: "Contact us", link: "/contacts" }]
];

export const footerExternalLinks = [
  { name: "facebook", path: "/" },
  { name: "linkedin", path: "/" },
  { name: "github", path: "/" },
  { name: "behance", path: "/" },
  { name: "twitter", path: "/" },
  { name: "dribbble", path: "/" },
  { name: "medium", path: "/" }
];

export const ourService = {
  sprite: devListSprite,
  data: [
    {
      title: "Our Service",
      text:
        "We offer the integrated package of development services for the web and mobile usage. We have all the competence and experience to create outstanding products.",
      image: null,
      button: null
    },
    {
      title: "Web Development",
      text:
        "Our tech stack includes the most progressive technologies which are excellent tools to build perfect web applications.",
      service_text:
        "We provide full-stack development services specializing in Angular, React and Node.js for the backend. We always adopt latest stable versions of available frameworks so that our clients receive modern features.",
      image: {
        desktop: {
          backgroundPosition: "-16rem -53.1rem",
          backgroundSize: "52rem",
          height: "31.25rem"
        },
        mobile: {
          backgroundPosition: "-11rem -39.9rem",
          backgroundSize: "39rem",
          height: ""
        }
      },
      button: "Get More Info"
    },
    {
      title: "App Development",
      text:
        "We craft hybrid mobile applications that run on iOS, Android, Windows mobile platforms.",
      service_text: 'We focus on creating the hybrid, native and progressive web applications that run literally on every modern device you can find. React Native and Ionic toolset is what helps us to bring your app to the mobile web.',
      image: {
        desktop: {
          backgroundPosition: "-19.6rem 0rem",
          backgroundSize: "68rem",
          height: "25.625rem"
        },
        mobile: {
          backgroundPosition: "-18rem 0.8rem",
          backgroundSize: "58rem",
          height: ""
        }
      },
      button: "Get More Info"
    },
    {
      title: "UI/UX Design",
      text:
        "Our design primary goal is user experience. We believe design should move with the times and integrate the latest techniques.",
      service_text: 'We make UI/UX design, draw wireframes and create prototypes for applications and websites. The usability and style are what we place at the heart of our approach.',
      image: {
        desktop: {
          backgroundPosition: "-14.6rem -19.5rem",
          backgroundSize: "47rem",
          height: "28.7rem"
        },
        mobile: {
          backgroundPosition: "-13.55em -16rem",
          backgroundSize: "38rem",
          height: ""
        }
      },
      button: "Get More Info"
    },
    {
      title: "Solutions for Startups",
      text:
        "Do you have a bold idea for your online product? Our highly skilled software development team will implement your visionary idea into reality.",
      service_text: 'We provide more than just development for startups. We provide a way to evolve into a successful business with the power of tech solutions. The potential of the startup is our top priority, we developed startup applications for FinTech and Blockchain technology, eCommerce and Retail, Healthcare and Software.',
      image: {
        desktop: {
          backgroundPosition: "-11.9rem -62.7rem",
          backgroundSize: "38rem",
          height: "24.25rem"
        },
        mobile: {
          backgroundPosition: "-9.5rem -50.7rem",
          backgroundSize: "31rem",
          height: ""
        }
      },
      button: "Get More Info"
    }
  ]
};
// import mobileMediaSprite from "../images/media_sprite_mobile.png";

export const projectList = {
  sprite: mediaSprite,
  data: [
    {
      title: "MUSIC APP",
      text:
        "Uber-style service for DJs, musicians and people who enjoy music. Online catalog, streaming service and booking app.",
      image: {
        desktop: {
          backgroundPosition: "-43rem -1rem",
          backgroundSize: "72rem",
          height: "24.25rem"
        },
        mobile: {
          backgroundPosition: "-0.3rem 1rem",
          backgroundSize: "43rem",
          height: ""
        }
      },
      button: "View More",
      scrollEffect: 2
    },
    {
      title: "E-COMMERCE SAAS",
      text:
        "A platform for building social marketplace. Helps to convert social network followers into real sales and has build-in features of product discovery, placing orders and tracking statuses.",
      image: {
        desktop: {
          backgroundPosition: "0rem 0.1rem",
          backgroundSize: "46.5rem",
          height: "19.25rem"
        },
        mobile: {
          backgroundPosition: "-17.3rem 4rem",
          backgroundSize: "36rem",
          height: ""
        }
      },
      button: "View More",
      scrollEffect: 3
    },
    {
      title: "EDUCATION PLATFORM",
      text:
        "An integrated solution for building online courses and getting unique audience. Simple solution for tutors and students to start training and learning.",
      image: {
        desktop: {
          backgroundPosition: "-0.2rem -24rem",
          backgroundSize: "58rem",
          height: "24.7rem"
        },
        mobile: {
          backgroundPosition: "0.45rem -26rem",
          backgroundSize: "50rem",
          height: ""
        }
      },
      button: "View More",
      scrollEffect: 4
    }
  ]
};

export const techsUsed = {
  title: "Technologies we use",
  text:
    "We focus on modern and already proven technologies that bring benefits for projects we create.",
  list: [
    {
      name: "Angular",
      logo: angular
    },
    {
      name: "Vue",
      logo: vue
    },
    {
      name: "React",
      logo: react
    },
    {
      name: "Next.JS",
      logo: next
    },
    {
      name: "Node.JS",
      logo: node
    },
    {
      name: "Nuxt",
      logo: nuxt
    }
  ]
};

export const partners = {
  title: "Our partners",
  text: "We are proud to collaborate with following industry leaders.",
  list: [
    {
      name: "clutch",
      path: "/",
      image: clutch,
      backgroundSize: 7,
      backgroundPosition: "40% 50%"
    },
    {
      name: "upwork",
      path: "/",
      image: upwork,
      backgroundSize: 9.5,
      backgroundPosition: "52% 87%"
    },
    {
      name: "goodfirms",
      path: "/",
      image: goodfirms,
      backgroundSize: 8,
      backgroundPosition: "0.1rem 30%"
    },
    {
      name: "themanifest",
      path: "/",
      image: themanifest,
      backgroundSize: 12,
      backgroundPosition: "50%"
    },
    {
      name: "youteam",
      path: "/",
      image: youteam,
      backgroundSize: 7,
      backgroundPosition: "47% 58%"
    }
  ]
};
