import { useRouter } from 'next/router';
import data from '../../../../data.json';
import Banner from '@/components/Global/Banner';
import Link from 'next/link';
import Image from "next/image"

const NastaniDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const imageStyles = {
    height: '450px',
    width: '100%',
    marginBottom: '30px'
  };

  const nastaniItem = data.nastani.find((item) => item.id === id);
    
  if (nastaniItem) {
  return (
    <>
    
    <div>
        <Banner subtitle={nastaniItem.title} image='AboutUs.png'/>
    <div  className="w-4/5 my-20 mx-auto">

      <Link style={{color:"red", margin:"0px 50px"}} href={"/novosti/soopshtenija"}>Назад</Link>
      <div className='w-4/5 mx-auto my-20'>
       <Image style={imageStyles} width={500} height={500} src={nastaniItem.image} alt={nastaniItem.id}/> 
      <h2 style={{textAlign:"center", fontSize:"34px", fontWeight:700, paddingBottom:"24px"}}>{nastaniItem.title}</h2>
      <p className='py-5 mb-5'>{nastaniItem.description}</p>
      <p>{nastaniItem.fullText}</p>
      <p style={{ color: "red",display:"flex", alignItems:"flex-end", justifyContent:"end"}}>{nastaniItem.date}</p>

      </div>
    </div>
    </div>
    </>
  );
};
}
export default NastaniDetailPage;
