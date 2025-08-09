import React, { useState } from 'react';
import { Layout, Camera, Target, Award, BookOpen, Users, Database, ChevronLeft, ChevronRight } from 'react-feather';

const HighlightCard = ({ icon: Icon, label, value }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow p-4 min-w-[90px]">
    <Icon className="h-6 w-6 text-[#FDB813] mb-1" />
    <div className="text-xl font-bold text-[#FDB813]">{value}</div>
    <div className="text-xs text-gray-600 text-center">{label}</div>
  </div>
);

const Badge = ({ children }) => (
  <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium mr-2 mb-2 inline-block">{children}</span>
);

const InterestCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start bg-white p-4 rounded-lg shadow-md space-x-3">
    <Icon className="h-6 w-6 text-[#FDB813] mt-1" />
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-gray-600">{desc}</div>
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
        <p className="text-base text-gray-700 mb-1">
          Hi, I'm <span className="font-semibold text-[#FDB813]">Umesh Anubrolu</span>, a Hyderabad-based software developer passionate about building scalable, impactful web applications.
        </p>
        <p className="text-sm text-gray-600">
          I thrive on solving complex problems, driving innovation, and delivering results for startups and enterprises. My expertise spans full-stack development, workflow automation, and research in machine learning.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Users className="inline-block" /> Professional Highlights</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Associate Developer at <span className="font-semibold">ADP India</span> ({yrsOfExperience}+ yrs experience)</li>
          <li>Led projects using <span className="font-semibold">TypeScript, Node.js, Express.js</span> (20%+ user engagement boost)</li>
          <li>Optimized internal tools, reducing processing time by 15%</li>
          <li>Published research on Sign Language Recognition (ML)</li>
        </ul>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center mt-2">
        <HighlightCard icon={Award} label="Awards" value="2" />
        <HighlightCard icon={Database} label="Core Skills" value="12+" />
        <HighlightCard icon={BookOpen} label="Projects" value="8+" />
        <HighlightCard icon={Users} label="Experience" value={`${yrsOfExperience}+ yrs`} />
      </div>
    </div>
  );

  // Page 2: Skills, Awards, Interests
  const page2 = (
    <div className="flex flex-col min-h-[40vh] space-y-4" data-test-id="about-section-page2">
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Database className="inline-block" /> Core Skills</h3>
        <div className="flex flex-wrap">
          <Badge>Java</Badge>
          <Badge>Python</Badge>
          <Badge>JavaScript</Badge>
          <Badge>TypeScript</Badge>
          <Badge>ReactJS</Badge>
          <Badge>NodeJS</Badge>
          <Badge>ExpressJS</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Spring</Badge>
          <Badge>Azure</Badge>
          <Badge>Jest</Badge>
          <Badge>BitBucket/GitHub</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold flex items-center gap-2 mb-1"><Award className="inline-block" /> Awards & Certifications</h3>
        <ul className="list-disc ml-6 text-gray-700 text-sm space-y-1">
          <li>Certified in Python for Data Science, DBMS, and Cloud Computing</li>
          <li>Best Student Coordinator, Merit Scholarship recipient</li>
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
          className="p-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 flex items-center"
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