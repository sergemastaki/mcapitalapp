import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer, currencyReducer} from './reducers';

const rootReducer = combineReducers({
  authReducer, currencyReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
