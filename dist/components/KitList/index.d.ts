import React from 'react';
import { T as Themes } from '../../sharedChunks/Themes.types';
import { L as ListItem } from '../../sharedChunks/List.types';

declare type KitListProps = {
    className?: string;
    isVisible?: boolean;
    items: ListItem[];
    theme?: Themes;
};

/** @TODO replace the `any` in the forwardRef type
 * Following our forwardRef tyings, this first value should be HTMLUListElement (based on typeof List)
 * However, due to https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref/58473012
 * this does not work, and if List's return type changes, this static type will break
 */
declare const KitList: React.ForwardRefExoticComponent<KitListProps & React.RefAttributes<any>>;

export { KitList };
