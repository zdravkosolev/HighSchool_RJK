import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import iconGroup from "../Images/iconGroup.png"
import airplane from "../Images/airplane.png"
import timeIcon from "../Images/time.png"
import StudentIcon from"../Images/student.png"

import BottomHomePage from "@/components/BottomHomePage/BottomHomePage";
import ActivityList from "@/components/Other/ActivityList";
import Prosvetilka from "@/components/Global/Prosvetilka";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary/ButtonPrimary";
import bannerImage from "../Images/Img - Hero - Girl.png";
import Link from "next/link";
import { OglasnaTabla } from "@/components/BottomHomePage/OglasnaTabla/OglasnaTabla";
import PrestojniNastani from "@/components/PrestojniNastani/PrestojniNastani";
import HomePageButton from "@/components/Buttons/HomePageButtons/HomePageButtons";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>СУГС „Раде Јовчевски - Корчагин“</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="bg-primary-lightblue relative pb-40 mb-64">
          <div className="flex justify-center basis-1/2 items-center  mb-14 ">
            <div className="w-4/5 flex  ">
              <div className="flex flex-col justify-center   ">
                <h1 className="text-6xl uppercase font-heading text-primary-darkblue font-bold mb-7">
                  биди бренд <br />
                  биди {"  "}
                  <span className="text-secondary-red">корчагин</span>
                </h1>
                <p className="mb-7 text-2xl">
                СУГС Гимназија „Раде Јовчевски-Корчагин“ - Скопје, општина Центар, Република Северна Македонија, основано 1960 год.
Училиштето (Гимназијата) е средно училиште од посебен општествен интерес. Сместена е на ул. Трета Македонска Ударна Бригада бр.9. Нејзина основна дејност е организирање на воспитно-образовниот процес за остварување на плановите и програмите од гимназиското образование во Република Северна Македонија
                </p>
                <div>
                  <Link href={"/za-nas"}>
                    <ButtonPrimary color="green" text="За нас" />
                  </Link>
                </div>
              </div>
              
              <div className="shrink-0 w-1/2 relative  ">
              <div style={{ width:"200px",zIndex: 1 , position:"absolute", top:"180px", left:"-80px"}}>

                <HomePageButton icon={StudentIcon} text={"1000+ Ученици"} bgcolor={"#FF5656"}/>
                </div>
                <div style={{ width:"200px",  zIndex: 100, position:"absolute", top:"450px", left:"510px"}}>

                <HomePageButton icon={iconGroup} text={"63+ Паралелки"} bgcolor={"#84AEFF"}/>
                </div>
                <div style={{ width:"200px", zIndex: 100, position:"absolute", top:"600px", left:"-150px"}}>

                <HomePageButton icon={timeIcon} text={"60+ Години"} bgcolor={"#5FA4BD"}/>
                </div>
                <div style={{ width:"250px",zIndex: 100 , position:"absolute", top:"750px", left:"200px"}}>

                <HomePageButton icon={airplane} text={"3+ Еразмус проекти"} bgcolor={"#FF5656"}/>
                </div>
                <Image
                  src={bannerImage}
                  alt="Banner image"
                  className="w-full relative z-10"
                />
                <div className="reactangle absolute z-1 bg-primary-darkblue bottom-0 w-full "></div>
              </div>
            </div>
          </div>
          <ActivityList />
        </div>

        <Prosvetilka />
        <OglasnaTabla/>

        <PrestojniNastani/>

        <BottomHomePage />
        
      </main>
    </>
  );
}
