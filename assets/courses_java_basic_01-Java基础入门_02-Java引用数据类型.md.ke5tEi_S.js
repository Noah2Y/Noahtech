import{_ as k}from"./chunks/ArticleMetadata.DQky7sWC.js";import{_ as e,m as p,a as r,u as d,B as o,e as n,x as g,ah as A,o as l,p as c,q as y}from"./chunks/framework.Bi-mNMmX.js";import"./chunks/theme.BBp5a0Hw.js";const _=JSON.parse('{"title":"Java引用数据类型","description":"","frontmatter":{"title":"Java引用数据类型","author":"Noah","date":"2024/06/19 16:49","categories":["Java基础入门"],"tags":["Java","基础","JDK","数据类型"]},"headers":[],"relativePath":"courses/java/basic/01-Java基础入门/02-Java引用数据类型.md","filePath":"courses/java/basic/01-Java基础入门/02-Java引用数据类型.md","lastUpdated":1718795062000}'),D={name:"courses/java/basic/01-Java基础入门/02-Java引用数据类型.md"},C=n("h1",{id:"java引用数据类型",tabindex:"-1"},[g("Java引用数据类型 "),n("a",{class:"header-anchor",href:"#java引用数据类型","aria-label":'Permalink to "Java引用数据类型"'},"​")],-1),F=A(`<nav class="table-of-contents"><ul><li><a href="#引用数据类型">引用数据类型</a><ul><li><a href="#类-class">类(Class)</a></li><li><a href="#接口-interface">接口(Interface)</a></li><li><a href="#数组-array">数组(Array)</a></li><li><a href="#枚举-enum">枚举(Enum)</a></li><li><a href="#字符串-string">字符串(String)</a></li><li><a href="#集合框架-collections-framework">集合框架(Collections Framework)</a></li><li><a href="#异常-exception">异常(Exception)</a></li></ul></li><li><a href="#主要区别">主要区别</a></li></ul></nav><div class="info custom-block"><p class="custom-block-title">前言</p><p>上一章中，介绍了Java的八大基础数据类型(整数型，浮点型，字符型，布尔型)， 这些类型是Java内置的类型，用于表示简单值；而引用数据类型是指向对象实例的类型， 而不是直接存储值。</p></div><h2 id="引用数据类型" tabindex="-1">引用数据类型 <a class="header-anchor" href="#引用数据类型" aria-label="Permalink to &quot;引用数据类型&quot;">​</a></h2><p>引用数据类型包括：</p><ul><li><strong>类(Class):</strong> 用于定义对象的属性和方法。</li><li><strong>接口(Interface):</strong> 定义一组方法，具体实现由类来完成。</li><li><strong>数组(Array):</strong> 用于存储多个相同类型的数据。</li><li><strong>枚举(Enum):</strong> 一种特殊的类，用于定义一组固定的常量。</li><li><strong>字符串(String):</strong> 用于表示字符序列，一种特殊的类。</li><li><strong>集合框架(Collections Framework):</strong> 提供了存储和操作一组对象的方法。</li><li><strong>异常(Exception):</strong> 程序运行过程中出现的错误或意外情况，异常也是对象。</li></ul><h3 id="类-class" tabindex="-1">类(Class) <a class="header-anchor" href="#类-class" aria-label="Permalink to &quot;类(Class)&quot;">​</a></h3><h4 id="定义一个类" tabindex="-1">定义一个类 <a class="header-anchor" href="#定义一个类" aria-label="Permalink to &quot;定义一个类&quot;">​</a></h4><p>一个类通过关键字<code>class</code>来定义，类名通常与文件名相同。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 字段（属性）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> age;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 构造方法（用于初始化对象）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(String </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> age</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 方法（行为）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> display</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Name: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;, Age: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> age);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // 主方法（程序的入口点）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 创建对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> person</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">        // 调用方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        person.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h4 id="类的组成部分" tabindex="-1">类的组成部分 <a class="header-anchor" href="#类的组成部分" aria-label="Permalink to &quot;类的组成部分&quot;">​</a></h4><ul><li><strong>字段(Field):</strong> 类中定义的变量，用于存储数据。</li><li><strong>构造方法(Constructor):</strong> 用于初始化对象，可以通过<code>new</code>关键字调用。</li><li><strong>方法(Method):</strong> 类中定义的函数，用于实现特定的功能。</li></ul><h4 id="实例化对象" tabindex="-1">实例化对象 <a class="header-anchor" href="#实例化对象" aria-label="Permalink to &quot;实例化对象&quot;">​</a></h4><p>通过<code>new</code>关键字来实例化对象，并调用构造方法来初始化对象。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> person1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;刘备&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> person2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;关羽&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span></code></pre></div></details><h3 id="接口-interface" tabindex="-1">接口(Interface) <a class="header-anchor" href="#接口-interface" aria-label="Permalink to &quot;接口(Interface)&quot;">​</a></h3><h4 id="定义一个接口" tabindex="-1">定义一个接口 <a class="header-anchor" href="#定义一个接口" aria-label="Permalink to &quot;定义一个接口&quot;">​</a></h4><p>一个接口通过关键字<code>interface</code>来定义，接口中只能定义抽象方法，不能定义具体实现的方法。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MyInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> method1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> method2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h4 id="实现一个接口" tabindex="-1">实现一个接口 <a class="header-anchor" href="#实现一个接口" aria-label="Permalink to &quot;实现一个接口&quot;">​</a></h4><p>一个类可以通过关键字<code>implements</code>来实现一个接口，实现接口时必须实现接口中的所有抽象方法。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> MyClass</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> MyInterface</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> method1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Implementing method1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">Override</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> method2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Implementing method2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h3 id="数组-array" tabindex="-1">数组(Array) <a class="header-anchor" href="#数组-array" aria-label="Permalink to &quot;数组(Array)&quot;">​</a></h3><h4 id="声明一个数组" tabindex="-1">声明一个数组 <a class="header-anchor" href="#声明一个数组" aria-label="Permalink to &quot;声明一个数组&quot;">​</a></h4><p>一个数组通过<code>[]</code>来声明，数组中可以存储多个相同类型的数据。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">array; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 声明一个整型数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">array </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建一个包含5个元素的数组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 一步完成数组的声明和创建</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">array</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用静态初始化创建并赋值</span></span></code></pre></div></details><h4 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h4><ul><li><strong>定长:</strong> 数组一旦创建，其大小固定，不能动态改变 <ul><li><strong>同类型:</strong> 数组中的所有元素必须是相同的数据类型</li><li><strong>顺序存储:</strong> 数组中的元素按照顺序存储在内存中，可以通过索引来访问元素</li></ul></li></ul><h3 id="枚举-enum" tabindex="-1">枚举(Enum) <a class="header-anchor" href="#枚举-enum" aria-label="Permalink to &quot;枚举(Enum)&quot;">​</a></h3><h4 id="定义一个枚举" tabindex="-1">定义一个枚举 <a class="header-anchor" href="#定义一个枚举" aria-label="Permalink to &quot;定义一个枚举&quot;">​</a></h4><p>一个枚举通过关键字<code>enum</code>来定义，枚举中可以定义常量。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Color</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">    RED</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">GREEN</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">BLUE</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h4 id="使用枚举" tabindex="-1">使用枚举 <a class="header-anchor" href="#使用枚举" aria-label="Permalink to &quot;使用枚举&quot;">​</a></h4><p>可以通过枚举的常量来访问枚举中的值。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> EnumExample</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        Color</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> myColor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Color.RED;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        switch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (myColor) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> RED</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Color is Red&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> GREEN</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Color is Green&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            case</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> BLUE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Color is Blue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">                break</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h3 id="字符串-string" tabindex="-1">字符串(String) <a class="header-anchor" href="#字符串-string" aria-label="Permalink to &quot;字符串(String)&quot;">​</a></h3><h4 id="定义一个字符串" tabindex="-1">定义一个字符串 <a class="header-anchor" href="#定义一个字符串" aria-label="Permalink to &quot;定义一个字符串&quot;">​</a></h4><p><code>String</code>类用于表示字符串，字符串是不可变的，一旦创建就不能被修改。这意味一旦创建，它的值就不能被修改 ####特点</p><ul><li><strong>不可变性:</strong> <code>String</code>类中的字符串值是不可变的，一旦创建就不能被修改。</li><li><strong>字符串池:</strong> Java维护一个字符串池，字符串池中包含了所有的字符串字面量。相同的字面量字符串在内存中只有一个副本，这样可以减少内存的开销。</li></ul><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot; World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建了一个新的字符串对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> str2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出 true，因为str1和str2引用的是同一个对象</span></span></code></pre></div></details><h3 id="集合框架-collections-framework" tabindex="-1">集合框架(Collections Framework) <a class="header-anchor" href="#集合框架-collections-framework" aria-label="Permalink to &quot;集合框架(Collections Framework)&quot;">​</a></h3><h4 id="核心接口" tabindex="-1">核心接口 <a class="header-anchor" href="#核心接口" aria-label="Permalink to &quot;核心接口&quot;">​</a></h4><p>集合框架的核心接口定义了集合的基本操作。主要接口包括：</p><ul><li><strong>Collection</strong>: 是所有集合的根接口，定义了基本操作，如添加、删除、迭代等。</li><li><strong>List</strong>: 继承自Collection接口，表示有序的元素集合。常用实现类包括ArrayList、LinkedList等。</li><li><strong>Set</strong>: 继承自Collection接口，表示无序且不允许重复元素的集合。常用实现类包括HashSet、LinkedHashSet、TreeSet等。</li><li><strong>Queue</strong>: 继承自Collection接口，表示一个先进先出的集合。常用实现类包括LinkedList、PriorityQueue等。</li><li><strong>Map</strong>: 不继承Collection接口，表示键值对的集合。常用实现类包括HashMap、LinkedHashMap、TreeMap等。</li></ul><h4 id="实现类" tabindex="-1">实现类 <a class="header-anchor" href="#实现类" aria-label="Permalink to &quot;实现类&quot;">​</a></h4><p>Java集合框架提供了一些实现上述接口的类：</p><ul><li><strong>ArrayList</strong>: 实现了可变大小的数组，适合随机访问元素。</li><li><strong>LinkedList</strong>: 实现了链表结构，适合频繁的插入和删除操作。</li><li><strong>HashSet</strong>: 基于哈希表实现的Set，保证元素的唯一性但不保证顺序。</li><li><strong>LinkedHashSet</strong>: 保证元素的插入顺序。</li><li><strong>TreeSet</strong>: 基于红黑树实现的Set，保证元素的排序。</li><li><strong>HashMap</strong>: 基于哈希表实现的Map，键值对的顺序不保证。</li><li><strong>LinkedHashMap</strong>: 保证键值对的插入顺序。</li><li><strong>TreeMap</strong>: 基于红黑树实现的Map，键值对按照键的自然顺序排序。</li></ul><h4 id="工具类" tabindex="-1">工具类 <a class="header-anchor" href="#工具类" aria-label="Permalink to &quot;工具类&quot;">​</a></h4><ul><li><strong>Collections</strong>: 提供了一些静态方法用于操作或返回集合，如排序、查找、线程安全包装等。</li></ul><h3 id="异常-exception" tabindex="-1">异常(Exception) <a class="header-anchor" href="#异常-exception" aria-label="Permalink to &quot;异常(Exception)&quot;">​</a></h3><h4 id="受检异常-checked-exception" tabindex="-1">受检异常（Checked Exception） <a class="header-anchor" href="#受检异常-checked-exception" aria-label="Permalink to &quot;受检异常（Checked Exception）&quot;">​</a></h4><p>受检异常是编译器强制要求处理的异常，通常是由于外部原因引起的（如文件未找到、网络故障等）。这些异常需要通过<code>try-catch</code>块或在方法签名中声明<code>throws</code>来处理。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.io.File;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.io.FileReader;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> java.io.IOException;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> CheckedExceptionExample</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            File</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> File</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;nonexistentfile.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            FileReader</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> fr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> FileReader</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(file);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (IOException </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h4 id="非受检异常-unchecked-exception" tabindex="-1">非受检异常（Unchecked Exception） <a class="header-anchor" href="#非受检异常-unchecked-exception" aria-label="Permalink to &quot;非受检异常（Unchecked Exception）&quot;">​</a></h4><p>非受检异常包括运行时异常（Runtime Exception）和错误（Error），通常是由编程错误引起的，如数组越界、空指针引用等。非受检异常不要求强制处理，但建议通过适当的代码逻辑避免这些异常的发生。</p><details class="details custom-block"><summary>示例代码👍</summary><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> UncheckedExceptionExample</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#F69D50;">[] </span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">numbers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(numbers[</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 数组越界异常</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (ArrayIndexOutOfBoundsException </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">printStackTrace</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></details><h2 id="主要区别" tabindex="-1">主要区别 <a class="header-anchor" href="#主要区别" aria-label="Permalink to &quot;主要区别&quot;">​</a></h2><ol><li><p><strong>存储位置：</strong></p><ul><li><strong>基础数据类型：</strong> 直接存储在栈内存中，存储的是实际的值。</li><li><strong>引用数据类型：</strong> 存储在堆内存中，栈内存中存储的是对象的引用（地址）。</li></ul></li><li><p><strong>大小和内存分配：</strong></p><ul><li><strong>基础数据类型：</strong> 内存大小固定且由Java语言规范定义。</li><li><strong>引用数据类型：</strong> 内存大小不固定，取决于对象的具体实现和属性。</li></ul></li><li><p><strong>默认值：</strong></p><ul><li><strong>基础数据类型：</strong> 有默认值，例如<code>int</code>的默认值是<code>0</code>，<code>boolean</code>的默认值是<code>false</code>。</li><li><strong>引用数据类型：</strong> 默认值是<code>null</code>，表示不引用任何对象。</li></ul></li><li><p><strong>使用方式：</strong></p><ul><li><strong>基础数据类型：</strong> 直接使用基本的运算符进行操作。</li><li><strong>引用数据类型：</strong> 通过对象的引用调用其方法和属性。</li></ul></li><li><p><strong>性能：</strong></p><ul><li><strong>基础数据类型：</strong> 由于直接存储值，性能较高，适用于对性能要求高的场景。</li><li><strong>引用数据类型：</strong> 由于需要通过引用访问对象，性能相对较低，但灵活性和功能性更强。</li></ul></li></ol>`,57);function u(s,B,E,m,b,v){const t=k,h=p("ClientOnly");return l(),r("div",null,[C,d(h,null,{default:o(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),c(t,{key:0,article:s.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),F])}const S=e(D,[["render",u]]);export{_ as __pageData,S as default};
