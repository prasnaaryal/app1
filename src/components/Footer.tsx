import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-center md:text-left">
          
          <div className="flex mb-4 justify-center">
            <h2 className="text-teal-600 font-semibold">Glider Healthcare Pvt.Ltd.</h2>
            <p className="flex items-center mt-2 text-gray-700">
              <FaMapMarkerAlt className="mr-2" /> New-baneshwor, Kathmandu, Nepal
            </p>
            <p className="flex items-center mt-2 text-gray-700">
              <FaEnvelope className="mr-2" /> info@gliderhealthcare.com
            </p>
            <p className="flex items-center mt-2 text-gray-700">
              <FaPhoneAlt className="mr-2" /> +977 01 1234567
            </p>
          </div>

          
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">Follow Us On:</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Footer Bottom */}
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <p>Copyright © gliderhealthcare | Developed by Brainztechs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
