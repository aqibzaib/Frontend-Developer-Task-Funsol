import React, { useState } from "react";
import { FacebookIcon, InstaIcon } from "../../assets/icons";

const AspectRatio = () => {
  const [clickedIndex, setClickedIndex] = useState(0);

  const data = [
    {
      ratio: "1:1",
      Icon: <InstaIcon color={clickedIndex === 0 ? "#FA5711" : "#222222"} />,
      altText: "Ratio Img",
      label: "Square",
    },
    {
      ratio: "2:3",
      Icon: <InstaIcon color={clickedIndex === 1 ? "#FA5711" : "#222222"} />,
      altText: "Ratio Img",
      label: "Portrait",
    },
    {
      ratio: "3:2",
      Icon: <FacebookIcon color={clickedIndex === 2 ? "#FA5711" : "#222222"} />,
      altText: "Ratio Img",
      label: "Post",
    },
    {
      ratio: "3:4",
      Icon: <InstaIcon color={clickedIndex === 3 ? "#FA5711" : "#222222"} />,
      altText: "Ratio Img",
      label: "Reel",
    },
    {
      ratio: "4:3",
      Icon: <InstaIcon color={clickedIndex === 4 ? "#FA5711" : "#222222"} />,
      altText: "Ratio Img",
      label: "Cover",
    },
  ];

  return (
    <section>
      <div className="flex justify-between mt-[15px] gap-[15px]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              clickedIndex === index ? "text-[#FA5711]" : "text-[#222222]"
            }`}
            onClick={() => setClickedIndex(index)}
          >
            <div
              className={`flex flex-row-reverse items-center justify-center gap-[15px] rounded-[6px] border-[1px] ${
                clickedIndex === index ? "border-[#FA5711] bg-[#FA57111A]" : ""
              } p-[6px]`}
            >
              <p
                className={`text-[10px] font-[500] font-poppins px-[2px] ${
                  clickedIndex === index ? "text-[#FA5711]" : "text-[#222222] "
                }`}
              >
                {item.ratio}
              </p>
              {item.Icon}
            </div>
            <p className="test-[#FA5711] text-[10px] leading-[15px] font-[400] text-center pt-[8px] font-poppins">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-[#EEEEEE] my-[20px]"></div>
    </section>
  );
};

export default AspectRatio;
