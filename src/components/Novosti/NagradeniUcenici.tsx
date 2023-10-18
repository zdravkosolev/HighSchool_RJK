import React from "react";
import styles from "./NovostiPage.module.css";
import { NagradeniUceniciCard } from "./NagradeniUceniciCard";
import { NagradeniUceniciCardType } from "@/types";

interface Props {
  data: NagradeniUceniciCardType[]
}

export const NagradeniUcenici: React.FC<Props> = ({ data }) => {
  return (
    <div className="px-40 py-20 ">
      <h1
        className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}
      >
        Наградени и успешни ученици
      </h1>
      <div className={`flex ${styles.nagradeniUceniciContainer}`}>
      {data.map((el)=> {
        return(
          <>
          <NagradeniUceniciCard key={el.id} data={el} />
          </>
        )
      })}
      </div>
    
      
       
      
    </div>
  );
};
