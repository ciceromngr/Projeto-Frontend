import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../src/routes';
import  AppProvider  from './hooks'

import GlobalStyle from '../src/styles/global';
function App() {
  return (
    <>
      <BrowserRouter>
      <AppProvider>
        <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
