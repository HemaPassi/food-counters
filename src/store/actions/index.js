import * as actionTypes from "./actionTypes";
import BASE_JSON from "../../data/data.json";

export function fetchDataJson() {
  return { type: actionTypes.FETCH_DATA_BASE, payload: BASE_JSON };
}
export function fetchData(data = {}) {
  return { type: actionTypes.FETCH_DATA, payload: data };
}

export const addFoodTruck = (data = {}) => {
  return {
    type: actionTypes.ADD_FOOD_TRUCK,
    payload: data,
  };
};

export const editFoodTruck = (data = {}) => {
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
