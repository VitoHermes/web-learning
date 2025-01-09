// 模拟获取运动的api

const exercise = [
    { id: 1, title: 'Exercise 1', calories: 100 },
    { id: 2, title: 'Exercise 2', calories: 200 },
    { id: 3, title: 'Exercise 3', calories: 300 },
    { id: 4, title: 'Exercise 3', calories: 300 },
    { id: 5, title: 'Exercise 5', calories: 500 },
    { id: 6, title: 'Exercise 6', calories: 600 },
];

const FAKE_DELAY = 2000;
const fakeExerciseAPI = {
    fetchExercise: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(exercise);
            }, FAKE_DELAY);
        });
    },

    addExercise: (exercise) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                exercise.id = Math.max(...exercise.map((e) => e.id)) + 1;
                exercise.push(exercise);
                resolve(exercise);
            }, FAKE_DELAY);
        });
    },
};

export default fakeExerciseAPI;
