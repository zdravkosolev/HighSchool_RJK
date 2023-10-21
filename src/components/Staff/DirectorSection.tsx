import Image from "next/image";
import React from "react";


const DirectorSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-2/5">
        <Image
          src="/Images/direktor.png"
          width={498}
          height={624}
          alt="direktorImg"
        />
      </div>
      <div className="w-3/5">
        <span className="italic font-medium">директор</span>
        <h3 className="font-heading font-semibold text-[40px]">
          М-р Елена Стојанова-Димитров
        </h3>
        <span className="italic font-regular block mt-3">
          direktor@schools.mk
        </span>
        <p className="text-[22px] mt-4">
          Lorem Ipsum е едноставен модел на текст кој се користел во
          печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
          користел како модел уште пред 1500 години, кога непознат печатар зел
          кутија со букви и ги сложил на таков начин за да направи примерок на
          книга. И не само што овој модел опстанал пет векови туку почнал да се
          користи и во електронските медиуми, кој се уште не е променет. Се
          популаризирал во 60-тите години на дваесеттиот век со издавањето на
          збирка од страни во кои се наоѓале Lorem Ipsum пасуси, а денес во
          софтверскиот пакет како
        </p>
      </div>
    </div>
  );
};

export default DirectorSection;
