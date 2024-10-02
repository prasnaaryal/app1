import React from "react";

const EmailBox = () => {
  return (
    <div className="container rounded-md bg-[#34826A] mx-auto grid grid-cols-12 py-16">
      <div className="col-span-6 mt-10 mx-auto">
        <h1 className="text-white mb-10 font-medium text-sm">Start Your Journey </h1>
        <span className="text-white font-semibold">
          Establish specific, measurable goals that will guide you on your
          journey.
        </span>
      </div>
      <div className="col-span-6 mt-10 ml-14">
        <input type="email" placeholder="Your Email" className="w-[450px] h-[50px] rounded-md mb-4 " ></input>
        <button className="bg-[#E9A727] text-white w-52 h-12 rounded-md">
            Enroll Now
          </button>

          <p className="text-white mt-2 text-sm">Join Us Today</p>
      </div>
    </div>
  );
};

export default EmailBox;
