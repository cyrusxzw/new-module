import { FC } from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type ModalBodyCopy = {
    copy?: {
        close?: string;
    };
};

declare type ModalAndModalBodyProps = {
    className?: string;
    isVisible: boolean;
    onClose: () => void;
    theme?: Themes;
};
declare type ModalProps = ModalAndModalBodyProps & ModalBodyCopy;

declare const Modal: FC<ModalProps>;

export { Modal };
