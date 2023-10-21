import Banner from "@/components/Global/Banner";
import DirectorSection from "@/components/Staff/DirectorSection";
import EducationStaff from "@/components/Staff/EducationStaff";
import StaffInfo from "@/components/Staff/StaffInfo";

import { NextPage } from "next";
import data from "../../../data.json"

const StaffPage: NextPage = () => {
  return (
    <>
      <Banner title="Настава" subtitle="Kадар" image="nastavaHero.png" />
      <div className="w-4/5 mx-auto">
        <DirectorSection />
        <h3 className="font-extrabold font-heading text-center text-[40px] my-10">
          Раководен кадар
        </h3>
        {data.menagement.map((manager:any) => (
          <StaffInfo key={manager.id} staffInfo={manager} />
        ))}
        <EducationStaff />
      </div>
    </>
  );
};

export default StaffPage;
