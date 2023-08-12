import React from "react";
import Navbar from "./components/Navbar";
import HeroSectionTop from "./components/HeroSectionTop";
import BuildYourResume from "./components/BuildYourResume";
import UnlockThePotential from "./components/UnlockThePotential";
import StartBuilding from "./components/StartBuilding";
// import YouCanAlways from "./components/YouCanAlways";
// import About from "./components/About";
// import Benefits from "./components/Benefits";
// import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionTop />
      <BuildYourResume />
      <UnlockThePotential />
      <StartBuilding />
      {/*<YouCanAlways />
      <About />
      <Benefits />
      <Testimonials />*/}
      <Footer />
    </div>
  );
};

export default LandingPage;
