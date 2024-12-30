import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { RouterLink } from 'routes-react';
import Typography from '@mui/material/Typography';

import type { MenuTagsProps } from '../types';

// ----------------------------------------------------------------------

export function MenuTags({ tags, ...other }: MenuTagsProps) {
  return (
    <Box {...other}>
      <Typography variant="caption" sx={{ mr: 0.5, fontWeight: 'fontWeightBold' }}>
        Hot products:
      </Typography>

      {tags.map((tag, index) => (
        <Link
          key={tag.title}
          component={RouterLink as any}
          href={tag.path}
          variant="caption"
          sx={{
            color: 'text.secondary',
            transition: (theme) => theme.transitions.create(['color']),
            '&:hover': { color: 'text.primary' },
          }}
        >
          {index === 0 ? tag.title : `, ${tag.title} `}
        </Link>
      ))}
    </Box>
  );
}
