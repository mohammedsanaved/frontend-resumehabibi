import Link from "next/link";
import React from "react";
import OurStats from "./OurStats";

const StartBuilding = () => {
  const ListData = [
    {
      id: 1,
      text: "Multi-theme & type face for personalization.",
    },
    {
      id: 2,
      text: "Placeholder resume content to guide your filling.",
    },
    {
      id: 3,
      text: "Multiple layouts & templates to choose from.",
    },
  ];
  return (
    <div className="flex flex-col gap-[2rem] pt-4 justify-center px-2">
      <div className="flex justify-center">
        <h1 className="font-quicksand text-[1.3rem] text-center sm:text-5xl font-bold leading-normal tracking-tight">
          Start Building Your Own Success Story Today!
        </h1>
      </div>
      {/*  */}
      <div className="flex mx-3 flex-col-reverse justify-center md:flex-row lg:gap-[7rem] ">
        <div className="flex flex-col items-center md:px-2">
          <div className="">
            <h1 className="text-center font-quicksand pt-2 text-2xl font-bold leading-normal tracking-tight">
              Snapshot of our simple-to-use editor
            </h1>
          </div>
          <div className=" lg:w-[36.478rem] lg:h-[32.922rem] flex-shrink-0">
            <img src="assets/images/start-building.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 text-[18px] md:px-2 pt-2">
          <div>
            <p className="text-[16px] lg:text-[18px] ">
              All the flexibility & intuition you need to build a resume that stands out
            </p>
          </div>
          {ListData.map((item, index) => (
            <div className="flex items-center gap-3 " key={index}>
              <div className="sm:w-3 sm:h-3 pb-[2.5rem] sm:pb-0 w-[10px] h-[8px] rounded-full bg-primary"></div>
              <div className="font-quicksand  text-[1rem] lg:text-[18px] font-bold leading-normal tracking-tight w-[25rem]">
                {" "}
                {item.text}
              </div>
            </div>
          ))}

          <div>
            <Link href="/login">
              <button className="bg-primary  text-white py-2 px-4  rounded-3xl">
                Create Resume
              </button>
            </Link>
          </div>

          <div className="md:hidden text-center">
            <p className="  underline py-2">Our Stats: </p>
          </div>
          <div className="md:hidden">
            <OurStats />
          </div>

          {/* 
          <div>
            <p className="  underline py-2">Our Stats: </p>
          </div>
          <div className="flex gap-4 text-center align-middle justify-center">
            <div className="flex flex-col">
              <div className="font-quicksand text-center text-[1.5rem] md:text-5xl font-bold leading-normal tracking-tight">
                200+
              </div>
              <div>
                <p className="text-[15px] md:text-2xl">Users</p>
              </div>
            </div>
            <div className="h-[4rem] w-[2px] bg-black"></div>
            <div className="flex flex-col">
              <div className="font-quicksand text-[1.5rem] md:text-5xl text-start font-bold leading-normal tracking-tight">
                5 mins
              </div>
              <div>
                <p className="text-[15px] md:text-2xl">Average resume building time </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="display:block md:hidden  ml-[8rem]">
        <p className="  underline py-2">Our Stats: </p>
      </div>
      <div className="display:block md:hidden justify-center">
        <OurStats />
      </div>
    </div>
  );
};

export default StartBuilding;
