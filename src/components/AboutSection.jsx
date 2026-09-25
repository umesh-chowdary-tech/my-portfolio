import React, { useState } from 'react';
import { Layout, Camera, Target, Award, BookOpen, Users, Database, ChevronLeft, ChevronRight } from 'react-feather';

const HighlightCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow p-4 min-w-[90px]">
    <Icon className="h-6 w-6 text-[#FDB813] mb-1" />
    <div className="text-xl font-bold text-[#FDB813]">{value}</div>
    <div className="text-xs text-gray-600 dark:text-gray-400 text-center">{label}</div>
  </div>
);

const Badge = ({ children }) => (
  <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 inline-block">{children}</span>
);

const InterestCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md space-x-3">
    <Icon className="h-6 w-6 text-[#FDB813] mt-1" />
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{desc}</div>
    </div>
  </div>
);

const AboutSection = () => {
  const [page, setPage] = useState(0);
  const curntDate = new Date();
  const startDate = new Date('2023-09-19');
  let yrsOfExperience = curntDate.getFullYear() - startDate.getFullYear();
  if (
    curntDate.getMonth() < startDate.getMonth() ||
    (curntDate.getMonth() === startDate.getMonth() && curntDate.getDate() < startDate.getDate())
  ) {
    yrsOfExperience--;
  }

  // Page 1: Intro + Professional Summary + Highlights
  const page1 = (
    <div className="flex flex-col min-h-[40vh] space-y-4" data-test-id="about-section-page1">
      <div>
        <h2 className="text-3xl font-bold mb-1">About Me</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 mb-1">
          Hi, I'm <span className="font-semibold text-[#FDB813]">Umesh Anubrolu</span>, a Member Technical at ADP India in Hyderabad. I build full-stack products and Gen AI systems.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          At work I build agent platforms and full-stack tools used across ADP. In my own time I build RAG apps and fine-tune open models.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Users className="inline-block" /> Professional Highlights</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1">
          <li>Member Technical at <span className="font-semibold">ADP India</span> ({yrsOfExperience}+ yrs)</li>
          <li>Second-in-command to the Principal Architect on ADP's multi-agent AI platform, adopted by 50+ engineers</li>
          <li>Built a Jira agent that drafts tickets from Confluence and confirms with the user before creating anything</li>
          <li>Full-stack engineer on <span className="font-semibold">The Zone</span>, used by ~20,000 sales reps</li>
          <li>Published sign language recognition research (IJRASET, 2023)</li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-2">
        <HighlightCard icon={Users} label="Engineers on the AI platform" value="50+" />
        <HighlightCard icon={Target} label="Sales reps on The Zone" value="~20K" />
        <HighlightCard icon={Award} label="Best Work Awards" value="3" />
        <HighlightCard icon={BookOpen} label="At ADP" value={`${yrsOfExperience}+ yrs`} />
      </div>
    </div>
  );

  // Page 2: Skills, Awards, Interests
  const page2 = (
    <div className="flex flex-col min-h-[40vh] space-y-4" data-test-id="about-section-page2">
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Database className="inline-block" /> Core Skills</h3>
        <div className="flex flex-wrap">
          {['Python', 'TypeScript', 'JavaScript', 'Java', 'React', 'Node.js', 'Express.js', 'FastAPI', 'Spring Boot',
            'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Jenkins', 'MCP', 'RAG', 'LLM Fine-tuning', 'Claude APIs', 'Jest'].map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Award className="inline-block" /> Awards & Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-1">
          <li>AWS Certified AI Practitioner (2026)</li>
          <li>NPTEL certifications in Python for Data Science, Cloud Computing and DBMS</li>
          <li>iClub nomination, ADP's Highest Valued Contributor recognition</li>
          <li>Best Work Award, three times in five quarters</li>
          <li>Golden Shining Star of the Year</li>
          <li>Finalist, ADP Hackathon 2025</li>
          <li>LeetCode: 200+ problems solved, rating 1550. Codeforces: Specialist, rating 1450</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><BookOpen className="inline-block" /> Personal Interests</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InterestCard icon={Layout} title="Website Design" desc="User-focused, performant web experiences" />
          <InterestCard icon={Target} title="Startups" desc="Building solutions that make a difference" />
          <InterestCard icon={Camera} title="Cooking" desc="Exploring culinary creativity and spices" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative px-2 sm:px-4 space-y-8 pr-2 mt-12 md:mt-0" data-test-id="about-section">
      {page === 0 ? page1 : page2}
      <div className="flex justify-end mt-6 gap-2">
        <button
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 flex items-center"
          onClick={() => setPage(0)}
          disabled={page === 0}
          data-test-id="about-section-prev"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="p-2 bg-[#FDB813] text-white rounded hover:bg-[#e0a800] disabled:opacity-50 flex items-center"
          onClick={() => setPage(1)}
          disabled={page === 1}
          data-test-id="about-section-next"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;