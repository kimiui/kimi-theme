export declare function createData(name: string, calories: number, fat: number, carbs: number, protein: number, price: number): {
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
    price: number;
    history: {
        date: string;
        customerId: string;
        amount: number;
    }[];
};
