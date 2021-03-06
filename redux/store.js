/* eslint-disable linebreak-style */

import {combineReducers, createStore} from 'redux';
import initialStoreData from '../src/data/dataStore';
import ColumnsReducer from '../src/redux/ColumnsRedux.js';
import CardReducer from '../src/redux/CardsRedux.js';
import reducer from '../src/redux/SearchStringRedux.js';

// define initial state and shallow-merge initial data
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',

};

// define reducers
const reducers = {
  columns: ColumnsReducer,
  cards: CardReducer,
  searchString: reducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
