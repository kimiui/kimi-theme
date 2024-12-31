import type { IJobItem } from 'kimi-theme/types/job';
import type { UseSetStateReturn } from 'kimi-theme/hooks';

import Box from '@mui/material/Box';
import { useRouter } from 'routes-react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@mui/material/TextField';
import { paths } from 'kimi-theme/routes/paths';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import { Iconify } from 'kimi-theme/components/iconify';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchNotFound } from 'kimi-theme/components/search-not-found';

// ----------------------------------------------------------------------

type Props = {
  onSearch: (inputValue: string) => void;
  search: UseSetStateReturn<{
    query: string;
    results: IJobItem[];
  }>;
};

export function JobSearch({ search, onSearch }: Readonly<Props>) {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(paths.dashboard.jobs.details(id));
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (search.state.query) {
      if (event.key === 'Enter') {
        const selectProduct = search.state.results.filter(
          (job) => job.title === search.state.query
        )[0];

        handleClick(selectProduct.id);
      }
    }
  };

  return (
    <Autocomplete
      sx={{ width: { xs: 1, sm: 260 } }}
      autoHighlight
      popupIcon={null}
      options={search.state.results}
      onInputChange={(event, newValue) => onSearch(newValue)}
      getOptionLabel={(option) => option.title}
      noOptionsText={<SearchNotFound query={search.state.query} />}
      isOptionEqualToValue={(option, value) => option.id === value.id}
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
      renderOption={(props, job, { inputValue }) => {
        const matches = match(job.title, inputValue);
        const parts = parse(job.title, matches);

        return (
          <Box component="li" {...props} onClick={() => handleClick(job.id)} key={job.id}>
            <div>
              {parts.map((part, index) => (
                <Typography
                  key={index}
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
