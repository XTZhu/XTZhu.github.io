---
layout: git
title: Git 远程分支相关操作
date: 2020-04-07 15:14:12
tags: 
- css
---

# git 拉取远程分支到本地

``` bash
git init

// 添加远程仓库连接
git remote add origin git@github.com:XXXX/nothing2.git

// 把远程分支拉到本地
git fetch origin [dev]（dev为远程仓库的分支名）

// 在本地创建分支dev并切换到该分支
git checkout -b [dev] (本地分支名称) [origin/dev](远程分支名称)

// 把某个分支上的内容都拉取到本地
git pull origin [dev] (远程分支名称)

```

## 如何解决failed to push some refs to git

``` bash
// 尝试提交到远程master分支上 出错
git push -u origin master // failed to push some refs to 'git@github.com: xxx/xxx.git'

// 主要是因为README.md文件和本地文件有差异
// 通过该命令进行代码合并： [pull = fetch + merge]
git pull --rebase origin master

// 重新push代码
git push -u origin master
```

## 聊一下*git pull rebase*
> [参考文章](https://www.cnblogs.com/wangiqngpei557/p/6056624.html)
