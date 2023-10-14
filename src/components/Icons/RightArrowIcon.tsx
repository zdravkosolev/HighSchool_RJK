import React from "react";

const LeftArrowIcon = ({
  color = "#023859",
  size = 80,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M32.8141 21.0458C30.1512 19.3513 26.6666 21.2641 26.6666 24.4205L26.6666 56.5138C26.6666 59.6701 30.1512 61.583 32.8141 59.8884L58.0303 43.8418C60.5003 42.27 60.5003 38.6643 58.0303 37.0925L32.8141 21.0458Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
