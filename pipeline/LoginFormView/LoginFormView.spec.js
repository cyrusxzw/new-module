import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import LoginFormView from './LoginFormView';

configure({ adapter: new Adapter() });

describe('<LoginFormView />', () => {
  it('should be defined', () => {
    expect(LoginFormView).toBeDefined();
  });

  it('renders base component correctly', () => {
    const { container } = render
      .create(
        // @TODO Figure out how we are injecting translated copy from graphQL into components
        // @ts-ignore
        <LoginFormView
          copy={{
            submitLabel: 'Login',
            submitTitle: 'Login form submit button',
          }}
        />,
      )
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
