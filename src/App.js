import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routes />
    </div>
  </Provider>
);

export default App;
