// libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// src
import App from "./App";
import configureStore from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
registerServiceWorker();
