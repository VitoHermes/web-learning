let shoppingCart = [];
//添加物品并输出
shoppingCart.push("apple");
shoppingCart.push("banana");
shoppingCart.push("cherry");
console.log(shoppingCart);


//删除物品并输出
shoppingCart.pop();
console.log(shoppingCart);

//循环
for (let i = 0; i < shoppingCart.length; i++) {
    if (i > 5) {
        console.log("你的购物车满了");
        break;
    }
    num = i + 1;
    console.log(num + '.' + shoppingCart[i]);
}


// 查询是否在清单内

// 重新构建物品对象
let item1 = {
    name: "apple",
    price: 1,
    quantity: 10
}

let item2 = {
    name: "banana",
    price: 2,
    quantity: 20
}

let item3 = {
    name: "cherry",
    price: 3,
    quantity: 30
}

// 购物清单
let newShoppingCart = [];

// 添加购物清单
newShoppingCart.push(item1);
newShoppingCart.push(item2);
newShoppingCart.push(item3);


function isInCart(name) {
    return newShoppingCart.some(item => item.name === name);
}

console.log(isInCart("apple")); // True
console.log(isInCart("banana")); // True
console.log(isInCart("cherry")); // True
console.log(isInCart("orange")); // False