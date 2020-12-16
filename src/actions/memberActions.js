import axios from "axios";
import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "../types/memberTypes";

export function fetchMembersRequest() {
  return {
    type: FETCH_MEMBERS_REQUEST,
  };
}

export function fetchMembersSuccess(members) {
  return {
    type: FETCH_MEMBERS_SUCCESS,
    payload: members,
  };
}

export function fetchMembersFailure(error) {
  return {
    type: FETCH_MEMBERS_FAILURE,
    payload: error,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(fetchMembersRequest());
    axios
      .get("/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchMembersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchMembersFailure(errorMessage));
      });
  };
}
