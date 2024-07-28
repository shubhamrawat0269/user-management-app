import "./index.css";

import React from "react";
import routes from "./Routes";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
