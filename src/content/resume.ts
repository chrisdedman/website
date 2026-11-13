export type Position = {
  org: string;
  title: string;
  period: string;
  body: string;
};

export type Study = {
  org: string;
  credential: string;
  period: string;
  body: string;
};

export type Award = {
  org: string;
  detail: string;
  period: string;
  body?: string;
};

export const experience: Position[] = [
  {
    org: 'Baro',
    title: 'Founding Software Engineer',
    period: 'Aug 2026 — present',
    body: 'Second founding engineer at Baro (a16z SR007), which is building an AI general manager for consumer brands: one place for what a brand needs to grow in the US market. I work across its TypeScript monorepo (Next.js, Supabase, Inngest), mostly on GM, the app the Baro team and brand founders use to run a brand day to day: creator campaigns and outreach, email flows, the CRM, and customer support. I also work on CI speed and reliability.',
  },
  {
    org: 'Profound',
    title: 'Full-Stack Software Engineer',
    period: 'Dec 2025 — Nov 2026',
    body: 'Contract role. Worked on a full-stack CMS in a TypeScript and Rust monorepo, contributing across routing, document editing, deployments, media workflows, and internal tooling. Led observability work spanning the client, server, edge, proxy, and tRPC layers using Sentry and structured telemetry.',
  },
  {
    org: 'Uber',
    title: 'Software / Data Engineering Intern — AdTech',
    period: 'May 2024 — Aug 2024',
    body: 'Designed and shipped a SQL table that centralised metadata duplicated across several tables, cutting redundancy and improving codebase efficiency by 30%. Automated CI pipelines in Python to merge data from multiple sources into that table, increasing aggregation speed by 50%. Owned the schema design, queries, and data validation, and added sensors to enforce cross-source dependencies.',
  },
  {
    org: 'Uber',
    title: 'UberSTAR Software Engineering Intern — DOTCOM',
    period: 'Jun 2023 — Sep 2023',
    body: 'Load tested and deployed web services to optimise Fusion.js performance against a 300ms latency and 1% P99 error budget. Built a repeatable methodology for measuring web application performance using the Four Golden Signals, and automated performance testing with Uber’s Ballast tool, improving test execution efficiency by 150%.',
  },
  {
    org: 'El Camino College',
    title: 'Teaching Assistant / Tutor',
    period: 'Jun 2022 — Jan 2023',
    body: 'Supported computer science majors through coursework, labs, and debugging sessions.',
  },
  {
    org: "NASA L'SPACE",
    title: 'Proposal Writing & Evaluation Intern',
    period: 'May 2021 — Jul 2021',
    body: 'Worked in a cross-disciplinary student team writing concept proposals, then reviewed and scored proposals through the lens of a NASA reviewer.',
  },
  {
    org: 'Robert Half',
    title: 'Operations IT Support Technician',
    period: 'Oct 2020 — Sep 2021',
    body: 'Set up and maintained Los Angeles County voting systems across multiple 2020–2021 elections, and racked and de-racked servers for a T5 Data Center in El Segundo, CA.',
  },
  {
    org: 'Earlier',
    title: 'French Military · Butcher',
    period: 'Aug 2008 — Dec 2019',
    body: 'Served in the French Military and worked as a butcher in France and Belgium. High-pressure, team-dependent work that shaped how I approach problems and deadlines.',
  },
];

export const education: Study[] = [
  {
    org: 'California State University, Long Beach',
    credential: 'M.S. Computer Science',
    period: 'Jan 2026 — Jun 2026, on hiatus',
    body: 'Focused on embedded systems and low-level programming. On hiatus because of the workload at a startup; I plan to finish it when I have more free time.',
  },
  {
    org: 'California State University, Dominguez Hills',
    credential: 'B.S. Computer Science — Magna Cum Laude, with departmental honors',
    period: 'Jan 2023 — May 2025',
    body: 'Data structures, design and analysis of algorithms, database management, operating systems, software engineering, computer organisation, finite automata, and security engineering, alongside probability and statistics and physics 1 & 2. Open Source Coordinator for the Computing Alliance of Hispanic-Serving Institutions (CAHSI) club.',
  },
  {
    org: 'El Camino College',
    credential: 'Certificate of Achievement with Honors, Computer Science',
    period: 'Jul 2021 — Jun 2023',
    body: 'Data structures and algorithms, assembly language, C++, and Java, plus calculus 1 & 2, discrete mathematics, and Cisco network engineering (CCNA).',
  },
];

export const awards: Award[] = [
  {
    org: 'Cisco',
    detail: 'Cisco Champion 2021 and 2022 · Community Spotlight Award · IT Blog Awards, Top 50',
    period: '2021 — 2022',
  },
  {
    org: 'National Society of Leadership & Success',
    detail: 'FOL 101-1 Certificate',
    period: 'Oct 2023 — present',
  },
  {
    org: "Dean's List",
    detail: 'El Camino College · CSU Dominguez Hills',
    period: 'Fall 2021 — Spring 2025',
    body: "Awarded for completing twelve or more units in a semester with a GPA of 3.5 or higher.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Systems',
    items: ['C', 'C++', 'ARM assembly', 'Rust', 'QEMU', 'Make', 'CMake', 'GDB', 'Microcontrollers'],
  },
  {
    group: 'Mac apps',
    items: ['Swift', 'SwiftUI', 'WidgetKit', 'App Intents', 'launchd'],
  },
  {
    group: 'Backend',
    items: ['Go', 'Python', 'Java', 'Elixir / Phoenix', 'PostgreSQL', 'MySQL', 'Supabase', 'Inngest'],
  },
  {
    group: 'Web',
    items: ['TypeScript', 'React', 'Next.js', 'Fusion.js', 'tRPC', 'Turborepo'],
  },
  {
    group: 'Practice',
    items: [
      'CI/CD',
      'Docker',
      'Observability',
      'Server performance testing',
      'TCP/IP',
      'Git',
      'Neovim',
    ],
  },
];
