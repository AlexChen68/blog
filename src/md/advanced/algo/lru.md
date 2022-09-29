---
title: LRU 算法
date: 2022-09-27
tag:
  - 页面置换算法
category:
  - 算法
isOriginal: true
description: LRU 算法
---

`LRU` 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。
<!-- more -->



> `LRU` 是 Least Recently Used 的缩写，即最近最少使用，是一种常用的页面置换算法，选择最近最久未使用的页面予以淘汰。
> 该算法赋予每个页面一个访问字段，用来记录一个页面自上次被访问以来所经历的时间 t，
> 当须淘汰一个页面时，选择现有页面中其 t 值最大的，即最近最少使用的页面予以淘汰