import React from 'react';
import { CheckCircle, ExternalLink, GitHub, ArrowRight, Lock } from 'react-feather';
import projectGroups, { githubProfile } from '../data/projects';

const ProjectCard = ({ title, category, period, description, highlights, tech, links = [], note }) => (
  <article className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 p-5" data-test-id="projects-section-card">
    <div className="flex items-baseline justify-between gap-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">{category}</p>
      {period && <p className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{period}</p>}
    </div>
    <h4 className="text-xl font-bold mt-1 mb-2">{title}</h4>
    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
    {highlights.length > 0 && (
      <ul className="mt-3 space-y-1">
        {highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FDB813]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((name) => (
        <span key={name} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs font-medium">{name}</span>
      ))}
    </div>
    {(links.length > 0 || note) && (
      <div className="flex flex-wrap items-center gap-4 mt-auto pt-4">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-amber-700 dark:hover:text-amber-400"
          >
            {label === 'Code' ? <GitHub className="w-4 h-4" aria-hidden="true" /> : <ExternalLink className="w-4 h-4" aria-hidden="true" />}
            {label}
          </a>
        ))}
        {note && (
          <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Lock className="w-4 h-4" aria-hidden="true" /> {note}
          </span>
        )}
      </div>
    )}
  </article>
);

const ProjectsSection = () => (
  <div className="max-h-[75vh] md:max-h-[640px] overflow-y-auto pr-2 mt-12 md:mt-0" data-test-id="projects-section">
    <h2 className="text-3xl font-bold border-b pb-2">PROJECTS</h2>
    {projectGroups.map((group) => (
      <section key={group.title} className="mt-6" data-test-id="projects-section-group">
        <h3 className="text-lg font-semibold">{group.title}</h3>
        {group.note && <p className="text-sm text-gray-500 dark:text-gray-400">{group.note}</p>}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mt-3">
          {group.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    ))}
    <a
      href={githubProfile}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-300"
    >
      More on GitHub <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </a>
  </div>
);

export default ProjectsSection;
