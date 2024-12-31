'use client';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import type { StackProps } from '@mui/material/Stack';
import type { Theme, SxProps } from '@mui/material/styles';
import type { ContainerProps } from '@mui/material/Container';

// ----------------------------------------------------------------------

type Props = StackProps & {
  offsetValue?: number;
  queryClassName?: string;
  slotProps?: {
    nav?: SxProps<Theme>;
    section?: SxProps<Theme>;
    container?: ContainerProps;
  };
  data: {
    name: string;
    component: React.ReactNode;
  }[];
};

export function ScrollToViewTemplate({
  sx,
  data,
  slotProps,
  offsetValue = 0.3, // 0 ~ 1 => 0% => 100%
  queryClassName = 'scroll__to__view',
  ...other
}: Props) {
  const renderSection = (
    <Stack
      component="section"
      spacing={5}
      flex="1 1 auto"
      sx={{
        minWidth: 0,
        p: { xs: 3, md: 5 },
        ...slotProps?.section,
      }}
    >
      {data.map((section) => (
        <Card key={section.name} className={queryClassName}>
          <CardHeader title={section.name} />
          <CardContent>{section.component}</CardContent>
        </Card>
      ))}
    </Stack>
  );

  return (
    <Container {...slotProps?.container}>
      <Stack spacing={5} direction="row" alignItems="flex-start" sx={{ ...sx }} {...other}>
        {renderSection}
      </Stack>
    </Container>
  );
}
