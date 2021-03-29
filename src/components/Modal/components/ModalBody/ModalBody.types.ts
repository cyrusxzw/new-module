import { ModalAndModalBodyProps } from '../../Modal.types';

type ModalBodyCopy = {
  copy?: {
    close?: string;
  };
};

type ModalBodyProps = ModalBodyCopy & ModalAndModalBodyProps;

export type { ModalBodyProps, ModalBodyCopy };
