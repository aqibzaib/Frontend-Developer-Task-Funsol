import React from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../../assets/icons";

const Header = () => {
  return (
    <>
      <section className="max-w-full mx-auto pl-6 pr-[4px] lg:px-6">
        <div className="flex justify-between  py-[22px]  ">
          <div className="flex flex-row gap-[50px]">
            <Link
              to="/"
              className="font-[400] font-audiowide text-[16px] sm:text-[28px] sm:leading-[35.7px] leading-[20.4px] bg-clip-text text-transparent bg-gradient-to-r from-[#E57050] to-[#DB2268] cursor-pointer"
            >
              ART GENERATOR
            </Link>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-[23px]">
                <button className="text-[16px] font-poppins font-poppins   duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
                  Text to image
                </button>
                <button className="text-[16px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
                  Image to image
                </button>
                <button className="text-[16px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
                  AI Avatar
                </button>
                <button className="text-[16px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
                  Face Swap
                </button>
              </div>
            </div>
          </div>

          <ProfileIcon />
        </div>
      </section>
      <div className="bg-[#EEEEEE] h-[1px] w-full"></div>
      <div className="block lg:hidden">
        <div className="flex justify-between pl-[10px] pr-[10px] lg:pl-6  gap-[6px]  mt-[20px]">
          <button className="text-[10px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[15px] px-[8px] pt-[5px] pb-[5px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
            Text to image
          </button>
          <button className="text-[10px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[15px] px-[8px] pt-[5px] pb-[5px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
            Image to image
          </button>
          <button className="text-[10px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[15px] px-[8px] pt-[5px] pb-[5px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
            AI Avatar
          </button>
          <button className="text-[10px] font-poppins  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[15px] px-[8px] pt-[5px] pb-[5px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
            Face Swap
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
