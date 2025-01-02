import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDropzone } from 'react-dropzone';
import FormHelperText from '@mui/material/FormHelperText';
import { varAlpha } from '../../theme/styles';
import { Iconify } from '../iconify';
import { UploadPlaceholder } from './components/placeholder';
import { RejectionFiles } from './components/rejection-files';
import { MultiFilePreview } from './components/preview-multi-file';
import { DeleteButton, SingleFilePreview } from './components/preview-single-file';
// ----------------------------------------------------------------------
export function Upload({ sx, value, error, disabled, onDelete, onUpload, onRemove, thumbnail, helperText, onRemoveAll, multiple = false, ...other }) {
    const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
        multiple,
        disabled,
        ...other,
    });
    const isArray = Array.isArray(value) && multiple;
    const hasFile = !isArray && !!value;
    const hasFiles = isArray && !!value.length;
    const hasError = isDragReject || !!error;
    const renderMultiPreview = hasFiles && (_jsxs(_Fragment, { children: [_jsx(MultiFilePreview, { files: value, thumbnail: thumbnail, onRemove: onRemove, sx: { my: 3 } }), (onRemoveAll || onUpload) && (_jsxs(Stack, { direction: "row", justifyContent: "flex-end", spacing: 1.5, children: [onRemoveAll && (_jsx(Button, { color: "inherit", variant: "outlined", size: "small", onClick: onRemoveAll, children: "Remove all" })), onUpload && (_jsx(Button, { size: "small", variant: "contained", onClick: onUpload, startIcon: _jsx(Iconify, { icon: "eva:cloud-upload-fill" }), children: "Upload" }))] }))] }));
    return (_jsxs(Box, { sx: { width: 1, position: 'relative', ...sx }, children: [_jsxs(Box, { ...getRootProps(), sx: {
                    p: 5,
                    outline: 'none',
                    borderRadius: 1,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                    border: (theme) => `1px dashed ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
                    transition: (theme) => theme.transitions.create(['opacity', 'padding']),
                    '&:hover': { opacity: 0.72 },
                    ...(isDragActive && { opacity: 0.72 }),
                    ...(disabled && { opacity: 0.48, pointerEvents: 'none' }),
                    ...(hasError && {
                        color: 'error.main',
                        borderColor: 'error.main',
                        bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
                    }),
                    ...(hasFile && { padding: '28% 0' }),
                }, children: [_jsx("input", { ...getInputProps() }), hasFile ? _jsx(SingleFilePreview, { file: value }) : _jsx(UploadPlaceholder, {})] }), hasFile && _jsx(DeleteButton, { onClick: onDelete }), helperText && (_jsx(FormHelperText, { error: !!error, sx: { px: 2 }, children: helperText })), _jsx(RejectionFiles, { files: fileRejections }), renderMultiPreview] }));
}
