import { combineReducers } from "redux";

import app from "./app.reducer";
import users from "./users.reducer";
import feed from "./feed.reducer";
import profile from "./profile.reducer";
import order from "./order.reducer";

export default combineReducers({
  app,
  users,
  feed,
  profile,
  order
});
