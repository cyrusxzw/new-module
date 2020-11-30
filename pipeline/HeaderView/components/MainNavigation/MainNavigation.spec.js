import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import MainNavigation from './MainNavigation';

configure({ adapter: new Adapter() });

describe('<MainNavigation />', () => {
  it('should be defined', () => {
    expect(MainNavigation).toBeDefined();
  });

  it('renders base component correctly', async () => {
    const component = renderer.create(<MainNavigation />);

    await act(async () => {
      await waitForExpect(() => {
        const tree = component.toJSON();
        expect(container).toMatchSnapshot();
      });
    });
  });
});
