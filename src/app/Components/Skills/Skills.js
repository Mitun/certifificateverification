import React from "react";
import Image from "next/image";
import image1 from "./remix.png";
import image2 from "./solidity.png";
import image3 from "./ethers.png";
import image4 from "./web3.png";
import image5 from "./wagmi.png";
import image6 from "./axios.png";
import image7 from "./ipfs.png";
import image8 from "./hardhat.png";
import image9 from "./nextjs.png";
import image10 from "./react.png";
import image11 from "./js.png";
import image12 from "./python.png";
import image13 from "./html.png";
import image14 from "./css.png";
import image15 from "./npm.png";
import image16 from "./yarn.png";
import image17 from "./git.png";
import image18 from "./latex.png";

const Skills = () => {
  const images = [
    { src: image1, alt: "Remix" },
    { src: image2, alt: "Solidity" },
    { src: image3, alt: "Ethers" },
    { src: image4, alt: "Web3" },
    { src: image5, alt: "Wagmi" },
    { src: image6, alt: "Axios" },
    { src: image7, alt: "Ipfs" },
    { src: image8, alt: "Hardhat" },
    { src: image9, alt: "Next.js" },
    { src: image10, alt: "React.Js" },
    { src: image11, alt: "Javascript" },
    { src: image12, alt: "Python" },
    { src: image13, alt: "Html" },
    { src: image14, alt: "Css" },
    { src: image15, alt: "Npm" },
    { src: image16, alt: "Yarn" },
    { src: image17, alt: "Git" },
    { src: image18, alt: "Latex" },
  ];
  return (
    <div className="  bg-white pb-10">
      <div className=" pt-10 font-bold ml-10  text-4xl mb-6">SKILLSET</div>
      <div className=" mt-10 font-bold ml-10  text-2xl mb-6">
        Supporting Tools for Development:
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 lg:gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="border-2 rounded-3xl border-stone-950 h-32 w-32 flex items-center justify-center bg-gray-50 hover:bg-orange-400">
              <Image
                src={image.src}
                alt={image.alt}
                height={300}
                width={180}
                className=" p-2 avatarSkill "
              />
            </div>
            <p className="mt-2">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
