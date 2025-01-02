'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoolean } from 'ahooks';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { fData } from '../../../utils/format-number';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { Upload, UploadBox, UploadAvatar } from '../../../components/upload';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function UploadView() {
    const [preview, previewActions] = useBoolean();
    const [files, setFiles] = useState([]);
    const [file, setFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const handleDropSingleFile = useCallback((acceptedFiles) => {
        const newFile = acceptedFiles[0];
        setFile(newFile);
    }, []);
    const handleDropAvatar = useCallback((acceptedFiles) => {
        const newFile = acceptedFiles[0];
        setAvatarUrl(newFile);
    }, []);
    const handleDropMultiFile = useCallback((acceptedFiles) => {
        setFiles([...files, ...acceptedFiles]);
    }, [files]);
    const handleRemoveFile = (inputFile) => {
        const filesFiltered = files.filter((fileFiltered) => fileFiltered !== inputFile);
        setFiles(filesFiltered);
    };
    const handleRemoveAllFiles = () => {
        setFiles([]);
    };
    const DEMO = [
        {
            name: 'Upload multi file',
            component: (_jsxs(_Fragment, { children: [_jsx(FormControlLabel, { control: _jsx(Switch, { checked: preview, onClick: previewActions.toggle }), label: "Show Thumbnail", sx: { mb: 3, width: 1, justifyContent: 'flex-end' } }), _jsx(Upload, { multiple: true, thumbnail: preview, value: files, onDrop: handleDropMultiFile, onRemove: handleRemoveFile, onRemoveAll: handleRemoveAllFiles, onUpload: () => console.info('ON UPLOAD') })] })),
        },
        {
            name: 'Upload single file',
            component: (_jsx(Upload, { value: file, onDrop: handleDropSingleFile, onDelete: () => setFile(null) })),
        },
        {
            name: 'Upload avatar',
            component: (_jsx(UploadAvatar, { value: avatarUrl, onDrop: handleDropAvatar, validator: (fileData) => {
                    if (fileData.size > 1000000) {
                        return {
                            code: 'file-too-large',
                            message: `File is larger than ${fData(1000000)}`,
                        };
                    }
                    return null;
                }, helperText: _jsxs(Typography, { variant: "caption", sx: {
                        mt: 3,
                        mx: 'auto',
                        display: 'block',
                        textAlign: 'center',
                        color: 'text.disabled',
                    }, children: ["Allowed *.jpeg, *.jpg, *.png, *.gif", _jsx("br", {}), " max size of ", fData(3145728)] }) })),
        },
        {
            name: 'Upload box',
            component: (_jsxs(Stack, { direction: "row", spacing: 2, children: [_jsx(UploadBox, {}), _jsx(UploadBox, { placeholder: _jsxs(Stack, { spacing: 0.5, alignItems: "center", children: [_jsx(Iconify, { icon: "eva:cloud-upload-fill", width: 40 }), _jsx(Typography, { variant: "body2", children: "Upload file" })] }), sx: { mb: 3, py: 2.5, flexGrow: 1, height: 'auto' } })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Upload", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Upload' }], moreLink: ['https://react-dropzone.js.org/#section-basic-example'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
