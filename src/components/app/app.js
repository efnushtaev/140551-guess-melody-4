/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {GameType} from './../../constants';
import WelcomeScreen from './../welcome-screen/welcome-screen';
import QuestionArtist from './../question-artist/question-artist';
import QuestionGenre from './../question-genre/question-genre';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: -1
    };
  }

  drawGameScreen() {
    const {settings} = this.props;
    const {GAME_TIME, ERROR_COUNTING} = settings;
    const {questions} = this.props;
    const {screen} = this.state;
    const question = questions[screen];

    if (screen === -1 || screen >= questions.length) {
      return <WelcomeScreen
        gameTime={GAME_TIME}
        errorCounting={ERROR_COUNTING}
        onWelcomeButtonClick= {() => this.setState({screen: 0})}
      />;
    } else if (question) {
      switch (question.type) {
        case GameType.GENRE:
          return (
            <QuestionGenre
              question={question}
              onAnswer={(answer) => {
                console.log(`answer: ${JSON.stringify(answer)}`);
                console.log(`question: ${JSON.stringify(question)}`);
                this.setState((prevState) => ({screen: prevState.screen + 1}));
              }}
            />
          );
        case GameType.ARTIST:
          return (
            <QuestionArtist
              question={question}
              onAnswer={(answer) => {
                console.log(`answer: ${JSON.stringify(answer)}`);
                console.log(`question: ${JSON.stringify(question)}`);
                this.setState((prevState) => ({screen: prevState.screen + 1}));
              }}
            />
          );
      }
    }
    return null;
  }

  render() {
    const {questions} = this.props;
    const {screen} = this.state;
    const question = questions[screen];
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'
            render={() => this.drawGameScreen()}
          />
          <Route exact path='/question-artist'
            render={() => <QuestionArtist
              question={question}
              onAnswer={() => {}}
            />}
          />
          <Route exact path='/question-genre'
            render={() => <QuestionGenre
              question={question}
              onAnswer={() => {}}
            />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  settings: PropTypes.shape({
    GAME_TIME: PropTypes.number.isRequired,
    ERROR_COUNTING: PropTypes.number.isRequired,
  }),
  questions: PropTypes.arrayOf(PropTypes.object),
  screen: PropTypes.number
};

export default App;
