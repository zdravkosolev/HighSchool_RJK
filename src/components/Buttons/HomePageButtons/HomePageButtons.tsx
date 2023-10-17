import Image from "next/image";
import { StaticImageData } from "next/image";

interface Props {
    icon?: StaticImageData;
    text: string;
    bgcolor: string;
}

const HomePageButton = ({icon, text, bgcolor}: Props) => {

    return( 
        <>
        <div style={{backgroundColor:`${bgcolor}`,display:"flex", textAlign:"center", padding:"10px 20px", borderRadius:"15px",}}>
        {icon && <Image width={23} height={20} src={icon} alt={text} />}
        <p style={{color:"white", paddingLeft:"15px"}}>{text}</p>
        </div>
        </>
    )
}

export default HomePageButton