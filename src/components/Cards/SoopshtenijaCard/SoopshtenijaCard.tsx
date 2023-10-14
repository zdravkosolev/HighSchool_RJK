import React from 'react'
import styles from "./SoopstenijaCard.module.css"
import Link from 'next/link'


// interface Props {
//     ID: number,
//     title: string,
//     date: string,
//     content: string
// }

export const SoopshtenijaCard = ({date, ID, title, content}:any) => {
  return (
    <div className={styles.cardContainer} key={ID}>
        <h1 className={`font-heading font-semibold ${styles.cardHeading}` } >{title}</h1>
        <div className='flex pt-2 pb-2'>

            <p className={`text-primary-darkblue mr-2 pr-2 font-medium ${styles.dateBorder}`}>{date}</p>
           
            <p className='text-primary-darkblue font-medium'> Соопштенија</p>
        </div>
        
        <p className='font-light pt-1 pb-3'>{content}
        </p>
        <Link href={"/"} className='text-secondary-red decoration-none cursor-pointer'>read more</Link>
    </div>
  )
}
