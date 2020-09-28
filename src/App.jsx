import React from "react";
import "./App.css";
import HomePage from "./components/pages/homePage/HomePage";
import { Route } from "react-router-dom";
import ShopPage from "./components/pages/shopPage/shopPage";
import Header from "./components/header/header";
import AuthPage from "./components/pages/AuthPage/AuthPage";
import CheckOutPage from "./components/pages/checkOutPage/checkOutPage";
import Hats from "./components/pages/homePage/hats/hats";
import Jackets from "./components/pages/homePage/jackets/jackets";
import Sneakers from "./components/pages/homePage/sneakers/sneakeers";
import Mens from "./components/pages/homePage/mens/mens";
import Womens from "./components/pages/homePage/womens/womens";
import OrderForm from "./components/orderForm/orderForm";
import ThankYou from "./components/thankYou/thankYou";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/shop"} component={ShopPage} />
      <Route path={"/checkout"} component={CheckOutPage} />
      <Route path={"/auth"} component={AuthPage} />
      <Route path={"/hats"} component={Hats} />
      <Route path={"/jackets"} component={Jackets} />
      <Route path={"/sneakers"} component={Sneakers} />
      <Route path={"/mens"} component={Mens} />
      <Route path={"/womens"} component={Womens} />
      <Route exact path={"/thank"} component={ThankYou} />
      
    </div>
  );
}

export default App;
