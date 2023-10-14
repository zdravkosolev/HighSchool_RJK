import React, { useState } from "react";
import styles from "./ChooseYearButton.module.css";
interface Props {
  upperText: string;
  bottomText: string;
}

const ChooseYearButton = ({ upperText, bottomText }: Props) => {
  //naknadno za activen del na komponentata

  //temporary solution with active state
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={clickHandler}
      className={`${styles.chooseYearButton} ${
        isActive ? `bg-primary-blue text-white` : ""
      }`}
    >
      <p className={`${styles.chooseYearButtonUpper} font-semibold`}>
        {upperText}
      </p>
      <p className={`${styles.chooseYearButtonBottom} font-medium`}>
        {bottomText}
      </p>
    </button>
  );
};

export default ChooseYearButton;
