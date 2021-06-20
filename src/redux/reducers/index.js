import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  messages: messagesReducer,
  users: usersReducer,
  posts: postsReducer,
});
