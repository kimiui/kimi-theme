import type { UseSetStateReturn } from 'kimi-theme/hooks';
import type { SelectChangeEvent } from '@mui/material/Select';
import type { IProductTableFilters } from 'kimi-theme/types/product';

import { useCallback } from 'react';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useSetState } from 'kimi-theme/hooks';
import InputLabel from '@mui/material/InputLabel';
import { varAlpha } from 'kimi-theme/theme/styles';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Iconify } from 'kimi-theme/components/iconify';
import { usePopover, CustomPopover } from 'kimi-theme/components/custom-popover';

// ----------------------------------------------------------------------

type Props = {
  filters: UseSetStateReturn<IProductTableFilters>;
  options: {
    stocks: {
      value: string;
      label: string;
    }[];
    publishs: {
      value: string;
      label: string;
    }[];
  };
};

export function ProductTableToolbar({ filters, options }: Props) {
  const popover = usePopover();

  const local = useSetState<IProductTableFilters>({
    stock: filters.state.stock,
    publish: filters.state.publish,
  });

  const handleChangeStock = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({
        stock: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [local]
  );

  const handleChangePublish = useCallback(
    (event: SelectChangeEvent<string[]>) => {
      const {
        target: { value },
      } = event;

      local.setState({
        publish: typeof value === 'string' ? value.split(',') : value,
      });
    },
    [local]
  );

  const handleFilterStock = useCallback(() => {
    filters.setState({ stock: local.state.stock });
  }, [filters, local.state.stock]);

  const handleFilterPublish = useCallback(() => {
    filters.setState({ publish: local.state.publish });
  }, [filters, local.state.publish]);

  return (
    <>
      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel htmlFor="product-filter-stock-select-label">Stock</InputLabel>

        <Select
          multiple
          value={local.state.stock}
          onChange={handleChangeStock}
          onClose={handleFilterStock}
          input={<OutlinedInput label="Stock" />}
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-stock-select-label' }}
          sx={{ textTransform: 'capitalize' }}
        >
          {options.stocks.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.stock.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}
          <MenuItem
            onClick={handleFilterStock}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ flexShrink: 0, width: { xs: 1, md: 200 } }}>
        <InputLabel htmlFor="product-filter-publish-select-label">Publish</InputLabel>
        <Select
          multiple
          value={local.state.publish}
          onChange={handleChangePublish}
          onClose={handleFilterPublish}
          input={<OutlinedInput label="Publish" />}
          renderValue={(selected) => selected.map((value) => value).join(', ')}
          inputProps={{ id: 'product-filter-publish-select-label' }}
          sx={{ textTransform: 'capitalize' }}
        >
          {options.publishs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                disableRipple
                size="small"
                checked={local.state.publish.includes(option.value)}
              />
              {option.label}
            </MenuItem>
          ))}

          <MenuItem
            disableGutters
            disableTouchRipple
            onClick={handleFilterPublish}
            sx={{
              justifyContent: 'center',
              fontWeight: (theme) => theme.typography.button,
              border: (theme) =>
                `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.16)}`,
              bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
            }}
          >
            Apply
          </MenuItem>
        </Select>
      </FormControl>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:printer-minimalistic-bold" />
            Print
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:import-bold" />
            Import
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:export-bold" />
            Export
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
