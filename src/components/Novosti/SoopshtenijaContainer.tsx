import React from "react";
import styles from "./NovostiPage.module.css";
import { SoopshtenijaCard } from "@/components/Cards/SoopshtenijaCard/SoopshtenijaCard";

// interface Props {
//   id: string,
//   title: string;
//   date: string;
//   category: string;
//   description: string;
// }

export const SoopshtenijaContainer = ({ data }: any) => {
  return (
    <div className="w-100 pl-40 pr-40 pt-20 pb-20">
      <h1
        className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}
      >
        Соопштенија
      </h1>
      <div className={`w-100 ${styles.soopshtenijaContainer}`}>
        {/* {data.map((el: any) => {
          return (
            <SoopshtenijaCard
              key={el.ID}
              title={el.title}
              date={el.date}
              content={el.content}
            />
          );
        })} */}
        <SoopshtenijaCard/>
        <SoopshtenijaCard/>
        <SoopshtenijaCard/>
      
        <SoopshtenijaCard/>
        <SoopshtenijaCard/>
        <SoopshtenijaCard/>
      </div>
    </div>
  );
};
