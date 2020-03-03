import { TOGGLE_EDITING, UPDATE_TITLE } from "./title.actions";

const initialState = {
  title: "Name whatever you want",
  editing: false
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDITING:
      return {
        ...state,
        editing: !state.editing
      };

    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };

    default:
      return state;
  }
};
