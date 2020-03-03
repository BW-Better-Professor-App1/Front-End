import { axiosWithAuth } from "../../utils/axiosWithAuth";

// import axios from "axios";

// insure the naming is correct
export const GET_STUDENT_DATA = "GET_STUDENT_DATA";
export const POST_STUDENT = "POST_STUDENT";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const ADD_NUMBER = "ADD_NUMBER";

// get smurf data from server with axios
export const getStudentData = () => dispatch => {
  axiosWithAuth
    .get("/api/students")
    .then(res =>
      dispatch({
        type: GET_STUDENT_DATA,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};

// post smurf data to server with axios
export const postStudent = item => dispatch => {
  axiosWithAuth
    .post("/api/students", {
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      id: item.id
    })
    .then(
      dispatch({
        type: POST_STUDENT,
        payload: item
      })
    )
    .catch(err => {
      console.log(err);
    });
};

// remove a smurf from the server with axios
export const removeStudent = id => dispatch => {
  axiosWithAuth
    .delete(`/api/students/${id}`)
    .then(console.log(id))
    .then(
      dispatch({
        type: REMOVE_STUDENT,
        payload: id
      })
    )
    .catch(err => {
      console.log(err);
    });
};

// add number for id
export const addNumber = id => {
  return {
    type: ADD_NUMBER,
    payload: id
  };
};
