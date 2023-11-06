import React, { useEffect } from "react";
import TestIImg from "../../assets/TestIImg.png";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import Frame5 from "../../assets/Frame5.png";
import Frame6 from "../../assets/Frame6.png";
import Frame7 from "../../assets/Frame7.png";
import Frame8 from "../../assets/Frame8.png";
import Frame9 from "../../assets/Frame9.png";
import Frame10 from "../../assets/Frame10.png";
import Frame11 from "../../assets/Frame11.png";
import GalleryCard from "../../components/cards/GalleryCard";
import Impact1 from "../../assets/Impact1.png";
import Impact2 from "../../assets/Impact2.png";
import Impact3 from "../../assets/Impact3.png";
import Impact4 from "../../assets/Impact4.png";
import ImpactCard from "../../components/cards/ImpactCard";
import Testimonialgirl from "../../assets/Testimonialgirl.jpg";
import Stories1 from "../../assets/Stories1.png";
import Stories2 from "../../assets/Stories2.png";
import Stories3 from "../../assets/Stories3.png";
import Stories4 from "../../assets/Stories4.png";
import Stories5 from "../../assets/Stories5.png";
import Stories6 from "../../assets/Stories6.png";
import Stories7 from "../../assets/Stories7.png";
import Stories8 from "../../assets/Stories8.png";
import Stories9 from "../../assets/Stories9.png";
import StoriesCard from "../../components/cards/StoriesCard";
import AsbeNewsCard from "../../components/cards/AsbeNewsCard";
import HomeSubscribe from "../../components/subscribe/HomeSubscribe";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const gallery = [
    {
      id: 1,
      galleryimg: Frame1,
    },
    {
      id: 2,
      galleryimg: Frame2,
    },
    {
      id: 3,
      galleryimg: Frame3,
    },
    {
      id: 4,
      galleryimg: Frame4,
    },
    {
      id: 5,
      galleryimg: Frame5,
    },
    {
      id: 6,
      galleryimg: Frame6,
    },
    {
      id: 7,
      galleryimg: Frame7,
    },
    {
      id: 8,
      galleryimg: Frame8,
    },
    {
      id: 9,
      galleryimg: Frame9,
    },
    {
      id: 10,
      galleryimg: Frame10,
    },
    {
      id: 11,
      galleryimg: Frame11,
    },
  ];

  // ImpactCard.jsx
  const impact = [
    {
      id: 1,
      impactImg: Impact1,
      impactText: "JR Farms Job Offers For 5 Students of University of Ilorin",
    },
    {
      id: 2,
      impactImg: Impact2,
      impactText:
        "EIYA Farms Soiless Training for 100 Students, University of Ilorin",
    },
    {
      id: 3,
      impactImg: Impact3,
      impactText:
        "Distributions of Palliative for Students of Faculty of Agriculture, Law, Engineering and Technology during University of Ilorin, Faculty Sensitization Committee",
    },
    {
      id: 4,
      impactImg: Impact4,
      impactText:
        "Monthly Online Entrepreneurial Lectures for Staff and Students of University of Ilorin, Southern African Nazarene University and Fountain University",
    },
  ];

  // StoriesCard.jsx
  const stories = [
    {
      id: 1,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories1,
      storiesText1: "Lorem ipsum dolor sit amet consectetur.",
      storiesText2: "",
      storiesText3:
        "Lorem ipsum dolor sit amet consectetur. Mattis erat magnis quis interdum quis donec sit ac purus.",
    },
    {
      id: 2,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories2,
      storiesText1: "",
      storiesText2: "",
      storiesText3:
        "Lorem ipsum dolor sit amet consectetur. Mattis erat magnis quis interdum quis donec sit ac purus.",
    },
    {
      id: 3,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories3,
      storiesText1: "Lorem ipsum dolor sit amet consectetur.",
      storiesText2: "Lorem ipsum dolor sit amet consectetur.",
      storiesText3:
        "Lorem ipsum dolor sit amet consectetur. Mattis erat magnis quis interdum quis donec sit ac purus.",
    },
    {
      id: 4,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories4,
      storiesText1: "",
      storiesText2: "",
      storiesText3: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 5,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories5,
      storiesText1: "Lorem ipsum dolor sit amet consectetur.",
      storiesText2: "Lorem ipsum dolor sit amet consectetur.",
      storiesText3:
        "Lorem ipsum dolor sit amet consectetur. Mattis erat magnis quis interdum quis donec sit ac purus.",
    },
    {
      id: 6,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories6,
      storiesText1: "",
      storiesText2: "",
      storiesText3: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 7,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories7,
      storiesText1: "",
      storiesText2: "",
      storiesText3: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 8,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories8,
      storiesText1: "",
      storiesText2: "",
      storiesText3: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 9,
      storiesTitle: "TESTIMONIAL",
      storiesName: "Given by - Name and Profession",
      storiesImg: Stories9,
      storiesText1: "Lorem ipsum dolor sit amet consectetur.",
      storiesText2: "",
      storiesText3: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  // AsbeNwesCard.jsx
  const asbe = [
    {
      id: 1,
      asbeTitle: "TITLE",
      asbeText:
        "Lorem ipsum dolor sit amet consectetur. Nulla aliquet eleifend ornare.",
    },
    {
      id: 2,
      asbeTitle: "TITLE",
      asbeText:
        "Lorem ipsum dolor sit amet consectetur. Nulla aliquet eleifend ornare.",
    },
    {
      id: 3,
      asbeTitle: "TITLE",
      asbeText:
        "Lorem ipsum dolor sit amet consectetur. Nulla aliquet eleifend ornare.",
    },
    {
      id: 4,
      asbeTitle: "TITLE",
      asbeText:
        "Lorem ipsum dolor sit amet consectetur. Nulla aliquet eleifend ornare.",
    },
  ];

  return (
    <div className=" mt-24 mx-auto overflow-x-hidden">
      <div
        className=" bg-no-repeat bg-cover bg-center h-screen grid items-center"
        style={{
          backgroundImage: `url(${TestIImg})`,
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

      {/*OUR PHOTO GALLERY SPEAKS VOLUME */}
      <div className="lg:px-16 md:px-10 px-5 py-20">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" lg:text-[44px] md:text-[44px] text-[24px] font-satoshi font-bold text-primary ">
            <span className=" lg:text-[44px] md:text-[34px] text-[24px] text-[#0E1133] font-satoshi font-bold">
              OUR PHOTO{" "}
            </span>{" "}
            GALLERY SPEAKS VOLUME
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" flex justify-center"
        >
          <p className=" text-center">We’re driven by our values</p>
        </div>

        <div data-aos="fade-right" data-aos-duration="3000" className=" mt-10">
          <GalleryCard gallery={gallery} />
        </div>
      </div>

      {/* Team members & students */}
      <div className=" bg-[#E2F5FF] py-10">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="lg:px-28 md:px-10 px-5 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-between items-center"
        >
          <div className=" grid justify-center">
            <div className=" grid justify-center">
              <img
                className=" w-[55px] h-[55px]"
                src={require("../../assets/Usericon.png")}
                alt=""
              />
            </div>
            <div>
              <p className=" font-bold font-satoshi lg:text-[48px] md:text-[48px] text-[28px] text-center">
                +900K
              </p>
              <p className=" font-satoshi lg:text-[32px] md:text-[32px] text-[20px] text-primary text-center">
                {" "}
                Students
              </p>
            </div>
          </div>
          <div className=" grid justify-center">
            <div className=" grid justify-center">
              <img
                className=" w-[55px] h-[55px]"
                src={require("../../assets/Usericon.png")}
                alt=""
              />
            </div>
            <div>
              <p className=" font-bold font-satoshi lg:text-[48px] md:text-[48px] text-[28px] text-center">
                +900K
              </p>
              <p className=" font-satoshi lg:text-[32px] md:text-[32px] text-[20px] text-primary text-center">
                {" "}
                Students
              </p>
            </div>
          </div>
          <div className=" grid justify-center">
            <div className=" grid justify-center">
              <img
                className=" w-[55px] h-[55px]"
                src={require("../../assets/Usericon.png")}
                alt=""
              />
            </div>
            <div>
              <p className=" font-bold font-satoshi lg:text-[48px] md:text-[48px] text-[28px] text-center">
                +900K
              </p>
              <p className=" font-satoshi lg:text-[32px] md:text-[32px] text-[20px] text-primary text-center">
                {" "}
                Students
              </p>
            </div>
          </div>
          <div className=" grid justify-center">
            <div className=" grid justify-center">
              <img
                className=" w-[55px] h-[55px]"
                src={require("../../assets/Usericon.png")}
                alt=""
              />
            </div>
            <div>
              <p className=" font-bold font-satoshi lg:text-[48px] md:text-[48px] text-[28px] text-center">
                +900K
              </p>
              <p className=" font-satoshi lg:text-[32px] md:text-[32px] text-[20px] text-primary text-center">
                {" "}
                Team members
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMPACTS WE HAVE MADE SO FAR */}

      <div className="py-20">
        <div className="lg:px-16 md:px-10 px-5">
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className=" grid justify-center items-center"
          >
            <p className=" text-[#0E1133] lg:text-[44px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
              IMPACTS{" "}
              <span className=" text-primary lg:text-[44px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
                WE HAVE MADE{" "}
              </span>{" "}
              SO FAR
            </p>
            <p className=" text-[18px] text-[#0E1133] text-center">
              We’re driven by our values
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" mt-10 grid justify-center"
          >
            <ImpactCard impact={impact} />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        className=" bg-no-repeat bg-cover h-full grid"
        style={{
          backgroundImage: `url(${Testimonialgirl})`,
        }}
      >
        <div className="lg:px-16 md:px-10 px-5 bg-black opacity-75 grid justify-center pt-10 pb-20 gap-20">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="grid justify-center items-center"
          >
            <div>
              <p className=" font-satoshi text-center text-[44px] text-white">
                Testimonials
              </p>
              <p className=" font-satoshi text-center text-[18px] text-white">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" grid justify-center items-center gap-10 lg:w-[751px]"
          >
            <div className=" flex justify-center">
              <img
                className=" lg:w-[42.96px] md:w-[22.96px] w-[12.96px]  lg:h-[30px] md:h-[20px] h-[10px]"
                src={require("../../assets/Testimgg.png")}
                alt=""
              />

              <div>
                <p className=" font-satoshi text-center text-[20px] text-white">
                  Lorem ipsum dolor sit amet consectetur. Porttitor ipsum augue
                  lorem orci adipiscing. Volutpat purus dolor sem aliquet ut.
                  Nunc arcu risus justo lacus dignissim porttitor proin sagittis
                  condimentum. Praesent eu egestas at arcu.
                </p>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-20">
              <div className="font-satoshi text-[24px] font-bold text-white">
                Debbie George
              </div>
              <div className=" font-satoshi text-[16px] text-white">
                Profession
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex text-white justify-start gap-5 items-center lg:w-[751px]"
          >
            <button className=" hover:bg-primary hover:text-white w-[24px] h-[24px] rounded-md cursor-pointer">
              01
            </button>
            <button className="hover:bg-primary hover:text-white w-[24px] h-[24px] rounded-md cursor-pointer">
              02
            </button>
            <button className="hover:bg-primary hover:text-white w-[24px] h-[24px] rounded-md cursor-pointer">
              03
            </button>
          </div>
        </div>
      </div>

      {/* MORE STORIES*/}

      <div className="lg:px-16 md:px-10 px-5 py-20">
        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className=" grid justify-center items-center"
        >
          <p className=" text-[#0E1133] lg:text-[44px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
            MORE{" "}
            <span className=" text-primary lg:text-[44px] md:text-[30px] text-[28px] font-bold font-satoshi text-center">
              MORE STORIES
            </span>
          </p>
          <p className=" text-[18px] text-[#0E1133] text-center">
            We’re driven by our values
          </p>
        </div>

        <div className=" lg:flex  justify-center mt-10">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" lg:w-4/5"
          >
            <StoriesCard stories={stories} />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className=" lg:w-1/5  space-y-4"
          >
            <div className=" lg:mt-0 md:mt-20 mt-10">
              <p className=" text-[16px] font-satoshi font-bold">ASBE News</p>
            </div>
            <AsbeNewsCard asbe={asbe} />
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

export default Testimonials;
