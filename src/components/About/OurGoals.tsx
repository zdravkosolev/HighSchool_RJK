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
          style={{top:"430px", left:"500px"}}
          className="absolute -bottom-50-left-50 z-0"
          src={"/Images/graphic-element-green-lines.png"}
          width={120}
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
        <div style={{display:"flex", flexDirection:"column"}}>


<div style={{display:"flex", marginBottom:"40px"}}>

        <div className="w-1/2 z-20">
          <div style={{height:"100%"}} className="border-primary-green border  rounded-xl p-10  mr-9 bg-white">
            <h5 className="font-heading text-center font-semibold text-2xl mb-4">
              Oпшти цели
            </h5>
            <p>
            - здобивање знаења, умеења и навики;<br />
- развивање на интересите, способностите и творештвото кај младите;<br />
- воспитување на младите за одговорно лично и општествено живеење ;<br />
- воспитување кое подразбира развој на критичка мисла, толерантност, конструктивност и креативност;<br />
- оспособување за вклучување на работа, односно за продолжување на образованието;<br />
- развивање свест за чување на здравјето, заштита на природата и човековата средина;<br />
- поттикнување и забрзување на развојот на посебните интереси и способности кај младите;<br />
- подготвеност за доживотно учење.
            </p>
          </div>
        </div>

        <div className="w-1/2 z-20">
          <div style={{height:"100%"}} className="border-primary-green border rounded-xl p-10  mr-9 bg-white">
            <h5 className="font-heading font-semibold text-center text-2xl mb-4">
              Посебни цели
            </h5>
            <p>
            - опремување на училиштето со современи наставни средства;<br />
- подобрување на квалитетот на наставата преку воведување современи наставни методи, форми на работа и наставни средства;<br />
- зголемување на степенот на мотивираност и одговорност кај учениците за сопствениот напредок;<br />
- активна улога на учениците во наставата;<br />
- зголемување на нивото на компетентност на наставниците за успешна комуникација со учениците;<br />
- подобри интерперсонални односи;<br />
- подобра соработка со родителите;<br />
- подобрување на редовноста на наставниците и учениците.
            </p>
          </div>
        </div>
</div>
<div style={{display:"flex"}}>

        <div className="w-1/2 z-20">
          <div style={{height:"100%"}} className="border-primary-green border rounded-xl p-10  mr-9 bg-white">
            <h5 className="font-heading font-semibold text-2xl mb-4 text-center">
              Развојни цели
            </h5>
            <p>
            - поголема соработка со социјалните партнери;<br />
- употреба на компјутерската опрема во училиштето;<br />
- доопремување на училниците и кабинетите;<br />
- зголемена соработка меѓу активите во наставните и воннаставните активности;<br />
- зголемена активност во меѓународните, државните, градските и невладините проекти;<br />
- зголемена активност во хуманитарните случувања;<br />
- зголемена комуникација и соработка со родителите;<br />
- зголемена активност за меѓуетничка толеранција и соработка;<br />
            </p>
          </div>
        </div>
        <div className="w-1/2 z-20">
          <div className="border-primary-green border  rounded-xl p-10  mr-9 bg-white">
            <h5 className="font-heading font-semibold text-2xl mb-4 text-center">
              Реализација на целите
            </h5>
            <p>
            - надминување на традиционалната настава;<br />
- навремена и целосна информираност;<br />
- постојана комуникација со МОН и БРО;<br />
- залагање на раководниот тим за склучување соработки со разни стопански субјекти;<br />
- партиципативно одлучување;<br />
- ефективно водење состаноци;<br />
- заемно почитување и доверба;<br />
- отворена комуникација;<br />
- водење грижа и одржување на опремата;<br />
- особено залагање на наставниците за примена на современите начини на образование;<br />
- дополнително воннаставно ангажирање на наставниците за сите проекти, хуманитарни акции и поттикнување за самостојно предлагање на училишни и вонучилишни активности
            </p>
          </div>
        </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;
