---
title: 微前端 乾坤
nav:
  path: /qiankun
  title: 微前端 乾坤
  order: 7
---

```jsx
import React from 'react';
import './css.less';

export default () => (
  <h1>
    官网地址 :
    <a target="_blank" href="https://umijs.org/zh-CN/plugins/plugin-qiankun">
      https://umijs.org/zh-CN/plugins/plugin-qiankun
    </a>
  </h1>
);
```

```jsx
import React from 'react';
import { BackTop } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default () => (
  <div>
    <BackTop />
  </div>
);
```
