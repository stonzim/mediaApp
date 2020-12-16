import { combineReducers } from "redux";
import loginReducer from "../store/loginReducer";
import membersReducer from "../store/membersReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  members: membersReducer,
});

export default rootReducer;
