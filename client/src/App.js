import React, { useEffect } from "react";
import { Provider } from "react-redux";

import HeaderNav from "./components/HeaderNav";
import Products from "./components/Products/index";
import store from "./store";
import { loadUser } from "./actions/user";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

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
