"use client";

import { data } from "autoprefixer";
import { formsubmit } from "@/lib/form";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const AvailablepuppiesBox = ({ item }) => {
  const hour = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const min = 30;
  const times = [];
  const [backgroundscroll, setbackgroundscroll] = useState(false);
  const [showtimestoslect, setshowtimestoslect] = useState(false);
  for (let i = 0; i < hour.length; i++) {
    for (let j = 0; j < 2; j++) {
      const formattedHour = (hour[i] + Math.floor((j * min) / 60)) % 12 || 12;
      const formattedMin = (min * (j % 2)).toString().padStart(2, "0");

      times.push(`${formattedHour}:${formattedMin} `);
    }
  }

  const [selectTime, setSelectime] = useState("");

  const handleTimeClick = (time) => {
    setSelectime(time);
  };

  const showpuppydateandtime = () => {};
  const [showPlayDateContainer, setShowPlayDateContainer] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const showPuppyDateAndTime = () => {
    document.body.style.overflow = "hidden";
    setShowBackdrop(true);
    setShowPlayDateContainer(true);
    setbackgroundscroll(true);
  };
  const showtimetoslectforuser = () => {
    setshowtimestoslect((prev) => !prev);
    setSelectime("");
  };

  const hidePlayDateContainer = () => {
    document.body.style.overflow = "visible";
    setShowBackdrop(false);
    setShowPlayDateContainer(false);
  };
  const [selectedTime, setSelectedTime] = useState("12:30");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className=" availablepuppies-box  h-[24rem] w-[20rem] bg-white rounded-2xl text-[#7D007D] flex  flex-col justify-center items-center gap-1">
      <Image src={item.img} width={200} height={200} alt="" />
      <h4>{item.name}</h4>
      <h4>Birth date | USDA : 43-A6-25</h4>

      <span
        className="cursor-pointer font-bold "
        onClick={showPuppyDateAndTime}
      >
        Schedule a Play Date
      </span>
      <h4>Breeder Name :{item.breedername || "Unknown"} </h4>
      <button className=" px-4 text-[#7D007D] font-bold py-2 rounded-lg border-[#7D007D] border-2 hover:scale-105">
        ASK ABOUT ME
      </button>
      {showPlayDateContainer && (
        <div
          className={`showPlayDateContainer1 z-[60] w-full  fixed inset-0 bg-gray-500 bg-opacity-50 ${
            showBackdrop ? "block" : "hidden"
          } `}
        >
          <div
            className={`showPlayDateContainer  absolute  left-[60vh] top-[2rem]  h-[100vh] bottom-[20rem]  justify-center w-2/5  bg-white mt-4 border border-black z-[70] p-20 py-10 transition-opacity ${
              showBackdrop ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <button
              className="font-bold text-2xl absolute right-5 top-3"
              onClick={hidePlayDateContainer}
            >
              X
            </button>
            <div className="flex">
              <Image src={item.img} width={200} height={200} alt="" />
              <div className="flex flex-col w-3/5 justify-center items-start p-4 text-xl">
                <h1 className="font-bold">
                  Schedule a Play Date with This Pet!
                </h1>
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Puppyland+Puyallup/@47.1377352,-122.2918636,17z/data=!3m1!4b1!4m6!3m5!1s0x5490fd57c7a872d1:0xfb50f97695133778!8m2!3d47.1377352!4d-122.2918636!16s%2Fg%2F11fdx8vzfz?authuser=0&hl=en&entry=ttu"
                >
                  {" "}
                  Puppyland Puyallup
                </Link>
                <Link href="tel:+919022713252"> (253) 697-9984</Link>
              </div>
            </div>
            <h1
              className="font-bold my-3 text-xl cursor-pointer"
              onClick={showtimetoslectforuser}
            >
              Select a Date : 6 MAR
            </h1>
            <div
              className={`transition-all duration-1000 transform ${
                showtimestoslect
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              {showtimestoslect &&
                times.map((time) => {
                  return (
                    <>
                      <button
                        id="timebutton"
                        key={time}
                        onClick={() => {
                          console.log(selectTime);
                          handleTimeClick(time);
                        }}
                        className="m-2 border-black border-2 p-3 py-1 w-[4.5rem] rounded-lg hover:bg-black hover:text-white "
                      >
                        {time}
                      </button>
                    </>
                  );
                })}
            </div>
            <h1
              className={
                selectTime && showtimestoslect
                  ? "font-bold my-3 text-xl cursor-pointer"
                  : "hidden"
              }
            >
              Selected time:{selectTime}
            </h1>
            <h1 className="font-bold my-3 text-xl cursor-pointer">My Info</h1>
            <form action={formsubmit()} className="flex flex-col gap-2 ">
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 border-black ml-3 rounded-md "
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-black ml-3 rounded-md "
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="border-2 border-black ml-3 rounded-md "
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={formData.checkbox1}
                    onChange={handleChange}
                  />
                  It's okay to text me.
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checkbox2"
                    checked={formData.checkbox2}
                    onChange={handleChange}
                  />
                  It's okay to email me.
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="checkbox3"
                    checked={formData.checkbox3}
                    onChange={handleChange}
                  />
                  I'm aware that scheduling an appointment is not reserving this
                  pet for me, and that the pet might get sold.
                </label>
              </div>
              <button
                type="submit"
                className="bg-black text-white p-2 rounded-md"
              >
                Schedule
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailablepuppiesBox;
