"use client";

import Image from "next/image";
import React from "react";

const PuppyBreed = ({ item }) => {
  return (
    <div className="puppybreed-box cursor-pointer realtive left-20 top-[6.5rem] gap-2  w-[11.5em] h-[13rem] min-[848px]:w-[13.5rem] min-[848px]:h-[15rem] min-[848px]:rounded-2xl rounded-lg flex flex-col border-2  justify-center items-center text-center bg-white text-[#7a1d77] hover:bg-[#7a1d77] hover:text-white">
      <Image
        src={item.img}
        width={130}
        height={130}
        className="rounded-full border-2"
      />
      <span className=" mx-2 min-[848px]:text-xl">{item.name}</span>
    </div>
  );
};

export default PuppyBreed;
