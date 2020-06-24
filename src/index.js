import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app';
import questions from './mocks/questions.js';
import {Settings} from './constants';
import PropTypes from 'prop-types';

ReactDOM.render(
    <App
      questions={questions}
      settings={Settings}
    />,
    document.getElementById(`root`)
);

App.propTypes = {
  Settings: PropTypes.shape({
    GAME_TIME: PropTypes.number,
    ERROR_COUNTING: PropTypes.number
  }).isRequired,
  questions: PropTypes.array.isRequired,
};
