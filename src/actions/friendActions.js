import axios from "axios";
import {
  FETCH_FRIENDS_REQUEST,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from "../types/friendTypes";

export function fetchFriendsRequest() {
  return {
    type: FETCH_FRIENDS_REQUEST,
  };
}

export function fetchFriendsSuccess(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    payload: friends,
  };
}

export function fetchFriendsFailure(error) {
  return {
    type: FETCH_FRIENDS_FAILURE,
    payload: error,
  };
}

export function fetchFriends(id) {
  return (dispatch) => {
    dispatch(fetchFriendsRequest());
    axios
      .get(`/friends/${id}`)
      .then((response) => {
        const friends = response.data;
        dispatch(fetchFriendsSuccess(friends));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchFriendsFailure(errorMessage));
      });
  };
}
