import type { ComponentWithChildren } from '~/types';
import type { ModalAndModalBodyProps } from '../../Modal.types';

type ModalBodyCopy = {
  copy?: {
    close?: string;
  };
};

type ModalBodyProps = ModalBodyCopy & ModalAndModalBodyProps;

type ModalBodyType = ComponentWithChildren<ModalBodyProps>;

export type { ModalBodyCopy, ModalBodyProps, ModalBodyType };
