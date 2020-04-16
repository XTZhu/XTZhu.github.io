---
title: 在浏览器中输入url后发生了什么?
date: 2019-05-09 15:30:12
tags:
---

> 参考资料：https://www.jianshu.com/p/c1dfc6caa520  
推荐阅读：https://www.zhihu.com/question/34873227  
深度阅读：https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/   
https://kb.cnblogs.com/page/129756/  
https://coolshell.cn/articles/9666.html  
https://www.cnblogs.com/tisikcci/p/5866753.html  
https://blog.csdn.net/xifeijian/article/details/10813339  
非常详细： http://blog.jobbole.com/84870/

# what happend？
上脑图！
![lei了lei了](https://raw.githubusercontent.com/XTZhu/image/master/blog/2075673-3afda32a13a68c6b.png)
## 解析URL
关于URL：
`URL（Universal Resource Locator）`：统一资源定位符。俗称网页地址或者网址。  
URL用来表示某个资源的地址。（通过俗称就能看出来）  
URL主要由以下几个部分组成：
- 传输协议
- 服务器
- 域名
- 端口
- 虚拟目录
- 文件名
- 锚
- 参数

也就是说，通常一个URL是像下面这样  
![URL](https://raw.githubusercontent.com/XTZhu/image/master/blog/fuoSKIi4fj.png)

连起来就是：`http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name`
> 上面的链接有几个要注意的地方：`;` 和`/`的使用，`80`端口默认不显示，`?` 到`#`之间跟着参数，多个参数使用`&`连接，`#`后面跟着锚。 
---
现在来讨论URL解析，当在浏览器中输入URL后，浏览器首先对拿到的URL进行识别，抽取出域名字段。
## DNS解析
**DNS解析（域名解析）**，DNS实际上是一个域名和IP对应的数据库。

IP地址往都难以记住，但机器间互相只认IP地址，于是人们发明了域名，让域名与IP地址之间一一对应，它们之间的转换工作称为`域名解析`，域名解析需要由专门的域名解析服务器来完成，整个过程是自动进行的。

可以在浏览器中输入IP地址浏览网站，也可以输入域名查询网站，虽然得出的内容是一样的但是调用的过程不一样，输入IP地址是直接从主机上调用内容，输入域名是通过域名解析服务器指向对应的主机的IP地址，再从主机调用网站的内容。

在进行DNS解析时，会经历以下步骤：

- **查询浏览器缓存**（浏览器会缓存之前拿到的DNS 2-30分钟时间），如果没有找到，

- **检查系统缓存**，检查hosts文件，这个文件保存了一些以前访问过的网站的域名和IP的数据。它就像是一个本地的数据库。如果找到就可以直接获取目标主机的IP地址了。没有找到的话，需要

- **检查路由器缓存**，路由器有自己的DNS缓存，可能就包括了这在查询的内容；如果没有，要

- **查询ISP DNS 缓存**：ISP服务商DNS缓存（本地服务器缓存）那里可能有相关的内容，如果还不行的话，需要，

- **递归查询**：从根域名服务器到顶级域名服务器再到极限域名服务器依次搜索对应目标域名的IP。

![URL](https://raw.githubusercontent.com/XTZhu/image/master/blog/9383-1210799666.png)
通过以上的查找，就可以获取到域名对应的IP了。接下来就是向该IP地址定位的HTTP服务器发起TCP连接。

---
## 浏览器与网站建立TCP连接（三次握手）
> [参考](https://xtzhu.github.io/2019/04/08/TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E4%B8%8E%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B/#%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B)

## 请求和传输数据

发起HTTP请求，请求方法：
- GET: 获取资源
- POST: 传输实体主体
- HEAD: 获取报文首部
- PUT: 传输文件
- DELETE: 删除文件
- OPTIONS: 询问支持的方法
- TRACE: 追踪路径

请求报文：  
![请求报文](https://raw.githubusercontent.com/XTZhu/image/master/blog/2075673-1f2c0829b7a86c6d.png)

## 接受响应结果
状态码：
- 1**：信息性状态码
- 2**：成功状态码

		200：OK 请求正常处理  
		204：No Content请求处理成功，但没有资源可返回  
		206：Partial Content对资源的某一部分的请求
- 3**：重定向状态码

		301：Moved Permanently 永久重定向  
		302：Found 临时性重定向  
		304：Not Modified 缓存中读取  
- 4**：客户端错误状态码

		400：Bad Request 请求报文中存在语法错误  
		401：Unauthorized需要有通过Http认证的认证信息  
		403：Forbidden访问被拒绝  
		404：Not Found无法找到请求资源  
- 5**：服务器错误状态码

		500：Internal Server Error 服务器端在执行时发生错误  
		503：Service Unavailable 服务器处于超负载或者正在进行停机维护

请求报文：
![请求报文](https://raw.githubusercontent.com/XTZhu/image/master/blog/2075673-a7d5616fac0adec7.png)


## 浏览器解析Html
浏览器按顺序解析html文件，构建DOM树，在解析到外部的css和js文件时，向服务器发起请求下载资源，若是下载css文件，则解析器会在下载的同时继续解析后面的html来构建DOM树，则在下载js文件和执行它时，解析器会停止对html的解析。这便出现了js阻塞问题。

**预加载器**：
当浏览器被脚本文件阻塞时，预加载器（一个轻量级的解析器）会继续解析后面的html，寻找需要下载的资源。如果发现有需要下载的资源，预加载器在开始接收这些资源。预加载器只能检索HTML标签中的URL，无法检测到使用脚本添加的URL，这些资源要等脚本代码执行时才会获取。

注: 预解析并不改变Dom树，它将这个工作留给主解析过程
浏览器解析css，形成CSSOM树，当DOM树构建完成后，浏览器引擎通过DOM树和CSSOM树构造出渲染树。渲染树中包含可视节点的样式信息（不可见节点将不会被添加到渲染树中，如：head元素和display值为none的元素）

> 值得注意的是，这个过程是逐步完成的，为了更好的用户体验，渲染引擎将会尽可能早的将内容呈现到屏幕上，并不会等到所有的html都解析完成之后再去构建和布局render树。它是解析完一部分内容就显示一部分内容，同时，可能还在通过网络下载其余内容。

## 浏览器布局渲染

- 布局：通过计算得到每个渲染对象在可视区域中的具体位置信息（大小和位置），这是一个递归的过程。
- 绘制：将计算好的每个像素点信息绘制在屏幕上

在页面显示的过程中会多次进行Reflow和Repaint操作，而Reflow的成本比Repaint的成本高得多的多。因为Repaint只是将某个部分进行重新绘制而不用改变页面的布局，如：改变了某个元素的背景颜色。而如果将元素的display属性由block改为none则需要Reflow。

![rpaint&reflow](https://raw.githubusercontent.com/XTZhu/image/master/blog/2075673-e6b92f5c6c8c50d4.png)
