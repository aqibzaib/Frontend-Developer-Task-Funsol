import React, { useState } from "react";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("Realistic");
  const tabs = [
    "Realistic",
    "Science Fiction",
    "Cartoon",
    "Anime",
    "Oil Painting",
    "Landscape",
  ];

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <section className=" max-w-[1094px]  mx-auto hidden md:block">
      <div className="tabs flex justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tabsButton text-[16px] font-poppins border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] leading-[27px] px-[30px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer ${
              selectedTab === tab
                ? "text-white bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white"
                : "hover:text-[#FFFFFF]"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
