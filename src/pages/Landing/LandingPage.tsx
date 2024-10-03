import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import EmailBox from "./components/EmailBox";
import Faq from "./components/Faq";
import InfoSection from "./components/InfoSection";
import News from "./components/News";
import OurSeminars from "./components/OurSeminars";
import Services from "./components/Services";
import WhtWeDo from "./components/WhtWeDo";
import WhyChooseUs from "./components/WhyChooseUs";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <InfoSection/>
      <WhtWeDo/>
      <EmailBox/>
      <Services/>
      <WhyChooseUs/>  
      <OurSeminars/>
      <Faq/>
      <News/>
      <ContactUs/>
      
    </div>
  );
};

export default LandingPage;
