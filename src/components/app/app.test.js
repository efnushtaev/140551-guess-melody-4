/* eslint-disable no-alert */
import React from 'react';
import renderer from 'react-test-renderer';
import {describe, expect, it} from '@jest/globals';
import {MemoryRouter} from 'react-router-dom';
import QuestionArtist from '../question-artist/question-artist';
import QuestionGenre from '../question-genre/question-genre';

const questions = [{
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
    },
  ]
},
{
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
}
];

describe(`appTest`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <QuestionArtist
              question={questions[0]}
              onAnswer={() => {}}
            />
            <QuestionGenre
              question={questions[1]}
              onAnswer={() => {}}
            />
          </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
