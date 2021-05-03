import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccordionFixture } from './Accordion.fixture';
import { Accordion } from './Accordion';

describe('<Accordion />', () => {
  it('should return `null` if the length of the `items` prop is 0', () => {
    render(<Accordion items={[]} />);

    const accordion = screen.queryByTestId(/data-testid-Accordion/i);

    expect(accordion).not.toBeInTheDocument();
  });

  describe(`DOM attributes`, () => {
    let accordionWrapper: HTMLElement = null;

    const className = 'class1';
    const id = 'my-accordion-id';
    const theme = 'dark';
    const wrapperClass = 'the-great-cornholio';

    beforeEach(() => {
      accordionWrapper = render(
        <Accordion
          className={className}
          id={id}
          items={AccordionFixture.items}
          theme={theme}
          wrapperClass={wrapperClass}
        />,
      // eslint-disable-next-line testing-library/no-node-access
      ).container.firstChild as HTMLElement; // this is to access the root level element of the component
    });

    it(`should assign the wrapperClass to the wrapping div`, () => {
      expect(accordionWrapper).toHaveClass(wrapperClass);
    });

    it(`should assign the id to the wrapping div`, () => {
      expect(accordionWrapper).toHaveAttribute('id', id);
    });

    it(`should correctly set the classes on the Accordion`, () => {
      // eslint-disable-next-line testing-library/no-node-access
      expect(accordionWrapper.firstChild).toHaveClass(theme, className);
    });
  });

  describe(`Headings`, () => {
    let headings: HTMLElement[] = null;

    beforeEach(() => {
      render(<Accordion items={AccordionFixture.items} />);

      headings = screen.getAllByRole('heading');
    });

    it(`should render the correct number of headings`, () => {
      expect(headings.length).toEqual(3);
    });

    it(`should render with the correct heading text`, () => {
      AccordionFixture.items.forEach(({ heading }, index) => {
        expect(headings[index]).toHaveTextContent(heading);
      });
    });
  });

  describe(`Content`, () => {
    let contentSections: HTMLElement[] = null;

    beforeEach(() => {
      render(<Accordion items={AccordionFixture.items} />);
      contentSections = screen.getAllByTestId('Accordion-content-section');
    });

    it(`should load with all the content hidden`, () => {
      contentSections.forEach(contentSection => {
        expect(contentSection).toBeInTheDocument();
        expect(contentSection).not.toBeVisible();
      });
    });

    it(`should expand/collapse a section when the heading is clicked`, () => {
      const sectionIndex = 0;
      const firstSectionButton = screen.getByRole('button', {
        name: new RegExp(AccordionFixture.items[sectionIndex].heading, 'i'),
      });
      const contentSection = screen.getAllByTestId('Accordion-content-section')[
        sectionIndex
      ];

      userEvent.click(firstSectionButton);
      expect(contentSection).toBeVisible();
      userEvent.click(firstSectionButton);
      expect(contentSection).not.toBeVisible();
    });
  });
});
