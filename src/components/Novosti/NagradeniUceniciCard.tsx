import React from "react";
import styles from "./NovostiPage.module.css";

import Image from "next/image";
import { NagradeniUceniciCardType } from "@/types";

interface Props {
  data: NagradeniUceniciCardType;
}

export const NagradeniUceniciCard: React.FC<Props> = ({ data }) => {
  const { id, img, name, place , category } = data;
  
  return ( 
    

    <div className={`${styles.nagradeniUceniciCard}`}>
      <div style={{height: "240px"}}>

      <Image
        width={300}
        height={300}
        src={img}
        alt={id}
        className={`w-100 ${styles.nagradeniUceniciImg}`}
      />
      </div>
      <h2
        className={`font-heading font-semibold pt-4 ${styles.nagradeniUceniciName}`}
      >
        {name}
      </h2>
      <p
        className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}
      >
        {place}
      </p>
      <p
        className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}
      >
        {category}
      </p>
    </div>
  );
};
