export const FETCH_BEGIN = "FETCH_BEGIN";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const CREATE_EMAIL_BEGIN = "CREATE_PRODUCT_BEGIN";
export const CREATE_EMAIL_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_EMAIL_ERROR = "CREATE_PRODUCT_ERROR";

const SET_USERNAME = "SET_USERNAME";

export const fetchRequestBegin = () => {
  return {
    type: FETCH_BEGIN,
  };
};

export const fetchRequestSucces = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchRequestError = (error) => {
  return {
    type: FETCH_ERROR,
    payload: error,
  };
};


export const userName = (user) => {
  return {
    type: SET_USERNAME,
    payload: user,
  };
};
