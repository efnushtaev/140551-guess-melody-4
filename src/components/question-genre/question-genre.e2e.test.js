import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import QuestionGenre from './question-genre.js';
import {expect, it} from '@jest/globals';

configure({adapter: new Adapter()});

const mock = {
  type: `genre`,
  genre: `indie`,
  answers: [
    {
      genre: `hard`,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/53/BWV_543-prelude.ogg`
    },
    {
      genre: `blues`,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/53/BWV_543-prelude.ogg`
    },
    {
      genre: `indie`,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/53/BWV_543-prelude.ogg`
    },
    {
      genre: `jazz`,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/53/BWV_543-prelude.ogg`
    }
  ]
};


it(`no answers`, () => {
  const onAnswer = jest.fn();
  const tree = shallow(<QuestionGenre
    question={mock}
    onAnswer={onAnswer}
    renderPlayer={()=>{}}
  />);
  tree.find(`form`).simulate(`submit`, {PreventDefault: () => {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);
});

it(`one answer`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const tree = shallow(<QuestionGenre
    question={mock}
    onAnswer={onAnswer}
    renderPlayer={()=>{}}
  />);
  const userAnswers = [false, true, false, false];

  tree.find(`form`).simulate(`submit`, {PreventDefault: () => {}});
  tree.find(`input`).at(1).simulate(`change`, {target: {checked: true}});
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toEqual(userAnswers);
});
