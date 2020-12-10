import React from 'react';
import { render, screen } from '@testing-library/react';
import AccordionFixture from './Accordion.fixture';
import Accordion from './Accordion';

jest.mock('react-accessible-accordion');

describe('<Accordion />', () => {
  it('should be defined', () => {
    expect(Accordion).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <Accordion
        id={AccordionFixture.id}
        items={AccordionFixture.items}
        theme={AccordionFixture.theme}
      />,
    );

    const accordion = screen.queryByTestId('data-testid-Accordion');

    expect(accordion).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should return `null` if the length of the `items` prop is 0', () => {
    render(<Accordion items={[]} />);

    const accordion = screen.queryByTestId('data-testid-Accordion');

    expect(accordion).not.toBeInTheDocument();
  });
});
