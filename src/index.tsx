import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './core';
import { CatalogService } from './services/CatalogService';

CatalogService.setCredentials({ URL: 'https://fakestoreapi.com' });
CatalogService.prefix = 'products';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
