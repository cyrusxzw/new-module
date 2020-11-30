import React from 'react';
import renderer from 'react-test-renderer';
import Paragraph, { ParagraphSet } from './Paragraph';

describe('<Paragraph />', () => {
  it('should be defined', () => {
    expect(Paragraph).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Paragraph>
          A lightweight, vitamin C-rich layering serum that soothes, replenishes
          and balances skin with its complex blend of anti-oxidant, hydrating
          and conditioning ingredients.
        </Paragraph>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ParagraphSet />', () => {
  it('renders a given collection of `p` tags', () => {
    const tree = renderer
      .create(
        <ParagraphSet>
          <p>A lightweight, vitamin C-rich layering serum that soothes</p>
          <p>
            Replenishes and balances skin with its complex blend of
            anti-oxidant, hydrating and conditioning ingredients.
          </p>
        </ParagraphSet>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
