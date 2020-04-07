---
title: lodash的_.find()
date: 2020-04-07 15:44:16
tags: 
- lodash
---


# **_.find()** api文档

“集合” 方法(“Collection” Methods)

> _.find(collection, [predicate=_.identity], [fromIndex=0])

遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)。

 ## 添加版本
  0.1.0

## 参数    

  collection (Array|Object): 一个用来迭代的集合。
  [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
  [fromIndex=0] (number): 开始搜索的索引位置。
## 返回   

  (*): 返回匹配元素，否则返回 undefined。

## 例子   

``` javascript
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  
  _.find(users, function(o) { return o.age < 40; });
  // => object for 'barney'
  
  // The `_.matches` iteratee shorthand.
  _.find(users, { 'age': 1, 'active': true });
  // => object for 'pebbles'
  
  // The `_.matchesProperty` iteratee shorthand.
  _.find(users, ['active', false]);
  // => object for 'fred'
  
  // The `_.property` iteratee shorthand.
  _.find(users, 'active');
  // => object for 'barney'
```
[在线demo](https://codesandbox.io/s/find-demo-teonk?file=/src/App.js)