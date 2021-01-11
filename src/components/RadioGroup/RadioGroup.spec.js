import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { RadioGroup } from './RadioGroup';
import { RadioGroupFixture } from './RadioGroup.fixture';

describe('<RadioGroup />', () => {
  it('should be defined', () => {
    expect(RadioGroup).toBeDefined();
  });

  it('should render base component correctly', () => {
    const { container } = render(
      <RadioGroup
        className={RadioGroupFixture.className}
        dataTestRef={RadioGroupFixture.dataTestRef}
        errorMessage={RadioGroupFixture.errorMessage}
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={RadioGroupFixture.options}
        value={RadioGroupFixture.value}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should return correct number of items', () => {
    const itemCount = RadioGroupFixture.options.length;

    render(
      <RadioGroup
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={RadioGroupFixture.options}
      />,
    );

    const list = screen.getByRole('list');
    const items = screen.getAllByRole('listitem');

    expect(list).toBeInTheDocument();
    expect(items).toHaveLength(itemCount);
  });

  it('should return null if there are no radio items', () => {
    render(
      <RadioGroup
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={[]}
      />,
    );

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('should return one item ...', () => {
    render(
      <RadioGroup
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={[
          {
            value: 'test-label',
            label: 'test label',
          },
        ]}
      />,
    );

    expect(screen.getByText(/test label/i)).toBeInTheDocument();
  });

  it('should show error message on error', () => {
    render(
      <RadioGroup
        errorMessage="error message"
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={[
          {
            value: 'test-label',
            label: 'test label',
          },
        ]}
      />,
    );

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });

  it('should be accesible', async () => {
    const { container } = render(
      <RadioGroup
        name={RadioGroupFixture.name}
        onChange={RadioGroupFixture.onChange}
        options={RadioGroupFixture.options}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
