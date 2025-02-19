import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  console.log(people)

  const nextPerson = () => {
    setIndex(() => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })

  }
  const prevPerson = () => {
    setIndex(() => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
    console.log(randomNumber)

  }
  return <article className="review">
    <div className="img-container">

      <img src={image} alt={name} className="person-img"></img>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="arthor">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
      <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>

    </div>
    <button className="random-btn" onClick={randomPerson}>surpise me!</button>


  </article>;
};

export default Review;
