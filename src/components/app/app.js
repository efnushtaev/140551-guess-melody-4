import React from 'react';
import WelcomeScreen from './../welcome-screen/welcome-screen';
import PropTypes from 'prop-types';

const App = ({settings, onWelcomeButtonClick}) => {
  const {GAME_TIME, ERROR_COUNTING} = settings;
  return <WelcomeScreen
    gameTime={GAME_TIME}
    errorCounting={ERROR_COUNTING}
    onWelcomeButtonClick= {onWelcomeButtonClick}/>;
};

App.propTypes = {
  settings: PropTypes.shape({
    GAME_TIME: PropTypes.number.isRequired,
    ERROR_COUNTING: PropTypes.number.isRequired,
  }),
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
