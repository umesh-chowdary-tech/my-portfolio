import React from 'react';
import './HomeSection.css';
import Box from './Box';
import profilePic from '../images/profile-picture.jpeg'
import PropTypes from 'prop-types';

const HomeSection = ({ setActiveTab }) => {
  return (
    <div className='flex grid-rows-3 gap-0'>
      <Box className="grid-cols-2 bg-white">
      <section className="home">
      <h1>Hi There! </h1>
      <h1>I'm <span className='font-extrabold font-serif'>Umesh </span></h1>
      <p className="text-black font-semibold">
  <span className="bg-gray-500">Full Stack Developer | Gen AI Developer</span>
</p>
      <br/>
      <p className="max-w-xl text-gray-700 leading-relaxed mt-2">
        <ul className="list-disc list-inside mt-2 space-y-1">
    <li>Proficient in Java, Python, JavaScript, TypeScript, SQL, and MERN</li>
    <li>Experienced in building scalable web apps with ReactJS, Node.js, Spring Boot, and ExpressJS</li>
    <li>Developed and optimized internal tools, improving workflow efficiency and reducing processing time by 45%</li>
    <li>Applied machine learning for sentiment analysis, boosting classification accuracy by 30%</li>
    <li>Published research paper on Sign Language Recognition using Machine Learning</li>
    <li>Certified in Python for Data Science, Database Management, and Cloud Computing</li>
  </ul>
</p>
      <br/>
      <button
        className="more-btn"
        onClick={() => setActiveTab('about')}
      >
        More About Me
      </button>
    </section>
      </Box>
    
    <Box className="grid-cols-1 bg-gray-400">
    <section className="home">
    <img src={profilePic} alt="Profile" className="profile-img" height='20vh' style={{borderRadius:'50px'}}/>
    </section>
    </Box>
    </div>
  );
};

HomeSection.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeSection;