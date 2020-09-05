import * as actionTypes from "../actions/actionTypes";

const initalState = [];
export default function (state = initalState, action) {
  switch (action.type) {
    case actionTypes.ADD_FOOD_TRUCK:
      return { type: { key: "add" }, data: [...state.data, action.payload] };

    case actionTypes.FETCH_DATA:
      const newArray =
        state.data &&
        state.data.filter((data) => data.title === action.payload.title);
      if (newArray) {
        return { type: action.payload, data: [...newArray] };
      } else return { type: action.payload, data: [] };

    case actionTypes.FETCH_DATA_BASE:
      return { type: { key: "add" }, data: [...action.payload] };

    case actionTypes.EDIT_FOOD_TRUCK:
      const newArrayEdit =
        state.data &&
        state.data.filter((data) => data.title !== action.payload.title);
      return {
        type: { key: "edit" },
        data: [...newArrayEdit, action.payload],
      };

    case actionTypes.REMOVE_FOOD_TRUCK:
      console.log("action.payload.title  ", action.payload.title);
      const updatedArray = state.data.filter(
        (data) => data.title !== action.payload.title
      );
      console.log("updatedArray  ", updatedArray);
      return { type: { key: "remove" }, data: [...updatedArray] };
    default:
      return state;
  }
}
