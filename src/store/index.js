import { createStore } from 'redux';
// import reducer from './reducer';
import appReducer from './reducer/index.js';

const store = createStore(appReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store; 