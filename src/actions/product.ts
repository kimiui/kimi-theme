'use client';

import type { IProductItem } from 'kimi-theme/types/product';

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

type ProductsData = {
  data: IProductItem[];
};

export function useGetProducts(query?: string) {
  const url = query
    ? [endpoints.products.lists, { params: { query } }]
    : [endpoints.products.lists];

  const { data, isLoading, error, isValidating } = useSWR<ProductsData>(url, fetcher, swrOptions);

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

type ProductData = IProductItem;

export function useGetProduct(productId: string) {
  const url = productId ? [endpoints.products.details.replace(':id', productId)] : '';

  const { data, isLoading, error, isValidating } = useSWR<ProductData>(url, fetcher, swrOptions);

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
