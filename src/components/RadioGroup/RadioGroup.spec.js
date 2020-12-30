import React from 'react';
import { render } from '@testing-library/react';
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

  it('should be accesible', async () => {
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

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
