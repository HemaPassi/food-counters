import React, { useState } from "react";
import "./MakerBuilder.scss";

const MarkerBuilder = ({ details, onFoodTruckClickHandler }, $hover) => {
  const [isShown, setIsShown] = useState(false);

  const { id, title, openingTime, closingTime, otherDetails } = details;

  return (
    <div
      className="marker-builder circle"
      onMouseOver={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={`tooltip ${isShown ? "show" : "hide"}`} title={title}>
        <div>{title}</div>
        <div>{`${openingTime} - ${closingTime}`}</div>
        <div>{otherDetails} </div>
      </div>
    </div>
  );
};

export default MarkerBuilder;
