import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { varAlpha } from '../../../theme/styles';
import { fData } from '../../../utils/format-number';
import { fileData } from '../../file-thumbnail';
export function RejectionFiles({ files }) {
    if (!files.length) {
        return null;
    }
    return (_jsx(Paper, { variant: "outlined", sx: {
            py: 1,
            px: 2,
            mt: 3,
            textAlign: 'left',
            borderStyle: 'dashed',
            borderColor: 'error.main',
            bgcolor: (theme) => varAlpha(theme.vars.palette.error.mainChannel, 0.08),
        }, children: files.map(({ file, errors }) => {
            const { path, size } = fileData(file);
            return (_jsxs(Box, { sx: { my: 1 }, children: [_jsxs(Typography, { variant: "subtitle2", noWrap: true, children: [path, " - ", size ? fData(size) : ''] }), errors.map((error) => (_jsxs(Box, { component: "span", sx: { typography: 'caption' }, children: ["- ", error.message] }, error.code)))] }, path));
        }) }));
}
