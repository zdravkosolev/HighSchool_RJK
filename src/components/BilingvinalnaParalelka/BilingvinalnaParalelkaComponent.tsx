import Banner from "@/components/Global/Banner";
import Image from "next/image"

const BilingvinalnaParalelkaComponent = () => {
    return(

        <>
        <div >
            <Banner title="Билингвинална Паралелка" image="AboutUs.png"/>
            <div className="w-4/5 my-20 mx-auto">
                <div className="flex justify-center items-center relative">

            <Image
          className="absolute -top-11 -left-12 z-1"
          src={"/Images/graphic-element-green-lines.png"}
          width={118}
          height={120}
          alt="graphic-element"
        />
        <Image
          className="absolute -bottom-11 -right-12 z-1"
          src={"/Images/graphic-element-green-lines.png"}
          width={118}
          height={120}
          alt="graphic-element"
        />
        <div style={{borderRadius:"40px ", border:"3px solid #5FA4BD", padding:"20px 60px", zIndex:"1111", background:"white   "}}>
                    <p>
                    Чест и задоволство е да објавиме дека нашата гимназија „Раде Јовчевски Корчагин“ во Скопје го доби брендот LabelFrancEducation .
                    </p>
                    <p>Овој бренд го доделува француското Министерство за Европа и надворешни работи на образовни установи кои нудат двојазично образование на француски јазик што ги исполнува критериумите на извонредност.</p>
                    <p>Овој бренд сега отвора нови можности за наставниците и учениците во нашето училиште, вклучувајќи можности за престој и обука во Франција, регионални средби и пристап до образовни ресурси.</p>
                    <p>За сите подетални информации, следете ја нашата веб страна.</p>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default BilingvinalnaParalelkaComponent