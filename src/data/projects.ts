export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  badge?: string
  featured?: boolean
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  links?: { github?: string; live?: string }
  accentColor: string
  year: string
}

export const projects: Project[] = [
  {
    id: 'microservices-config',
    title: 'Microservices Config Architecture',
    subtitle: 'Architected 27 production config microservices for a national civic platform',
    category: 'Architecture · Production',
    badge: 'Live at Jaagruk Bharat',
    featured: true,
    problem:
      'A national government services platform needed a scalable way to manage configuration across 27+ independent services. Manual config management was causing deployment errors, type mismatches, and inconsistent service behavior at scale.',
    solution:
      'Designed and implemented a fully type-safe microservices configuration architecture in Next.js + TypeScript. Each service owns a strongly-typed config module, shared utilities enforce contracts across boundaries, and a centralized schema registry prevents drift.',
    outcome:
      'Eliminated an entire class of deployment bugs. New services can be spun up in hours instead of days. The system is live in production serving thousands of users across India.',
    technologies: ['Next.js', 'TypeScript', 'Microservices', 'REST APIs', 'Config Patterns', 'Node.js'],
    accentColor: 'blue',
    year: '2026',
  },
  {
    id: 'ai-tax-tool',
    title: 'AI Tax Optimization Tool',
    subtitle: 'AI-powered tool that analyzes financial data and surfaces missed deductions',
    category: 'AI · FinTech',
    badge: 'AI-Powered',
    featured: true,
    problem:
      'Filing taxes is opaque and complex. Most people miss legitimate deductions not because they are ineligible, but because they do not know they exist. Manual review is time-consuming and expensive.',
    solution:
      'Built an AI pipeline that ingests structured financial data, runs it through an LLM-powered deduction engine, and generates an itemized report of eligible deductions with explanations. FastAPI backend with PostgreSQL, OpenAI for reasoning, custom prompt chains for accuracy.',
    outcome:
      'Users discover an average of 4–6 additional deductions per filing. The system processes documents end-to-end in under 30 seconds and generates human-readable audit trails.',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Prompt Engineering', 'Pydantic'],
    accentColor: 'green',
    year: '2025',
  },
  {
    id: 'lease-analysis',
    title: 'Lease Document Analysis Tool',
    subtitle: 'Extracts key clauses, flags risks, and summarizes lease agreements using AI',
    category: 'AI · LegalTech',
    badge: 'NLP Pipeline',
    problem:
      'Reviewing lease documents requires legal expertise most tenants and small landlords lack. Critical clauses are buried in dense legalese, and risky terms often go unnoticed until disputes arise.',
    solution:
      'Built a document ingestion and analysis pipeline that parses PDF leases, chunks sections semantically, and uses an LLM to extract obligations, deadlines, termination clauses, and red-flag language. Outputs a structured risk report with severity scores.',
    outcome:
      'Reduces average document review time from 2 hours to under 5 minutes. Risk scoring correctly flags problematic clauses with 91% precision, enabling non-experts to make informed decisions.',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'PDF Processing', 'NLP', 'LangChain'],
    accentColor: 'amber',
    year: '2025',
  },
  {
    id: 'ai-chatbot',
    title: 'Government Services AI Chatbot',
    subtitle: 'Multi-turn AI assistant for citizens to discover and access government schemes',
    category: 'AI · Internship',
    badge: 'In Production',
    problem:
      'Indian citizens often cannot navigate the complexity of government schemes they are eligible for. The information exists but is fragmented across portals with no intelligent discovery layer.',
    solution:
      'Built a multi-turn AI chatbot using Next.js + TypeScript + OpenAI API with a PostgreSQL-backed admin database. Integrated in-chat payment flow, session context management, and a custom admin dashboard for content management.',
    outcome:
      'Deployed live on Jaagruk Bharat, serving real users. Citizens can now discover relevant schemes through a conversational interface and complete transactions without leaving the chat.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'REST APIs', 'Admin Dashboard'],
    links: { github: 'https://github.com/Deexith-2001' },
    accentColor: 'purple',
    year: '2026',
  },
  {
    id: 'data-pipeline',
    title: 'Government Data Integration Pipeline',
    subtitle: 'Scraped, parsed, and normalized schemes.gov.in data at scale',
    category: 'Data Engineering',
    badge: 'In Production',
    problem:
      'The platform required a reliable, structured data source for hundreds of government schemes. Public data was scattered, inconsistently formatted, and frequently updated with no change notifications.',
    solution:
      'Built a robust scraping and normalization pipeline that continuously crawls government sources, parses heterogeneous formats, validates schema compliance, and upserts clean records into a structured database. Built in Next.js + TypeScript with strict type contracts.',
    outcome:
      'Powers the entire Jaagruk Bharat scheme discovery layer with fresh data. Handles schema drift automatically, reducing manual intervention to near zero.',
    technologies: ['Next.js', 'TypeScript', 'Web Scraping', 'Data Validation', 'PostgreSQL', 'ETL'],
    accentColor: 'teal',
    year: '2026',
  },
  {
    id: 'growtech',
    title: 'GrowTech — AgriBot Assistant',
    subtitle: 'Hybrid AI + rule-based assistant giving farmers personalized crop advice',
    category: 'AI · NLP',
    badge: 'Open Source',
    problem:
      'Small-scale farmers in India lack access to personalized agronomic advice. Recommendations are generic, expensive to obtain, and often irrelevant to local conditions.',
    solution:
      'Developed a hybrid chatbot that combines OpenAI NLP for understanding intent with a deterministic rule engine for domain-specific recommendations. Users specify soil type, region, and season to receive tailored crop and pest management advice.',
    outcome:
      'Deployed and open-sourced. Farmers report better crop selection decisions. The hybrid approach keeps API costs low while maintaining response quality.',
    technologies: ['Python', 'Flask', 'OpenAI API', 'NLP', 'Prompt Engineering', 'HTML/CSS/JS'],
    links: { github: 'https://github.com/Deexith-2001' },
    accentColor: 'green',
    year: '2024',
  },
]
