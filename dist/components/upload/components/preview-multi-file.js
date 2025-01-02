import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import { varAlpha } from '../../../theme/styles';
import { fData } from '../../../utils/format-number';
import { Iconify } from '../../iconify';
import { fileData, FileThumbnail } from '../../file-thumbnail';
// ----------------------------------------------------------------------
export function MultiFilePreview({ sx, onRemove, lastNode, thumbnail, slotProps, firstNode, files = [], }) {
    const renderFirstNode = firstNode && (_jsx(Box, { component: "li", sx: {
            ...(thumbnail && {
                width: 'auto',
                display: 'inline-flex',
            }),
        }, children: firstNode }));
    const renderLastNode = lastNode && (_jsx(Box, { component: "li", sx: {
            ...(thumbnail && { width: 'auto', display: 'inline-flex' }),
        }, children: lastNode }));
    return (_jsxs(Box, { component: "ul", sx: {
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
            ...(thumbnail && {
                flexWrap: 'wrap',
                flexDirection: 'row',
            }),
            ...sx,
        }, children: [renderFirstNode, files.map((file) => {
                const { name, size } = fileData(file);
                if (thumbnail) {
                    return (_jsx(Box, { component: "li", sx: { display: 'inline-flex' }, children: _jsx(FileThumbnail, { tooltip: true, imageView: true, file: file, onRemove: () => onRemove?.(file), sx: {
                                width: 80,
                                height: 80,
                                border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                            }, slotProps: { icon: { width: 36, height: 36 } }, ...slotProps?.thumbnail }) }, name));
                }
                return (_jsxs(Box, { component: "li", sx: {
                        py: 1,
                        pr: 1,
                        pl: 1.5,
                        gap: 1.5,
                        display: 'flex',
                        borderRadius: 1,
                        alignItems: 'center',
                        border: (theme) => `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
                    }, children: [_jsx(FileThumbnail, { file: file, ...slotProps?.thumbnail }), _jsx(ListItemText, { primary: name, secondary: fData(size), secondaryTypographyProps: {
                                component: 'span',
                                typography: 'caption',
                            } }), onRemove && (_jsx(IconButton, { size: "small", onClick: () => onRemove(file), children: _jsx(Iconify, { icon: "mingcute:close-line", width: 16 }) }))] }, name));
            }), renderLastNode] }));
}
