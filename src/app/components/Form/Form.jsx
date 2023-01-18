"use client";
import { useState } from "react";
import { setName as setStateName } from "@/store/nameSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import Input from "../Input/Input";
import Button from "../Button/Button";

import classes from "./form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const onSetName = (event) => {
    event.preventDefault();
    dispatch(setStateName(name));
    router.push("/number");
  };
  return (
    <form onSubmit={onSetName} className={classes.form}>
      <Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        name="name"
        placeholder="Enter name"
      />
      <Button>Start Quiz</Button>
    </form>
  );
}
