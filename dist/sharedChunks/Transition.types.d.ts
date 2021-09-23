import { ReactElement } from 'react';

declare type TransitionTypeLabel = 'fade' | 'fadeIn' | 'shiftInDown' | 'shiftInLeft' | 'shiftInUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slowFade' | 'fixed' | 'zoom';
declare type TransitionProps = {
    children: JSX.Element;
    isActive?: boolean;
    isActiveOnMount?: boolean;
    shouldMountOnEnter?: boolean;
    shouldUnmountOnExit?: boolean;
    type?: TransitionTypeLabel;
};
declare type TransitionType = (props: TransitionProps) => ReactElement | null;

export { TransitionTypeLabel as T, TransitionType as a };
