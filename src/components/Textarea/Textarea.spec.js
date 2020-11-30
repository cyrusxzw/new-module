import React from 'react';
import renderer from 'react-test-renderer';
import Textarea from './Textarea';

describe('<Textarea />', () => {
  it('should be defined', () => {
    expect(Textarea).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(<Textarea dataTestRef="test-data-ref" id="test-textarea" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
