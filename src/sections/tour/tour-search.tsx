import type { ITourItem } from 'kimi-theme/types/tour';
import type { UseSetStateReturn } from 'kimi-theme/hooks';

import Box from '@mui/material/Box';
import { useRouter } from 'routes-react';
import Avatar from '@mui/material/Avatar';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@mui/material/TextField';
import { paths } from 'kimi-theme/routes/paths';
import Typography from '@mui/material/Typography';
import { Iconify } from 'kimi-theme/components/iconify';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchNotFound } from 'kimi-theme/components/search-not-found';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';

// ----------------------------------------------------------------------

type Props = {
  onSearch: (inputValue: string) => void;
  search: UseSetStateReturn<{
    query: string;
    results: ITourItem[];
  }>;
};

export function TourSearch({ search, onSearch }: Readonly<Props>) {
  const router = useRouter();

  const { state } = search;

  const handleClick = (id: string) => {
    router.push(paths.dashboard.tours.details(id));
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (state.query) {
      if (event.key === 'Enter') {
        const selectProduct = state.results.filter((tour) => tour.name === state.query)[0];

        handleClick(selectProduct.id);
      }
    }
  };

  return (
    <Autocomplete
      sx={{ width: { xs: 1, sm: 260 } }}
      autoHighlight
      popupIcon={null}
      options={state.results}
      onInputChange={(event, newValue) => onSearch(newValue)}
      getOptionLabel={(option) => option.name}
      noOptionsText={<SearchNotFound query={state.query} />}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      slotProps={{
        popper: { placement: 'bottom-start', sx: { minWidth: 320 } },
        paper: { sx: { [` .${autocompleteClasses.option}`]: { pl: 0.75 } } },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search..."
          onKeyUp={handleKeyUp}
          slotProps={{
            input: {
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
      renderOption={(props, tour, { inputValue }) => {
        const matches = match(tour.name, inputValue);
        const parts = parse(tour.name, matches);

        return (
          <Box component="li" {...props} onClick={() => handleClick(tour.id)} key={tour.id}>
            <Avatar
              key={tour.id}
              alt={tour.name}
              src={tour.images[0]}
              variant="rounded"
              sx={{
                mr: 1.5,
                width: 48,
                height: 48,
                flexShrink: 0,
                borderRadius: 1,
              }}
            />

            <div key={inputValue}>
              {parts.map((part) => (
                <Typography
                  key={part.text}
                  component="span"
                  color={part.highlight ? 'primary' : 'textPrimary'}
                  sx={{
                    typography: 'body2',
                    fontWeight: part.highlight ? 'fontWeightSemiBold' : 'fontWeightMedium',
                  }}
                >
                  {part.text}
                </Typography>
              ))}
            </div>
          </Box>
        );
      }}
    />
  );
}
