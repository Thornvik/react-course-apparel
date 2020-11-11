import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; //a component class from redux that once passed the store will give context to the rest of the application
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
