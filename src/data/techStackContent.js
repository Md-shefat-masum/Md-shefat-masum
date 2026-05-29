export const techStackContent = {
  depth: '-200m · Ship Systems',
  kicker: 'SHIP SYSTEMS / TECH STACK',
  title: 'Engineering systems that keep the mission online.',
  intro:
    'A compact command-room view of the tools, frameworks, and systems I use to build scalable, maintainable, and production-ready applications.',
  systemStatus: [
    { label: 'Core Runtime', value: 'Online' },
    { label: 'Build Mode', value: 'Production' },
    { label: 'Deploy Signal', value: 'Stable' },
  ],
  categories: [
    {
      id: 'frontend',
      label: 'Frontend Deck',
      subtitle: 'Interface, interaction, and responsive UI systems',
      progress: 94,
      items: [
        { name: 'React', short: 'RX', level: 'Advanced' },
        { name: 'Next.js', short: 'NX', level: 'Advanced' },
        { name: 'TypeScript', short: 'TS', level: 'Strong' },
        { name: 'Tailwind CSS', short: 'TW', level: 'Advanced' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend Engine',
      subtitle: 'APIs, authentication, business logic, and server flow',
      progress: 89,
      items: [
        { name: 'Node.js', short: 'ND', level: 'Strong' },
        { name: 'Express.js', short: 'EX', level: 'Strong' },
        { name: 'Laravel', short: 'LV', level: 'Advanced' },
        { name: 'REST API', short: 'API', level: 'Strong' },
      ],
    },
    {
      id: 'database',
      label: 'Cargo Database',
      subtitle: 'Structured data, real-time data, and storage systems',
      progress: 86,
      items: [
        { name: 'MongoDB', short: 'MG', level: 'Strong' },
        { name: 'MySQL', short: 'MY', level: 'Advanced' },
        { name: 'PostgreSQL', short: 'PG', level: 'Good' },
        { name: 'Firebase', short: 'FB', level: 'Good' },
      ],
    },
    {
      id: 'devops',
      label: 'Docking & Deploy',
      subtitle: 'Version control, deployment, hosting, and workflow systems',
      progress: 82,
      items: [
        { name: 'GitHub', short: 'GH', level: 'Advanced' },
        { name: 'Docker', short: 'DK', level: 'Good' },
        { name: 'Vercel', short: 'VC', level: 'Strong' },
        { name: 'Nginx', short: 'NX', level: 'Good' },
      ],
    },
  ],
};
