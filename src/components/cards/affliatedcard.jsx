import React from "react";

const AffliatedCard = ({ affliated }) => {
  return (
    <div className=" lg:px-16 md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {affliated.map((item) => (
        <div className="grid justify-center items-center gap-5">
          <div
            key={item.id}
            className="bg-white shadow-lg justify-center items-center rounded-3xl grid w-[200px] h-[200px]"
          >
            <img
              src={item.affliatedimage}
              alt={item.title}
              className="w-[50px] h-[36px] rounded-t-3xl "
            />
          </div>
          <div className=" grid justify-center items-center">
            <p className=" text-center w-[176px]">
              {item.affliateddescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AffliatedCard;
