'use client';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import SvgIcon from '@mui/material/SvgIcon';
import { useState, useCallback } from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { dialogClasses } from '@mui/material/Dialog';

import { isExternalLink } from 'lib/utils';
import { varAlpha } from 'lib/theme/styles';
import { useEventListener } from 'lib/hooks';
import { Label } from 'lib/components/label';
import { Iconify } from 'lib/components/iconify';
import { SearchNotFound } from 'lib/components/search-not-found';
import type { NavSectionProps } from 'lib/components/nav-section';

import { ResultItem } from './result-item';
import { groupItems, applyFilter, getAllItems } from './utils';

// ----------------------------------------------------------------------

export type SearchbarProps = BoxProps & {
  data?: NavSectionProps['data'];
};

export function Searchbar({ data: navItems = [], sx, ...other }: SearchbarProps) {
  const theme = useTheme();

  const [search, { toggle, setTrue, setFalse }] = useBoolean();

  const [searchQuery, setSearchQuery] = useState('');

  const handleClose = useCallback(() => {
    setFalse();
    setSearchQuery('');
  }, [setFalse]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'k' && event.metaKey) {
      toggle();
      setSearchQuery('');
    }
  };

  useEventListener('keydown', handleKeyDown);

  const handleClick = useCallback(
    (path: string) => {
      if (isExternalLink(path)) {
        window.open(path);
      } else {
        window.location.href = path;
      }
      handleClose();
    },
    [handleClose]
  );

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const dataFiltered = applyFilter({
    inputData: getAllItems({ data: navItems }),
    query: searchQuery,
  });

  const notFound = searchQuery && !dataFiltered.length;

  const renderItems = () => {
    const dataGroups = groupItems(dataFiltered);

    return Object.keys(dataGroups)
      .sort((a, b) => -b.localeCompare(a))
      .map((group, index) => (
        <Box component="ul" key={`${group}-${index}`}>
          {dataGroups[group].map((item) => {
            const { title, path } = item;

            const partsTitle = parse(title, match(title, searchQuery));

            const partsPath = parse(path, match(path, searchQuery));

            return (
              <Box component="li" key={`${title}${path}`} sx={{ display: 'flex' }}>
                <ResultItem
                  path={partsPath}
                  title={partsTitle}
                  groupLabel={searchQuery && group}
                  onClickItem={() => handleClick(path)}
                />
              </Box>
            );
          })}
        </Box>
      ));
  };

  const renderButton = (
    <Box
      display="flex"
      alignItems="center"
      onClick={setTrue}
      sx={{
        pr: { sm: 1 },
        borderRadius: { sm: 1.5 },
        cursor: { sm: 'pointer' },
        bgcolor: { sm: varAlpha(theme.vars.palette.grey['500Channel'], 0.08) },
        ...sx,
      }}
      {...other}
    >
      <IconButton disableRipple>
        {/* https://icon-sets.iconify.design/eva/search-fill/ */}
        <SvgIcon sx={{ width: 20, height: 20 }}>
          <path
            fill="currentColor"
            d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
          />
        </SvgIcon>
      </IconButton>

      <Label
        sx={{
          fontSize: 12,
          color: 'grey.800',
          bgcolor: 'common.white',
          boxShadow: theme.shadows[1],
          display: { xs: 'none', sm: 'inline-flex' },
        }}
      >
        ⌘K
      </Label>
    </Box>
  );

  return (
    <>
      {renderButton}

      <Dialog
        fullWidth
        disableRestoreFocus
        maxWidth="sm"
        open={search}
        onClose={handleClose}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: 0,
        }}
        PaperProps={{ sx: { mt: 15, overflow: 'unset' } }}
        sx={{ [`& .${dialogClasses.container}`]: { alignItems: 'flex-start' } }}
      >
        <Box sx={{ p: 3, borderBottom: `solid 1px ${theme.vars.palette.divider}` }}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
            endAdornment={<Label sx={{ letterSpacing: 1, color: 'text.secondary' }}>esc</Label>}
            inputProps={{ sx: { typography: 'h6' } }}
          />
        </Box>

        {notFound ? <SearchNotFound query={searchQuery} sx={{ py: 15 }} /> : renderItems()}
      </Dialog>
    </>
  );
}
