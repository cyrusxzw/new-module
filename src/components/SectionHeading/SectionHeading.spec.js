import React from 'react';
import { render } from '@testing-library/react';
import { getEyebrowLevel, getSubHeadingLevel } from './SectionHeading.utils';
import { SectionHeading } from './SectionHeading';

describe('<SectionHeading />', () => {
  it('should render base component correctly', () => {
    const { container } = render(
      <SectionHeading
        heading="Title: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
        id="Anti-Oxidant"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with subHeading variation correctly', () => {
    const { container } = render(
      <SectionHeading
        heading="Heading: Fortification of the highest order."
        id="Parsley"
        subHeading="Subcopy: Parsley Seed Anti-Oxidant Facial Hydrating Cream 60mL"
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with subHeading and eyebrow variation correctly', () => {
    const { container } = render(
      <SectionHeading
        eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
        heading="Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
        id="Anti-Oxidant"
        subHeading="SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with subHeading, eyebrow variation, font family correctly', () => {
    const { container } = render(
      <SectionHeading
        eyebrow="Eyebrow: Offers fortification of the highest order against free radicals."
        heading="Heading: Fortification of the highest order. Parsley Seed Anti-Oxidant Facial Hydrating Cream."
        id="Anti-Oxidant"
        subHeading="SubHeading: Parsley Seed Cream. Intensely soothing, nourishing and hydrating, this elegant formulation contains a potent blend of botanicals that offer fortification of the highest order against free radicals."
        titleFont="Zapf"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

describe('SectionHeading.utils', () => {
  it('renders eyebrow as an `h2` if no `heading` prop is passed', () => {
    expect(getEyebrowLevel(undefined)).toEqual('2');
  });

  it('renders eyebrow as an `h3` if `heading` prop is passed', () => {
    expect(getEyebrowLevel('heading')).toEqual('3');
  });

  it('renders subHeading as an `h2` if no `eyebrow` or `heading` prop are passed', () => {
    expect(getSubHeadingLevel(undefined, undefined)).toEqual('2');
  });

  it('renders subHeading as an `h3` if `eyebrow` prop is passed but no `heading` prop is passed', () => {
    expect(getSubHeadingLevel('eyebrow', undefined)).toEqual('3');
  });

  it('renders subHeading as an `h3` if no `eyebrow` prop is passed but `heading` prop is passed', () => {
    expect(getSubHeadingLevel(undefined, 'heading')).toEqual('3');
  });

  it('renders subHeading as an `h4` if `eyebrow` and `heading` props are passed', () => {
    expect(getSubHeadingLevel('eyebrow', 'heading')).toEqual('4');
  });
});
