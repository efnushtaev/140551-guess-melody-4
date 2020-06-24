import React from 'react';
import PropTypes from 'prop-types';

class QuestionArtist extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  drawHeaderSection() {
    return <div className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370"/>
      </svg>

      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="wrong"></div>
      </div>
    </div>;
  }

  render() {
    const {question: {answers, src}, onAnswer} = this.props;
    return (
      <section className="game game--genre">
        {this.drawHeaderSection()}
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={src}></audio>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {answers.map((answer, i) => {
              return <div key={`${answer.artist} + i`} className="artist">
                <input className="artist__input visually-hidden"
                  onChange={() => onAnswer(answer)}
                  type="radio" name={`answer${i}`} value={answer.artist}
                  id={`answer${i}`} />
                <label className="artist__name" htmlFor={`answer${i}`}>
                  <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>;
            })}
          </form>
        </section>
      </section>
    );
  }
}

QuestionArtist.propTypes = {
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    src: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string,
      picture: PropTypes.string
    }))
  })
};

export default QuestionArtist;
