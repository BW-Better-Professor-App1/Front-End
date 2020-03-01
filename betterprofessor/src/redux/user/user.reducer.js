import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  isRegistering: false,
  isRegisterd: false,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        error: null
      };
    case UserActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegisterd: true,
        error: null
      };
    case UserActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
