import React from "react";

const BenefitsCard = ({ benefits }) => {
  return (
    <div className="  grid gap-5 overflow-x-hidden">
      {benefits.map((item) => (
        <div key={item.id} className="  flex gap-5 w-full">
          <img src={item.check} alt={item.name} className="w-[24px] h-[24px]" />

          <div>{item.benefitstext}</div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsCard;
