import React from "react";
import img_12 from "../../assets/images/img_12.png";
import img_13 from "../../assets/images/img_13.png";
import img_14 from "../../assets/images/img_14.png";
import img_15 from "../../assets/images/img_15.png";
import { DeleteIcon } from "../../assets/icons";

const MyCreations = () => {
  const data = [
    { img: img_12 },
    { img: img_13 },
    { img: img_14 },
    { img: img_15 },
  ];

  return (
    <section className="max-w-[250px] border-[1px] border-[#EEEEEE] border-t-0 hidden lg:block">
      <div className="">
        <p className="font-semibold font-poppins text-[#222222] text-[14px] leading-[24px] mb-3 mt-5 pl-5">
          My Creations
        </p>
        <div className="h-[1px] w-full bg-[#EEEEEE] mb-4"></div>
        <div className="grid grid-cols-2 gap-2.5 px-4">
          {data.map((item, index) => (
            <div key={index} className="relative group">
              <img
                src={item?.img}
                alt="loading"
                className="w-[104px] h-[130px] object-cover rounded-[10px]"
              />
              <div className="absolute left-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCreations;
