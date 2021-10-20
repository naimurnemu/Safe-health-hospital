import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("./client.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="bg-info text-dark p-1 m-1">
      <h2><u>Our Clints says:</u> </h2>
      <div className="row g-2 row-cols-1 row-cols-md-2">
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
      <div>{}</div>
    </div>
  );
};

export default Reviews;
