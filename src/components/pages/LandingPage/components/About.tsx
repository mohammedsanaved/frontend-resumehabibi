import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="p-20  flex-col justify-center">
      <div className="flex justify-center">
        <h1 className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
          Start Building Your Own Success Story Today!
        </h1>
      </div>
      <div className="flex gap-20 ">
        <div className="w-[30.777rem] h-[21.898rem] flex-shrink-0 relative">
          <img
            src="assets/images/dots.svg"
            alt="dots"
            className="absolute z-0 top-[-10%] left-[-8%]"
          />
          <img src="assets/images/about.png" alt="about" className="rounded-3xl absolute z-20 " />
          <img
            src="assets/images/dots.svg"
            alt="dots"
            className="absolute z-0 left-[90%] bottom-[-10%]"
          />
        </div>
        <div className="flex flex-col gap-14">
          <div className="w-[30rem]">
            <p>
              ResumeHabibi is a product of R-Tech — a global innovation & digital skill learning
              center. Future Resume was born of the need to create a new way for job-seekers to
              connect with recruiters. Hence, our best hands got to work with one thing in mind: to
              help you find a great job faster. We went even further to ensure that our Template
              designs meet Industry Standards and accepted by leading HR departments. With us, you
              can spin out an impressive resume that makes a memorable first impression!
            </p>
          </div>
          <div>
            <Link href="/login">
              <button className="bg-primary  text-white py-2 px-4  rounded-3xl">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
