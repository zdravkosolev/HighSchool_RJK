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
        d="M47.1859 58.9542C49.8488 60.6487 53.3334 58.7359 53.3334 55.5795L53.3334 23.4862C53.3334 20.3299 49.8488 18.417 47.1859 20.1116L21.9697 36.1582C19.4997 37.73 19.4997 41.3357 21.9697 42.9075L47.1859 58.9542Z"
        fill={color}
      />
    </svg>
  );
};

export default LeftArrowIcon;
