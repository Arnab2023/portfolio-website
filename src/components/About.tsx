/* eslint-disable react/no-unescaped-entities */
import { Nunito } from "next/font/google";
import Image from "next/image";
import React from "react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-nunito",
});

const About = () => {
  return (
    <div className="lg:py-16 h-auto flex w-full ">
      <div className="container flex  w-full ">
        <div className=" flex w-[50%] justify-center items-center">
          <div className="img-div h-[500px] w-[500px] bg-gray-900 rounded-full">
            <Image
              src="/images/me.jpg"
              alt=""
              height={400}
              width={400}
              className="rounded-full animate-border inline-block bg-white bg-gradient-to-r  from-indigo-400 to-cyan-400 bg-[length:500%_500%] p-1  "
            ></Image>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-2xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold m-auto">
            About Me
          </h1>
          <div className=""></div>
          <div className="info-card flex flex-col items-center justify-center  bg-gray-900  w-[700px]  rounded-xl ">
            <p
              className={` ${nunito.variable} font-nunito text-[18px] text-white mx-[50px] my-[30px] tracking-[2px]`}
            >
              A{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Full Stack Developer
              </span>{" "}
              who enjoys creating user-friendly websites that solve real-world
              problems. With a strong foundation in both front-end and back-end
              technologies, I thrive on bringing ideas to life through clean,
              efficient code and intuitive user experiences. I have a strong
              understanding of{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Data Structures
              </span>{" "}
              and{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Algorithms
              </span>
              , and I am always eager to learn new technologies. My expertise
              includes the{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                MERN
              </span>{" "}
              stack, ,{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Redux
              </span>
              ,
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Next.js,
              </span>
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                {" "}
                C++
              </span>
              , and Python. I am also familiar with{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Git
              </span>{" "}
              &{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                GitHub
              </span>
              . I believe in continuous learning and staying up-to-date with the
              latest technologies and best practices in the ever-evolving field
              of web development. I am a proactive problem solver and enjoy
              collaborating with cross-functional teams to deliver exceptional
              results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
