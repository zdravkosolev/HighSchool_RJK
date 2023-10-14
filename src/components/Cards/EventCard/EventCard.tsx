import React from "react";
import styles from "./EventCard.module.css";
import Picture from "../../../Images/Homepage-Novosti-Card2.png";
import Image, { StaticImageData } from "next/image";
interface Props {
  img: StaticImageData;
  title: string;
  paragraph: string;
  date: string;
}
const EventCard = ({ title, paragraph, date, img }: Props) => {
  return (
    <div className={`${styles.eventCard}`}>
      <div className={`${styles.eventCardImgDiv}`}>
        <Image src={img} alt="/" />
      </div>
      <div className={`${styles.eventCardInfoDiv}`}>
        <h2 className="font-heading">{title}</h2>
        <p>{paragraph}</p>
        <p className={styles.datePtag}>{date}</p>
      </div>
    </div>
  );
};

export default EventCard;
