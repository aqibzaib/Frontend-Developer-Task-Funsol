import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../../assets/icons";

const NavLinks = ["Text to image", "Image to image", "AI Avatar", "Face Swap"];

const Header = () => {
  const [activeButton, setActiveButton] = useState(NavLinks[0]);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <section className="max-w-full mx-auto pl-6 pr-6 md:pr-[4px] lg:px-6">
        <div className="flex justify-between items-center md:items-start py-[10px] md:py-[22px]">
          <div className="flex flex-row gap-[50px]">
            <Link
              to="/"
              className="font-[400] font-audiowide text-[16px] sm:text-[28px] sm:leading-[35.7px] leading-[20.4px] bg-clip-text text-transparent bg-gradient-to-r from-[#E57050] to-[#DB2268] cursor-pointer"
            >
              ART GENERATOR
            </Link>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-[23px]">
                {NavLinks.map((buttonName) => (
                  <button
                    key={buttonName}
                    className={`text-[16px] font-poppins duration-300 ease-linear font-[500] leading-[27px] px-[29px] pt-[11px] pb-[11px] flex items-center rounded-[5px] cursor-pointer ${
                      activeButton === buttonName
                        ? "text-[#FA5711] bg-[#FA57111A]"
                        : "text-[#999999] bg-[#9999991A] hover:text-[#FA5711] hover:bg-[#FA57111A]"
                    }`}
                    onClick={() => handleClick(buttonName)}
                  >
                    {buttonName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ProfileIcon width="20px" height="20px"/>
        </div>
      </section>
      <div className="bg-[#EEEEEE] h-[1px] w-full"></div>
      <div className="block lg:hidden">
        <div className="flex justify-between pl-[10px] pr-[10px] lg:pl-6 gap-[6px] mt-[16px] md:mt-[20px]">
          {NavLinks.map((buttonName) => (
            <button
              key={buttonName}
              className={`text-[10px] font-poppins duration-300 ease-linear font-[500] leading-[15px] px-[8px] pt-[5px] pb-[5px] flex items-center rounded-[5px] cursor-pointer ${
                activeButton === buttonName
                  ? "text-[#FA5711] bg-[#FA57111A]"
                  : "text-[#999999] bg-[#9999991A] hover:text-[#FA5711] hover:bg-[#FA57111A]"
              }`}
              onClick={() => handleClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
