import React from 'react';
import { render } from '@testing-library/react';
import { BodyCopy } from './BodyCopy';
import { BodyCopyFixture } from './BodyCopy.fixture';

describe('<BodyCopy />', () => {
  it('should be defined', () => {
    expect(BodyCopy).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <BodyCopy
        content={<div>{BodyCopyFixture.linkButtonGroup.children}</div>}
        copy="Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        eyebrow="Recommended Nearby"
        heading="Aesop & The Paris Review: A Partnership Extended"
        id="Anti-Oxidant"
        subHeading="Active Nutrients"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('does not render content when no `content` prop supplied', () => {
    const { container } = render(
      <BodyCopy
        copy="Parsley Seed Cream. [The Paris Review](http://theparisreview.org) Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        eyebrow="Recommended Nearby"
        heading="Aesop & The Paris Review: A Partnership Extended"
        id="Anti-Oxidant"
        subHeading="Active Nutrients"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` prop is passed', () => {
    const { container } = render(
      <BodyCopy heading="Aesop & The Paris Review: A Partnership Extended" />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders promary title as an `h2` if no `eyebrow` or `primaryTitle` prop are passed', () => {
    const { container } = render(
      <BodyCopy subHeading="Aesop & The Paris Review: A Partnership Extended" />,
    );

    expect(container).toMatchSnapshot();
  });
});
