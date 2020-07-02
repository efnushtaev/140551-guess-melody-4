import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen";
import {GameType} from "../../constants.js";
import {describe, expect, it} from '@jest/globals';

const children = <div className="children-component" />;

describe(`GameScreen component render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <GameScreen
          gameType={GameType.ARTIST}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <GameScreen
          gameType={GameType.GENRE}
        >
          {children}
        </GameScreen>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
