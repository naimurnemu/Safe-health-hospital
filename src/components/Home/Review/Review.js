import React from "react";
import Rating from "react-rating";

const Review = ({ review }) => {
  const { comment, email, name, picture, rate } = review;
  return (
    <div>
      <div className="col m-3">
        <div className="border rounded p-2 row align-items-center">
          <div className="col-3">
            <img
              className="rounded-circle img-fluid"
              src={picture}
              alt="client-Info"
            />
            <p className="text-warning mb-0 mt-3">
              <Rating
                placeholderRating={rate}
                emptySymbol={<i className="far fa-star"></i>}
                placeholderSymbol={<i className="fas fa-star"></i>}
                fullSymbol={<i className="fas fa-star"></i>}
              />
            </p>
            <small>Rating: {rate}</small>
          </div>
          <div className="col-9 text-start">
            <div className="border ps-2 border-secondary rounded">
              <h5 className="m-0">{name}</h5>
              <small className="m-0"> {email}</small>
            </div>
            <p className="my-2">{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
