import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="md:flex-wrap bg-gray-200 mt-auto py-7 px-20 lg:flex">
        <div className="flex-1 flex-col text-[22px]">DeliveryApp</div>

        <div className="flex-1 text-[18px]">
          Links
          <div className="gap-8 flex text-[16px]">
            <Link to="/specialpropositions">Special propositions</Link>
            <Link to="/account">Account</Link>
          </div>
        </div>
        <div className="flex-1 text-[18px]">
          Work hours:
          <br />
         <span className="text-[16px]"> 06:00 - 23:00 </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
