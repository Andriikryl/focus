import React from "react";
import styles from "./style.module.css";

type InputProps = {
  label: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputElement["type"];
  variant?: "inline" | "block";
  [key: string]: unknown;
};

export function Input({
  label,
  value,
  onChange,
  type = "text",
  variant = "inline",
  ...rest
}: InputProps) {
  return (
    <label className={styles.label} htmlFor={label}>
      <span className={styles.label__name}>{label}</span>
      <input
        className={styles.input}
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </label>
  );
}
