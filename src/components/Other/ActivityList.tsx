import React from "react";
import ActivityCard from "../Cards/ActivityCard/ActivityCard";
import Image from "next/image";
import resume from "../../Images/resume_7891811.jpg";
import society from "../../Images/society_2110599.png";
import learning from "../../Images/learning_4185218.png";
import sharing from "../../Images/share_783321.png";

const ActivityList = () => {
  return (
    <div className="w-full p-5 flex justify-center absolute ">
      <div className="flex gap-4 w-4/5 ">
        <ActivityCard text="Уписи">
          <Image src={resume} alt="Resume logo" />
        </ActivityCard>
        <ActivityCard text="Активности">
          <Image src={society} alt="Activity logo" />
        </ActivityCard>
        <ActivityCard text="Настава">
          <Image src={learning} alt="learning logo" />
        </ActivityCard>
        <ActivityCard text="Кариерен Центар">
          <Image src={sharing} alt="career logo" />
        </ActivityCard>
      </div>
    </div>
  );
};

export default ActivityList;
