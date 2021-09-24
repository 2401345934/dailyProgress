---
title: BFC
---

```jsx
import React from 'react';

export default () => (
  <div>
    <h1>BFC</h1>
    <h2>什么是BFC</h2>
    <div>
      BFC 全称为块级格式化上下文 (Block Formatting Context) 。BFC是 W3C CSS 2.1
      规范中的一个概念，它决定了元素如何对其内容进行定位以及与其他元素的关系和相互作用，当涉及到可视化布局的时候，Block
      Formatting
      Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。可以说BFC就是一个作用范围，把它理解成是一个独立的容器，并且这个容器里box的布局与这个容器外的box毫不相干。
    </div>
    <h2>触发BFC的条件</h2>
    <ul>
      <li>
        根元素或其它包含它的元素 浮动元素 (元素的 float 不是 none) 绝对定位元素
      </li>
      <li>
        (元素具有 position 为 absolute 或 fixed) 内联块 (元素具有 display:
      </li>
      <li>inline-block) 表格单元格 (元素具有 display:</li>
      <li>table-cell，HTML表格单元格默认属性) 表格标题 (元素具有 display:</li>
      <li>
        table-caption, HTML表格标题默认属性) 具有overflow 且值不是 visible
      </li>
      <li>
        的块元素 弹性盒（flex或inline-flex） display: flow-root column-span: all
      </li>
    </ul>
    <h2>BFC的约束规则</h2>
    <ul>
      <li>内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）</li>
      <li>
        处于同一个BFC中的元素相互影响，可能会发生外边距重叠 每个元素的margin
      </li>
      <li> box的左边，与容器块border</li>
      <li>
        box的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
      </li>
      <li>
        BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
      </li>
      <li> 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算</li>
      <li> 浮动盒区域不叠加到BFC上</li>
    </ul>
    <h2>BFC可以解决的问题</h2>
    <ul>
      <li>垂直外边距重叠问题</li>
      <li>去除浮动</li>
      <li>自适用两列布局（float + overflow）</li>
    </ul>
  </div>
);
```
