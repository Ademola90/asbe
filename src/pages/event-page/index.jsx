import React, { useEffect } from "react";
import EventEroimg from "../../assets/EvenHerotimg.png";
import UpcomingEventCard from "../../components/cards/upcomingeventcard";
import Event1 from "../../assets/Event1.png";
import Event2 from "../../assets/Event2.png";
import Event3 from "../../assets/Event3.png";
import Event4 from "../../assets/Event4.png";
import Event5 from "../../assets/Event5.png";
import Event6 from "../../assets/Event6.png";
import TimeSymbol from "../../assets/TimeSymbol.png";
import News from "../../assets/News.png";
import NewsCard from "../../components/cards/newscard";
import Popularimg from "../../assets/Popularimg.png";
import PopularEventsCard from "../../components/cards/populareventscard";
import PopularTagsCard from "../../components/cards/populartagscard";
import act1 from "../../assets/act1.png";
import act2 from "../../assets/act2.png";
import act3 from "../../assets/act3.png";
import ActivitiesCard from "../../components/cards/activitiescard";
import LatestProgramsCard from "../../components/cards/LatestProgramsCard";
import Progimg from "../../assets/Progimg.png";
import HomeSubscribe from "../../components/subscribe/HomeSubscribe";
import Footer from "../../components/Footer";
import MoreEvents from "../../components/cards/MoreEvents";
import AOS from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // upcomingeventcard.jsx
  const upcoming = [
    {
      id: 1,
      eventImage: Event1,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "",
      button: "Read More",
      link: "",
    },
    {
      id: 2,
      eventImage: Event2,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "Venue: Online Event (Zoom)",
      button: "",
      link: "Link: https://www.",
    },
    {
      id: 3,
      eventImage: Event3,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "Venue: Online Event (Zoom)",
      button: "",
      link: "Link: https://www.",
    },
    {
      id: 4,
      eventImage: Event4,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "",
      button: "Read More",
      link: "",
    },
    {
      id: 5,
      eventImage: Event5,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "Venue: Online Event (Zoom)",
      button: "",
      link: "Link: https://www.",
    },
    {
      id: 6,
      eventImage: Event6,
      date: "Jan 22, 2024",
      timeImg: TimeSymbol,
      eventTitle: "International Conference on",
      venue: "",
      button: "Read More",
      link: "",
    },
  ];

  // newscard.jsx
  const news = [
    {
      id: 1,
      newsImg: News,
      newsText: "NEWS",
      newsDescription:
        "Lorem ipsum dolor sit amet consectetur. Sed neque risus laoreet rhoncus tristique fermentum.",
    },
    {
      id: 2,
      newsImg: News,
      newsText: "NEWS",
      newsDescription:
        "Lorem ipsum dolor sit amet consectetur. Sed neque risus laoreet rhoncus tristique fermentum.",
    },
  ];

  // popularevents.jsx
  const popularEvents = [
    {
      id: 1,
      popularEventsImg: Popularimg,
      popularEventsText: "Using creative problem",
      popularEventsDate: "Nov 10, 2023",
    },
    {
      id: 2,
      popularEventsImg: Popularimg,
      popularEventsText: "Using creative problem",
      popularEventsDate: "Nov 10, 2023",
    },
    {
      id: 3,
      popularEventsImg: Popularimg,
      popularEventsText: "Using creative problem",
      popularEventsDate: "Nov 10, 2023",
    },
    {
      id: 4,
      popularEventsImg: Popularimg,
      popularEventsText: "Using creative problem",
      popularEventsDate: "Nov 10, 2023",
    },
  ];

  // populartagscard.jsx
  const popularTags = [
    {
      id: 1,
      popularTagsButton: "Bisy LMS",
    },
    {
      id: 2,
      popularTagsButton: "Design",
    },
    {
      id: 3,
      popularTagsButton: "General",
    },
    {
      id: 4,
      popularTagsButton: "Online",
    },
    {
      id: 5,
      popularTagsButton: "Prevention",
    },
    {
      id: 6,
      popularTagsButton: "Artist",
    },
    {
      id: 7,
      popularTagsButton: "Education",
    },

    {
      id: 8,
      popularTagsButton: "Motivation",
    },
    {
      id: 9,
      popularTagsButton: "Politico",
    },
    {
      id: 10,
      popularTagsButton: "Live Cases",
    },
    {
      id: 11,
      popularTagsButton: "Live Cases",
    },
    {
      id: 12,
      popularTagsButton: "Live Classes",
    },
  ];

  // activitiescard.jsx
  const activities = [
    {
      id: 1,
      activitiesImg: act1,
      activitiesText:
        "Higher education institutions as hubs for entrepreneurship",
    },
    {
      id: 2,
      activitiesImg: act2,
      activitiesText: "The Entrepreneurial Educator",
    },
    {
      id: 3,
      activitiesImg: act1,
      activitiesText: "Entrepreneurial journeys",
    },
    {
      id: 4,
      activitiesImg: act1,
      activitiesText: "Entrepreneurial Leadership",
    },
    {
      id: 5,
      activitiesImg: act3,
      activitiesText: "Agripreneurship",
    },
    {
      id: 6,
      activitiesImg: act1,
      activitiesText: "Accessing the BOI Loan",
    },
    {
      id: 7,
      activitiesImg: act1,
      activitiesText: "The Entrepreneurial Mindse",
    },
    {
      id: 8,
      activitiesImg: act1,
      activitiesText:
        "Faculty Sensitization Program at the University of Ilorin, Nigeria",
    },
  ];

  // LatestProgramsCard.jsx
  const latestPrograms = [
    {
      id: 1,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
    {
      id: 2,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
    {
      id: 3,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
    {
      id: 4,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
    {
      id: 5,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
    {
      id: 6,
      programsImg: Progimg,
      programsName: "Event Name",
      programsDescription:
        "Lorem ipsum dolor sit amet consectetur. Urna faucibus in elit bibendum eget. Risus sed et sit.",
    },
  ];

  // MoreEvents.jsx
  const moreEvents = [
    {
      id: 1,
      moreEventsTitle: "Event Title",
      moreEventsDate: "28 Nov",
      moreEventsText:
        "Lorem ipsum dolor sit amet consectetur. Sit facilisis aliquet gravida vulputate.",
    },
    {
      id: 2,
      moreEventsTitle: "Event Title",
      moreEventsDate: "28 Nov",
      moreEventsText:
        "Lorem ipsum dolor sit amet consectetur. Sit facilisis aliquet gravida vulputate.",
    },
    {
      id: 3,
      moreEventsTitle: "Event Title",
      moreEventsDate: "28 Nov",
      moreEventsText:
        "Lorem ipsum dolor sit amet consectetur. Sit facilisis aliquet gravida vulputate.",
    },
  ];

  return (
    <div className=" mt-24 mx-auto overflow-x-hidden">
      <div
        className=" bg-no-repeat bg-cover bg-center h-screen grid items-center"
        style={{
          backgroundImage: `url(${EventEroimg})`,
        }}
      >
        <div className=" grid items-center text-white gap-10 lg:px-16 md:px-10 px-5">
          <p className=" lg:text-[64px] md:text-[84px] text-[50px] font-bold font-satoshi lg:w-[600px] md:w-[600px] ">
            ASBE GLOBAL INNOVATIONS{" "}
          </p>
          <p className="lg:w-[500px] text-[24px]">
            Technology and skills developers across higher institution of
            learning in Africa.
          </p>
        </div>
      </div>

      {/* UPCOMING EVENTS/PROGRAMS */}

      <div className="lg:px-16 md:px-10 px-5 py-20">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="grid justify-center items-center"
        >
          <p className="text-[#0E1133] lg:text-[44px] md:text-[34px] text-[28px] font-bold font-satoshi text-center">
            {" "}
            <span className="text-[#0365F8] lg:text-[44px] md:text-[34px] text-[28px] font-bold font-satoshi text-center ">
              UPCOMING
            </span>{" "}
            EVENTS/PROGRAMS
          </p>
          <p className=" text-[18px] font-satoshi text-[#0E1133] text-center">
            We’re driven by our values
          </p>
        </div>
        <div className=" lg:flex md:grid grid justify-center items-center mt-10">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" lg:w-9/12 md:w-full w-full grid justify-center"
          >
            <UpcomingEventCard upcoming={upcoming} />
          </div>

          {/* News */}
          <div className=" grid justify-center lg:w-4/12 md:w-full w-full">
            <div data-aos="fade-left" data-aos-duration="3000">
              <div className=" mb-3">
                <p className=" text-[20px] font-satoshi font-bold">
                  News and Notices
                </p>
              </div>
              <div className="">
                <NewsCard news={news} />
              </div>
            </div>

            {/* PopularEvents */}
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className=" mt-5 border-2 border-[#EBECF1] gap-5 grid justify-center p-5 lg:w-[320px] md:w-[500px] w-[300px] rounded-md"
            >
              <div>
                <p className=" text-[18px] font-bold font-satoshi">
                  Popular Events
                </p>
                <img
                  className=" w-[114.14px]"
                  src={require("../../assets/EventHeading.png")}
                  alt=""
                />
              </div>
              <div>
                <PopularEventsCard popularEvents={popularEvents} />
              </div>
            </div>

            {/* PopularTags */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className=" grid justify-center"
            >
              <div className=" mt-5 border-2 border-[#EBECF1] gap-5 grid  p-5 lg:w-[320px] md:w-[500px] w-[300px] rounded-md">
                <div className="">
                  <p className=" text-[18px] font-bold font-satoshi">
                    Popular Tags
                  </p>
                  <img
                    className=" w-[114.14px]"
                    src={require("../../assets/EventHeading.png")}
                    alt=""
                  />
                </div>
                <div>
                  <PopularTagsCard popularTags={popularTags} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-5 lg:px-16 py-5">
          <button className=" bg-primary text-white w-[40px] h-[40px] rounded-md">
            01
          </button>
          <button className=" bg-[#F8F8F8] text-primary w-[40px] h-[40px] rounded-md">
            02
          </button>
          <button className=" bg-[#F8F8F8] text-primary w-[66px] h-[40px] rounded-md">
            Next
          </button>
        </div>
      </div>

      {/* ACTIVITIES - TOPICS EXPLORED TO DATE */}

      <div className=" bg-[#E2F5FF] py-20">
        <div className="lg:px-16 md:px-10 px-5">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" grid justify-center items-center"
          >
            <p className=" text-[#0E1133] lg:text-[38px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
              ACTIVITIES -{" "}
              <span className=" text-primary lg:text-[38px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
                TOPICS EXPLORED{" "}
              </span>{" "}
              TO DATE
            </p>
            <p className=" text-[18px] text-[#0E1133] text-center">
              We’re driven by our values
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" grid justify-center mt-10 "
          >
            <ActivitiesCard activities={activities} />
          </div>
        </div>
      </div>

      {/*LATEST EVENTS/PROGRAMS*/}
      <div className="lg:px-16 md:px-10 px-5 py-20">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" lg:text-[44px] md:text-[44px] text-[24px] font-satoshi font-bold ">
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-primary font-satoshi font-bold">
              LATEST{" "}
            </span>{" "}
            EVENTS/PROGRAMS
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" text-center">We’re driven by our values</p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" pt-10  grid justify-center"
        >
          <LatestProgramsCard latestPrograms={latestPrograms} />
        </div>
      </div>

      {/* MORE EVENTS */}
      <div className="lg:px-16 md:px-10 px-5 py-10">
        <div className="lg:flex md:grid grid justify-center items-center">
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className=" lg:w-3/5 md:w-full w-full"
          >
            <img
              className=" lg:w-[650px] lg:h-[300px]"
              src={require("../../assets/Moreevents.png")}
              alt=""
            />
            <div className=" p-5">
              <p className=" font-satoshi font-bold text-16px">
                GEORGE Copeland is coming to ASBE!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Cras felis viverra
                ultrices ultricies tellus ut fermentum. Eleifend eleifend amet
                at duis. Posuere blandit nisi venenatis cras faucibus convallis.
                Non eu nulla ut parturient in sem mattis et.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" lg:w-2/5 md:w-full w-full"
          >
            <div className=" grid">
              <p className=" font-satoshi font-bold text-[24px]">More Event</p>
            </div>
            <div>
              <MoreEvents moreEvents={moreEvents} />
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

export default Events;
