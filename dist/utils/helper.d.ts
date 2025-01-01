/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_flatten
 * https://github.com/you-dont-need-x/you-dont-need-lodash
 */
export declare function flattenArray<T>(list: T[], key?: string): T[];
export declare function flattenDeep(array: any): any[];
export declare function orderBy<T>(array: T[], properties: (keyof T)[], orders?: ('asc' | 'desc')[]): T[];
export declare function keyBy<T>(array: T[], key: keyof T): {
    [key: string]: T;
};
export declare function sumBy<T>(array: T[], iteratee: (item: T) => number): number;
export declare function isEqual(a: any, b: any): boolean;
export declare const merge: (target: any, ...sources: any[]) => any;
export declare const hasParams: (url?: string) => boolean;
export declare function removeLastSlash(pathname: string): string;
export declare function removeParams(url: string): string;
export declare function isExternalLink(url?: string): boolean;
