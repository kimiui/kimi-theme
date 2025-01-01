export declare function mergeClasses(baseClasses: (string | undefined | null)[], conditionalClasses: {
    [key: string]: boolean;
}): string;
/**
 * Utility to merge multiple refs into one.
 * This ensures all refs receive the correct reference.
 */
export declare function mergeRefs<T>(refs: Array<React.Ref<T> | undefined | null>): React.RefCallback<T>;
