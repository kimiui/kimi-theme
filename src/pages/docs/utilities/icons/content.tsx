import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Iconify } from 'kimi-theme/components/iconify';
import { Link, Stack, Divider, Typography } from '@mui/material';
// ------------------------------------------------------------------
export default function Content() {
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h4" gutterBottom>
        Icons
      </Typography>
      <Typography variant="body2">
        The icon utility is used to apply icons to elements. It can be used to apply an icon to a
        single element, or to apply an icon to a group of elements.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        MUI Icons
      </Typography>

      <Typography variant="body2">
        The MUI icons are a set of icons that are included in the MUI library. They are used to
        apply icons to elements in the MUI library.
      </Typography>

      <Link href="https://mui.com/components/material-icons/" target="_blank">
        https://mui.com/components/material-icons/
      </Link>

      <Typography variant="h6" gutterBottom>
        Example
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <AcUnitIcon fontSize="small" />
        <AcUnitIcon fontSize="medium" />
        <AcUnitIcon fontSize="large" />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom>
        Iconify Icons
      </Typography>
      <Typography variant="body2">
        The Iconify icons are a set of icons that are included in the Iconify library. They are used
        to apply icons to elements in the Iconify library.
      </Typography>
      <Link href="https://iconify.design/" target="_blank">
        https://iconify.design/
      </Link>

      <Typography variant="h6" gutterBottom>
        Example
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Iconify icon="mdi:home" height={16} width={16} />
        <Iconify icon="mdi:home" height={24} width={24} />
        <Iconify icon="mdi:home" height={32} width={32} />
      </Stack>
    </Stack>
  );
}
