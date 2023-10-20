import React from "react";

type Props = { title?: string; image: string; subtitle?: string};

const Banner = ({ title, image, subtitle }: Props) => {
  return (
    <div
      className="bg-cover flex flex-col justify-center items-center text-white h-[485px]"
      style={{
        backgroundImage: `linear-gradient(100deg, #000000 2.34%, rgba(0, 0, 0, 0.70) 20.28%), url('/Images/${image}') `,
      }}
    >
      <h2 className="font-semibold text-[64px] font-heading mb-2">{subtitle}</h2>
      <span className="font-regular text-xl">
        Почетна/{title}
        {subtitle && "/"}
        {subtitle}
      </span>
    </div>
  );
};

export default Banner;
