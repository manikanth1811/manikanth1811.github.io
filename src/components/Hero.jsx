import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { GrDownload } from "react-icons/gr";

function TypingAnimation() {
  const [textColor, setTextColor] = useState("text-primary");
  return (
    <div className={`${textColor} pt-3`}>
      <TypeAnimation
        sequence={[
          1000,
          () => setTextColor("text-primary"),
          "CS Grad @ UH",
          2000,
          () => setTextColor("text-secondary"),
          "Full Stack Developer",
          1000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={50}
        deletionSpeed={75}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="hero w-[100%] bg-base-100 py-4">
      <div className="hero-content text-center">
        <div className=" w-[fit-content]">
          <h1 className="text-5xl font-bold">
            <span className="wave">👋</span> I'm Manikanth
          </h1>
          <div className="max-w-lg">
            <TypingAnimation />
          </div>
          <p className="max-w-md py-4 text-md">
            I love building interactive websites
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#contactMe">
              <button className="btn btn-primary">Contact Me</button>
            </a>
            <a
              href="https://drive.google.com/file/d/1bTvpwIaFhR1keizyfX1dTsyPuinea8mI/view?usp=drive_link"
              target="_blank"
            >
              <button className="btn btn-primary">
                Download Resume
                <div className="pl-2 mb-1">
                  <GrDownload />
                </div>
              </button>
            </a>
          </div>
          <div className="socialIcons flex justify-evenly mt-6">
            <a
              href="https://www.linkedin.com/in/manikanthreddy/"
              className="linkedin text-secondary hover:cursor-pointer hover:text-primary"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://github.com/manikanth1811"
              className="github text-secondary hover:cursor-pointer hover:text-primary"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:policemanikanth18@gmail.com"
              className="gmail text-secondary hover:cursor-pointer hover:text-primary"
            >
              <SiGmail size={24} />
            </a>
            <a
              href="https://leetcode.com/manikanth1811/"
              className="leetcode text-secondary hover:cursor-pointer hover:text-primary"
            >
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
