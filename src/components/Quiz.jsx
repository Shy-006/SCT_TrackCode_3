import React, { useState } from 'react';
import questions from '../data/questions';
import QuestionCard from './QuestionCard';
import Result from './Result';
import './Quiz.css';


function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleNext = (isCorrect, userAnswer) => {
    if (isCorrect) setScore(score + 1);
    setAnswers([...answers, userAnswer]);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return showResult ? (
    <Result score={score} total={questions.length} />
  ) : (
    <QuestionCard
      data={questions[current]}
      onNext={handleNext}
    />
  );
}

export default Quiz;
