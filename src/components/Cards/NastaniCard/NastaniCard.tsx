import React from 'react'
import styles from "../SoopshtenijaCard/SoopstenijaCard.module.css"
import Link from 'next/link'
import { NastaniCardType, SoopshtenijaCardType } from '@/components/Novosti/types'
import { NastaniSoopshtenijaCardType } from '@/types'


// export interface NastaniSoopshtenijaCardType {
//     id: string;
//     image: string | undefined;
//     title: string;
//     description: string;
//     date: string;
//   }



interface Props {
    data: NastaniSoopshtenijaCardType; // Change to a single object, not an array
  }
  
  export const NastaniCard: React.FC<Props> = ({ data }) => {
    const { id, title, description, date } = data;
  
    return (
      <div className={styles.cardContainer}>
        <h1 className={`font-heading font-semibold ${styles.cardHeading}`}>{title}</h1>
        <p className='font-light pt-1 pb-3'>{description}</p>
        <div className='flex pt-2 pb-2'>
          <p className={`text-primary-darkblue mr-2 pr-2 font-medium ${styles.dateBorder}`}>{date}</p>
          
        </div>
        <Link href={"/"} className='text-secondary-red decoration-none cursor-pointer'>read more</Link>
      </div>
    );
  };
  