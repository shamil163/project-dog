import { combineReducers } from "redux";
import userReducer from "./user.Reducer";






const rootReducer = combineReducers({
  
  user: userReducer,
  
});

export default rootReducer;
