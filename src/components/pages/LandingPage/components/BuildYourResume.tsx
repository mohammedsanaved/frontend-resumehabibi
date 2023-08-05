import React from "react";

const BuildYourResume = () => {
  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      <div className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
        Build your <span className="text-primary">resume</span> in 3 steps
      </div>
      <div className="flex  w-[100%]">
        <div className="flex items-center gap-3">
          <div className="w-48">
            <img className="" src="assets/images/step-1.png" alt="step-1" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 text-4xl">
              <p className="text-primary font-quicksand font-bold">1.</p>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-black font-quicksand font-semibold ">Pick A Template</p>
              </div>
              <div>
                <p className="text-secondary">Fill in the blanks and see results in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex  w-[100%] justify-end">
        <div className="flex items-center gap-3">
          <div className="w-48">
            <img className="" src="assets/images/step-2.png" alt="step-1" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 text-4xl">
              <p className="text-primary font-quicksand font-bold">2.</p>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-black font-quicksand font-semibold ">Pick A Template</p>
              </div>
              <div>
                <p className="text-secondary">Fill in the blanks and see results in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex  w-[100%]">
        <div className="flex items-center gap-3">
          <div className="w-48">
            <img className="" src="assets/images/step-3.png" alt="step-1" />
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 text-4xl">
              <p className="text-primary font-quicksand font-bold">3.</p>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-black font-quicksand font-semibold ">Pick A Template</p>
              </div>
              <div>
                <p className="text-secondary">Fill in the blanks and see results in real-time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourResume;
