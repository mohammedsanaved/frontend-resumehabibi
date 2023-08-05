import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="pt-10 bg-slate-400">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium  sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li className="space-y-6 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              ResumeHabibi
            </h2>
            <p>Create your resume in a minute, get your dream job in a blink.</p>
            <div className="flex gap-4">
              <div className="text-xl ">
                <BsFacebook className={"hover:text-blue-500"} />
              </div>
              <div className="text-xl ">
                <BsInstagram className={"hover:text-blue-500"} />
              </div>
              <div className="text-xl ">
                <BsLinkedin className={"hover:text-blue-500"} />
              </div>
              <div className="text-xl ">
                <BsTwitter className={"hover:text-blue-500"} />
              </div>
            </div>
          </li>
          <li className="space-y-3 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">
              Terms & Polices
            </h2>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Terms of Services
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-3 row-span-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">Company</h2>
            <ul className="space-y-4">
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  About Us
                </a>
              </li>
            </ul>
          </li>
          <li className="space-y-2">
            <h2 className="text-xl tracking-wide text-gray-900 uppercase font-bold">Contact</h2>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200 text-lg" href="/">
                  Instagram
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex flex-col-reverse font-medium justify-center pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <div className="flex text-center justify-center">
            Copyright, ResumeHabibi 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
