import React from "react";
import { Provider } from "react-redux";

import HeaderNav from "./components/HeaderNav";
import Products from "./components/Products";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderNav />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
