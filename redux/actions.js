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