import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import BottomHomePage from "@/components/BottomHomePage/BottomHomePage";
import ActivityList from "@/components/Other/ActivityList";
import Prosvetilka from "@/components/Global/Prosvetilka";
import ButtonPrimary from "@/components/Buttons/ButtonPrimary/ButtonPrimary";
import bannerImage from "../Images/Img - Hero - Girl.png";
import Link from "next/link";
import { OglasnaTabla } from "@/components/BottomHomePage/OglasnaTabla/OglasnaTabla";
import PrestojniNastani from "@/components/PrestojniNastani/PrestojniNastani";
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
                  Lorem Ipsum е едноставен модел на текст кој се користел во
                  печатарската индустрија. Lorem ipsum бил индустриски стандард
                  кој се користел како модел уште пред 1500 години.
                </p>
                <div>
                  <Link href={"/za-nas"}>
                    <ButtonPrimary color="green" text="За нас" />
                  </Link>
                </div>
              </div>
              <div className="shrink-0 w-1/2 relative  ">
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
