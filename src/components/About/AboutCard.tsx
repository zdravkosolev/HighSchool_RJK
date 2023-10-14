import React from "react";
import Image from "next/image";
import { AboutCardType } from "@/types";

type Props = {
    aboutCard: AboutCardType;
};

const AboutCard = ({ aboutCard }: Props) => {
    const { image, title, description } = aboutCard;

    return (
        <div className="py-8">
            <Image src={image} width={1461} height={576} alt={title} />
            <h4 className="font-heading font-extrabold text-5xl text-center my-8">
                {title}
            </h4>
            <p className="text-[22px]">{description}</p>
        </div>
    );
};

export default AboutCard;
