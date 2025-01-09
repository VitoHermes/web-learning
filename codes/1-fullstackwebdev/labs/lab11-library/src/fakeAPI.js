const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', description: 'Description 3' },
    { id: 4, title: 'Book 4', author: 'Author 4', description: 'Description 4' },
    { id: 5, title: 'Book 5', author: 'Author 5', description: 'Description 5' },
];

const food = [
    { id: 1, name: 'Food 1', calories: 100, mealType: 'breakfast' },
    { id: 2, name: 'Food 2', calories: 200, mealType: 'lunch' },
    { id: 3, name: 'Food 3', calories: 300, mealType: 'dinner' },
    { id: 4, name: 'Food 4', calories: 400, mealType: 'snacks' }
];


const FAKE_DELAY = 2000;
const fakeAPI = {
    fetchFoods: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(food);
            }, FAKE_DELAY);
        });
    },
    addFood: (food) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                food.id = Math.max(...food.map((f) => f.id)) + 1;
                food.push(food);
                resolve(food);
            }, FAKE_DELAY);
        });
    },

    fetchBooks: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(books);
            }, FAKE_DELAY);
        });
    },

    addBook: (book) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                book.id = Math.max(...books.map((b) => b.id)) + 1;
                books.push(book);
                resolve(book);
            }, FAKE_DELAY);
        });
    },
};

export default fakeAPI;
