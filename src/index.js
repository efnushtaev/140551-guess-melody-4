import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';

const settings = {
  gameTime: 5,
  errorCount: 3
};

ReactDOM.render(
    <App settings={settings}/>,
    document.getElementById(`root`)
);
