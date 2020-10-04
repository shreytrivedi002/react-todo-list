import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./containers/HomeCont";
import List from "./containers/TodoCont";

function App() {
  return (
    <div className="App bg-dark">
      <Home />
      <List />
    </div>
  );
}

export default App;
