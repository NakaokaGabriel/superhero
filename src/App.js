import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Main from './pages/Main';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Main />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
