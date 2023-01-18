import Selection from "./components/Selection/Selection";
import classes from "./page.module.css";

export default function NumberPage() {
  return (
    <div className={classes.page}>
      <h2 className={classes.title}>Select Number of Questions</h2>
      <Selection />
    </div>
  );
}
