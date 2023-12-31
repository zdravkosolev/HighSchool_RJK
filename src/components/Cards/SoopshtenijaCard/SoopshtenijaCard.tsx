import React from 'react';
import styles from './SoopstenijaCard.module.css';
import Link from 'next/link';
import { SoopshtenijaCardType } from '@/components/Novosti/types';

interface Props {
  data: SoopshtenijaCardType;
}
export const SoopshtenijaCard = ({ data }: Props) => {
  const { id, title, date, category, description } = data;

  return (
    <Link href={`/novosti/soopshtenija/[id]`} as={`/novosti/soopshtenija/${id}`} passHref>
      <div className={styles.cardContainer}>
        <h1 className={`font-heading font-semibold ${styles.cardHeading}`}>{title}</h1>
        <p className="font-light pt-1 pb-3">{description}</p>
        <div className="flex pt-2 pb-2">
          <p className={`text-primary-darkblue mr-2 pr-2 font-medium ${styles.dateBorder}`}>{date}</p>
          <p className="text-primary-darkblue font-medium">{category}</p>
        </div>
        <span className="text-secondary-red cursor-pointer">read more</span>
      </div>
    </Link>
  );
};