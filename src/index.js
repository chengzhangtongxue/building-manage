import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import App from './App.jsx';
import MRouter from './router.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MRouter />, document.getElementById('root'));
serviceWorker.unregister();
