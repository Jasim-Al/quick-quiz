import classes from "./button.module.css";

export default function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
}
