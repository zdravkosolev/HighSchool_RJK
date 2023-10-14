import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type SocialMediaListProps = {
  facebookSrc: StaticImageData;
  instagramSrc: StaticImageData;
  youtubeSrc: StaticImageData;
};

const SocialMediaList = ({
  facebookSrc,
  instagramSrc,
  youtubeSrc,
}: SocialMediaListProps) => {
  return (
    <ul className="flex py-2 px-4 ">
      <li className="mr-4">
        <Link href="#">
          <Image src={facebookSrc} alt="Facebook link" width={24} height={24} />
        </Link>
      </li>
      <li className="mr-4">
        <Link href="#">
          <Image
            src={instagramSrc}
            alt="Instagram link"
            width={24}
            height={24}
          />
        </Link>
      </li>
      <li>
        <Link href="#">
          <Image src={youtubeSrc} alt="YouTube link" width={24} height={24} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMediaList;
