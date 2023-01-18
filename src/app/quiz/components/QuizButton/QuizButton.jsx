"use client";

import { useState } from "react";
import classes from "./button.module.css";

export default function QuizButton({
  option,
  setIsAnswerd,
  isCorrect,
  onAnswer,
}) {
  const onAnswerHandler = () => {
    setIsAnswerd(true);
    onAnswer(option);
  };

  return (
    <button
      className={`${classes.button} ${
        isCorrect === "false" + option && classes.incorrect
      } ${isCorrect === option && classes.correct}`}
      onClick={onAnswerHandler}
    >
      {option}
    </button>
  );
}
