import React from "react";
import styles from "./NovostiPage.module.css";
import Image from "next/image";
import PdfImage from "../../Images/pdf-file.png";
import Link from "next/link";
const pdfImage = PdfImage;
export const Dokumenti = () => {
  return (
    <div className={`w-100 pl-40 pr-40 flex ${styles.documentiContainer}`}>
      <h3 className={`font-semibold font-heading ${styles.documentiHeader}`}>
        Документи
      </h3>
      <Link
        className={`nav-link flex mb-3 align-center ${styles.documentiAtag} `}
        href="./pdf/challenge_js.pdf"
        download
      >
        {" "}
        <span className={` pr-3 mr-3 ${styles.pdfImg}`}>
          <Image src={pdfImage} alt="" />
        </span>{" "}
        Download pdf
      </Link>
      <Link
        className={`nav-link flex  ${styles.documentiAtag}`}
        href="./pdf/challenge_js.pdf"
        download
      >
        {" "}
        <span className={` pr-3 mr-3 ${styles.pdfImg}`}>
          <Image src={pdfImage} alt="" />
        </span>{" "}
        Download pdf
      </Link>
    </div>
  );
};
