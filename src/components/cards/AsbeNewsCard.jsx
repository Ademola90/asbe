import React from "react";

const AsbeNewsCard = ({ asbe }) => {
  return (
    <div className=" grid lg:grid-cols-1 md:grid-cols-2 grid-cols-2 gap-10">
      {asbe.map((item) => (
        <div key={item.id} className=" grid">
          <div>
            <p className=" font-bold font-satoshi">{item.asbeTitle}</p>
          </div>
          <div className=" ">{item.asbeText}</div>
        </div>
      ))}
    </div>
  );
};

export default AsbeNewsCard;
