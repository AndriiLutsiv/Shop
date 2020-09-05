import React from "react";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import { Route } from "react-router-dom";

const Test = () => {
  return (
    <div>
      <h1>Test page</h1>
    </div>
  );
};

const Test2 = () => {
  return (
    <div>
      <h1>2nd test page</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/test"} component={Test} />
      <Route path={"/test2"} component={Test2} />
    </div>
  );
}

export default App;
