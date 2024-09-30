import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 lg:px-0">
        <div className="mb-6 lg:mb-0 lg:w-1/4">
          <h1 className="text-lg font-bold mb-2 flex items-center">
            <LocationOnOutlinedIcon fontSize="small" className="mr-2" />
            Our Location
          </h1>
          <ul className="text-gray-400">
            <li className="ml-6">Chandrapur</li>
            <li className="ml-6">Maharashtra - 441206</li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0 lg:w-1/4">
          <h1 className="text-lg font-bold mb-2">We Deliver To:</h1>
          <ul className="text-gray-400 space-y-2">
            <li>• Nagpur</li>
            <li>• Chandrapur</li>
            <li>• Pune</li>
            <li>• Mumbai</li>
            <li>• Hyderabad</li>
          </ul>
        </div>

        <div className="mb-6 lg:mb-0 lg:w-1/4">
          <h1 className="text-lg font-bold mb-2">Contact Us:</h1>
          <ul className="text-gray-400">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              9623916391
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              ptalmale9623@gmail.com
            </li>
          </ul>
        </div>

        <div className="lg:w-1/4 flex flex-col items-start">
          <h1 className="text-lg font-bold mb-4">Social Links</h1>
          <div className="flex space-x-6">
            <a
              href="mailto:ptalmale9623@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <EmailOutlinedIcon fontSize="large" />
            </a>

            <a
              href="https://github.com/PralhadTech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <GitHub fontSize="large" />
            </a>

            <a
              href="https://www.linkedin.com/in/pralhad-talmale-b32109145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <LinkedIn fontSize="large" />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FacebookOutlinedIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-500 text-sm">
        © 2024 Pralhad Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
