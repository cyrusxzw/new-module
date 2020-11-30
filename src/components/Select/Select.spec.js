import React from 'react';
import { render } from '@testing-library/react';
import Select from './Select';
import SelectFixture from './Select.fixture';

describe('<Select />', () => {
  it('should be defined', () => {
    expect(Select).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render(
      <Select
        className={SelectFixture.className}
        errorMessage={SelectFixture.errorMessage}
        label={SelectFixture.label}
        name={SelectFixture.name}
        onBlur={SelectFixture.onBlur}
        onChange={SelectFixture.onChange}
        onFocus={SelectFixture.onFocus}
        options={SelectFixture.options}
        testReference={SelectFixture.testReference}
        value={SelectFixture.value}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
