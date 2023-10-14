import React from "react";
import styles from "./NovostiPage.module.css";
import imageOne from "../../Images/NagradeniUcenici1.png";
import Image from "next/image";

// interface Props{
//     img: string;
//     name: string;
//     place: string;
//     category: string;
// }

const ImageOne = imageOne;
export const NagradeniUceniciCard = () => {
  return (
    // <div>
    //     <img src={img} alt="" />
    //     <h2>{name}</h2>
    //     <p>{place}</p>
    //     <p>{category}</p>
    // </div>

    <div className={`${styles.nagradeniUceniciCard}`}>
      <Image
        src={ImageOne}
        alt="image1"
        className={`w-100 ${styles.nagradeniUceniciImg}`}
      />
      <h2
        className={`font-heading font-semibold pt-4 ${styles.nagradeniUceniciName}`}
      >
        Име Презиме
      </h2>
      <p
        className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}
      >
        I место
      </p>
      <p
        className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}
      >
        Натпревар по математика
      </p>
    </div>
  );
};
