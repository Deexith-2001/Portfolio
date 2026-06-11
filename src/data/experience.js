export const timeline = [
  {
    id: 1,
    date: 'March 2026 – Present',
    datePast: false,
    role: 'Software Development Intern',
    company: 'Jaagruk Bharat · Full-time Remote',
    bullets: [
      'Architected and deployed <strong>27 modular config microservices</strong> in Next.js + TypeScript, establishing reusable patterns adopted across the engineering team.',
      'Built an <strong>AI-powered chatbot</strong> for government service discovery with multi-turn context, backed by a PostgreSQL admin DB for analytics and audit trails.',
      'Scraped, normalised, and integrated all scheme data from <strong>schemes.gov.in</strong> — handling varied HTML formats at scale with robust validation and deduplication.',
      'Implemented a complete <strong>in-chat payment flow</strong>: service selection → booking → payment confirmation — fully integrated into the chatbot UX.',
      'Wrote clean, type-safe TypeScript across all modules; maintained code review standards and contributed to shared tooling.',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API', 'REST APIs', 'Microservices'],
    isLast: false,
  },
  {
    id: 2,
    date: '2021 – 2025',
    datePast: true,
    role: 'B.Tech Computer Science & Engineering',
    company: 'WITS, Warangal · CGPA 7.58 / 10',
    bullets: [
      'Core coursework: <strong>Data Structures & Algorithms</strong>, Object-Oriented Programming, System Design, DBMS, Operating Systems, Computer Networks.',
      'Built GrowTech (AI agriculture chatbot), Tuition Tutor (FastAPI booking platform), and AI Crop Advisor — applying academic theory to real production systems.',
      'Gained strong foundations in <strong>Python, SQL, REST API design</strong>, and software development lifecycle.',
    ],
    tech: ['Python', 'SQL', 'OOP', 'DSA', 'System Design', 'OS', 'Networks'],
    isLast: true,
  },
]

export const certifications = [
  {
    id: 1,
    icon: '🏆',
    org: 'HackerRank',
    name: 'Software Engineering Certificate',
    desc: 'Covered problem-solving, software engineering fundamentals, algorithmic thinking, and basic system design patterns.',
  },
  {
    id: 2,
    icon: '🐍',
    org: 'HackerRank',
    name: 'Python (Basic) Certificate',
    desc: 'Validated proficiency in Python — control flow, data structures, functions, and OOP fundamentals.',
  },
]

export const education = {
  degree: 'B.Tech — Computer Science & Engineering',
  school: 'Warangal Institute of Technology and Science (WITS)',
  tags: [
    { label: '2021 – 2025', color: 'blue'   },
    { label: 'CGPA: 7.58',  color: 'green'  },
    { label: 'CSE',         color: 'violet' },
  ],
}
