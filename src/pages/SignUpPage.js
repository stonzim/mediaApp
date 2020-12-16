import React, { useState, Prompt } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUpPage() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function addNameHandler(e) {
    setName(e.target.value);
  }

  function addUserNameHandler(e) {
    setUserName(e.target.value);
  }

  function addPasswordHandler(e) {
    setPassword(e.target.value);
  }

  function addBlah() {
    if (name === "") {
      alert("Please enter your name");
    } else if (userName === "") {
      alert("Please enter a user name");
    } else if (password === "") {
      alert("Please enter a password");
    } else {
      dispatch({
        type: "ADD MEMBER",
        payload: { name: name, userName: userName, password: password },
      });
      setName("");
      setUserName("");
      setPassword("");
      alert("Sign up successful!");
      history.push("login");
    }
  }

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h3>Enter your details below</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="label label-default">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={addNameHandler}
          ></input>
        </div>
        <div className="form-group">
          <label className="label label-default">Username</label>
          <input
            className="form-control"
            type="text"
            value={userName}
            onChange={addUserNameHandler}
          ></input>
        </div>

        <div className="form-group">
          <label className="label label-default">Password</label>
          <input
            className="form-control"
            type="text"
            value={password}
            onChange={addPasswordHandler}
          ></input>
        </div>
        <div className="form-group">
          <label className="label label-default">Upload Picture</label>
          <input ref={register} type="file" name="picture"></input>
          <button className="btn btn-primary">Upload</button>
        </div>
      </form>

      <button className="btn btn-primary" onClick={addBlah}>
        Sign Up
      </button>
    </div>
  );
}

export default SignUpPage;
