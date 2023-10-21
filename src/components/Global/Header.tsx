import React from "react";
import Image from "next/image";
import Link from "next/link";

import locationLogo from "../../Images/location.png";
import logo from "../../Images/logo.png";
import facebookLogo from "../../Images/facebook.png";
import instagramLogo from "../../Images/instagram.png";
import youtubeLogo from "../../Images/youtube.png";
import search from "../../Images/Vector.png";

import DropDownMenuList from "../Other/DropDownMenuList";
import SocialMediaList from "../Other/SocialMediaList";

const Header = () => {
  return (
    <header className="font-heading">
      {/* zelen header */}
      <div className="width-100 bg-primary-green flex justify-between px-8 py-3 text-white text-lg">
        {/* lev flex */}
        <div className="flex items-center">
          <ul className="flex  py-2 px-4">
            <li className="mr-2">
              <Image
                src={locationLogo}
                alt="Location pin"
                width={24}
                height={24}
              />
            </li>
            <li>ул. „Трета Македонска Ударна Бригада“ бр. 9</li>
          </ul>
          <SocialMediaList
            facebookSrc={facebookLogo}
            instagramSrc={instagramLogo}
            youtubeSrc={youtubeLogo}
          />
        </div>
        {/* desen flex */}
        <div>
          <ul className="flex gap-2">
            <li className="py-2 px-3">
              <Link href="#">Е-библиотека</Link>
            </li>
            <li className="py-2 px-3">
              <Link href="#">Microsoft 365</Link>
            </li>
            <li className="py-2 px-3">
              <Link href="#">Е-дневник</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* bel header */}
      <div className="px-8 py-4 flex gap-10 items-center ">
        {/* logo i ime */}
        <ul className="flex gap-3">
          <li>
            <Link href="/">
              <Image src={logo} alt="Logo" width={54} height={54} />
            </Link>
          </li>
          <li
            className="text-xl self-center "
            style={{ color: "#060202", fontWeight: "900" }}
          >
            <Link href="/">СУГС „Раде Јовчевски - Корчагин“</Link>
          </li>
        </ul>
        {/* linkovi i dropdowns */}
        <ul
          className="flex  items-center  gap-4 font-semibold "
          style={{ color: "#00000080", fontSize:"14px" }}
        >
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "За Нас",
                linkone: "Директор",
                linkOneHref: "/za-nas",
                linktwo: "Стефан Сидовски - Сидо",
                linkthree: "Куќен ред",
                linkThreeHref: "za-nas/kukjen-red",
                linkfour: "Годишна програма",
                linkfive: "Правилници и извештаи",
                linksix: "Завршни сметки",
                linkseven: "Галерија",
              }}
            />
          </li>
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "Настава",
                linkone: "Уписи",
                linkOneHref:"/nastava/upisi",
                linktwo: "Кадар",
                linkTwoHref: "/nastava/kadar",
                linkthree: "Филозофија",
                linkThreeHref:"/nastava/filozofija",
                linkfour: "Распоред на часови",
                linkfive: "Државна матура",
                linkFiveHref: "/nastava/drzavna-matura",
                linksix: "Билингвална паралелка",
                linkSixHref:"/nastava/bilingvinalna-paralelka"
              }}
            />
          </li>
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "Новости",
                linkone: "Соопштенија",
                linkOneHref: "/novosti/soopshtenija",
                linktwo: "Настани",
                linkthree: "Отворен ден",
                linkfour: "Наградени и успешни ученици",
              }}
            />
          </li>
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "Кариерен центар ",
                linkone: "Алумни",
              }}
            />
          </li>
          <li>
            <Link href="/ucilishna-zaednica">Училишна заедница</Link>
          </li>
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "Активности ",
                linkone: "Радио Клуб",
                linktwo: "Клубови и драмски секции",
                linkTwoHref: "/aktivnosti/klubovi-dramski-sekcii"
              }}
            />
          </li>
          <li>
            <DropDownMenuList
              staticNames={{
                ulName: "Услуги ",
              }}
            />
          </li>
          <li>
            <Link href="#">Erasmus +</Link>
          </li>
          <li>
            <Link href="#">Контакт</Link>
          </li>
          <li>
            <Image src={search} alt="search" width={30} height={30} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
