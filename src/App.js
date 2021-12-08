import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, ()=> console.log(this.state))
      

        })
      }else if(isNaN(userAuth)){
        this.setState({currentUser: userAuth},()=> console.log(this.state.currentUser))
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="/signin" element={<SignInAndSignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
