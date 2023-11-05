import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className=" grid gap-5">
      {news.map((item) => (
        <div
          key={item.id}
          className="bg-white  shadow-md rounded-md pb-5  lg:w-[320px] md:w-[500px] w-[300px]"
        >
          <div>
            <img
              src={item.newsImg}
              alt={item.title}
              className="w-full h-auto rounded-t-md"
            />
          </div>

          <div className=" grid mt-3 gap-2   px-4   ">
            <div className="">
              <p className=" font-satoshi text-[#254A2A]">{item.newsText}</p>
            </div>
            <div className="">
              <p className=" text-[14px]">{item.newsDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
