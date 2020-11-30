import React from 'react';
import renderer from 'react-test-renderer';
import ModalBodyFixture from './components/ModalBody/ModalBody.fixture';
import Modal from './Modal';

jest.mock('react-dom');
const mockFn = jest.fn();

describe('<Modal />', () => {
  let modalRoot = null;

  it('should be defined', () => {
    expect(Modal).toBeDefined();
  });

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'aesopModal');

    document.body.append(modalRoot);
  });

  it('renders base component correctly', () => {
    const tree = renderer
      .create(
        <Modal
          copy={ModalBodyFixture.copy}
          isVisible={true}
          onClose={mockFn}
          portalId="aesopModal"
        >
          content
        </Modal>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
