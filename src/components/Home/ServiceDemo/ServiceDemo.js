import React from "react";
import { Link } from "react-router-dom";

const ServiceDemo = () => {
  return (
    <div>
      <h2 className="bg-success p-2 rounded my-3 ">Our Sevices</h2>
      <div className="row align-items-center justify-content-center border-bottom border-white">
        <div className="col-md-8">
          <h4>Why us?</h4>
          <div className="text-start px-5 py-3">
            <h5>1. Put patients first</h5>

            <h5>2. Deliver compassionate care</h5>

            <h5>3. Commit to excellence</h5>

            <h5>4. Foster a culture of innovation</h5>

            <h5>5. Trust Spok for clinical communication</h5>
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid p-2 rounded"
            src="https://i.ibb.co/sV7RgSq/demo-Service.png"
            alt=""
          />
        </div>
      </div>
      <Link to="/services"><button className="btn btn-warning m-2 fw-bold"> Go to Services</button></Link>
    </div>
  );
};

export default ServiceDemo;
