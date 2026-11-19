module.exports = {
  email: 'christianjbolus@gmail.com',

  resume: 'Christian_Bolus_Software_Engineer.pdf',

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
    // Hidden until the Selected Work section is ready.
    // {
    //   name: 'Work',
    //   url: '/#work',
    // },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  // Text in [square brackets] renders as a highlighted placeholder.
  // Replace every one before deploying.
  caseStudies: [
    {
      company: 'Tiga AI',
      title: 'Spotting the agent-first shift',
      sections: [
        {
          label: 'The problem',
          text: '[What the product looked like before the shift, and what wasn\'t working.]',
        },
        {
          label: 'What I noticed',
          text: 'Every AI sales tool was converging on the same product: a screen with a text box in the middle. [Why that was the wrong product, in your words.]',
        },
        {
          label: 'What we did',
          text: 'I brought this to the founders, and it became the company\'s agent-first direction: agents with reusable skills that run on a schedule, recover from failures, and stay within spend limits.',
        },
        {
          label: 'Outcome',
          text: '[What changed: adoption, how customers use it, or what it made possible.]',
        },
      ],
      tech: ['LLM agents', 'Go', 'PostgreSQL', 'Redis'],
    },
    {
      company: 'Tiga AI',
      title: 'Turning SEC filings into sales signals',
      sections: [
        {
          label: 'The problem',
          text: 'A customer wanted to trigger outreach based on what companies disclose in their 10-K and 10-Q filings. These documents are long, unstructured, and full of the details that matter.',
        },
        {
          label: 'What I did',
          text: 'I scoped the feature with the customer, designed the UI, and built the pipeline: fetching filings, splitting them into chunks, storing vector embeddings, and using retrieval-augmented generation (RAG) to analyze each filing.',
        },
        {
          label: 'Outcome',
          text: 'Customers ran the signals and found the output useful. [Add a number: customers using it, filings processed, or a typical use case.]',
        },
      ],
      tech: ['RAG', 'Embeddings', 'Go', 'Vue'],
    },
    {
      company: 'Triblio',
      title: 'Making intent data visible',
      sections: [
        {
          label: 'The problem',
          text: 'Triblio collected large volumes of intent data from several providers. [What customers couldn\'t do with it before the dashboard.]',
        },
        {
          label: 'What I did',
          text: 'I built a customer-facing analytics dashboard with several views of intent, including topic-frequency trends and a world heat map that showed intent by country. Behind it, I worked on the ETL pipelines that ingested and normalized provider data, and kept the GPU classification pipeline running, scaling AWS GPU capacity when jobs backed up.',
        },
        {
          label: 'Outcome',
          text: '[Anything you remember: adoption, use in sales demos, or what it replaced.]',
        },
      ],
      tech: ['ETL', 'Data visualization', 'AWS'],
    },
  ],

  // Old bootcamp projects. Not shown on the page; kept for the Projects section.
  projects: [
    {
      name: 'Chatter',
      description:
        'Chatter is a full-stack micro blogging application with user auth that allows users to post 280 character “Chats.” A user can edit their Chats and respond to another user’s Chats. Includes form validation on register/login forms. Built with a Ruby on Rails/PostgreSQL backend and a React/Next.js frontend.',
      image: {
        path: 'chatter_main.png',
        alt: "Chatter's main mobile view.",
      },
      tech: ['React', 'Next.js', 'Ruby on Rails', 'PostgreSQL'],
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
    delay: 200,
    distance: '20px',
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
