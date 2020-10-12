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
    img: 'woofer.png',
    title: 'woofer',
    info:
      "Woofer is a full-stack web application using the (PERN) Stack. It's a twitter-like application that allows you to post woofs (tweets), see woof details such as comments and likes, get notifications, see user profile, edit profile, like and unlike, comment, and do the basic CRUD operations. Used React to make the front end. Built backend with Node and Express where we have a restful API server. Created session management with authenticated and protected routes using Redis and JWT. Stored the application data securely in the PostgreSQL database. Used Docker and Docker Compose to make development processes easier.Integrated Nexmo API to send SMS whenever someone register.",
    info2:
      'Signup / Login - Notifications 🔔 - View Profile - Upload Photo - Edit Profile - New Woof (tweet) - Like / UnLike - Comment - View Woof.',
    url: 'https://woofer-official.herokuapp.com/',
    repo: 'https://github.com/silvertechguy/woofer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shipped.png',
    title: 'shipped',
    info:
      'Shipped is an eCommerce platform built with MERN stack and Redux. Used React and Bootstrap to make the front end. Built the backend API server architecture with Node and Express. Added admin product and order management. Stored the application data in the NoSQL MongoDB database. Integrated PayPal for the payment method process.',
    info2:
      'Full-featured shopping cart - Product reviews and ratings - Top products carousel- Product pagination - Product search feature - User profile with orders - Admin product management - Admin user management - Admin Order details page - Mark orders as delivered option - Checkout process (shipping, payment method, etc) - PayPal / credit card integration - Database seeder (products & users).',
    url: 'https://shipped-official.herokuapp.com/',
    repo: 'https://github.com/silvertechguy/shipped', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ppass.png',
    title: 'ppass',
    info:
      'ppass is a secure way for you to check if your password has ever been hacked in a data breach. ppass Password checker built with Node, Express, TypeScript, React, and Redis.',
    info2:
      "Passwords get leaked all the time. We've heard about data breaches. Facebook has been hacked with data breaches. You do not want to send your password over the internet because it's being transferred to a server somewhere in the world. It's traveling through the internet wires and somebody could intercept it. haveibeenpwned.com gives us a password API to check our password if it's ever been hacked. I do not want to send my password to this API. The best security is to trust no one. Here is what I did. I sent a sha1 hashed version of my password. I only give him the first 5 characters of my hashed password. The API is going to look in its database of all these passwords and pick all the hashed passwords that have the first 5 characters that match our password. With the response data, I can now check my full hash to see if the password has ever been hacked. The API is never going to know our full hashed password and therefore never be able to guess our password.",
    url: 'https://ppass-official.herokuapp.com/',
    repo: 'https://github.com/silvertechguy/ppass', // if no repo, the button will not show up
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
      url: 'https://linkedin.com/in/silvertechguy',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/silvertechyguy',
    },
  ],
};
