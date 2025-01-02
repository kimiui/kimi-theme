'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from '@mui/material/Button';
import { paths } from '../../../routes/paths';
import { toast } from '../../../components/snackbar';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function SnackbarView() {
    const onSubmit = async () => {
        const promise = new Promise((resolve) => setTimeout(resolve, 3000));
        try {
            toast.promise(promise, {
                loading: 'Loading...',
                success: () => `Loading success!`,
                error: 'Error',
                closeButton: false,
            });
            await promise;
        }
        catch (error) {
            console.error(error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Snackbar", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Snackbar' }], moreLink: ['https://sonner.emilkowal.ski/'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                    },
                }, children: [_jsxs(ComponentBlock, { title: "Simple", children: [_jsx(Button, { variant: "contained", color: "inherit", onClick: () => toast('This is an default'), children: "Default" }), _jsx(Button, { variant: "contained", color: "info", onClick: () => toast.info('This is an info'), children: "Info" }), _jsx(Button, { variant: "contained", color: "success", onClick: () => toast.success('This is an success'), children: "Success" }), _jsx(Button, { variant: "contained", color: "warning", onClick: () => toast.warning('This is an warning'), children: "Warning" }), _jsx(Button, { variant: "contained", color: "error", onClick: () => toast.error('This is an error'), children: "Error" })] }), _jsxs(ComponentBlock, { title: "With Action", children: [_jsx(Button, { variant: "contained", color: "inherit", onClick: () => {
                                    toast('Title', {
                                        id: 'defaultId',
                                        description: 'description',
                                        closeButton: false,
                                        action: (_jsxs("div", { children: [_jsx(Button, { color: "primary", size: "small", onClick: () => console.info('Action!'), children: "Action" }), _jsx(Button, { size: "small", onClick: () => {
                                                        console.info('Action!');
                                                        toast.dismiss('defaultId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Default" }), _jsx(Button, { variant: "contained", color: "info", onClick: () => {
                                    toast.info('Title', {
                                        id: 'infoId',
                                        description: 'description',
                                        closeButton: false,
                                        action: (_jsxs("div", { children: [_jsx(Button, { color: "info", size: "small", onClick: () => console.info('Action!'), children: "Action" }), _jsx(Button, { size: "small", onClick: () => {
                                                        console.info('Action!');
                                                        toast.dismiss('infoId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Info" }), _jsx(Button, { variant: "contained", color: "success", onClick: () => {
                                    toast.success('Title', {
                                        id: 'successId',
                                        description: 'description',
                                        closeButton: false,
                                        action: (_jsxs("div", { children: [_jsx(Button, { color: "success", size: "small", onClick: () => console.info('Action!'), children: "Action" }), _jsx(Button, { size: "small", onClick: () => {
                                                        console.info('Action!');
                                                        toast.dismiss('successId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Success" }), _jsx(Button, { variant: "contained", color: "warning", onClick: () => {
                                    toast.warning('Title', {
                                        id: 'warningId',
                                        description: 'description',
                                        closeButton: false,
                                        action: (_jsxs("div", { children: [_jsx(Button, { color: "warning", size: "small", onClick: () => console.info('Action!'), children: "Action" }), _jsx(Button, { size: "small", onClick: () => {
                                                        console.info('Action!');
                                                        toast.dismiss('warningId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Warning" }), _jsx(Button, { variant: "contained", color: "error", onClick: () => {
                                    toast.error('Error title', {
                                        id: 'errorId',
                                        description: 'description',
                                        closeButton: false,
                                        action: (_jsxs("div", { children: [_jsx(Button, { color: "error", size: "small", onClick: () => console.info('Action!'), children: "Action" }), _jsx(Button, { size: "small", onClick: () => {
                                                        console.info('Action!');
                                                        toast.dismiss('errorId');
                                                    }, children: "Dismiss" })] })),
                                    });
                                }, children: "Error" })] }), _jsx(ComponentBlock, { title: "anchorOrigin", children: [
                            'top-left',
                            'top-center',
                            'top-right',
                            'bottom-left',
                            'bottom-center',
                            'bottom-right',
                        ].map((position) => (_jsx(Button, { variant: "text", color: "inherit", onClick: () => toast(position, { position: position }), children: position }, position))) }), _jsx(ComponentBlock, { title: "With promise", children: _jsx(Button, { variant: "outlined", onClick: onSubmit, children: "On submit" }) })] })] }));
}
