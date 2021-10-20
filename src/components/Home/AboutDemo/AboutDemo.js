import React from "react";
import { Link } from "react-router-dom";

const AboutDemo = () => {
  return (
    <div className="bg-success p-3">
      <h2 className="p-2">About Us</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <img
            className="img-fluid"
            src="https://i.ibb.co/BzTMtMN/hospital.png"
            alt=""
          />
        </div>
        <div className="col-sm-12 col-md-6 text-start ps-md-5 py-4">
          <h3 className="mb-0">Safe Health Clinic</h3>
          <h6 className="mt-0">
            <i class="fas fa-map-marker-alt"></i> Hospital in Dhaka
          </h6>
          <div className="p-3">
            <h2>
              <u>Get Us</u>
            </h2>
            <h5 className="text-primary mb-0">
              <i class="fas fa-map-marked-alt"></i> Address
            </h5>
            <p className="mt-0">
              21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh
            </p>
            <h5 className="text-primary mb-0">
              <i class="fas fa-phone-alt"></i> Phone
            </h5>
            <p className="mt-0">10633, +8809666700100</p>
            <h5 className="text-primary mb-0">
              <i class="fas fa-at"></i> Email-Address
            </h5>
            <p className="mt-0">
              info@safehealth.com.bd, office.safehealth@hotmail.com
            </p>
          </div>
          <hr />
          <Link to="/about"><button className="btn btn-secondary">More About Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDemo;
