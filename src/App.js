import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth } from "./firebase/firebase.utils.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
