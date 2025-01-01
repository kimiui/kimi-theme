import type { CSSObject } from '@mui/material/styles';
/**
 * @usage
 * ...theme.mixins.textGradient(`to right, ${theme.vars.palette.text.primary}, ${alpha(theme.vars.palette.text.primary, 0.2)}`
 */
export declare function textGradient(color?: string): CSSObject;
/**
 * @usage
 * ...theme.mixins.maxLine({ line: 2, persistent: theme.typography.caption }),
 */
export type MediaFontSize = {
    [key: string]: {
        fontSize: React.CSSProperties['fontSize'];
    };
};
export type MaxLineProps = {
    line: number;
    persistent?: Partial<React.CSSProperties>;
};
export declare function maxLine({ line, persistent }: MaxLineProps): CSSObject;
