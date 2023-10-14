import React from "react";
import Image from "next/image";

const OurGoals = () => {
  return (
    <div className="my-9">
      <h4 className="font-semibold text-center text-5xl font-heading my-9">
        Нашите цели
      </h4>

      <div className="flex justify-center items-center relative">
        <Image
          className="absolute -top-12 -left-10 z-0"
          src={"/Images/graphic-element-green-lines.png"}
          width={118}
          height={120}
          alt="graphic-element"
        />

        <Image
          className="absolute -bottom-12 -right-3 z-0"
          src={"/Images/graphic-element-green-lines.png"}
          width={118}
          height={120}
          alt="graphic-element"
        />

        <div className="w-1/2 z-20">
          <div className="border-primary-green border rounded-xl p-10 text-center mr-9 bg-white">
            <h5 className="font-heading font-semibold text-2xl mb-9">
              Oпшти цели
            </h5>
            <p>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми
            </p>
          </div>
        </div>

        <div className="w-1/2 z-20">
          <div className="border-primary-green border rounded-xl p-10 text-center mr-9 bg-white">
            <h5 className="font-heading font-semibold text-2xl mb-9">
              Посебни цели
            </h5>
            <p>
              Lorem Ipsum е едноставен модел на текст кој се користел во
              печатарската индустрија. Lorem ipsum бил индустриски стандард кој
              се користел како модел уште пред 1500 години, кога непознат
              печатар зел кутија со букви и ги сложил на таков начин за да
              направи примерок на книга. И не само што овој модел опстанал пет
              векови туку почнал да се користи и во електронските медиуми
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
