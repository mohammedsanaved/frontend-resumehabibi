import React from "react";

const YouCanAlways = () => {
  return (
    <div className="flex p-20 items-center gap-20">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center w-[35rem]">
          <h1 className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
            You can always pick any template you like
          </h1>
        </div>
        <div>
          <p className="text-secondary text-3xl font-semibold">Our Services</p>
        </div>
        <div className="w-[30rem]">
          <p>
            Choose from one of our expertly prepared resume types below, by using pre-established
            parts that have been endorsed by recruiters internationally, you can begin creating your
            resume in under 5 seconds, additionally, you can edit to fit your preferences and
            personality before clicking &#39; Download &#39;. Even if you have never created a
            resume before, it is that SIMPLE to use!
          </p>
        </div>
      </div>
      <div className="w-[36.75rem] h-[19.893rem] flex-shrink-0">
        <img src="assets/images/resumes-in-our-app.png" alt="resumes" />
      </div>
    </div>
  );
};

export default YouCanAlways;
