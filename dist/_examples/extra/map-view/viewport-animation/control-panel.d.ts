export type CityProps = {
    city: string;
    population: string;
    photoUrl: string;
    state: string;
    latitude: number;
    longitude: number;
};
type Props = {
    data: CityProps[];
    selectedCity: string;
    onSelectCity: (event: React.ChangeEvent<HTMLInputElement>, city: CityProps) => void;
};
export declare function ControlPanel({ data, selectedCity, onSelectCity }: Props): import("react/jsx-runtime").JSX.Element;
export {};
