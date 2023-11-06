import React, { useEffect } from "react";
import Herobg from "../../assets/Herobg.png";
import Strategies from "../../components/cards/strategies";
import Stratimg1 from "../../assets/Stratimg1.png";
import Stratimg2 from "../../assets/Stratimg2.png";
import Stratimg3 from "../../assets/Stratimg3.png";
import FoundBoardcard from "../../components/cards/foundboardcard";
import Rectangle1 from "../../assets/Rectangle1.png";
import Rectangle2 from "../../assets/Rectangle2.png";
import Rectangle3 from "../../assets/Rectangle3.png";
import Rectangle4 from "../../assets/Rectangle4.png";
import LatestEvent from "../../components/cards/latestevent";
import Eventimg from "../../assets/Eventimg.png";
import Clockimg from "../../assets/Clockimg.png";
import AffliatedCard from "../../components/cards/affliatedcard";
import Companyimg from "../../assets/Companyimg.png";
import Footer from "../../components/Footer";
import HomeSubscribe from "../../components/subscribe/HomeSubscribe";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // strategies.jsx
  const data = [
    {
      id: 1,
      image: Stratimg1,
      title: "VIRTUAL EDUCATION",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus sagittis odio in volutpat ultrices aenean natoque gravida. Fringilla metus sit.",
    },
    {
      id: 2,
      image: Stratimg2,
      title: "Entrepreneurs motivation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus sagittis odio in volutpat ultrices aenetus sit.",
    },
    {
      id: 3,
      image: Stratimg3,
      title: "Implementation of Mentoring",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tellus sagittis odio in volutpat ultrices aenetus sit.",
    },
  ];

  //   foundboardcard.jsx

  const board = [
    {
      id: 1,
      boardimage: Rectangle1,
      name: "Prof. Dapo Adeoye, ",
      boarddescription: "University of Ilorin, Nigeria",
    },
    {
      id: 2,
      boardimage: Rectangle2,
      name: "Dr. Irene Brew- Riverson",
      boarddescription: "University of Wesminster, UK",
    },
    {
      id: 3,
      boardimage: Rectangle3,
      name: "Dr. Faith Mlotsha Mongomezule",
      boarddescription: "Southern Africa Nazarene University, Eswatini",
    },
    {
      id: 4,
      boardimage: Rectangle4,
      name: "Mr. Bongani Dwande",
      boarddescription: "Southern Africa Nazarene University, Eswatini",
    },
  ];

  //   latestevent.jsx

  const events = [
    {
      id: 1,
      eventsimage: Eventimg,
      texts: "How to Improve Your Skills ",
      sectexts: "Through Continuous Learning",
      clockimg: Clockimg,
      eventsdate: "01 Nov, 2023",
    },
    {
      id: 2,
      eventsimage: Eventimg,
      texts: "Prof. Dapo Adeoye, ",
      eventsdescription: "Annual Symposium on Online Education",
      clockimg: Clockimg,
      eventsdate: "01 Nov, 2023",
    },
    {
      id: 3,
      eventsimage: Eventimg,
      texts: "Prof. Dapo Adeoye, ",
      eventsdescription: "Annual Symposium on Online Education",
      clockimg: Clockimg,
      eventsdate: "01 Nov, 2023",
    },
    {
      id: 4,
      eventsimage: Eventimg,
      texts: "Prof. Dapo Adeoye, ",
      eventsdescription: "Annual Symposium on Online Education",
      clockimg: Clockimg,
      eventsdate: "01 Nov, 2023",
    },
  ];

  //   affliatedcard.jsx

  const affliated = [
    {
      id: 1,
      affliatedimage: Companyimg,

      affliateddescription: "University of Ilorin, Nigeria",
    },
    {
      id: 2,
      affliatedimage: Companyimg,

      affliateddescription: "University of Ilorin, Nigeria",
    },
    {
      id: 3,
      affliatedimage: Companyimg,

      affliateddescription: "University of Ilorin, Nigeria",
    },
    {
      id: 4,
      affliatedimage: Companyimg,

      affliateddescription: "University of Ilorin, Nigeria",
    },
  ];

  return (
    <div className=" overflow-x-hidden mx-auto">
      <div
        style={{
          backgroundImage: `url(${Herobg})`,
        }}
        className=" lg:mt-[70px] md:mt-[100px] mt-[100px] bg-no-repeat bg-cover  md:py-20 lg:py-0 py-10  "
      >
        <div className=" grid lg:px-16 md:px-10 px-5 lg:p-32 gap-5">
          <p className=" text-white mt-4">
            Lorem ipsum dolor sit amet consectetur.{" "}
          </p>
          <div className=" lg:w-[675px]">
            <p className=" font-satoshi lg:text-[50px] md:text-[50px] text-[35px] text-white font-bold">
              AFRICA{" "}
              <span className=" lg:text-[50px] md:text-[50px] text-[35px] text-primary font-bold">
                SUPPORT BUREAU{" "}
              </span>
              FOR ENTREPRENEURSHIP (ASBE)
            </p>
          </div>
          <div>
            <img
              className=" lg:w-[269px] md:w-[269px] w-[100px]"
              src={require("../../assets/HeroLine.png")}
              alt=""
            />
          </div>
          <div>
            <p className="text-[18px] lg:w-[624px] text-white">
              Moulding African Entrepreneurs for Global Impacts, Springing out
              innovations, grow entrepreneurs, develop trainers and mentors in
              Higher Institutions of Learning.
            </p>
          </div>
          <div className=" flex gap-4 items-center mt-10">
            <button className=" border-2 border-primary text-primary w-[65px] h-[29px] rounded-md transition-transform hover:scale-110 duration-300 ease-in">
              Login
            </button>
            <button className=" bg-primary text-white w-[126px] h-[29px] rounded-md transition-transform hover:scale-110 duration-300 ease-in">
              Creat account
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:hidden md:hidden block ">
        <img src={require("../../assets/Heroimgg.jpg")} alt="" />
      </div>

      {/* Whar we do */}
      <div className=" bg-primary text-white py-20">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="grid lg:px-16 md:px-10 px-5 gap-5"
        >
          <div className="flex justify-center items-center">
            <p className="lg:text-[40px] md:text-[34px] text-[24px] font-bold font-satoshi">
              WHAT WE DO
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-[18px] font-satoshi text-center lg:w-[430px]">
              We speaks to Motivate individuals, Energise ability, discover
              talents, Spring out innovations, grow entrepreneurs, develop
              trainers and mentors in Higher Institutions of Learning
            </p>
          </div>
        </div>
      </div>

      {/* Strategics */}

      <div className="bg-[#E2F5FF] py-10">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" lg:text-[44px] md:text-[34px] text-[24px] font-bold font-satoshi">
            {" "}
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-primary font-bold font-satoshi">
              Our
            </span>{" "}
            Strategies
          </p>
        </div>
        <div className=" flex justify-center">
          <p className=" text-center">Lorem ipsum dolor sit amet</p>
        </div>
        <div className=" pt-10  grid justify-center">
          <Strategies data={data} />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" flex justify-center mt-10"
        >
          <Link
            to="/about"
            className=" font-satoshi w-[206.59px] h-[49px] grid justify-center items-center rounded-md border-2 border-[#2B70FA] text-[#2B70FA] transition-transform hover:scale-110 duration-300 ease-in"
          >
            View all{" "}
          </Link>
        </div>
      </div>

      {/* Founder Board */}
      <div className="lg:px-16 md:px-10 px-5 pt-10">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" lg:text-[44px] md:text-[44px] text-[24px] font-satoshi font-bold ">
            Meet our{" "}
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-primary font-satoshi font-bold">
              Founders{" "}
            </span>{" "}
            Board
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" text-center">Lorem ipsum dolor sit amet</p>
        </div>
        <div className=" pt-10  grid justify-center">
          <FoundBoardcard board={board} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" flex justify-center mt-10"
        >
          <Link
            to="/about"
            className=" font-satoshi w-[206.59px] h-[49px] grid justify-items-center items-center rounded-md border-2 border-[#2B70FA] text-[#2B70FA] transition-transform hover:scale-110 duration-300 ease-in"
          >
            View all{" "}
          </Link>
        </div>
      </div>

      <div className=" grid justify-start h-8">
        <img
          className=" w-[300px] h-[300px]"
          src={require("../../assets/Ellipse.png")}
          alt=""
        />
      </div>

      {/* Event */}
      <div className="lg:px-16 md:px-10 px-5 py-10">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" lg:text-[44px] md:text-[44px] text-[24px] font-satoshi font-bold ">
            Latest{" "}
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-primary font-satoshi font-bold">
              Events
            </span>
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" text-center">Lorem ipsum dolor sit amet</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" pt-10  grid justify-center"
        >
          <LatestEvent events={events} />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" flex justify-center mt-10"
        >
          <Link
            to="/about"
            className=" font-satoshi w-[206.59px] h-[49px] grid justify-center items-center rounded-md border-2 border-[#2B70FA] text-[#2B70FA] transition-transform hover:scale-110 duration-300 ease-in"
          >
            View all{" "}
          </Link>
        </div>
      </div>
      <div className=" grid justify-end h-2">
        <img
          className=" w-[300px] h-[300px]"
          src={require("../../assets/Ellipse.png")}
          alt=""
        />
      </div>

      {/* Our Strategies */}

      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="bg-[#E2F5FF] py-10"
      >
        <div className=" flex justify-center">
          <p className=" lg:text-[44px] md:text-[34px] text-[24px] font-bold font-satoshi">
            {" "}
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-primary font-bold font-satoshi">
              Our
            </span>{" "}
            Strategies
          </p>
        </div>
        <div className=" flex justify-center">
          <p className=" text-center">Lorem ipsum dolor sit amet</p>
        </div>
        <div className=" pt-10  grid justify-center">
          <AffliatedCard affliated={affliated} />
        </div>
      </div>

      {/* Testimonial */}

      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" bg-white py-10"
      >
        <div className=" lg:flex md:grid grid md:px-16 lg:px-28 px-8 items-center justify-center mx-auto w-full">
          <div className=" lg:w-2/5 md:w-full w-full grid justify-center items-center p-5">
            <img
              className=" md:h-[425px] w-[384px]"
              src={require("../../assets/Testimonialimg.png")}
              alt=""
            />
          </div>
          <div className=" grid lg:w-3/5 md:w-full w-full">
            <div className=" grid gap-20">
              <div className=" flex justify-between items-center ">
                <div>
                  <p className=" font-sansation text-[40px]text-black">
                    Testimonials
                  </p>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <img
                    className="lg:w-10 lg:h-10 md:w-8 w-6"
                    src={require("../../assets/arrowleft.png")}
                    alt=""
                  />
                  <img
                    className="lg:w-10 lg:h-10 md:w-8 w-6"
                    src={require("../../assets/arrowright.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <img
                    className=" w-6 h-[250px]"
                    src={require("../../assets/LeftBorder.png")}
                    alt=""
                  />
                </div>
                <div className="">
                  <div className=" relative lg:z-10 bg-white w-full p-10 space-y-10">
                    <div className=" flex justify-between">
                      <div className="grid">
                        <p className=" lg:text-[24px] md:text-[20px] text-[12px] font-bold">
                          Mide Chike
                        </p>
                        <p className=" font-bold">Data Vendor</p>
                      </div>
                    </div>

                    <p>
                      I enjoy excellent customer service and affordable telecom
                      services with swift delivery daily while using this
                      platform. If you ever think of making more profits in your
                      data reselling business, think of{" "}
                    </p>
                  </div>
                </div>
                <div className=" items-end relative left-[-30px] top-5 lg:grid md:hidden hidden">
                  <img
                    className=" object-cover w-[182px] h-[184px]"
                    src={require("../../assets/RightRectangle.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe to Our Newsletter */}
      <div data-aos="fade-right" data-aos-duration="3000">
        <HomeSubscribe />
      </div>
      {/* footer */}
      <div data-aos="fade-left" data-aos-duration="3000">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
