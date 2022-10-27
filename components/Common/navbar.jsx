import Link from "next/link";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 w-screen bg-gradient-to-r h-screen from-gray-900 z-10   to-orange-500 transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-1000 ease-in-out filter`}
    >
      <div className="flex  flex-col justify-center items-center mt-28 mb-28 ">
        <Link href="/">
          <p className="text-2xl font-bold my-4">HOME</p>
        </Link>
        <Link href="/">
          <p className="text-2xl font-bold my-4">ABOUT</p>
        </Link>
        <Link href="/">
          <p className="text-2xl font-bold my-4">CAREERS </p>
        </Link>
        <Link href="/">
          <p className="text-2xl font-bold my-4">SERVICES </p>
        </Link>
        <Link href="/">
          <p className="text-2xl font-bold my-4">CONTACT </p>
        </Link>
      </div>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="z-10 fixed w-full bg-white">
      <div className="shadow-lg  ">
        <div className="flex  justify-between py-[10px] items-center cursor-pointer  container m-auto">
          <div>
            <img src="biztek.png" alt="" />
          </div>
          <div className="hidden md:block ">
            <div className="flex items-center gap-2">
              <IoMdCall className="text-orange-500 " />
              <p className="font-bold">Contact No</p>
            </div>
            <p className="text-orange-500"><a href="tel: +92 343 0305830">+92 343 0305830</a></p>
          </div>
          <div className="hidden md:block relative">
            <input
              className="w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px]  outline-orange-500 outline-1 outline h-12 px-[12px]"
              type="search"
              name=""
              id=""
              placeholder="Search"
            />
            <div className="absolute top-[0.5px] right-0 bg-orange-500 p-[15px]">
              <BsSearch className="   text-black" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <MdEmail className="text-orange-500" />
              <p className="font-bold">Email</p>
            </div>
            <p className="text-orange-500"><a href="mailto: biztekapps@gmail.com">biztekapps@gmail.com</a></p>
          </div>
          <MobileNav open={open} setOpen={setOpen} />

          <div className=" justify-end items-center md:hidden block">
            <div
              className="group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <span
                className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              ></span>
              <span
                className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </div>
          <div className="hidden lg:block pt-[10px]">
            <div className="flex lg:gap-6 md:gap-2 pb-5 justify-center pt-2 ">
              <Link href="https://www.instagram.com/" target="_blank">
                <a target="_blank">
                  <FaInstagram className=" text-[18px] md:text-2xl cursor-pointer hover:text-yellow-600" />
                </a>
              </Link>
              <Link href="https://www.twitter.com/">
                <a target="_blank">
                  <FaTwitter className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/">
                <a target="_blank">
                  <FaLinkedin className=" text-[18px] md:text-2xl cursor-pointer hover:text-blue-600" />
                </a>
              </Link>
              <Link href="https://www.youtube.com/">
                <a target="_blank">
                  <FaYoutube className=" text-[18px] md:text-2xl cursor-pointer hover:text-red-600" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="  hidden justify-center md:block container m-auto">
        <div className="flex  justify-center items-center gap-12 shadow-sm cursor-pointer ">
          <Link href="/" >
            <p className=" font-bold my-4 text-[14px] hover:text-orange-500">
              HOME
            </p>
          </Link>
          <Link href="/">
            <p className="font-bold my-4 text-[14px] hover:text-orange-500">
              ABOUT
            </p>
          </Link>
          <Link href="/">
            <p className=" font-bold my-4 text-[14px] hover:text-orange-500">
              CAREERS{" "}
            </p>
          </Link>
          <Link href="/">
            <p className=" font-bold my-4 text-[14px] hover:text-orange-500">
              SERVICES{" "}
            </p>
          </Link>
          <Link href="/">
            <p className=" font-bold my-4 text-[14px] hover:text-orange-500">
              CONTACT{" "}
            </p>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Navbar;
