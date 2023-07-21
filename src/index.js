import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import App from "./app";
import { ToastProvider } from "@hanseo0507/react-toast";

import "./style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ToastProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ToastProvider>
);
