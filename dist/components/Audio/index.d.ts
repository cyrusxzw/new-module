import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import 'react';

declare type ProgressColor = 'orange' | 'green' | 'blue';
declare type AudioCopy = {
    downloadLabel?: string;
    downloadTitle?: string;
    loading?: string;
    pause?: string;
    play?: string;
    seekBackward?: string;
    seekForward?: string;
};
declare type AudioProps = {
    audioUrl?: string;
    artistName?: string;
    className?: string;
    copy?: AudioCopy;
    hasAutoPlay?: boolean;
    id?: string;
    progressColor?: ProgressColor;
    trackTitle?: string;
};
declare type AudioType = ComponentWithoutChildren<AudioProps>;

declare const Audio: AudioType;

export { Audio };
