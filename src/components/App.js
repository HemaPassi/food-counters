import React from "react";
import "./App.scss";
import FoodTruck from "../containers/FoodTruck/FoodTruck";

const onAddHandler = () => {
  console.log("onAddHandler");
};

export default function App() {
  return (
    <div className="App">
      <FoodTruck />
    </div>
  );
}
