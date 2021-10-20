import React from 'react';
import AboutOwner from '../AboutOwner/AboutOwner';
import AboutService from '../AboutService/AboutService';

const About = () => {
  return (
    <div className="mt-5 pt-5">
      <AboutService/>
      <AboutOwner/>
    </div>
  );
};

export default About;