import axios from "axios";
import {
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
} from "../types/photoTypes";

export function fetchPhotosRequest() {
  return {
    type: FETCH_PHOTOS_REQUEST,
  };
}

export function fetchPhotosSuccess(photos) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    payload: photos,
  };
}

export function fetchPhotosFailure(error) {
  return {
    type: FETCH_PHOTOS_FAILURE,
    payload: error,
  };
}

export function fetchPhotos(id) {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    axios
      .get(`/photos/${id}`)
      .then((response) => {
        const photos = response.data;
        dispatch(fetchPhotosSuccess(photos));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchPhotosFailure(errorMessage));
      });
  };
}
