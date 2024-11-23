/**
 * 注意：spread 的字面含义是“展开”，某些中文资料翻译成“扩展”，不贴切，还是叫“展开”好
 * 需要熟练掌握的知识点有6个
 * 1. 自动展开数组
 * 2. 数组复制
 * 3. 数组合并
 * 4. 字符串展开
 * 5. 其它实现了Iterator接口的对象都可以展开
 * 6. 实战中的意义：让很多操作变得方便
 */


let arr = [1, 2, 3];
// // 复制数组
// const arr2 = [...arr];
// const arr3 = arr;
// console.log(arr);
// console.log(arr3);
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// arr.forEach(item => {
//     console.log(item);
// })
// console.log(...arr); // 自动展开数组
// //1. 自动展开数组
// console.log(...[1, 2, 3]);
// console.log(1, ...[2, 3, 4], 5);

// //2. 数组复制
// const a1 = [1, 2];
// const a2 = [...a1];
// const [...a2] = a1;


// //3. 数组合并
// let arr2 = [4,5];
// let arr3 = [6,7];
// let arr4 = [...arr2, ...arr3];
// let arr5 = [...arr2, ...arr2];
// console.log(arr4);
// console.log(arr5);
// const arr1 = ["a", "b"];
// const arr2 = ["c"];
// const arr3 = ["d", "e"];
// [...arr1, ...arr2, ...arr3];

// //4. 字符串展开
console.log(..."Hello，大漠");

// //5. 所有实现了Iterator接口的对象都可以展开
// console.log(...new Set([1, 2, 3, 4]));

// //6. 实用场景：让某些函数调用更加方便
// console.log(Math.max(...[1, 2, 3, 4]));
