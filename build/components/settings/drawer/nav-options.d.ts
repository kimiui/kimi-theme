import type { ButtonBaseProps } from '@mui/material/ButtonBase';
import type { SettingsState } from '../types';
type Props = {
    value: {
        color: SettingsState['navColor'];
        layout: SettingsState['navLayout'];
    };
    options: {
        colors: SettingsState['navColor'][];
        layouts: SettingsState['navLayout'][];
    };
    onClickOption: {
        color: (newValue: SettingsState['navColor']) => void;
        layout: (newValue: SettingsState['navLayout']) => void;
    };
    hideNavColor?: boolean;
    hideNavLayout?: boolean;
};
export declare function NavOptions({ options, value, onClickOption, hideNavColor, hideNavLayout, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
type OptionProps = ButtonBaseProps & {
    option: string;
    selected: boolean;
};
export declare function LayoutOption({ option, selected, sx, ...other }: OptionProps): import("react/jsx-runtime").JSX.Element;
export declare function ColorOption({ option, selected, sx, ...other }: OptionProps): import("react/jsx-runtime").JSX.Element;
export {};
