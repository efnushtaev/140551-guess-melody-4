import React from 'react';
import PropTypes from 'prop-types';

class QuestionArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true
    };
  }

  render() {
    const {question: {answers, src}, onAnswer, renderPlayer} = this.props;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(src, 0)}
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
  }),
  renderPlayer: PropTypes.func.isRequired
};

export default QuestionArtist;
