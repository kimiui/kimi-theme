type ScrollElValue = {
    scrollWidth: number;
    scrollHeight: number;
};
type DOMRectValue = {
    top: number;
    right: number;
    bottom: number;
    left: number;
    x: number;
    y: number;
    width: number;
    height: number;
};
export type UseClientRectReturn = DOMRectValue & ScrollElValue & {
    elementRef: React.RefObject<HTMLDivElement>;
};
export declare function useClientRect(inputRef?: React.RefObject<HTMLDivElement>): UseClientRectReturn;
export {};
