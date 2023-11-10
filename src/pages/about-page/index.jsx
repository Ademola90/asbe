import React from "react";
import Group3 from "../../assets/Group3.png";
import BenefitsCard from "../../components/cards/benefitscard";
import AboutStrategiesCard from "../../components/cards/aboutstrategies";
import image1 from "../../assets/i.fal1.png";
import image2 from "../../assets/i.fal2.png";
import image3 from "../../assets/i.fal3.png";
import image4 from "../../assets/i.fal4.png";
import image5 from "../../assets/i.fal5.png";
import image6 from "../../assets/i.fal6.png";
import image7 from "../../assets/i.fal7.png";
import image8 from "../../assets/i.fal8.png";
import image9 from "../../assets/i.fal9.png";
import image10 from "../../assets/i.fal10.png";
import FoundBoardcard from "../../components/cards/foundboardcard";
import FRectangle from "../../assets/FRectangle.png";
import HomeSubscribe from "../../components/subscribe/HomeSubscribe";
import Footer from "../../components/Footer";

const About = () => {
  // BenefitsCard.jsx
  const benefits = [
    {
      id: 1,
      check: Group3,
      benefitstext:
        "Organization of free lectures on Entrepreneurship to students and staffs of Higher Education Institution online.",
    },
    {
      id: 2,
      check: Group3,
      benefitstext:
        "Issuance of Certificate of Completion after 75% attendance of the Online lectures.",
    },
    {
      id: 3,
      check: Group3,
      benefitstext:
        "Offering of Students/ Youth Entrepreneurship Growth Hub in institutions that registered with ASBE.",
    },
    {
      id: 4,
      check: Group3,
      benefitstext:
        "Accessibility to free workshops and seminars on many different topics including digital skills, sales, access to funding through grant and content writing",
    },
    {
      id: 5,
      check: Group3,
      benefitstext:
        "Provision of assistance in locating funding/ grant opportunities to help achieve students and participants’ self- development goals.",
    },
    {
      id: 6,
      check: Group3,
      benefitstext:
        "Bringing of talent from top Universities world-wide in the area to collaborate on short-or long-term projects, as well as benefit from internship and apprenticeship schemes.",
    },
    {
      id: 7,
      check: Group3,
      benefitstext:
        "Benefit from a pool of highly skilled speakers and experienced entrepreneurs who can act as a sounding board to institution goals, business targets, and students’ development.",
    },
    {
      id: 8,
      check: Group3,
      benefitstext:
        "Provision of specialist advice from Skills Services of various form, who can guide through the latest training and upskilling initiatives for participants.",
    },
    {
      id: 9,
      check: Group3,
      benefitstext:
        "Training on skills acquisition, growth and development in entrepreneurship and business education as organised by the entrepreneurship centres of Institutions that registered ",
    },
  ];

  const aboutStrategies = [
    {
      id: 1,
      icon: image1,
      education: "Virtual Education",
      descriptions:
        "This strategy aims to provide guidance, share insights, and foster meaningful connections, empowering the next generation of African entrepreneurs.",
    },
    {
      id: 2,
      icon: image2,
      education: "Youth Mentorship Initiative",
      descriptions:
        "Introduce a Youth Mentorship Initiative that pairs experienced entrepreneurs with aspiring young innovators.",
    },
    {
      id: 3,
      icon: image3,
      education: "Fintech Innovation Lab",
      descriptions:
        "Establish a Fintech Innovation Lab to accelerate the development of financial technology solutions. ",
    },
    {
      id: 4,
      icon: image4,
      education: "Social Impact Investment Fund",
      descriptions:
        "This strategy involves providing funding, mentorship, and networking opportunities to businesses committed to making a positive impact on society..",
    },
    {
      id: 5,
      icon: image5,
      education: "Cross-Border Collaboration Network",
      descriptions:
        "This strategy aims to break down geographical barriers, facilitate knowledge exchange, and promote cross-cultural collaborations to strengthen the African entrepreneurial ecosystem.",
    },
    {
      id: 6,
      icon: image6,
      education: "Tech Incubation Bootcamp",
      descriptions:
        "This strategy involves intensive training, mentorship from industry experts, and access to resources that propel innovative tech ventures to success.",
    },
    {
      id: 7,
      icon: image7,
      education: "Inclusive Start-Up Grants",
      descriptions:
        "Introduce Inclusive Start-Up Grants to support entrepreneurs from underrepresented groups. This strategy aims to provide financial assistance, mentorship, and resources to foster diversity and inclusivity within the entrepreneurial landscape.",
    },
    {
      id: 8,
      icon: image8,
      education: "Creative Arts Innovation Fund",
      descriptions:
        "This strategy involves providing funding, mentorship, and networking opportunities to empower artists, designers, and cultural innovators in Africa.",
    },
    {
      id: 9,
      icon: image9,
      education: "Circular Economy Challenge",
      descriptions:
        "Implement a Circular Economy Challenge to encourage entrepreneurs to create businesses with a focus on sustainability and waste reduction.",
    },
    {
      id: 10,
      icon: image10,
      education: "HealthTech Collaboration Platform",
      descriptions:
        " Develop a HealthTech Collaboration Platform to connect entrepreneurs working on healthcare solutions.",
    },
  ];

  //   foundboardcard.jsx

  const board = [
    {
      id: 1,
      boardimage: FRectangle,
      name: "Prof. Dapo Adeoye,  ",
      boarddescription: "University of Ilorin, Nigeria",
    },
    {
      id: 2,
      boardimage: FRectangle,
      name: "Prof. Amina Kamara,",
      boarddescription: "University of Lagos, Nigeria",
    },
    {
      id: 3,
      boardimage: FRectangle,
      name: "Prof.  Moustapha Diop ",
      boarddescription: "University Cheikh Anta Diop, Senegal",
    },
    {
      id: 4,
      boardimage: FRectangle,
      name: "Prof. Nia Patel ",
      boarddescription: "University of Cape Town, South Africa",
    },
    {
      id: 5,
      boardimage: FRectangle,
      name: "Prof. Tariq Ouedraogo",
      boarddescription: "University of Ouagadougou, Burkina Faso",
    },
    {
      id: 6,
      boardimage: FRectangle,
      name: "Prof. Aisha Nkomo, ",
      boarddescription: "University of Nairobi, Kenya",
    },
    {
      id: 7,
      boardimage: FRectangle,
      name: "Prof. Malik Bah, ",
      boarddescription: "University of The Gambia",
    },
    {
      id: 8,
      boardimage: FRectangle,
      name: "Prof. Nia Patel, ",
      boarddescription: "University of Cape Town, South Africa",
    },
  ];

  return (
    <div className=" mx-auto overflow-x-hidden">
      <div className=" mt-20 bg-[#023D95] text-white">
        <div className="lg:flex md:flex grid lg:px-16 md:px-10 px-5 justify-center items-center lg:pt-8 md:pt-28 pt-20">
          <div className=" lg:w-1/2 md:w-1/2 w-full">
            <div className=" lg:w-[510px]">
              <span className=" lg:text-[64px] md:text-[40px] text-[38px] font-bold">
                ASBE GLOBAL INNOVATIONS{" "}
              </span>
              <span className=" lg:text-[28px] md:text-[20px] text-[20px]">
                is a support and motivational intellectuals birthed to raise
                vibrant and resilience entrepreneurs, innovators, Technology and
                skills developers across higher institution of learning in
                Africa.
              </span>
            </div>
          </div>
          <div className=" lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-20">
            <img
              className=""
              src={require("../../assets/AboutHeroimg22.png")}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* What We Are. */}
      <div className="lg:px-16 md:px-10 px-5 lg:flex md:flex grid justify-center items-center py-20">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="lg:w-1/2 md:w-1/2 grid justify-center"
        >
          <div className=" ">
            <p className=" text-primary text-[18px]">Our Service</p>
          </div>
          <div className=" ">
            <p className=" lg:text-[40px] md:text-[30px] text-[28px] font-bold font-satoshi ">
              What We{" "}
              <span className="lg:text-[40px] md:text-[30px] text-[28px] font-bold text-primary">
                Are.
              </span>
            </p>
            <img
              className="w-[102px]"
              src={require("../../assets/Line1.png")}
              alt=""
            />
          </div>
          <div className=" mt-10 ">
            <p className=" w-[319px] font-satoshi">
              Equipping students to become International Employers and Job
              <p className="mt-5">
                Creators We provide access to qualified, educated, experienced
                professionals and leader who will inform , guide, and inspires
                on how to develop successful careers and lives.
              </p>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="lg:w-1/2 md:w-1/2 w-full lg:mt-0 md:mt-0 mt-20"
        >
          <img src={require("../../assets/Group1.png")} alt="" />
        </div>
      </div>

      {/* ASBE Innovation Benefits  */}
      <div className=" bg-[#E2F5FF] py-16">
        <div className="lg:px-16 md:px-10 px-5 grid gap-10">
          <div data-aos="fade-down" data-aos-duration="3000">
            <div className=" flex justify-center">
              <p className=" lg:text-[44px] md:text-[34px] text-[28px] font-satoshi font-bold text-[#0E1133]">
                ASBE{" "}
                <span className="lg:text-[44px] md:text-[34px] text-[28px] font-satoshi font-bold text-primary">
                  {" "}
                  Innovation
                </span>{" "}
                Benefits{" "}
              </p>
            </div>
            <div className=" flex justify-center">
              <p className="text-[18px]">Why You Should Choose Us</p>
            </div>
          </div>
          <div className=" lg:flex md:grid grid justify-center items-center lg:gap-0 md:gap-10 gap-10">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className=" lg:w-1/2 md:w-full w-full grid gap-20"
            >
              <div>
                <img
                  className="lg:w-[437px] lg:h-[272px]"
                  src={require("../../assets/Rectangle311.png")}
                  alt=""
                />
              </div>
              <div className=" absolute justify-end lg:block md:hidden hidden">
                <img
                  className=" lg:w-[325px]  h-[188px] relative lg:top-[218px]  lg:left-48"
                  src={require("../../assets/Rectangle310.png")}
                  alt=""
                />
              </div>
              <div>
                <img
                  className="lg:w-[437px] lg:h-[272px]"
                  src={require("../../assets/Rectangle312.png")}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className=" lg:w-1/2 md:w-full w-full grid "
            >
              <BenefitsCard benefits={benefits} />
            </div>
          </div>
        </div>
      </div>

      {/* OUR STRATEGIES (VEINS/FLEET) */}

      <div className="lg:px-16 md:px-10 px-5 grid gap-20 py-16">
        <div data-aos="fade-right" data-aos-duration="3000">
          <div className=" flex justify-center items-center">
            <p className=" text-[#0E1133] font-satoshi lg:text-[44px] md:text-[34px] text-[28px] text-center">
              OUR STRATEGIES{" "}
              <span className="lg:text-[32px] md:text-[22px] text-[22px] text-primary">
                (VEINS/FLEET)
              </span>{" "}
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <p className=" text-[18px] text-[#0E1133]">
              Empowering Success Through Innovation and Sustainability
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className=" grid justify-center"
        >
          <AboutStrategiesCard aboutStrategies={aboutStrategies} />
        </div>
      </div>

      {/* OUR FOUNDERS BOARD  */}
      <div className="lg:px-16 md:px-10 px-5 pb-10">
        <div className=" grid justify-center gap-20">
          <div data-aos="fade-down" data-aos-duration="3000">
            <div className=" flex justify-center">
              <p className=" text-[#0E1133] lg:text-[44px] md:text-[34px] text-[24px] font-bold font-satoshi">
                OUR{" "}
                <span className=" text-primary lg:text-[44px] md:text-[34px] text-[24px] font-bold font-satoshi">
                  FOUNDERS
                </span>{" "}
                BOARD{" "}
              </p>
            </div>
            <div className=" flex justify-center">
              <p className="text-[#0E1133] text-center text-[18px]">
                Meet our amazing members and founders
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className=" grid justify-center gap-7"
          >
            <div className=" flex justify-center">
              <img
                className=" lg:w-[500px] md:w-[500px] w-[300px] lg:h-[500px] md:h-[500px] h-[300px]"
                src={require("../../assets/Founderimg.png")}
                alt=""
              />
            </div>

            <div>
              <div className=" grid text-center justify-center">
                <p className=" font-bold font-roboto text-[#0E1133]">
                  International Coordinator and Secretary Planning Commitee
                </p>
                <p className=" font-bold font-roboto text-[#0E1133]">
                  Dr. Foluke Eunice Sola-Ojo
                </p>
              </div>
            </div>
            <div className=" grid justify-center">
              <p className=" text-[14px] text-[#81818D]">
                University of Ilorin, Nigeria
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" pt-10  grid justify-center"
          >
            <FoundBoardcard board={board} />
          </div>
        </div>
      </div>

      {/* Subscribe to Our Newsletter */}
      <div data-aos="fade-left" data-aos-duration="3000">
        <HomeSubscribe />
      </div>
      {/* footer */}
      <div data-aos="fade-right" data-aos-duration="3000">
        <Footer />
      </div>
    </div>
  );
};

export default About;
