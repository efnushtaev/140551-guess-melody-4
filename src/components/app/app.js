import React from 'react';
import WelcomeScreen from '../main/welcome-screen';
import PropTypes from 'prop-types';

const App = ({Settings}) => {
  const {GAME_TIME, ERROR_COUNTING} = Settings;
  return <WelcomeScreen
    GAME_TIME={GAME_TIME}
    ERROR_COUNTING={ERROR_COUNTING}/>;
};

App.propTypes = {
  Settings: PropTypes.shape({
    GAME_TIME: PropTypes.number.isRequired,
    ERROR_COUNTING: PropTypes.number.isRequired,
  })
};

export default App;
