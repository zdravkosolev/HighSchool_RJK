import React from 'react'
import Image from 'next/image'
import GrupniNagradiImage from "../../Images/grupniNagradiBottom.jpg"
import styles from "./NovostiPage.module.css"


const MainImage  = GrupniNagradiImage
export const GrupniNagradi = () => {
  return (
    <div className={`px-40 py-20`}>
            <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Групни награди / пофалници</h1>
            <div >
              <div style={{height:"400px", width:"100%", objectFit:"cover"}}>

                <Image height={400} src={MainImage} alt='mainImage' className={`mb-4 ${styles.grupniNastaniImg}`}/>
              </div>
                <p className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}>II Место</p>
                <p className={`font-regular italic pt-4  ${styles.nagradeniUceniciParagraphs}`}>Награда/пофалница/благодарница за успешно засадени 100 дрва за Денот на Дрвото</p>
            </div>



    </div>
  )
}
