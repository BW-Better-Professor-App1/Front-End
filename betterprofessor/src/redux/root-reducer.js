import { combineReducers } from "redux";

import reminderReducer from "./reminder/reminder.reducer";

export const rootReducer = combineReducers({
  reminderReducer
});
