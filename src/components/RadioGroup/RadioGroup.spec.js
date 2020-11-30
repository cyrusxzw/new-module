import React from 'react';
import renderer from 'react-test-renderer';
import RadioGroup from './RadioGroup';
import RadioGroupFixture from './RadioGroup.fixture';

describe('<RadioGroup />', () => {
  it('should be defined', () => {
    expect(RadioGroup).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <RadioGroup
          className={RadioGroupFixture.className}
          dataTestRef={RadioGroupFixture.dataTestRef}
          errorMessage={RadioGroupFixture.errorMessage}
          name={RadioGroupFixture.name}
          onChange={RadioGroupFixture.onChange}
          options={RadioGroupFixture.options}
          value={RadioGroupFixture.value}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
