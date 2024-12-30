import type { BoxProps } from '@mui/material/Box';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import { Typography } from '@mui/material';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

type TimelineItemType = {
  title: string;
  date: string;
  color: 'primary' | 'warning' | 'info' | 'error' | 'success';
};

type Props = BoxProps & {
  title?: string;
  subheader?: string;
  timelineItems: TimelineItemType[];
};

export function EcommerceOrderTimeline({ title, subheader, timelineItems, ...other }: Props) {
  return (
    <Box height={1} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card sx={{ flex: 1, p: 3, borderRadius: 2 }}>
        <Timeline
          sx={{
            p: 0,
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {timelineItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color={item.color} />
                {index !== timelineItems.length - 1 && <TimelineConnector color='divider' sx={{ width: '1px' }} />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="subtitle2" component="div" sx={{ color: 'text.primary' }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {item.date}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Card>
    </Box>
  );
}
