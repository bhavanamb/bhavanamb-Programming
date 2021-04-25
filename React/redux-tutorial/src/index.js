import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducers from "./reducers";
import "./index.css";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
