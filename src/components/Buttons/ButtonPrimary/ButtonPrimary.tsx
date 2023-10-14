import React from "react";
import styles from "./ButtonPrimary.module.css";
interface Props {
  color: "blue" | "green";
  text: string;
}
const Button = ({ color, text }: Props) => {
  const colorClass =
    color === "green" ? styles.customButtonGreen : styles.customButtonBlue;
  return (
    <button
      className={`${styles.customButton} ${colorClass} font-semibold text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
