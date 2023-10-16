import React from "react";
import styles from "./EventCard.module.css";
import Picture from "../../../Images/Homepage-Novosti-Card2.png";
import Image, { StaticImageData } from "next/image";
interface Props {
  card: {
    image: string,
    title: string;
    description: string;
    date: string;
}
  
}
const EventCard = ({ card }: Props) => {
  return (
    <div className={`${styles.eventCard}`}>
      <div className={`${styles.eventCardImgDiv}`}>
        <Image width={300} height={300} src={card.image} alt="/" />
      </div>
      <div className={`${styles.eventCardInfoDiv}`}>
        <h2 className="font-heading">{card.title}</h2>
        <p style={{fontSize:"12px"}}>{card.description}</p>
        <p className={styles.datePtag}>{card.date}</p>
      </div>
    </div>
  );
};

export default EventCard;
