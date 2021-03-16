import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {

  console.log(tours, "this tours object is coming from app.js")
  return <section>
    <div className="title">
      <h2>Our tours</h2>
      <div className="underline"></div>
    </div>
    {
      tours.map((tour) => {
        return <Tour key={tour.key} {...tour} removeTour={removeTour}></Tour>
      })
    }

  </section>;
};

export default Tours;
