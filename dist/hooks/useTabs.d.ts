export type UseTabsReturn = {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: React.SyntheticEvent, newValue: string) => void;
};
export declare function useTabs(defaultValue: string): UseTabsReturn;
