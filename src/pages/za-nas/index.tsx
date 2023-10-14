import AboutCard from "@/components/About/AboutCard";
import AboutUsSection from "@/components/About/AboutUsSection";
import BiographySection from "@/components/About/BiographySection";
import OurGoals from "@/components/About/OurGoals";
import Banner from "@/components/Global/Banner";
import { AboutCardType } from "@/types";
import { NextPage } from "next";

const aboutCard1: AboutCardType = {
  title: "Нашата мисија",
  image: "/Images/misija-img.png",
  description:
    "Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет",
};

const aboutCard2: AboutCardType = {
  title: "Нашата визија",
  image: "/Images/vizija-img.png",
  description:
    "Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет",
};

const AboutPage: NextPage = () => {
  return (
    <>
      <Banner title="За нас" image="AboutUs.png" />
      <div className="w-4/5 mx-auto">
        <AboutUsSection />
        <AboutCard aboutCard={aboutCard1} />
        <AboutCard aboutCard={aboutCard2} />
        <OurGoals />
      </div>
      <BiographySection />
    </>
  );
};

export default AboutPage;
