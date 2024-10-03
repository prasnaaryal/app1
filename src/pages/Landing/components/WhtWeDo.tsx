import React from "react";
import Nurse2 from "../../../assets/images/nurse2.png";

const WhtWeDo = () => {
  return (
    <div className="container grid grid-cols-12 gap-14 py-10 mx-auto">
      <div className="col-span-5 ml-18">
        <img src={Nurse2} alt="nurse" className="w-11/12 h-90" />
      </div>
      <div className="col-span-7 m-8">
        <h1 className="font-semibold text-2xl mb-4 ">WHO WE ARE</h1>
        <h1 className="text-3xl mb-8">Empowering Your Nursing Journey</h1>

        <span className="font-poppins">
          At Glider Healthcare, we're here to guide you toward a fulfilling and
          successful nursing career. Our expert team specializes in helping
          aspiring nurses like you find the perfect educational path and launch
          your journey towards making a meaningful impact in healthcare.
          <br></br> We've been the trusted partner for countless nursing
          students, helping them navigate the complex world of nursing
          education. With our experience and dedication, you'll be equipped to
          succeed in the dynamic field of healthcare.<br></br>{" "}
          <span className="text-green-900 font-bold">Contact us</span> today to
          learn more about how we can assist you in achieving your NCLEX-RN
          goals.
        </span>
      </div>
    </div>
  );
};

export default WhtWeDo;
