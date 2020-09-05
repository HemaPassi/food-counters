import React, { useState } from "react";
import "./MakerBuilder.scss";
/*
 id: 2,
    title: "Sandwiches – Block D",
    lat: 28.63519,
    lng: 77.15902,
    openingTime: "9am",
    closingTime: "9pm",
    { text, tooltip, $hover }
    className={$hover ? "circle hover" : "circle"}
*/
const MarkerBuilder = ({ details, onFoodTruckClickHandler }, $hover) => {
  const [isShown, setIsShown] = useState(false);

  const { id, title, openingTime, closingTime, otherDetails } = details;
  console.log("title  ...", title);
  const handleClick = (evt) => {
    console.log(`You clicked on ${title}`);
  };
  //const onMouseOverHandler = (evt) => setIsShown(true);
  //{`banner ${active ? "active" : ""}`

  return (
    <div
      className="marker-builder circle"
      onClick={handleClick}
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
