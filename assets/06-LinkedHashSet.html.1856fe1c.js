import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as e}from"./app.b62ae7a7.js";const t={},p=e(`<h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><code>LinkedHashSet</code> \u7EE7\u627F\u81EA <code>HashSet</code>\uFF0C\u4E0D\u540C\u7684\u662F\u5185\u90E8\u4F7F\u7528\u7684 <code>HashMap</code> \u4E3A <code>LinkedHashMap</code>\uFF0C\u901A\u8FC7<code>LinkedHashMap</code> \u53EF\u4EE5\u6309\u7167\u63D2\u5165\u987A\u5E8F\u6392\u5E8F\u548C\u8BBF\u95EE\u987A\u5E8F\u6392\u5E8F\u7684\u7279\u6027\uFF0C\u5B9E\u73B0\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u6709\u5E8F\u8BBF\u95EE\u3002</p><h2 id="\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u56FE" aria-hidden="true">#</a> \u7C7B\u56FE</h2><p><img src="https://cdn.jsdelivr.net/gh/alexchen68/images@master/blog/java/linkedhashset_class.png" alt="LinkedHashSet \u7C7B\u56FE" title=":size=60%" loading="lazy"></p><h2 id="\u6784\u9020\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u65B9\u6CD5" aria-hidden="true">#</a> \u6784\u9020\u65B9\u6CD5</h2><p><code>LinkedHashSet</code> \u901A\u8FC7\u8C03\u7528\u7236\u7C7B <code>HashSet</code> \u63D0\u4F9B\u7684\u4E13\u7528\u6784\u9020\u65B9\u6CD5\uFF0C\u5C06\u5185\u90E8\u7684 <code>HashMap</code> \u521D\u59CB\u5316\u4E3A <code>LinkedHashMap</code>\uFF0C\u5229\u7528\u5176\u7279\u6027\u6765\u5B9E\u73B0\u5143\u7D20\u7684\u53EF\u6392\u5E8F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// LinkedHashSet.java</span>
<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> <span class="token number">.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">LinkedHashSet</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">*</span>c<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">addAll</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HashSet</code> \u4E2D\u7528 <code>LinkedHashMap</code> \u521D\u59CB\u5316\u5185\u90E8 HashMap \u7684\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// HashSet.java</span>
<span class="token class-name">HashSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">,</span> <span class="token keyword">boolean</span> dummy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return a(),s("div",null,c)}const k=n(t,[["render",o],["__file","06-LinkedHashSet.html.vue"]]);export{k as default};