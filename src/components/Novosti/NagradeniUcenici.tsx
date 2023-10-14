import React from "react";
import styles from "./NovostiPage.module.css";
import { NagradeniUceniciCard } from "./NagradeniUceniciCard";

interface Props {
  img: string;
  name: string;
  place: string;
  category: string;
}

export const NagradeniUcenici = () => {
  return (
    <div className="px-40 py-20 ">
      <h1
        className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}
      >
        Наградени и успешни ученици
      </h1>
      {/* map na karticka po niza na nagradeni ucenici. return component */}
      <div className={`flex ${styles.nagradeniUceniciContainer}`}>
        <NagradeniUceniciCard />
        <NagradeniUceniciCard />
        <NagradeniUceniciCard />
        <NagradeniUceniciCard />
      </div>
    </div>
  );
};
