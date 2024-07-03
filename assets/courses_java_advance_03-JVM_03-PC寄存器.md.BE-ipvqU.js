import{_ as h}from"./chunks/ArticleMetadata.DQky7sWC.js";import{_ as r,m as p,a as o,u as k,B as d,e as t,x as c,ah as g,o as n,p as A,q as C}from"./chunks/framework.Bi-mNMmX.js";import"./chunks/theme.BBp5a0Hw.js";const V=JSON.parse('{"title":"PC寄存器","description":"","frontmatter":{"title":"PC寄存器","author":"Noah","date":"2024/07/03 17:10","categories":["JVM"],"tags":["Java","JVM","JDK"]},"headers":[],"relativePath":"courses/java/advance/03-JVM/03-PC寄存器.md","filePath":"courses/java/advance/03-JVM/03-PC寄存器.md","lastUpdated":1720010212000}'),u={name:"courses/java/advance/03-JVM/03-PC寄存器.md"},m=t("h1",{id:"pc寄存器",tabindex:"-1"},[c("PC寄存器 "),t("a",{class:"header-anchor",href:"#pc寄存器","aria-label":'Permalink to "PC寄存器"'},"​")],-1),y=g(`<nav class="table-of-contents"><ul><li><a href="#作用">作用</a></li><li><a href="#特点">特点</a></li><li><a href="#原理">原理</a></li><li><a href="#示例">示例</a></li></ul></nav><p>程序计数器(Program Counter Register，简称PC寄存器)是JVM中一个非常总要的小型内存区域，它记录当前线程所执行的字节码指令地址，是JVM实现多线程的重要基础。每个线程都有一个独立的程序计数器，用于指向当前线程执行到哪一条指令。</p><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><ol><li><strong>字节码指令地址:</strong> 程序计数器保存当前正在执行的字节码指令地址。</li><li><strong>线程切换:</strong> 程序计数器是线程私有的，每个线程都有一个独立的程序计数器。在多线程的环境下，当前线程切换时，程序计数器能够保证线程恢复到正确的执行位置。</li><li><strong>本地方法:</strong> 如果当前执行的是本地方法(Native Method)，程序计数器的值为未定义(Undefined)</li></ol><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li><strong>线程私有:</strong> 程序计数器是每个线程独立拥有的，不会被其他的线程共享。</li><li><strong>不受垃圾回收器管理:</strong> 由于程序计数器占用的内存非常小，且生命周期与线程相同，所以不受垃圾回收器的管理</li></ul><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>当一个线程开始执行时，程序计数器指向该线程要执行的第一条字节码指令。随着指令的执行，程序计数器不断的更新值，指向下一条将要执行的字节码指令，当遇到分支、循环、跳转、异常处理等情况时，程序计数器会根据新的指令地址进行调整，以确保线程按照正常的顺序执行。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> CounterExample</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">[] </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        int</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        System.out.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(sum);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>在字节码执行过程中，程序计数器的变化如下：</p><ol><li><strong>main方法开始执行:</strong> 程序计数器指向 <code>main</code> 方法的第一条字节码指令。</li><li><strong>变量初始化:</strong> 程序计数器依次指向初始化变量 <code>a</code> 和 <code>b</code> 的指令。</li><li><strong>计算和输出:</strong> 程序计数器指向计算 <code>sum</code> 和调用 <code>System.out.println</code> 的指令</li></ol><p>每当一条字节码指令执行完毕后，程序计数器会更新为下一条指令的地址。如果遇到方法调用、异常处理等控制转移操作，程序计数器会跳转到相应的位置。</p>`,13);function _(s,D,B,f,F,b){const e=h,l=p("ClientOnly");return n(),o("div",null,[m,k(l,null,{default:d(()=>{var a,i;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((i=s.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(n(),A(e,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),y])}const x=r(u,[["render",_]]);export{V as __pageData,x as default};
