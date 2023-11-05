import React from "react";

const LatestProgramsCard = ({ latestPrograms }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-hidden ">
      {latestPrograms.map((item) => (
        <div key={item.id} className="bg-white shadow-md grid">
          <img
            src={item.programsImg}
            alt={item.name}
            className="w-full h-auto"
          />

          <div className=" grid px-4 pt-5 pb-3">
            <div className=" grid ">
              <h2 className="text-[18px] font-bold font-satoshi">
                {item.programsName}
              </h2>
            </div>
            <div className=" grid">
              <p className="text-gray-600">{item.programsDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestProgramsCard;
