// 模拟获取食物的api

const food = [
    { id: 1, name: 'Food 1', calories: 100, mealType: 'breakfast' },
    { id: 2, name: 'Food 2', calories: 200, mealType: 'lunch' },
    { id: 3, name: 'Food 3', calories: 300, mealType: 'dinner' },
    { id: 4, name: 'Food 4', calories: 400, mealType: 'snacks' },
    { id: 5, name: 'Food 5', calories: 500, mealType: 'breakfast' },
    { id: 6, name: 'Food 6', calories: 600, mealType: 'lunch' },
    { id: 7, name: 'Food 7', calories: 700, mealType: 'dinner' },
    { id: 8, name: 'Food 8', calories: 800, mealType: 'snacks' },
];
const FAKE_DELAY = 1000;
const fakeFoodAPI = {
    fetchFood: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(food);
            }, FAKE_DELAY);
        });
    },

    addFood: (newFood) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                newFood.id = Math.max(...food.map((f) => f.id)) + 1;
                food.push(newFood);
                resolve(newFood);
            }, FAKE_DELAY);
        });
    },
};

export default fakeFoodAPI;
