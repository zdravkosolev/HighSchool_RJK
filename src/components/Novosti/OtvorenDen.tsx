import React from 'react'
import styles from "./NovostiPage.module.css"
import PdfImage from "../../Images/pdf-file.png"
import Image from 'next/image'
import Link from 'next/link'
const pdfImage = PdfImage

export const OtvorenDen = () => {
  return (
        <div className='pl-40 pr-40 pb-20'>
            <h1 className={`text-center font-semibold font-heading pb-5 ${styles.soopshtenijaHeader}`}>Отворен ден</h1>
            <div className={`${styles.otvorenDenSection}`}>
                <p className='pb-9 font-regular '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum esse necessitatibus eos accusamus quos commodi totam placeat illum quaerat ipsa.</p>
                <Link className="nav-link flex" href="./pdf/challenge_js.pdf" download> <span className={` pr-3 mr-3 ${styles.pdfImg}`}><Image src={pdfImage} alt="" /></span>Download pdf</Link>
            </div>
        </div>
  )
}
