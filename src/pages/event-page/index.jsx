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
        "We are thrilled to announce that our company is entering a new phase of innovation and growth. Our dedicated team is working tirelessly to bring you cutting-edge products and services that will transform the industry. Stay tuned for more updates as we continue to reach new heights in our journey of excellence.",
    },
    {
      id: 2,
      newsImg: News,
      newsText: "NEWS",
      newsDescription:
        "We are thrilled to announce our expansion into new markets as we continue to grow and diversify our business. With this expansion, we aim to better serve our customers and reach new horizons. This marks a significant step in our journey to provide even more value and opportunities to our clients and partners. Stay tuned for updates as we explore these exciting new avenues.",
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
      programsName: "Tech Innovate Africa",
      programsDescription:
        "Discover the cutting-edge technology shaping Africa's future. Join us for a day of exciting innovation showcases, tech talks, and networking opportunities with industry experts.",
    },
    {
      id: 2,
      programsImg: Progimg,
      programsName: "Sustainable Business Summit",
      programsDescription:
        "Dive into discussions on sustainable business practices and their profound impact on Africa. Engage with top executives and thought leaders in a one-of-a-kind summit.",
    },
    {
      id: 3,
      programsImg: Progimg,
      programsName: "Entrepreneurship Expo",
      programsDescription:
        " Immerse yourself in the world of startups and entrepreneurship. Explore a wide array of innovative ideas and products, connect with passionate founders, and learn from their experiences.",
    },
    {
      id: 4,
      programsImg: Progimg,
      programsName: "Women in Leadership Forum",
      programsDescription:
        " Elevate women's leadership in Africa. Engage in insightful conversations, workshops, and network with accomplished female leaders, fostering a brighter future for women in business.",
    },
    {
      id: 5,
      programsImg: Progimg,
      programsName: "Green Energy Symposium",
      programsDescription:
        "Explore the future of clean and renewable energy solutions in Africa. Dive into sustainable practices, hear success stories, and join experts as they discuss green energy's role on the continent.",
    },
    {
      id: 6,
      programsImg: Progimg,
      programsName: "Cultural Festival & Market",
      programsDescription:
        " Immerse yourself in a vibrant celebration of Africa's rich cultures. Enjoy music, art, delicious cuisine, and shop for unique local products at this lively cultural festival and market.",
    },
  ];

  // MoreEvents.jsx
  const moreEvents = [
    {
      id: 1,
      moreEventsTitle: "Innovation Accelerator Summit",
      moreEventsDate: "28 Nov",
      moreEventsText:
        " Join us for a high-energy summit focused on catalyzing innovation and entrepreneurship in Africa. Engage with dynamic speakers, workshops, and innovation showcases.",
    },
    {
      id: 2,
      moreEventsTitle: "Investor's Pitch Day",
      moreEventsDate: "28 Nov",
      moreEventsText:
        "Entrepreneurs pitch their groundbreaking ideas to potential investors, creating a dynamic environment for funding and growth opportunities.",
    },
    {
      id: 3,
      moreEventsTitle: "Youth Empowerment Expo",
      moreEventsDate: "28 Nov",
      moreEventsText:
        "Empower the next generation of African leaders. This expo offers workshops, mentorship, and inspirational talks for young entrepreneurs and innovators.",
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
            Exciting Upcoming Events to Mark in Your Calendar
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
          <p className=" text-center">
            Stay Up-to-Date with Our Latest Events/Programs
          </p>
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
                Passionate about sustainability and responsible business? Join
                ASBE and be part of a community dedicated to driving positive
                change. Connect, access resources, and help shape a more
                sustainable future. Join us today!
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
