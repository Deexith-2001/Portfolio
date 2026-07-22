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
      'Shipping production software for a national civic tech platform that helps Indian citizens discover and access government services — from core config architecture to AI-powered citizen tools.',
    achievements: [
      'Architected and shipped 29 modular config microservices in Next.js and TypeScript, establishing the platform\'s core service architecture',
      'Engineered a type-safe backend replica system with NestJS, Prisma ORM, and Supabase mirroring production services with modular isolation and high availability',
      'Delivered an AI chatbot handling 500+ queries/day across ~25 daily active users, with an admin dashboard used daily by a 5-person team and an in-chat Cashfree payment flow processing ~300 transactions/day',
      'Built the initial ETL pipeline for government scheme data from schemes.gov, unifying scheme discovery — architecture now being extended by the wider engineering team',
      'Wrote pytest unit tests for the internal operator support chatbot, covering core logic and catching regressions before deployment',
      'Shipped 4 additional production tools (Gig Worker, Document Checker, Document Advisor, Vehicle Compliance) in Next.js, TypeScript, and Chakra UI',
      'Enforced type safety and REST API standards (TypeScript, Prisma ORM schemas) across all services and tools',
    ],
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'Prisma ORM', 'Supabase', 'Cashfree', 'pytest'],
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
      'Built JobAgent — an autonomous AI job assistant using Gemini AI, Claude API, and multi-source job APIs (Python + Supabase)',
      'Built GrowTech AgriBot — a hybrid AI + rule-based assistant for farmers (Python + Flask + OpenAI API)',
      'Built Tuition Tutor — an async FastAPI booking platform with PostgreSQL and REST APIs',
      'Completed coursework: DSA, OOP, DBMS, OS, Networks, System Design',
      'Earned HackerRank Software Development Intern and Python (Basic) certifications',
    ],
    technologies: ['Python', 'SQL', 'OOP', 'DSA', 'System Design', 'FastAPI'],
    isPresent: false,
  },
]

export const stats = [
  { value: '29+', label: 'Microservices Architected' },
  { value: '8+', label: 'Projects Shipped' },
  { value: '500+', label: 'Daily Chatbot Queries' },
  { value: '1+', label: 'Year of Industry Experience' },
]
