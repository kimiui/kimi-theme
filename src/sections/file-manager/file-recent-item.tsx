'use client';

import type { IFileManager } from 'src/types/file';
import type { PaperProps } from '@mui/material/Paper';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';

import { useCopyToClipboard } from 'src/hooks';
import { fData } from 'src/utils/format-number';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { fDateTime } from 'src/utils/format-time';
import { FileThumbnail } from 'src/components/file-thumbnail';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

import { FileManagerFileDetails } from './file-manager-file-details';
import { FileManagerShareDialog } from './file-manager-share-dialog';

// ----------------------------------------------------------------------

type Props = PaperProps & {
  file: IFileManager;
  onDelete: () => void;
};

export function FileRecentItem({ file, onDelete, sx, ...other }: Props) {
  const { copy } = useCopyToClipboard();

  const [share, shareActions] = useBoolean();

  const popover = usePopover();

  const [details, detailsActions] = useBoolean();

  const [favorite, favoriteActions] = useBoolean(file.isFavorited);

  const [inviteEmail, setInviteEmail] = useState('');

  const handleChangeInvite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInviteEmail(event.target.value);
  }, []);

  const handleCopy = useCallback(() => {
    toast.success('Copied!');
    copy(file.url);
  }, [copy, file.url]);

  const renderAction = (
    <Box
      sx={{
        top: 8,
        right: 8,
        flexShrink: { sm: 0 },
        position: { xs: 'absolute', sm: 'unset' },
      }}
    >
      <Checkbox
        color="warning"
        icon={<Iconify icon="eva:star-outline" />}
        checkedIcon={<Iconify icon="eva:star-fill" />}
        checked={favorite}
        onChange={favoriteActions.toggle}
        inputProps={{
          name: 'checkbox-favorite',
          'aria-label': 'Checkbox favorite',
        }}
      />

      <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
        <Iconify icon="eva:more-vertical-fill" />
      </IconButton>
    </Box>
  );

  const renderText = (
    <ListItemText
      onClick={detailsActions.setTrue}
      primary={file.name}
      secondary={
        <>
          {fData(file.size)}
          <Box
            sx={{
              mx: 0.75,
              width: 2,
              height: 2,
              borderRadius: '50%',
              bgcolor: 'currentColor',
            }}
          />
          {fDateTime(file.modifiedAt)}
        </>
      }
      primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
      secondaryTypographyProps={{
        mt: 0.5,
        component: 'span',
        alignItems: 'center',
        typography: 'caption',
        color: 'text.disabled',
        display: 'inline-flex',
      }}
    />
  );

  const renderAvatar = (
    <AvatarGroup
      max={3}
      sx={{
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
          gap: 2,
          borderRadius: 2,
          display: 'flex',
          cursor: 'pointer',
          position: 'relative',
          bgcolor: 'transparent',
          p: { xs: 2.5, sm: 2 },
          alignItems: { xs: 'unset', sm: 'center' },
          flexDirection: { xs: 'column', sm: 'row' },
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.shadows[20],
          },
          ...sx,
        }}
        {...other}
      >
        <FileThumbnail file={file.type} />

        {renderText}

        {!!file?.shared?.length && renderAvatar}

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
              popover.onClose();
              onDelete();
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
    </>
  );
}
