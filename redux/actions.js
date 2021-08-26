import axios from 'axios'
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: "http://10.0.2.2:8000/api"
  });

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_CURRENCY = 'SET_CURRENCY';
export const SET_MOYEN_DE_TRANSACTION = 'SET_MOYEN_DE_TRANSACTION';
export const GET_LOGIN_STATE = 'GET_LOGIN_STATE';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_CURRENCIES_TYPES = 'GET_CURRENCIES_TYPES';
export const GET_CURRENCIES_SOLDES = 'GET_CURRENCIES_SOLDES';
export const EXECUTE_TRANSACTION = 'EXECUTE_TRANSACTION';

export const loginStateAction = () => {
  return async dispatch => {
    AsyncStorage.getItem('TOKEN')
      .then((token) => {
        dispatch({
          type: LOGIN,
          payload: token,
        });
      })
  }
}

export const loginAction = (credentials) => {
  return async dispatch => {
    return api.post('/api-token-auth/', credentials)
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data.token,
        });
        return res.data.token
      })
  }
}

export const logoutAction = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  }
}

export const setCurrencyAction = (currency) => {
  return dispatch => {
    dispatch({
      type: SET_CURRENCY,
      payload: currency,
    });
  }
}
