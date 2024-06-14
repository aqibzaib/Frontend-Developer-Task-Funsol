import React from "react";
import img_13 from "../../assets/images/img_27.png";
import img_14 from "../../assets/images/img_28.png";
import img_15 from "../../assets/images/img_29.png";
import img_16 from "../../assets/images/img_30.png";
import img_17 from "../../assets/images/img_31.png";
import img_18 from "../../assets/images/img_32.png";
import img_19 from "../../assets/images/img_33.png";
import Footer from "../footer/Footer";

const data = [
  [
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
  ],
  [
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
  ],
  [
    {
      img: img_19,
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: img_13,
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: img_14,
      tagline: "A painting of a woman with long hairs",
    },
  ],
  [
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
  ],
];

const ImageGridItem = ({ items, isEven }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4 relative">
      <div
        className={`relative ${
          isEven ? "col-span-1 row-span-2 h-[220px]" : "h-[105px]"
        }`}
      >
        <img
          src={items[0].img}
          alt={items[0].tagline}
          className="w-full h-full rounded-lg object-cover"
        />

        <p className="absolute inset-0 flex items-center justify-center text-white text-center   text-[10px] leading-[15px] font-[400] font-poppins">
          {items[0].tagline}
        </p>
      </div>
      <div
        className={`relative ${
          !isEven ? "col-span-1 row-span-2 h-[220px]" : "h-[105px]"
        }`}
      >
        <img
          src={items[1].img}
          alt={items[1].tagline}
          className="w-full h-full rounded-lg object-cover"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white text-center   text-[10px] leading-[15px] font-[400] font-poppins">
          {items[0].tagline}
        </p>
      </div>
      <div className="h-[105px] relative">
        <img
          src={items[2].img}
          alt={items[2].tagline}
          className="w-full h-full rounded-lg object-cover"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white text-center  text-[10px] leading-[15px] font-[400] font-poppins">
          {items[2].tagline}
        </p>
      </div>
    </div>
  );
};

const ImageGridMobile = () => {
  return (
    <div className="relative">
      <div className="p-4 h-[700px] overflow-y-auto">
        {data.map((items, index) => (
          <ImageGridItem key={index} items={items} isEven={index % 2 === 0} />
        ))}
      </div>
      <div className="abolute bottom-[40px] ">
        <Footer />
      </div>
    </div>
  );
};

export default ImageGridMobile;
