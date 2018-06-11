import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <p>Jesus loves you!</p>
    </div>
  </Provider>
);

export default App;
