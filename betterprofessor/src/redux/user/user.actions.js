import axios from "axios";
import { UserActionTypes } from "./user.types";

export const register = (history, credentials) => dispatch => {
  console.log(credentials);

  dispatch({
    type: UserActionTypes.REGISTER_START
  });

  axios
    .post(`something/register`, credentials)
    .then(response => {
      console.log(response);
      dispatch({
        type: UserActionTypes.REGISTER_SUCCESS
      });
      history.push("/");
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UserActionTypes.REGISTER_FAILURE,
        payload: "Error registering user. Please try again."
      });
    });
};
