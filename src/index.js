import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './Home.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
