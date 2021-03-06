import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "../types/memberTypes";

const initialState = {
  loading: false,
  members: [],
  error: "",
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MEMBERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload,
        error: "",
      };
    case FETCH_MEMBERS_FAILURE:
      return {
        ...state,
        loading: false,
        members: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default membersReducer;
