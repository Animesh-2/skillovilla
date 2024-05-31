import React, { useState } from "react";

const Quiz = ({
  questionData,
  questionNumber,
  totalQuestions,
  onCickAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  
  const handleSubmit =()=>{
      if(selectedOption !== null){
          onCickAnswer(selectedOption);
          setSelectedOption(null);
      }
  }

  return (
    <div className="quiz">
      <h3>{questionData.question}</h3>

      <form>
        {["a", "b", "c", "d"].map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={`option-${option}`}
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${option}`}>{questionData[option]}</label>
            {console.log(questionData[option])}
          </div>
        ))}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selectedOption === null}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Quiz;
