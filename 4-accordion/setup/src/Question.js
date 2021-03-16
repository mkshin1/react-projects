import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, info, title }) => {

  const [showInfo, setShowInfo] = useState(false)

  return <article className="question">

    <header>
      <h2>{title}</h2>
      <button className="btn" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}

      </button>


    </header>
    {
      showInfo && <p>{info}</p>
    }
    {/* <p>{info}</p> */}

  </article>;
};

export default Question;
