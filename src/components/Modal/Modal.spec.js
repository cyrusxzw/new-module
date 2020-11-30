// import React from 'react';
// import { render } from '@testing-library/react';
// import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Modal from './Modal';

jest.mock('react-dom');
// const mockFn = jest.fn();

describe('<Modal />', () => {
  // let modalRoot = null;

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  // beforeEach(() => {
  //   modalRoot = document.createElement('div');
  //   modalRoot.setAttribute('id', 'aesopModal');
  //
  //   document.body.append(modalRoot);
  // });

  it.todo('renders base component correctly');
});
