import React from "react";
import ImageGrid from "./ImageGrid";
import ImageGridMobile from "./ImageGridMobile";
import { ArrowUpIcon } from "../../assets/icons";

const Cards = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="max-w-[1440px] mx-auto mt-[0px] md:mt-[52px] px-6 lg:px-[120px] relative ">
      <div
        className="md:flex justify-end cursor-pointer absolute right-[60px] bottom-[-35px] hidden "
        onClick={handleScrollToTop}
      >
        <ArrowUpIcon />
      </div>
      <div className="hidden md:block">
        <ImageGrid />
      </div>
      <div className="block md:hidden">
        <ImageGridMobile />
      </div>
    </section>
  );
};

export default Cards;
