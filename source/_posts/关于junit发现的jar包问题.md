
---
title: 关于junit发现的jar包问题
date: 2019-02-13 19:05:58
tags: 
---
# 关于junit发现的jar包问题

首先需要引入junit的jar包
``` java
import org.junit.Test; 
```
然后在需要进行单元测试的方法上加上注解 **`@Test`**

但是在Run junit的时候，却报了以下异常
``` java
java.lang.NoClassDefFoundError: org/hamcrest/SelfDescribing
	at java.lang.ClassLoader.defineClass1(Native Method)
	at java.lang.ClassLoader.defineClass(ClassLoader.java:621)
	at java.security.SecureClassLoader.defineClass(SecureClassLoader.java:124)
	at java.net.URLClassLoader.defineClass(URLClassLoader.java:260)
	at java.net.URLClassLoader.access$000(URLClassLoader.java:56)
	at java.net.URLClassLoader$1.run(URLClassLoader.java:195)
	at java.security.AccessController.doPrivileged(Native Method)
	at java.net.URLClassLoader.findClass(URLClassLoader.java:188)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:307)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:252)
	at java.lang.ClassLoader.loadClassInternal(ClassLoader.java:320)
	at java.lang.Class.getDeclaredConstructors0(Native Method)
	at java.lang.Class.privateGetDeclaredConstructors(Class.java:2389)
	at java.lang.Class.getConstructor0(Class.java:2699)
	at java.lang.Class.getConstructor(Class.java:1657)
	at org.junit.internal.builders.AnnotatedBuilder.buildRunner(AnnotatedBuilder.java:29)
	at org.junit.internal.builders.AnnotatedBuilder.runnerForClass(AnnotatedBuilder.java:21)
	at org.junit.runners.model.RunnerBuilder.safeRunnerForClass(RunnerBuilder.java:59)
	at org.junit.internal.builders.AllDefaultPossibilitiesBuilder.runnerForClass(AllDefaultPossibilitiesBuilder.java:26)
	at org.junit.runners.model.RunnerBuilder.safeRunnerForClass(RunnerBuilder.java:59)
	at org.junit.internal.requests.ClassRequest.getRunner(ClassRequest.java:26)
	at org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.<init>(JUnit4TestReference.java:33)
	at org.eclipse.jdt.internal.junit4.runner.JUnit4TestClassReference.<init>(JUnit4TestClassReference.java:25)
	at org.eclipse.jdt.internal.junit4.runner.JUnit4TestLoader.createTest(JUnit4TestLoader.java:48)
	at org.eclipse.jdt.internal.junit4.runner.JUnit4TestLoader.loadTests(JUnit4TestLoader.java:38)
	at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:452)
	at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)
	at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)
	at org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)
Caused by: java.lang.ClassNotFoundException: org.hamcrest.SelfDescribing
	at java.net.URLClassLoader$1.run(URLClassLoader.java:200)
	at java.security.AccessController.doPrivileged(Native Method)
	at java.net.URLClassLoader.findClass(URLClassLoader.java:188)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:307)
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:301)
	at java.lang.ClassLoader.loadClass(ClassLoader.java:252)
	at java.lang.ClassLoader.loadClassInternal(ClassLoader.java:320)
```
搜索得知：是因为缺少了jar包
>- junit.jar: Includes the Hamcrest classes. The simple all-in-one solution to get started quickly.Starting with version 4.11, Hamcrest is no longer included in this jar.
- junit-dep.jar: Only includes the JUnit classes but not Hamcrest. Lets you use a different Hamcrest version.

## 解决方案
使用时导入包的方案：
- junit.jar + hamcrest-core.jar + hamcrest-library.jar
- 或者是：junit-dep.ajr+hancrest-all.jar


原文：https://blog.csdn.net/castle07/article/details/8553704 

jar包下载地址：http://www.java2s.com/Code/Jar/h/Catalogh.htm
