import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import reminderReducer from "./reminder/reminder.reducer";

export const rootReducer = combineReducers({
  userReducer,
  reminderReducer
});
