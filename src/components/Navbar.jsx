"use client";

import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuvisibility, setmenuvisibility] = useState(false);
  const showmenu = () => {
    setmenuvisibility((prev) => !prev);
  };
  const pathname = usePathname();
  // console.log(pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` font-bold flex justify-between w-full h-9 px-20 pb-12 bg-[#7D007D] pt-6  text-white sticky top-0 left-0 right-0 z-50`}
    >
      <Link href="/">
        {" "}
        <div className=" logo text-2xl ">PuppyLand</div>
      </Link>

      <div className="right flex gap-3 h-[25px]">
        <div
          className="links flex gap-3 justify-center
        items-center h-full max-[687px]:hidden  min-[770px]:text-lg min-[941px]:text-[20px] min-[867px]:gap-6"
        >
          <Link
            href="/available-puppies"
            className={`nav-items ${
              pathname === "/available-puppies" ? "active" : ""
            }`}
          >
            AvailablePuppies
          </Link>
          <Link
            href="/breeds"
            className={`nav-items ${pathname === "/breeds" ? "active" : ""}`}
          >
            Breeds
          </Link>
          <Link
            href="/about"
            className={`nav-items ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-items ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
        <Link href="tel:+919022713252">
          <FaPhoneAlt className="w-4 h-6 cursor-pointer hover:text-purple-400" />
        </Link>
        <FiMenu
          className="w-6 h-6 cursor-pointer hover:text-purple-400 text-white  right-14 top-0 min-[687px]:hidden "
          onClick={showmenu}
        />

        {menuvisibility && (
          <div
            className="min-[687px]:hidden border flex flex-col justify-center gap-3 p-3  items-center w-2/5 h-25  right-14 rounded-lg z-20 absolute   top-[4.5rem] bg-[#7D007D] text-white "
            id="menubox"
          >
            <Link href="/available-puppies">AvailablePuppies</Link>
            <Link href="/breeds">Breeds</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
