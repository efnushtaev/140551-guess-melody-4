import React from 'react';
import WelcomeScreen from './../welcome-screen/welcome-screen';
import PropTypes from 'prop-types';

const App = ({settings}) => {

  const {GAME_TIME, ERROR_COUNTING} = settings;
  return <WelcomeScreen
    GAME_TIME={GAME_TIME}
    ERROR_COUNTING={ERROR_COUNTING}/>;
};

App.propTypes = {
  settings: PropTypes.shape({
    GAME_TIME: PropTypes.number.isRequired,
    ERROR_COUNTING: PropTypes.number.isRequired,
  })
};

export default App;
