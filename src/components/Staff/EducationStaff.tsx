import React, { useState } from "react";
import FilterBtn from "./FilterBtn";
import StaffInfo from "./StaffInfo";
import { StaffInfoType } from "@/types";
import data from "../../data.json"

const EducationStaff = () => {
  const mathTeachers: StaffInfoType[] = data.staff.filter(
    (teacher) => teacher.subject === "Математика"
  );

  const [filteredTeachers, setFilteredTeachers] = useState(mathTeachers);
  const [activeFilter, setActiveFilter] = useState("Математика");

  const subjects = data.staff.map((teacher) => teacher.subject);
  const uniqeSubjects = new Set();

  subjects.forEach((subject) => uniqeSubjects.add(subject));
  const uniqeSubjectTypes: string[] = Array.from(uniqeSubjects) as string[];

  function handleFilter(subject: string) {
    const filteredTeachers = data.staff.filter(
      (teacher) => teacher.subject === subject
    );
    setActiveFilter(subject);
    setFilteredTeachers(filteredTeachers);
  }

  return (
    <div className="py-14">
      <h3 className="font-extrabold font-heading text-center text-[40px] my-10">
        Образовен кадар
      </h3>
      <div className="w-11/12 mx-auto">
        {uniqeSubjectTypes.map((uniqesubject) => (
          <FilterBtn
            key={uniqesubject}
            title={uniqesubject}
            activeFilter={activeFilter}
            handleFilter={handleFilter}
          />
        ))}
      </div>

      {filteredTeachers.map((teacher) => (
        <StaffInfo key={teacher.id} staffInfo={teacher} />
      ))}
    </div>
  );
};

export default EducationStaff;
