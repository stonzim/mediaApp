import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../types/loginTypes";

const initialstate = {
  loading: false,
  loggedIn: false,
  loggedInUser: {},
  error: "",
};

function loginReducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        loggedInUser: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInUser: {},
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInUser: {},
        error: "",
      };
    default:
      return state;
  }
}

export default loginReducer;
