import React from "react";
import styles from "../../components/Novosti/NovostiPage.module.css";
import { SoopshtenijaContainer } from "../../components/Novosti/SoopshtenijaContainer";
import { NastaniContainer } from "../../components/Novosti/NastaniContainer";
import { OtvorenDen } from "../../components/Novosti/OtvorenDen";
import { NagradeniUcenici } from "../../components/Novosti/NagradeniUcenici";
import { GrupniNagradi } from "../../components/Novosti/GrupniNagradi";
import { Dokumenti } from "../../components/Novosti/Dokumenti";
import { GetServerSideProps, NextPage } from "next";

const NovostiPage: NextPage = ({ data }: any) => {
  console.log(data);

  return (
    <div>
      <div className={`w-100 flex justify-center pt-9 ${styles.headSection}`}>
        <p
          className={`text-white text-center font-heading mt-9 pt-9 font-semibold  ${styles.headParagraph}`}
        >
          Новости
        </p>
      </div>
      <SoopshtenijaContainer data={data} />
      <Dokumenti />
      <NastaniContainer />
      <OtvorenDen />
      <NagradeniUcenici />
      <GrupniNagradi />
    </div>
  );
};
export default NovostiPage;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const result = await fetch(
//     "https://961a-46-217-160-241.ngrok-free.app/Hakaton-korcagin/test-hakaton/hakaton-korcagin/includes/announcements.php"
//   );
//   const data = await result.json();
//   return {
//     props: { data },
//   };
// };
