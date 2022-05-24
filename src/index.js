import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css'

//pass the app as an component and hook the app onto root div 
ReactDOM.render(
  <Router>
    <Provider store={store}>
          <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);