import React, { useState } from "react";
import { CartIcon, CreationIcon, HomeIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const Footer = ({creationPage}) => {
  const [activeTab, setActiveTab] = useState(`${creationPage ?"create":"home"}`);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="footer max-w-[365px] mx-auto shadow-[#00000014] mt-[14px]">

      <div className=" flex justify-around pb-[7px] pt-[4px]">
        <Link
          to="/"
          className={`group cursor-pointer flex flex-col items-center ${
            activeTab === "home" ? "text-[#FA5711]" : ""
          }`}
          onClick={() => handleTabClick("home")}
        >
          <HomeIcon />
          <p className="text-[10px] font-[500]">Home</p>
        </Link>

        <Link
          to="/text-to-image"
          className={`group cursor-pointer flex flex-col items-center ${
            activeTab === "create" ? "text-[#FA5711]" : ""
          }`}
          onClick={() => handleTabClick("create")}
        >
          <CartIcon />
          <p className="text-[10px] font-[500]">Create</p>
        </Link>

        <div
          className={`group cursor-pointer flex flex-col items-center ${
            activeTab === "myCreations" ? "text-[#FA5711]" : ""
          }`}
          onClick={() => handleTabClick("myCreations")}
        >
          <CreationIcon />
          <p className="text-[10px] font-[500]">My Creations</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
