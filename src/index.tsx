import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reducers from "@redux";
import Router from "./router";

const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(
   reducers,
   window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
);
ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);
