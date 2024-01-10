const btn = document.querySelector("button");
const txt = document.getElementById("text-area");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine had started";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped."
    }
}


// 模板字面量
const name = "克里斯";
const greeting = `你好，${name}`;
console.log(greeting);
const one = "你好，";
const two = "请问最近如何？";
const joined = `${one}${two}`;
console.log(joined); // "你好，请问最近如何？"

const button = document.querySelector("#button1");

function greet() {
    const name = prompt("你叫什么名字？");
    const greeting = document.querySelector("#greeting");
    const song = "青花瓷";
    const score = 9;
    const highestScore = 10;
    const output = `我喜欢歌曲《${song}》。我给它打了 ${(score / highestScore) * 100
        } 分。`;
    console.log(output); // "我喜欢歌曲《青花瓷》。我给它打了 90 分。"
    greeting.textContent = `你好呀，${name}！很高兴见到你！${output}`;
}

button.addEventListener("click", greet);

const greeting1 = "你好";
const name1 = "克里斯";
console.log(`${greeting1}，${name1}`); // "你好，克里斯"


// 获取字符串长度
let bType = 'dafqgewqg';
bType.length;


// 字符串处理
 /*
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];


for (var i = 0; i < stations.length; i++) {
    var input = stations[i];
    // write your code just below here
    var code = input.slice(0,3);
    var location = input.indexOf(';');
    var nameOfPeople = input.slice(location+1, input.length - 1);
    var result = `${code}: ${nameOfPeople}`;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}
*/
// 数组
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ["tree", 795, [0, 1, 2]];

let sequence1 = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

//分割字符串
let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(',');
console.log(myArray);

//数组变为字符串
let myNewString = myArray.join(',');
myArray.push('Chris');
myArray.push("Bradford", "Brighton");
myArray;
let removedItem = myArray.pop(); //删除最后一个元素
console.log(myArray);

myArray.unshift("Edinburgh") //加到最前面
console.log(myArray);

let shifi = myArray.shift();


//test
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');

console.log(list);

var total = 0.0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
    var subArray = products[i].split(':');
    var name2 = subArray[0];
    var price = Number(subArray[1]);
    total += price;
    itemTxt = name2 + ' - $' + price;

    var listItem = document.createElement('li');
    listItem.textContent = itemTxt;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);