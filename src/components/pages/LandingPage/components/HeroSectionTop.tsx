import Link from "next/link";
import React from "react";

const HeroSectionTop = () => {
  return (
    <div className="flex p-12 items-center gap-10">
      <div className="flex flex-col gap-5">
        <div className="font-quicksand md:text-5xl pt-2rem  font-bold leading-normal tracking-tight text-[1.3rem]">
          Craft Your <span className="text-primary">Dream</span> Resume{" "}
          <span className="text-primary">with</span> Ease
        </div>
        <div className="sm:hidden">
          <img
            className="md:w-[12rem] h-[15rem]"
            src="/assets/images/hero-section-one.png"
            alt="hero-section-one"
          />
        </div>
        <div className=" text-[15px]  sm:text-[1.2rem]">
          Unleash Your Potential with our Intuitive Resume Builder – Stand Out from the Crowd and
          Land Your Dream Job.
        </div>
        <div className="flex">
          <Link href="/login">
            <button className="bg-primary text-[14px] sm:text-[18px]  text-white py-2 px-4  rounded-3xl">
              Click Here To Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden sm:block">
        <img
          className="sm:w[100%]"
          src="/assets/images/hero-section-one.png"
          alt="hero-section-one "
        />
      </div>
    </div>
  );
};

export default HeroSectionTop;
