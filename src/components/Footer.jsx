import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div className=" bg-black text-white flex p-2 m-2 gap-5">
      <ul>
        <h1>
          <LocationOnOutlinedIcon fontSize="large" />{" "}
        </h1>
        <li>Chandrapur</li>
        <li>MAharashtra - 441206</li>
      </ul>{" "}
      <ul>
        <h1>We Deliver To:</h1>
        <li> * Nagpur</li>
        <li> * Chandrapur</li>
        <li> * Pune</li>
        <li> * Mumbai</li>
        <li> * Hydrabad</li>
      </ul>
      <ul>
        <h1>Contact Us:</h1>
        <li>9623916391</li>
      </ul>
      <EmailOutlinedIcon />
      <FacebookOutlinedIcon />
    </div>
  );
};

export default Footer;
