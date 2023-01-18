"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "@/store/countSlice";
import classes from "./quiz.module.css";
import shuffle from "@/app/utils/shuffle";
import QuizButton from "../QuizButton/QuizButton";
import Button from "@/app/components/Button/Button";
import { incrementScore } from "@/store/scoreSlice";
import { useRouter } from "next/navigation";

export default function Quiz({ quiz }) {
  const count = useSelector(selectCount);
  const questions = shuffle(quiz).slice(0, count || 4);
  const [questionCount, setQuestionCount] = useState(0);
  const [question, setQuestion] = useState(questions[questionCount]);
  const [isCorrect, setIsCorrect] = useState("nil");
  const [isAnswerd, setIsAnswerd] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const onNextHandler = () => {
    setIsAnswerd(false);
    setIsCorrect("nil");
    if (questionCount < count) {
      setQuestion(questions[questionCount]);
    }
    if (questionCount === count) {
      router.push("/result");
    }
  };

  const onAnswer = (option) => {
    if (option === question.answer) {
      setIsCorrect(option);
      dispatch(incrementScore());
    } else {
      setIsCorrect("false" + option);
    }
    setQuestionCount((count) => (count += 1));
  };

  return (
    <div className={classes.quiz}>
      <h2 className={classes.title}>{question.question}</h2>
      <div className={classes.options}>
        {question.options.map((option, index) => (
          <QuizButton
            key={index}
            setQuestionCount={setQuestionCount}
            option={option}
            answer={question.answer}
            setIsAnswerd={setIsAnswerd}
            isCorrect={isCorrect}
            onAnswer={onAnswer}
          />
        ))}
      </div>
      {isAnswerd && <Button onClick={onNextHandler}>Next</Button>}
    </div>
  );
}
