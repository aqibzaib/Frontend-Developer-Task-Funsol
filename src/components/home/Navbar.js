import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "../../assets/icons";
const Navbar = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex justify-between py-[22px] lg:py-[22px] px-6 lg:px-[120px]">
        <div className="flex flex-row  md:[30px] lg:gap-[50px] ">
          <p className="font-audiowide font-[400] text-[16px] md:text-[28px] leading-[35.7px] bg-clip-text text-transparent bg-gradient-to-r from-[#E57050] to-[#DB2268] cursor-pointer">
            ART GENERATOR
          </p>
          <div className="hidden md:block">
            <ul className="flex justify-between gap-10px] lg:gap-[40px]">
              <Link
                to="/text-to-image"
                className="font-poppins text-[16px] text-[#222222] font-[400] leading-[28px] flex items-center justify-center"
              >
                Photo Editing Tools
                <ArrowDownIcon />
              </Link>
              <Link
                to="/image-to-image"
                className=" font-poppins text-[16px] text-[#222222] font-[400] leading-[28px] flex items-center justify-center"
              >
                AI Tools
                <ArrowDownIcon />
              </Link>
              <li className="font-poppins text-[16px] text-[#222222] font-[400] leading-[28px] flex items-center justify-center gap-1">
                Support
                <ArrowDownIcon />
              </li>
            </ul>
          </div>
        </div>
        <button className=" font-poppins hidden md:block text-[16px] font-[500] text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] bg-gradient-to-r from-[#E57050] to-[#DB2268]  rounded-[12px] cursor-pointer">
          Sign In
        </button>
        <img
          src="./Images/man.png"
          alt="loading..."
          className="block md:hidden w-[20px] h-[20px] mt-[8px]"
        />
      </div>
    </section>
  );
};

export default Navbar;
