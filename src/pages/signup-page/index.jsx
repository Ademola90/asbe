import React, { useState } from "react";
import Footer from "../../components/Footer";

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [peopleInfo, setPeopleInfo] = useState([]);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      setNumberOfPeople(null);
      setPeopleInfo([]);
    }
  };

  const handleNumberChange = (e) => {
    const value = parseInt(e.target.value, 10) || "";
    setNumberOfPeople(value);

    const newPeopleInfo = Array.from({ length: value }, (_, index) => ({
      name: "",
      department: "",
      phoneNumber: "",
      emailAddress: "",
    }));

    setPeopleInfo(newPeopleInfo);
  };

  const handleSubmit = () => {
    // You can customize this logic to submit the form data to your backend or perform any other actions
    setFormSubmitted(true);
    // For demonstration purposes, just log the form data to the console
    console.log("Form data submitted:", peopleInfo);

    // Reset the form after submission
    setNumberOfPeople(null);
    setPeopleInfo([]);
  };

  return (
    <div className=" mx-auto overflow-x-hidden ">
      <div className="px-8 md:px-10 lg:px-16 mt-28 lg:flex md:grid grid justify-center overflow-x-hidden">
        <div className=" lg:w-1/2 md:w-full w-full">
          <p className=" text-[64px] font-bold font-satoshi">SIGN UP</p>

          <div className="grid gap-5 my-5">
            <div className=" space-y-3">
              <label className="text-[32px] font-satoshi" htmlFor="">
                Full Name
              </label>
              <input
                className=" w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                type="text"
              />
            </div>
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
                Department
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
            <p className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-[#0365F8]"
              />
              <p className="text-[#0365F8] text-[14px] underline font-satoshi">
                Pitching
              </p>
            </p>

            {/* How many people are pitching with you?  */}
            {isChecked && (
              <div className="mt-4">
                <div className=" grid gap-2">
                  <div className="text-[#0365F8] text-[14px]">
                    How many people are pitching with you?
                  </div>
                  <input
                    type="number"
                    value={numberOfPeople}
                    onChange={handleNumberChange}
                    className="w-[300px] border-2 px-3 border-[#cccccc] rounded-md"
                  />
                </div>
              </div>
            )}

            {/* The people form */}
            <div className="  overflow-auto w-full mt-5">
              {peopleInfo.map((person, index) => (
                <div key={index} className=" bg-[#fff] px-5 pt-10 pb-3">
                  <h2 className="text-[32px] font-semibold text-black font-satoshi">
                    Person {index + 1}
                  </h2>
                  <label className="block mt-2">
                    <span className="text-black font-satoshi text-[14px]">
                      Name:
                    </span>
                    <input
                      type="text"
                      value={person.name}
                      onChange={(e) => {
                        const updatedPeopleInfo = [...peopleInfo];
                        updatedPeopleInfo[index].name = e.target.value;
                        setPeopleInfo(updatedPeopleInfo);
                      }}
                      className="w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                    />
                  </label>

                  <label className="block mt-2">
                    <span className="text-black font-satoshi text-[14px]">
                      Email Address
                    </span>
                    <input
                      type="text"
                      value={person.department}
                      onChange={(e) => {
                        const updatedPeopleInfo = [...peopleInfo];
                        updatedPeopleInfo[index].department = e.target.value;
                        setPeopleInfo(updatedPeopleInfo);
                      }}
                      className="w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                    />
                  </label>

                  <label className="block mt-2">
                    <span className="text-black font-satoshi text-[14px]">
                      Department
                    </span>
                    <input
                      type="tel"
                      value={person.phoneNumber}
                      onChange={(e) => {
                        const updatedPeopleInfo = [...peopleInfo];
                        updatedPeopleInfo[index].phoneNumber = e.target.value;
                        setPeopleInfo(updatedPeopleInfo);
                      }}
                      className="w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                    />
                  </label>

                  <label className="block mt-2">
                    <span className="text-black font-satoshi text-[14px]">
                      Phome Number
                    </span>
                    <input
                      type="email"
                      value={person.emailAddress}
                      onChange={(e) => {
                        const updatedPeopleInfo = [...peopleInfo];
                        updatedPeopleInfo[index].emailAddress = e.target.value;
                        setPeopleInfo(updatedPeopleInfo);
                      }}
                      className="w-full h-[70px] px-3 rounded-md border-2 border-[#CCCCCC]"
                    />
                  </label>
                </div>
              ))}

              {/* Submit button */}
              {isChecked && numberOfPeople > 0 && (
                <div className="mt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white font-satoshi px-4 py-2 rounded cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>

            {/* create account button */}
            <div className=" grid gap-3 my-10 justify-center items-center">
              <button className=" bg-[#0365F8] w-[300px] h-[55px] rounded-md text-white font-satoshi">
                Create an account
              </button>
              <p className=" text-center font-satoshi text-[#0365F8] underline text-[16px] cursor-pointer">
                SIGH IN
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/2 md:w-full grid">
          <img src={require("../../assets/Signupimg.png")} alt="" />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
