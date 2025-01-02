import type { BreadcrumbsLinkProps } from './types';
type Props = {
    disabled: boolean;
    activeLast?: boolean;
    link: BreadcrumbsLinkProps;
};
export declare function BreadcrumbsLink({ link, activeLast, disabled }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
