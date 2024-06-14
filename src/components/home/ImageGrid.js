import React from "react";
import img_13 from "../../assets/images/img_13.png";
import img_14 from "../../assets/images/img_14.png";
import img_15 from "../../assets/images/img_15.png";
import img_16 from "../../assets/images/img_16.png";
import img_17 from "../../assets/images/img_17.png";
import img_18 from "../../assets/images/img_18.png";
import img_19 from "../../assets/images/img_19.png";
import img_20 from "../../assets/images/img_20.png";
import img_21 from "../../assets/images/img_21.png";
import img_22 from "../../assets/images/img_22.png";
import img_23 from "../../assets/images/img_23.png";
import img_24 from "../../assets/images/img_24.png";
import img_25 from "../../assets/images/img_25.png";
import img_26 from "../../assets/images/img_26.png";
import Footer from "../footer/Footer";

const data = [
  {
    img: img_13,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_14,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_15,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_16,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_17,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_18,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_19,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_20,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_21,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_22,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_23,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_24,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_25,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_26,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_16,
    tagline: "A painting of a woman with long hairs",
  },
  {
    img: img_17,
    tagline: "A painting of a woman with long hairs",
  },
];

function ImageGrid() {
  return (
    <div className="h-[500px] overflow-y-auto lg:overflow-hidden lg:h-auto relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center gap-2">
            <img
              src={item.img}
              alt="loading"
              className="w-[250px] h-[280px] object-cover rounded-lg"
            />
            <p className="text-center px-5 font-poppins text-[18px] leading-[27px] font-[400] text-[#222222]">
              {item.tagline}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default ImageGrid;
