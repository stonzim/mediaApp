import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/loginActions";
import "../App.scss";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.login.loggedIn);

  function addUserNameHandler(e) {
    setUserName(e.target.value);
  }

  function addPasswordHandler(e) {
    setPassword(e.target.value);
  }

  function logInHandler() {
    if (!loggedIn) {
      if (userName === "") {
        alert("Please enter your user name");
      } else if (password === "") {
        alert("Please enter your password");
      } else {
        dispatch(login(userName, password));
        history.push("/");
      }
    }
  }

  return (
    <div>
      <div className="container  dark">
        <div className="row h-100 align-items-center">
          <div className="col-md-7">
            <div>
              <h1>Stalktalk</h1>
              <h4>
                Stalktalk helps you to talk to people in your life, and stalk
                those who were in your life
              </h4>
            </div>
          </div>
          <div className="col-md-5">
            <h3>Please log in below</h3>
            <form>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Username</label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={userName}
                    onChange={addUserNameHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Password</label>
                <div className="col-sm-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={addPasswordHandler}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-10 offset-sm-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={logInHandler}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
