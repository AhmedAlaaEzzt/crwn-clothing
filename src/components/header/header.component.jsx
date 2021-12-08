import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux/user/user.actions";
const Header = ({currentUser, setCurrentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <Link className="opetion" to="/signin" onClick={() =>{
             auth.signOut()
              .then(() => setCurrentUser(null))
              .catch(err => console.log(err))
          }}>SIGN OUT</Link>
        ) : (
          <Link className="option" to="/signin">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps=(state)=>{
  return{
    currentUser: state.userReducer.currentUser
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)( Header);
