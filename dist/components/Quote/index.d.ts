import React from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type QuoteProps = {
    author: string;
    className?: string;
    content: string;
    theme?: Themes;
};

declare const Quote: React.ForwardRefExoticComponent<QuoteProps & React.RefAttributes<HTMLDivElement>>;

export { Quote };
