import React from "react";
import TestIImg from "../../assets/TestIImg.png";

const Testimonials = () => {
  return (
    <div className=" mt-24 mx-auto overflow-x-hidden">
      <div
        className=" bg-no-repeat bg-cover bg-center h-screen grid items-center"
        style={{
          backgroundImage: `url(${TestIImg})`,
        }}
      >
        <div className=" grid items-center text-white gap-10 lg:px-16 md:px-10 px-5">
          <p className=" lg:text-[64px] md:text-[84px] text-[50px] font-bold font-satoshi lg:w-[600px] md:w-[600px] ">
            ASBE GLOBAL INNOVATIONS{" "}
          </p>
          <p className="lg:w-[500px] text-[24px]">
            Technology and skills developers across higher institution of
            learning in Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
