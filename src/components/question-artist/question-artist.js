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
    const {question, onAnswer} = this.props;
    const answers = question.answers;

    return (
      <section className="game game--genre">
        {this.drawHeaderSection()}
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={question.src}></audio>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {answers.map((answer, i) => {
              return <div key={answer.artist + i} className="artist" onClick={(e)=>{
                e.preventDefault();
                onAnswer(answer, question);
              }}>
                <input className="artist__input visually-hidden"
                  type="radio" name="answer" value={answer.artist + i}
                  id={answer.artist + i} />
                <label className="artist__name" htmlFor="answer-1">
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
    artist: PropTypes.string,
    src: PropTypes.string,
    answers: PropTypes.array
  })
};

export default QuestionArtist;
