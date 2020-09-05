import * as actionTypes from "./actionTypes";
import BASE_JSON from "../../data/data.json";

export function fetchDataJson() {
  //const data = `${BASE_JSON}`;
  //const request = await axios.get(url);
  console.log("request in fetchDataJson   ", [...BASE_JSON]);
  return { type: actionTypes.FETCH_DATA_BASE, payload: BASE_JSON };
}
//fetchDataJson();
export function fetchData(data = {}) {
  return { type: actionTypes.FETCH_DATA, payload: data };
}

export const addFoodTruck = (data = {}) => {
  console.log(typeof data, " add truck  ", data);
  return {
    type: actionTypes.ADD_FOOD_TRUCK,
    payload: data,
  };
};

export const editFoodTruck = (data = {}) => {
  console.log("data  IN action  ", data);
  return {
    type: actionTypes.EDIT_FOOD_TRUCK,
    payload: data,
  };
};

export const removeFoodTruck = (data = {}) => {
  return {
    type: actionTypes.REMOVE_FOOD_TRUCK,
    payload: data,
  };
};
