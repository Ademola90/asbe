import React from "react";
import EventEroimg from "../../assets/EvenHerotimg.png";

const Events = () => {
  return (
    <div className=" mt-24 mx-auto overflow-x-hidden">
      <div
        className=" bg-no-repeat bg-cover bg-center h-screen grid items-center"
        style={{
          backgroundImage: `url(${EventEroimg})`,
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

      {/* UPCOMING EVENTS/PROGRAMS */}
    </div>
  );
};

export default Events;
