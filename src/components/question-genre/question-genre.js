import React from 'react';
import PropTypes from 'prop-types';

class QuestionGenre extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [false, true, false, false]
    };
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
    const {userAnswers} = this.state;
    const answers = question.answers;

    return (
      <section className="game game--genre">
        {this.drawHeaderSection()}
        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks">
            {answers.map((answer, i) => {
              return <div key={`${answer.genre} ${i}`} className="track">
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio src={answer.src}></audio>
                </div>
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer" checked={userAnswers[i]}
                    onChange={(e) => {
                      const value = e.target.checked;
                      this.setState((prevState) => (
                        {userAnswers: [...prevState.userAnswers.slice(0, i), value, ...prevState.userAnswers.slice(i + 1)]}
                      ));
                    }}
                    value={`answer${i}`}
                    id={`answer${i}`}/>
                  <label className="game__check" htmlFor={`answer${i}`}>Отметить</label>
                </div>
              </div>;
            })}

            <button className="game__submit button" type="submit" onClick={(e)=>{
              e.preventDefault();
              onAnswer(this.state.userAnswers);
            }}>Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

QuestionGenre.propTypes = {
  userAnswers: PropTypes.array,
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    type: PropTypes.string,
    artist: PropTypes.string,
    src: PropTypes.string,
    answers: PropTypes.array
  })
};

export default QuestionGenre;
