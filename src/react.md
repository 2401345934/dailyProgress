---
title: React 知识点
nav:
  path: /react
  title: React 知识点
  order: 5
---

```jsx
import React from 'react';
import { BackTop, Image } from 'antd';

export default () => (
  <div>
    <h2> class组件生命周期</h2>
    <h3>旧版生命周期（v16.0之前）</h3>
    <div style={{ height: 250 }}>
      <Image
        style={{ height: 250 }}
        src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1500a3568b764189ae0f8e408ab2c5f1~tplv-k3u1fbpfcp-watermark.awebp"
      />
    </div>
    <ol>
      <li>组件挂载过程</li>
      <ol>
        <li>constructor()</li>
        <li>componentWillMount()</li>
        <li>render()</li>
        <li>componentDidMount()</li>
      </ol>
      <li>组件更新过程</li>
      <ol>
        <li>componentWillReceiveProps ()</li>
        <li>componentWillUpdate ()</li>
        <li>componentDidUpdate ()</li>
      </ol>
      <li>组件卸载过程</li>
      <ol>
        <li>componentWillUnmount ()</li>
      </ol>
    </ol>

    <h3>新版生命周期（v16.3之后）</h3>
  </div>
);
```

```jsx
import React from 'react';
import { BackTop, Image } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default () => (
  <div>
    <BackTop />

    <h2>
      <a
        target="_blank"
        href="https://juejin.cn/post/6844903988794671117#heading-0"
      >
        React合成事件系统
      </a>
    </h2>
  </div>
);
```
