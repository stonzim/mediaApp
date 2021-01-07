import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../types/loginTypes";

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(username) {
  return {
    type: LOGIN_SUCCESS,
    payload: username,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function login(username, password) {
  return (dispatch) => {
    dispatch(loginRequest());
    axios
      .post("/login", { username: username, password: password })
      .then((response) => {
        const loggedInUser = response.data[0];
        dispatch(loginSuccess(loggedInUser));
        alert("Welcome " + loggedInUser.username);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(loginFailure(errorMessage));
        alert(errorMessage);
      });
  };
}

export function logout(username) {
  return (dispatch) => {
    dispatch(logoutSuccess());
    alert("Farewall " + username);
  };
}
