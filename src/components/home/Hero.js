import React from "react";
import SearchField from "./SearchField";

const Main = () => {
  return (
    <section className="max-w-[925px] mx-auto">
      <div className=" px-6">
        <h2 className="text-[20px] font-[600] md:text-[50px] text-center font-poppins text-[#222222]">
          AI Art Generator
        </h2>
        <div className=" mx-auto mt-[4px] md:mt-[20px] mb-[25px] md:mb-[60px] ">
          <p className=" font-poppins text-[10px] md:text-[20px] font-[400]  leading-[15px] md:leading-[30px] text-center text-[#666666]">
            Create awe-inspiring masterpieces effortlessly and explore the
            endless possibilities of AI generated art. Enter a prompt, and
            choose a style, AI art generator bring your ideas to life!
          </p>
        </div>
        <SearchField />
        <div>
          <p className=" font-poppins text-[20px] md:text-[40px] font-[600] text-center leading-[30px] md:leading-[60px] mt-[24px] mb-[16px] md:mt-[60px] md:mb-[40px] text-[#222222]">
            Inspirations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
