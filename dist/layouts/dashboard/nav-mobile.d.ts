import type { NavSectionProps } from 'lib/components/nav-section';
type NavMobileProps = NavSectionProps & {
    open: boolean;
    onClose: () => void;
    slots?: {
        topArea?: React.ReactNode;
        bottomArea?: React.ReactNode;
    };
};
export declare function NavMobile({ data, open, onClose, slots, sx, ...other }: NavMobileProps): import("react/jsx-runtime").JSX.Element;
export {};
