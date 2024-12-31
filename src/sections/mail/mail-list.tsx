import type { IMail } from 'kimi-theme/types/mail';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import { useResponsive } from 'kimi-theme/hooks';
import Typography from '@mui/material/Typography';
import { Iconify } from 'kimi-theme/components/iconify';
import InputAdornment from '@mui/material/InputAdornment';
import { Scrollbar } from 'kimi-theme/components/scrollbar';
import { EmptyContent } from 'kimi-theme/components/empty-content';

import { MailItem } from './mail-item';
import { MailItemSkeleton } from './mail-skeleton';

// ----------------------------------------------------------------------

type Props = {
  empty: boolean;
  loading: boolean;
  openMail: boolean;
  mails: IMail[];
  selectedMailId: string;
  selectedLabelId: string;
  onCloseMail: () => void;
  onClickMail: (id: string) => void;
};

export function MailList({
  empty,
  mails,
  loading,
  openMail,
  onCloseMail,
  onClickMail,
  selectedMailId,
  selectedLabelId,
}: Readonly<Props>) {
  const mdUp = useResponsive('up', 'md');

  const renderLoading = (
    <Stack sx={{ px: 2, flex: '1 1 auto' }}>
      <MailItemSkeleton />
    </Stack>
  );

  const renderEmpty = (
    <Stack sx={{ px: 2, flex: '1 1 auto' }}>
      <EmptyContent
        title={`Nothing in ${selectedLabelId}`}
        description="This folder is empty"
        imgUrl="/assets/icons/empty/ic-folder-empty.svg"
      />
    </Stack>
  );

  const renderList = (
    <Scrollbar sx={{ flex: '1 1 0' }}>
      <nav>
        <Box
          component="ul"
          sx={{
            px: 2,
            pb: 1,
            gap: 0.5,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {mails.map((mail) => (
            <MailItem
              key={mail.id}
              mail={mail}
              selected={selectedMailId === mail.id}
              onClick={() => {
                onClickMail(mail.id);
              }}
            />
          ))}
        </Box>
      </nav>
    </Scrollbar>
  );

  const renderContent = (
    <>
      <Stack sx={{ p: 2 }}>
        {mdUp ? (
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
            {selectedLabelId}
          </Typography>
        )}
      </Stack>

      {loading ? renderLoading : <>{empty ? renderEmpty : renderList}</>}
    </>
  );

  return (
    <>
      {renderContent}

      <Drawer
        open={openMail}
        onClose={onCloseMail}
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        {renderContent}
      </Drawer>
    </>
  );
}
