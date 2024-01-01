const select = document.getElementById('weather');
const para = document.querySelector(".output1");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === "sunny") {
        para.textContent = "阳光明媚。穿上短裤吧！去海滩，或公园，吃个冰淇淋。";
    } else if (choice === "rainy") {
        para.textContent = "外面下着雨；带上雨衣和雨伞，不要在外面呆太久。";
    } else if (choice === "snowing") {
        para.textContent =
            "大雪纷飞，天寒地冻！最好呆在家里喝杯热巧克力，或者去堆个雪人。";
    } else if (choice === "overcast") {
        para.textContent =
            "虽然没有下雨，但天空灰蒙蒙的，随时都可能变天，所以要带一件雨衣以防万一。";
    } else {
        para.textContent = "";
    }
}

const select1 = document.getElementById('theme');
const body = document.querySelector('body');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}

select1.addEventListener('change', () => {
    const choice = select1.value;

    switch (choice) {
        case 'black':
            update('black', 'white');
            break;
        case 'white':
            update('white', 'black');
            break;
        case 'purple':
            update('purple', 'white');
            break;
        case 'yellow':
            update('yellow', 'darkgray');
            break;
        case 'psychedelic':
            update('lime', 'purple');
            break;
    }
});

var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
var info = "My cats are called ";
var para1 = document.getElementById('para');

for (var i=0; i<cats.length; i++) {
    info += cats[i] + ', ';
}
info = info.slice(0,info.length-2); //去掉最后的逗号

para1.textContent = info;