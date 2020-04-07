---
title: css文字省略
date: 2020-03-19 15:54:32
tags: 
- css
---

# 单行文字省略
``` css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```

# 多行文字实现(有浏览器兼容性问题)
``` css
overflow: hidden;
-webkit-line-clamp: 3; 
-webkit-box-orient: vertical;
display: -webkit-box;
```
