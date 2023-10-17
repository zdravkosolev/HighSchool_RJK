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
    `Нашето училиште обезбедува сигурна и безбедна средина во која промовираме учење по пат на разбирање и каде се развиваат вештините со примена на современа образовна технологија и подготовка за мултикултурно општество. Училиштето обезбедува:Еднакви можности за учење и напредување, Достигнување на перфекција во рализацијата на училишниот курикулум, Поврзаност и содејство со други воспитно-образовни институции, Придобивки од рекреативните активности, Флексибилност за учениците, Современи услови за работа Здрава училишна клима`,
};

const aboutCard2: AboutCardType = {
  title: "Нашата визија",
  image: "/Images/vizija-img.png",
  description:
    "Училиштето ќе биде средина во која ќе се одвива ефективна и квалитетна настава, ќе има отворена соработка за сите субјекти инволвирани во воспитно-образовниот процес, еднакви можности на сите ученици, тимска работа, почитување на разликите и создавање клима за доживотно учење. Р.Ј.Корчагин ќе биде стимулативна средина за нови знаења каде современите образовни трендови и технологии ќе бидат во функција на нашите потреби и сите заедно, наставници, ученици, родители, ќе бидеме модели на добри граѓани и заслужни за новите постигнувања.",
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
