import axios from 'axios'

const api = axios.create({
  baseURL: "http://10.0.2.2:8000"
  });

export const LOGIN = 'LOGIN';

export const loginAction = (credentials) => {
  return async dispatch => {
    return api.post('/api/api-token-auth/', credentials)
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data.token,
        });
        return res.data.token
      })
  }
}

export const LOGOUT = 'LOGOUT';

export const logoutAction = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  }
}

export const SET_CURRENCY = 'SET_CURRENCY';

export const setCurrencyAction = (currency) => {
  return dispatch => {
    dispatch({
      type: SET_CURRENCY,
      payload: currency,
    });
  }
}
