const en = {
  navigation: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    projects: 'Projects',
    contact: 'Contact'
  },
  hero: {
    openOpportunities: 'Open to opportunities',
    heroTitle: 'Full-stack Developer',
    heroSubtitle:
      'I transform ideas into modern, user-centered digital experiences.',
    stackTitle: 'MAIN STACK',
    contactButton: 'Get in touch',
    downloadCV: 'Download CV',
    connectText: 'Connect:',
    linkToCV:
      'https://drive.google.com/file/d/1772THsT12qkUK5rysIVSiaYnxNEMATOt/view?usp=sharing'
  },
  about: {
    aboutTitle: 'About Me',
    aboutDescription:
      "I'm a fullstack developer passionate about transforming ideas into digital solutions that combine performance, usability and real impact.",
    aboutDescription2:
      'My experience ranges from process automation and cloud integrations to creating modern and responsive interfaces, always focusing on scalability and quality.',
    aboutDescription3:
      'I appreciate working in collaborative environments, applying agile methodologies and bringing a practical and creative approach to problem solving.',
    yearsExperience: '2+',
    yearsExperienceLabel: 'Years of experience',
    projectsDelivered: '12+',
    projectsDeliveredLabel: 'Projects delivered',
    keyStrengths: 'Key Strengths',
    performanceValue: 'High Performance',
    descriptionPerformanceValue:
      'Focused on efficiency and continuous optimization to deliver fast, smooth, and scalable experiences.',
    innovationValue: 'Innovation',
    descriptionInnovationValue:
      'Constantly open to exploring new technologies and applying modern practices to enhance delivery quality.',
    problemSolvingValue: 'Problem-Solving',
    descriptionProblemSolvingValue:
      'Analytical and creative mindset to identify challenges, propose effective solutions, and implement them with precision.',
    proactivityValue: 'Proactivity',
    descriptionProactivityValue:
      'Initiative to anticipate needs, take action without waiting for requests, and add value across different project stages.',
    adaptabilityValue: 'Adaptability',
    descriptionAdaptabilityValue:
      'Flexibility to quickly adjust to new demands, scope changes, and diverse technological contexts.'
  },
  experience: {
    experienceTitle: 'Experience',
    listExperience: [
      {
        position: 'Full Stack Developer',
        company: 'Athan Tecnologia',
        period: '2023 - 2025',
        descriptions: [
          'Optimized internal processes and automated workflows, reducing operation time by more than 40%.',
          'Implemented complex integrations with Twilio, AWS SES and internal systems, accelerating fault detection and response.',
          'Developed scalable solutions, serverless APIs and improvements in multichannel service platforms.',
          'Worked on CRM evolution, improving UX, creating new features and producing strategic technical documentation.'
        ],

        type: 'full-time'
      },
      {
        position: 'Full Stack Developer',
        company: 'Freelancer',
        period: '2024 - 2025',
        descriptions: [
          'Complete development of the Better Health project: a full-stack application that optimizes health clinic management. Backend architecture with Node.js and Express, and frontend with Next.js, resulting in an efficient system for appointment scheduling.'
        ],
        type: 'freelance'
      },
      {
        position: 'Front end Developer',
        company: 'Cristal TV',
        period: '2023',
        descriptions: [
          'Acting as a volunteer frontend developer for Cristal TV, delivering solutions with Next.js, TypeScript and SCSS that ensured high performance and usability.'
        ],
        type: 'volunteer'
      }
    ]
  },

  skills: {
    skillsTitle: 'Technical Skills',
    developmentTitle: 'Development',
    technologiesTitle: 'Technologies and Tools',
    methodologiesTitle: 'Methodologies'
  },
  educations: {
    educationTitle: 'Education',
    bachelorDegree: 'Bachelor in Information Systems',
    university: 'Salvador University',
    bachelorPeriod: '07/2022 - 06/2026',
    technicalDegree: 'Technical in Systems Development',
    senai: 'SENAI',
    technicalPeriod: '07/2021 - 12/2022'
  },
  projects: {
    projectsTitle: 'Featured Projects',
    inDevelopment: 'In development',
    completed: 'Completed',
    techLabel: 'TECHNOLOGIES USED',
    viewMoreProjects: 'View more projects',

    listProjetcs: [
      {
        title: 'Better Health',
        description:
          'The system aims to simplify the management of users, doctors and patients, allowing efficient appointment scheduling in health clinics.',
        status: 'In development',
        technologies: ['Next.js 15+', 'TypeScript', 'Node.js', 'SCSS'],
        linkGithub: 'https://github.com/Lucasvalves/better_health',
        linkProject: ''
      },
      {
        title: 'Mini Seller Console',
        description:
          'Console to capture leads and convert them into opportunities. This project uses local JSON data and simulates API latency with setTimeout.',
        status: 'completed',
        technologies: ['React 18+', 'TypeScript', 'TailwindCSS'],
        linkGithub: 'https://github.com/Lucasvalves/mini-seller-console',
        linkProject: 'https://mini-seller-console-rosy.vercel.app/'
      },
      {
        title: 'Dr Schedule',
        description: 'Medical appointment system with payments.',
        status: 'completed',
        technologies: [
          'Next.js 15+',
          'TypeScript',
          'TailwindCSS',
          'Stripe',
          'Better Auth'
        ],
        linkGithub: 'https://github.com/Lucasvalves/doctor-schedule',
        linkProject: 'https://doctor-schedule-qy99.vercel.app/authentication'
      },
      {
        title: 'Cristal TV',
        description: 'Social and cultural film streaming platform',
        status: 'completed',
        technologies: ['React', 'Next.js', 'TypScript, SCSS'],
        featured: false
      }
    ]
  },
  contact: {
    contactTitle: 'Send me a message!',
    contactDescription:
      'Got a question or proposal, or just want to say hello? Go ahead.',
    nameField: 'Name',
    namePlaceholder: 'Enter your name',
    emailField: 'Email',
    emailPlaceholder: 'Enter your email',
    messageField: 'Message',
    messagePlaceholder: 'Enter your message',
    sendButton: 'Send',
    successSendMessage: 'Message sent successfully!',
    errorSendMessage: 'Please check the fields before submitting!'
  },
  footer: {
    madeWith: 'Made with',
    lotsOfCoffee: 'and lots of coffee'
  }
}

export default en
