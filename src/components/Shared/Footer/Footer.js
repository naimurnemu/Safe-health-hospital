import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary text-dark px-5 pt-3">
      <div className="d-flex flex-sm-column flex-md-row justify-content-evenly align-items-center">
        <div className="bg-danger text-light p-2 rounded">
          <h4>Emergancy:</h4>
          <h2>
            <i className="fas fa-phone-square">
              <span> +8843598732987</span>
            </i>
          </h2>
          <small>call for Ambulance</small>
        </div>
        <div className="p-3">
          <h4 className="text-primary">Contact for detail:</h4>
          <p className="bg-light">
            <i className="fas fa-headset"> +8823549873788</i>
          </p>
          <p className="bg-light">
            <i className="fas fa-headset"> +8823433787397</i>
          </p>
        </div>
      </div>
      <hr />
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-7 d-flex justify-content-around align-items-center">
          <div>
            <h2 className="m-0 text-white">
              <em>Safe</em>
            </h2>
            <h3 className="m-0 text-primary">Health</h3>
            <small className="text-warning">Your good health is your greatest wealth.</small>
          </div>
          <div className="d-flex flex-column">
            <NavLink className="nav-link text-white" to="/home">
              <small>Home</small>
            </NavLink>
            <NavLink className="nav-link text-white" to="/services">
              <small>Services</small>
            </NavLink>
            <NavLink className="nav-link text-white" to="/e-doctor">
              <small>E-Doctor</small>
            </NavLink>
            <NavLink className="nav-link text-white" to="/about">
              <small>About</small>
            </NavLink>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <h4>Follow us</h4>
          <p>
            <span className="bg-info rounded-circle p-2 m-1">
              <i className="fab fa-twitter"></i>
            </span>{" "}
            <span className="bg-primary rounded-circle p-2 mx-1">
              <i className="fab fa-facebook"></i>
            </span>{" "}
            <span className="bg-success rounded-circle p-2 m-1">
              <i className="fab fa-instagram"></i>
            </span>{" "}
            <span className="bg-danger rounded-circle p-2 m-1">
              <i className="fab fa-youtube"></i>
            </span>
          </p>
          <p>
            <small>&copy;2021. All rights reserved by Me. </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
