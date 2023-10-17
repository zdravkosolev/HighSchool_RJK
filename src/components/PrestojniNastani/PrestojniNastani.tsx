import React from 'react'
import styles from "./PrestojniNastani.module.css"
import Image from "next/image"
import nastaniImage from "..//../Images/nastan_img_homep.png"
import Nastani from './Nastani'
import nastaniArr from './dataNastani'
import { NextPage } from 'next'





const PrestojniNastani: NextPage = () => {



  return (
    <>
    <section className={` w-100 flex pl-40 pr-40 pt-20 pb-20 ${styles.PrestojniNastaniSection}`}>
        <div className={`pl-4 pr-10 flex justify-center ${styles.NastaniImages}`}>

            <Image width={450} height={500} src={nastaniImage} alt='/'/>
        </div>

        <div className={` flex flex-col text-center justify-center items-center ${styles.NastaniMainContainer}`}>
            <h2 className={`text-center font-semibold font-heading pb-5 ${styles.HeaderStyles}`}>Престојни настани</h2>
           {nastaniArr.map((nastan)=>(
            <Nastani key={nastan.title} data={nastan}/>
))}
          
        </div>


    </section>
    
    
    
    
    
    </>
  )
}

export default PrestojniNastani
