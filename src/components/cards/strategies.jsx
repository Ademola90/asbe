import React from "react";

const Strategies = ({ data }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-3xl grid lg:w-[300px] md:w-[500px] w-[300px]"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto rounded-t-3xl"
          />

          <div className=" grid px-4 pt-5 pb-10 gap-5">
            <div className=" grid justify-center items-center">
              <h2 className="text-[24px] font-bold text-center font-satoshi">
                {item.title}
              </h2>
            </div>
            <div className=" grid justify-center items-center">
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Strategies;
