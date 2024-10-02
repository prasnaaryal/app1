import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import EmailBox from "./components/EmailBox";
import InfoSection from "./components/InfoSection";
import WhtWeDo from "./components/WhtWeDo";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <InfoSection/>
      <WhtWeDo/>
      <EmailBox/>
      
    </div>
  );
};

export default LandingPage;
