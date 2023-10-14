import { StaffInfoType } from "@/types";
import React from "react";

type Props = {
  staffInfo: StaffInfoType;
};

const StaffInfo = ({ staffInfo }: Props) => {
  const { name, lastname, email } = staffInfo;

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-400">
      <span className="font-heading font-semibold text-[30px]">
        {name} {lastname}
      </span>
      <span className="italic">{email}</span>
    </div>
  );
};

export default StaffInfo;
