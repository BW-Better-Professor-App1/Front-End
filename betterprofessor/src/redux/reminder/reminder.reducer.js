import { ReminderActionTypes } from "./reminder.types";

const INITIAL_STATE = {
  reminders: [],
  isRemindersLoading: false,
  error: null
};

const reminderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ReminderActionTypes.FETCH_REMINDERS_START:
      return {
        ...state,
        isRemindersLoading: true,
        error: ""
      };
    case ReminderActionTypes.FETCH_REMINDERS_STARTFETCH_REMINDERS_SUCCESS:
      return {
        ...state,
        isRemindersLoading: false,
        reminders: action.payload
      };
    case ReminderActionTypes.FETCH_REMINDERS_STARTFETCH_REMINDERS_FAILURE:
      return {
        ...state,
        isRemindersLoading: false,
        error: "The server is down. Please try again later"
      };
    case ReminderActionTypes.FETCH_REMINDERS_STARTADD_REMINDERS:
      return {
        ...state,
        isRemindersLoading: false,
        reminders: [action.payload, ...state.reminders]
      };
    case ReminderActionTypes.FETCH_REMINDERS_STARTDELETE_REMINDERS:
      return {
        ...state,
        reminders: state.reminders.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export default reminderReducer;
