'use client';

import type { IPostItem, IPostFilters } from 'kimi-theme/types/blog';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import { useState, useCallback } from 'react';
import { paths } from 'kimi-theme/routes/paths';
import { orderBy } from 'kimi-theme/utils/helper';
import { Label } from 'kimi-theme/components/label';
import { POST_SORT_OPTIONS } from 'kimi-theme/_mock';
import { useGetPosts } from 'kimi-theme/actions/blog';
import { Iconify } from 'kimi-theme/components/iconify';
import { useDebounce, useSetState } from 'kimi-theme/hooks';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { PostSort } from '../post-sort';
import { PostSearch } from '../post-search';
import { PostListHorizontal } from '../post-list-horizontal';

// ----------------------------------------------------------------------

export function PostListView() {
  const [sortBy, setSortBy] = useState('latest');

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  const { data: posts, isLoading: postsLoading } = useGetPosts();
  const { data: searchResults, isLoading: searchLoading } = useGetPosts(debouncedQuery);

  const filters = useSetState<IPostFilters>({ publish: 'all' });

  const dataFiltered = applyFilter({
    inputData: posts,
    filters: filters.state,
    sortBy,
  });

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const handleFilterPublish = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      filters.setState({ publish: newValue });
    },
    [filters]
  );

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="List"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Blog', href: paths.dashboard.posts.root },
          { name: 'List' },
        ]}
        action={
          <Button
            component={RouterLink as any}
            href={paths.dashboard.posts.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New post
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <Stack
        spacing={3}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-end', sm: 'center' }}
        direction={{ xs: 'column', sm: 'row' }}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        <PostSearch
          query={debouncedQuery}
          results={searchResults}
          onSearch={handleSearch}
          loading={searchLoading}
          hrefItem={(title: string) => paths.dashboard.posts.details(title)}
        />

        <PostSort sort={sortBy} onSort={handleSortBy} sortOptions={POST_SORT_OPTIONS} />
      </Stack>

      <Tabs
        value={filters.state.publish}
        onChange={handleFilterPublish}
        sx={{ mb: { xs: 3, md: 5 } }}
      >
        {['all', 'published', 'draft'].map((tab) => (
          <Tab
            key={tab}
            iconPosition="end"
            value={tab}
            label={tab}
            icon={
              <Label
                variant={((tab === 'all' || tab === filters.state.publish) && 'filled') || 'soft'}
                color={(tab === 'published' && 'info') || 'default'}
              >
                {tab === 'all' && posts.length}

                {tab === 'published' && posts.filter((post) => post.publish === 'published').length}

                {tab === 'draft' && posts.filter((post) => post.publish === 'draft').length}
              </Label>
            }
            sx={{ textTransform: 'capitalize' }}
          />
        ))}
      </Tabs>

      <PostListHorizontal posts={dataFiltered} loading={postsLoading} />
    </DashboardContent>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  inputData: IPostItem[];
  filters: IPostFilters;
  sortBy: string;
};

const applyFilter = ({ inputData, filters, sortBy }: ApplyFilterProps) => {
  const { publish } = filters;

  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    inputData = orderBy(inputData, ['totalViews'], ['desc']);
  }

  if (publish !== 'all') {
    inputData = inputData.filter((post) => post.publish === publish);
  }

  return inputData;
};
