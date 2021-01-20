import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../types/postTypes";

export function fetchPostsRequest() {
  return {
    type: FETCH_POSTS_REQUEST,
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchPosts(id) {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    axios
      .get(`/posts/${id}`)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPostsFailure(errorMessage));
      });
  };
}
