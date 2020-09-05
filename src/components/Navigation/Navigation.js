import React from "react";
import Search from "../../containers/Search/Search";
import "./Navigation.scss";

const Navigation = (props) => (
  <div className="navigation">
    <h2> Food Trucks</h2>
    <Search />
    <button onClick={(evt) => props.onFoodTruckClickHandler(evt, "add")}>
      Add Food Trucks
    </button>
    {/* <button onClick={props.onEditHandler}>Edit</button>
    <button onClick={props.onDeleteHandler}>Delete</button> */}
  </div>
);

export default Navigation;
