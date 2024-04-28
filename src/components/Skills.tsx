import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col w-full px-[30px]">
      <h1 className=" py-5  text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold ">
        Skills
      </h1>
      <div className="skill-container flex flex-col ">
        <div className="framework  flex ">
          <Marquee speed={100}>
            <Image
              src="/images/mongodb.png"
              alt=""
              height={100}
              width={100}
              className="p-4"
            ></Image>
            <Image
              src="/images/express.png"
              alt=""
              height={100}
              width={100}
              className="p-4"
            ></Image>
            <Image
              src="/images/react.png"
              alt=""
              height={100}
              width={100}
              className="p-4"
            ></Image>
            <Image
              src="/images/node.png"
              alt=""
              height={100}
              width={100}
              className="p-4"
            ></Image>
          </Marquee>
        </div>
        <div className="languages"></div>
        <div className="libraries"></div>
      </div>
    </div>
  );
};

export default Skills;
