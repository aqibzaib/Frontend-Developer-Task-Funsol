import React from "react";
import SearchField from "./SearchField";

const Main = () => {
  return (
    <section className="max-w-[925px] mx-auto">
      <div className="px-6">
        <h2 className="text-[20px] font-[600] md:text-[50px] text-center font-poppins text-[#222222]">
          AI Art Generator
        </h2>
        <div className=" mx-auto mt-[20px] mb-[60px]">
          <p className=" font-poppins text-[10px] md:text-[20px] font-[400] leading-[30p] text-center text-[#666666]">
            Create awe-inspiring masterpieces effortlessly and explore the
            endless possibilities of AI generated art. Enter a prompt, and
            choose a style, AI art generator bring your ideas to life!
          </p>
        </div>
        {/* <div className='bg-red-600 relative'>
        <div className=''>
        <input type="text"  placeholder='Enter Prompt here'/>
        </div>
        <button className='absolute right-0'>Generate</button>
        </div> */}
        <SearchField />
        <div>
          <p
            className="font-poppins text-[40px] font-[600] text-center leading-[60px] mt-[60px] mb-[40px] text-[#222222];
]"
          >
            Inspirations
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
