import React from 'react';
import renderer from 'react-test-renderer';
import Select from './Select';
import SelectFixture from './Select.fixture';

describe('<Select />', () => {
  it('should be defined', () => {
    expect(Select).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
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
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
