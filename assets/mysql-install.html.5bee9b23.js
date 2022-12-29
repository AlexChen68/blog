import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,f as e}from"./app.b62ae7a7.js";const l={},c=e(`<h2 id="docker-\u5B89\u88C5-mysql" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5-mysql" aria-hidden="true">#</a> Docker \u5B89\u88C5 Mysql</h2><h3 id="\u4E0B\u8F7D-mysql-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-mysql-\u955C\u50CF" aria-hidden="true">#</a> \u4E0B\u8F7D Mysql \u955C\u50CF</h3><p>\u4E0B\u8F7D\u6700\u65B0\u7248\u672C</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql
</code></pre></div><p>\u6216\u8005\u6307\u5B9A\u7248\u672C\u53F7</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:8.0.31
</code></pre></div><h3 id="\u542F\u52A8\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u5BB9\u5668</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> mysql8<span class="token punctuation">\\</span> 
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306<span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> ~/docker/mysql/conf:/etc/mysql/conf.d<span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> ~/docker/mysql/data:/var/lib/mysql<span class="token punctuation">\\</span> 
<span class="token parameter variable">-v</span> ~/docker/mysql/log:/var/log/mysql<span class="token punctuation">\\</span> 
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>my-secret-pw<span class="token punctuation">\\</span> 
<span class="token parameter variable">-d</span> mysql:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>--name</code> \u53C2\u6570\u4E3A\u5BB9\u5668\u540D\u79F0;</p><p><code>-p</code> \u6307\u5B9A\u7AEF\u53E3\u6620\u5C04\uFF1B</p><p><code>-v</code> \u76EE\u5F55\u6302\u8F7D\uFF0C<code>:</code>\u524D\u9762\u4E3A\u5BBF\u4E3B\u673A\u76EE\u5F55\uFF0C\u540E\u9762\u4E3A\u865A\u62DF\u673A\u5BF9\u5E94\u76EE\u5F55\uFF1B</p><p><code>-e</code> \u4E3A\u542F\u52A8\u53C2\u6570\uFF0C<code>MYSQL_ROOT_PASSWORD</code> \u662F\u914D\u7F6E\u7684 Mysql \u7684 root \u7528\u6237\u5BC6\u7801\uFF1B</p><p><code>-d</code> \u662F\u542F\u52A8\u7684\u955C\u50CF\u53CA\u7248\u672C\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span> mysql8<span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306<span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> ~/docker/mysql/conf:/etc/mysql/conf.d<span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> ~/docker/mysql/data:/var/lib/mysql<span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> ~/docker/mysql/log:/var/log/mysql<span class="token punctuation">\\</span>
 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>root<span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),p=[c];function r(t,o){return s(),n("div",null,p)}const m=a(l,[["render",r],["__file","mysql-install.html.vue"]]);export{m as default};