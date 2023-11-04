import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#E2F5FF] text-black font-Satoshi">
      <div className="md:px-16 lg:px-28 px-8 py-10">
        <div className=" lg:flex md:grid grid justify-between">
          <div className=" grid gap-3 ">
            <div className="  font-semibold flex items-center">
              <p className=" font-bold text-[24px] font-roboto pt-2">ASBE is</p>
            </div>
            <div className=" w-[250px]">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ligula id facilisi sed
                aliquam dolor.{" "}
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <img
                className=" w-[32px] h-[32px]"
                src={require("../assets/Facebook.png")}
                alt=""
              />
              <img
                className=" w-[32px] h-[32px]"
                src={require("../assets/X.png")}
                alt=""
              />
              <img
                className=" w-[32px] h-[32px]"
                src={require("../assets/Printrest.png")}
                alt=""
              />
              <img
                className=" w-[32px] h-[32px]"
                src={require("../assets/Linkedin.png")}
                alt=""
              />
            </div>
          </div>

          <ul className="grid lg:mt-0 md:mt-10 mt-10 font-roboto">
            <p className=" text-[16px] font-bold">ASBE</p>
            <li className=" text[16px]">About Us</li>
            <li className=" text[16px]">Event</li>
            <li className=" text[16px]">Testimonials</li>
            <li className=" text[16px]">Blogs</li>
          </ul>
          <ul className="grid">
            <p className=" text-[16px] font-bold">Support</p>
            <li className=" text[16px]">Careers</li>
            <li className=" text[16px]">Resources</li>
            <li className=" text[16px]">Faqs</li>
            <li className=" text[16px]">Privacy Policy</li>
            <li className=" text[16px]">Careers</li>
          </ul>
          <ul className="grid">
            <p className=" text-[16px] font-bold">Get In Touch</p>
            <li className=" text[16px] flex items-center gap-3">
              <img
                className=" w-[16.2px] h-[16px]"
                src={require("../assets/Inbox.png")}
                alt=""
              />
              <p>gmailadree@gmail.com</p>
            </li>
            <li className=" text[16px]">+234 810 111 2222</li>
            <li className=" text[16px] w-[200px]">
              Adreess address adress address adress adressadress adress
            </li>
          </ul>
        </div>
        <div className=" mt-5">
          <hr />
        </div>
        <div className="  grid justify-between items-center mt-5">
          <div>
            <p className=" text-[i6px]">
              Copyright © 2023 ASBE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
