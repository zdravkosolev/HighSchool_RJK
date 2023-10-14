import React from "react";
import Image from "next/image";
import mon from "../../../Images/LogoSection/mon.png";
import dic from "../../../Images/LogoSection/dic.png";
import biro from "../../../Images/LogoSection/biro.png";
import zlp from "../../../Images/LogoSection/zlp.png";
import ednevnik from "../../../Images/LogoSection/ednevnik.png";
import Link from "next/link";
// const Mon = mon;
// const Dic = dic;
// const MonBro = monbro;
// const Dzap = dzap;
// const EDnevnik = ednevnik;
export const LogoSection = () => {
  return (
    <section className="px-40 py-20 flex">
      <Link href={"https://mon.gov.mk/"} className="mx-3">
        <Image src={mon} alt="mon" />
      </Link>
      <Link href={`https://dic.edu.mk/`} className="mx-3">
        <Image src={dic} alt="dic" />
      </Link>
      <Link href={`https://mon.gov.mk/`} className="mx-3">
        <Image src={biro} alt="monbro" />
      </Link>
      <Link href={"https://azlp.mk/"} className="mx-3">
        <Image src={zlp} alt="dzap" />
      </Link>
      <Link href={"/e-dnevnik"} className="mx-3">
        <Image src={ednevnik} alt="ednevnik" />
      </Link>
    </section>
  );
};
export default LogoSection;
