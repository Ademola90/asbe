import React from "react";

const LatestEvent = ({ events }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5  ">
      {events.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-md lg:flex md:grid grid p-10 gap-5 "
        >
          <div className="flex justify-center items-center">
            {" "}
            <img
              src={item.eventsimage}
              alt={item.name}
              className=" w-[120px] h-[120px]"
            />
          </div>
          <div className=" grid items-center">
            <div>
              <h2 className="text-[18px] font-bold font-satoshi text-[#0E1133]">
                {item.texts}
              </h2>
              <h2 className="text-[18px] font-bold font-satoshi text-[#0E1133]">
                {item.sectexts}
              </h2>

              <p className=" text-[#0E1133]">{item.eventsdescription}</p>
            </div>
            <div className=" flex items-center gap-2 lg:mt-0 md:mt-5 mt-5">
              <img
                className=" w-[14.2px] h-[14px]"
                src={item.clockimg}
                alt=""
              />
              <p className=" text-[#0E1133]">{item.eventsdate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestEvent;
