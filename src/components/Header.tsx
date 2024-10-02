import React from "react";
import Logo from "../assets/images/logo.png";
import Call from "../assets/images/call.png";

const Header = () => {
  return (
    <div className="flex container  ">
      <div className="">
        <img src={Logo} alt="logo" />
      </div>

      <nav className="max-w-7xl w-full p-4 mx-auto">

        <div className="flex space-x-6">
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Gallery</a>
        <a href="/">FAQ</a>
        <a href="/">Contact us</a>
        </div>
       
      </nav>

      <div className="flex">
        <div className="flex">
          <img src={Call} alt="phonelogo" className="pr-4"/>
          +977-9812345678
        </div>

        <div>
          <span>LOGIN</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Header;
