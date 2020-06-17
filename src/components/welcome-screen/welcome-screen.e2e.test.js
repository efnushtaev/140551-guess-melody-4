import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';
import {describe, expect, it} from '@jest/globals';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`welcomeScreen`, () => {
  it(`Welcome button should be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          gameTime = {5}
          errorCounting = {3}
          onWelcomeButtonClick = {onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);
    welcomeButton.simulate(`click`);

    expect(onWelcomeButtonClick).toHaveBeenCalledTimes(1);
  });
});
