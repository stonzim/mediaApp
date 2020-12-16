const initialstate = {
  loggedIn: false,
  loggedInName: "",
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case "LOG IN":
      return {
        loggedIn: true,
        loggedInName: action.payload,
      };
    case "LOG OUT":
      return {
        loggedIn: false,
        loggedInName: "",
      };
    default:
      return state;
  }
}

export default reducer;
