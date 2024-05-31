import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";

function App() {
  const [quizData, setQuizData] = useState([
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
    {
      question: "What is the most used programming language in 2020?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerSelection = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
    }
  };
  
  const handleReset=()=>{
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
  }

  return (
    <div className="App">
      {isQuizFinished ? (
        <Result score={score} totalQuestions={quizData.length} handleReset={handleReset}/>
      ) : (
        <Quiz
          questionData={quizData[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={quizData.length}
          onCickAnswer={handleAnswerSelection}
        />
      )}
    </div>
  );
}

export default App;
