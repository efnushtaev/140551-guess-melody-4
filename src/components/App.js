/* eslint-disable react/prop-types */
import React from 'react';
import WelcomeScreen from './welcome-screen';

const App = ({settings}) => {
  const {gameTime, errorCount} = settings;
  return <WelcomeScreen
    gameTime={gameTime}
    errorCount={errorCount}/>;
};

export default App;
