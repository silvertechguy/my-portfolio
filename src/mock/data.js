import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ali Fadda | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Ali Fadda official website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Ali',
  subtitle: 'I like to make stuff with code',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Web Developer with enthusiasm and focus on Backend Development and Scripting.',
  paragraphTwo:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.',
  paragraphThree: 'Feel free to contact me via email at any time',
  resume: 'https://bit.ly/alifaddaresume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'woofer',
    info:
      "Woofer is a full-stack web application using the (PERN) Stack. It's a twitter-like application that allows you to post woofs (tweets), see woof details such as comments and likes, get notifications, see user profile, edit profile, like and unlike, comment, and do the basic CRUD operations. Used React to make the front end. Built backend with Node and Express where we have a restful API server. Created session management with authenticated and protected routes using Redis and JWT. Stored the application data securely in the PostgreSQL database. Used Docker and Docker Compose to make development processes easier.",
    info2: '',
    url: 'https://woofer-official.herokuapp.com/',
    repo: 'https://github.com/silvertechguy/woofer', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's build together!",
  email: 'silvertechguy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/silvertechguy',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https:linkedin.com/in/silvertechguy',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/silvertechyguy',
    },
  ],
};
