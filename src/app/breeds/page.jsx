"use client";
import PuppyBreed from "@/components/PuppyBreed";
import React from "react";

const breeds = () => {
  const data = [
    {
      name: "2nd Gen Mini Goldendoodle",
      img: "/2nd gen mini goldendoodle.jpeg",
    },
    {
      name: "2nd Gen Mini Whoodle",
      img: "/2nd Gen Mini Whoodle.jpeg",
      breedername: "J LFarm",
    },
    {
      name: "Alaskan Klee Kai",
      img: "/Alaskan Klee Kai.jpeg",
      breedername: "J LFarm",
    },
    { name: "Bichapoo", img: "/Bichapoo.jpeg" },
    { name: "Bichon", img: "/Bichon.jpg" },
    { name: "Boston Terrier", img: "/Boston Terrier.jpeg" },
    { name: "Boxer", img: "/Boxer.jpg" },
    { name: "Cavapoo", img: "/Cavapoo.jpg" },
    {
      name: "Cavalier King Charles Spaniel",
      img: "/Cavalier King Charles Spaniel.jpeg",
    },
    { name: "Cavachon", img: "/Cavachon.jpg" },
    { name: "Cavachon", img: "/Cavachon.jpg" },
    { name: "Cavachon", img: "/Cavachon.jpg" },
  ];
  return (
    <div className="flex flex-col  justify-center items-center py-5">
      <h1 className="text-3xl font-bold text-[#7D007D]">Breeds</h1>
      <div className="flex justify-center items-center w-full relative text-black py-5 h-full">
        <div className="  flex w-full justify-center gap-7 flex-wrap min-[592px]:w-4/5 ">
          {data.map((item, index) => (
            <PuppyBreed item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default breeds;
