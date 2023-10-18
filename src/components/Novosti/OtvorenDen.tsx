import React from 'react'
import styles from "./NovostiPage.module.css"
import PdfImage from "../../Images/pdf-file.png"
import Image from 'next/image'
import Link from 'next/link'
const pdfImage = PdfImage

export const OtvorenDen = () => {
  return (
        <div className='pl-40 pr-40 pb-20'>
            <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Отворен ден</h1>
            <div className={`${styles.otvorenDenSection}`}>
                <p className=' font-regular '>Нашето училиште, секоја учебна година, во месец мај, го организира настанот ,,Отворен ден на училиштето”. На тој ден нашите ученици и наставниот кадар, прават информативни штандови за секое подрачје за заинтересираните основци, пречек на учениците во нашето пацио(забава), театарска претстава од драмскиот клуб и други активности.
Отворениот ден им дава можност на идните ученици да остварат комуникација со сегашните ученици, кои споделуваат искуства со нив. Исто така и со наставниот кадар и педагошко-психолошката служба во училиштето и овозможува да се запознаат со различните активности, проекти и условите во нашето училиште.</p>
                
            </div>
        </div>
  )
}
