import React from 'react';
import Router from './shared/Router';
import { Provider } from 'react-redux';
import { Store } from 'redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router />;
    </Provider>
  );
};

export default App;
