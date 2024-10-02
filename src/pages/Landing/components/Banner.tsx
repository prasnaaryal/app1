import React from "react";
import Landing from "../../assets/images/landing.png";

const Banner = () => {
  return (
    <div>
      {/* background image container */}
      <div>
        <img src={Landing} alt="landing" className="h-[80vh] object-cover" />
      </div>

      <div className="absolute inset-0 flex items-right justify-center flex-col ml-28 mb-10">
        <h1 className="text-white text-4xl font-bold">
          Empowering Your Nursing Journey
        </h1>
        <p className="text-xl text-white mt-4">
          We're here for you from education to employment. Your trusted partner
          in achieving your nursing dreams.
        </p>

        <div className="mt-8">
          <button className="bg-amber-500 text-white w-52 h-12 rounded-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
