import React from "react";

const ActivitiesCard = ({ activities }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 md:gap-10 gap-10">
      {activities.map((item) => (
        <div
          key={item.id}
          className=" bg-white shadow-lg rounded-md w-[269.57px] grid justify-center items-center py-10"
        >
          <div className="grid justify-center items-center">
            <img
              className="w-[50px] h-[50px]"
              src={item.activitiesImg}
              alt={item.name}
            />
          </div>

          <p className="w-[185px] text-center">{item.activitiesText}</p>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesCard;
