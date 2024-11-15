import React from 'react';
import './HomeSection.css';
import Box from './Box';
import profilePic from '../images/profile-picture.jpeg'

const HomeSection = () => {
  return (
    <div className='flex grid-rows-2 gap-0'>
      <Box className="bg-white">
      <section className="home">
      <h1>Hi There! </h1>
      <h1>I'm <span className='font-extrabold font-serif'>Umesh </span></h1>
      <p className="text-black font-semibold">
  <span className="bg-gray-500">Full Stack Developer | Gen AI Developer</span>
</p>
      <br/>
      <p className='max-w-xl'>
        Proficient in MERN Stack, Spring Boot, and Python. 
        <br/>Passionate about implementing and launching new projects. 
        <br/>Ability to translate business requirements into technical solutions. 
        <br/>Seeking to join a forward-thinking, technology-driven company 
        where I can apply my expertise and grow through challenging and impactful projects.
      </p>
      <br/>
      <button className="more-btn">More About Me</button>
    </section>
      </Box>
    
    <Box className="bg-gray-400">
    <section className="home">
    <img src={profilePic} alt="Profile" className="profile-img" height='20vh' style={{borderRadius:'50px'}}/>
    </section>
    </Box>
    </div>
  );
};

export default HomeSection;