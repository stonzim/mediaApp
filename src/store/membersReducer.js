import {
  FETCH_MEMBERS_REQUEST,
  FETCH_MEMBERS_SUCCESS,
  FETCH_MEMBERS_FAILURE,
} from "../actions/memberActions";

const initialState = {
  loading: false,
  members: [],
  error: "",
};

// const initalState = [initialMembers, { loggedIn: false }, { member: "" }];

// function check(state, login) {
//   if (
//     state[0].some(
//       (v) => v.userName === login.userName && v.password === login.password
//     ) === true
//   ) {
//     alert("Welcome " + login.userName);
//     return [state[0], { loggedIn: true }, { member: login.userName }];
//   } else {
//     alert("Unrecognised user name or password. Please try again");
//     return [state[0], { loggedIn: false }, { member: "" }];
//   }
// }

function reducer(state = initialState, action) {
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
    // case "CHECK MEMBER":
    //   return check(state, action.payload);
    // case "ADD MEMBER":
    //   return (
    //     // (action.payload.picture = DefaultPic), [...members, action.payload]
    //     (action.payload.picture = DefaultPic),
    //     [[...state[0], action.payload], state[1], { member: "" }]
    //   );
    // case "DELETE MEMBER":

    // case "LOGOUT MEMBER":
    //   alert(`Good bye ${state[2].member}`);
    //   return [state[0], { loggedIn: false }, { member: "" }];
    default:
      return state;
  }
}

export default reducer;
