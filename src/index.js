import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app';

const Settings = {
  GAME_TIME: 5,
  ERROR_COUNTING: 3
};

ReactDOM.render(
    <App settings={Settings}/>,
    document.getElementById(`root`)
);
