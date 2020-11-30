import React from 'react';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import AuxOpenCartButton from './AuxOpenCartButton';

const mockFn = jest.fn();

describe('<AuxOpenCartButton />', () => {
  it('should be defined', () => {
    expect(AuxOpenCartButton).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(
      <AuxOpenCartButton handleShow={mockFn} />,
    );

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(container).toMatchSnapshot();
      });
    });
  });
});
