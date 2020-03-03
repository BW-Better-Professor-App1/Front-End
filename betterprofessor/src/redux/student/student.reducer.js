// import actions
import {
  GET_STUDENT_DATA,
  POST_STUDENT,
  REMOVE_STUDENT,
  ADD_NUMBER
} from "./student.actions";

// initial
const initialState = {
  students: [
    {
      firstName: "",
      lastName: "",
      email: "",
      id: null
    }
  ]
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_DATA:
      return {
        students: action.payload
      };

    case POST_STUDENT:
      return {
        ...state,
        students: [
          ...state.students,
          {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            email: action.payload.email,
            id: action.payload.id
          }
        ]
      };

    case REMOVE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          students => students.id !== action.payload
        )
      };

    case ADD_NUMBER:
      return {
        ...state,
        number: action.payload
      };

    default:
      return state;
  }
};

export default studentReducer;
