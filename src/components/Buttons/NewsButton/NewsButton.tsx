import React, { useState } from "react";
import styles from "./NewButton.module.css";
const NewsButton = ({ text }: { text: string }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <button
      className={`text-primary-darkblue ${styles.newsButton} ${
        isActive ? `${styles.active}` : ``
      }`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default NewsButton;
