import React from "react";

const AboutOwner = () => {
  return (
    <div className="m-3 text-dark bg-light text-start rounded">
      <div className="card p-3 mb-3">
        <div className="row g-0 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src="https://images.pexels.com/photos/8942054/pexels-photo-8942054.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="img-fluid rounded"
              alt="hospital ower"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title bg-info p-1 rounded text-center">
                About Owner
              </h5>
              <p className="card-text">
                Roman Pichler is an internationally renowned product management
                expert specialised in digital products and agile practices.
                Roman has taught product managers and product owners and advised
                product leaders for more than 15 years. Roman shares his
                knowledge through his training courses and consulting services,
                his three books on product management, his popular blog,
                podcast, and talks, and his product management tools, including
                his widely used product vision board. When he’s not busy with
                work, Roman enjoys spending time with his family, cycling in the
                Chiltern hills, playing the tenor saxophone, and helping with
                family events at Amaravati Buddhist monastery. Roman is based in
                Wendover, near London in the UK.​To discuss how Roman can help
                you, please fill in the contact form or email him.​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOwner;
