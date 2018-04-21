import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/homepage';
import './index.css';

const matches = [
    'Game 1',
    'Game 2',
    'Game 3',
    'Game 4',
    'Game 5',
    'Game 6',
    'Game 7',
    'Game 8'
  ];

ReactDOM.render(
    <HomePage matches={matches}/>,
      document.getElementById('root')
);
