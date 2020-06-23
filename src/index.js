import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app';
import questions from './mocks/questions.js';
import {Settings} from './constants';

const onWelcomeButtonClick = () => {
  // eslint-disable-next-line no-alert
  alert(`welcome screen`);
};

ReactDOM.render(
    <App
      questions={questions}
      settings={Settings}
      onWelcomeButtonClick={onWelcomeButtonClick}
    />,
    document.getElementById(`root`)
);
