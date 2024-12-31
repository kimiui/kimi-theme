import type { IJobItem } from 'kimi-theme/types/job';

import { paths } from 'kimi-theme/routes/paths';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { JobNewEditForm } from '../job-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  job?: IJobItem;
};

export function JobEditView({ job }: Props) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Jobs', href: paths.dashboard.jobs.root },
          { name: job?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <JobNewEditForm currentJob={job} />
    </DashboardContent>
  );
}
