import React from 'react';
import AboutDemo from '../AboutDemo/AboutDemo';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import ServiceDemo from '../ServiceDemo/ServiceDemo';

const Home = () => {
  return (
    <div className="mt-5 pt-5">
      <Banner/>
      <ServiceDemo/>
      <AboutDemo/>
      <Reviews/>
    </div>
  );
};

export default Home;