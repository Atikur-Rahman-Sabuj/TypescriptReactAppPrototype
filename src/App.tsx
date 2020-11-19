import React from "react";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";
import reducers from "@redux";
import Router from "./router";

// const createStoreWithMiddleware = applyMiddleware(reduxPromise, reduxThunk)(createStore);
// const store = createStoreWithMiddleware(
//    reducers,
//    window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
// );

const store = createStore(reducers, applyMiddleware(reduxThunk, reduxPromise));

function App() {
   return (
      <Provider store={store}>
         <BrowserRouter>
            <Router />
         </BrowserRouter>
      </Provider>
   );
}

export default App;
