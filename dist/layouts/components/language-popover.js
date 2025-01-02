import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { m } from 'framer-motion';
import { useCallback } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useTranslate } from '../../locales';
import { varHover } from '../../components/animate';
import { FlagIcon } from '../../components/iconify';
import { usePopover, CustomPopover } from '../../components/custom-popover';
export function LanguagePopover({ data = [], sx, ...other }) {
    const popover = usePopover();
    const { onChangeLang, currentLang } = useTranslate();
    const handleChangeLang = useCallback((newLang) => {
        onChangeLang(newLang);
        popover.onClose();
    }, [onChangeLang, popover]);
    return (_jsxs(_Fragment, { children: [_jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.05), onClick: popover.onOpen, sx: {
                    p: 0,
                    width: 40,
                    height: 40,
                    ...(popover.open && { bgcolor: 'action.selected' }),
                    ...sx,
                }, ...other, children: _jsx(FlagIcon, { code: currentLang.countryCode }) }), _jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, children: _jsx(MenuList, { sx: { width: 160, minHeight: 72 }, children: data?.map((option) => (_jsxs(MenuItem, { selected: option.value === currentLang.value, onClick: () => handleChangeLang(option.value), children: [_jsx(FlagIcon, { code: option.countryCode }), option.label] }, option.value))) }) })] }));
}
