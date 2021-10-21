import { C as ComponentWithoutChildren } from './Component.types';
import { T as Themes } from './Themes.types';

declare type BreadcrumbItem = {
    label: string;
    id: string;
    url: string;
    title: string;
    dataTestRef?: string;
};
declare type BreadcrumbsProps = {
    className?: string;
    items?: BreadcrumbItem[];
    onHyperlinkClick?: (item: BreadcrumbItem) => void;
    theme?: Themes;
};
declare type BreadcrumbsType = ComponentWithoutChildren<BreadcrumbsProps>;

export { BreadcrumbsType as B, BreadcrumbItem as a };
