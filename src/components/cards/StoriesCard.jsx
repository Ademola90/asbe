import React from "react";

const StoriesCard = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap lg:gap-2 md:gap-2 gap-5">
      {stories.map((item, index) => (
        <div
          key={item.id}
          className={` shadow-md lg:w-[280px] border p-5 ${
            index === 0
              ? "lg:h-[240px] lg:mt-0"
              : index === 1
              ? "lg:h-[200px] lg:mt-0"
              : index === 2
              ? "lg:h-[270px] lg:mt-0"
              : index === 3
              ? "lg:h-[160px] lg:mt-[-20px]"
              : index === 4
              ? "lg:h-[270px] lg:mt-[-60px]"
              : index === 5
              ? "lg:h-[150px] lg:mt-[10px]"
              : index === 6
              ? "lg:h-[150px] lg:mt-[-60px]"
              : index === 7
              ? "lg:h-[150px] lg:mt-[10px]"
              : index === 8
              ? "lg:h-[180px] lg:mt-[-40px]"
              : index === 9
              ? "lg:h-[650px] lg:mt-36"
              : "lg:h-[200px] lg:mt-4" // Default style for other indices
          }`}
        >
          <div className="grid justify-center items-center">
            <div className="flex items-center">
              <div className="grid">
                <div>
                  <p className="font-[14px] font-satoshi">
                    {item.storiesTitle}
                  </p>
                  <p className="text-primary text-[13px] font-bold">
                    {item.storiesName}
                  </p>
                  <div>
                    <p className="font-satoshi text-[12px]">
                      {item.storiesText1}
                    </p>
                    <p className="font-satoshi text-[12px]">
                      {item.storiesText2}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img className="w-[137px]" src={item.storiesImg} alt="" />
              </div>
            </div>
            <div>
              <p>{item.storiesText3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesCard;
