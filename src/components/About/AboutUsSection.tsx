import React from "react";

const AboutUsSection = () => {
    return (
        <div className="relative">
            <div className="flex flex-wrap justify-center my-5 relative -top-20">
                <div className="w-1/4">
                    <div className="text-primary-darkblue aboutUs-card-shadow rounded-3xl text-center p-10 bg-white mr-6">
                        <h3 className="font-semibold text-[80px]">62</h3>
                        <span className="uppercase text-[32px]">години</span>
                    </div>
                </div>

                <div className="w-1/4">
                    <div className="text-primary-darkblue aboutUs-card-shadow rounded-3xl text-center p-10 mr-6 bg-white">
                        <h3 className="font-semibold text-[80px]">120+</h3>
                        <span className="uppercase text-[32px]">вработени</span>
                    </div>
                </div>

                <div className="w-1/4">
                    <div className="text-primary-darkblue aboutUs-card-shadow rounded-3xl text-center p-10 mr-6 bg-white">
                        <h3 className="font-semibold text-[80px]">1000+</h3>
                        <span className="uppercase text-[32px]">ученици</span>
                    </div>
                </div>

                <div className="w-1/4">
                    <div className="text-primary-darkblue aboutUs-card-shadow rounded-3xl text-center p-10 mr-6 bg-white">
                        <h3 className="font-semibold text-[80px]">36</h3>
                        <span className="uppercase text-[32px]">паралелки</span>
                    </div>
                </div>
            </div>

            <div className="text-center flex flex-col justify-center w-5/6 mx-auto">
                <h4 className="font-extrabold text-[50px] my-6 font-heading">
                    СУГС “РАДЕ ЈОВЧЕСКИ - КОРЧАГИН”
                </h4>
                <p className="font-regular text-[22px] mb-5">
                    Lorem Ipsum е едноставен модел на текст кој се користел во
                    печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
                    користел како модел уште пред 1500 години, кога непознат печатар зел
                    кутија со букви и ги сложил на таков начин за да направи примерок на
                    книга. И не само што овој модел опстанал пет векови туку почнал да
                    се користи и во електронските медиуми, кој се уште не е променет. Се
                    популаризирал во 60-тите години на дваесеттиот век со издавањето на
                    збирка од страни во кои се наоѓале Lorem Ipsum пасуси, а денес во
                    софтверскиот пакет како што е Aldus PageMaker во кој се наоѓа
                    верзија на Lorem Ipsum.Lorem Ipsum е едноставен модел на текст кој
                    се користел во печатарската индустрија.
                </p>
            </div>
        </div>
    );
};

export default AboutUsSection;
