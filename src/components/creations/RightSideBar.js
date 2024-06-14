import React from "react";
import AspectRatio from "./AspectRatio";
import { ModelAndStyle } from "./ModelAndStyle";

const RightSideBar = () => {
  return (
    <section className="w-full  md:max-w-[400px] pl-[6px] pr-[10px] lg:p-6 border-[1px] border-[#EEEEEE] border-t-[0px] pt-[30px]">
      <form>
        <div className="mb-4">
          <div class="input-border-text">
            <div class="content-text">
              <textarea
                id="message"
                name="message"
                class="custom-border"
                placeholder="Enter your message"
                className="block w-[352px] h-[120px] px-3 py-2 border border-gray-300 shadow-sm focus:outline-none rounded-lg focus:ring-none focus:border-none sm:text-sm custom-border"
                style={{ resize: "none" }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
      <div className="font-poppins flex items-center justify-center gap-[8px]">
        <p className="text-[12px] leading-[18px] font-[500] text-[#FA5711]  ">
          Additional settings
        </p>
        <img
          src="./Images/navigate_next.png"
          alt="loading"
          className="w-[5px] h-[5px]"
        />
      </div>
      <div className="h-[1px] w-full font-poppins text-[#222222] bg-[#EEEEEE] mt-[15px] mb-[20px]"></div>
      <div className="flex gap-[5px]">
        <p className="text-[16px] font-[500]">Aspect Ratio</p>
        <img
          src="./Images/Info.png"
          alt="loaing"
          className="w-[20px] h-[20px] mt-[4px]"
        />
      </div>
      <AspectRatio />
      <ModelAndStyle />
    </section>
  );
};

export default RightSideBar;
