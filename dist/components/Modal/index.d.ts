import { a as ComponentWithChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

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
declare type ModalType = ComponentWithChildren<ModalProps>;

declare const Modal: ModalType;

export { Modal };
