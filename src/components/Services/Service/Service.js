import React from 'react';

const Service = ({service}) => {
  const {id, title, price, unit, description, img} = service
  return (
    <div>
      <h2>This is a single service</h2>
    </div>
  );
};

export default Service;