import type { Country } from 'react-phone-number-input';
import { countries } from '../../assets/data/countries';
export declare function getCountryCode(inputValue: string, countryCode?: Country): import("libphonenumber-js/types.cjs").CountryCode | undefined;
export declare function getCountry(countryCode?: Country): {
    code: string;
    label: string;
    phone: string;
};
type ApplyFilterProps = {
    query: string;
    inputData: typeof countries;
};
export declare function applyFilter({ inputData, query }: ApplyFilterProps): {
    code: string;
    label: string;
    phone: string;
}[];
export {};
