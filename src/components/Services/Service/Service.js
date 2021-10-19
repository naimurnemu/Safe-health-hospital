import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, title, price, description, img } = service;
  return (
    <div className="col text-dark">
      <div className="card">
        <img src={img} className="img-fluid rounded" alt="service-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="text-start">
            <p className="card-text">{description}</p>
            <h4>Cost: ${price}</h4>
          </div>
        </div>
        <div>
          <Link to={`/service/${id}`}>
            <button className="btn btn-primary m-2">More Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
