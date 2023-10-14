import React from 'react'
import styles from "../../Novosti/NovostiPage.module.css"
import EventCard from '@/components/Cards/EventCard/EventCard'
import NewsButton from '@/components/Buttons/NewsButton/NewsButton'

export const OglasnaTabla = () => {
  return (
    <div className='w-100 pl-40 pr-40 pt-20 pb-20'>
      <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Огласна Табла </h1>
      <div className='flex align-center justify-center mb-10'>
        <span className='mr-5'>

        <NewsButton text={"Новости"}/>
        </span>
        <NewsButton text={"Активности"}/>
      </div>
        <div className={`w-100 ${styles.soopshtenijaContainer}`}>
          <EventCard />
          <EventCard/>
          <EventCard/>
        </div>
    </div>
  )
}
