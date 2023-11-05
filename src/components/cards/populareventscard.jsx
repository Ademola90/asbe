import React from "react";

const PopularEventsCard = ({ popularEvents }) => {
  return (
    <div className="  grid gap-5">
      {popularEvents.map((item) => (
        <div key={item.id} className="flex items-center justify-center gap-5">
          <img
            className=" w-[70px] h-[70px]"
            src={item.popularEventsImg}
            alt=""
          />
          <div className="grid gap-5 ">
            <p className=" text-[#2C234D] text-[15px] font-roboto font-bold">
              {item.popularEventsText}
            </p>
            <p className=" text-[#7E7C87] text-[13px] font-roboto">
              {item.popularEventsDate}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularEventsCard;
