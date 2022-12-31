import{_ as r,V as n,W as l,X as o,Y as t,Z as a,$ as d,a0 as i,D as s}from"./framework-e50407a6.js";const c={},h=t("p",null,"Java 的数据类型分类：8 种基本数据类型和 3 种引用数据类型。",-1),p=i(`<h2 id="数据类型分类" tabindex="-1"><a class="header-anchor" href="#数据类型分类" aria-hidden="true">#</a> 数据类型分类</h2><p>Java 中的数据类型可分为 2 种：</p><ol><li>基本数据类型。</li></ol><p>基本数据类型是 Java 语言操作数据的基础，包括 boolean、char、byte、short、int、long、float 和 double，共 8 种。</p><ol start="2"><li>引用数据类型。</li></ol><p>除了基本数据类型以外的类型，都是所谓的引用类型。常见的有数组（对，没错，数组是引用类型）、class（也就是类），以及接口（指向的是实现接口的类的对象）。</p><h2 id="八种基本数据类型" tabindex="-1"><a class="header-anchor" href="#八种基本数据类型" aria-hidden="true">#</a> 八种基本数据类型</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>基本数据类型被创建时，在栈内存中会被划分出一定的内存，并将数值存储在该内存中。</p><p>Java基本类型都有对应的包装类型，基本类型与其对应的包装类型之间的赋值使用自动装箱（转为包装类）与拆箱（转为基本类型）完成。</p></div><table><thead><tr><th>数据类型</th><th>长度(位)</th><th>数值范围</th><th>默认值</th><th>缓存池</th></tr></thead><tbody><tr><td>boolean</td><td>1位</td><td>false/true</td><td>false</td><td>false 和 true</td></tr><tr><td>char</td><td>16位</td><td>&#39;\\u0000&#39;（0）到 &#39;\\uffff&#39;（65535）</td><td>\\u0000（空格）</td><td>\\u0000 到 \\u007F</td></tr><tr><td>byte</td><td>8位</td><td>-2^7（-128）到 2^7-1（127）</td><td>0</td><td>所有字符</td></tr><tr><td>short</td><td>16位</td><td>-2^15（-32768）到 2^15-1（32767）</td><td>0</td><td>-128 到 127</td></tr><tr><td>int</td><td>32位</td><td>-2^31 到 2^31-1</td><td>0</td><td>-128 到 127</td></tr><tr><td>long</td><td>64位</td><td>-2^63 到 2^63-1</td><td>0</td><td>-</td></tr><tr><td>float</td><td>32位</td><td>-2^128 到 2^128</td><td>0.0f</td><td>-</td></tr><tr><td>double</td><td>64位</td><td>-2^1024 到 2^1024</td><td>0.0d</td><td>-</td></tr></tbody></table><h2 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>引用数据类型被创建时，首先会在栈内存中分配一块空间，然后在堆内存中也会分配一块具体的空间用来存储数据的具体信息，即hash值，然后由栈中引用指向堆中的对象地址。</p></div><p>Java中的类、接口和数组都是引用数据类型。</p><h2 id="两种类型的区别" tabindex="-1"><a class="header-anchor" href="#两种类型的区别" aria-hidden="true">#</a> 两种类型的区别</h2><p>基本数据类型：</p><ol><li>变量名指向具体的数值。</li><li>基本数据类型存储在栈上。</li></ol><p>引用数据类型：</p><ol><li>变量名指向的是存储对象的内存地址，在栈上。</li><li>内存地址指向的对象存储在堆上。</li></ol><p>堆是在程序运行时在内存中申请的空间（可理解为动态的过程）；切记，不是在编译时；因此，Java 中的对象就放在这里，这样做的好处就是：</p><p>当需要一个对象时，只需要通过 new 关键字写一行代码即可，当执行这行代码时，会自动在内存的“堆”区分配空间——这样就很灵活。</p><p>栈，能够和处理器（CPU，也就是脑子）直接关联，因此访问速度更快。既然访问速度快，要好好利用啊！Java 就把对象的引用放在栈里。为什么呢？因为引用的使用频率高吗？</p><p>不是的，因为 Java 在编译程序时，必须明确的知道存储在栈里的东西的生命周期，否则就没法释放旧的内存来开辟新的内存空间存放引用——空间就那么大，前浪要把后浪拍死在沙滩上啊。</p><h2 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h2><h3 id="自动类型转换" tabindex="-1"><a class="header-anchor" href="#自动类型转换" aria-hidden="true">#</a> 自动类型转换</h3><p>如果以下 2 个条件都满足，那么将一种类型的数据赋给另外一种类型的变量的时候，将会发生自动类型转换（automatic type conversion）。</p><ul><li>两种数据类型彼此兼容</li><li>目标类型的取值范围大于源数据类型（低级类型数据转换成高级类型数据） <ul><li>数值型数据的转换：byte→short→int→long→float→double。</li><li>字符型转换为整型：char→int。</li></ul></li></ul><h3 id="int-和-char-类型互转" tabindex="-1"><a class="header-anchor" href="#int-和-char-类型互转" aria-hidden="true">#</a> int 和 char 类型互转</h3><p>这里整理一波 int 和 char 类型的互转，它们之间比较特殊。也会在以后的学习当中经常遇到。</p><ol><li>int 类型的数据可以通过 <code>(char)</code> 类型强制、<code>Character.forDigit()</code> 方法和Integer 的 toString() 方法，转换为 char 类型，其转换的映射可通过 ASCII 表查询。</li></ol><div class="language-Java" data-ext="Java"><pre class="language-Java"><code>int a = 65;
System.out.println((char)a); // A
</code></pre></div><ol start="2"><li>char 转 int</li></ol><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token char">&#39;A&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 65</span>
</code></pre></div>`,31),u={href:"https://tobebetterjavaer.com/basic-grammar/basic-data-type.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://tobebetterjavaer.com/basic-grammar/basic-data-type.html",target:"_blank",rel:"noopener noreferrer"};function f(v,m){const e=s("ExternalLinkIcon");return n(),l("div",null,[h,o(" more "),p,t("blockquote",null,[t("p",null,[a("转载自 "),t("a",u,[a("Java 程序员进阶之路"),d(e)])]),t("p",null,[a("链接："),t("a",b,[a("https://tobebetterjavaer.com/basic-grammar/basic-data-type.html"),d(e)])])])])}const g=r(c,[["render",f],["__file","02-datatype.html.vue"]]);export{g as default};