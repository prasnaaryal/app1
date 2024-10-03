import React from "react";
import Nurse3 from "../../../assets/images/nurse3.png";
import { FcOk } from "react-icons/fc";

const Services = () => {
  return (
    <div className="container grid grid-cols-12 gap-14 py-10 mx-auto">
      <div className="col-span-7 m-8">
        <h1 className="font-semibold text-2xl mb-4 ">OUR SERVICES</h1>
        <h1 className="text-lg mb-8">Your Path to Success Starts Here</h1>

        <span className="font-poppins">
          At Glider HealthCare, we understand that the journey to becoming a
          registered nurse is both challenging and rewarding. Our dedicated team
          of experienced nursing educators and mentors is here to support you
          every step of the way. We offer a comprehensive range of services
          designed to help you achieve your dream of becoming a licensed RN.
        </span>


        <div className="flex col gap-20 py-10">

        <div>
          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Green Card Sponsorship
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            NCLEX_RN Preparation
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Study Resources
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Licensing Guidance
          </p>


          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Continued Support
          </p>
        </div>

        <div>
        <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            CGFNS Filing
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Integrated E-Learning Platform
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Consulting and Advisory Services
          </p>

          <p className="flex">
            <div className="w-6 h-6 flex items-center justify-center mr-2 mb-4">
              <FcOk />
            </div>
            Mock Exams and Practice 
Assessments
          </p>
        </div>

        </div>


        

      </div>

      <div className="col-span-5 ml-18">
        <img src={Nurse3} alt="nurse" className="w-11/12 h-90" />
      </div>
    </div>
  );
};

export default Services;
