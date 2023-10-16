import React from 'react'
import styles from "../../Novosti/NovostiPage.module.css"
import EventCard from '@/components/Cards/EventCard/EventCard'
import NewsButton from '@/components/Buttons/NewsButton/NewsButton'

import Image from "next/image"

const EventCard1 = {
  title: "Наслов",
  image: "/Images/misija-img.png",
  description:
    "Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 гоd.",
  date:"15.10.2023"
}

const EventCard2 = {
  title: "Наслов",
  image: "/Images/vizija-img.png",
  description:
    "Lorem Ipsum е едноставен модел на текст кој се користел во печаt.",
  date:"15.10.2023"
}
const EventCard3 = {
  title: "Наслов",
  image: "/Images/misija-img.png",
  description:
    "Lorem Ipsum е едноставен модел на текст кој се користел во печатарската индустрија. Lorem ipsum бил индустриски стандард кој се користел како модел уште пред 1500 години.",
  date:"15.10.2023"
}



export const OglasnaTabla = () => {
  return (
    <div className='w-100 pl-40 pr-40 pt-20 pb-20'>
      <h1 className={`text-center font-semib

old font-heading pb-5 ${styles.soopshtenijaHeader}`}>Огласна Табла </h1>
      <div className='flex align-center justify-center mb-10'>
        <span className='mr-5'>

        <NewsButton text={"Новости"}/>
        </span>
        <NewsButton text={"Активности"}/>
      </div>
        <div className={styles.soopshtenijaHeadContainer}>
         
 <div className={`w-100 ${styles.soopshtenijaContainer}`}>

          <EventCard card={EventCard1}/>
          <EventCard card={EventCard2}/>
          <EventCard card={EventCard3}/>
         
 </div>
        </div>
    </div>
  )
}
