export type UseLocalStorageReturn<T> = {
    state: T;
    canReset: boolean;
    resetState: () => void;
    setState: (updateState: T | Partial<T>) => void;
    setField: (name: keyof T, updateValue: T[keyof T]) => void;
};
export declare function useLocalStorage<T>(key: string, initialState: T): UseLocalStorageReturn<T>;
export declare function getStorage(key: string): any;
export declare function setStorage<T>(key: string, value: T): void;
export declare function removeStorage(key: string): void;
