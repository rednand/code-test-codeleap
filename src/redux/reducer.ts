import { FETCH_SUCCESS } from "../actions/actions";

const initialState = {
  loading: false,
  data: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    default:
      return state;
  }
};

const initialUser = {
  user: "",
};

export const userReducer = (state = initialUser, { type, payload }) => {
  switch (type) {
    case "SET_USERNAME":
      return payload;
    default:
      return state;
  }
};
