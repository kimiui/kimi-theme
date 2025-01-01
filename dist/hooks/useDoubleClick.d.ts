export type UseDoubleClickReturn = (event: React.MouseEvent<HTMLElement>) => void;
type UseDoubleClickProps = {
    timeout?: number;
    click?: (e: React.SyntheticEvent) => void;
    doubleClick: (e: React.SyntheticEvent) => void;
};
export declare function useDoubleClick({ click, doubleClick, timeout, }: UseDoubleClickProps): UseDoubleClickReturn;
export {};
