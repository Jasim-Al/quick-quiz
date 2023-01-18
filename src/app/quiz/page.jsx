import fs from "fs/promises";
import path from "path";
import Quiz from "./components/Quiz/Quiz";
import classes from "./page.module.css";

async function getQuiz() {
  let data;

  try {
    data = await fs.readFile(
      path.join(process.cwd(), "src", "files", "quiz.json")
    );
    return JSON.parse(data).quiz;
  } catch (error) {
    throw new Error("Data fetching failed.");
  }
}

export const revalidate = 3600;

export default async function QuizPage() {
  const quiz = await getQuiz();

  return (
    <div className={classes.page}>
      <Quiz quiz={quiz} />
    </div>
  );
}
