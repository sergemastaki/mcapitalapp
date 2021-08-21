import {LOGIN} from './actions';

const initialState = {
  isLoggedIn: false,
  authToken: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
          authToken: action.payload, isLoggedIn: true
        })
    default:
      return state;
  }
}
export default authReducer;
