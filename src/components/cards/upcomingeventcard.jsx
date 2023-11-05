import React from "react";

const UpcomingEventCard = ({ upcoming }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 ">
      {upcoming.map((item) => (
        <div
          key={item.id}
          className="bg-white  shadow-md rounded-md  lg:w-[320px] md:w-[500px] w-[300px]"
        >
          <div>
            <img
              src={item.eventImage}
              alt={item.title}
              className="w-full h-auto rounded-t-md"
            />
          </div>

          <div className=" grid mt-5 gap-5   px-4   ">
            <div className="">
              <div className="flex items-center gap-5">
                <img
                  className=" w-[14.2px] h-[14px]"
                  src={item.timeImg}
                  alt=""
                />
                <p>{item.date}</p>
              </div>
              <div>
                <p className=" font-satoshi font-bold ">{item.eventTitle}</p>
              </div>
            </div>
            <div className="">
              <p className="font-satoshi ">{item.venue}</p>
              <p className=" text-primary cursor-pointer">{item.link}</p>
              <button className=" w-[187px] h-[21px] cursor-pointer text-primary justify-start grid items-center font-satoshi font-bold ">
                {item.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEventCard;
