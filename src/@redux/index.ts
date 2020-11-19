import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as documentReducer } from "./documentRedux";
import { reducer as userReducer } from "./userRedux";

export default combineReducers({
   document: documentReducer,
   user: userReducer,
   form: formReducer,
});
