import{_ as r}from"./chunks/ArticleMetadata.BuBbIslv.js";import{_ as h,m as p,a as d,u as o,B as k,e,x as c,ah as R,o as n,p as g,q as D}from"./chunks/framework.Bi-mNMmX.js";import"./chunks/theme.ulrGMYOD.js";const x=JSON.parse('{"title":"Redis持久化之RDB","description":"","frontmatter":{"title":"Redis持久化之RDB","author":"Noah","date":"2024/07/07 19:31","categories":["Redis进阶"],"tags":["Redis","Redis进阶"]},"headers":[],"relativePath":"courses/数据库/04-Redis进阶/02-Redis持久化之RDB.md","filePath":"courses/数据库/04-Redis进阶/02-Redis持久化之RDB.md","lastUpdated":1720612269000}'),B={name:"courses/数据库/04-Redis进阶/02-Redis持久化之RDB.md"},u=e("h1",{id:"redis持久化之rdb",tabindex:"-1"},[c("Redis持久化之RDB "),e("a",{class:"header-anchor",href:"#redis持久化之rdb","aria-label":'Permalink to "Redis持久化之RDB"'},"​")],-1),b=R(`<nav class="table-of-contents"><ul><li><a href="#什么是-rdb-持久化">什么是 RDB 持久化</a></li><li><a href="#rdb-的工作原理">RDB 的工作原理</a><ul><li><a href="#手动触发">手动触发</a></li><li><a href="#自动触发">自动触发</a></li><li><a href="#配置-rdb-持久化">配置 RDB 持久化</a></li></ul></li><li><a href="#rdb-的-持久化过程">RDB 的 持久化过程</a></li><li><a href="#优缺点">优缺点</a><ul><li><a href="#优点">优点</a></li><li><a href="#缺点">缺点</a></li></ul></li></ul></nav><div class="tip custom-block"><p class="custom-block-title">前言</p><p>RDB（Redis Database Backup）持久化是将某个时间点的数据快照保存到磁盘文件中，下面将介绍RDB的工作原理、选项配置、优缺点以及如何使用RDB持久化来确保数据安全性和一致性。</p></div><h2 id="什么是-rdb-持久化" tabindex="-1">什么是 RDB 持久化 <a class="header-anchor" href="#什么是-rdb-持久化" aria-label="Permalink to &quot;什么是 RDB 持久化&quot;">​</a></h2><p>RDB 持久化是指 Redis将内存中的数据快照保存到磁盘上，以便在Redis重启时可以恢复数据。RDB文件通常以 <code>.rdb</code> 为扩展名，默认文件是 <code>dump.rdb</code> 。RDB 持久化可以手动触发，也可以通过自动触发来定期生成快照。</p><h2 id="rdb-的工作原理" tabindex="-1">RDB 的工作原理 <a class="header-anchor" href="#rdb-的工作原理" aria-label="Permalink to &quot;RDB 的工作原理&quot;">​</a></h2><p>RDB 持久化主要有两种生成快照的方式: <strong>手动触发</strong> 和 <strong>自动触发</strong></p><h3 id="手动触发" tabindex="-1">手动触发 <a class="header-anchor" href="#手动触发" aria-label="Permalink to &quot;手动触发&quot;">​</a></h3><p>在Redis提供的命令中有以下两种方式可以手动生成快照</p><ul><li><strong>SAVE:</strong> 立即生成RDB快照。该命令会阻塞 Redis 服务器，直到快照生成完成。</li><li><strong>BGSAVE:</strong> 在后台异步生成 RDB快照。该命令不会阻塞 Redis 服务器线程。</li></ul><h3 id="自动触发" tabindex="-1">自动触发 <a class="header-anchor" href="#自动触发" aria-label="Permalink to &quot;自动触发&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 在900秒内，如果至少有1个键被修改，就触发RDB快照</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 900</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 在300秒内，如果至少有10个键被修改，就触发RDB快照</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 300</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 在60秒内，如果至少有10000个键被修改，就触发RDB快照</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 60</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10000</span></span></code></pre></div><p>只要满足了以上配置中任意一个条件，Redis 就会触发 BGSAVE 命令来生成 RDB 快照。</p><h3 id="配置-rdb-持久化" tabindex="-1">配置 RDB 持久化 <a class="header-anchor" href="#配置-rdb-持久化" aria-label="Permalink to &quot;配置 RDB 持久化&quot;">​</a></h3><p>可以通过 <code>redis.conf</code> 配置文件来调整 RDB 持久化的设置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 配置自动触发条件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 900</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 300</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">save</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 60</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 10000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># RDB 文件名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">dbfilename</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> dump.rdb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># RDB 文件保存路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /var/lib/redis</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 在创建新的RDB文件前，是否进行压缩。设置为yes表示压缩，以减少磁盘空间的占用。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rdbcompression</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 是否在创建RDB文件时校验文件。默认是yes，表示RDB文件会包含数据校验和（CRC64）。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rdbchecksum</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> yes</span></span></code></pre></div><p>在 Redis 启动的时候，如果发现配置文件中定义了 RDB 文件且该文件存在， Redis 将自动加载 RDB 文件来恢复数据。这使得 Redis 能够在重启后恢复到最新的快照。</p><h2 id="rdb-的-持久化过程" tabindex="-1">RDB 的 持久化过程 <a class="header-anchor" href="#rdb-的-持久化过程" aria-label="Permalink to &quot;RDB 的 持久化过程&quot;">​</a></h2><ol><li>RDB 会单独创建(fork)一个子进程来进行持久化。</li><li>先将内存的内容写入到一个临时的文件中。</li><li>等持久化过程都结束了，再用这个临时文件替换上次持久化的快照文件。</li></ol><div class="warning custom-block"><p class="custom-block-title">注意🗡️</p><p>主进程不进行任何IO操作，这确保了极高的性能。如果需要进行大规模的数据恢复，且对于数据恢复的完整性不是非常敏感，那 RDB要不AOF方式更加的高效。</p></div><p><img src="https://raw.githubusercontent.com/Noah2Y/img/main/blog/20240708133058.jpg" alt=""></p><h2 id="优缺点" tabindex="-1">优缺点 <a class="header-anchor" href="#优缺点" aria-label="Permalink to &quot;优缺点&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h3><ul><li><strong>高效的启动时间:</strong> 由于 RDB 文件是一个紧凑的二进制文件，Redis在启动时加载 RDB 文件相对较快。</li><li><strong>备份灵活:</strong> RDB 文件是独立的快照，可以很方便的将其复制、移动到其他的存储设备或云存储服务进行数据备份。</li><li><strong>性能高效:</strong> 生成 RDB 快照是后台异步操作，不会显著影响 Redis 的性能，适合需要高吞吐量的数据写入场景。</li></ul><h3 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h3><ul><li><strong>数据丢失风险:</strong> 由于 RDB 快照是根据时间间隔生成的，如果在生成间隔期间 Redis 崩溃或重启，最后一次快照后的所有数据变更将会丢失。</li><li><strong>实时性能不足:</strong> RDB 快照生成的频率取决于配置，不适合需要实时数据持久化的场景。</li></ul>`,25);function C(s,F,m,y,_,f){const l=r,t=p("ClientOnly");return n(),d("div",null,[u,o(t,null,{default:k(()=>{var a,i;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((i=s.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(n(),g(l,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),b])}const P=h(B,[["render",C]]);export{x as __pageData,P as default};
