---
title: ES6学习笔记
date: 2019-05-06 16:06:15
tags:
 - javaScript 
 - ES6
 - 闭包
---

# 记录ES6学习过程中的一些内容
> 部分摘自[ECMAScript 6 入门](http://es6.ruanyifeng.com/#README)

## let和const

### let

ES6 新增了`let`，用来声明变量。它的用法类似于`var`，但**声明的变量只在`let`命令所在的代码块内有效**。
``` js
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```
上面代码在代码块之中，分别用let和var声明了两个变量。然后在代码块之外调用这两个变量，结果let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在的代码块有效。

> 面试题： let和var的区别是什么？

- let声明的变量只在`let`命令所在的代码块内有效, 而且有暂时性死区的约束

	```js
	题目1：
	var a = 99;            // 全局变量a
	f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
	console.log(a);        // a=>99,  此时是全局变量的a
	function f() {
		console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
		var a = 10;
		console.log(a);      // a => 10
	}

	// 输出结果：
	undefined
	10
	99
	```

- ES6之前，我们都是用var来声明变量，而且JS只有*函数作用域*和*全局作用域*，没有*块级作用域*，所以{}限定不了var声明变量的访问范围。

	``` js
	{ 
		var i = 9;
	} 
	console.log(i);  // 9
	```

	**ES6**
	``` js
	{ 
		let i = 9; 	//只在所在的代码块有效
	} 
	console.log(i);  // Uncaught ReferenceError: i is not defined
	```

> 又一个面试题：

``` js
for (var i = 0; i <10; i++) {  
	setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
		console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
	}, 0);
}
// 输出结果
10   共10个
// 这里面的知识点： JS的事件循环机制，setTimeout的机制等
```

将`var`改成`let`

```js
// i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
for (let i = 0; i < 10; i++) { 
  setTimeout(function() {
    console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
  }, 0);
}
// 输出结果：
0  1  2  3  4  5  6  7  8 9
```

- 用let声明的变量，不存在变量提升
>ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
- let不允许在相同作用域内，重复声明同一个变量。

### ES6的数组去重
> ES6的数组去重：
``` JS
let arr = [1,1,'1','1',null,null,undefined,undefined,NaN,NaN];
console.log(new Set(arr));
let newArr = Array.from(new Set(arr)); //或者 [...new Set(arr)]
```
>ES5
``` js
var array = [1, '1', 1, 2, 3, 2, 4];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result); // => [1, "1", 2, 3, 4]
```
### const

1. `const`声明一个只读的常量。一旦声明，常量的值就不能改变. 这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

1. `const`的作用域与let命令相同：只在声明所在的块级作用域内有效。

1. `const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

1. `const`声明的常量，也与let一样不可重复声明。

1. `const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

>对于简单类型的数据（数值、字符串、布尔值），**值保存在变量指向的那个内存地址，因此等同于常量**。但对于复合类型的数据（主要是对象和数组），**变量指向的内存地址，保存的只是一个指向实际数据的指针**，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

## 块级作用域

`let`实际上为 JavaScript 新增了块级作用域。ES6 允许块级作用域的任意嵌套。

``` js
{{{{
  {let insane = 'Hello World'}
  console.log(insane); // 报错
}}}};
```
- 上面代码使用了一个五层的块级作用域，每一层都是一个单独的作用域。第四层作用域无法读取第五层作用域的内部变量。
- 内层作用域可以定义外层作用域的同名变量。
- *块级作用域的出现，实际上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了*

### 块级作用域与函数声明
ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。
``` js
// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}
```
上面两种函数声明，根据 ES5 的规定都是非法的。

ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

## 变量的解构赋值

### 数组的解构赋值

#### 基本用法

1. ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为**解构**（Destructuring）。

	以前，为变量赋值，只能直接指定值。

		let a = 1;
		let b = 2;
		let c = 3;
	ES6 允许写成下面这样。

		let [a, b, c] = [1, 2, 3];

	上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

	本质上,这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值.

	更多例子：
	``` js
	let [foo, [[bar], baz]] = [1, [[2], 3]];
	foo // 1
	bar // 2
	baz // 3

	let [ , , third] = ["foo", "bar", "baz"];
	third // "baz"

	let [x, , y] = [1, 2, 3];
	x // 1
	y // 3

	let [head, ...tail] = [1, 2, 3, 4];
	head // 1
	tail // [2, 3, 4]

	let [x, y, ...z] = ['a'];
	x // "a"
	y // undefined
	z // []
	```

2. 如果解构不成功，变量的值就等于`undefined`。

	``` js
	let [foo] = [];
	let [bar, foo] = [1];
	```

	以上两种情况都属于解构不成功，`foo`的值都会等于`undefined`。

3. 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
	``` js
	let [x, y] = [1, 2, 3];
	x // 1
	y // 2

	let [a, [b], d] = [1, [2, 3], 4];
	a // 1
	b // 2
	d // 4
	```
	上面两个例子，都属于不完全解构，但是可以成功。

4. 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

	``` js
	let [foo] = 1; //false; NaN; undefined; null; {};
	```

	上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备 Iterator 接口（{}）。

5. 对于 Set 结构，也可以使用数组的解构赋值。
	``` js
	let [x, y, z] = new Set(['a', 'b', 'c']);
	x // "a"
	```

事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。

#### 默认值

1. 解构赋值允许指定默认值。
	``` js
	let [foo = true] = [];
	foo // true

	let [x, y = 'b'] = ['a']; // x='a', y='b'
	let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
	```

	>注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。

	上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

	>参考： [null和undefined与NaN](https://xtzhu.github.io/2019/05/07/null和undefined与NaN/)

2. 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

3. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

### 对象的解构赋值

#### 简介

解构不仅可以用于数组，还可以用于对象。

对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，**变量必须与属性同名**，才能取到正确的值。
``` js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // 无同名属性 undefined
```
如果解构失败，变量的值等于`undefined`。

如果变量名与属性名不一致，必须写成下面这样。
``` js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
```
> 这实际上说明，对象的解构赋值是下面形式的简写

``` js
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
```
也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
``` js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined
```

上面代码中，`foo`是匹配的**模式**(json对象中的键)，`baz`才是变量。真正被赋值的是变量`baz`，而不是`模式foo`。

#### 默认值

对象的解构也可以指定默认值。
``` js
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
```

默认值生效的条件是，对象的属性值严格等于undefined。
``` js
var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null //属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效
```

>由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
``` js
let arr = [1, 2, 3];
let {0 : first, [arr.length - 1] : last} = arr; //方括号这种写法，属于“属性名表达式”
first // 1
last // 3
```

### 字符串的解构赋值

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个**类似数组**的对象。

``` js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let {length : len} = 'hello'; //类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
len // 5
```

### 数值和布尔值的解构赋值

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
``` js
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```
解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
``` js
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

### 圆括号问题
解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。
>可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
``` js
[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确
```

## 字符串

### 字符的 Unicode 表示法
ES6 加强了对 Unicode 的支持，允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的 Unicode 码点。

但是，这种表示法只限于码点在`\u0000`~`\uFFFF`之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

### 字符串的遍历器接口
ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。

除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。

### 模板字符串
模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
> 参考资料： [MDN模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)

``` js
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?` //模板字符串中嵌入变量，需要将变量名写在${}之中。
```

上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
> 如果你不想要这个换行，可以使用trim方法消除它。

大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

模板字符串之中还能调用函数。

如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

如果模板字符串中的变量没有声明，将报错。

由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

模板字符串甚至还能嵌套。

如果需要引用模板字符串本身，在需要时执行，可以写成函数。
``` js
let func = (name) => `Hello ${name}!`;
func('Jack') // "Hello Jack!"
```

### 新增方法

#### String-raw)()

ES6 还为原生的 String 对象，提供了一个raw()方法。该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。
``` js

String.raw`Hi\n${2+3}!`;
// 返回 "Hi\\n5!"

String.raw`Hi\u000A!`;
// 返回 "Hi\\u000A!"
```

如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义。
``` js 
String.raw`Hi\\n`
// 返回 "Hi\\\\n"
```
`String.raw()`方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

### 实例方法：includes(), startsWith(), endsWith()
JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。
- includes()：返回布尔值，表示是否找到了参数字符串。
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

这三个方法都支持第二个参数，表示开始搜索的位置。
``` js
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```
上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。