import React from 'react';
import { render, screen } from '@testing-library/react';
import { getEyebrowLevel, getSubHeadingLevel } from './SectionHeading.utils';
import { SectionHeading } from './SectionHeading';

describe('<SectionHeading />', () => {
  it('should present the correct heading text to the user', () => {
    render(
      <SectionHeading
        eyebrow="eyebrow-text"
        heading="heading-text"
        subHeading="subHeading-text"
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'heading-text' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'eyebrow-text' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'subHeading-text' }),
    ).toBeInTheDocument();
  });

  it('should not render the UI if the `eyebrow`, `heading` and `subHeading` props are not provided', () => {
    render(<SectionHeading />);

    expect(
      screen.queryByTestId(/data-testid-SectionHeading/i),
    ).not.toBeInTheDocument();
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
