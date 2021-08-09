import React from 'react';
import { H as HyperlinkProps } from '../../sharedChunks/Hyperlink.types';
import '../../sharedChunks/Themes.types';

declare const Hyperlink: React.ForwardRefExoticComponent<HyperlinkProps & React.RefAttributes<HTMLAnchorElement>>;

export { Hyperlink };
