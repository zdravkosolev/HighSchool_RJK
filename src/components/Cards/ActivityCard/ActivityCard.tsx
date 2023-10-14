import React from "react";
import styles from "./ActivityCard.module.css";
interface Props {
  children: React.ReactNode;
  text: string;
}
const ActivityCard = ({ children, text }: Props) => {
  return (
    <a
      className={`flex flex-col items-center justify-center  ${styles.activityCard}`}
    >
      {children}
      <p className="font-semibold">{text}</p>
    </a>
  );
};

export default ActivityCard;
