import React from "react";

const BuildYourResume = () => {
  const TemplateData = [
    {
      temp_url: "assets/images/step-1.png",
      heading: "Pick A Template",
      text: "Fill in the blanks and see results in real-time.",
    },
    {
      temp_url: "assets/images/step-2.png",
      heading: "Pick A Template",
      text: "Fill in the blanks and see results in real-time.",
    },
    {
      temp_url: "assets/images/step-3.png",
      heading: "Pick A Template",
      text: "Fill in the blanks and see results in real-time.",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col p-10 gap-5">
      <div className="font-quicksand text-[1.3rem] md:text-5xl font-bold leading-normal tracking-tight">
        Build your <span className="text-primary">resume</span> in 3 steps
      </div>
      {TemplateData.map((item, index) => {
        return (
          <div className="flex w-[100%]   sm:odd:justify-end " key={index}>
            <div className="flex items-center gap-3">
              <div className="w-[10rem]">
                <img className=" " src={item.temp_url} alt="step-1" />
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 text-4xl">
                  <p className="text-primary text-[1.2rem] font-quicksand font-bold">
                    {index + 1}.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-black font-quicksand font-semibold text-[1rem] ">
                      {item.heading}
                    </p>
                  </div>
                  <div>
                    <p className="text-secondary text-[16px]"> {item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BuildYourResume;

{
  /* <div className="flex  w-[100%]">
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
      </div> */
}
