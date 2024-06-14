import React, { useState } from "react";
import img_10 from "../../assets/images/img_10.png";
import img_11 from "../../assets/images/img_11.png";

const ModelStyleSelector = () => {
  const items = [
    {
      label: "Model",
      value: "Realistic",
      image: img_10,
    },
    { label: "Style", value: "Disney", image: img_11 },
  ];
  const [clickedItem, setClickedItem] = useState(0);

  return (
    <>
      <div className="flex items-center gap-[5px] mt-[20px] mb-[15px]">
        <p className="text-[16px] font-[500] font-poppins leading-[24px]">
          Models & Styles
        </p>
        <img src="./Images/Info.png" alt="info" className="w-[20px] h-[20px]" />
      </div>
      <div className="flex gap-[12px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between gap-[58px] cursor-pointer pl-[10px] pr-[10px] py-[5px] border-[1px] rounded-[12px] ${
              clickedItem === index
                ? "border-[#FA5711] bg-[#FA57111A]"
                : "border-[#FA57111A] hover:border-[#FA5711] hover:bg-[#FA57111A]"
            }`}
            onClick={() => setClickedItem(index)}
          >
            <div>
              <p
                className={`text-[10px] font-[500] leading-[15px] font-poppins ${
                  clickedItem === index ? "text-[#FA5711]" : "text-[#999999]"
                }`}
              >
                {item.label}
              </p>
              <p className="text-[14px] font-[600] leading-[21px] mt-[5px] font-poppins">
                {item.value}
              </p>
            </div>
            <img
              src={item.image}
              alt={item.label}
              className="w-[40px] h-[40px] rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ModelStyleSelector;
