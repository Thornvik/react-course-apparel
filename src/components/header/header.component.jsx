import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // a higher order component that allows us to modify our component to have access to things related to redux

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.style.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //can be named anything but maoStateToPRops is standars with redux codebases
  //state is the root-reducer
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
