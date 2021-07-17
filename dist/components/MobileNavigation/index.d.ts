import { C as ComponentWithoutChildren } from '../../sharedChunks/Component.types';
import { T as Themes } from '../../sharedChunks/Themes.types';
import 'react';

declare type SecondaryNavigationItems = (Trigger | Link)[];

declare type Clickable = {
    id: string;
    label: string;
    title: string;
};
declare type Link = Clickable & {
    url: string;
    type: 'link';
};
declare type Trigger = Clickable & {
    onClick: () => void;
    type: 'trigger';
};
declare type NestedCollection = Clickable & {
    items: Link[];
    type: 'nested-collection';
};
declare type Collection = Clickable & {
    items: (NestedCollection | Link)[];
    type: 'collection';
};
declare type MobileNavigationProps = {
    className?: string;
    isOpen: boolean;
    items: Collection[];
    onCloseButtonClick: () => void;
    secondaryItems?: SecondaryNavigationItems;
    theme?: Themes;
};
declare type MobileNavigationType = ComponentWithoutChildren<MobileNavigationProps>;

declare const MobileNavigation: MobileNavigationType;

export { MobileNavigation };
