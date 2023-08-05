import Link from "next/link";
import React from "react";

const StartBuilding = () => {
  return (
    <div className="flex flex-col gap-28">
      <div className="flex justify-center">
        <h1 className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
          Start Building Your Own Success Story Today!
        </h1>
      </div>
      {/*  */}
      <div className="flex justify-center gap-28">
        <div className="flex flex-col items-center">
          <div className="">
            <h1 className="font-quicksand text-2xl font-bold leading-normal tracking-tight">
              Snapshot of our simple-to-use editor
            </h1>
          </div>
          <div className="w-[36.478rem] h-[32.922rem] flex-shrink-0">
            <img src="assets/images/start-building.png" alt="" />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-8 ">
          <div>
            <p>All the flexibility & intuition you need to build a resume that stands out</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="font-quicksand text-2xl font-bold leading-normal tracking-tight w-[25rem]">
              {" "}
              Multi-theme & type face for personalization.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="font-quicksand text-2xl font-bold leading-normal tracking-tight w-[25rem]">
              {" "}
              Placeholder resume content to guide your filling.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="font-quicksand text-2xl font-bold leading-normal tracking-tight w-[25rem]">
              {" "}
              Multiple layouts & templates to choose from.{" "}
            </div>
          </div>
          <div>
            <Link href="/login">
              <button className="bg-primary  text-white py-2 px-4  rounded-3xl">
                Create Resume
              </button>
            </Link>
          </div>
          <div>
            <p>Our Stats: </p>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <div className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
                200+
              </div>
              <div>
                <p>Users</p>
              </div>
            </div>
            <div className=" w-[2px] bg-black"></div>
            <div className="flex flex-col">
              <div className="font-quicksand text-5xl font-bold leading-normal tracking-tight">
                5 mins
              </div>
              <div>
                <p>Average resume building time </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartBuilding;
