import React from "react";

const AboutStrategiesCard = ({ aboutStrategies }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-10 gap-5 overflow-x-hidden ">
      {aboutStrategies.map((item) => (
        <div key={item.id} className=" w-[261px] grid">
          <img src={item.icon} alt={item.name} className="w-[50px] h-[50px]" />

          <div className=" grid px-4 pt-5 pb-3">
            <div className=" grid ">
              <h2 className="text-[18px] font-bold font-satoshi">
                {item.education}
              </h2>
            </div>
            <div className=" grid">
              <p className="text-gray-600">{item.descriptions}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutStrategiesCard;
