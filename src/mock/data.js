import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christian Dahlberg | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio. Enjoy your stay.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Christian Dahlberg',
  subtitle: 'Information Systems graduate',
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.png',
  paragraphOne:
    'I am a software developer graduating top of my class from Lund University, with a BSc degree in Information Systems.',
  paragraphTwo:
    'I write code in Python, Java, C# (.NET), C++, C, JavaScript and others, and I am comfortable in Linux and Windows operating systems. I also have AWS certification.',
  paragraphThree:
    ' ',
  resume: 'https://drive.google.com/file/d/1QNVCmR-KXT-6oXHaOruUOLSZYj8OCp_8/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.JPG',
    title: 'Veronicakack.se',
    info:
      'My first ever commerical website done with little to no experience on web developing. Website is in Swedish.',
    info2:
      'Commercial informative website for psychotherapy as a service. Backend written in Python using Django for educational reasons.',
    url: 'https://veronicakack.se/',
    repo: 'https://github.com/christiandahlberg/veronicakackse-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'TBD',
    info: 'Upcoming projects will appear here...',
    info2: ' ',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to talk to me? Please reach out!',
  btn: "Let's talk!",
  email: 'christiandahlb@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/cdahlb',
    },
    // {
    //  id: nanoid(),
    //  name: 'codepen',
    //  url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dahlbergchristian/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/christiandahlberg',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
