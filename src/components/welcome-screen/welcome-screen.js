import React from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({GAME_TIME, ERROR_COUNTING}) => {
  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>
    <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {GAME_TIME} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {ERROR_COUNTING} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

WelcomeScreen.propTypes = {
  GAME_TIME: PropTypes.number.isRequired,
  ERROR_COUNTING: PropTypes.number.isRequired
};


export default WelcomeScreen;
