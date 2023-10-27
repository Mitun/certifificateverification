import React, { useState } from "react";
import Image from "next/image";
import imag1 from "../../../public/hi.jpg";
import "./About.css";
import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import PDFiewer from "./PDFViewer/PDFiewer";

const About = () => {
  const [visibleNow, setVisibleNow] = useState(true);
  const [visibleCV, setVisibleCV] = useState(false);
  const [visibleCV2, setVisibleCV2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="  ">
      <div className="sticky top-0">
        {visibleNow && (
          <div className="  bg-sky-700  h-14 w-full   border-2  border-dotted border-white flex items-center justify-center ">
            <button className="bg-orange-400 p-2 rounded-lg text-2xl font-bold hover:bg-white ml-auto mx-10">
              <a href="mailto:mitunshil747@gmail.com">Hire Me</a>
            </button>
            <button
              className="bg-orange-400 p-2 rounded-lg text-2xl font-bold hover:bg-white "
              onClick={() => {
                setVisibleCV2(true);
              }}
            >
              CHECK-OUT CV
            </button>
            <button
              className="   text-3xl font-bold hover:text-red-700 ml-auto mr-16"
              onClick={() => {
                setVisibleNow(false);
              }}
            >
              X
            </button>
          </div>
        )}

        {visibleNow && visibleCV2 && (
          <div className=" ">
            <PDFiewer></PDFiewer>
            <button
              onClick={() => {
                setVisibleCV2(false);
              }}
              className="flex items-center mx-auto mt-5 mb-5 bg-blue-500 hover:bg-blue-700 hover: text-white font-bold py-2 pl-2 rounded-lg "
            >
              HIDE CV
              <BsArrowLeft size={34} color="white" className=" ml-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </button>
          </div>
        )}
      </div>
      <div className="  text-white lg:flex lg:flex-row-reverse lg:justify-center  ">
        <div className="about-avatar">
          <Image
            src={imag1}
            alt="Tijan Bitmoji"
            height={460}
            width={380}
            className="avatar"
          />
        </div>
        <div className=" flex flex-col lg:justify-evenly lg:w-1/2 items-center justify-center ">
          <div className=" mb-8 ">
            <h1 className="mt-10 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl">
              Hi! 👋
            </h1>
            <h1 className=" text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl ">
              I&apos;m Mitun
            </h1>
          </div>
          <div className=" text-2xl flex-wrap w-auto p-5 lg:text-justify">
            <p>
              Skilled <span className=" text-3xl ">BLOCKCHAIN DEVELOPER.</span>{" "}
              My passion lies in the dynamic world of blockchain and the web3
              industry. I&apos;m committed to delivering innovative solutions
              that meet the unique needs of my clients. From crafting
              decentralized applications to enhancing security through smart
              contracts, I&apos;m dedicated to pushing the boundaries of
              blockchain technology.
            </p>
          </div>
          <div className="icons mt-8 flex">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mitun-shil-bb94aaab/"
                target="_blank"
                rel="noopener noreferrer"
                className="  outline-pink-500"
              >
                <FaLinkedin className="text-4xl text-white   hover:text-cyan-500 " />
              </a>

              <a
                href="https://github.com/Mitun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="   text-4xl text-white  hover:text-cyan-500" />
              </a>
              <a
                href="https://t.me/mitunshil747"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="text-4xl text-white  hover:text-cyan-500" />
              </a>
              <a
                href="https://twitter.com/mitun_shil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-4xl text-white  hover:text-cyan-500" />
              </a>
            </div>
          </div>
          <div className="flex space-x-3">
            <a href="mailto:mitunshil747@gmail.com">
              <button className="mb-12 bg-blue-500 hover:bg-blue-700 hover: text-white font-bold py-2 pl-2 rounded-lg flex items-center mt-8">
                CONTACT ME
                <BsArrowRight size={34} color="white" className="ml-2" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Right arrow icon */}
                </svg>
              </button>
            </a>
            <button
              onClick={() => {
                setVisibleCV(true);
              }}
              className="mb-12 bg-blue-500 hover:bg-blue-700 hover: text-white font-bold py-2 pl-2 rounded-lg flex items-center mt-8"
            >
              CHECK-OUT CV
              <BsArrowRight size={34} color="white" className="ml-2" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Right arrow icon */}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {visibleCV && <PDFiewer />}
      {visibleCV && (
        <button
          onClick={() => {
            setVisibleCV(false);
          }}
          className="flex items-center mx-auto mt-5 mb-5 bg-blue-500 hover:bg-blue-700 hover: text-white font-bold py-2 pl-2 rounded-lg  "
        >
          HIDE CV
          <BsArrowLeft size={34} color="white" className=" ml-2" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></svg>
        </button>
      )}
    </div>
  );
};

export default About;
