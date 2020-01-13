import { combineReducers } from "redux";
//aliasing is optional
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

//must put redux-form to form key
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
