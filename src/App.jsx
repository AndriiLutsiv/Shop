import React from "react";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import { Route } from "react-router-dom";
import ShopPage from "./components/pages/shopPage/shopPage";
import Header from "./components/header/header";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import CheckOutPage from "./components/pages/checkOutPage/checkOutPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route exact path={"/"} component={HomePage} /> */}
      <Route exact path={"/"} component={CheckOutPage} />
      <Route path={"/shop"} component={ShopPage} />
      <Route path={"/auth"} component={AuthPage} />
    </div>
  );
}

export default App;
