import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {describe, expect, it} from '@jest/globals';

const Settings = {
  GAME_TIME: 3,
  ERROR_COUNTING: 5
};

describe(`appTest`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<App settings={Settings}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
