export interface SkillCategory {
  id: string
  name: string
  icon: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '◈',
    description: 'Building interfaces users love',
    skills: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'Chakra UI', 'Bootstrap'],
  },
  {
    id: 'backend',
    name: 'Backend & APIs',
    icon: '⬡',
    description: 'Services, contracts, business logic',
    skills: ['NestJS', 'FastAPI', 'Flask', 'Node.js', 'REST API Design', 'Microservices'],
  },
  {
    id: 'ai',
    name: 'AI & LLMs',
    icon: '◇',
    description: 'Intelligent systems and automation',
    skills: ['Gemini AI API', 'Claude API', 'OpenAI API', 'NLP Pipelines', 'Prompt Engineering', 'Multi-turn Chatbots'],
  },
  {
    id: 'database',
    name: 'Databases & ORMs',
    icon: '▣',
    description: 'Data modeling and persistence',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Prisma ORM', 'SQLAlchemy ORM', 'Data Modeling'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: '⬢',
    description: 'Shipping and scaling software',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Vercel', 'Render', 'CI/CD'],
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: '⟨⟩',
    description: 'Code I write fluently',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    id: 'practice',
    name: 'Engineering Practice',
    icon: '⚙',
    description: 'How I build and ship',
    skills: ['System Design', 'OOP', 'Config Patterns', 'pytest Testing', 'Git & GitHub', 'Agile/Scrum'],
  },
]
