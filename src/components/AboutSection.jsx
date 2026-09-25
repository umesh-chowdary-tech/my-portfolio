import React from 'react';
import { Layout, Camera, Target, Award, BookOpen, Users, Database } from 'react-feather';

// Amber-600/700 on light backgrounds and the brand yellow on dark ones: yellow text
// on white is too low-contrast to read.
const accentText = 'text-amber-600 dark:text-[#FDB813]';

const HighlightCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center rounded-lg bg-white p-4 text-center shadow dark:bg-gray-800">
    <Icon className={`mb-1 h-6 w-6 ${accentText}`} aria-hidden="true" />
    <div className={`text-2xl font-bold ${accentText}`}>{value}</div>
    <div className="text-xs text-gray-600 dark:text-gray-400">{label}</div>
  </div>
);

const Badge = ({ children }) => (
  <span className="mb-2 mr-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900 dark:bg-[#FDB813]/15 dark:text-[#FDB813]">{children}</span>
);

const InterestCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start space-x-3 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
    <Icon className={`mt-1 h-6 w-6 ${accentText}`} aria-hidden="true" />
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{desc}</div>
    </div>
  </div>
);

const SectionHeading = ({ icon: Icon, children }) => (
  <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
    <Icon className="inline-block" aria-hidden="true" /> {children}
  </h3>
);

const yearsSince = (start) => {
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() < start.getDate())) years--;
  return years;
};

const AboutSection = () => {
  const yrsOfExperience = yearsSince(new Date('2023-09-19'));

  return (
    <div className="space-y-10" data-test-id="about-section">
      <div>
        <h2 className="section-title">ABOUT ME</h2>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Hi, I'm <span className="font-semibold text-amber-700 dark:text-[#FDB813]">Umesh Anubrolu</span>, a Member Technical at ADP India in Hyderabad. I build full-stack products and Gen AI systems.
        </p>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          At work I build agent platforms and full-stack tools used across ADP. In my own time I build RAG apps and fine-tune open models.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <HighlightCard icon={Users} label="Engineers on the AI platform" value="50+" />
        <HighlightCard icon={Target} label="Sales reps on The Zone" value="~20K" />
        <HighlightCard icon={Award} label="Best Work Awards" value="3" />
        <HighlightCard icon={BookOpen} label="At ADP" value={`${yrsOfExperience}+ yrs`} />
      </div>

      <div>
        <SectionHeading icon={Users}>Professional Highlights</SectionHeading>
        <ul className="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
          <li>Member Technical at <span className="font-semibold">ADP India</span> ({yrsOfExperience}+ yrs)</li>
          <li>Second-in-command to the Principal Architect on ADP's multi-agent AI platform, adopted by 50+ engineers</li>
          <li>Built a Jira agent that drafts tickets from Confluence and confirms with the user before creating anything</li>
          <li>Full-stack engineer on <span className="font-semibold">The Zone</span>, used by ~20,000 sales reps</li>
          <li>Published sign language recognition research (IJRASET, 2023)</li>
        </ul>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading icon={Database}>Core Skills</SectionHeading>
          <div className="flex flex-wrap">
            {['Python', 'TypeScript', 'JavaScript', 'Java', 'React', 'Node.js', 'Express.js', 'FastAPI', 'Spring Boot',
              'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Jenkins', 'MCP', 'RAG', 'LLM Fine-tuning', 'Claude APIs', 'Jest'].map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading icon={Award}>Awards & Certifications</SectionHeading>
          <ul className="ml-6 list-disc space-y-1 text-gray-700 dark:text-gray-300">
            <li>AWS Certified AI Practitioner (2026)</li>
            <li>NPTEL certifications in Python for Data Science, Cloud Computing and DBMS</li>
            <li>iClub nomination, ADP's Highest Valued Contributor recognition</li>
            <li>Best Work Award, three times in five quarters</li>
            <li>Golden Shining Star of the Year</li>
            <li>Finalist, ADP Hackathon 2025</li>
            <li>LeetCode: 200+ problems solved, rating 1550. Codeforces: Specialist, rating 1450</li>
          </ul>
        </div>
      </div>

      <div>
        <SectionHeading icon={BookOpen}>Personal Interests</SectionHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InterestCard icon={Layout} title="Website Design" desc="User-focused, performant web experiences" />
          <InterestCard icon={Target} title="Startups" desc="Building solutions that make a difference" />
          <InterestCard icon={Camera} title="Cooking" desc="Exploring culinary creativity and spices" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
