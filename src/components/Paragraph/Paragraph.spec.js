import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph, ParagraphSet } from './Paragraph';

describe('<Paragraph />', () => {
  it('should be defined', () => {
    expect(Paragraph).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Paragraph>
        A lightweight, vitamin C-rich layering serum that soothes, replenishes
        and balances skin with its complex blend of anti-oxidant, hydrating
        conditioning ingredients.
      </Paragraph>,
    );

    expect(container).toMatchSnapshot();
  });
});

describe('<ParagraphSet />', () => {
  it('renders a given collection of `p` tags', () => {
    const { container } = render(
      <ParagraphSet>
        <p>A lightweight, vitamin C-rich layering serum that soothes</p>
        <p>
          Replenishes and balances skin with its complex blend of anti-oxidant,
          hydrating and conditioning ingredients.
        </p>
      </ParagraphSet>,
    );

    expect(container).toMatchSnapshot();
  });
});
