import { AsyncStorage } from 'react-native';
import {LOGIN, LOGOUT, SET_PAIRE} from './actions';

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
  paire: {
    from_currency: "BTC",
    to_currency: "USDT"
  }
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
    case SET_PAIRE:
      return Object.assign({}, state, {
          paire: action.payload,
        })
    default:
      return state;
  }
}

export { authReducer, currencyReducer };
