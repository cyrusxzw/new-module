import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';
import MessageFixture from './Message.fixture';

describe('<Message />', () => {
  it('should be defined', () => {
    expect(Message).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Message {...MessageFixture} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
