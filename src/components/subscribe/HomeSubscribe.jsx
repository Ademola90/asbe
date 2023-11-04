import React from "react";

const HomeSubscribe = () => {
  return (
    <div className=" bg-[#F3F7FA] mx-auto">
      <div className="md:px-16 lg:px-28 px-8 py-10 grid justify-center items-center">
        <div className=" grid justify-center gap-20 items-center w-[613px]">
          <div>
            <p className=" text-[40px] font-sansation font-bold text-center">
              Subscribe to Our Newsletter
            </p>
            <p className=" font-Nunito text-center">
              To join the worldwide community
            </p>
          </div>

          <div className=" flex items-center justify-center">
            <input
              placeholder="Enter Your Email"
              className=" lg:w-[613px] md:w-[400px] w-[250px] h-[47px] md:h-[57px] pl-4 lg:pr-44 md:pr-32 pr-[100px] lg:h-[67px] border-none bg-white text-black relative lg:left-[77px] md:left-[50px] left-[35px] rounded-md"
              type="text"
            />
            <button className=" font-satoshi bg-primary text-white lg:w-[150px] md:w-[100px] w-[80px] h-[37px] md:h-[47px] lg:h-[57px] relative lg:right-[80px] md:right-[55px] right-[50px] rounded-md">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSubscribe;
