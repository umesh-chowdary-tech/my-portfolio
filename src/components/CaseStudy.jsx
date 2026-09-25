import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, GitHub, Lock } from 'react-feather';
import caseStudies, { SITE_NAME } from '../data/caseStudies';
import { MigrationDiagram, VidhiDiagram } from './diagrams';

const diagrams = { vidhi: VidhiDiagram, migration: MigrationDiagram };

const CaseStudy = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const study = caseStudies[index];

  useEffect(() => {
    if (study) document.title = `${study.title} | ${SITE_NAME}`;
  }, [study]);

  if (!study) return <Navigate to="/projects" replace />;

  const next = caseStudies[(index + 1) % caseStudies.length];
  const Diagram = study.diagram ? diagrams[study.diagram] : null;

  return (
    <article className="max-w-5xl" data-test-id="case-study">
      <div className="max-w-3xl">
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline dark:text-amber-400">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
      </Link>

      <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">{study.category}</p>
      <h1 className="mt-1 text-3xl font-bold sm:text-4xl">{study.title}</h1>
      <p className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300">{study.summary}</p>
      </div>

      <dl className="mt-6 grid max-w-3xl gap-4 text-sm sm:grid-cols-3">
        {study.facts.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-gray-500 dark:text-gray-400">{label}</dt>
            <dd className="mt-0.5 font-medium">{value}</dd>
          </div>
        ))}
      </dl>

      <section aria-label="Results" className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
        {study.results.map(({ value, label }) => (
          <div key={label} className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-2xl font-bold text-gray-900 dark:text-[#FDB813]">{value}</p>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{label}</p>
          </div>
        ))}
      </section>

      {Diagram && (
        <figure className="mt-10">
          <div className="overflow-x-auto rounded-lg border p-4">
            <Diagram />
          </div>
          <figcaption className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
            {study.diagramCaption}
            <span className="xl:hidden"> Scroll sideways to see the whole diagram.</span>
          </figcaption>
        </figure>
      )}

      {study.sections.map(({ heading, paragraphs = [], bullets = [] }) => (
        <section key={heading} className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold">{heading}</h2>
          {paragraphs.map((text) => (
            <p key={text} className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{text}</p>
          ))}
          {bullets.length > 0 && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-700 marker:text-amber-600 dark:text-gray-300 dark:marker:text-[#FDB813]">
              {bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {(study.links || study.note) && (
        <div className="mt-10 flex max-w-3xl flex-wrap items-center gap-3">
          {(study.links || []).map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={label === 'Code' ? 'btn-primary' : 'btn-secondary'}>
              {label === 'Code' ? <GitHub className="h-4 w-4" aria-hidden="true" /> : <ExternalLink className="h-4 w-4" aria-hidden="true" />}
              {label}
            </a>
          ))}
          {study.note && (
            <p className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Lock className="h-4 w-4" aria-hidden="true" /> {study.note}
            </p>
          )}
        </div>
      )}

      <nav className="mt-12 flex max-w-3xl flex-wrap justify-between gap-4 border-t pt-6 text-sm font-semibold" aria-label="More case studies">
        <Link to="/projects" className="inline-flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>
        <Link to={`/projects/${next.slug}`} className="inline-flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400">
          Next: {next.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
};

export default CaseStudy;
