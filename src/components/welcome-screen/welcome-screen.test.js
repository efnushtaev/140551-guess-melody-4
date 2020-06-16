import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';

const GAME_TIME = 3;
const ERROR_COUNTING = 5;
const onWelcomeButtonClick = jest.fn();

describe(`welcomeScreenTest`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
        .create(<WelcomeScreen
          onWelcomeButtonClick={onWelcomeButtonClick}
          gameTime={GAME_TIME}
          errorCounting={ERROR_COUNTING}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

