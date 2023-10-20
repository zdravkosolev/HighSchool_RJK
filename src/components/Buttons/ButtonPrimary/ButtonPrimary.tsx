import React from "react";
import styles from "./ButtonPrimary.module.css";

interface Props {
  color: "blue" | "green" | "white";
  text: string;
  textStyles?: React.CSSProperties;
}

const Button = ({ color, text , textStyles}: Props) => {
  const buttonClass = `font-semibold ${
    color === "white"
      ? `${styles.customButton} ${styles.customButtonWhite}`
      : color === "green"
      ? `${styles.customButton} ${styles.customButtonGreen}`
      : `${styles.customButton} ${styles.customButtonBlue}`
  }`;
  const textColorClass = color === "white" ? "text-blue" : "text-white";
  const buttonStyle =
    color === "white"
      ? {
          borderRadius: "15px",
          border: "2px solid var(--Dark-blue, #023859)",
        }
      : {};

  return (
    <button className={`${buttonClass} ${textColorClass}`} style={buttonStyle}>
      <span style={textStyles}>{text}</span>
    </button>
  );
};

export default Button;
