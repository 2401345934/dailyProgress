---
title: 发布订阅
---

```jsx
import React from 'react';
import Mediator from './Mediator/index.jsx';

export default () => (
  <div>
    <h1>中间者( Mediator )</h1>
    <h2>接下来通过一个小Demo 来展示 </h2>
    <h3>
      我们接下来的新任务是实现一个同步滚动的编辑与预览区，这是一些在线编辑类Web应用常见的一种交互形式。
    </h3>
    <Mediator></Mediator>
  </div>
);
```
