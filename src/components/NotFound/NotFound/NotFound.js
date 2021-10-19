import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container-fluid bg-light">
      <img className="w-100 p-3" src="https://i.ibb.co/HBky4pL/404.jpg" alt="Not_Found" />
      <Link to="/"><button className="btn m-2 btn-primary">Go Back</button></Link>
      
    </div>
  );
};

export default NotFound;