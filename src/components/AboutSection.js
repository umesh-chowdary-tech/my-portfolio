import React from 'react';
import { Layout, Camera, Target, Award, BookOpen, Users, Database } from 'react-feather';

const StatCard = ({ value, label }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <div className="text-3xl font-bold text-[#FDB813]">{value}</div>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

const AboutSection = () => {
  const curntDate = new Date();
  const startDate = new Date('2023-09-19');
  let yrsOfExperience = curntDate.getFullYear() - startDate.getFullYear();
  if (
    curntDate.getMonth() < startDate.getMonth() ||
    (curntDate.getMonth() === startDate.getMonth() && curntDate.getDate() < startDate.getDate())
  ) {
    yrsOfExperience--;
  }

  return (
    <div className="h-[600px] overflow-y-auto pr-2 space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">ABOUT ME</h2>
      <div className="space-y-4">
        <p className="text-lg text-gray-700">
          Hi, I'm <span className="font-semibold text-[#FDB813]">Umesh Anubrolu</span>, a passionate software developer based in Hyderabad. I specialize in building scalable web applications and delivering impactful solutions for both startups and enterprises. With a strong foundation in Java, Python, JavaScript, and TypeScript, I thrive on solving complex problems and driving innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Professional Summary */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2"><Users className="inline-block" /> Professional Summary</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
              <li>
                Associate Developer at <span className="font-semibold">ADP India</span> with {yrsOfExperience}+ years of hands-on experience in full-stack development.
              </li>
              <li>
                Proven track record of delivering client-facing marketing projects using <span className="font-semibold">TypeScript, Express.js, and Node.js</span>, resulting in a 20% increase in user engagement.
              </li>
              <li>
                Designed and developed internal tools, streamlining workflows and reducing processing time by 15%.
              </li>
              <li>
                Expertise in troubleshooting and resolving technical challenges, achieving a 25% reduction in production bugs and a 40% improvement in query performance.
              </li>
              <li>
                Published research on <span className="font-semibold">Sign Language Recognition Using Machine Learning</span>.
              </li>
            </ul>
          </div>
          {/* Core Skills */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2"><Database className="inline-block" /> Core Skills</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">Java</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">Python</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">ReactJS</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">NodeJS</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">ExpressJS</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">PostgreSQL</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">Spring</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">Azure</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">Jest</span>
              <span className="bg-[#FDB813]/10 text-[#FDB813] px-3 py-1 rounded-full text-xs font-medium">BitBucket/GitHub</span>
            </div>
          </div>
          {/* Awards & Certifications */}
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2"><Award className="inline-block" /> Awards & Certifications</h3>
            <ul className="list-disc ml-6 text-gray-700 text-sm">
              <li>Certified in Python for Data Science, Data Base Management System, and Cloud Computing.</li>
              <li>Awarded Best Student Coordinator among Freshers; received Merit Based Scholarship.</li>
            </ul>
          </div>
        </div>
        {/* Personal Interests & Stats */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2"><BookOpen className="inline-block" /> Personal Interests</h3>
            <div className="grid gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
                <Layout className="h-6 w-6 text-[#FDB813]" />
                <div>
                  <h4 className="font-semibold">Website Design</h4>
                  <p className="text-sm text-gray-600">
                    Creating useful and functional websites with a focus on user experience and performance.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
                <Target className="h-6 w-6 text-[#FDB813]" />
                <div>
                  <h4 className="font-semibold">Startups</h4>
                  <p className="text-sm text-gray-600">
                    Bringing innovative ideas to life and building solutions that make a difference.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
                <Camera className="h-6 w-6 text-[#FDB813]" />
                <div>
                  <h4 className="font-semibold">Cooking</h4>
                  <p className="text-sm text-gray-600">
                    Exploring the world of spices and culinary creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard value={`${yrsOfExperience}+`} label="Years Experience" />
            <StatCard value="3+" label="Client Projects" />
            <StatCard value="5+" label="Personal Projects" />
            <StatCard value="1" label="Research Publication" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;