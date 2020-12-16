import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
// const initalState = [initialMembers, { loggedIn: false }, { member: "" }];

// function check(state, login) {
//   if (
//     state[0].some(
//       (v) => v.userName === login.userName && v.password === login.password
//     ) === true
//   ) {
//     alert("Welcome " + login.userName);
//     return [state[0], { loggedIn: true }, { member: login.userName }];
//   } else {
//     alert("Unrecognised user name or password. Please try again");
//     return [state[0], { loggedIn: false }, { member: "" }];
//   }
// }
export function login(username, password) {}

export function logout() {}
