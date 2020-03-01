import axios from "axios";
import { ReminderActionTypes } from "./reminder.types";

export const getReminders = () => dispatch => {
  dispatch({
    type: ReminderActionTypes.FETCH_REMINDERS_START
  });
  axios
    .get(`something/reminders`)
    .then(res => {
      dispatch({
        type: ReminderActionTypes.FETCH_REMINDERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ReminderActionTypes.FETCH_REMINDERS_FAILURE,
        payload: err.response
      });
    });
};

export const addReminders = ({ message, date, time }) => {
  return dispatch => {
    axios.post(`something/reminders`, { message, date, time }).then(res => {
      console.log("addRes", res);
      const id = res.data.id;
      let payload = { message: message, date: date, time: time, id: id };
      dispatch({
        type: ReminderActionTypes.ADD_REMINDERS,
        payload: payload
      });
    });
  };
};

export const deleteReminder = id => dispatch => {
  console.log("id", id);
  axios.delete(`something/reminders/${id}`).then(res => {
    console.log("delete", res);
    dispatch({ type: ReminderActionTypes.DELETE_REMINDERS, payload: id });
  });
};
