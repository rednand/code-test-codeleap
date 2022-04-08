import {
  FETCH_BEGIN,
  FETCH_SUCCESS,
  FETCH_ERROR,
  CREATE_EMAIL_BEGIN,
  CREATE_EMAIL_SUCCESS,
  CREATE_EMAIL_ERROR,
} from "../actions/actions";

const initialState = {
  loading: false,
  data: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCH_SUCCESS: {
      console.log("success", state);
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case CREATE_EMAIL_BEGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_EMAIL_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
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
