---
title: CSS选择器
---

```jsx
import React from 'react';

export default () => (
  <div>
    <h1>说说CSS选择器以及这些选择器的优先级</h1>
    <ul>
      <li>!important</li>
      <li>内联样式（1000）</li>
      <li>ID选择器（0100）</li>
      <li>类选择器/属性选择器/伪类选择器（0010）</li>
      <li>元素选择器/伪元素选择器（0001）</li>
      <li>关系选择器/通配符选择器（0000）</li>
    </ul>
  </div>
);
```
