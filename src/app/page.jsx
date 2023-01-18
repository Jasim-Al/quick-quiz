import Form from "./components/Form/Form";
import classes from "./page.module.css";

export default function IndexPage() {
  return (
    <div className={classes.page}>
      <h2 className={classes.title}>Enter your Name to start!</h2>
      <Form />
    </div>
  );
}
