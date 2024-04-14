"use client";

import React, { useEffect, useState } from "react";

import VideoPlayer from "./VideoPlayer";
import PuppyBreed from "./PuppyBreed";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Mainpage = () => {
  const router = useRouter();

  const data = [
    {
      name: "2nd Gen Mini Goldendoodle",
      img: "/2nd gen mini goldendoodle.jpeg",
    },
    {
      name: "2nd Gen Mini Whoodle",
      img: "/2nd Gen Mini Whoodle.jpeg",
    },
    {
      name: "Alaskan Klee Kai",
      img: "/Alaskan Klee Kai.jpeg",
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
  const data1 = [
    {
      img: "/1.png",
      text: "FUR-EVER HOME PROGRAM Our number one priority is finding our puppies their fur-ever, happy homes. With this, we promise a lifetime of support and commitment to these puppies. Find out more about this program.",
    },
    {
      img: "/2.png",
      text: "PUPPY QUESTIONS Puppy questions?  We have the answers.  Visit our store to get all of your questions answered by our knowledgable staff.",
    },
    {
      img: "/3.png",
      text: "YOU ARE ALWAYS COVERED Check out our health guarantees and the top 10 reasons to buy a puppy from us.",
    },
    {
      img: "/4.png",
      text: "WHERE OUR PUPPIES COME FROM We strive to be the best in the puppy world, that is why we only use the best private and professional USDA licensed breeders.",
    },
    {
      img: "/5.png",
      text: "PET PROTECTION PACKAGE Every puppy comes with a training subscription and microchip enrollment package, which after enrollment, will help you have the peace of mind your pet is protected beyond your home, because our total commitment does not end when you bring home your new family member.",
    },
  ];

  // const [selectedBreed, setSelectedBreed] = useState("Select");
  // const filteredData =
  //   selectedBreed === "Select"
  //     ? data
  //     : data.filter((item) => item.breed === selectedBreed);
  // const uniqueBreeds = [...new Set(data.map((item) => item.breed))];
  return (
    <div>
      <div className="mainpage-1 w-full h-[90vh] relative max-[380px]:h-[34rem] min-[380px]:h-[90.9vh]  max-[338px]:h-[39rem] ">
        {/* Puppy image */}

        <div className="absolute top-10 h-full  left-20 right-20 flex flex-col gap-8 text-[#ffffff] text-[4rem] font-bold min-[492px]:text-[2.4rem] min-[607px]:text-[2.5rem] min-[624px]:text-[3rem] ">
          <div className="flex flex-col gap-0">
            <span className="slide-in-animation">Welcome to</span>
            <span className="slide-in-animation">Puppy Paradise</span>
          </div>
          <div className="flex flex-col gap-8 text-[#7D007D] ">
            <span className=" slide-in-animation perfectpuppy  text-4xl min-[492px]:text-4xl min-[610px]:text-[4rem]">
              Find Your
            </span>
            <span className="slide-in-animation perfectpuppy text-4xl min-[492px]:text-4xl min-[610px]:text-[4rem]">
              Perfect Puppy
            </span>
          </div>
          <div className="flex flex-col gap-0">
            <span className="slide-in-animation text-[3rem]">Want to</span>
            <span className="slide-in-animation">play with a puppy?</span>
          </div>

          <button
            onClick={() => {
              router.push("/available-puppies");
            }}
            className="button-animation bg-[#7D007D] hover:bg-[#a42ea4] text-white px-2 py-2 rounded-[30px] w-full h-14 text-xl min-[492px]:w-[20rem]  min-[610px]:w-[15rem]  max-[373px]:text-lg  max-[347px]:text-[1rem] "
          >
            Available Puppies
          </button>
        </div>
      </div>
      <div className="mainpage-2  w-full h-[30.5rem] relative bg-none  ">
        <div className="absolute top-20 left-20 h-[21rem] right-20 flex justify-center items-center flex-col gap-6 text-white text-3xl font-bold  min-[735px]:flex-row bg-none">
          <VideoPlayer id="videoplayer" />
          <div className="w-4/5 max-w-screen-sm flex flex-col gap-3 justify-center items-center">
            <span className="text-[#7D007D] text-center min-[693px]:text-4xl  ">
              Pupplyland is in Washington
            </span>

            <span className="big-text-page-2 text-[#090909] font-medium text-base text-center max[457px]:bg-blue-400   min-[693px]:text-lg  min-[900px]:text-2xl max-[426px]:w-[20rem]">
              Our number one priority is the health of our puppies as well as
              the care and love that they receive while they are with the
              breeder, in our store and when they go home with their new family.
              Head on over to our store and check out all of the adorable
              puppies! We're excited to meet you and answer all of your puppy
              questions!
            </span>
          </div>
        </div>
      </div>
      <div className="mainpage-3 w-full  relative flex flex-col  justify-center items-center ">
        <span className="text-[#7D007D]  top-3 font-bold text-center text-4xl my-6">
          View Our <br />
          Available Breeds
        </span>

        <div className=" mt-4 flex w-full justify-center  top-[6.5rem] gap-7 flex-wrap min-[592px]:w-4/5 ">
          {data.map((item, index) => (
            <PuppyBreed item={item} key={index} />
          ))}
        </div>
        <Link
          href="/breeds"
          className="text-center flex justify-center items-center"
        >
          <button className=" bottom-[1.5rem] mt-6 text-center bg-white text-[#7a1d77] hover:bg-[#7a1d77] hover:text-white p-3 px-4 rounded-full  border-2 border-[#7a1d77] font-bold">
            See all Breeds
          </button>
        </Link>
      </div>
      <div className="mainpage-4 text-[#221F20] relative flex justify-center items-center w-full flex-col  font-bold text-center text-3xl h-full">
        <span className="my-[2rem] text-[#7D007D] text-4xl text-center">
          Puppyland Difference
        </span>

        {data1.map((info, index) => {
          return (
            <div
              className="flex  justify-center items-center w-full  text-2xl my-3"
              key={index}
            >
              {index % 2 === 0 ? (
                <div className="w-full  bg-[#def1f8] flex justify-center items-center   ">
                  <div className=" w-3/5 flex plf">
                    <Image src={info.img} width={330} height={330} />
                    <span className="flex justify-center items-center ">
                      {info.text}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full  bg-[#E9BCF2] flex justify-center items-center ">
                  <div className="flex w-3/5 plfd">
                    <span className="flex justify-center items-center ">
                      {info.text}
                    </span>
                    <Image src={info.img} width={330} height={330} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mainpage-5 text-xl font-bold text-[#7D007D] mt-5 relative flex justify-between items-center w-full px-[20rem]  bg-[#e9bcf2]">
        <div className="right">
          <span>Our Address</span>
          <br />
          <span>
            13103 Meridian Ave E Ste. 104, <br />
            Puyallup, WA 98373
            <br />
            <br /> Mon - Sat: 11am - 8pm <br /> Sun: 12pm - 8pm <br />
          </span>
        </div>
        <div className="left ">
          <div className="flex flex-col gap-2 mb-2">
            (253) 697-9984
            <div className="flex items-center gap-3">
              <FaPhoneAlt /> <span>Phone</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot /> <span>Location</span>
            </div>
          </div>
          <span>Connect Us on Social media</span>
          <br />
          <div className="flex gap-4  items-center">
            <Image
              src="/fb.png"
              width={20}
              height={20}
              className="text-blue-500 w-8 h-8 cursor-pointer"
            />
            <Image
              src="/insta.png"
              width={20}
              height={20}
              className="text-blue-500 w-9 h-9 cursor-pointer mt-[5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
