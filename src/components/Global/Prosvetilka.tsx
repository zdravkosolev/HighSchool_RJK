import React from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";
import Image from "next/image";
import lightBulb from "../../Images/Lightbulb - Homepage.png";
import pinPoint from "../../Images/location.png";
import CountdownTimer from "../Other/Timer";
const Prosvetilka = () => {
  const targetDate = new Date("2023-10-11T00:00:00");
  return (
    <div className="w-full flex justify-center mb-52 relative">
      <div className="w-4/5 bg-primary-blue rounded-3xl flex px-8">
        <div className="w-1/2 ">
          <div className="flex flex-col gap-10 py-14 ml-20 text-white ">
            <h1 className="text-5xl font-semibold">Просветилка</h1>
            <div>
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="flex">
              <Image src={pinPoint} alt="location animated"></Image>
              <span>Национална опера и балет</span>
            </div>
            <div>
              <ButtonPrimary color="blue" text="Алумни" />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-end ">
          <Image
            className="absolute bottom-0"
            src={lightBulb}
            alt="Lightbulb animated image"
            height={530}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Prosvetilka;
