// AppWrapper.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './path/to/your/redux/store'; // Import your Redux store
import App from './app'; // Import your App component

const appWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default appWrapper;