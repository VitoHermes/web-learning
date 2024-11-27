let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = function() {
        console.log(i);
    }
}

console.log(arr);

arr[5]();


const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);