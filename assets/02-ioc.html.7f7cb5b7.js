const e=JSON.parse(`{"key":"v-2169a9a8","path":"/md/spring/spring/02-ioc.html","title":"1.1 IOC \u5BB9\u5668","lang":"zh-CN","frontmatter":{"title":"1.1 IOC \u5BB9\u5668","date":"2022-09-15T00:00:00.000Z","tag":["IOC"],"category":["Spring"],"isOriginal":true,"description":"SpringIOC \u5BB9\u5668","head":[["meta",{"property":"og:url","content":"https://AlexChen68.github.com/blog/md/spring/spring/02-ioc.html"}],["meta",{"property":"og:site_name","content":"AlexChen's Blog"}],["meta",{"property":"og:title","content":"1.1 IOC \u5BB9\u5668"}],["meta",{"property":"og:description","content":"SpringIOC \u5BB9\u5668"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-29T15:54:45.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"IOC"}],["meta",{"property":"article:published_time","content":"2022-09-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-29T15:54:45.000Z"}]]},"excerpt":"<p>SpringIOC \u5BB9\u5668\u662F Spring \u7684\u6838\u5FC3\u529F\u80FD\u4E4B\u4E00\u3002</p>\\n","headers":[{"level":2,"title":"Spring \u5BB9\u5668\u6982\u8FF0","slug":"spring-\u5BB9\u5668\u6982\u8FF0","link":"#spring-\u5BB9\u5668\u6982\u8FF0","children":[]},{"level":2,"title":"Bean \u6982\u8FF0","slug":"bean-\u6982\u8FF0","link":"#bean-\u6982\u8FF0","children":[]},{"level":2,"title":"\u914D\u7F6E\u5143\u6570\u636E","slug":"\u914D\u7F6E\u5143\u6570\u636E","link":"#\u914D\u7F6E\u5143\u6570\u636E","children":[]},{"level":2,"title":"\u4F7F\u7528\u5BB9\u5668","slug":"\u4F7F\u7528\u5BB9\u5668","link":"#\u4F7F\u7528\u5BB9\u5668","children":[]},{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165","slug":"\u4F9D\u8D56\u6CE8\u5165","link":"#\u4F9D\u8D56\u6CE8\u5165","children":[{"level":3,"title":"\u57FA\u4E8E\u6784\u9020\u51FD\u6570\u7684\u4F9D\u8D56\u6CE8\u5165","slug":"\u57FA\u4E8E\u6784\u9020\u51FD\u6570\u7684\u4F9D\u8D56\u6CE8\u5165","link":"#\u57FA\u4E8E\u6784\u9020\u51FD\u6570\u7684\u4F9D\u8D56\u6CE8\u5165","children":[]},{"level":3,"title":"\u57FA\u4E8E Setter \u7684\u4F9D\u8D56\u6CE8\u5165","slug":"\u57FA\u4E8E-setter-\u7684\u4F9D\u8D56\u6CE8\u5165","link":"#\u57FA\u4E8E-setter-\u7684\u4F9D\u8D56\u6CE8\u5165","children":[]},{"level":3,"title":"\u6CE8\u89E3\u6CE8\u5165\uFF08\u63A5\u53E3\u6CE8\u5165\uFF09","slug":"\u6CE8\u89E3\u6CE8\u5165-\u63A5\u53E3\u6CE8\u5165","link":"#\u6CE8\u89E3\u6CE8\u5165-\u63A5\u53E3\u6CE8\u5165","children":[]},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F","link":"#\u4E3A\u4EC0\u4E48\u63A8\u8350\u6784\u9020\u5668\u6CE8\u5165\u65B9\u5F0F","children":[]},{"level":3,"title":"\u5BB9\u5668\u4F9D\u8D56\u6CE8\u5165\u7684\u8FC7\u7A0B","slug":"\u5BB9\u5668\u4F9D\u8D56\u6CE8\u5165\u7684\u8FC7\u7A0B","link":"#\u5BB9\u5668\u4F9D\u8D56\u6CE8\u5165\u7684\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"Bean \u4F5C\u7528\u57DF","slug":"bean-\u4F5C\u7528\u57DF","link":"#bean-\u4F5C\u7528\u57DF","children":[{"level":3,"title":"Singleton \u4F5C\u7528\u57DF","slug":"singleton-\u4F5C\u7528\u57DF","link":"#singleton-\u4F5C\u7528\u57DF","children":[]},{"level":3,"title":"Prototype \u4F5C\u7528\u57DF","slug":"prototype-\u4F5C\u7528\u57DF","link":"#prototype-\u4F5C\u7528\u57DF","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49 Bean \u7684\u7279\u6027","slug":"\u81EA\u5B9A\u4E49-bean-\u7684\u7279\u6027","link":"#\u81EA\u5B9A\u4E49-bean-\u7684\u7279\u6027","children":[{"level":3,"title":"\u751F\u547D\u5468\u671F\u56DE\u8C03","slug":"\u751F\u547D\u5468\u671F\u56DE\u8C03","link":"#\u751F\u547D\u5468\u671F\u56DE\u8C03","children":[]},{"level":3,"title":"Aware \u63A5\u53E3","slug":"aware-\u63A5\u53E3","link":"#aware-\u63A5\u53E3","children":[]}]},{"level":2,"title":"\u5BB9\u5668\u7684\u6269\u5C55","slug":"\u5BB9\u5668\u7684\u6269\u5C55","link":"#\u5BB9\u5668\u7684\u6269\u5C55","children":[{"level":3,"title":"BeanPostProcessor \u81EA\u5B9A\u4E49 Bean","slug":"beanpostprocessor-\u81EA\u5B9A\u4E49-bean","link":"#beanpostprocessor-\u81EA\u5B9A\u4E49-bean","children":[]},{"level":3,"title":"BeanFactoryPostProcessor \u81EA\u5B9A\u4E49\u5143\u6570\u636E\u914D\u7F6E","slug":"beanfactorypostprocessor-\u81EA\u5B9A\u4E49\u5143\u6570\u636E\u914D\u7F6E","link":"#beanfactorypostprocessor-\u81EA\u5B9A\u4E49\u5143\u6570\u636E\u914D\u7F6E","children":[]},{"level":3,"title":"\u4F7F\u7528 FactoryBean \u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u903B\u8F91","slug":"\u4F7F\u7528-factorybean-\u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u903B\u8F91","link":"#\u4F7F\u7528-factorybean-\u81EA\u5B9A\u4E49\u521D\u59CB\u5316\u903B\u8F91","children":[]}]}],"git":{"createdTime":1672329285000,"updatedTime":1672329285000,"contributors":[{"name":"alexchen","email":"1274812218@qq.com","commits":1}]},"readingTime":{"minutes":19.21,"words":5763},"filePathRelative":"md/spring/spring/02-ioc.md","localizedDate":"2022\u5E749\u670815\u65E5"}`);export{e as data};