module.exports = {
  email: 'christianjbolus@gmail.com',

  resume:
    'https://drive.google.com/file/d/1EKgM_wVM-yNtksujrNpQMe5cnDGQxavg/view?usp=sharing',

  skills: [
    'JavaScript',
    'TypeScript',
    'Ruby',
    'HTML/CSS',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'Ruby on Rails',
    'Mongo DB',
    'PostgreSQL',
    'GraphQL',
    'Git',
  ],

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/christianjbolus',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/christianbolus/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ChristianJBolus',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/christianbolus/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    // {
    //   name: 'Skills',
    //   url: '/#skills',
    // },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  projects: [
    {
      name: 'Chatter',
      description:
        'Chatter is a full-stack micro blogging application with user auth that allows users to post 280 character “Chats.” A user can edit their Chats and respond to another user’s Chats. Includes form validation on register/login forms. Built with a Ruby on Rails/PostgreSQL backend and a React/Next.js frontend.',
      image: {
        path: 'chatter_main.png',
        alt: "Chatter's main mobile view.",
      },
      tech: ['React', 'Next.js', 'Ruby', 'Ruby on Rails', 'PostgreSQL'],
      url: 'https://chatter-social.netlify.app/',
      github: 'https://github.com/christianjbolus/chatter',
      order: 'even',
    },
    {
      name: 'My Table',
      description:
        'My Table is a full-stack application with user auth that allows users to Create, Read, Update and Delete their favorites recipes. It utilizes a custom authentication server built with Express and TypeScript and uses Airtable as the database. The frontend was built using React.',
      image: {
        path: 'my_table.png',
        alt: "My Table's main mobile view.",
      },
      tech: ['React', 'Node.js', 'Express', 'TypeScript'],
      url: 'https://my-table.netlify.app/',
      github: 'https://github.com/christianjbolus/my_table',
      order: 'odd',
    },
    {
      name: 'Neuze',
      description:
        'Neuze is a frontend application utilizing the NY Times API that allows users to search for articles, view the details of an article using a custom built modal and save articles to their local storage for later viewing. Includes form validation on the search bar. Built using HTML, CSS and JavaScript.',
      image: {
        path: 'neuze.png',
        alt: "Neuze's main mobile view.",
      },
      tech: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://christianjbolus.github.io/neuze/',
      github: 'https://github.com/christianjbolus/neuze',
      order: 'even',
    },
  ],

  srConfig: {
    delay: 300,
    distance: '40px',
    duration: 600,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: { x: 0, y: 0, z: 0 },
    scale: 1,
    cleanup: false,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  },
};
