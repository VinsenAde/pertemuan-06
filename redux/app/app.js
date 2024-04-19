// App.js
import React from 'react';
import { useDispatch } from 'react-redux';
import CounterNaikTurun from './CounterNaikTurun'; // Import your CounterNaikTurun component
import store from './store/store';

const App = () => {
  const dispatch = useDispatch();
  // Other component logic goes here...

  return (
    <Provider store={store}>
      <CounterNaikTurun />
    </Provider>
  );
}

export default App;