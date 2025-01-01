"use strict";
// ----------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.createData = createData;
function createData(name, calories, fat, carbs, protein, price) {
    return {
        name: name,
        calories: calories,
        fat: fat,
        carbs: carbs,
        protein: protein,
        price: price,
        history: [
            { date: '2020-01-05', customerId: '11091700', amount: 3 },
            { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
        ],
    };
}
