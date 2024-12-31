'use client';

import type { IProductItem, IProductFilters } from 'kimi-theme/types/product';

import { useBoolean } from 'ahooks';
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { orderBy } from 'kimi-theme/utils/helper';
import { useGetProducts } from 'kimi-theme/actions/product';
import { useDebounce, useSetState } from 'kimi-theme/hooks';
import { EmptyContent } from 'kimi-theme/components/empty-content';
import {
  PRODUCT_SORT_OPTIONS,
  PRODUCT_COLOR_OPTIONS,
  PRODUCT_GENDER_OPTIONS,
  PRODUCT_RATING_OPTIONS,
  PRODUCT_CATEGORY_OPTIONS,
} from 'kimi-theme/_mock';

import { ProductList } from '../product-list';
import { ProductSort } from '../product-sort';
import { ProductSearch } from '../product-search';
import { CartIcon } from '../components/cart-icon';
import { ProductFilters } from '../product-filters';
import { useCheckoutContext } from '../../checkout/context';
import { ProductFiltersResult } from '../product-filters-result';

// ----------------------------------------------------------------------

export function ProductShopView() {
  const { data: products, isLoading: loading } = useGetProducts();

  const checkout = useCheckoutContext();

  const [openFilters, { setTrue, setFalse }] = useBoolean();

  const [sortBy, setSortBy] = useState('featured');

  const [searchQuery, setSearchQuery] = useState('');

  const debouncedQuery = useDebounce(searchQuery);

  const filters = useSetState<IProductFilters>({
    gender: [],
    colors: [],
    rating: '',
    category: 'all',
    priceRange: [0, 200],
  });

  const { data: searchResults, isLoading } = useGetProducts(debouncedQuery);

  const dataFiltered = applyFilter({
    inputData: products,
    filters: filters.state,
    sortBy,
  });

  const canReset =
    filters.state.gender.length > 0 ||
    filters.state.colors.length > 0 ||
    filters.state.rating !== '' ||
    filters.state.category !== 'all' ||
    filters.state.priceRange[0] !== 0 ||
    filters.state.priceRange[1] !== 200;

  const notFound = !dataFiltered.length && canReset;

  const handleSortBy = useCallback((newValue: string) => {
    setSortBy(newValue);
  }, []);

  const handleSearch = useCallback((inputValue: string) => {
    setSearchQuery(inputValue);
  }, []);

  const productsEmpty = !loading && !products.length;

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <ProductSearch
        query={debouncedQuery}
        results={searchResults}
        onSearch={handleSearch}
        loading={isLoading}
      />

      <Stack direction="row" spacing={1} flexShrink={0}>
        <ProductFilters
          filters={filters}
          canReset={canReset}
          open={openFilters}
          onOpen={setTrue}
          onClose={setFalse}
          options={{
            colors: PRODUCT_COLOR_OPTIONS,
            ratings: PRODUCT_RATING_OPTIONS,
            genders: PRODUCT_GENDER_OPTIONS,
            categories: ['all', ...PRODUCT_CATEGORY_OPTIONS],
          }}
        />

        <ProductSort sort={sortBy} onSort={handleSortBy} sortOptions={PRODUCT_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  const renderResults = (
    <ProductFiltersResult filters={filters} totalResults={dataFiltered.length} />
  );

  const renderNotFound = <EmptyContent filled sx={{ py: 10 }} />;

  return (
    <Container sx={{ mb: 15 }}>
      <CartIcon totalItems={checkout.totalItems} />

      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Shop
      </Typography>

      <Stack spacing={2.5} sx={{ mb: { xs: 3, md: 5 } }}>
        {renderFilters}

        {canReset && renderResults}
      </Stack>

      {(notFound || productsEmpty) && renderNotFound}

      <ProductList products={dataFiltered} loading={loading} />
    </Container>
  );
}

// ----------------------------------------------------------------------

type ApplyFilterProps = {
  sortBy: string;
  filters: IProductFilters;
  inputData: IProductItem[];
};

function applyFilter({ inputData, filters, sortBy }: ApplyFilterProps) {
  const { gender, category, colors, priceRange, rating } = filters;

  const min = priceRange[0];

  const max = priceRange[1];

  // Sort by
  if (sortBy === 'featured') {
    inputData = orderBy(inputData, ['totalSold'], ['desc']);
  }

  if (sortBy === 'newest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'priceDesc') {
    inputData = orderBy(inputData, ['price'], ['desc']);
  }

  if (sortBy === 'priceAsc') {
    inputData = orderBy(inputData, ['price'], ['asc']);
  }

  // filters
  if (gender.length) {
    inputData = inputData.filter((product) => product.gender.some((i) => gender.includes(i)));
  }

  if (category !== 'all') {
    inputData = inputData.filter((product) => product.category === category);
  }

  if (colors.length) {
    inputData = inputData.filter((product) =>
      product.colors.some((color) => colors.includes(color))
    );
  }

  if (min !== 0 || max !== 200) {
    inputData = inputData.filter((product) => product.price >= min && product.price <= max);
  }

  if (rating) {
    inputData = inputData.filter((product) => {
      const convertRating = (value: string) => {
        if (value === 'up4Star') return 4;
        if (value === 'up3Star') return 3;
        if (value === 'up2Star') return 2;
        return 1;
      };
      return product.totalRatings > convertRating(rating);
    });
  }

  return inputData;
}
