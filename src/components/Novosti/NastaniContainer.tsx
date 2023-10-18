
import React from 'react'
import styles from "./NovostiPage.module.css"
import { NastaniCard } from '../Cards/NastaniCard/NastaniCard';
import { NastaniSoopshtenijaCardType } from '@/types';



interface Props {
    data: NastaniSoopshtenijaCardType[]; 
  }

  export const NastaniContainer: React.FC<Props> = ({ data }) => {
    return (
        <div className='w-100 pl-40 pr-40 pt-20 pb-20'>
                <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Настани</h1>
                <div className={`w-100 ${styles.soopshtenijaContainer}`}>
                   {data.map((el) => {
                    return (
                        <NastaniCard key={el.id} data={el} /> 
                    );
                   })}
                </div>
              
            </div>
    )
}
