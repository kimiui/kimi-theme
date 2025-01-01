export type UseSetStateReturn<T> = {
    state: T;
    canReset: boolean;
    onResetState: () => void;
    setState: (updateState: T | Partial<T>) => void;
    setField: (name: keyof T, updateValue: T[keyof T]) => void;
};
export declare function useSetState<T>(initialState: T): UseSetStateReturn<T>;
