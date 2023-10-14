import React from "react";
import SocialMediaList from "../Other/SocialMediaList";
import Image from "next/image";

import facebookLogoDark from "../../Images/facebookLogoDark.png";
import instagramLogoDark from "../../Images/instagramLogoDark.png";
import youtubeLogoDark from "../../Images/youtubeLogoDark.png";
import logo from "../../Images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-heading">
      <div className="w-screen bg-primary-darkblue flex justify-center items-center py-6">
        <div className="w-9/12 grid grid-cols-4 text-white gap-5 justify-between	items-stretch ">
          <Image
            src={logo}
            alt="Logo"
            width={156}
            height={156}
            className="self-center justify-self-center"
          />
          <div>
            <h2 className="text-2xl">За нас</h2>
            <p className="leading-7">
              Ние сме училиште со традиција, отворено за нови идеи кои
              поттикнуваат индивидуалност и креативност, дисциплина и култура,
              повисоки интелектуални способности и образование кое ќе одговори
              на животните предизвици.
            </p>
          </div>
          <div>
            <h2 className="text-2xl">Контакт</h2>
            <ul className="leading-7  flex flex-col gap-7">
              <li>ул. „Трета Македонска Ударна Бригада“ број 9, Скопје 1000</li>
              <li>7:30-19:30ч., пон-пет</li>
              <li>(02) 3115-116</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">Корисни линкови</h2>
            <ul className="leading-7">
              <li>
                <Link href="#">Schools.mk</Link>
              </li>
              <li>
                <Link href="#">Е-дневник</Link>
              </li>
              <li>
                <Link href="#">Државна матура</Link>
              </li>
              <li>
                <Link href="#">Биро за развој на образованието</Link>
              </li>
              <li>
                <Link href="#">Министерство за образование и наука</Link>
              </li>
              <li>
                <Link href="#">Државен испитен центар</Link>
              </li>
              <li>
                <Link href="#">Агенција за зажтита на личните податоци</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-100 flex items-center justify-center text-xl">
        <p>
          2023 СУГС „Раде Јовчевски - Корчагин“. Сите права се задржани. |
          Developed with love by Brainster students!
        </p>
        <SocialMediaList
          facebookSrc={facebookLogoDark}
          instagramSrc={instagramLogoDark}
          youtubeSrc={youtubeLogoDark}
        />
      </div>
    </footer>
  );
};

export default Footer;
