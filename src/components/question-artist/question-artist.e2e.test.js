import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionArtist from './question-artist.js';
import {describe, expect, it} from '@jest/globals';

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  type: `artist`,
  title: `Кто исполняет эту песню?`,
  src: `https://upload.wikimedia.org/wikipedia/commons/5/53/BWV_543-prelude.ogg`,
  answers: [
    {
      artist: `Пелагея`,
      picture: `https://smk.org.uk/wp-content/uploads/avatar.jpg`
    },
    {
      artist: `Краснознамённая дивизия имени моей бабушки`,
      picture: `https://smk.org.uk/wp-content/uploads/avatar.jpg`
    },
    {
      artist: `Lorde`,
      picture: `https://smk.org.uk/wp-content/uploads/avatar.jpg`
    }]
};

describe(`QuestionArtist`, () => {
  it(`Answer passed via callback should be according to props`, () => {
    const onAnswer = jest.fn();
    const tree = shallow(<QuestionArtist
      onAnswer={onAnswer} question={mock}/>);

    const input = tree.find(`input`).at(1);

    input.simulate(`change`);

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer.mock.calls[0][0]).toEqual(mock.answers[1]);
  });
});
