import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import App from './App.jsx';
import MRouter from './router.jsx';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><MRouter /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
