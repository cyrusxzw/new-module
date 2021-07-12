import React from 'react';
import { render, screen } from '@testing-library/react';
import { BodyCopy } from './BodyCopy';
import { SectionHeading } from '../SectionHeading';

jest.mock('../SectionHeading', () => {
  return {
    SectionHeading: jest.fn(() => null),
  };
});

describe('<BodyCopy />', () => {
  it(`should assign the id and classnames to the root element`, () => {
    const id = 'my-id';
    const className = 'class-body-copy';
    const theme = 'light';

    const {
      container: { firstChild: rootElement },
    } = render(<BodyCopy className={className} id={id} theme={theme} />);

    expect(rootElement).toHaveClass(className, theme);
    expect(rootElement).toHaveAttribute('id', id);
  });

  it(`should call SectionHeading with the correct props`, () => {
    const childrenClassNames = {
      eyebrow: 'why-is-an-element-called-eyebrow',
      heading: 'this-one-I-get',
      subHeading: 'cool',
    };
    const eyebrow = 'This is an Eyebrow';
    const hasSerifFontHeading = false;
    const heading = 'a heading';
    const id = 'id';
    const hasFlushHeading = true;
    const isHeroArticle = false;
    const subHeading = 'this is like a heading but sub';
    const theme = 'dark';
    const expectedProps = {
      childrenClassNames,
      eyebrow,
      hasSerifFontHeading,
      heading,
      id: `${id}-heading`,
      isFlush: hasFlushHeading,
      isPageHeading: isHeroArticle,
      subHeading,
      theme,
    };

    render(
      <BodyCopy
        childrenClassNames={childrenClassNames}
        eyebrow={eyebrow}
        hasFlushHeading={hasFlushHeading}
        hasSerifFontHeading={hasSerifFontHeading}
        heading={heading}
        id={id}
        isHeroArticle={isHeroArticle}
        subHeading={subHeading}
        theme={theme}
      />,
    );

    expect(SectionHeading).toHaveBeenLastCalledWith(
      expectedProps,
      expect.any(Object),
    );
  });

  it(`should render copy when it's provided`, () => {
    const copy = 'pre poo drops';

    render(<BodyCopy copy={copy} />);

    const copyElement = screen.getByText(copy);

    expect(copyElement).toBeInTheDocument();
    expect(copyElement).toHaveClass('copy');
  });

  it(`should render content when it's provided`, () => {
    const content = 'mid poo drops';

    render(<BodyCopy content={content} />);

    const contentElement = screen.getByText(content);

    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveClass('contentWrapper');
  });
});
