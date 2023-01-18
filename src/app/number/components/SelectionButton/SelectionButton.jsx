import classes from "./button.module.css";

export default function SelectionButton({ onClick, children, count, option }) {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${count === option && classes.active}`}
    >
      {children}
    </button>
  );
}
