/**
 * ES6为String扩展了一些非常好用的新特性，需要熟练掌握的特性有3点
 * 1. 模板字符串
 * 2. 一些好用的工具函数
 * 全量特性：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
/**
 * 1. 模板字符串，这是一个重大的版本更新，基本解决了HTML拼接过程中的难题
 */

// 常用的方法 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// string.substring()

// let str = "Hello,大漠穷秋";
// console.log('截取前5个字符：' + str.substring(0, 5));
// console.log('截取从第5个字符开始到最后的字符：' + str.substring(5));
// console.log('以逗号为分隔符，分割成数组：' + str.split(","));
// console.log('是否包含大漠穷秋：' + str.includes("大漠穷秋"));
// console.log('是否以Hello开头：' + str.startsWith("Hello"));
// console.log('是否以大漠穷秋结尾：' + str.endsWith("大漠穷秋"));
// console.log('重复3次：' + str.repeat(3));
// console.log('在字符串前面填充test：' + str.padStart(10, "test"));
// console.log('在字符串后面填充test：' + str.padEnd(10, "test"));




let user = {
    name: "Chris",
    age: 18,
    addr: "北京市朝阳区东四环北路1号朝阳公园",
    sayHello: function () {
        return this.name;
    }
};
// 模板字符串
let str2 = `
<div>用户名:${user.name}</div>
<div>年龄:${user.age}</div>
<div>地址:${user.addr}</div>
<div>打招呼:${user.sayHello()}</div>
`;
console.log(str2);

document.body.innerHTML = str2;

// let str2 = "用户名：" + user.name + ",年龄:" + user.age;
// console.log(str2);

// //超级好用的特性，可以换行，还可以执行方法
// let str3 = `用户名：${user.name},年龄：${user.age}，打招呼：${user.sayHello()}`;
// console.log(str3);

// document.body.innerHTML = `
//     <div>这里可以换行真是太爽了！${user.name}</div>
//     <div>这里可以换行真是太爽了！${user.name}</div>
//     <div>这里可以换行真是太爽了！${user.name}</div>
//     <div>这里可以换行真是太爽了！${user.name}</div>
//     <div>这里可以换行真是太爽了！${user.name}</div>
// `;

// //更高级的用法，在模板字符串中执行复杂的逻辑代码
let userList=[
    {
        name:"damoqiongqiu",
        age:18,
        addr:"北京市朝阳区东四环北路1号朝阳公园"
    },
    {
        name:"damoqiongqiu",
        age:18,
        addr:"北京市朝阳区东四环北路1号朝阳公园"
    },
    {
        name:"damoqiongqiu",
        age:18,
        addr:"北京市朝阳区东四环北路1号朝阳公园"
    },
    {
        name:"damoqiongqiu",
        age:18,
        addr:"北京市朝阳区东四环北路1号朝阳公园"
    },
    {
        name:"damoqiongqiu",
        age:18,
        addr:"北京市朝阳区东四环北路1号朝阳公园"
    }
];
let tempHTML = `
    <ul>
        ${
            userList.map((item,i)=>{
                return `<li>${i+1}. 用户名：${item.name}, 年龄：${item.age}, 地址：${item.addr}</li>`;
            }).join('')
        }
    </ul>
`
document.body.innerHTML = tempHTML;
// let tempHTML=`
//     <ul>
//         ${
//             userList.map((item,i)=>{
//                 return `<li>用户名：${item.name}-年龄：${item.age}-地址：${item.addr}</li>`;
//             }).join('')
//         }
//     </ul>`;
// document.body.innerHTML=tempHTML;

// //2. 一些好用的工具函数：includes(), startsWith(), endsWith(),repeat(),padStart(),padEnd(),matchAll()
// let str="Hello";
// console.log(str.includes("Hello"));
// console.log(str.startsWith("Hello"));
// console.log(str.endsWith("Hello"));
// console.log(str.repeat(3));
// console.log(str.padStart(10, "test"));
// console.log(str.padEnd(10, "test"));

// let regExp=/^Hello/g;
// console.log(...str.matchAll(regExp));

