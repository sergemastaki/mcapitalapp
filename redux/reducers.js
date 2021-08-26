import { AsyncStorage } from 'react-native';
import {LOGIN, LOGOUT, SET_CURRENCY} from './actions';

_storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('TOKEN', token);
  } catch (error) {
    console.log('Error when saving token')
  }
};

_removeToken = async () => {
  try {
    await AsyncStorage.removeItem('TOKEN');
  } catch (error) {
    console.log('Error when removing token')
  }
};

const initialState = {
  isLoggedIn: false,
  authToken: null,
  currency: "BTC"
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      _storeToken(action.payload)
      return Object.assign({}, state, {
          authToken: action.payload, isLoggedIn: (action.payload !== null)
        })
    case LOGOUT:
      _removeToken()
      return Object.assign({}, state, {
          authToken: null, isLoggedIn: false
        })
    default:
      return state;
  }
}

function currencyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return Object.assign({}, state, {
          currency: action.payload,
        })
    default:
      return state;
  }
}

export { authReducer, currencyReducer };
