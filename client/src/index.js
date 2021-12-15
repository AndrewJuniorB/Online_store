import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import UserStore from './store/UserStore.js';
import DeviceStore from './store/DeviceStore.js';





export const Context = createContext(null);
const apiURL = process.env.REACT_APP_API_URL;
console.log('API', apiURL);

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
      <App />
  </Context.Provider>,
  document.getElementById('root')
);


