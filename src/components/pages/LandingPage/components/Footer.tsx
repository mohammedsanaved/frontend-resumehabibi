import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const IconsData = [BsFacebook, BsInstagram, BsLinkedin, BsTwitter];
  const FooterData = [
    {
      id: 1,
      title: "Terms & Polices",
      link1: "Terms of Services",
      link2: "Privacy Policy",
    },
    {
      id: 2,
      title: "COMPANY",
      link1: "Home",
      link2: "Contact",
      link3: "About Us",
    },
    {
      id: 3,
      title: "CONTACT",
      link1: "Twitter",
      link2: "Instagram",
    },
  ];

  return (
    <footer className="pt-[2.5rem] bg-black text-white mt-[43.3rem]   sm:flex justify-center  ">
      <div className="max-w-6xl   xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium grid-flow-row   sm:pb-20 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-[5rem]">
          <li className="space-y-6 row-span-2 mb-2 lg:text-lg ml-[2rem] pt-[0.8rem]  md:text-[12px] lg:flex flex-col justify-center">
            <h2 className="text-xl tracking-wide text-cyan-200 uppercase font-bold sm:text-lg">
              ResumeHabibi
            </h2>
            <p className="sm:text-lg ">
              Create your resume in a minute,get your dream job in a blink.
            </p>
            <div className="flex flex-row sm:text-lg gap-[1.2rem]">
              {IconsData.map((Icon, index) => (
                <Icon
                  key={index}
                  className="w-6 h-6 text-white hover:text-cyan-300 cursor-pointer sm:lg "
                />
              ))}
            </div>
          </li>

          {FooterData.map((item, id) => {
            return (
              <li key={id} className="space-y-3 row-span-2 lg:pt-[0.5rem] ml-[2rem]">
                <h2 className="text-xl pt-2 sm:text-lg tracking-wide   text-cyan-200 uppercase font-bold">
                  {item.title}
                </h2>

                <ul className="space-y-2 leading-4 ">
                  <li>
                    <a
                      className="hover:text-cyan-300 transition-colors duration-200  sm:text-lg"
                      href="/"
                    >
                      {item.link1}
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-cyan-300 transition-colors duration-200 sm:text-lg"
                      href="/"
                    >
                      {item.link2}
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-cyan-300 transition-colors duration-200 sm:text-lg"
                      href="/"
                    >
                      {item.link3}
                    </a>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col-reverse font-medium justify-center pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <div className="flex text-center justify-center sm:text-[16px] ">
            Copyright ©, ResumeHabibi 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
