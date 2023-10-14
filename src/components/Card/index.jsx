import React from "react";
import "./card.css";

const Card = ({ total, title }) => {
  const updateDate = new Date();
  return (
    <div
      id={title}
      className={`border-b-8  w-[12%] mx-2 px-8 py-5  min-h-fit font-medium overflow-hidden`}
    >
      <h3 className="mb-3">{title}</h3>
      <div className="font-bold">
        {total == "" ? <div>0</div> : <div>{total}</div>}
      </div>
      <p className="mt-2 ">
        Last Updated at:
        <span className="font-normal"> {updateDate.toString()}</span>
      </p>
      <div className="mt-2">
        Number of <span>{title}</span> cases of COVID-19
      </div>
    </div>
  );
};

export default Card;
