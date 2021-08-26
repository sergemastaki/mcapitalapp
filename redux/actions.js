import axios from 'axios'
import { AsyncStorage } from 'react-native';

const api = axios.create({
  baseURL: "http://10.0.2.2:8000/api"
  });

export const setAxiosAuthToken = token => {
  if (typeof token !== "undefined" && token) {
    // Apply for every request
    api.defaults.headers.common["Authorization"] = "Token " + token;
  } else {
    // Delete auth header
    delete api.defaults.headers.common["Authorization"];
  }
};

export const emptyTransaction = {
  code: 'none',
  tx_id: 'none',
  type: 'DEPOT',
  taux: 1,
  state: 'EN_COURS',
  montant: 0,
  wallet: 'none',
  moyen: 'none',
  account_number: 'none',
  from_currency: 'BTC',
  to_currency: 'USD',
  moyen: 'airtel',
}

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_PAIRE = 'SET_PAIRE';
export const SET_MOYEN_DE_TRANSACTION = 'SET_MOYEN_DE_TRANSACTION';
export const GET_LOGIN_STATE = 'GET_LOGIN_STATE';
export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_ORDERS = 'GET_ORDERS';
export const GET_CURRENCIES_TYPES = 'GET_CURRENCIES_TYPES';
export const GET_CURRENCIES_SOLDES = 'GET_CURRENCIES_SOLDES';
export const EXECUTE_TRANSACTION = 'EXECUTE_TRANSACTION';

const dispatchLogin = (dispatch, payload) => {
  setAxiosAuthToken(payload)
  dispatch({
    type: LOGIN,
    payload: payload,
  });
}

export const loginStateAction = () => {
  return async dispatch => {
    AsyncStorage.getItem('TOKEN')
      .then((token) => {
        dispatchLogin(dispatch, token)
      })
  }
}

export const loginAction = (credentials) => {
  return async dispatch => {
    return api.post('/api-token-auth/', credentials)
      .then((res) => {
        dispatchLogin(dispatch, res.data.token)
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

export const setPaireAction = (paire) => {
  return dispatch => {
    dispatch({
      type: SET_PAIRE,
      payload: paire,
    });
  }
}

export const getUserInfoAction = () => {
  return async dispatch => {
    return api.get('/accounts/profile/')
      .then((res) => {
        return res.data
      })
  }
}

export const executeTransactionAction = (transactionInfo) => {
  return async dispatch => {
    return api.post('/transactions/', transactionInfo)
      .then((res) => {
        return res.data
      })
  }
}

export const getOrdersAction = () => {
  return async dispatch => {
    return api.get('/orders/')
      .then((res) => {
        return res.data
      })
  }
}
