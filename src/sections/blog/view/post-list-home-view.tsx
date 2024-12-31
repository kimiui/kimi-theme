'use client';

import type { IPostItem } from 'kimi-theme/types/blog';

import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import { useDebounce } from 'kimi-theme/hooks';
import Container from '@mui/material/Container';
import { paths } from 'kimi-theme/routes/paths';
import Typography from '@mui/material/Typography';
import { orderBy } from 'kimi-theme/utils/helper';
import { POST_SORT_OPTIONS } from 'kimi-theme/_mock';
import { useGetPosts } from 'kimi-theme/actions/blog';

import { PostList } from '../post-list';
import { PostSort } from '../post-sort';
import { PostSearch } from '../post-search';

// ----------------------------------------------------------------------

export function PostListHomeView() {
  const { data: posts, isLoading: loading } = useGetPosts();

  const [sortBy, setSortBy] = useState('latest');

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  const { data: searchResults, isLoading: searchLoading } = useGetPosts(debouncedQuery);

  const dataFiltered = applyFilter({ inputData: posts, sortBy });

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Blog
      </Typography>

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
          hrefItem={(title: string) => paths.posts.details(title)}
        />

        <PostSort sort={sortBy} onSort={handleSortBy} sortOptions={POST_SORT_OPTIONS} />
      </Stack>

      <PostList posts={dataFiltered} loading={loading} />
    </Container>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  inputData: IPostItem[];
  sortBy: string;
};

const applyFilter = ({ inputData, sortBy }: ApplyFilterProps) => {
  if (sortBy === 'latest') {
    return orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    return orderBy(inputData, ['createdAt'], ['asc']);
  }

  if (sortBy === 'popular') {
    return orderBy(inputData, ['totalViews'], ['desc']);
  }

  return inputData;
};
