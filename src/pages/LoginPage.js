import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.memberReducer[1].loggedIn);
  const [user, setUser] = useState("");

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
        // } else if (password === "") {
        //   alert("Please enter your password");
      } else {
        fetch(`/login/:${userName}`)
          .then((res) => res.json())
          .then((user) => setUser(user));
      }
      // dispatch({
      //   type: "CHECK MEMBER",
      //   payload: { userName, password },
      // });
      alert(user);

      history.push("/");
    }
  }

  return (
    <div>
      <h3>Please log in below</h3>
      <table>
        <tbody>
          <tr>
            <td>User Name</td>
            <td>
              <input
                type="text"
                value={userName}
                onChange={addUserNameHandler}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={password}
                onChange={addPasswordHandler}
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={logInHandler}>
        Log in
      </button>
    </div>
  );
}

export default LoginPage;
