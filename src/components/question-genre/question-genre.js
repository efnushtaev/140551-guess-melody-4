import React from 'react';
import PropTypes from 'prop-types';

class QuestionGenre extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [false, true, false, false]
    };
  }

  render() {
    const {question: {answers}, onAnswer} = this.props;
    const {userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={() => onAnswer(this.state.userAnswers)}>
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

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenre.propTypes = {
  userAnswers: PropTypes.array,
  onAnswer: PropTypes.func,
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string,
      src: PropTypes.string
    }))
  })
};

export default QuestionGenre;
