import React from 'react';
import './HomeSection.css';
import Box from './Box';
import profilePic from '../images/profile-picture.jpeg'
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <Box className="relative flex flex-col md:flex-row-reverse w-full h-full bg-white dark:bg-gray-900 items-center justify-center" data-test-id="home-section">
      {/* Gradient background for image area on lg+ */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/3 h-full bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 z-0" data-test-id="home-section-image-bg" />
      {/* Image on right, vertically centered, only on lg+ */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full w-1/3 z-10" data-test-id="home-section-image-lg">
        <img src={profilePic} alt="Umesh Chowdary Anubrolu" className="profile-img w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-cover rounded-full" data-test-id="home-section-profile-img" />
      </div>
      {/* Image for mobile/tablet (stacked or side) */}
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto md:pl-8 lg:hidden z-10" data-test-id="home-section-image">
        <img src={profilePic} alt="Umesh Chowdary Anubrolu" className="profile-img w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-full" data-test-id="home-section-profile-img" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start w-full md:w-auto z-10" data-test-id="home-section-content">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hi There! </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">I'm <span className='font-extrabold font-serif'>Umesh </span></h1>
        <p className="text-black font-semibold" data-test-id="home-section-title">
          <span className="inline-block bg-gray-500 px-2 py-1 rounded">Member Technical at ADP | Full Stack AI Engineer</span>
        </p>
        <br/>
        <ul className="list-disc list-inside mt-4 space-y-1 max-w-xxl text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base" data-test-id="home-section-list-ul">
          <li>Member Technical at ADP India since September 2023</li>
          <li>Architected ADP's internal multi-agent AI platform, now used by 50+ engineers</li>
          <li>That platform took feature turnaround from about a week to about a day</li>
          <li>Full-stack engineer on The Zone, ADP's sales platform used by ~20,000 sales reps</li>
          <li>Builds Gen AI systems end to end: agents, MCP servers, RAG and fine-tuned models</li>
          <li>Works in Python, TypeScript, JavaScript and Java, with React, Node.js, FastAPI and Spring Boot</li>
          <li>AWS Certified AI Practitioner; published sign language recognition research (IJRASET 2023)</li>
        </ul>
        <br/>
        <div className="flex flex-wrap gap-3 mt-2">
          <Link to="/about" className="more-btn" data-test-id="home-section-more-btn">
            More About Me
          </Link>
          <Link to="/projects" className="more-btn more-btn-outline" data-test-id="home-section-projects-btn">
            See My Projects
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default HomeSection;