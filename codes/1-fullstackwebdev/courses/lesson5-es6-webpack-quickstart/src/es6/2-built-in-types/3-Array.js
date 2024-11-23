/**
 * ES6给Array扩展了一些非常方便的工具和函数，必须熟练掌握的特性有3点：
 * 1. Array.from()可以把各种实现了Iterator接口的对象转换成数组
 * 2. Array.of()可以把一组值转换成数组
 * 3. 一系列好用的工具方法
 */
// 常用的用法
// 1. 【映射】Array.map((x)=>{})
// 2. 【过滤】Array.filter((x)=>x.length>3)
// 3. 【累加】Array.reduce((x,y)=>{},initValue)
// 4. 【遍历】Array.forEach((x)=>{})
// 5. 【判断】Array.some((x)=>{})
// 6. 【排序】Array.sort((x,y)=>{})
// 7. 【查找】Array.find((x)=>{})
// 8. 【查找】Array.findIndex((x)=>{})
// 9. 【拼接】Array.join()
// 10. 【包含】Array.includes()

// let arr = [1,2,3,4,5];
// arr = arr.map(
//     (x) => x*x
// );
// console.log(arr);
/**
 * 1. Array.from()可以把各种实现了Iterator接口的对象转换成数组
 */
// //把字符串转换成数组
// let arr1=Array.from("Hello World!");
// console.log(arr1);

// //把对象转换成数组
// let arr2=Array.from({
//     "0":"a",
//     "1":"b",
//     "2":"c",
//     length:1
// });
// console.log(arr2);

// //带有length属性的对象可以转换成数组
// arr1 = Array.from({ length: 3 });
// console.log(arr1);

// /**
//  * 2. Array.of()可以把一组值转换成数组
//  */
// arr1 = Array.of(3, 11, 8);
// console.log(arr1);

// /**
//  * 3. 一系列好用的工具方法
//  * includes()/find()/findIndex()
//  * fill()
//  * flat()/flatMap()
//  */
// //查找工具find()和findIndex()
// [1, 4, -5, 10].find(n => n < 0);
// [1, 5, 10, 15].findIndex((value)=> {
//     return value > 9;
// });

// //fill()
// ["a", "b", "c"].fill(7);

// //includes()
// [1, 2, 3].includes(2);

// //flat()/flatMap()
// [1, 2, [3, 4]].flat();
// [1, 2, [3, [4, 5]]].flat();
// [1, 2, [3, [4, 5]]].flat(2);
// [1, [2, [3]]].flat(Infinity);
// [1, 2, 3, 4].flatMap(x => [[x * 2]]);
