import React from "react";

import HeaderNav from "./components/HeaderNav";
import Products from "./components/Products";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Products />
    </div>
  );
}

export default App;
