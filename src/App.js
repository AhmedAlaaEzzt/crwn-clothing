import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions.js";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else if (isNaN(userAuth)) {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  redirectUser = (currentUser, component) => {
    console.log(currentUser);
    if (currentUser) {
      return component;
    } else {
      return <Navigate to="/signin" replace={true} />;
    }
  };
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route
              path="/signin"
              element={
                currentUser ? (
                  <Navigate to="/shop" replace={true} />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
            <Route path="/checkout" element={<CheckoutPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDespatichToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDespatichToProps)(App);
