import { combineReducers } from "redux";
import loginReducer from "../store/loginReducer";
import membersReducer from "../store/membersReducer";
import friendsReducer from "../store/friendsReducer";
import photosReducer from "../store/photosReducer";
import postsReducer from "../store/postsReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  members: membersReducer,
  friends: friendsReducer,
  photos: photosReducer,
  posts: postsReducer,
});

export default rootReducer;
