const pt = {
  navigation: {
    about: 'Sobre',
    experience: 'Experiência',
    skills: 'Habilidades',
    education: 'Formação',
    projects: 'Projetos',
    contact: 'Contato'
  },
  hero: {
    openOpportunities: 'Aberto a oportunidades',
    heroTitle: 'Desenvolvedor Full-stack',
    heroSubtitle:
      'Transformo ideias em experiências digitais modernas e centradas no usuário.',
    stackTitle: 'STACK PRINCIPAL',
    contactButton: 'Entre em contato',
    downloadCV: 'Download CV',
    connectText: 'Conecte-se:',
    linkToCV:
      'https://drive.google.com/file/d/1c4wa4UYKlneB2jdYw3ncEl5-diP0IW2J/view?usp=sharing'
  },
  about: {
    aboutTitle: 'Sobre Mim',
    aboutDescription:
      'Sou desenvolvedor fullstack apaixonado por transformar ideias em soluções digitais que unem performance, usabilidade e impacto real.',
    aboutDescription2:
      'Minha experiência vai desde automação de processos e integrações em nuvem até a criação de interfaces modernas e responsivas, sempre com foco em escalabilidade e qualidade.',
    aboutDescription3:
      'Aprecio trabalhar em ambientes colaborativos, aplicando metodologias ágeis e trazendo uma abordagem prática e criativa para resolver problemas.',
    yearsExperience: '2+',
    yearsExperienceLabel: 'Anos de experiência',
    projectsDelivered: '12+',
    projectsDeliveredLabel: 'Projetos entregues',
    keyStrengthsTitle: 'Pontos Fortes',
    performanceValue: 'Alta Performance',
    descriptionPerformanceValue:
      'Foco em eficiência e otimização contínua para garantir experiências rápidas, fluidas e escaláveis.',

    innovationValue: 'Inovação',
    descriptionInnovationValue:
      'Abertura constante para explorar novas tecnologias e aplicar práticas modernas que elevam a qualidade das entregas.',
    problemSolvingValue: 'Resolução de Problemas',
    descriptionProblemSolvingValue:
      'Capacidade analítica e criativa para identificar desafios, propor soluções eficazes e implementar com precisão.',
    proactivityValue: 'Proatividade',
    descriptionProactivityValue:
      'Iniciativa para antecipar necessidades, agir sem esperar demandas e agregar valor em diferentes etapas do projeto.',
    adaptabilityValue: 'Adaptabilidade',
    descriptionAdaptabilityValue:
      'Flexibilidade para se ajustar rapidamente a novas demandas, mudanças de escopo e diferentes contextos tecnológicos.'
  },
  experience: {
    experienceTitle: 'Experiência',
    listExperience: [
      {
        position: 'Desenvolvedor Full Stack',
        company: 'Athan Tecnologia',
        period: '2023 - 2025',
        descriptions: [
          'Otimizei processos internos e automatizei fluxos, reduzindo em mais de 40% o tempo de operação.',
          'Implementei integrações complexas com Twilio, AWS SES e sistemas internos, acelerando a detecção e resposta a falhas.',
          'Desenvolvi soluções escaláveis, APIs serverless e melhorias em plataformas de atendimento multicanal.',
          'Atuei na evolução de CRMs, aprimorando UX, criando novas features e produzindo documentações técnicas estratégicas.'
        ],
        type: 'Full-time'
      },
      {
        position: 'Desenvolvedor Full Stack',
        company: 'Freelancer',
        period: '2024 - 2025',
        descriptions: [
          'Desenvolvimento completo do projeto Better Health: uma aplicação full-stack que otimiza o gerenciamento de clínicas de saúde. Arquitetura do backend com Node.js e Express, e do frontend com Next.js, resultando em um sistema eficiente para agendamento de consultas.'
        ],
        type: 'Freelancer'
      },
      {
        position: 'Desenvolvedor Front end',
        company: 'Cristal TV',
        period: '2023',
        descriptions: [
          'Atuação como desenvolvedor frontend voluntário para a Cristal TV, entregando soluções com Next.js, TypeScript e SCSS que garantiram alta performance e usabilidade.'
        ],
        type: 'Voluntário'
      }
    ]
  },
  skills: {
    skillsTitle: 'Competências Técnicas',
    developmentTitle: 'Desenvolvimento',
    technologiesTitle: 'Tecnologias e Ferramentas',
    methodologiesTitle: 'Metodologias'
  },
  educations: {
    educationTitle: 'Formação',
    bachelorDegree: 'Bacharelado em Sistemas de Informação',
    university: 'Universidade Salvador',
    bachelorPeriod: '07/2022 - 06/2026',
    technicalDegree: 'Técnico em Desenvolvimento de Sistemas',
    senai: 'SENAI',
    technicalPeriod: '07/2021 - 12/2022'
  },
  projects: {
    projectsTitle: 'Projetos em Destaque',
    inDevelopment: 'Em desenvolvipmento',
    completed: 'Concluído',
    techLabel: 'TECNOLOGIAS UTILIZADAS',
    viewMoreProjects: 'Ver mais projetos',

    listProjetcs: [
      {
        title: 'Better Health',
        description:
          'O sistema visa simplificar a gestão de usuários, médicos e pacientes, permitindo o agendamento eficiente de consultas em clínicas de saúde.',
        status: 'Em desenvolvimento',
        technologies: [
          'Next.js',
          'TypeScript',
          'SCSS',
          'TanStack Query',
          'Jest',
          'Testing Library',
          'Node.js',
          'Express'
        ],
        linkGithub: 'https://github.com/Lucasvalves/better_health',
        linkProject: 'https://better-health-sigma.vercel.app/authentication'
      },
      {
        title: 'Connect CRM',
        description:
          'Plataforma completa para organizar clientes e contatos, permitindo gerenciar informações com facilidade e visualizar relatórios claros para apoiar decisões.',
        status: 'completed',
        technologies: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Shadcn',
          'Node.js',
          'Express'
        ],
        linkGithub: 'https://github.com/Lucasvalves/connect-crm',
        linkProject: 'https://connect-crm-theta.vercel.app/'
      },
      {
        title: 'Dr Schedule',
        description:
          'Sistema completo para gestão de consultas médicas com pagamentos integrados.',
        status: 'Concluido',
        technologies: [
          'React',
          'TypeScript',
          'TailwindCSS',
          'Shadcn',
          'Node.js',
          'Express'
        ],
        linkGithub: 'https://github.com/Lucasvalves/doctor-schedule',
        linkProject: 'https://doctor-schedule-qy99.vercel.app/authentication'
      },
      {
        title: 'Mini Seller Console',
        description:
          'Console para tirar leads e convertê-los em oportunidades. Este projeto utiliza dados JSON locais e simula a latência da API com setTimeout.',
        status: 'Concluido',
        technologies: ['React 18+', 'TypeScript', 'TailwindCSS'],
        linkGithub: 'https://github.com/Lucasvalves/mini-seller-console',
        linkProject: 'https://mini-seller-console-rosy.vercel.app/'
      }
    ]
  },
  contact: {
    contactTitle: 'Me mande uma mensagem!',
    contactDescription:
      'Tem alguma pergunta ou proposta, ou apenas quer dizer oi? Vá em frente.',
    nameField: 'Nome',
    namePlaceholder: 'Digite seu nome',
    emailField: 'Email',
    emailPlaceholder: 'Digite seu email',
    messageField: 'Mensagem',
    messagePlaceholder: 'Digite sua mensagem',
    sendButton: 'Enviar',
    successSendMessage: 'Mensagem enviada com sucesso!',
    errorSendMessage: 'Por favor, verifique os campos antes de enviar!'
  },
  footer: {
    madeWith: 'Feito com',
    lotsOfCoffee: 'e muito'
  }
}
export default pt
