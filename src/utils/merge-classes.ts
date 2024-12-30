export function mergeClasses(
  baseClasses: (string | undefined | null)[],
  conditionalClasses: { [key: string]: boolean }
): string {
  const base = baseClasses.filter(Boolean).join(' ');
  const conditional = Object.keys(conditionalClasses)
    .filter((key) => conditionalClasses[key])
    .join(' ');

  return [base, conditional].filter(Boolean).join(' ');
}
/**
 * Utility to merge multiple refs into one.
 * This ensures all refs receive the correct reference.
 */
export function mergeRefs<T>(refs: Array<React.Ref<T> | undefined | null>): React.RefCallback<T> {
  return (value: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(value);
      } else if ('current' in ref) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
