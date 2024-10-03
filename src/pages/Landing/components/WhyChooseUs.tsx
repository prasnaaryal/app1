import React from "react";
import { FcOk } from "react-icons/fc";
import Earth from "../../../assets/images/earth.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="font-semibold text-2xl mb-4 flex items-center">
            WHY CHOOSE US
          </h1>
        </div>

        <div className="flex">
          <h1 className="text-lg mb-8">Guiding the Future of Healthcare</h1>
        </div>
      </div>

      <div className="container grid grid-cols-12 gap-14 py-10 mx-auto">
        <div className="col-span-5 ml-18">
          <img src={Earth} alt="nurse" className="w-11/12 h-90" />
        </div>

        <div className="col-span-7 ">
          <div className="flex flex-col gap-6 py-10">
            {/* Use a span or div for the icon and text */}
            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              One stop-shop for NCLEX-RN, PTE/IELTS Preparation Classes.
            </p>

            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              Virtual NCLEX classes, live and recorded classes.
            </p>

            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              Premium processing of US immigration and visa with average
              approval of less than 2 months.
            </p>

            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              100% placements in US overnment affiliated hospitals also private
              and public.
            </p>

            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              Transition support including fooding and accommodation
            </p>

            <p className="flex items-center text-xl">
              <span className="w-6 h-6 flex items-center justify-center mr-2">
                <FcOk />
              </span>
              IT training and placement for eligible and interested dependent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
