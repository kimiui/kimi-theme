'use client';

import type { IJobItem } from 'kimi-theme/types/job';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useTabs } from 'kimi-theme/hooks';
import { useState, useCallback } from 'react';
import { paths } from 'kimi-theme/routes/paths';
import { Label } from 'kimi-theme/components/label';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { JOB_DETAILS_TABS, JOB_PUBLISH_OPTIONS } from 'kimi-theme/_mock';

import { JobDetailsContent } from '../job-details-content';
import { JobDetailsToolbar } from '../job-details-toolbar';
import { JobDetailsCandidates } from '../job-details-candidates';

// ----------------------------------------------------------------------

type Props = {
  job?: IJobItem;
};

export function JobDetailsView({ job }: Props) {
  const tabs = useTabs('content');

  const [publish, setPublish] = useState(job?.publish);

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs value={tabs.value} onChange={tabs.onChange} sx={{ mb: { xs: 3, md: 5 } }}>
      {JOB_DETAILS_TABS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'candidates' ? (
              <Label variant="filled">{job?.candidates.length}</Label>
            ) : (
              ''
            )
          }
        />
      ))}
    </Tabs>
  );

  return (
    <DashboardContent>
      <JobDetailsToolbar
        backLink={paths.dashboard.jobs.root}
        editLink={paths.dashboard.jobs.edit(`${job?.id}`)}
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={JOB_PUBLISH_OPTIONS}
      />
      {renderTabs}

      {tabs.value === 'content' && <JobDetailsContent job={job} />}

      {tabs.value === 'candidates' && <JobDetailsCandidates candidates={job?.candidates ?? []} />}
    </DashboardContent>
  );
}
