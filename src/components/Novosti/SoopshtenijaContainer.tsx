  import React from "react";
  import styles from "./NovostiPage.module.css";
  import { SoopshtenijaCard } from "@/components/Cards/SoopshtenijaCard/SoopshtenijaCard";
  import { SoopshtenijaCardType } from "./types";
  import { GetServerSideProps } from "next";

  interface Props {
    data: SoopshtenijaCardType[]; 
  }



  export const SoopshtenijaContainer: React.FC<Props> = ({ data }) => {
    return (  
      <div className="w-100 pl-40 pr-40 pt-20 pb-20">
        <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>
          Соопштенија
        </h1>
        <div className={`w-100  ${styles.soopshtenijaContainer}`}>
          {data.map((el: SoopshtenijaCardType) => {
            return (
              <SoopshtenijaCard key={el.id} data={el} />
            );
          })}
        </div>
      </div>
    );
  };