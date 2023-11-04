import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FoundBoardcard = ({ board }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="3000"
      className=" lg:px-16 md:px-10 px-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-hidden "
    >
      {board.map((item) => (
        <div key={item.id} className="bg-white shadow-md grid">
          <img
            src={item.boardimage}
            alt={item.name}
            className="w-full h-auto"
          />

          <div className=" grid px-4 pt-5 pb-3">
            <div className=" grid ">
              <h2 className="text-[18px] font-bold font-satoshi">
                {item.name}
              </h2>
            </div>
            <div className=" grid">
              <p className="text-gray-600">{item.boarddescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoundBoardcard;
