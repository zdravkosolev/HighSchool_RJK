import React from "react";
import styles from "./CarouselSlide.module.css";
import imageDummy from "../../../Images/Homepage-Novosti-Card2.png";
import Image from "next/image";
interface Props {
  name: string;
  achievement: string;
  text: string;
  img: string;
}
const CarouselSlide = ({}) => {
  return (
    <div className={styles.carouselSlideDiv}>
      <div className={styles.carouselSlideInfoDiv}>
        <h2 className="font-semibold font-heading">Марија Стојковска</h2>
        <p className={`${styles.carouselSlideInfoDivAchievement} font-medium`}>
          -1-во место на државен натпревар по математика-
        </p>
        <p className="font-regular">
          Се чувствував исполнето со самодоверба за време на натпреварот. Го
          искористив целото мое математичко знаење и вештини за да ги решам
          прашањата што ми беа поставени. Беше неверојатно да ги видам сите
          години на учесниците и колку талентирани и предани луѓе има.
        </p>
      </div>
      <div className={styles.carouselSlideImgDiv}>
        <Image src={imageDummy} alt="sdasd" />
      </div>
    </div>
  );
};

export default CarouselSlide;
