import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2 flex items-center">
            <LocationOnOutlinedIcon fontSize="small" className="mr-1" />
            Our Location
          </h1>
          <ul className="text-gray-400">
            <li className="ml-2">Chandrapur</li>
            <li className="ml-2">Maharashtra - 441206</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2">We Deliver To:</h1>
          <ul className="text-gray-400">
            <li>• Nagpur</li>
            <li>• Chandrapur</li>
            <li>• Pune</li>
            <li>• Mumbai</li>
            <li>• Hyderabad</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2">Contact Us:</h1>
          <ul className="text-gray-400">
            <li className=" hover:text-white transition duration-300">
              9623916391
            </li>
            <li className=" hover:text-white transition duration-300">
              ptalmale9623@gmail.com
            </li>
          </ul>
        </div>

        <div className="flex space-x-6 mt-6">
          <a
            href="mailto:ptalmale9623@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <EmailOutlinedIcon fontSize="large" />
          </a>

          <a
            href="https://github.com/PralhadTech"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <GitHub fontSize="large" />
          </a>

          <a
            href="https://www.linkedin.com/in/pralhad-talmale-b32109145/"
            className="text-gray-400 hover:text-white transition duration-300"
            target="_blank"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FacebookOutlinedIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
