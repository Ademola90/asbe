import React from "react";

const MoreEvents = ({ moreEvents }) => {
  return (
    <div className="mt-5 grid gap-10">
      {moreEvents.map((item) => (
        <div
          key={item.id}
          className="grid gap-3 bg-[#F2F2F2] py-2 px-5 rounded-md"
        >
          <div className=" flex items-center justify-between">
            <p>{item.moreEventsTitle}</p>
            <p>{item.moreEventsDate}</p>
          </div>
          <div>
            <p>{item.moreEventsText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreEvents;
