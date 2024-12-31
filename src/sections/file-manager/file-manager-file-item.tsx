'use client';

import type { CardProps } from '@mui/material/Card';
import type { IFileManager } from 'kimi-theme/types/file';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { maxLine } from 'kimi-theme/theme/styles';
import { useCopyToClipboard } from 'kimi-theme/hooks';
import { fData } from 'kimi-theme/utils/format-number';
import { toast } from 'kimi-theme/components/snackbar';
import { Iconify } from 'kimi-theme/components/iconify';
import { fDateTime } from 'kimi-theme/utils/format-time';
import { ConfirmDialog } from 'kimi-theme/components/custom-dialog';
import { FileThumbnail } from 'kimi-theme/components/file-thumbnail';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
import { usePopover, CustomPopover } from 'kimi-theme/components/custom-popover';

import { FileManagerFileDetails } from './file-manager-file-details';
import { FileManagerShareDialog } from './file-manager-share-dialog';

// ----------------------------------------------------------------------

type Props = CardProps & {
  selected?: boolean;
  file: IFileManager;
  onDelete: () => void;
  onSelect?: () => void;
};

export function FileManagerFileItem({ file, selected, onSelect, onDelete, sx, ...other }: Props) {
  const theme = useTheme();

  const [share, shareActions] = useBoolean();

  const [confirm, confirmActions] = useBoolean();

  const [details, detailsActions] = useBoolean();

  const popover = usePopover();

  const [checkbox, checkboxActions] = useBoolean();

  const { copy } = useCopyToClipboard();

  const [favorite, favoriteActions] = useBoolean(file.isFavorited);

  const [inviteEmail, setInviteEmail] = useState('');

  const handleChangeInvite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(event.target.value);
  }, []);

  const handleCopy = useCallback(() => {
    toast.success('Copied!');
    copy(file.url);
  }, [copy, file.url]);

  const renderIcon = (
    <Box
      onMouseEnter={checkboxActions.setTrue}
      onMouseLeave={checkboxActions.setFalse}
      sx={{ display: 'inline-flex', width: 36, height: 36 }}
    >
      {(checkbox || selected) && onSelect ? (
        <Checkbox
          checked={selected}
          onClick={onSelect}
          icon={<Iconify icon="eva:radio-button-off-fill" />}
          checkedIcon={<Iconify icon="eva:checkmark-circle-2-fill" />}
          inputProps={{
            id: `item-checkbox-${file.id}`,
            'aria-label': `Item checkbox`,
          }}
          sx={{ width: 1, height: 1 }}
        />
      ) : (
        <FileThumbnail file={file.type} sx={{ width: 1, height: 1 }} />
      )}
    </Box>
  );

  const renderAction = (
    <Stack direction="row" alignItems="center" sx={{ top: 8, right: 8, position: 'absolute' }}>
      <Checkbox
        color="warning"
        icon={<Iconify icon="eva:star-outline" />}
        checkedIcon={<Iconify icon="eva:star-fill" />}
        checked={favorite}
        onChange={favoriteActions.toggle}
        inputProps={{
          id: `favorite-checkbox-${file.id}`,
          'aria-label': `Favorite checkbox`,
        }}
      />

      <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    </Stack>
  );

  const renderText = (
    <>
      <Typography
        variant="subtitle2"
        onClick={detailsActions.setTrue}
        sx={{
          ...maxLine({ line: 2, persistent: theme.typography.subtitle2 }),
          mt: 2,
          mb: 0.5,
          width: 1,
        }}
      >
        {file.name}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          maxWidth: 0.99,
          whiteSpace: 'nowrap',
          typography: 'caption',
          color: 'text.disabled',
        }}
      >
        {fData(file.size)}

        <Box
          component="span"
          sx={{
            mx: 0.75,
            width: 2,
            height: 2,
            flexShrink: 0,
            borderRadius: '50%',
            bgcolor: 'currentColor',
          }}
        />
        <Typography noWrap component="span" variant="caption">
          {fDateTime(file.modifiedAt)}
        </Typography>
      </Stack>
    </>
  );

  const renderAvatar = (
    <AvatarGroup
      max={3}
      sx={{
        mt: 1,
        [`& .${avatarGroupClasses.avatar}`]: {
          width: 24,
          height: 24,
          '&:first-of-type': { fontSize: 12 },
        },
      }}
    >
      {file.shared?.map((person) => (
        <Avatar key={person.id} alt={person.name} src={person.avatarUrl} />
      ))}
    </AvatarGroup>
  );

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          p: 2.5,
          display: 'flex',
          borderRadius: 2,
          cursor: 'pointer',
          position: 'relative',
          bgcolor: 'transparent',
          flexDirection: 'column',
          alignItems: 'flex-start',
          ...((checkbox || selected) && {
            bgcolor: 'background.paper',
            boxShadow: theme.shadows[20],
          }),
          ...sx,
        }}
        {...other}
      >
        {renderIcon}

        {renderText}

        {renderAvatar}

        {renderAction}
      </Paper>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
              handleCopy();
            }}
          >
            <Iconify icon="eva:link-2-fill" />
            Copy Link
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
              shareActions.setTrue();
            }}
          >
            <Iconify icon="solar:share-bold" />
            Share
          </MenuItem>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <MenuItem
            onClick={() => {
              confirmActions.setTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <FileManagerFileDetails
        item={file}
        favorited={favorite}
        onFavorite={favoriteActions.toggle}
        onCopyLink={handleCopy}
        open={details}
        onClose={detailsActions.setFalse}
        onDelete={() => {
          detailsActions.setFalse();
          onDelete();
        }}
      />

      <FileManagerShareDialog
        open={share}
        shared={file.shared}
        inviteEmail={inviteEmail}
        onChangeInvite={handleChangeInvite}
        onCopyLink={handleCopy}
        onClose={() => {
          shareActions.setFalse();
          setInviteEmail('');
        }}
      />

      <ConfirmDialog
        open={confirm}
        onClose={confirmActions.setFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDelete}>
            Delete
          </Button>
        }
      />
    </>
  );
}
