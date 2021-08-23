import {LOGIN, LOGOUT, SET_CURRENCY} from './actions';

const initialState = {
  isLoggedIn: false,
  authToken: null,
  currency: "BTC"
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
          authToken: action.payload, isLoggedIn: true
        })
    case LOGOUT:
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
