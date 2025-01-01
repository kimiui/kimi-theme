import type { NavMainProps } from '../types';
export type NavMobileProps = NavMainProps & {
    open: boolean;
    onClose: () => void;
    slots?: {
        topArea?: React.ReactNode;
        bottomArea?: React.ReactNode;
    };
};
export declare function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps): import("react/jsx-runtime").JSX.Element;
