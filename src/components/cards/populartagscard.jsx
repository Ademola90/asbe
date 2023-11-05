import React from "react";

const PopularTagsCard = ({ popularTags }) => {
  return (
    <div className=" flex flex-wrap gap-3">
      {popularTags.map((item) => (
        <div
          key={item.id}
          className=" bg-[#F8F8F8] h-[34px] w-auto flex justify-center items-center rounded-md cursor-pointer px-1"
        >
          <p className=" font-roboto text-[13px] text-[#797781] font-bold ">
            {item.popularTagsButton}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PopularTagsCard;
