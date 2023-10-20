  import React from 'react';
  import styles from "../SoopshtenijaCard/SoopstenijaCard.module.css";
  import Image from "next/image";
  import { NastaniSoopshtenijaCardType } from '@/types';
import Link from 'next/link';

  interface Props {
    data: NastaniSoopshtenijaCardType;
  }

  export const NastaniCard: React.FC<Props> = ({ data }) => {
    const { id, image, title, description, date } = data;

    return (<>
    
    <Link href={`/novosti/nastani/[id]`} as={`/novosti/nastani/${id}`} passHref>
    <div className={styles.cardContainer}>
      <div style={{height: "240px"}}>
      <Image
          src={image}
          alt={id}
          width={400}
          height={240}
          className={styles.NastaniImageStyle}
        />
      </div>
      <h1 className={`font-heading font-semibold ${styles.cardHeading}`}>{title}</h1>
      <p className='font-light pt-1 pb-3'>{description}</p>
      <div className={styles.dateContainer}>
      <p className=' text-primary-darkblue font-medium pt-1 pb-3'>
        {date}
      </p>
    </div>
      
    </div>
    </Link>
    </>
    );
  };
