import type { IInvoice } from 'kimi-theme/types/invoice';

import { useCallback } from 'react';
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import NoSsr from '@mui/material/NoSsr';
import Stack from '@mui/material/Stack';
import { useRouter } from 'routes-react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { paths } from 'kimi-theme/routes/paths';
import IconButton from '@mui/material/IconButton';
import DialogActions from '@mui/material/DialogActions';
import { Iconify } from 'kimi-theme/components/iconify';
import CircularProgress from '@mui/material/CircularProgress';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

import { InvoicePDF } from './invoice-pdf';

// ----------------------------------------------------------------------

type Props = {
  invoice?: IInvoice;
  currentStatus: string;
  statusOptions: { value: string; label: string }[];
  onChangeStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InvoiceToolbar({
  invoice,
  currentStatus,
  statusOptions,
  onChangeStatus,
}: Readonly<Props>) {
  const router = useRouter();

  const [view, viewActions] = useBoolean();

  const handleEdit = useCallback(() => {
    router.push(paths.dashboard.invoices.edit(`${invoice?.id}`));
  }, [invoice?.id, router]);

  const loadingCom: any = ({ loading }: { loading: any }) => (
    <Tooltip title="Download">
      <IconButton>
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <Iconify icon="eva:cloud-download-fill" />
        )}
      </IconButton>
    </Tooltip>
  );

  const renderDownload = (
    <NoSsr>
      <PDFDownloadLink
        document={
          invoice ? <InvoicePDF invoice={invoice} currentStatus={currentStatus} /> : <span />
        }
        fileName={invoice?.invoiceNumber}
        style={{ textDecoration: 'none' }}
      >
        {loadingCom}
      </PDFDownloadLink>
    </NoSsr>
  );

  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <Stack direction="row" spacing={1} flexGrow={1} sx={{ width: 1 }}>
          <Tooltip title="Edit">
            <IconButton onClick={handleEdit}>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          <Tooltip title="View">
            <IconButton onClick={viewActions.setTrue}>
              <Iconify icon="solar:eye-bold" />
            </IconButton>
          </Tooltip>

          {renderDownload}

          <Tooltip title="Print">
            <IconButton>
              <Iconify icon="solar:printer-minimalistic-bold" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Send">
            <IconButton>
              <Iconify icon="iconamoon:send-fill" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Share">
            <IconButton>
              <Iconify icon="solar:share-bold" />
            </IconButton>
          </Tooltip>
        </Stack>

        <TextField
          fullWidth
          select
          label="Status"
          value={currentStatus}
          onChange={onChangeStatus}
          slotProps={{
            input: { id: `status-select-label` },
            inputLabel: { htmlFor: `status-select-label` },
          }}
          sx={{ maxWidth: 160 }}
        >
          {statusOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      <Dialog fullScreen open={view}>
        <Box sx={{ height: 1, display: 'flex', flexDirection: 'column' }}>
          <DialogActions sx={{ p: 1.5 }}>
            <Button color="inherit" variant="contained" onClick={viewActions.setFalse}>
              Close
            </Button>
          </DialogActions>

          <Box sx={{ flexGrow: 1, height: 1, overflow: 'hidden' }}>
            <PDFViewer width="100%" height="100%" style={{ border: 'none' }}>
              {invoice && <InvoicePDF invoice={invoice} currentStatus={currentStatus} />}
            </PDFViewer>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
