/* eslint-disable react/prop-types */
import React from 'react';
import WelcomeScreen from '../main/welcome-screen';

const App = ({Settings}) => {
  const {GAME_TIME, ERROR_COUNTING} = Settings;
  return <WelcomeScreen
    GAME_TIME={GAME_TIME}
    ERROR_COUNTING={ERROR_COUNTING}/>;
};

export default App;
