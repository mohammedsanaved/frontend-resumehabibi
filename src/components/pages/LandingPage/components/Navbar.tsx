import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar: React.FC = () => {
  return (
    <nav className="h-[69px] flex justify-between items-center py-4 bg-white">
      <div className="ml-4 flex">
        <Link href="/">
          <span className="flex items-center">
            <img
              src="/assets/images/logo.jpeg"
              alt="Logo"
              className="w-[81px] h-[69px] flex-shrink-0 sm:w-[41]"
            />
            <p className="text-primary  font-quicksand font-semibold text-[12px] tracking-wide capitalize sm:text-[1.5rem]">
              {" "}
              ResumeHabibi
            </p>
          </span>
        </Link>
      </div>

      <div className="mr-4  hidden sm:block">
        <Link href="/signup">
          <button className=" text-black w-28 font-medium border border-primary py-2 px-4 rounded-3xl mr-2">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-primary w-28 text-white py-2 px-4  rounded-3xl">Login</button>
        </Link>
      </div>
      <HiMenuAlt3 className="text-[3rem] cursor-pointer p-2 sm:hidden" />
    </nav>
  );
};

export default Navbar;
