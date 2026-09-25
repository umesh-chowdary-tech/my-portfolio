import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import profilePic from '../images/profile-picture.jpeg';
import caseStudies from '../data/caseStudies';

// Measured results only; each one is backed by the verified facts behind the resume
const proof = [
  { value: '50+', label: 'engineers across development, QA and DevOps use the AI platform I architected at ADP' },
  { value: '~1 week → ~1 day', label: 'feature turnaround on that platform' },
  { value: '~20K', label: 'sales reps use The Zone, the sales platform I build on' },
];

const HomeSection = () => (
  <div className="space-y-12" data-test-id="home-section">
    <section className="flex flex-col-reverse items-center gap-8 pt-2 md:flex-row md:justify-between md:pt-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-[#FDB813]" data-test-id="home-section-title">
          Member Technical at ADP · Full Stack AI Engineer
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">Hi, I'm Umesh.</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl">
          I build Gen AI systems (agent platforms, RAG and fine-tuned models) and the full-stack products around them, in Hyderabad.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/resume" className="btn-primary" data-test-id="home-section-resume-btn">View my resume</Link>
          <Link to="/contact" className="btn-secondary" data-test-id="home-section-contact-btn">Get in touch</Link>
        </div>
      </div>
      <img
        src={profilePic}
        alt="Umesh Chowdary Anubrolu"
        className="h-36 w-36 flex-shrink-0 rounded-full object-cover ring-4 ring-[#FDB813] ring-offset-4 ring-offset-white dark:ring-offset-gray-900 sm:h-44 sm:w-44 md:h-56 md:w-56"
      />
    </section>

    <section aria-label="Results" className="grid gap-4 sm:grid-cols-3" data-test-id="home-section-proof">
      {proof.map(({ value, label }) => (
        <div key={value} className="rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-gray-700 dark:bg-gray-800">
          <p className="text-3xl font-bold text-gray-900 dark:text-[#FDB813]">{value}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{label}</p>
        </div>
      ))}
    </section>

    <section aria-labelledby="featured-work">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="featured-work" className="text-2xl font-bold">Featured work</h2>
        <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline dark:text-amber-400" data-test-id="home-section-projects-btn">
          All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {caseStudies.map((study) => (
          <Link
            key={study.slug}
            to={`/projects/${study.slug}`}
            className="group flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">{study.category}</p>
            <h3 className="mt-1 text-lg font-bold">{study.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{study.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-amber-700 dark:text-gray-100 dark:group-hover:text-amber-400">
              Read the case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default HomeSection;
