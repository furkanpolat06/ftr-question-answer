import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Card = ({ question }) => {
  const [isVisible, setIsVisible] = useState(false);
  console.log("buradaki", question);
  return (
    <div className="cards">
      <div className="question">
        {question.question.toUpperCase()}
        <button
          className="button"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
         ⇅
        </button>
      </div>
      {isVisible && <div className="answer">{question.answer} <img src={question.img} alt="" /> </div>}
    </div>
  );
};

export default Card;
