"use client";

import AvailablepuppiesBox from "@/components/AvailablepuppiesBox";
import Image from "next/image";
import React, { useState } from "react";

const Availablepuppies = () => {
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
  ];
  const [selectedBreed, setSelectedBreed] = useState("Select");
  const filteredData =
    selectedBreed === "Select"
      ? data
      : data.filter((item) => item.name === selectedBreed);

  return (
    <div className="Availablepuppies  " id="available-puppies-page">
      <div className="flex flex-row gap-10 justify-center items-center w-full h-[6rem] relative text-black avh">
        <h1 className="text-3xl font-bold text-[#7D007D]">Available Pets</h1>
        <h1 className="font-bold text-xl text-[#7D007D]">Breed</h1>
        <select
          className=" border-black border-2 p-1 rounded-[5px]"
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="Select">Select</option>
          {data.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <h1 className="font-bold text-xl text-[#7D007D]">Sex</h1>
        <select className=" border-black border-2 p-1  rounded-[5px]">
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 pb-9 ">
        {filteredData.map((item, index) => {
          return <AvailablepuppiesBox item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Availablepuppies;
