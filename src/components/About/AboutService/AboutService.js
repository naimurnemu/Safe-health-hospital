import React from 'react';

const AboutService = () => {
  return (
    <div className="container">
      <h2 className="bg-danger p-1 rounded">In Your Emergency</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="border rounded">
            <img src="https://cdn.pixabay.com/photo/2021/07/06/17/57/helicopter-6392253__340.jpg" alt="" className="card-img-top p-2 rounded" />
            <div className="card-body">
              <h4 className="card-title">Air Ambulance</h4>
              <h3 className="text-warning"><i className="fas fa-phone-alt"></i> For Call <u>+8237897432873</u> </h3>
              <p className="card-text">Air ambulance service, sometimes called Aeromedical Evacuation or simply Medevac, is provided by a variety of different sources in different places in the world.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="border rounded">
            <img src="https://cdn.pixabay.com/photo/2020/03/27/22/41/emergency-medical-services-4975223__340.jpg" alt="" className="card-img-top p-2 rounded" />
            <div className="card-body">
              <h4 className="card-title">Private Ambulance</h4>
              <h3 className="text-warning"><i className="fas fa-phone-alt"></i> For Call <u>+8233878347893</u> </h3>
              <p className="card-text">Collective Ambulance. Collective ambulances is a type of ambulance that fits within non-medical ambulances or also called conventional ambulances.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutService;