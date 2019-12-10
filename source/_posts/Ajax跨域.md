---
title: Ajax跨域（转载）
date: 2019-04-18 22:12:57
tags: ajax
---

> 转载自
	https://segmentfault.com/a/1190000012469713
	http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html
	http://www.ruanyifeng.com/blog/2016/04/cors.html

# 什么是同源政策？

说起跨域，就必须先了解“同源政策”。浏览器安全的基石是"同源政策"（same-origin policy）。很多开发者都知道这一点，但了解得不全面。

## 同源政策的含义

1995年，`同源政策`由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。

最初，它的含义是指，A网页设置的 Cookie，B网页不能打开，除非这两个网页"同源"。所谓**同源**指的是"三个相同"。

- 协议相同
- 域名相同
- 端口相同

举例来说，`http://www.example.com/dir/page.html`这个网址，协议是`http://`，域名是`www.example.com`，端口是`80`（默认端口可以省略）。它的同源情况如下。

	- http://www.example.com/dir2/other.html：同源
	- http://example.com/dir/other.html：不同源（域名不同）
	- http://v2.www.example.com/dir/other.html：不同源（域名不同）
	- http://www.example.com:81/dir/other.html：不同源（端口不同）

## 同源政策的目的
同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

设想这样一种情况：A网站是一家银行，用户登录以后，又去浏览其他网站。如果其他网站可以读取A网站的 Cookie，会发生什么？

很显然，如果 Cookie 包含隐私（比如存款总额），这些信息就会泄漏。更可怕的是，Cookie 往往用来保存用户的登录状态，如果用户没有退出登录，其他网站就可以冒充用户，为所欲为。因为浏览器同时还规定，提交表单不受同源政策的限制。

由此可见，"同源政策"是必需的，否则 Cookie 可以共享，互联网就毫无安全可言了。

## 同源政策的限制范围

随着互联网的发展，"同源政策"越来越严格。目前，如果非同源，共有三种行为受到限制。

（1） Cookie、LocalStorage 和 IndexDB 无法读取。
（2） DOM 无法获得。
（3） AJAX 请求不能发送。

在这里我们主要讨论AJAX的跨域问题。

# AJAX的跨域

同源政策规定，AJAX请求只能发给同源的网址，否则就报错。

除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制。

- JSONP
- WebSocket
- CORS

## JSONP
(现在已经几乎不会再使用JSONP了，所以JSONP了解下即可)

jsonp解决跨域问题是一个比较古老的方案(实际中不推荐使用),这里做简单介绍(实际项目中如果要使用JSONP,一般会使用JQ等对JSONP进行了封装的类库来进行ajax请求)

### 实现原理
JSONP之所以能够用来解决跨域方案,主要是因为`<script>`脚本拥有跨域能力,而JSONP正是利用这一点来实现。具体原理如图

![JSONP](https://raw.githubusercontent.com/XTZhu/image/master/blog/20190418-1_articlex.png)

### 实现流程 
JSONP的实现步骤大致如下

- 客户端网页网页通过添加一个`<script>`元素，向服务器请求JSON数据，这种做法不受同源政策限制

``` js
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('response data: ' + JSON.stringify(data));
};                      
```

请求时,接口地址是作为构建出的脚本标签的src的,这样,当脚本标签构建出来时,最终的src是接口返回的内容

- 服务端对应的接口在返回参数外面添加函数包裹层

	foo({
		"test": "testData"
	}); 

- 由于`<script>`元素请求的脚本，直接作为代码运行。这时，只要浏览器定义了foo函数，该函数就会立即调用。作为参数的JSON数据被视为JavaScript对象，而不是字符串，因此避免了使用JSON.parse的步骤。

注意,一般的JSONP接口和普通接口返回数据是有区别的,所以接口如果要做JSONO兼容,需要进行判断是否有对应callback关键字参数,如果有则是JSONP请求,返回JSONP数据,否则返回普通数据

> **使用注意:** 基于JSONP的实现原理,所以JSONP只能是“GET”请求,不能进行较为复杂的POST和其它请求,所以遇到那种情况,就得参考下面的CORS解决跨域了(所以如今它也基本被淘汰了)

## WebSocket

WebSocket是一种通信协议，使用`ws://`（非加密）和`wss://`（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

下面是一个例子，浏览器发出的WebSocket请求的头信息

	GET /chat HTTP/1.1
	Host: server.example.com
	Upgrade: websocket
	Connection: Upgrade
	Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
	Sec-WebSocket-Protocol: chat, superchat
	Sec-WebSocket-Version: 13
	Origin: http://example.com

上面代码中，有一个字段是`Origin`，表示该请求的请求源（origin），即发自哪个域名。

正是因为有了`Origin`这个字段，所以WebSocket才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。

	HTTP/1.1 101 Switching Protocols
	Upgrade: websocket
	Connection: Upgrade
	Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
	Sec-WebSocket-Protocol: chat

## CORS

CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。

它允许浏览器向跨源服务器，发出`XMLHttpRequest`请求，从而克服了AJAX只能同源使用的限制。

### CORS简介
CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。

整个CORS通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

因此，实现CORS通信的关键是服务器。只要服务器实现了CORS接口，就可以跨源通信。

基本上目前所有的浏览器都实现了CORS标准,其实目前几乎所有的浏览器ajax请求都是基于CORS机制的,只不过可能平时前端开发人员并不关心而已(所以说其实现在CORS解决方案主要是考虑后台该如何实现的问题)。

这里也整理了一个实现原理图(简化版)

![CORS](https://raw.githubusercontent.com/XTZhu/image/master/blog/20190418-2_articlex.png)


### 如何判断是否是简单请求?

浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。只要同时满足以下两大条件，就属于简单请求

（1) 请求方法是以下三种方法之一：
- HEAD
- GET
- POST

（2）HTTP的头信息不超出以下几种字段：
- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/- form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求。

浏览器对这两种请求的处理，是不一样的。

*待续。。*