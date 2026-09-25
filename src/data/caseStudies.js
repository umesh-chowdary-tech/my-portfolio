// Case-study pages, one per main project, each at /projects/<slug>.
//
// Plain data (no JSX), because scripts/prerender-routes.js also reads this list to
// write a real page with its own title and link preview for each study. `diagram`
// names a component in src/components/diagrams.jsx (mapped in CaseStudy.jsx).
//
// Same rule as src/data/projects.js: only claims Umesh can defend in an interview,
// numbers exactly as measured, and no links to private or internal work. Sources:
// the projects' own READMEs, WRITEUP.md and EVALUATION.md.
const GITHUB = 'https://github.com/umesh-chowdary-tech';

const caseStudies = [
  {
    slug: 'agentic-ai-platform',
    title: 'Agentic AI Platform at ADP',
    category: 'Gen AI · Agents · MCP',
    summary:
      "ADP's internal multi-agent AI platform, taken from proof of concept to production in under 3 months and now used by 50+ engineers.",
    facts: [
      { label: 'Role', value: 'Second-in-command to the Principal Architect' },
      { label: 'When', value: '2025 - present' },
      { label: 'Stack', value: 'Claude APIs, Claude Code, MCP, Python, AWS' },
    ],
    results: [
      { value: '< 3 months', label: 'from proof of concept to production' },
      { value: '50+', label: 'engineers use it, across development, QA and DevOps' },
      { value: '3-5 → 1', label: 'engineers needed to deliver a feature' },
      { value: '~1 week → ~1 day', label: 'feature turnaround' },
    ],
    sections: [
      {
        heading: 'What it is',
        paragraphs: [
          "ADP's internal multi-agent AI platform, used by engineers across development, QA and DevOps. I architected it as second-in-command to the Principal Architect, and we took it from proof of concept to production in under 3 months.",
        ],
      },
      {
        heading: 'What I built',
        bullets: [
          'Custom MCP servers and agent frameworks on top of Claude Code infrastructure',
          "Contributions to ADP's org-wide Bitbucket MCP server",
        ],
      },
      {
        heading: 'The result',
        paragraphs: [
          '50+ engineers across development, QA and DevOps now use it. Delivering a feature went from needing 3-5 engineers to 1, and feature turnaround went from about a week to about a day.',
        ],
      },
      {
        heading: 'A related agent: drafting Jira tickets',
        paragraphs: ['Alongside the platform, I built an agent that drafts Jira feature tickets from Confluence context.'],
        bullets: [
          'Pulls the Confluence context over MCP',
          'Points out gaps in the source instead of filling them in silently',
          'Confirms with the user before creating anything, so a person stays in the loop by design',
        ],
      },
    ],
    note: 'Internal to ADP, so there is no public code or screenshots.',
  },
  {
    slug: 'vidhi',
    title: 'Vidhi: Legal AI for Contracts',
    category: 'Gen AI · RAG · Fine-tuning',
    summary:
      'A legal assistant for Indian contracts that answers only from the clauses it retrieves and cites them, built end to end on free Colab GPUs.',
    facts: [
      { label: 'Type', value: 'Personal project' },
      { label: 'When', value: '2026' },
      { label: 'Stack', value: 'Python, PyTorch, Legal-BERT, FAISS, Gemma, Gradio, QLoRA, Qwen2.5, Ollama' },
    ],
    results: [
      { value: '87.4%', label: 'test accuracy classifying ~100 clause types (LEDGAR), macro F1 0.796' },
      { value: '0.5501', label: 'token F1 extracting clauses from full contracts (CUAD)' },
      { value: '1.5B', label: 'parameter model fine-tuned on a free GPU, small enough to run on a laptop CPU' },
    ],
    diagram: 'vidhi',
    diagramCaption: 'Both tabs work on the contract split into whole clauses. A cheap rule-based router picks the tab, and only asks Gemma when the request is ambiguous.',
    sections: [
      {
        heading: 'The design decision',
        paragraphs: [
          'Retrieval is the source of truth; fine-tuning is the polish. The generative model is never asked to know the law. It is asked to talk about the clauses the retriever puts in front of it. The models that make factual claims about a contract, the clause classifier and the extractor, are trained and measured separately.',
        ],
      },
      {
        heading: 'What it does',
        bullets: [
          'Chat: ask a question about a contract. Gemma answers from the retrieved clauses, cites which ones it used, and streams the answer as it goes.',
          'Analyze: hand it a contract and get back a clause-type breakdown, the key fields, and a checklist of clauses a contract of this type usually has but this one does not.',
          'PDFs are split into whole clauses rather than fixed-size windows, so a clause is never cut in half.',
          'Fast rules decide between Chat and Analyze, and the Gemma router runs only for genuinely ambiguous input.',
          'There are two builds. The Colab notebooks use FAISS and Gemma, so nothing needs installing. An offline build uses ChromaDB and Ollama, so a contract never leaves the laptop.',
        ],
      },
      {
        heading: 'Measuring it honestly',
        paragraphs: [
          'The clause classifier is Legal-BERT fine-tuned on LEDGAR (about 80,000 contract provisions, about 100 types). It scores 0.8740 test accuracy and 0.7960 macro F1. Macro F1 is lower because the rare clause types are where it loses.',
          "The extractor is Legal-BERT with a span-extraction head, trained on CUAD (510 contracts, 41 clause types). Long contracts need sliding windows with overlap, and most windows contain no answer, so the model has to learn to abstain. The training loop reported an exact match of 0.9181, but about 97% of the windows have no answer, so that number mostly measured correct abstentions. I wrote a separate evaluation over full contracts instead: exact match 0.4646 and token F1 0.5501. That's the honest headline.",
        ],
      },
      {
        heading: 'Fine-tuning a small model',
        paragraphs: [
          'I fine-tuned Qwen2.5-1.5B-Instruct with 4-bit QLoRA via Unsloth on the Aalap Indian legal instruction dataset: about 8,000 rows, capped at 1,000 steps so it finishes inside one free Colab session. It is exported to GGUF for Ollama. The 1.5B size came from the hardware: it had to train on a free T4 and then run on a laptop with no GPU.',
          "The catch that would have silently ruined the run: Aalap stores its examples in Mistral's [INST] format, while Qwen2.5 expects ChatML. Training on one format and running on the other teaches the model delimiters it never sees at inference, so I re-wrapped every example in Qwen's own chat template.",
        ],
      },
      {
        heading: 'What I found',
        paragraphs: [
          'On factual legal questions, retrieval carries the answer and the fine-tune did not clearly beat the plain model. Asked about the duties of a director under the Companies Act 2013, the plain model with retrieval gave a clean, correctly sourced list, while the fine-tuned model repeated boilerplate. The fine-tune earns its place on tone and format, not recall, which is what the design predicted. No accuracy number is claimed for the generative model.',
        ],
      },
      {
        heading: 'Limits',
        bullets: [
          'Built on public legal datasets only; no real company contracts were used.',
          'A 1.5B generative model, chosen for the hardware budget rather than capability.',
          'Clause splitting is heuristic and can mis-split unusual formatting.',
          'Not legal advice.',
        ],
      },
    ],
    links: [{ label: 'Code', href: `${GITHUB}/vidhi-legal-ai` }],
  },
  {
    slug: 'migration-agent',
    title: 'AI Data Migration Agent',
    category: 'Agentic AI · Human in the loop',
    summary:
      "An agent that moves a client's messy HR exports into a new platform on its own, and asks a person only when the data cannot prove the answer.",
    facts: [
      { label: 'Type', value: 'Personal project' },
      { label: 'When', value: '2026' },
      { label: 'Stack', value: 'Python, FastAPI, pandas, React, TypeScript, open-weight LLMs, pytest' },
    ],
    results: [
      { value: '0', label: 'wrong autonomous decisions or silent errors across 9,440 fields of unseen test data' },
      { value: '100%', label: 'of genuinely ambiguous cases escalated to a person (recall)' },
      { value: '97%', label: 'escalation precision: 60 of 62 questions were needed' },
      { value: '12 → 1', label: "questions on the client's re-export a month later, after learning from corrections" },
    ],
    diagram: 'migration',
    diagramCaption: 'Each step does the confident work itself. Only the uncertain part becomes a question for a person, and each answer can become a rule for next time.',
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "A client's legacy HR exports arrive messy: CSV and Excel files with different column names, mixed date formats, duplicates and missing fields. All of it has to land correctly in a new platform, and some mistakes, like merging two different people, are hard to undo.",
        ],
      },
      {
        heading: 'The approach',
        paragraphs: [
          'I built it as a resumable state machine with an LLM at the judgment points, not a free-running tool loop: read, map, clean, combine, validate, push. A customer-facing migration needs predictability and an explainable audit trail more than open-ended planning.',
          'Each step does the confident work itself. Only the uncertain part becomes a question card for a consultant, carrying the question, why the agent did not decide, the evidence, and a one-click suggestion.',
        ],
      },
      {
        heading: 'Where the agent stops and asks',
        bullets: [
          'It acts alone only when a deterministic check can prove the answer. The LLM may propose, or add confidence to what the data already shows, but its opinion alone never changes customer data.',
          'It fixes formatting that can only mean one thing, like "Engg", "N/A" or "45.8 LPA". Which department "Special Projects" belongs to is a business decision, so it asks.',
          'Doubt about a whole column pauses the run; doubt about one record never does. A wrong date format corrupts every row, but one odd record should not hold up 59 good ones.',
          'Choices that are hard to undo are always asked: merging two people, choosing between two valid conflicting values, or inventing a required field.',
          'The line is deliberately not "ask whenever the LLM is unsure". LLM confidence is poorly calibrated, so that line would move with the model.',
        ],
      },
      {
        heading: 'Beyond the model',
        bullets: [
          'A deterministic layer around the LLM: value profiling, schema validation, date evidence across files, and a rule that when sources conflict, the only valid value wins.',
          'Learning from corrections: any answer can become a rule, so the re-export a month later asks 1 question instead of 12. Each rule is checked against the latest data and reviewed before it can be saved.',
          'Incremental sync sends only changed fields, in dependency order (managers first), and rollback restores the exact previous state.',
          'If every AI provider is down, it keeps working on rules alone and says clearly that no AI is involved.',
        ],
      },
      {
        heading: 'How I know it works',
        paragraphs: [
          'It is scored against ground truth, not an LLM judge. A data generator writes the expected outcome for every dataset, and a simulated consultant who knows the truth answers the questions, so any error left in the target is the agent\'s.',
          'Scores on my own sample data would be circular, so the headline comes from held-out datasets that move the traps and use unfamiliar column headers. Two held-out rounds each exposed a real bug, and both bugs made the agent ask more, never decide wrongly. After the fixes, a batch nothing was tuned on scored 0 wrong autonomous decisions and 0 silent errors across 9,440 fields, 100% recall and 97% precision.',
          'An adversarial test suite covers prompt injection, spreadsheet formula injection, XML bombs and tampered API calls. It found and closed seven issues.',
        ],
      },
      {
        heading: "What I'd build next",
        bullets: [
          'A dry-run preview of the full change for sign-off before the first push',
          'Synonym-aware header matching, to remove the last unneeded questions',
          'Rules scoped per client, and bulk resolution of similar questions',
          'Real connectors with authentication, rate limits and idempotency',
          'Production security: sign-in with roles and a second approver for irreversible actions. The prototype has no authentication.',
        ],
      },
    ],
    links: [
      { label: 'Code', href: `${GITHUB}/ai-data-migration-agent` },
      { label: 'Write-up', href: `${GITHUB}/ai-data-migration-agent/blob/main/WRITEUP.md` },
      { label: 'Evaluation report', href: `${GITHUB}/ai-data-migration-agent/blob/main/EVALUATION.md` },
    ],
  },
];

export const SITE_NAME = 'Umesh Chowdary Anubrolu';
export default caseStudies;
