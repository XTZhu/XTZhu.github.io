---
title: null和undefined与NaN
date: 2019-05-07 15:22:24
tags: javaScript
---

> 参考资料：[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)

> 参考资料：[47.描述以下变量的区别：null，undefined或undeclared？](https://www.cnblogs.com/syfwhu/p/4434132.html#)


大多数计算机语言，有且仅有一个表示"无"的值，比如，`C`语言的`NULL`，`Java`语言的`null`，`Python`语言的`None`，`Ruby`语言的`nil`。

有点奇怪的是，`JavaScript`语言居然有两个表示"无"的值：`undefined`和`null`。这是为什么？

## 相似性
在javaScript中，将一个变量赋值为`undefined`或`null`，老实说，几乎没区别。

undefined和null在if语句中，都会被自动转为false，相等运算符甚至直接报告两者相等。
``` js
if (!undefined) 
    console.log('undefined is false');		// undefined is false

if (!null) 
    console.log('null is false');		// null is false

var a = undefined;
var b = null;

a == b;		//true
a === b;	//false
```

> 既然`undefined`和`null`的含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加JavaScript的复杂度，令初学者困扰吗？Google公司开发的JavaScript语言的替代品`Dart`语言，就明确规定只有`null`，没有`undefined`！

原来，这与JavaScript的历史有关。1995年JavaScript诞生时，最初像Java一样，只设置了`null`作为表示"无"的值。

根据C语言的传统，null被设计成可以自动转为0。
``` js
Number(null) 	// 0
5 + null	 // 5
```

但是，JavaScript的设计者Brendan Eich，觉得这样做还不够，有两个原因。

首先，`null`像在Java里一样，被当成一个对象。但是，JavaScript的数据类型分成原始类型（primitive）和合成类型（complex）两大类，Brendan Eich觉得表示"无"的值最好不是对象。

其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果`null`自动转为0，很不容易发现错误。

因此，Brendan Eich又设计了一个`undefined`。

## 最初设计

JavaScript的最初版本是这样区分的：**null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。**
``` js
Number(undefined)  	// NaN
5 + undefined 		// NaN
```

## 目前的用法

但是，上面这样的区分，在实践中很快就被证明不可行。目前，`null`和`undefined`基本是同义的，只有一些细微的差别.

**null表示"没有对象"，即该处不应该有值**。典型用法是：

1. 用来初始化一个变量，这个变量可能被赋值为一个对象。

2. 用来和一个已经初始化的变量比较，这个变量可以是也可以不是一个对象。

3. 当函数的参数期望是对象时，被用作参数传入。

4. 当函数的返回值期望是对象时，被用作返回值传出。

2. 作为对象原型链的终点。

```js
Object.getPrototypeOf(Object.prototype) 	// null
```

**undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义**。典型用法是：

1. 变量被声明了，但没有赋值时，就等于undefined。

2.  调用函数时，应该提供的参数没有提供，该参数等于undefined。

3. 对象没有赋值的属性，该属性的值为undefined。

4. 函数没有返回值时，默认返回undefined。

``` js
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

>对已声明但未初始化的和未声明的变量执行typeof，都返回"undefined"。
null表示一个空对象指针，typeof操作会返回"object"。
一般不显式的把变量的值设置为undefined，但null相反，对于将要保存对象的变量，应明确的让该变量保存null值。

## 该如何检测它们？

null：表示无值；undefined：表示一个未声明的变量，或已声明但没有赋值的变量，或一个并不存在的对象属性。

### JS中如何判断undefined?

`==`运算符将两者看作相等。如果要区分两者，要使用`===`或`typeof`运算符。

**以下是不正确的用法：**
``` js
var exp = undefined;

if (exp == undefined) {
  alert("undefined");
}
```
exp为`null`时，也会得到与`undefined`相同的结果，虽然null和undefined不一样。
>注意：要同时判断undefined和null时可使用本法。

typeof返回的是字符串，有六种可能："number"、"string"、"boolean"、"object"、"function"、"undefined"。

**以下是正确的用法：**

```js
var exp = undefined;

if(typeof(exp) == "undefined") {
  alert("undefined");
}
```

### JS中如何判断null？
**以下是不正确的用法：**
```js
var exp = null;

if(exp == null) {
  alert("is null");
}
```
exp为`undefined`时，也会得到与`null`相同的结果，虽然`null`和`undefined`不一样。
> 注意：要同时判断null和undefined时可使用本法。

``` js
var exp=null;

if(!exp) {
   alert("is null");
}
```
如果exp为`undefined`或者`数字零`，也会得到与`null`相同的结果，虽然null和二者不一样。
>注意：要同时判断`null`、`undefined`和`数字零`时可使用本法。
``` js
var exp = null;

if(typeof(exp) == "null") {
  alert("is null");
}
```
为了向下兼容，exp为`null`时，typeof总返回`object`。这种方式也不太好。

**以下是正确的用法：**
```js
var exp = null;

if(!exp&&typeof(exp) != "undefined" && exp != 0) {
  alert("is null");
}
```

### 检测对象是否为空对象
``` js
/*
* 检测对象是否是空对象(不包含任何可读属性)。
* 方法既检测对象本身的属性，也检测从原型继承的属性(因此没有使hasOwnProperty)。
*/
function isEmpty(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
};
```
这里所说的空对象，到底是 `{}` 还是 `null`
``` js
var a = {};
a.name = 'realwall';
console.log(isEmpty(a)); //false
console.log(isEmpty({})); //true
console.log(isEmpty(null)); //true
 
//注意参数为null时无语法错误哦，即虽然不能对null空指针对象添加属性，但可以使用for in 语句
/*
* 检测对象是否是空对象(不包含任何可读属性)。
* 方法只既检测对象本身的属性，不检测从原型继承的属性。
*/
function isOwnEmpty(obj){
  for(var name in obj){
    if(obj.hasOwnProperty(name)){
      return false;
    }
  }
  return true;
};
```

`{}`与`null`的区别：
``` js
var a = {};
var b = null;
 
a.name = 'realwall';
b.name = 'jim'; //这里会报错，b为空指针对象，不能像普通对象一样直接添加属性。
b = a;
b.name = 'jim'; //此时 a 和 b 指向同一个对象。a.name, b.name 均为'jam'
```