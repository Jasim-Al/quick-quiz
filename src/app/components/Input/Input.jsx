import classes from "./input.module.css";

export default function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      className={classes.input}
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
