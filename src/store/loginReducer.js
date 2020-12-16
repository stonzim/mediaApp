import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../types/loginTypes";

const initialstate = {
  loading: false,
  loggedIn: false,
  loggedInName: "",
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
        loggedInName: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInName: "",
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInName: "",
        error: "",
      };
    default:
      return state;
  }
}

export default loginReducer;
