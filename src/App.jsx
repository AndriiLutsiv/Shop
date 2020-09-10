import React from "react";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import { Route } from "react-router-dom";
import ShopPage from "./components/pages/shopPage/shopPage";
import Header from "./components/header/header";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import CheckOutPage from "./components/pages/checkOutPage/checkOutPage";
import Hats from "./components/pages/homePage/hats/hats";
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/shop"} component={ShopPage} />
      <Route path={"/checkout"} component={CheckOutPage} />
      {/* <Route path={"/auth"} component={AuthPage} /> */}
      <Route path={"/auth"} component={Hats} />
    </div>
  );
}

export default App;
