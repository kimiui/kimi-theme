import type { IDateValue } from 'lib/types/common';
type Props = {
    data: {
        id: string;
        age: number;
        name: string;
        email: string;
        rating: number;
        status: string;
        isAdmin: boolean;
        lastName: string;
        firstName: string;
        performance: number;
        lastLogin: IDateValue;
    }[];
};
export declare function DataGridCustom({ data: rows }: Props): import("react/jsx-runtime").JSX.Element;
export {};
