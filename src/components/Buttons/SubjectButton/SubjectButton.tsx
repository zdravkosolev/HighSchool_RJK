import React, { useState } from "react";
import styles from "./SubjectButton.module.css";
interface Props {
  text: string;
}

const SubjectButton = ({ text }: Props) => {
  //naknadno za activen del na komponentata

  //temporary solution with active state
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      className={`${styles.subjectButton} ${
        isActive ? `bg-button-blue-default text-white` : ""
      } font-semibold`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default SubjectButton;
