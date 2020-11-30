import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

jest.mock('uuid', () => {
  let value = 0;
  return {
    v4: () => value++,
  };
});

describe('<Icon />', () => {
  it('should be defined', () => {
    expect(Icon).toBeDefined();
  });

  it('renders base component correctly', () => {
    const tree = renderer.create(<Icon name="rightArrow" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders SVG with provided title prop correctly', () => {
    const tree = renderer
      .create(<Icon name="rightArrow" title="aesop" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Icon /> error handling.', () => {
  it('should return `null` if svg name is not found', () => {
    const { container } = render(<Icon name="foo" />);
    expect(container.firstChild).toBeNull();
  });
});
