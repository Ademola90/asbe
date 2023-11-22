import React from "react";
import Footer from "../../components/Footer";

const loginPage = () => {
  return (
    <div className=" mx-auto overflow-x-hidden ">
      <div className="px-8 md:px-10 lg:px-16 mt-28 lg:flex md:flex grid justify-center overflow-x-hidden">
        <div className=" lg:w-1/2 md:w-1/2 w-full">
          <p className=" text-[64px] font-bold font-satoshi">SIGN IN</p>

          <div className="grid gap-5 my-5">
            <div className=" space-y-3">
              <label className="text-[32px] font-satoshi" htmlFor="">
                Email Address
              </label>
              <input
                className=" w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                type="email"
              />
            </div>

            <div className=" space-y-3">
              <label className="text-[32px] font-satoshi" htmlFor="">
                Phone Number
              </label>
              <input
                className=" w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                type="number"
              />
            </div>
          </div>
          <div>
            {/* create account button */}
            <div className=" grid gap-3 my-10 justify-center items-center">
              <button className=" bg-[#0365F8] w-[300px] h-[55px] rounded-md text-white font-satoshi">
                SIGN IN
              </button>
              <p className=" text-center font-satoshi text-[#0365F8] underline text-[16px] cursor-pointer">
                Sign Up
              </p>
            </div>
            <p className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#0365F8]"
              />
              <p className="text-[#4F4F4F] text-[14px] lg:w-[400px] font-satoshi">
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and default Notification Settings
              </p>
            </p>
          </div>
        </div>
        <div className=" lg:w-1/2 md:w-1/2 grid">
          <img src={require("../../assets/Group 21.png")} alt="" />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default loginPage;
