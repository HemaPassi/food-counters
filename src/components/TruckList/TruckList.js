import React from "react";

const TruckList = (props) => {
  return (
    <div>
      <ul>
        <div>
          <span>Name</span> <span>Owner Name</span>
          <span>Location</span>
          <span>Timing</span>
        </div>
        {props.data &&
          props.data.map((dt) => (
            <li key={dt.id} onClick={() => props.onClickHanderTruckList(dt)}>
              <span>{dt.title}</span> <span>{dt.ownerName}</span>{" "}
              <span>{dt.address}</span>
              <span>{`${dt.openingTime} - ${dt.closingTime}`}</span>
              <button
                onClick={(evt) => props.onFoodTruckClickHandler(evt, "delete")}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TruckList;
