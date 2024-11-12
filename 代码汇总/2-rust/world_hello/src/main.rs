const MAX_POINTS: u32 = 100_000; //常量
fn greet_world() {
    let soutern_germay = "Grüß Gott!";
    let chinese = "你好，世界！";
    let english = "Hello, world!";
    let regions = [soutern_germay, chinese, english];
    for region in regions {
        println!("{}", &region);
    }
}
fn fn_two() {
    // 控制流：for 和 continue 连在一起使用，实现循环控制。
    // 方法语法：由于 Rust 没有继承，因此 Rust 不是传统意义上的面向对象语言，但是它却从 OO 语言那里偷师了方法的使用 record.trim()，record.split(',') 等。
    // 高阶函数编程：函数可以作为参数也能作为返回值，例如 .map(|field| field.trim())，这里 map 方法中使用闭包函数作为参数，也可以称呼为 匿名函数、lambda 函数。
    // 类型标注：if let Ok(length) = fields[1].parse::<f32>()，通过 ::<f32> 的使用，告诉编译器 length 是一个 f32 类型的浮点数。这种类型标注不是很常用，但是在编译器无法推断出你的数据类型时，就很有用了。
    // 条件编译：if cfg!(debug_assertions)，说明紧跟其后的输出（打印）只在 debug 模式下生效。
    // 隐式返回：Rust 提供了 return 关键字用于函数返回，但是在很多时候，我们可以省略它。因为 Rust 是 基于表达式的语言。

    let penguin_data = "\
    common name,length (cm)
    Little penguin,33
    Yellow-eyed penguin,65
    Fiordland penguin,60
    Invalid,data
    ";
    let records = penguin_data.lines();
    for (i, record) in records.enumerate() {
        if i == 0 || record.trim().len() == 0 {
            continue; // 跳过第一行和空行
        }
        let fields: Vec<_> = record.split(',').map(|field| field.trim()).collect();
        // 根据“，”分割字符串

        if cfg!(debug_assertions) {
            // 输出到标准错误输出
            eprintln!("debug: {:?} -> {:?}", record, fields);
        }
        let name = fields[0];
        if let Ok(length) = fields[1].parse::<f32>() {
            // 输出到标准输出
            println!("{}, {}cm", name, length);
        }
    }
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn rust_basic() {
    // 使用let来声明变量，进行绑定，a是不可变的
    // 此处没有指定a的类型，编译器会默认根据a的值为a推断类型：i32，有符号32位整数
    // 语句的末尾必须以分号结尾
    let a = 10;

    //主动指定b的类型为i32
    let b: i32 = 10;
    let mut c = 30i32;
    c = 40;
    let d = 30_i32;
    let e = add(add(a, b), add(c, d));
    println!("(a + b) + (c + d) = {}", e);
    // Rust 使用 {} 来作为格式化输出占位符，其它语言可能使用的是 %s，%d，%p 等，
    //由于 println! 会自动推导出具体的类型，因此无需手动指定

    // 变量解构
    let (a, mut b): (bool, bool) = (true, false);
    println!("a = {:?}, b = {:?}", a, b);
    println!("a = {}, b = {}", a, b);

    b = true;
    println!("a = {}, b = {}", a, b);
    assert_eq!(a, b);
    struct Struct {
        e: i32,
    }
    let (a, b, c, d, e);
    (a, b) = (1, 2);
    [c, .., d, _] = [1, 2, 3, 4, 5];
    Struct { e, .. } = Struct { e: 5 };

    assert_eq!([1, 2, 1, 4, 5], [a, b, c, d, e]);

    let x = 5;
    let x = x + 1;
    {
        let x = x * 2;
        // 第二个 let 生成了完全不同的新变量，两个变量只是恰好拥有同样的名称
        println!("The value of x in the inner scope is: {}", x);
    }
    println!("The value of x is: {}", x);

    let spaces = "    ";
    let spaces = spaces.len();
    println!("The value of spaces is: {}", spaces);

    let mut spaces = "    ";
    // spaces = spaces.len(); 会报错 expected `&str`, found `usize`
}

fn variables_practice() {
    // 修复下面代码的错误并尽可能少的修改
    let x: i32 = 10;
    let _y: i32;
    println!("x is equal to {}", x);

    // 可以使用 mut 将变量标记为可变
    let mut x = 1;
    x += 2;
    println!("x is equal to {}", x);

    // 变量的作用域
    let x: i32 = 10;
    let y: i32 = 5;
    {
        let y: i32 = 5;
        println!("x is equal to {}, y is equal to {}", x, y);
    }
    println!("x 的值是 {}, y 的值是 {}", x, y);

    // 修复错误

    let x = define_x();
    println!("{}, world", x);
  
    // 变量屏蔽

}

fn define_x() -> &'static str { //定义返回值
    "hello"
}


fn basic_types() {
    // 基本类型
}
fn main() {
    // greet_world();
    // fn_two();
    // rust_basic();
    // variables_practice();
    basic_types();
}
