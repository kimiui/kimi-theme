import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { motion as m } from 'motion/react';
import SvgIcon from '@mui/material/SvgIcon';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import type { IconButtonProps } from '@mui/material/IconButton';

import { fToNow } from 'lib/utils/format-time';
import { varHover } from 'lib/components/animate';
import { usePopover, CustomPopover } from 'lib/components/custom-popover';
// ----------------------------------------------------------------------

export type ContactsPopoverProps = IconButtonProps & {
  data?: {
    id: string;
    role: string;
    name: string;
    email: string;
    status: string;
    address: string;
    avatarUrl: string;
    phoneNumber: string;
    lastActivity: string;
  }[];
};

export function ContactsPopover({ data = [], sx, ...other }: ContactsPopoverProps) {
  const popover = usePopover();

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          ...(popover.open && { bgcolor: (theme) => theme.vars.palette.action.selected }),
          ...sx,
        }}
        {...other}
      >
        <SvgIcon>
          {/* https://icon-sets.iconify.design/solar/users-group-rounded-bold-duotone/  */}
          <circle cx="15" cy="6" r="3" fill="currentColor" opacity="0.4" />
          <ellipse cx="16" cy="17" fill="currentColor" opacity="0.4" rx="5" ry="3" />
          <circle cx="9.001" cy="6" r="4" fill="currentColor" />
          <ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4" />
        </SvgIcon>
      </IconButton>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{
          arrow: { offset: 20 },
        }}
        sx={{ maxHeight: 320 }}
      >
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Contacts <span>({data.length})</span>
        </Typography>

        {data.map((contact) => (
          <MenuItem key={contact.id} sx={{ p: 1 }}>
            <Badge
              variant={contact.status as 'alway' | 'online' | 'busy' | 'offline'}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              sx={{ mr: 2 }}
            >
              <Avatar alt={contact.name} src={contact.avatarUrl} />
            </Badge>

            <ListItemText
              primary={contact.name}
              secondary={contact.status === 'offline' ? fToNow(contact.lastActivity) : ''}
              slotProps={{
                primary: { typography: 'subtitle2' },
                secondary: { typography: 'caption', color: 'text.disabled' },
              }}
            />
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
