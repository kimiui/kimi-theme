'use client';

import type { IPostItem } from 'kimi-theme/types/blog';

import useSWR from 'swr';
import { useMemo } from 'react';
import { fetcher, endpoints } from 'kimi-theme/utils/axios';

// ----------------------------------------------------------------------

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// ----------------------------------------------------------------------

type PostsData = {
  data: IPostItem[];
};

export function useGetPosts(query?: string) {
  const url = query ? [endpoints.posts.list, { params: { query } }] : [endpoints.posts.list];

  const { data, isLoading, error, isValidating } = useSWR<PostsData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type PostData = IPostItem;

export function useGetPost(title: string) {
  const url = title ? [endpoints.posts.details.replace(':title', title)] : '';

  const { data, isLoading, error, isValidating } = useSWR<PostData>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      data,
      isLoading,
      error,
      isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

type LatestPostsData = {
  data: IPostItem[];
};

export function useGetRelativePosts(title: string) {
  const url = title ? [endpoints.posts.relative, { params: { title } }] : '';

  const { data, isLoading, error, isValidating } = useSWR<LatestPostsData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      data: data?.data || [],
      isLoading,
      error,
      isValidating,
      isEmpty: !isLoading && !data?.data.length,
    }),
    [data?.data, error, isLoading, isValidating]
  );

  return memoizedValue;
}
