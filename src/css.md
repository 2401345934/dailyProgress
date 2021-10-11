---
title: 'CSS 介绍'
nav:
  path: /css
  title: CSS 知识点
  order: 2
---

```jsx
import React from 'react';
import './css.less';

export default () => (
  <div>
    <h1>CSS 介绍</h1>
    <h2>CSS 常用网站介绍</h2>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/"
        >
          css 的各种效果实现
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/QiShaoXuan/css_tricks">
          css 的常用样式
        </a>
      </li>

      <li>
        <a target="_blank" href="https://sass.bootcss.com/documentation">
          Sass官网
        </a>
      </li>
      <li>
        <a target="_blank" href="https://less.bootcss.com/">
          Less官网
        </a>
      </li>
    </ul>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2> css 的渲染层合成是什么 浏览器如何创建新的渲染层</h2>
    <div>
      在 DOM
      树中每个节点都会对应一个渲染对象（RenderObject），当它们的渲染对象处于相同的坐标空间（z
      轴空间）时，就会形成一个
      RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。
    </div>
    <h3>浏览器如何创建新的渲染层</h3>
    <ol>
      <li> 元素 document</li>
      <li>有明确的定位属性（relative、fixed、sticky、absolute）</li>
      <li>opacity</li>
      <li>有 CSS fliter 属性</li>
      <li>有 CSS mask 属性</li>
      <li>有 CSS mix-blend-mode 属性且值不为 normal</li>
      <li>有 CSS transform 属性且值不为 none</li>
      <li>backface-visibility 属性为 hidden</li>
      <li>有 CSS reflection 属性</li>
      <li>
        有 CSS column-count 属性且值不为 auto 或者有 CSS column-width
        属性且值不为 auto
      </li>
      <li>当前有对于 opacity、transform、fliter、backdrop-filter 应用动画</li>
      <li>overflow 不为 visible</li>
    </ol>
    <h3>
      <a target="_blank" href="https://juejin.cn/post/6844903966573068301">
        注意！不少人会将这些合成层的条件和渲染层产生的条件混淆，
      </a>
    </h3>
  </div>
);
```
