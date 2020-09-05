import React from "react";
import GoogleMapReact from "google-map-react";
import MarkerBuilder from "../MarkerBuilder/MarkerBuilder";

const MapBuilder = ({ data, onFoodTruckClickHandler }) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: "AIzaSyAjQntjVAM8N7PkFbtipZjS1-0r9TBuEP0",
      language: "en",
      region: "India",
    }}
    defaultCenter={{ lat: 28.63519, lng: 77.15902 }}
    defaultZoom={15}
  >
    {console.log(typeof data, " hema  ", data)}
    {data &&
      data.map((details) => {
        console.log("details  ", details);
        return (
          <MarkerBuilder
            key={details.id}
            details={details}
            onFoodTruckClickHandler={onFoodTruckClickHandler}
          />
        );
      })}
  </GoogleMapReact>
);

export default MapBuilder;
