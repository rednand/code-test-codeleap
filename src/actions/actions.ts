export const FETCH_SUCCESS = "FETCH_SUCCESS";

const SET_USERNAME = "SET_USERNAME";

export const fetchRequestSucces = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const userName = (user) => {
  return {
    type: SET_USERNAME,
    payload: user,
  };
};
