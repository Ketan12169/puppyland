import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-48 items-center bg-[#7D007D] text-white h-[3rem] footer bottom-0">
      <Link href="">
        {" "}
        <h1>Pinogy Corporation & Puppyland © 2023</h1>
      </Link>
      <div className="flex gap-8">
        <Link href="">
          <h1>Terms of Use </h1>
        </Link>
        <Link href="">
          <h1>Privacy Policy </h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
