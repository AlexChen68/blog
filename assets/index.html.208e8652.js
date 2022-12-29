import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as e,b as a,f as o}from"./app.b62ae7a7.js";const p={},l=a("p",null,"Spring\u5168\u5BB6\u6876\uFF0C\u4ECE Spring \u5BB9\u5668\u3001AOP \u5230 SpringCloud \u5FAE\u670D\u52A1\u3002",-1),t=o('<h2 id="spring-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#spring-\u7B80\u4ECB" aria-hidden="true">#</a> Spring \u7B80\u4ECB</h2><p>Spring\u6846\u67B6\u662F Java \u5E73\u53F0\u7684\u4E00\u4E2A\u5F00\u6E90\u7684\u5168\u6808\uFF08full-stack\uFF09\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u548C\u63A7\u5236\u53CD\u8F6C\u5BB9\u5668\u5B9E\u73B0\uFF0C\u4E00\u822C\u88AB\u76F4\u63A5\u79F0\u4E3A Spring\u3002\u8BE5\u6846\u67B6\u7684\u4E00\u4E9B\u6838\u5FC3\u529F\u80FD\u7406\u8BBA\u4E0A\u53EF\u7528\u4E8E\u4EFB\u4F55 Java \u5E94\u7528\uFF0C\u4F46 Spring \u8FD8\u4E3A\u57FA\u4E8EJava\u4F01\u4E1A\u7248\u5E73\u53F0\u6784\u5EFA\u7684 Web \u5E94\u7528\u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u62D3\u5C55\u652F\u6301\u3002Spring \u6CA1\u6709\u76F4\u63A5\u5B9E\u73B0\u4EFB\u4F55\u7684\u7F16\u7A0B\u6A21\u578B\uFF0C\u4F46\u5B83\u5DF2\u7ECF\u5728 Java \u793E\u533A\u4E2D\u5E7F\u4E3A\u6D41\u884C\uFF0C\u57FA\u672C\u4E0A\u5B8C\u5168\u4EE3\u66FF\u4E86\u4F01\u4E1A\u7EA7JavaBeans\uFF08EJB\uFF09\u6A21\u578B\u3002</p><p>Spring\u6846\u67B6\u4EE5 Apache License 2.0 \u5F00\u6E90\u8BB8\u53EF\u534F\u8BAE\u7684\u5F62\u5F0F\u53D1\u5E03\uFF0C\u8BE5\u6846\u67B6\u6700\u521D\u7531 Rod Johnson \u4EE5\u53CA Juergen Hoeller \u7B49\u4EBA\u5F00\u53D1\u3002</p><p><strong>Spring \u6838\u5FC3\u529F\u80FD\u6A21\u5757</strong></p><ul><li>\u5F3A\u5927\u7684\u3001\u57FA\u4E8E JavaBeans \u7684\u3001\u91C7\u7528\u63A7\u5236\u53CD\u8F6C\uFF08Inversion of Control\uFF0CIoC\uFF09\u539F\u5219\u7684 \u914D\u7F6E\u7BA1\u7406\uFF0C\u4F7F\u5F97\u5E94\u7528\u7A0B\u5E8F\u7684\u7EC4\u5EFA\u66F4\u52A0\u7B80\u6613\u5FEB\u6377\u3002</li><li>\u4E00\u4E2A\u53EF\u7528\u4E8E Java EE \u7B49\u8FD0\u884C\u73AF\u5883\u7684\u6838\u5FC3 Bean\u5DE5\u5382\u3002</li><li>\u6570\u636E\u5E93\u4E8B\u52A1\u7684\u4E00\u822C\u5316\u62BD\u8C61\u5C42\uFF0C\u5141\u8BB8\u58F0\u660E\u5F0F\uFF08Declarative\uFF09\u4E8B\u52A1\u7BA1\u7406\u5668\uFF0C\u7B80\u5316\u4E8B\u52A1\u7684\u5212\u5206\u4F7F\u4E4B\u4E0E\u5E95\u5C42\u65E0\u5173\u3002</li><li>\u5185\u5EFA\u7684\u9488\u5BF9 JTA \u548C\u5355\u4E2A JDBC \u6570\u636E\u6E90\u7684\u4E00\u822C\u5316\u7B56\u7565\uFF0C\u4F7FSpring\u7684\u4E8B\u52A1\u652F\u6301\u4E0D\u8981\u6C42 Java EE \u73AF\u5883\uFF0C\u8FD9\u4E0E\u4E00\u822C\u7684 JTA \u6216\u8005 EJB CMT \u76F8\u53CD\u3002</li><li>JDBC \u62BD\u8C61\u5C42\u63D0\u4F9B\u4E86\u6709\u9488\u5BF9\u6027\u7684\u5F02\u5E38\u7B49\u7EA7\uFF08\u4E0D\u518D\u4ECE SQL \u5F02\u5E38\u4E2D\u63D0\u53D6\u539F\u59CB\u4EE3\u7801\uFF09\uFF0C\u7B80\u5316\u4E86\u9519\u8BEF\u5904\u7406\uFF0C\u5927\u5927\u51CF\u5C11\u4E86\u7A0B\u5E8F\u5458\u7684\u7F16\u7801\u91CF\u3002\u518D\u6B21\u5229\u7528 JDBC \u65F6\uFF0C\u4F60\u65E0\u9700\u518D\u5199\u51FA\u53E6\u4E00\u4E2A&#39;\u7EC8\u6B62&#39;\uFF08finally\uFF09\u6A21\u5757\u3002\u5E76\u4E14\u9762\u5411 JDBC \u7684\u5F02\u5E38\u4E0E Spring \u901A\u7528\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\uFF08Data Access Object\uFF09\u5F02\u5E38\u7B49\u7EA7\u76F8\u4E00\u81F4\u3002</li><li>\u4EE5\u8D44\u6E90\u5BB9\u5668\uFF0CDAO \u5B9E\u73B0\u548C\u4E8B\u52A1\u7B56\u7565\u7B49\u5F62\u5F0F\u4E0E Hibernate\uFF0CJDO \u548C MyBatis \u3001SQL Maps \u96C6\u6210\u3002\u5229\u7528\u63A7\u5236\u53CD\u8F6C\u673A\u5236\u5168\u9762\u89E3\u51B3\u4E86\u8BB8\u591A\u5178\u578B\u7684 Hibernate \u96C6\u6210\u95EE\u9898\u3002\u6240\u6709\u8FD9\u4E9B\u5168\u90E8\u9075\u4ECE Spring \u901A\u7528\u4E8B\u52A1\u5904\u7406\u548C\u901A\u7528\u6570\u636E\u8BBF\u95EE\u5BF9\u8C61\u5F02\u5E38\u7B49\u7EA7\u89C4\u8303\u3002</li><li>\u7075\u6D3B\u7684\u57FA\u4E8E\u6838\u5FC3 Spring \u529F\u80FD\u7684 MVC \u7F51\u9875\u5E94\u7528\u7A0B\u5E8F\u6846\u67B6\u3002\u5F00\u53D1\u8005\u901A\u8FC7\u7B56\u7565\u63A5\u53E3\u5C06\u62E5\u6709\u5BF9\u8BE5\u6846\u67B6\u7684\u9AD8\u5EA6\u63A7\u5236\uFF0C\u56E0\u800C\u8BE5\u6846\u67B6\u5C06\u9002\u5E94\u4E8E\u591A\u79CD\u5448\u73B0\uFF08View\uFF09\u6280\u672F\uFF0C\u4F8B\u5982 JSP\u3001FreeMarker\u3001Velocity\u3001Thymeleaf \u7B49\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0CSpring \u4E2D\u95F4\u5C42\u53EF\u4EE5\u8F7B\u6613\u5730\u7ED3\u5408\u4E8E\u4EFB\u4F55\u57FA\u4E8E MVC \u6846\u67B6\u7684\u7F51\u9875\u5C42\uFF0C\u4F8B\u5982 Struts\u3001WebWork \u6216 Tapestry\u3002</li><li>\u63D0\u4F9B\u8BF8\u5982\u4E8B\u52A1\u7BA1\u7406\u7B49\u670D\u52A1\u7684AOP\u6846\u67B6\u3002</li></ul><p>\u5728\u8BBE\u8BA1\u5E94\u7528\u7A0B\u5E8F Model \u65F6\uFF0CMVC\u6A21\u5F0F\uFF08\u4F8B\u5982 Struts\uFF09\u901A\u5E38\u96BE\u4E8E\u7ED9\u51FA\u4E00\u4E2A\u7B80\u6D01\u660E\u4E86\u7684\u6846\u67B6\u7ED3\u6784\u3002Spring \u5374\u5177\u6709\u80FD\u591F\u8BA9\u8FD9\u90E8\u5206\u5DE5\u4F5C\u53D8\u5F97\u7B80\u5355\u7684\u80FD\u529B\u3002\u7A0B\u5E8F\u5F00\u53D1\u5458\u4EEC\u53EF\u4EE5\u4F7F\u7528Spring\u7684JDBC\u62BD\u8C61\u5C42\u91CD\u65B0\u8BBE\u8BA1\u90A3\u4E9B\u590D\u6742\u7684\u6846\u67B6\u7ED3\u6784\u3002</p><h2 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> SpringBoot</h2><p>SpringBoot \u5BF9\u4E0A\u8FF0 Spring \u914D\u7F6E\u590D\u6742\u7B49\u7F3A\u70B9\u8FDB\u884C\u7684\u6539\u5584\u548C\u4F18\u5316\uFF0C\u57FA\u4E8E\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u7684\u601D\u60F3\uFF0C\u53EF\u4EE5\u8BA9\u5F00\u53D1\u4EBA\u5458\u4E0D\u5FC5\u5728\u914D\u7F6E\u4E0E\u903B\u8F91\u4E1A\u52A1\u4E4B\u95F4\u8FDB\u884C\u601D\u7EF4\u7684\u5207\u6362\uFF0C\u5168\u8EAB\u5FC3\u7684\u6295\u5165\u5230\u903B\u8F91\u4E1A\u52A1\u7684\u4EE3\u7801\u7F16\u5199\u4E2D\u3002</p><p><strong>SpringBoot\u7684\u7279\u70B9</strong></p><ol><li>\u4E3A\u57FA\u4E8ESpring\u7684\u5F00\u53D1\u63D0\u4F9B\u66F4\u5FEB\u7684\u5165\u95E8\u4F53\u9A8C</li><li>\u5F00\u7BB1\u5373\u7528\uFF0C\u6CA1\u6709\u4EE3\u7801\u751F\u6210\uFF0C\u4E5F\u65E0\u9700XML\u914D\u7F6E\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u4FEE\u6539\u9ED8\u8BA4\u503C\u6765\u6EE1\u8DB3\u7279\u5B9A\u7684\u9700\u6C42</li><li>\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5927\u578B\u9879\u76EE\u4E2D\u5E38\u89C1\u7684\u975E\u529F\u80FD\u6027\u7279\u6027\uFF0C\u5982\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u3001\u5B89\u5168\u3001\u6307\u6807\uFF0C\u5065\u5EB7\u68C0\u6D4B\u3001\u5916\u90E8\u914D\u7F6E\u7B49</li></ol><p>SpringBoot\u4E0D\u662F\u5BF9Spring\u529F\u80FD\u4E0A\u7684\u589E\u5F3A\uFF0C\u800C\u662F\u63D0\u4F9B\u4E86\u4E00\u79CD\u5FEB\u901F\u4F7F\u7528Spring\u7684\u65B9\u5F0F \xB6</p><p><strong>SpringBoot\u7684\u6838\u5FC3\u529F\u80FD</strong></p><ul><li><p>\u8D77\u6B65\u4F9D\u8D56 \u8D77\u6B65\u4F9D\u8D56\u672C\u8D28\u4E0A\u662F\u4E00\u4E2AMaven\u9879\u76EE\u5BF9\u8C61\u6A21\u578B\uFF08Project Object Model\uFF0CPOM\uFF09\uFF0C\u5B9A\u4E49\u4E86\u5BF9\u5176\u4ED6\u5E93\u7684\u4F20\u9012\u4F9D\u8D56\uFF0C\u8FD9\u4E9B\u4E1C\u897F\u52A0\u5728\u4E00\u8D77\u5373\u652F\u6301\u67D0\u9879\u529F\u80FD\u3002 \u7B80\u5355\u7684\u8BF4\uFF0C\u8D77\u6B65\u4F9D\u8D56\u5C31\u662F\u5C06\u5177\u5907\u67D0\u79CD\u529F\u80FD\u7684\u5750\u6807\u6253\u5305\u5230\u4E00\u8D77\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u9ED8\u8BA4\u7684\u529F\u80FD\u3002</p></li><li><p>\u81EA\u52A8\u914D\u7F6E Spring Boot\u7684\u81EA\u52A8\u914D\u7F6E\u662F\u4E00\u4E2A\u8FD0\u884C\u65F6\uFF08\u66F4\u51C6\u786E\u5730\u8BF4\uFF0C\u662F\u5E94\u7528\u7A0B\u5E8F\u542F\u52A8\u65F6\uFF09\u7684\u8FC7\u7A0B\uFF0C\u8003\u8651\u4E86\u4F17\u591A\u56E0\u7D20\uFF0C\u624D\u51B3\u5B9ASpring\u914D\u7F6E\u5E94\u8BE5\u7528\u54EA\u4E2A\uFF0C\u4E0D\u8BE5\u7528\u54EA\u4E2A\u3002\u8BE5\u8FC7\u7A0B\u662FSpring\u81EA\u52A8\u5B8C\u6210\u7684\u3002</p></li></ul><h2 id="springcloud" tabindex="-1"><a class="header-anchor" href="#springcloud" aria-hidden="true">#</a> SpringCloud</h2><p>Spring Cloud\u662F\u4E00\u7CFB\u5217\u6846\u67B6\u7684\u6709\u5E8F\u96C6\u5408\u3002\u5B83\u5229\u7528Spring Boot\u7684\u5F00\u53D1\u4FBF\u5229\u6027\u5DE7\u5999\u5730\u7B80\u5316\u4E86\u5206\u5E03\u5F0F\u7CFB\u7EDF\u57FA\u7840\u8BBE\u65BD\u7684\u5F00\u53D1\uFF0C\u5982\u670D\u52A1\u53D1\u73B0\u6CE8\u518C\u3001\u914D\u7F6E\u4E2D\u5FC3\u3001\u6D88\u606F\u603B\u7EBF\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u65AD\u8DEF\u5668\u3001\u6570\u636E\u76D1\u63A7\u7B49\uFF0C\u90FD\u53EF\u4EE5\u7528Spring Boot\u7684\u5F00\u53D1\u98CE\u683C\u505A\u5230\u4E00\u952E\u542F\u52A8\u548C\u90E8\u7F72\u3002</p><p>Spring Cloud\u5E76\u6CA1\u6709\u91CD\u590D\u5236\u9020\u8F6E\u5B50\uFF0C\u5B83\u53EA\u662F\u5C06\u5404\u5BB6\u516C\u53F8\u5F00\u53D1\u7684\u6BD4\u8F83\u6210\u719F\u3001\u7ECF\u5F97\u8D77\u5B9E\u9645\u8003\u9A8C\u7684\u670D\u52A1\u6846\u67B6\u7EC4\u5408\u8D77\u6765\uFF0C\u901A\u8FC7Spring Boot\u98CE\u683C\u8FDB\u884C\u518D\u5C01\u88C5\u5C4F\u853D\u6389\u4E86\u590D\u6742\u7684\u914D\u7F6E\u548C\u5B9E\u73B0\u539F\u7406\uFF0C\u6700\u7EC8\u7ED9\u5F00\u53D1\u8005\u7559\u51FA\u4E86\u4E00\u5957\u7B80\u5355\u6613\u61C2\u3001\u6613\u90E8\u7F72\u548C\u6613\u7EF4\u62A4\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5F00\u53D1\u5DE5\u5177\u5305\u3002</p>',16);function g(s,S){return r(),n("div",null,[l,e(" more "),t])}const h=i(p,[["render",g],["__file","index.html.vue"]]);export{h as default};