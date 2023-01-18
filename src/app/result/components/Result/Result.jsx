"use client";

import Button from "@/app/components/Button/Button";
import { selectCount } from "@/store/countSlice";
import { selectName } from "@/store/nameSlice";
import { selectScore, setTodefault } from "@/store/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import classes from "./result.module.css";
import { AiOutlineCheck, AiOutlinePercentage } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function Result() {
  const name = useSelector(selectName);
  const count = useSelector(selectCount);
  const score = useSelector(selectScore);

  const router = useRouter();
  const dispatch = useDispatch();
  const onTakeOnceMore = () => {
    dispatch(setTodefault());
    if (name) {
      router.push("/number");
    } else {
      router.push("/");
    }
  };

  return (
    <div className={classes.result}>
      <h3 className={classes.name}>Hey, {name}</h3>
      <h1 className={classes.title}>Thank you for taking the Quiz.</h1>
      <div className={classes.score}>
        <div className={classes.card}>
          <div className={classes.icon}>
            <AiOutlineCheck />
          </div>
          <div className={classes.container}>
            <p className={classes.marks}>{score}</p>
            <p>Correct Answers</p>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.icon}>
            <AiOutlinePercentage />
          </div>
          <div className={classes.container}>
            <p className={classes.marks}>
              {count != 0 ? Math.floor((score / count) * 100) : 0} %
            </p>
            <p>Percentage</p>
          </div>
        </div>
      </div>
      <Button onClick={onTakeOnceMore} className={classes.button}>
        Take Once More
      </Button>
    </div>
  );
}
