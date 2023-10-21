import { useRouter } from "next/router";
import data from "../../../../data.json"
import Banner from "@/components/Global/Banner";
import Link from "next/link";
import Image from "next/image"

const SekciiDetailPage = () =>{
    const router = useRouter();
    const { id } = router.query;
    const imageStyles = {
        height: '450px',
        width: '100%',
        marginTop: "30px",
        marginBottom: '30px'
      };


    
    const sekciiItem = data.klubovisekcii.find((item) => item.id === Number(id))
   
    if(sekciiItem){
        return(
            <>
                <div>
                <Banner title="Клубови и драмски секции" subtitle={sekciiItem.title} image='kluboviDramskiSekcii.jpg'/>
                </div>
                <div className="w-4/5 my-20 mx-auto">
                <h2 style={{ fontSize:"34px", fontWeight:700, paddingBottom:"24px"}}>{sekciiItem.title}</h2>
                <p style={{ color: "darkBlue"}}>{sekciiItem.date}</p>
                <p className='py-5 mb-5'>{sekciiItem.description}</p>
                </div>
                <div className="w-4/5 my-20 mx-auto">
                <h2 style={{ fontSize:"26px", fontWeight:700, paddingBottom:"24px"}}>{sekciiItem.title}</h2>
                <Image style={imageStyles} width={500} height={500} src={sekciiItem.image} alt={`${sekciiItem.id}`}/>
                </div>
            </>
        )
    }
   
// {/* <div>
//        <Image style={imageStyles} width={500} height={500} src={sekciiItem.image} alt={`${sekciiItem.id}`}/> 
//       <h2 style={{textAlign:"center", fontSize:"34px", fontWeight:700, paddingBottom:"24px"}}>{sekciiItem.title}</h2>
//       <p className='py-5 mb-5'>{sekciiItem.description}</p>
//       {/* <p>{sekciiItem.fullText}</p> */}
//       <p style={{ color: "red",display:"flex", alignItems:"flex-end", justifyContent:"end"}}>{sekciiItem.date}</p>

//       </div>
//     </div>
//             </div> */}
   
    
}

export default SekciiDetailPage