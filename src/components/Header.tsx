import React from "react";
import Logo from "../assets/images/logo.png";
import Call from "../assets/images/call.png";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="logo" className="w-12 h-12" />
          <h1 className="text-teal-600 font-semibold">Glider Consultancy Pvt. Ltd.</h1>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="/" className="hover:text-teal-600">Home</a>
          <a href="/about" className="hover:text-teal-600">About Us</a>
          <a href="/services" className="hover:text-teal-600">Services</a>
          <a href="/gallery" className="hover:text-teal-600">Gallery</a>
          <a href="/faq" className="hover:text-teal-600">FAQ</a>
          <a href="/contact" className="hover:text-teal-600">Contact Us</a>
        </nav>

        {/* Contact and Login Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img src={Call} alt="phone logo" className="w-6 h-6 mr-2" />
            <span>+977-9812345678</span>
          </div>
          <div className="flex">
            <a href="/login" className="text-teal-600 hover:underline">LOGIN</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
