import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { fileThumbnailClasses } from './classes';
import { fileData, fileThumb, fileFormat } from './utils';
import { RemoveButton, DownloadButton } from './action-buttons';
// ----------------------------------------------------------------------
export function FileThumbnail({ sx, file, tooltip, onRemove, imageView, slotProps, onDownload, ...other }) {
    const previewUrl = typeof file === 'string' ? file : URL.createObjectURL(file);
    const { name, path } = fileData(file);
    const format = fileFormat(path ?? previewUrl);
    const renderImg = (_jsx(Box, { component: "img", src: previewUrl, className: fileThumbnailClasses.img, sx: {
            width: 1,
            height: 1,
            objectFit: 'cover',
            borderRadius: 'inherit',
            ...slotProps?.img,
        } }));
    const renderIcon = (_jsx(Box, { component: "img", src: fileThumb(format), className: fileThumbnailClasses.icon, sx: { width: 1, height: 1, ...slotProps?.icon } }));
    const renderContent = (_jsxs(Stack, { component: "span", className: fileThumbnailClasses.root, sx: {
            width: 36,
            height: 36,
            flexShrink: 0,
            borderRadius: 1.25,
            alignItems: 'center',
            position: 'relative',
            display: 'inline-flex',
            justifyContent: 'center',
            ...sx,
        }, ...other, children: [format === 'image' && imageView ? renderImg : renderIcon, onRemove && (_jsx(RemoveButton, { onClick: onRemove, className: fileThumbnailClasses.removeBtn, sx: slotProps?.removeBtn })), onDownload && (_jsx(DownloadButton, { onClick: onDownload, className: fileThumbnailClasses.downloadBtn, sx: slotProps?.downloadBtn }))] }));
    if (tooltip) {
        return (_jsx(Tooltip, { arrow: true, title: name, slotProps: { popper: { modifiers: [{ name: 'offset', options: { offset: [0, -12] } }] } }, children: renderContent }));
    }
    return renderContent;
}
