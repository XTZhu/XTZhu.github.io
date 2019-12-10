---
title: 利用momentJS获取当天凌晨的时间戳
date: 2019-12-09 15:31:28
tags: momentJS
---

``` js
let now = moment().format('YYYY-MM-DD');
let zero = moment(now).format('YYYY-MM-DD HH:mm:ss');
let today = moment(zero).toDate().getTime();
let yesterday = moment(today).subtract(1, 'days').format('x');

```

[在线实例](https://codesandbox.io/s/objective-sound-tfcm9)
