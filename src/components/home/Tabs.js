import React, { useState } from "react";

const Tabs = () => {
  // State to manage the selected tab
  const [selectedTab, setSelectedTab] = useState("Realistic");

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <section className="max-w-[1094px] mx-auto hidden md:block">
      <div className="flex justify-between">
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Realistic"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Realistic")}
        >
          Realistic
        </button>
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Science Fiction"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Science Fiction")}
        >
          Science Fiction
        </button>
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Cartoon"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Cartoon")}
        >
          Cartoon
        </button>
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Anime"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Anime")}
        >
          Anime
        </button>
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Oil Painting"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Oil Painting")}
        >
          Oil Painting
        </button>
        <button
          className={`text-[16px] font-poppins  border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
            selectedTab === "Landscape"
              ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
              : "hover:text-[#FFFFFF]"
          }`}
          onClick={() => handleTabClick("Landscape")}
        >
          Landscape
        </button>
      </div>
    </section>
  );
};

export default Tabs;
