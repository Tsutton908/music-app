import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './react_reducers/react_reducer';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer 
      initialState={initialState}
      reducer={reducer}
    >
    <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

