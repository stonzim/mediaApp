import {
  FETCH_FRIENDS_REQUEST,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from "../types/friendTypes";

const initialState = {
  loading: false,
  friends: [],
  error: "",
};

function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        loading: false,
        friends: action.payload,
        error: "",
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        friends: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default friendsReducer;
