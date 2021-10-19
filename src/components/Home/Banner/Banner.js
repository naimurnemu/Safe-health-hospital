import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className=" p-1">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/K0dBS2p/slide1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4>Best of Us</h4>
            <p>We assure you of our support.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/nRKB3NP/slide2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>Best of Us</h4>
            <p>We appreciate all of your help.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/W3nfmPz/slide3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>Best of Us</h4>
            <p>
              Nurses are very helpful and skilled. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/gFmFdZc/slide4.png"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h4>Best of Us</h4>
            <p>
              All procss time is perfect.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Q8CYCxK/slide5.png"
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h4>Best of Us</h4>
            <p>
              Morder life support.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
