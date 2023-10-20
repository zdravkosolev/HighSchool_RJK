import Link from "next/link"
import Banner from "../Global/Banner"

const DrzavnaMaturaComponent = () => {

    return (
        <>
        <div>
            <Banner title="Настава" subtitle="Државна Матура"  image="AboutUs.png"/>
            <div  className="w-4/5 my-20 mx-auto">

            <div className="mb-10">
                <p>
                Државната матура е наменета за учениците од гимназиското и од четиригодишното средно стручно образование. Покрај тоа што претставува завршен дел на средното образование има за цел да послужи и за селекција на кандидатите за запишување на високото образование.
                </p>
                <p className="mb-5">
                За учениците од завршните години кои ќе полагаат државна матура, во јунскиот испитен рок, ќе биде во период од 28 мај до 31 мај 2024 година.
                </p>
                <p className="mb-5">
                Државната матура се полага според посебни испитни програми кои се темелат на целите на наставните програми за соодветните наставни предмети кои се вклучени во листата за државна матура.
                </p>
                <p className="mb-10">
                Државната матура опфаќа: задолжителен дел, изборен дел и проектна задача.
                </p >
                <Link style={{color:"#DB2954", marginBottom:"24px"}} href={"/"}>Дознајте повеќе...</Link>
            </div>
            <div >
            <p style={{color:"black", marginBottom:"24px", borderBottom:"1px solid black", width:"300px", fontSize:"30px", fontWeight:700}}>Корисни линкови</p>
            <p className="mb-4">Државна матура</p>
            <p  className="mb-4">Проектна задача</p>
            <p>Резултати</p>
            </div>


            </div>
            
        </div>

        </>
    )
}

export default DrzavnaMaturaComponent