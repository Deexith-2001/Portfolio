export interface TimelineItem {
  id: string
  period: string
  role: string
  company: string
  type: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  isPresent?: boolean
}

export const timeline: TimelineItem[] = [
  {
    id: 'jaagruk',
    period: 'March 2026 — Present',
    role: 'Software Development Intern',
    company: 'Jaagruk Bharat',
    type: 'Full-time Remote',
    location: 'Remote, India',
    description:
      'Building production-grade software for a national civic tech platform that helps Indian citizens discover and access government services.',
    achievements: [
      'Architected 27 modular config microservices with type-safe TypeScript contracts',
      'Built an AI-powered government services chatbot with multi-turn context and in-chat payment flow',
      'Designed and deployed a government data pipeline scraping schemes.gov.in at scale',
      'Maintained strict code review standards and type-safety across the entire codebase',
      'Contributed to production systems serving thousands of users across India',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'OpenAI API', 'REST APIs', 'Microservices'],
    isPresent: true,
  },
  {
    id: 'btech',
    period: '2021 — 2025',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'WITS, Warangal',
    type: 'CGPA: 7.58 / 10',
    location: 'Warangal, Telangana',
    description:
      'Four years building a strong foundation in computer science fundamentals alongside real-world engineering projects.',
    achievements: [
      'Built GrowTech AgriBot — hybrid AI + rule-based assistant for farmers (Python + OpenAI)',
      'Built Tuition Tutor — async FastAPI booking platform with PostgreSQL and REST APIs',
      'Completed coursework: DSA, OOP, DBMS, OS, Networks, System Design',
      'Earned HackerRank Software Engineering Certificate',
      'Earned HackerRank Python (Basic) Certificate',
    ],
    technologies: ['Python', 'SQL', 'OOP', 'DSA', 'System Design', 'OS', 'Networks'],
    isPresent: false,
  },
]

export const stats = [
  { value: '27+', label: 'Microservices Architected' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '2', label: 'Certifications' },
  { value: '1+', label: 'Year of Industry Experience' },
]
