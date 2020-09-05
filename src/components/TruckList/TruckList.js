import React from "react";

const TruckList = (props) => {
  return (
    <div>
      <button
        onClick={(evt) => props.onFoodTruckClickHandler(evt, "resetSearch")}
      >
        close
      </button>
      <ul>
        <div>
          <span>Name</span>
          <span>Location</span>
          <span>Timing</span>
        </div>
        {props.data &&
          props.data.map((dt) => (
            <li key={dt.id} onClick={() => props.onClickHanderTruckList(dt)}>
              <span>{dt.title}</span>
              <span>{dt.address}</span>
              <span>{`${dt.openingTime} - ${dt.closingTime}`}</span>
              {/* <button
                onClick={(evt) => props.onFoodTruckClickHandler(evt, "delete")}
              >
                Delete
              </button> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TruckList;
