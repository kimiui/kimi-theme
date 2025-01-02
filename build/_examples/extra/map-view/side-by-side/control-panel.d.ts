export type ModeProps = 'side-by-side' | 'split-screen';
type Props = {
    mode: ModeProps;
    onModeChange: (event: React.MouseEvent<HTMLElement>, newMode: ModeProps | null) => void;
};
export declare function ControlPanel({ mode, onModeChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
