// Projects shown in the PROJECTS tab, grouped and in display order.
//
// Source of truth: Agents_Building/job-search-agent/data/master-store.yaml.
// Same rule as there: only claims Umesh can defend in an interview, numbers
// exactly as measured (never rounded or added), and no links to private or
// internal work.
const GITHUB = 'https://github.com/umesh-chowdary-tech';

const projectGroups = [
  {
    title: 'Work at ADP',
    note: 'Internal projects, so the code is not public.',
    projects: [
      {
        title: 'Agentic AI Platform',
        category: 'Gen AI · Agents · MCP',
        period: '2025 - present',
        description:
          "Architected ADP's internal multi-agent AI platform as second-in-command to the Principal Architect, " +
          'and took it from proof of concept to production in under 3 months.',
        highlights: [
          'Adopted by 50+ engineers across development, QA and DevOps',
          'Feature delivery went from 3-5 engineers to 1',
          'Feature turnaround went from about a week to about a day',
          'Built custom MCP servers and agent frameworks on Claude Code infrastructure',
          "Contributed to ADP's org-wide Bitbucket MCP server",
        ],
        tech: ['Claude APIs', 'Claude Code', 'MCP', 'Python', 'AWS', 'Prompt Engineering'],
      },
      {
        title: 'Jira Agent',
        category: 'Agentic AI · Human in the loop',
        period: '2025 - present',
        description: 'An agent that drafts Jira feature tickets from Confluence context.',
        highlights: [
          'Pulls Confluence context over MCP to write the tickets',
          'Points out gaps in the source instead of filling them in silently',
          'Confirms with the user before creating anything',
        ],
        tech: ['MCP', 'Python', 'LLM', 'Jira', 'Confluence'],
      },
      {
        title: 'The Zone',
        category: 'Full Stack · Sales platform',
        period: '2023 - present',
        description:
          "Full-stack engineer on The Zone, ADP's sales intelligence platform, used by ~20,000 sales reps and supporting ~1M end clients.",
        highlights: [
          'Built account prioritization, triggers, competitor insights and pre-call intelligence',
          'Pre-call prep: a daily AWS Lambda job that posts insight summaries to reps in the app',
          'Trigger mismatch checker: a statistical dashboard that flags Salesforce and internal-database trigger mismatches',
          'Synthetic monitoring: a Docker and Jenkins pipeline that checks production every hour',
        ],
        tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redshift', 'AWS Lambda', 'Docker', 'Jenkins', 'Splunk', 'Jest'],
      },
      {
        title: 'Leave Management System',
        category: 'Full Stack',
        period: 'ADP',
        description: "Rebuilt ADP's internal leave management system on a modern stack. It is used across the organization.",
        highlights: ['Rebuilt on Spring Boot, React and MongoDB', 'Integrated Azure AD sign-in for the app'],
        tech: ['Java', 'Spring Boot', 'React', 'MongoDB'],
      },
      {
        title: 'Marketing Projects & Internal Tools',
        category: 'Full Stack',
        period: '2023 - 2024',
        description: 'My first projects at ADP: client-facing marketing work and tools for my team.',
        highlights: [
          'Client-facing marketing projects in TypeScript, Express.js and Node.js',
          'Designed and built three internal tools that streamlined team workflows',
          'Optimized database queries',
          'Worked with cross-functional teams to resolve production issues on tight deadlines',
        ],
        tech: ['TypeScript', 'Node.js', 'Express.js', 'SQL'],
      },
    ],
  },
  {
    title: 'Personal projects',
    projects: [
      {
        title: 'Vidhi: Legal AI for Contracts',
        category: 'Gen AI · RAG · Fine-tuning',
        period: '2026',
        description:
          'A legal assistant for contracts. The Chat tab answers from clauses it retrieves and cites them. The Analyze tab runs ' +
          'two Legal-BERT models I trained to label clauses, pull out key fields and list missing clauses.',
        highlights: [
          'Clause classifier: 87.4% test accuracy, macro F1 0.796 across ~100 clause types (LEDGAR)',
          'Clause extractor: token F1 0.5501 on full contracts, 41 clause types (CUAD)',
          "Caught that the training loop's score mostly measured correct abstentions, and wrote a full-contract evaluation instead",
          'Fine-tuned Qwen2.5-1.5B with QLoRA on Indian legal instructions, exported to GGUF for Ollama',
          'Everything trained on free Colab T4 GPUs',
        ],
        tech: ['Python', 'PyTorch', 'Legal-BERT', 'FAISS', 'sentence-transformers', 'Gemma', 'Gradio', 'QLoRA', 'Unsloth', 'Qwen2.5', 'Ollama'],
        links: [{ label: 'Code', href: `${GITHUB}/vidhi-legal-ai` }],
      },
      {
        title: 'AI Data Migration Agent',
        category: 'Agentic AI · Human in the loop',
        period: '2026',
        description:
          "An agent that moves a client's messy HR exports into a new platform: it maps them to the target schema, cleans and " +
          'validates them, and pushes them to the API. It hands only genuine ambiguity to a person.',
        highlights: [
          'Asks a person only when the data cannot prove the answer',
          'Audit trail of every decision it makes',
          'Web UI for reviewing and resolving its questions',
          'Runs on open-source models',
        ],
        tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'pytest', 'LLM'],
        links: [
          { label: 'Code', href: `${GITHUB}/ai-data-migration-agent` },
          { label: 'Write-up', href: `${GITHUB}/ai-data-migration-agent/blob/main/WRITEUP.md` },
          { label: 'Evaluation', href: `${GITHUB}/ai-data-migration-agent/blob/main/EVALUATION.md` },
        ],
      },
      {
        title: 'Surge: Creator x Brand Marketplace',
        category: 'Mobile · Full Stack · Product',
        description:
          "A two-sided marketplace connecting India's nano and micro Instagram creators with brands. A working prototype, paused before launch.",
        highlights: [
          'Creator flow: connect Instagram, build a profile, find campaigns, pitch, submit content and get paid',
          'Brand flow: post a campaign with brief, budget and niches, review applicants and content, then release payment',
          'Payments held in escrow until the brand approves the content',
          'Chat scoped to each deal, so brands cannot cold-message creators',
          'Matches creators to campaigns by niche and follower tier',
        ],
        tech: ['TypeScript', 'React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Razorpay', 'OAuth'],
        note: 'Private repository',
      },
    ],
  },
  {
    title: 'Research',
    projects: [
      {
        title: 'Sign Language Recognition Using Machine Learning',
        category: 'Research · Computer vision',
        period: '2023',
        description: 'Published research on recognizing sign language with machine learning and computer vision, in IJRASET.',
        highlights: [],
        tech: ['Python', 'Computer Vision'],
        links: [{ label: 'Read the paper', href: 'https://doi.org/10.22214/ijraset.2023.49199' }],
      },
    ],
  },
];

export const githubProfile = GITHUB;
export default projectGroups;
