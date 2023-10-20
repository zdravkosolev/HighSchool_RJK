import React from "react";
import styles from "../../../components/Novosti/NovostiPage.module.css";
import { SoopshtenijaContainer } from "../../../components/Novosti/SoopshtenijaContainer";
import { NastaniContainer } from "../../../components/Novosti/NastaniContainer";
import { OtvorenDen } from "../../../components/Novosti/OtvorenDen";
import { NagradeniUcenici } from "../../../components/Novosti/NagradeniUcenici";
import { GrupniNagradi } from "../../../components/Novosti/GrupniNagradi";
import { Dokumenti } from "../../../components/Novosti/Dokumenti";
import { GetServerSideProps, NextPage } from "next";
import data from "../../../data.json"
import Banner from "@/components/Global/Banner";


const NovostiPage: NextPage = ({data}:any) => {



  return (
    <div>
      {/* <div className={`w-100 flex justify-center pt-9 ${styles.headSection}`}>
        <p
          className={`text-white text-center font-heading mt-9 pt-9 font-semibold  ${styles.headParagraph}`}
        >
          Новости
        </p>
      </div> */}
        <Banner  subtitle="Новости" image='grupniNagradi.png'/>
      <SoopshtenijaContainer data={data.soopshtenija} />
      <Dokumenti />
      <NastaniContainer data={data.nastani}/>
      <OtvorenDen />
      <NagradeniUcenici data={data.nagradeniUcenici}/>
      
      <GrupniNagradi />
    </div>
  );
};
export default NovostiPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: { data },
  };
};

