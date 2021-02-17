import {
  OTHER_REQUEST,
  OTHER_SUCCESS,
  OTHER_FAILURE,
} from "../types/otherTypes";

const initialstate = {
  loading: false,
  present: false,
  otherUser: {},
  error: "",
};

function otherReducer(state = initialstate, action) {
  switch (action.type) {
    case OTHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case OTHER_SUCCESS:
      return {
        ...state,
        loading: false,
        present: true,
        otherUser: action.payload,
        error: "",
      };
    case OTHER_FAILURE:
      return {
        ...state,
        loading: false,
        present: false,
        otherUser: {},
        error: action.payload,
      };
    default:
      return state;
  }
}

export default otherReducer;
