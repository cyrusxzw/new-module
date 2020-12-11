import React from 'react';
import { render } from '@testing-library/react';
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
});
