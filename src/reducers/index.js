import { combineReducers } from "redux";
import Redeucers from "./reducers";
import ActiveTaskReducer from "./reducer-active-task";
const allReducers = combineReducers({
  users: Redeucers,
  activeTask: ActiveTaskReducer
});

export default allReducers;
