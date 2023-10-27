import React from "react";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const socialIcons = [
    {
      name: "Email",
      icon: AiOutlineMail,
      link: "mailto:mitunshil747@gmail.com",
      details: "mitunshil747@gmail.com",
    },
    {
      name: "GitHub",
      icon: AiOutlineGithub,
      link: "https://github.com/Mitun",
      details: "github.com/Mitun",
    },
    {
      name: "Twitter",
      icon: AiOutlineTwitter,
      link: "https://twitter.com/mitun_shil",
      details: "twitter.com/mitun_shil",
    },
    {
      name: "WhatsApp",
      icon: AiOutlineWhatsApp,
      link: "https://wa.me/1829625026",
      details: "+8801829625026",
    },
    {
      name: "Location",
      icon: AiOutlineEnvironment,
      link: "https://maps.app.goo.gl/G8zXttBX3cAipa7r6",
      details: "Bangladesh, UTC+6",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      link: "https://t.me/mitunshil747",
      details: "@mitunshil747",
    },
  ];
  return (
    <div className="gradient-background3 mb-10 text-white">
      <div className=" pt-10 font-bold ml-10  text-4xl mb-6 text-black">
        CONTACT ME
      </div>
      <div className=" mt-10 font-bold ml-10  text-2xl mb-6 text-black">
        I will Accelerate your process to stand out.
      </div>
      {/* <div className="grid  sm:grid-cols-1 lg:grid-cols-2 space-x-2 w-5/6 mx-auto justify-between"> */}
      {/* <div className="grid grid-cols-2  space-x-2 w-5/6 mx-auto justify-between"> */}
      <div className="">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:mx-16 md:mx-10 sm:mx-2 mx-2 gap-12 pb-10">
          {socialIcons.map((iconData, index) => (
            <div
              key={index}
              className=" flex text-center gradient-background4 sm:w-5/6 md:w-auto xs:w-5/6 hover:scale-110 p-10 mb-2 "
            >
              <a
                href={iconData.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-2 h-8 "
              >
                {React.createElement(iconData.icon, {
                  size: 80,
                  color: "#007BFF",
                })}
              </a>
              <div className="items-center pl-5">
                <p className="mt-2 lg:text-2xl sm:text-xl xs:text-lg flex justify-start ">
                  {iconData.name}
                </p>
                <p className="lg:text-xl sm:text-lg xs:text-lg ">
                  {iconData.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a href="mailto:mitunshil747@gmail.com">
          <button className="mb-3 bg-blue-500 hover:bg-blue-700 hover: text-white font-bold py-2 px-4 rounded-lg flex items-center mt-8">
            PING ME
            <BsArrowRight size={34} color="white" className="ml-2" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Right arrow icon */}
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
