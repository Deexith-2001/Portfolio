const GH = 'https://github.com/Deexith-2001'

export const projects = [
  // ── Internship row 1 ─────────────────────────────────────────────────────
  {
    id: 1,
    num: '01 / Internship Production',
    badge: 'Live at Jaagruk Bharat',
    badgeType: 'intern',
    title: 'Config Services Architecture',
    desc: `Designed, built, and deployed <strong style="color:var(--cyan)">27 modular config microservices</strong> powering core functionality across the Jaagruk Bharat platform. Implemented scalable service configuration patterns using Next.js and TypeScript with strict type safety. Established reusable architecture standards adopted across the full engineering team.`,
    stack: ['Next.js', 'TypeScript', 'Microservices', 'REST APIs', 'Modular Architecture'],
    status: '● Production at Jaagruk Bharat',
    col: 'col-8',
    glow: 'glow-cyan',
  },
  {
    id: 2,
    num: '02 / AI · Internship',
    badge: 'AI-Powered',
    badgeType: 'ai',
    title: 'Jaagruk Bharat AI Chatbot',
    desc: 'AI assistant delivering complete information about government services. Includes an admin PostgreSQL DB for chat histories, analytics, audit trails, and a full in-chat payment flow.',
    stack: ['Next.js', 'TypeScript', 'AI', 'PostgreSQL'],
    links: [
      { label: 'GitHub →', href: `${GH}/jaagrut-chatbot`, type: 'primary' },
    ],
    col: 'col-4',
    glow: 'glow-purple',
  },

  // ── Internship row 2 ─────────────────────────────────────────────────────
  {
    id: 3,
    num: '03 / Data Pipeline · Internship',
    badge: null,
    badgeType: null,
    title: 'Govt Schemes Data Pipeline',
    desc: 'Scraped and parsed all government scheme data from schemes.gov, handling varied formats at scale. Integrated into Jaagruk Bharat with validation and error handling for data accuracy.',
    stack: ['Next.js', 'TypeScript', 'Web Scraping', 'API Integration'],
    status: '● In Production',
    col: 'col-4',
    glow: 'glow-green',
  },
  {
    id: 4,
    num: '04 / Full-Stack + AI',
    badge: 'AI + NLP',
    badgeType: 'ai',
    title: 'GrowTech — AgriBot Assistant',
    desc: `Intelligent chatbot for farmers providing real-time crop recommendations, weather updates, and pest control guidance based on location and climate data. Built with a <strong style="color:var(--cyan)">hybrid AI + rule-based response engine</strong> using OpenAI API with dynamic fallback rules for offline reliability.`,
    stack: ['Python', 'Flask', 'OpenAI API', 'HTML/CSS/JS', 'NLP'],
    links: [
      { label: 'GitHub →', href: `${GH}/GrowTech`, type: 'primary' },
    ],
    col: 'col-8',
    glow: 'glow-cyan',
  },

  // ── Personal projects row ─────────────────────────────────────────────────
  {
    id: 5,
    num: '05 / Python · ML',
    badge: null,
    badgeType: null,
    title: 'AI Crop Advisor',
    desc: `Smart Python crop recommendation tool. Suggests the most suitable crops based on <strong style="color:var(--cyan)">seasonal data, soil type, rainfall, and pH levels</strong>. Dataset-driven filtering via Pandas — lightweight, fast, works offline.`,
    stack: ['Python', 'Pandas', 'CSV Dataset', 'CLI'],
    links: [
      { label: 'GitHub →', href: `${GH}/ai_crop_advisor`, type: 'primary' },
    ],
    col: 'col-6',
    glow: 'glow-purple',
  },
  {
    id: 6,
    num: '06 / Backend',
    badge: 'Full-Stack',
    badgeType: 'full',
    title: 'Tuition Tutor — Booking Platform',
    desc: 'RESTful backend for a smart home tuition booking platform. Multi-filter search by subject, location, and availability. Full relational DB schema with CRUD operations via PostgreSQL. FastAPI async endpoints with request validation and response serialization.',
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'REST API', 'Async'],
    links: [
      { label: 'GitHub →', href: `${GH}/tuition-portal`, type: 'primary' },
    ],
    col: 'col-6',
    glow: 'glow-cyan',
  },

  // ── Python CRUD ───────────────────────────────────────────────────────────
  {
    id: 7,
    num: '07 / Python · CRUD',
    badge: null,
    badgeType: null,
    title: 'Student Management System',
    desc: `Python console application with a full menu-driven interface for managing student records. Implements all <strong style="color:var(--cyan)">CRUD operations</strong> (Create, Read, Update, Delete) — add students, search by name, update details, and delete records — using in-memory Python lists.`,
    stack: ['Python', 'OOP', 'CRUD', 'CLI', 'Data Structures'],
    links: [
      { label: 'GitHub →', href: `${GH}/Student-Management-system`, type: 'primary' },
    ],
    col: 'col-12',
    glow: 'glow-purple',
  },
]
