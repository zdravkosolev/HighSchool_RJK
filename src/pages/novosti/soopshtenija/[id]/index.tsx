import { useRouter } from 'next/router';
import data from '../../../../data.json';
import Banner from '@/components/Global/Banner';
import Link from 'next/link';

const SoopshtenijaDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  
  const soopshtenijaItem = data.soopshtenija.find((item) => item.id === id);
    
  if (soopshtenijaItem) {
  return (
    <>
    
    <div>
        <Banner subtitle='Соопштение' image='AboutUs.png'/>
    <div  className="w-4/5 my-20 mx-auto">

      <Link style={{color:"red", margin:"0px 50px"}} href={"/novosti/soopshtenija"}>Назад</Link>
      <div className='w-4/5 mx-auto my-20'>

      <h2 style={{textAlign:"center", fontSize:"34px", fontWeight:700, paddingBottom:"24px"}}>{soopshtenijaItem.title}</h2>
      <p className='py-5 mb-5'>{soopshtenijaItem.description}</p>
      <p style={{ color: "red",display:"flex", alignItems:"flex-end", justifyContent:"end"}}>{soopshtenijaItem.date}</p>

      </div>
    </div>
    </div>
    </>
  );
};
}
export default SoopshtenijaDetail;
