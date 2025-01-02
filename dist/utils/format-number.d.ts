export type InputNumberValue = string | number | null | undefined;
type Options = Intl.NumberFormatOptions | undefined;
export declare function fNumber(inputValue: InputNumberValue, options?: Options): string;
export declare function fCurrency(inputValue: InputNumberValue, options?: Options): string;
export declare function fPercent(inputValue: InputNumberValue, options?: Options): string;
export declare function fShortenNumber(inputValue: InputNumberValue, options?: Options): string;
export declare function fData(inputValue: InputNumberValue): string;
export {};
