import React from "react";

const OurStats = () => {
  return (
    <>
      {/* <div>
            <p className="  underline py-2">Our Stats: </p>
          </div> */}
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
      </div>
    </>
  );
};

export default OurStats;
