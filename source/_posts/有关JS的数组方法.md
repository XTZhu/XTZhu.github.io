---
title: '有关JS的数组方法'
date: 2019-05-06 09:06:15
tags: javaScript
---


> 每多学一点知识，就少写一行代码

## length - 长度属性
每个Array都有一个length属性，稠密数组,length属性代表数组中元素的个数；稀疏数组，length属性大于元素的个数
``` js
let arr = ['a','b','c'];
console.log(arr.length); //3
arr.length = 2;
console.log(arr.length); // ['a','b']
```

## Array.isArray - 数组类型
``` js
console.log(Array.isArray([1,2]));
```

## Array.of - 创建数组
从可变数量的参数创建数组，不管参数的数量或者类型如何
``` js
console.log(Array.of(1,2,3)); //[1,2,3]
```

## Array.from  - 创建数组
用类数组或可迭代对象创建新数组
``` js
console.log(Array.from('abcd')); //["a", "b", "c", "d"]
console.log(Array.from([1,2,3],x=>x+1)); //[2, 3, 4]
```

## 查找元素
### find - 按函数查找
Array.prototype.find()找到**第一个**满足检测条件的元素，并返回该元素，反之返回undefined.
``` js
let arr = [1,2,3,4,5];
console.log(arr.find(x => x>3)); //4
```

### findIndex - 按函数查找
Array.prototype.findIndex() 找到**第一个**满足检测条件的元素，并返回该元素索引，反之返回-1.
``` js
let arr = [1,2,3,6,7];
console.log(arr.findIndex(x => x>3)); //3
```

### indexOf-按元素值查找
Array.prototype.indexOf() 查找元素并返回元素索引值，找不到返回-1
``` js
let arr= [1, 2, 3, 4];
console.log(arr.indexOf(3));    // 输出 2
console.log(arr.indexOf(6));    // 输出 -1
console.log(arr.indexOf(2, 2));    // 输出 -1
```

第二个参数表示查找的起始位置。

### lastIndexOf-按元素值查找
Array.prototype.lastIndexOf() 从后向前查找元素并返回元素索引值，找不到返回 -1。
``` js
var arr = ['a', 'b', 'c', 'd'];
console.log(arr.lastIndexOf('b'));    // 输出 1
console.log(arr.lastIndexOf('e'));    // 输出 -1
```
## 添加元素
### push - 尾部添加

Array.prototype.push() 在尾部添加一个或多个元素，返回数组的新长度。
``` js
var array1= ['a', 'b', 'c'];
console.log(array1.push('d'));   // 输出 4
console.log(array1);   // 输出 [ "a", "b", "c", "d" ]
```

### unshift-头部添加
Array.prototype.unshift() 在头部添加一个或多个元素，并返回数组的新长度。
``` js
var array1 = [ 4, 5, 6 ];
console.log(array1.unshift(3));    // 输出 4
console.log(array1);    // 输出 [ 3, 4, 5, 6 ]
console.log(array1.unshift(1, 2));    // 输出 6
console.log(array1);    // 输出 [ 1, 2, 3, 4, 5, 6 ]
```
## 删除元素

### pop-尾部删除
Array.prototype.pop() 从尾部删除一个元素，并返回该元素。
``` js

var array1= ['a', 'b', 'c', 'd'];
console.log(array1.pop());    // 输出 d
console.log(array1);    // 输出 [ "a", "b", "c" ]
```

### shift-头部删除
Array.prototype.shift() 从头部删除一个元素，并返回该元素。
``` js

var array1 = [1, 2, 3];
console.log(array1.shift());    // 输出 1
console.log(array1);    // 输出 [ 2, 3 ]
```

## 替换元素
### **splice**-添加替换删除
Array.prototype.splice() 添加、替换、删除元素。会改变原数组。
``` js

var array1 = [ 'a', 'c', 'd' ];
array1.splice( 1, 0, 'b');
console.log(array1);    // 输出 [ "a", "b", "c", "d" ]
array1.splice(1,1);
console.log(array1);    // 输出 [ "a", "c", "d" ]
array1.splice(1,1,'bb','cc');
console.log(array1);    // 输出 [ "a", "bb", "cc", "d" ]
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

- 参数 start：表示替换的位置
- 参数 deleteCount ：表示删除元素的数量
- 参数 item1... ： 表示添加的元素

## 顺序相关
### sort-排序
Array.prototype.sort() 数组排序，改变原数组。
``` js

var array1 = [ 4, 3, 10, 2 ];
console.log(array1.sort());    // 输出 [ 10, 2, 3, 4 ]
console.log(array1.sort((x1, x2) => x1 - x2));    // 输出 [ 2, 3, 4, 10]
```

### reverse-反序
Array.prototype.reverse() 倒置数组，并返回新数组。会改变原数组。
``` js

var sourceArray= [ 'a', 'b', 'c' ];
var reverseArray = sourceArray.reverse();
console.log(reverseArray);    // 输出 [ "c", "b", "a" ]
console.log(sourceArray == reverseArray);    // 输出 true

```

## 遍历迭代

### keys-键迭代器

Array.prototype.keys() 数组的键迭代器。
``` js

var array1 = ['a', 'b', 'c'];
for (let key of array1.keys()) {
  console.log(key);     // 输出 0, 1, 2
}
```

### values-值迭代器
Array.prototype.values() 数组的值迭代器。
``` js

const array1 = ['a', 'b', 'c'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);     // 输出 a b c
}
```

### entries-键/值对迭代器
Array.prototype.entries() 数组的键/值对迭代器。
``` js

var array1 = ['a', 'b', 'c'];
var iterator1 = array1.entries();
console.log(iterator1.next().value);    // 输出 Array [0, "a"]
console.log(iterator1.next().value);    // 输出 Array [ 1, "b" ] 
```

### forEach-遍历
Array.prototype.forEach() 遍历数组中的元素，并执行回调函数。
``` js

var arr = [1, 2, 3, 4];
arr.forEach(function (x) {
    console.log(x + 1);    // 输出 2  3  4  5
});    

```

## 检测

### includes-值包含检测

Array.prototype.includes() 值包含检测，如包含返回 true，不包含返回false。
``` js

var array1 = [1, 2, 3];
console.log(array1.includes(2));    // 输出 true
console.log(array1.includes(4));    // 输出 false
```

### some-函数包含检测
Array.prototype.some() 检测数组中是否有元素可以通过检测函数验证。
``` js

var array1 = [ 1, 2, 3, 4 ];
console.log(array1.some(x => x >3));    // 输出  true
console.log(array1.some(x => x > 5));    // 输出  false

```

### every-函数完全检测
Array.prototype.every() 检测数组中是否所有元素都可以通过检测函数验证。
``` js

var array1 = [ 1, 2, 3, 4, 5 ];
console.log(array1.every(x => x < 8));    //输出 true
console.log(array1.every(x => x < 4));    //输出 false

```

## 合并

### join-合并成字符串

Array.prototype.join() 合并数组中所有元素成为字符串并返回。
``` js

var array1= [ 'a', 'b', 'c' ];
console.log(array1.join());    // 输出 a,b,c
console.log(array1.join("-"));   // 输出 a-b-c
```

### concat-合并成数组
Array.prototype.concat() 合并两个或多个数组，返回一个全新数组，原数组不变。
``` js

var array1 = [ 'a', 'b' ];
var array2 = [ 'c', 'd' ];
console.log(array1.concat(array2));    // 输出 [ "a", "b", "c", "d" ]

```

## 累计

### reduce-左侧累计
Array.prototype.reduce() 从左至右按 reducer 函数组合元素值，并返回累计器终值。
``` js

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));    // 输出 10
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));    // 输出 15，其中5是累计器初始值。
```

### reduceRight-右侧累计
Array.prototype.reduceRight() 从右至左按 reducer 函数组合元素值，并返回累计器终值。
``` js

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
console.log(array1.reduceRight(reducer));    // 输出 [ 4, 3, 2, 1 ]
console.log(array1.reduceRight(reducer, 5));    // 输出 [ 5, 4, 3, 2, 1 ]

```

## copyWithin-内部复制
Array.prototype.copyWithin() 数组内部复制，不改变原数组长度。
``` js

var array1 = ['a', 'b', 'c', 'd', 'e','f'];
console.log(array1.copyWithin(0, 3, 5));    // 输出 [ "d", "e", "c", "d", "e", "f" ]
console.log(array1.copyWithin(1, 3));    // 输出 [ "d", "d", "e", "f", "e", "f" ]
arr.copyWithin(target[, start[, end]])
```

- 参数target : 表示要复制到的索引位置，如为负值则从后向前计数。
- 参数start : 表示要复制序列的起始索引位置，如为负值则从后向前计数。如省略该值，则从索引0开始。
- 参数end : 表示要复制序列的结束位置，如为负值则从后向前计数。如省略该值，则复制到结尾位置。


## fill-填充函数
Array.prototype.fill() 用固定值填充起始索引到终止索引区间内的全部元素值，不包括终止索引。
``` js

var array1 = [1, 2, 3, 4];
console.log(array1.fill(9, 2, 4));    // 输出 [ 1, 2, 9, 9 ]
console.log(array1.fill(8, 1));      // 输出 [ 1, 8, 8, 8 ]
console.log(array1.fill(7));          // 输出 [ 7, 7, 7, 7 ]
```

## filter-过滤函数
Array.prototype.filter() 生成由通过检测函数验证元素组成的新数组并返回。
``` js

var arr = [ 9 , 8 , 7 , 6];
console.log(arr.filter(x => x >7));    //输出 [ 9, 8 ]
```

## flat-数组扁平化
Array.prototype.flat() 按指定深度递归遍历数组，并返回包含所有遍历到的元素组成的新数组。不改变原数组。
``` js

var arr1 = [ 1, 2, [ 3, 4 ] ];
console.log(arr1.flat());     // 输出 [ 1, 2, 3, 4 ]
var arr2 = [ 1, 2, [3, 4, [ 5, 6 ] ] ];
console.log(arr2.flat());    // 输出 [ 1, 2, 3, 4,  [ 5, 6 ] ]
var arr3 = [1, 2, [ 3, 4, [ 5, 6 ] ] ];
console.log(arr3.flat(2));    // 输出 [ 1, 2, 3, 4, 5, 6 ]

```

## map-映射
Array.prototype.map() 创建一个新数组，该数组中的元素由原数组元素调用map函数产生。
``` js

var array1 = [1, 2, 3, 4];
console.log(array1.map(x => x * 2));    // 输出 [ 2, 4, 6, 8 ]

```

## slice-截取数组
Array.prototype.slice() 按参数begin 和 end 截取数组，不改变原数组。
``` js

var array1 = [ 1, 2, 3, 4, 5];
console.log(array1.slice( 2, 4 ));    //输出 [ 3, 4 ]
console.log(array1);    //输出 [ 1, 2, 3, 4, 5 ]
```

