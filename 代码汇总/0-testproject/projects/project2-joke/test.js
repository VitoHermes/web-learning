// 自定义变量，拿到输入和输出的变量
const customName = document.getElementById('customname'); //拿到姓名
const randomize = document.querySelector('.randomize'); // 拿到国家
const story = document.querySelector('.story'); //定位输出

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
} // 给一个数组，随机返回

// 存储笑话的内容
var storyText ='今天气温 34 摄氏度，:inserta: 出去遛弯。当走到:insertb: 门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。'
var insertX = [
'怪兽威利',
'大老爹',
'圣诞老人'];

var insertY = [
'肯德基',
'迪士尼乐园',
'白宫']

var insertZ =[
'自燃了',
'在人行道化成了一坨泥',
'变成一条鼻涕虫爬走了'];

// 事件监听器和未完成的函数定义

randomize.addEventListener('click', result);


function result() {
    var myStory = storyText; // 用一个新变量来操作
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);
    myStory = myStory.replace(':inserta:', xItem).replace(':insertb:', yItem).replace(':insertc:', zItem).replace(':inserta:', xItem);

    if (customName.value !== '') { // 替换名字
        let name = customName.value;
        myStory = myStory.replace(xItem, name);
    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);
    }

    story.textContent = myStory;
    story.style.visibility = 'visible';
}