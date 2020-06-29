import React from "react";
import Landing from "../components/Home/Landing";
import SectionOne from "../components/Home/SectionOne";
import SectionAbout from "../components/Home/SectionAbout";
import SectionTwo from "../components/Home/SectionTwo";
import ContactSection from "../components/Home/ContactSection";
import SectionQuote from "../components/Home/SectionQuote";
import SectionThree from "../components/Home/SectionThree";
import SectionFour from "../components/Home/SectionFour";

const Home = props => {

  return (
     <div>
        <Landing />
        <SectionOne />
        <SectionAbout />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
     </div>
  )
}

export default Home;
