import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary"
import Banner from "../Global/Banner"
import styles from "./FilozofijaContainer.module.css"
import Image from "next/image"

const FilozofijaContainer = () => {
    
    return(
        <>
        <div >
            <div>

            <Banner title="Настава" subtitle="Филозофија" image="Filozofija.png" />
            </div>
            <div className="w-4/5 my-20 mx-auto px-20">
                <p className={styles.Header}>ХИПЕРРЕАЛНА ДЕКОНСТРУКЦИЈА НА НЕВООБИЧАЕНОТО</p>
                <p >Во перспективата на Хегеловите определби, философијата е познание на битието во поим. Уметноста е подавање на битието низ симбол. Тие се два модуси на објава на истата суштина.
Оваа изложба е актуализација на философско-уметнички синтези низ кои се соголува ноуменалното, се естетизира феноменалното. Философската поетизација на стварноста, нè води кон созерцание на хиперреалноста која е всушност постварна и од самата реалност. Таа е самата реалност издигната на метаниво. Се остварува метафизичка трансценденција во парадигмите на егзистенцијата, во основите на есенцијата. Уметничките дела ги покажуваат естетските димензии на овој чин.
Инспирација за изложбата “Хиперреална деконструкција на невообичаеното” беше философ, философски поим, мисла, концепт, учење. Целта беше да се пронајдат симболички претстави, да се создаат уметнички изображенија како афирмација на еден спекулативно-еротичен акт на единство на авторот на делото и самиот философ во кое философот е уметник, а уметникот е философ. “Постоењето на светот е оправдано единствено како естетски феномен”. Фридрих Ниче, Раѓањето на трагедијата од духот на музиката.</p>
            </div>
            <div className="w-4/5 my-20 mx-auto flex justify-between    ">


                <ButtonPrimary color="blue" text="Професори" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-1" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-2" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-3" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-4" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-5" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-6" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-7" textStyles={{  fontSize: "18px" }}/>
                <ButtonPrimary color="white" text="IV-8" textStyles={{  fontSize: "18px" }}/>
            </div>
            <div className="w-4/5 my-20 mx-auto flex justify-between">
            <Image width={400} height={300} src={"/Images/galerijaKc1.png"}/>
            <Image width={400} height={300} src={"/Images/galerijaKc2.png"}/>
            <Image width={400} height={300} src={"/Images/galerijaKc3.png"}/>
            </div>


        </div>


        </>
    )
}


export default FilozofijaContainer