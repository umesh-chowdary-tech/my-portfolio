import React from 'react';

// Architecture diagrams for the case studies. CaseStudy.jsx maps each study's
// `diagram` field (src/data/caseStudies.js) to one of these. Plain SVG, coloured
// with Tailwind classes so they follow the light/dark theme. The wrapper scrolls
// sideways on narrow screens rather than shrinking the text below readable size.

const boxStyles = {
  plain: 'fill-white stroke-gray-300 dark:fill-gray-800 dark:stroke-gray-600',
  accent: 'fill-amber-50 stroke-amber-500 dark:fill-amber-500/10 dark:stroke-amber-400',
};

// A box with a bold title and up to a few lines of smaller text under it
const Box = ({ x, y, w, h, title, lines = [], accent = false }) => {
  const lineHeight = 17;
  const blockHeight = 19 + lines.length * lineHeight;
  const top = y + (h - blockHeight) / 2 + 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" strokeWidth="1.5" className={boxStyles[accent ? 'accent' : 'plain']} />
      <text x={x + w / 2} y={top} textAnchor="middle" className="fill-gray-900 text-[14px] font-semibold dark:fill-gray-100">
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={line} x={x + w / 2} y={top + 19 + i * lineHeight} textAnchor="middle" className="fill-gray-600 text-[12.5px] dark:fill-gray-300">
          {line}
        </text>
      ))}
    </g>
  );
};

const Arrowhead = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" className="fill-gray-500 dark:fill-gray-400" />
    </marker>
  </defs>
);

const Line = ({ d, marker, dashed = false }) => (
  <path d={d} fill="none" strokeWidth="1.5" strokeDasharray={dashed ? '5 4' : undefined} markerEnd={marker ? `url(#${marker})` : undefined} className="stroke-gray-500 dark:stroke-gray-400" />
);

export const VidhiDiagram = () => (
  <svg viewBox="0 0 760 330" role="img" aria-labelledby="vidhi-diagram-title" className="w-full min-w-[760px]">
    <title id="vidhi-diagram-title">
      How Vidhi works: a contract PDF is split into whole clauses; a router sends the request to Chat, which retrieves clauses with FAISS and has Gemma answer with citations, or to Analyze, which runs two self-trained Legal-BERT models to produce a clause breakdown, key fields and a missing-clause checklist.
    </title>
    <Arrowhead id="vidhi-arrow" />
    <Box x={10} y={135} w={140} h={60} title="Contract PDF" lines={['plus your request']} />
    <Line d="M150,165 H181" marker="vidhi-arrow" />
    <Box x={185} y={135} w={150} h={60} title="Split into clauses" lines={['never cut mid-clause']} />
    <Line d="M335,165 H366" marker="vidhi-arrow" />
    <Box x={370} y={120} w={150} h={90} title="Router" lines={['fast rules first;', 'Gemma only when', 'ambiguous']} accent />
    <Line d="M520,150 L556,85" marker="vidhi-arrow" />
    <Line d="M520,180 L556,245" marker="vidhi-arrow" />
    <Box x={560} y={15} w={190} h={130} title="Chat" lines={['MiniLM embeddings', 'FAISS retrieval', 'Gemma answers,', 'citing its clauses']} />
    <Box x={560} y={185} w={190} h={130} title="Analyze" lines={['Legal-BERT classifier', 'Legal-BERT extractor', '(both self-trained)', 'missing-clause checklist']} />
  </svg>
);

const steps = [
  { title: 'Read', lines: ['CSV, Excel'] },
  { title: 'Map columns', lines: ['header + values'] },
  { title: 'Clean', lines: ['formats, typos'] },
  { title: 'Combine', lines: ['duplicates'] },
  { title: 'Validate', lines: ['schema checks'] },
  { title: 'Push to API', lines: ['changes only'] },
];
const STEP_W = 105;
const STEP_GAP = 22;
const stepX = (i) => 10 + i * (STEP_W + STEP_GAP);
const stepCenter = (i) => stepX(i) + STEP_W / 2;

export const MigrationDiagram = () => (
  <svg viewBox="0 0 760 300" role="img" aria-labelledby="migration-diagram-title" className="w-full min-w-[760px]">
    <title id="migration-diagram-title">
      How the migration agent works: read, map columns, clean, combine, validate and push to the API. When a step cannot prove an answer, it raises a question card with the reason, evidence and a suggestion; a consultant answers in one click, and the answer can be saved as a rule for next time. Every decision goes into an audit trail.
    </title>
    <Arrowhead id="migration-arrow" />
    {steps.map((step, i) => (
      <g key={step.title}>
        <Box x={stepX(i)} y={20} w={STEP_W} h={60} title={step.title} lines={step.lines} />
        {i < steps.length - 1 && <Line d={`M${stepX(i) + STEP_W},50 H${stepX(i + 1) - 4}`} marker="migration-arrow" />}
      </g>
    ))}
    {/* Uncertain cases from the middle steps drop down to a question card */}
    {[1, 2, 3, 4].map((i) => (
      <Line key={i} d={`M${stepCenter(i)},80 V120`} dashed />
    ))}
    <Line d={`M${stepCenter(1)},120 H${stepCenter(4)}`} dashed />
    <Line d={`M${stepCenter(1) + 60},120 V186`} marker="migration-arrow" dashed />
    <text x={stepCenter(1) + 68} y={158} className="fill-gray-600 text-[12.5px] italic dark:fill-gray-300">
      only when it can't prove the answer
    </text>
    <Box x={150} y={190} w={220} h={80} title="Question card" lines={['question, reason,', 'evidence, suggestion']} accent />
    <Line d="M370,230 H406" marker="migration-arrow" />
    <Box x={410} y={190} w={180} h={80} title="Consultant answers" lines={['in one click']} />
    <Line d="M590,230 H626" marker="migration-arrow" />
    <Box x={630} y={190} w={120} h={80} title="Saved as a rule" lines={['applies next time']} />
    <text x={380} y={292} textAnchor="middle" className="fill-gray-500 text-[12.5px] dark:fill-gray-400">
      Every decision, by the agent or a person, goes into the audit trail
    </text>
  </svg>
);

