
import React from 'react'
import styles from "./NovostiPage.module.css"
import EventCard from '@/components/Cards/EventCard/EventCard'



export const NastaniContainer = () => {
    return (
        <div className='w-100 pl-40 pr-40 pt-20 pb-20'>
                <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Настани</h1>
                <div className={`w-100 ${styles.soopshtenijaContainer}`}>
                    {/* tuka bi trebalo map od data od api */}
                {/* <EventCard/>
                <EventCard/>
                <EventCard/> */}
                </div>
              
            </div>
      )
}
