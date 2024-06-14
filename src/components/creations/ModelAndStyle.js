import React from "react";
import ModalStyleSelector from "./ModalStyleSelector";
import img_01 from "../../assets/images/img_01.png";
import img_02 from "../../assets/images/img_02.png";
import img_03 from "../../assets/images/img_03.png";
import img_04 from "../../assets/images/img_04.png";
import img_05 from "../../assets/images/img_05.png";
import img_06 from "../../assets/images/img_06.png";
import img_07 from "../../assets/images/img_07.png";
import img_08 from "../../assets/images/img_08.png";
import img_09 from "../../assets/images/img_09.png";
import { Link } from "react-router-dom";

export const ModelAndStyle = () => {
  const myCards = [
    { img: img_01, title: "img" },
    { img: img_02, title: "img" },
    { img: img_03, title: "img" },
    { img: img_04, title: "img" },
    { img: img_05, title: "img" },
    { img: img_06, title: "img" },
    { img: img_07, title: "img" },
    { img: img_08, title: "img" },
    { img: img_09, title: "img" },
    { img: img_09, title: "img" },
  ];

  return (
    <section className="relative">
      <ModalStyleSelector />
      <div className="grid grid-cols-3 gap-[10px] mt-[15px] lg:overflow-none overflow-y-auto h-[270px] lg:h-auto">
        {myCards.map((item, index) => (
          <Link to='/image-details' key={index} className="relative">
            <img
              src={item.img}
              alt="icon"
              className="w-[113px] h-[90px] rounded-[10px] object-cover"
            />
          
          </Link>
        ))}
      </div>
      <div className="absolute lg:static mt-[140px] bottom-0 left-0 right-0">
        <button className="text-white font-poppins py-[15px] px-[137px] text-[18px] font-[600] leading-[27px] bg-gradient-to-r from-[#E57050] to-[#DB2268] rounded-[12px] w-full">
          Generate
        </button>
      </div>
    </section>
  );
};
