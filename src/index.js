import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app';

const Settings = {
  GAME_TIME: 5,
  ERROR_COUNTING: 3,
};

const onWelcomeButtonClick = () => {
  // eslint-disable-next-line no-alert
  alert(`welcome screen`);
};

ReactDOM.render(
    <App
      settings={Settings}
      onWelcomeButtonClick={onWelcomeButtonClick}/>,
    document.getElementById(`root`)
);
