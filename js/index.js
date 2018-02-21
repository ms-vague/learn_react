require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import List from './components/list';

document.addEventListener('DOMContentLoaded', () => 
  ReactDOM.render(<Board title='Hello World!'/>, document.getElementById('app'))
);