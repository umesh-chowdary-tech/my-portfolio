import React from 'react';
import './HomeSection.css';
import Box from './Box';
import profilePic from '../images/profile-picture.jpeg'
import PropTypes from 'prop-types';

const HomeSection = ({ setActiveTab }) => {
  return (
    <Box className="relative flex flex-col md:flex-row-reverse w-full h-full bg-white items-center justify-center" data-test-id="home-section">
      {/* Gradient background for image area on lg+ */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-1/3 h-full bg-gradient-to-b from-gray-100 to-gray-300 z-0" data-test-id="home-section-image-bg" />
      {/* Image on right, vertically centered, only on lg+ */}
      <div className="hidden lg:flex flex-col items-center justify-center h-full w-1/3 z-10" data-test-id="home-section-image-lg">
        <img src={profilePic} alt="Profile" className="profile-img w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-cover rounded-full" data-test-id="home-section-profile-img" />
      </div>
      {/* Image for mobile/tablet (stacked or side) */}
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto md:pl-8 lg:hidden z-10" data-test-id="home-section-image">
        <img src={profilePic} alt="Profile" className="profile-img w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover rounded-full" data-test-id="home-section-profile-img" />
      </div>
      <div className="flex-1 flex flex-col justify-center items-start w-full md:w-auto z-10" data-test-id="home-section-content">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Hi There! </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">I'm <span className='font-extrabold font-serif'>Umesh </span></h1>
        <p className="text-black font-semibold" data-test-id="home-section-title">
          <span className="bg-gray-500 px-2 py-1 rounded">Full Stack Developer | Gen AI Developer</span>
        </p>
        <br/>
        <ul className="list-disc list-inside mt-4 space-y-1 max-w-xxl text-gray-700 leading-relaxed text-sm sm:text-base" data-test-id="home-section-list-ul">
          <li>Proficient in Java, Python, JavaScript, TypeScript, SQL, and MERN</li>
          <li>Experienced in building scalable web apps with ReactJS, Node.js, Spring Boot, and ExpressJS</li>
          <li>Developed and optimized internal tools, improving workflow efficiency and reducing processing time by 45%</li>
          <li>Applied machine learning for sentiment analysis, boosting classification accuracy by 30%</li>
          <li>Published research paper on Sign Language Recognition using Machine Learning</li>
          <li>Certified in Python for Data Science, Database Management, and Cloud Computing</li>
        </ul>
        <br/>
        <button
          className="more-btn mt-2"
          onClick={() => setActiveTab('about')}
          data-test-id="home-section-more-btn"
        >
          More About Me
        </button>
      </div>
    </Box>
  );
};

HomeSection.propTypes = {
  setActiveTab: PropTypes.func.isRequired,
};

export default HomeSection;