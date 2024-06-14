import React from "react";
import SideBar from "../components/creations/SideBar";
import RightSideBar from "../components/creations/RightSideBar";
import CreationMain from "../components/creations/CreationMain";
import Header from "../components/creations/Header";
import Footer from "../components/footer/Footer";

const CreationsPage = () => {
  return (
    <div>
      <Header />
   <div className="flex justify-between gap-[0px]">
   <SideBar />
      <CreationMain />
      <RightSideBar />
   </div>
   <div className="block md:hidden">
   <Footer />
   </div>
    </div>
  );
};

export default CreationsPage;
