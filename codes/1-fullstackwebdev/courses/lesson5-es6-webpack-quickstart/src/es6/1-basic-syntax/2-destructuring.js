/**
 * 必须熟练掌握的知识点有5个
 * 1. 数组解构赋值
 * 2. 对象解构赋值
 * 3. 字符串解构赋值
 * 4. 函数传参中的解构
 * 5. 一个复杂的解构例子
 */

/**
 * 1. 数组解构赋值
 */
//一次声明多个变量并赋值

// let [a, b, c] = [1, 2, 3];
// console.log(a);
// console.log(b);
// console.log(c);


// let [d, e] = [4, 5, 6];
// console.log(d);
// console.log(e);

// let [f, [g]] = [4, [5, 6]];
// console.log(f);
// console.log(g);

// 对象字面赋值,顺序不重要  
// let { addr = 'Beijing', userName, userAge } = { addr:'Melbourne',userName: "damo", userAge: 18 };
// console.log(userName);
// console.log(userAge);
// console.log(addr);

//两边参数数量不同的时候，变量可以带默认值，可以加别名
// let {name, age, addr: address = "北京市"} = {"name": "damoqiongqiu", "age": 18, "addr": 'Melbourne'};
// console.log(name);
// console.log(age);
// console.log(address);

// //带rest运算符的情况

// let [str1, ...str2] = 'hello';
// console.log(str1);
// console.log(str2);

// let [h, ...i] = [1, 2, 3, 4, 5];
// console.log(h);
// console.log(i); //注意i这时候是个数组

// //数据类型不同的情况
// let [l, m] = [1, "damo", 3];
// console.log(l);
// console.log(">>>" + m);

// let user = {
//     userName: 'damo',
//     userAge: 18,
//     userAddr: 'Beijing',
//     userSkills: ['JS', 'TS', 'MySQL', 'Linux'],
//     phones: [{
//         SIM: '12345678911',
//         operator: '中国移动',
//         addr: '北京市'
//     },
//     {
//         SIM: '12345678912',
//         operator: '中国联通',
//         addr: '南京市'
//     }]
// }


let [a, [b], c] = [1, [2, 3], 4];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 4

let [d,e,f] = [1,[2,3],5];
console.log(d); // 1
console.log(e); // [2,3]
console.log(f); // 5
// function printUserInfo(user) {
//     let {userName, userAge, userAddr, userSkills, phones:[{SIM: firstSIM}, {SIM: secondSIM}]} = user;
//     console.log(userName);
//     console.log(userAge);
//     console.log(userAddr);
//     console.log(userSkills[0]);
//     console.log(firstSIM);
//     console.log(secondSIM);
// }

// printUserInfo(user);

// //交换变量值更加快捷
// let [j, k] = [1, 2];
// [j, k] = [k, j];
// console.log(j);
// console.log(k);

// //利用数组的解构赋值，可以让函数返回多个值
// function getData() {
//     return [1, 2];
// }

// /**
//  * 数组解构赋值会按照索引位置进行赋值
//  * 内部机制是：只要右侧对象实现了Iterator接口，就可以解构，String/Array/Map/Set/Generator这些类型都默认实现了Iterator
//  * 所以，没有实现Iterator接口的数据不能解构
//  */
// // let [a, b] = new Set([1, 2]);
// // console.log(a);
// // console.log(b);

// let [n] = "Hello"; //这是可以的，因为String类型实现了Iterator接口
// console.log(n);
// // let [h] = 1;//报错
// // console.log(h);

// /**
//  * 2. 对象解构赋值
//  */
// //最基本的对象解构，用来提取JSON值非常方便
// // let { name, age } = { name: "damo", age: 18 };
// // console.log(name);
// // console.log(age);

// //对象解构也可以带默认值
// // let { name, age, addr = "北京市朝阳区" } = { name: "damo", age: 18 };
// // console.log(name);
// // console.log(age);
// // console.log(addr);

// //变量顺序没有关系，按照键名匹配
// let { job, year } = { year: 11, job: "码工" };
// console.log(job);
// console.log(year);

// //解构时可以给变量起别名
// // let { job: myJob, year: workYear } = { year: 11, job: "码工" };
// // console.log(myJob);
// // console.log(workYear);

// //利用别名机制可以把其它类型的数据进行解构
// let { toString: str } = 123;
// console.log(str == Number.prototype.toString);
// //str是别名，123会首先转成包装型Number，然后获取上面对应的toString属性，然后再赋值给别名str

// /**
//  * 3. 字符串解构赋值
//  */
// const [var1] = "hello";
// console.log(var1);

// /**
//  * 4. 函数传参中的解构
//  */
// function sum({ a = 0, b = 0 }) {
//     return a + b;
// }
// console.log(sum({ a: 1, b: 2 }));

// /**
//  * 5. 一个复杂的解构例子
//  */
// let obj = {
//     userName: "大漠",
//     userAge: 18,
//     skills: ["Java", "JS", "TS", "MySQL", "Linux"],
//     phones: [
//         {
//             SIM: "12345678911",
//             operator: "中国移动",
//             addr: "北京市"
//         },
//         {
//             SIM: "12345678911",
//             operator: "中国联通",
//             addr: "南京市"
//         }
//     ],
//     sayHello: function([job = "码工"]) {
//         console.log(`Hello ${userName},${job}`);
//     }
// };

// let {
//     userName,
//     userAge,
//     skills,
//     phones,
//     phones: [{ SIM }],
//     sayHello
// } = obj;
// console.log(skills);
// console.log(phones);
// console.log(SIM);
// sayHello(["高级码工"]);

//从上面的例子可以看到，解构赋值可以写得非常复杂
//在实际开发过程中尽量避免使用复杂的结构赋值，那样的代码人类无法阅读
