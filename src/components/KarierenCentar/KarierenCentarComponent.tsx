import Banner from "@/components/Global/Banner";
import Image from "next/image";
import KarierenCentarImageOne from "../../Images/KarierenCentarImgOne.png";
import styles from "./KarierenCentarComponent.module.css";
import UpArrow from "../../Images/up-arrow 1.png";
import InstagramImage from "../../Images/teenyicons_instagram-outline.png";
import FaceBookImage from "../../Images/teenyicons_facebook-outline.png";
import YoutubeImage from "../../Images/uit_youtube.png";
import Infinity from "../../Images/la_infinity.png"


const KarierenCentarComponent = () => {
  return (
    <>
      <Banner subtitle="Кариерен Центар" image="AboutUs.png" />
      <div className="w-4.5/5 my-20 mx-auto">
        <div className="flex">
          <div style={{width:"50%"}}>
            <Image width={800} height={300} alt="/" src={KarierenCentarImageOne} />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <p className={`text-center ${styles.rotate15}`}>Check Us Out</p>
                <Image src={UpArrow} width={30} height={50} alt="/" style={{marginBottom:"10px"}}/>
                <div className="flex">
                    <Image src={InstagramImage} width={30} height={30} alt="/" style={{marginRight:"10px"}}/>
                    <Image src={FaceBookImage} width={30} height={30} alt="/" style={{marginRight:"10px"}}/>
                    <Image src={YoutubeImage} width={30} height={30} alt="/" style={{marginRight:"70px"}}/>
                </div>
            </div>
          </div>
          <div style={{width:"50%",paddingRight:"100px"}}>
            <p className={`font-semibold font-heading pb-5 ${styles.HeaderProps}`}>Кариерен Центар РЈК</p>
            <p className={` font-regular`}>
              Кариерниот центар на Корчагин е култното место од каде излегуваат
              сите културни и едукативни манифестации на ова училиште. Отворена
              кон сите ученици од трета и четврта година, оваа воннаставна
              активност им дозволува на младите да се запознаат со организација
              на настани и активности во секторите на ПР, менаџмент, дизајн и
              други оддели кои ги спремаат нашите ученици за вклучување во
              светот на возрасните.
            </p>
            <p>
              Кариерниот центар организира активности за празници низ годината,
              вклучувајќи ги Ноќта на вештерките, Божиќната недела и Денот на
              вљубените. Секоја година Кариерниот центар вклучува нови идеи и
              активности за да се направи целата година во нашето училиште
              забавна и разновидна.
            </p>
            <p>
              За прв пат во нашето училиште, оваа година Кариерниот центар
              вклучува и кариерно советување, со цел нашите ученици да успеат да
              ги направат правилните одлуки за својата професионална
              ориентација.
            </p>
            <p>
              Корчагинската просветилка е единствениот настан во Скопје од ваков
              тип . Започна како церемонија за благодарност кон незаменливиот
              труд кои професорите го вложуваат во нашата едукација, сега стана
              редовна традиција која веќе десет години го краси нашиот годишен
              план. Преку комична репрезентација на животот како средношколец,
              нашите матуранти излегуваат секоја година на сцена да се насмеат,
              заблагодарат и споделат неколку последни моменти заедно во една
              наша Корчагинска атмосфера.
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 my-20 mx-auto flex justify-between align-middle text-center">
            <div className={styles.ContainersProps}>
                <p className={styles.NumbersProps}>10</p>
                <p className={styles.TextProps}>
                Просветилки
                </p>
            </div>
            <div className={styles.ContainersProps}>
                <p className={styles.NumbersProps}>4</p>
                <p className={styles.TextProps}>
                    Уметникуми
                </p>
            </div>
            <div className={styles.ContainersProps}>
                <Image src={Infinity} width={90} height={50} alt="/" style={{
                    margin:"0 auto"
                }}/>
                <p className={styles.TextProps}>Свирки</p>
            </div>
            <div className={styles.ContainersProps}>
                <p className={styles.NumbersProps}>23</p>
                <p className={styles.TextProps}>Филмски Вечери</p>
            </div>
      </div>
    </>
  );
};

export default KarierenCentarComponent;
