import axios from "axios";
import {
  OTHER_REQUEST,
  OTHER_SUCCESS,
  OTHER_FAILURE,
} from "../types/otherTypes";

export function otherRequest() {
  return {
    type: OTHER_REQUEST,
  };
}

export function otherSuccess(user) {
  return {
    type: OTHER_SUCCESS,
    payload: user,
  };
}

export function otherFailure(error) {
  return {
    type: OTHER_FAILURE,
    payload: error,
  };
}

export function getProfile(username) {
  return (dispatch) => {
    dispatch(otherRequest());
    axios
      .post("/other", { username: username })
      .then((response) => {
        const otherUser = response.data[0];
        dispatch(otherSuccess(otherUser));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(otherFailure(errorMessage));
        alert(errorMessage);
      });
  };
}
