import React__default from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';

declare type QuoteProps = {
    author: string;
    className?: string;
    content: string;
    theme?: Themes;
};

declare const Quote: React__default.ForwardRefExoticComponent<QuoteProps & React__default.RefAttributes<HTMLDivElement>>;

export { Quote };
