import React from 'react'
import Image from 'next/image'
import mainImage from "../../Images/grupniNagradi.png"
import styles from "./NovostiPage.module.css"


const MainImage  = mainImage
export const GrupniNagradi = () => {
  return (
    <div className={`px-40 py-20`}>
            <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Групни награди / пофалници</h1>
            <div>
                <Image src={MainImage} alt='mainImage' className='mb-4'/>
                <p className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}>II Место</p>
                <p className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}>Награда/пофалница/благодарница за успешно засадени 100 дрва за Денот на Дрвото</p>
            </div>



    </div>
  )
}
