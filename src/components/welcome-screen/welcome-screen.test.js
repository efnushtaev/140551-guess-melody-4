import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';

const GAME_TIME = 3;
const ERROR_COUNTING = 5;


describe(`welcomeScreenTest`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
        .create(<WelcomeScreen
          GAME_TIME={GAME_TIME}
          ERROR_COUNTING={ERROR_COUNTING}/>)
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

