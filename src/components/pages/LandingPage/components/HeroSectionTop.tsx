import Link from "next/link";
import React from "react";

const HeroSectionTop = () => {
  return (
    <div className="flex p-12 items-center gap-10">
      <div className="flex flex-col gap-5">
        <div className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
          Craft Your <span className="text-primary">Dream</span> Resume{" "}
          <span className="text-primary">with</span> Ease
        </div>
        <div>
          Unleash Your Potential with our Intuitive Resume Builder – Stand Out from the Crowd and
          Land Your Dream Job.
        </div>
        <div className="flex">
          <Link href="/login">
            <button className="bg-primary  text-white py-2 px-4  rounded-3xl">
              Click Here To Get Started
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src="/assets/images/hero-section-one.png" alt="hero-section-one" />
      </div>
    </div>
  );
};

export default HeroSectionTop;
