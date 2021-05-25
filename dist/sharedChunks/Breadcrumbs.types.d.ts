import { T as Themes } from './Themes.types';

declare type BreadcrumbItem = {
    label: string;
    id: string;
    url: string;
    title: string;
};
declare type BreadcrumbsProps = {
    className?: string;
    items?: BreadcrumbItem[];
    onHyperlinkClick?: (item: BreadcrumbItem) => void;
    theme?: Themes;
};

export { BreadcrumbsProps as B, BreadcrumbItem as a };
