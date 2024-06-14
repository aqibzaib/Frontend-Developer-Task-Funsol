import React from "react";
import img_12 from "../../assets/images/img_12.png";
import img_13 from "../../assets/images/img_13.png";
import img_14 from "../../assets/images/img_14.png";
import img_15 from "../../assets/images/img_15.png";

const SideBar = () => {
  const data = [
    { img: img_12 },
    { img: img_13 },
    { img: img_14 },
    { img: img_15 },
  ];
  return (
    <section className="max-w-[250px] border-[1px] border-[#EEEEEE] border-t-[0px] hidden lg:block">
      <div className="">
        <p className="font-[600] font-poppins text-[#222222] text-[14px] leading-[24px] mb-[12px] mt-[20px] pl-[20px]">
          My Creations
        </p>
        <div className="h-[1px] w-full bg-[#EEEEEE] mb-[16px]"></div>
        <div className="grid grid-cols-2 gap-[10px] px-[16px]">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item?.img}
                  alt="loading"
                  className="w-[104px] h-[130px] object-cover rounded-[10px] "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SideBar;
