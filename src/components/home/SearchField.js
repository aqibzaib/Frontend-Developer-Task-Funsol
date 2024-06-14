import React from "react";

function SearchField() {
  return (
    <div className="input-border w-full h-[68px]">
      <div className="content">
        <input
          placeholder="Enter Your prompt here"
          className="font-poppins text-base font-normal leading-6 text-left outline-none focus:outline-none text-[#999999] truncate"
        />
        <button className="font-poppins text-[10px] md:text-[20px] font-semibold  leading-[30px] text-left  text-[#FFFFFF] bg-gradient-to-r from-[#E57050] to-[#DB2268]   px-[10px] py-[10px] md:py-[13px] rounded-xl">
          Generate
        </button>
      </div>
    </div>
  );
}

export default SearchField;
