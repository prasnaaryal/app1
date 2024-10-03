import React from "react";
import Earth from "../../../assets/images/earth.png";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import KathmanduImage from "../../../assets/images/Rectangle 200.png";
import PokharaImage from "../../../assets/images/Rectangle 201.png";
import NepalgunjImage from "../../../assets/images/Rectangle 202 (1).png";

const OurSeminars = () => {
  const seminars = [
    {
      name: "Kathmandu",
      image: KathmanduImage,
    },
    {
      name: "Pokhara",
      image: PokharaImage,
    },
    {
      name: "Nepalgunj",
      image: NepalgunjImage,
    },
    {
      name: "Kathmandu",
      image: KathmanduImage,
    },
    {
      name: "Pokhara",
      image: PokharaImage,
    },
    {
      name: "Nepalgunj",
      image: NepalgunjImage,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl mb-4">OUR SEMINARS</h1>
        <h2 className="text-lg mb-8">A Glimpse into our Seminar Experience</h2>
      </div>

      {/* Seminar Grid */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-1 flex items-center justify-center">
          <button className="p-2 rounded-full bg-gray-200">
            {/* Left Arrow Icon */}
            <GrFormPrevious />
          </button>
        </div>

        {/* Seminar Items */}
        <div className="col-span-10 grid grid-cols-3 gap-8">
          {seminars.map((seminar, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={seminar.image}
                alt={seminar.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-4 text-center font-medium">{seminar.name}</p>
            </div>
          ))}
        </div>

        {/* Right Navigation (Optional) */}
        <div className="col-span-1 flex items-center justify-center">
          <button className="p-2 rounded-full bg-gray-200">
          <GrFormNext />
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurSeminars;
