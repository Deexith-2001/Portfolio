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
  year: string
}

export const projects: Project[] = [
  {
    id: 'config-microservices-platform',
    title: 'Config Microservices & Backend Replica Platform',
    subtitle: '29 type-safe config microservices plus a NestJS backend replica system powering a national civic platform',
    category: 'Architecture · Production',
    badge: 'Live at Jaagruk Bharat',
    featured: true,
    problem:
      'Jaagruk Bharat needed a scalable way to manage configuration across dozens of independent services, and a safe environment to validate changes without touching live production traffic.',
    solution:
      'Architected and shipped 29 modular config microservices in Next.js and TypeScript, establishing the platform\'s core service architecture. Alongside that, engineered a type-safe backend replica system with NestJS, Prisma ORM, and Supabase that mirrors production services with modular isolation and high availability, enforcing REST API standards and Prisma schema contracts across every service.',
    outcome:
      'Became the platform\'s core service architecture — new config services can now be added quickly and safely, with a production-fidelity replica environment for validating changes before they ship.',
    technologies: ['Next.js', 'TypeScript', 'NestJS', 'Prisma ORM', 'Supabase', 'REST APIs', 'Microservices'],
    year: '2026',
  },
  {
    id: 'ai-chatbot-payments',
    title: 'Government Services AI Chatbot + In-Chat Payments',
    subtitle: 'Multi-turn AI assistant handling 500+ daily queries with an admin dashboard and a Cashfree payment flow',
    category: 'AI · Production',
    badge: 'In Production',
    featured: true,
    problem:
      'Citizens needed a conversational way to discover government schemes and pay for related services, and the internal admin team needed visibility and control over those conversations at scale.',
    solution:
      'Built and shipped an AI chatbot handling 500+ queries a day across roughly 25 daily active users, backed by a full admin dashboard used daily by a 5-person admin team. Integrated an end-to-end in-chat payment flow with Cashfree, and wrote pytest unit tests for the internal operator support chatbot to catch regressions before deployment.',
    outcome:
      'Live in production, processing roughly 300 transactions a day end-to-end inside the chat, with the admin team relying on the dashboard for daily operations.',
    technologies: ['Next.js', 'TypeScript', 'Cashfree', 'Admin Dashboard', 'pytest', 'REST APIs'],
    year: '2026',
  },
  {
    id: 'jobagent',
    title: 'JobAgent — Autonomous AI Job Assistant',
    subtitle: 'Personal AI agent that searches, filters, and matches jobs using Gemini AI and Claude with multi-model support',
    category: 'AI · Personal Project',
    badge: 'Personal Project',
    featured: true,
    problem:
      'Job searching across multiple platforms is repetitive and time-consuming — relevant listings are scattered across sources and manual filtering does not scale.',
    solution:
      'Built a personal AI-powered job assistant that autonomously searches and filters listings from JSearch, Adzuna, and Remotive, then uses Gemini AI and Claude API together for intelligent job matching, resume analysis, and tailored application guidance. Designed a Supabase PostgreSQL backend with SQLAlchemy ORM for job tracking, preferences, and application history, deployed the backend on Render and frontend/API routes on Vercel, and wrote pytest tests covering core matching and persistence logic.',
    outcome:
      'A fully working, self-hosted job search agent running across environments with full GitHub version control — used personally to surface and track relevant roles automatically.',
    technologies: ['Python', 'Gemini AI', 'Claude API', 'Supabase', 'SQLAlchemy ORM', 'JSearch', 'Adzuna', 'Remotive', 'Render', 'Vercel'],
    links: { github: 'https://github.com/Deexith-2001' },
    year: '2026',
  },
  {
    id: 'gov-data-pipeline',
    title: 'Government Schemes Data Pipeline',
    subtitle: 'ETL pipeline that scrapes and normalizes schemes.gov.in data for unified scheme discovery',
    category: 'Data Engineering',
    badge: 'In Production',
    problem:
      'Scheme data on schemes.gov.in came in varied, inconsistent formats with no unified structure, making it impossible to power a single discovery experience.',
    solution:
      'Scraped and parsed government scheme data at scale, then built the initial ETL pipeline — extract, transform, load — with validation and error handling to integrate cleaned scheme data into Jaagruk Bharat.',
    outcome:
      'Unified scheme discovery for users across the platform; the architecture is now being extended by the wider engineering team.',
    technologies: ['Next.js', 'TypeScript', 'Web Scraping', 'Data Validation', 'ETL'],
    year: '2026',
  },
  {
    id: 'dialogflow-gallabox-bridge',
    title: 'Dialogflow–Gallabox WhatsApp Bridge',
    subtitle: 'Production middleware connecting the outreach team to WhatsApp Business via Gallabox',
    category: 'Backend · Production',
    badge: 'Live in Production',
    problem:
      'The Dialogflow outreach team needed a reliable way to follow up with interested users on WhatsApp after a call, with a full audit trail of what was sent and delivered.',
    solution:
      'Built a production Python backend as a middleware bridge between the Dialogflow outreach team and Gallabox (WhatsApp Business API). It receives webhook notifications after user outreach and automatically dispatches WhatsApp message templates to interested users, with a MySQL schema via SQLAlchemy ORM persisting user records, outreach reports, and delivery status.',
    outcome:
      'Currently live in production at Jaagruk Bharat, automating what used to be a manual outreach follow-up process with a full audit trail.',
    technologies: ['Python', 'SQLAlchemy ORM', 'MySQL', 'Dialogflow', 'Gallabox', 'WhatsApp Business API'],
    year: '2026',
  },
  {
    id: 'citizen-utility-tools',
    title: 'Citizen Utility Tools Suite',
    subtitle: 'Six production tools — Tax Optimizer, APY Calculator, Gig Worker, Document Checker/Advisor, Vehicle Compliance',
    category: 'Full Stack · Production',
    badge: '6 Tools Shipped',
    problem:
      'Jaagruk Bharat needed to expand into new service categories — tax planning, pensions, gig work, documentation, and vehicle compliance — each with its own workflow and eligibility logic.',
    solution:
      'Designed and shipped six tools in Next.js, TypeScript, and Chakra UI: a Tax Optimizer with personalized tax-saving recommendations, an APY (Atal Pension Yojana) pension calculator, a Gig Worker tool for scheme eligibility, Document Checker and Document Advisor tools for required documentation, and a Vehicle Compliance tracker — all built with accessible, responsive Chakra UI components for a consistent platform-wide experience.',
    outcome:
      'Expanded platform coverage into five new service categories, each live and in use by real citizens.',
    technologies: ['Next.js', 'TypeScript', 'Chakra UI', 'REST APIs'],
    year: '2026',
  },
  {
    id: 'growtech',
    title: 'GrowTech — AgriBot Assistant',
    subtitle: 'Hybrid AI + rule-based assistant giving farmers personalized crop and pest management advice',
    category: 'AI · NLP',
    badge: 'Open Source',
    problem:
      'Small-scale farmers often lack access to personalized, locally relevant agronomic advice, and pure LLM responses can be inconsistent for domain-specific recommendations.',
    solution:
      'Built a full-stack Flask web app with a hybrid AI and rule-based response engine — OpenAI API for NLP understanding with dynamic fallback logic, and a modular backend with clean API routes and prompt engineering tuned for response quality.',
    outcome:
      'Deployed and open-sourced, combining LLM flexibility with rule-based reliability to keep responses accurate and API costs low.',
    technologies: ['Python', 'Flask', 'OpenAI API', 'NLP', 'REST APIs'],
    links: { github: 'https://github.com/Deexith-2001' },
    year: '2024',
  },
  {
    id: 'tuition-tutor',
    title: 'Tuition Tutor — Home Tuition Booking Platform',
    subtitle: 'Async FastAPI backend for a tutor booking platform with multi-filter search',
    category: 'Backend · Full Stack',
    problem:
      'Finding a home tutor by subject, location, and availability usually means manual searching across disconnected listings.',
    solution:
      'Developed a RESTful FastAPI backend with async endpoints and request validation, designed a relational PostgreSQL schema, and implemented complete CRUD with multi-filter search across subject, location, and availability.',
    outcome:
      'A fully functional booking platform backend built to handle real-time multi-filter search with high-performance async endpoints.',
    technologies: ['FastAPI', 'PostgreSQL', 'Python', 'Async', 'REST APIs'],
    year: '2024',
  },
]
