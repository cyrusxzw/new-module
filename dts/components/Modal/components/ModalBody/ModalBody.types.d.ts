import { ModalAndModalBodyProps } from '../../Modal.types';
declare type ModalBodyCopy = {
  copy?: {
    close?: string;
  };
};
declare type ModalBodyProps = ModalBodyCopy & ModalAndModalBodyProps;
export type { ModalBodyProps, ModalBodyCopy };
