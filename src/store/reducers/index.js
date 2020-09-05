import { combineReducers } from "redux";
import FoodReducer from "./reducers";

const rootReducer = combineReducers({
  FoodTruckData: FoodReducer,
});

export default rootReducer;
