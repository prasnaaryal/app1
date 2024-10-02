import React from "react";

const EmailBox = () => {
  return (
    <div className="container bg-[#34826A] mx-auto grid grid-cols-12 py-10">
      <div className="col-span-6">
        <h1 className="text-white mb-10">Start Your Journey </h1>
        <span className="text-white ">
          Establish specific, measurable goals that will guide you on your
          journey.
        </span>
      </div>
      <div className="col-span-6">
        <input type="email" placeholder="Your Email" ></input>
      </div>
    </div>
  );
};

export default EmailBox;
