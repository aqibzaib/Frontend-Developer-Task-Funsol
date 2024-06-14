import React, { useState } from "react";
import Header from "../creations/Header";
import BackArrowAvg from "../../assets/images/img_27.png";

import myImage from "../../assets/images/image_details.png";

import { LeftIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const ResultPage = () => {
  const [isShareClicked, setIsShareClicked] = useState(false);
  const [isDownloadClicked, setIsDownloadClicked] = useState(false);

  const handleShareClick = () => {
    setIsShareClicked(true);
    setIsDownloadClicked(false); // Reset the other button state
  };

  const handleDownloadClick = () => {
    setIsDownloadClicked(true);
    setIsShareClicked(false); // Reset the other button state
  };

  return (
    <section className="max-w-[375px] mx-auto">
      <div className="flex justify-between px-[16px] py-[10px]">
        <p className="font-audiowide font-[400] text-[16px] leading-[35.7px] bg-clip-text text-transparent bg-gradient-to-r from-[#E57050] to-[#DB2268] cursor-pointer">
          ART GENERATOR
        </p>
        <img
          src="./Images/man.png"
          alt="loading..."
          className=" w-[20px] h-[20px] mt-[10px]"
        />
      </div>
      <div className="h-[1px] w-full bg-[#EEEEEE]"></div>
      <div className="px-[20px]">
        <Link
          to="/text-to-image"
          className="flex items-center mt-[17px]  gap-[14px]"
        >
          <LeftIcon />
          <p className="text-[12px] font-[500] leading-[18px]">Result</p>
        </Link>
        <img
          src={myImage}
          alt="loading..."
          className="w-[335px] h-[335px] mt-[17px]"
        />
        <p className="text-[10px] font-[600] leading-[20px] text-[#666666] mt-[20px] mb-[10px] font-urbanist">
          Prompt
        </p>
        <p className="font-poppins border-[#FA57111A] border-[1px] p-[10px] rounded-[10px] text-[12px] font-[400] leading-[20px]">
          A painting of a woman with long hair, by Mandy Jurgens, charlie
          bowater at art style, charlie bowater rich deep colors, trending in
          art station
        </p>
        <div className="flex gap-[15px] mt-[150px]">
          <button
            className={`border-[1px] border-[#FA5711] rounded-[10px] px-[56px] py-[10px] text-[16px] font-[500] duration-300 leading-[24px] ease-linear ${
              isShareClicked
                ? "bg-gradient-to-r from-[#E57050] to-[#DB2268] text-white"
                : "text-[#FA5711]"
            }`}
            onClick={handleShareClick}
          >
            Share
          </button>
          <button
            className={`border-[1px] border-[#FA5711] rounded-[10px] leading-[24px] px-[56px] py-[10px] text-[16px] font-[500] duration-300 ease-linear ${
              isDownloadClicked
                ? "bg-gradient-to-r from-[#E57050] to-[#DB2268] text-white"
                : "text-[#FA5711]"
            }`}
            onClick={handleDownloadClick}
          >
            Download
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
