export interface SkillCategory {
  id: string
  name: string
  icon: string
  description: string
  skills: string[]
  accentColor: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: '◈',
    description: 'Building interfaces users love',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    accentColor: 'blue',
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: '⬡',
    description: 'APIs, services, and business logic',
    skills: ['Node.js', 'Express', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth', 'Async Python'],
    accentColor: 'purple',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    icon: '◎',
    description: 'Systems that scale and last',
    skills: ['Microservices', 'System Design', 'Config Patterns', 'API Design', 'OOP', 'SOLID'],
    accentColor: 'indigo',
  },
  {
    id: 'database',
    name: 'Database',
    icon: '▣',
    description: 'Data modeling and storage',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Schema Design', 'CRUD Design', 'Admin DBs'],
    accentColor: 'teal',
  },
  {
    id: 'ai',
    name: 'AI & LLMs',
    icon: '◇',
    description: 'Intelligent systems and automation',
    skills: ['OpenAI API', 'LLM Applications', 'Prompt Engineering', 'NLP Pipelines', 'AI Workflows', 'RAG'],
    accentColor: 'violet',
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: '⟨⟩',
    description: 'Code I write fluently',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    accentColor: 'amber',
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: '⚙',
    description: 'Craft and workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Agile/Scrum'],
    accentColor: 'slate',
  },
]
