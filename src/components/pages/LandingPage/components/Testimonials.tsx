import React from "react";

const Testimonials = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex justify-center">
          <h1 className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
            Testimonials From Our Previous Users
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-secondary text-3xl font-semibold">What People Say About Us</p>
        </div>

        <div className="flex justify-center gap-60 ">
          <div className="bg-white p-20 border-2 border-primary w-[32rem] rounded-3xl top-60 z-50 absolute">
            <div className="flex items-center">
              <div className="w-20 h-20">
                <img src="assets/images/logo.jpeg" alt="logo" />
              </div>
              <div>
                Sample User, <span className="text-primary">Web Developer</span>
              </div>
            </div>
            <div>
              We move with make a Creative Strategy for help your goal, we help to improve your
              income by a services.
            </div>
          </div>
        </div>

        <div>
          <div className="absolute z-40">
            <img src="assets/images/tertiary-layer.png" alt="tertiary" />
          </div>
          <div className="absolute z-30">
            <img src="assets/images/secondary-layer.png" alt="secondary" />
          </div>
          <div className="absolute z-20">
            <img src="assets/images/primary-layer.png" alt="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
