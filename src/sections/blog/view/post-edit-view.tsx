'use client';

import type { IPostItem } from 'kimi-theme/types/blog';

import { paths } from 'kimi-theme/routes/paths';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { PostNewEditForm } from '../post-new-edit-form';

// ----------------------------------------------------------------------

type Props = {
  post?: IPostItem;
};

export function PostEditView({ post }: Readonly<Props>) {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Blog', href: paths.dashboard.posts.root },
          { name: post?.title },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <PostNewEditForm currentPost={post} />
    </DashboardContent>
  );
}
