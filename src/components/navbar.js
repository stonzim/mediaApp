import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { logout } from "../actions/loginActions";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loggedIn = useSelector((state) => state.login.loggedIn);
  const loggedInUser = useSelector((state) => state.login.loggedInUser);

  function logOutHandler() {
    if (loggedIn) {
      dispatch(logout(loggedInUser.username));
      history.push("/");
    }
  }

  return (
    <div id="navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <img
              className="logo rounded-circle"
              src="http://localhost:3001/images/logo.jpg"
              alt=""
            />
          </div>
          <div className="col-2">
            <p className="name-style">Hi {loggedInUser.username}</p>
          </div>
          <div className="col-7">
            <ul className="ul-style">
              {/* <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/friends"
                  exact
                  activeClassName="link-active-style"
                >
                  Members
                </NavLink>
              </li> */}
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/"
                  exact
                  activeClassName="link-active-style"
                >
                  Home
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/about"
                  exact
                  activeClassName="link-active-style"
                >
                  About
                </NavLink>
              </li>
              <li className="li-style">
                <NavLink
                  className="App-link"
                  to="/profile"
                  exact
                  activeClassName="link-active-style"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={logOutHandler}>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
