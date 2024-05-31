import React from 'react'

const Result = ({score, totalQuestions, handleReset}) => {
  
  return (
    <div className='result'>
      <h2>You answered correctly at {score}/{totalQuestions} questions</h2> 
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Result