import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import arrowDown from "../../Images/arrowdown.png";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type DropDownMenuListProps = {
  staticNames: {
    ulName: string;
    linkone?: string;
    linkOneHref?: Url;
    linktwo?: string;
    linkTwoHref?: Url;
    linkthree?: string;
    linkThreeHref?: Url;
    linkfour?: string;
    linkFourHref?: Url;
    linkfive?: string;
    linkFiveHref?: Url;
    linksix?: string;
    linkSixHref?: Url;
    linkseven?: string;
    linkSevenHref?: Url;
  };
};

const DropDownMenuList = ({ staticNames }: DropDownMenuListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="dropdown ">
      <button onClick={toggleDropdown} className="flex items-center  ">
        {staticNames.ulName}

        <span className=" ml-1 relative top-1">
          <Image
            src={arrowDown}
            alt="Location pin"
            width={12}
            height={12}
            className="items-end"
          />
        </span>
      </button>
      {isOpen && (
        <ul
          className="absolute flex flex-col items-start px-2 py-3 gap-3 bg-white w-60 z-50"
          style={{
            borderRadius: "0px 20px 20px 20px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            color: "rgba(0, 0, 0, 0.50)",
          }}
        >
          {staticNames.linkone && (
            <li>
              <Link
                href={staticNames.linkOneHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linkone}
              </Link>
            </li>
          )}

          {staticNames.linktwo && (
            <li>
              <Link
                href={staticNames.linkTwoHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linktwo}
              </Link>
            </li>
          )}

          {staticNames.linkthree && (
            <li>
              <Link
                href={staticNames.linkThreeHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linkthree}
              </Link>
            </li>
          )}

          {staticNames.linkfour && (
            <li>
              <Link
                href={staticNames.linkFourHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linkfour}
              </Link>
            </li>
          )}

          {staticNames.linkfive && (
            <li>
              <Link
                href={staticNames.linkFiveHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linkfive}
              </Link>
            </li>
          )}

          {staticNames.linksix && (
            <li>
              <Link
                href={staticNames.linkSixHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linksix}
              </Link>
            </li>
          )}

          {staticNames.linkseven && (
            <li>
              <Link
                href={staticNames.linkSevenHref || "#"}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {staticNames.linkseven}
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default DropDownMenuList;
