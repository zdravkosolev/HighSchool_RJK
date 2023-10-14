import Banner from "@/components/Global/Banner";
import DirectorSection from "@/components/Staff/DirectorSection";
import EducationStaff from "@/components/Staff/EducationStaff";
import StaffInfo from "@/components/Staff/StaffInfo";
import management from "@/components/Staff/staff-data/management";
import { NextPage } from "next";

const StaffPage: NextPage = () => {
  return (
    <>
      <Banner title="Настава" subtitle="Kадар" image="nastavaHero.png" />
      <div className="w-4/5 mx-auto">
        <DirectorSection />
        <h3 className="font-extrabold font-heading text-center text-[40px] my-10">
          Раководен кадар
        </h3>
        {management.map((manager) => (
          <StaffInfo key={manager.id} staffInfo={manager} />
        ))}
        <EducationStaff />
      </div>
    </>
  );
};

export default StaffPage;
