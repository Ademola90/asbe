import React from "react";

const StoriesCard = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap lg:gap-2 md:gap-2 gap-5">
      {stories.map((item, index) => (
        <div
          key={item.id}
          className={` shadow-md lg:w-[280px] border p-5 ${
            index === 0
              ? "lg:h-[400px] lg:mt-0"
              : index === 1
              ? "lg:h-[250px] lg:mt-0"
              : index === 2
              ? "lg:h-[380px] lg:mt-0"
              : index === 3
              ? "lg:h-[190px] lg:mt-[10px]"
              : index === 4
              ? "lg:h-[430px] lg:mt-[-140px]"
              : index === 5
              ? "lg:h-[240px] lg:mt-[-10px]"
              : index === 6
              ? "lg:h-[210px] lg:mt-[-80px]"
              : index === 7
              ? "lg:h-[360px] lg:mt-[10px]"
              : index === 8
              ? "lg:h-[280px] lg:mt-[-40px]"
              : index === 9
              ? "lg:h-[650px] lg:mt-36"
              : "lg:h-[200px] lg:mt-4" // Default style for other indices
          }`}
        >
          <div className="grid justify-center items-center">
            <div className="flex items-center">
              <div className="grid w-3/5">
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
                    <span className="font-satoshi text-[12px]">
                      {item.storiesText2}
                    </span>
                  </div>
                </div>
              </div>
              <span className=" w-2/5">
                <img
                  className="w-[137px] relative"
                  src={item.storiesImg}
                  alt=""
                />
              </span>
            </div>
            <div className=" ">
              <p>{item.storiesText3}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoriesCard;
