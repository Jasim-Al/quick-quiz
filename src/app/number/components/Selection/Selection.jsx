"use client";

import { useState } from "react";
import Button from "@/app/components/Button/Button";
import SelectionButton from "../SelectionButton/SelectionButton";
import classes from "./selection.module.css";
import { useDispatch } from "react-redux";
import { setCount as setStoreCount } from "@/store/countSlice";
import { useRouter } from "next/navigation";

const options = [4, 6, 8, 10];

export default function Selection() {
  const [count, setCount] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const onNextHandler = () => {
    dispatch(setStoreCount(count));
    router.push("/quiz");
  };

  return (
    <div className={classes.selection}>
      <div className={classes.list}>
        {options.map((option, index) => (
          <SelectionButton
            option={option}
            key={index}
            count={count}
            onClick={() => setCount(option)}
          >
            {option}
          </SelectionButton>
        ))}
      </div>
      {count && <Button onClick={onNextHandler}>Next</Button>}
    </div>
  );
}
