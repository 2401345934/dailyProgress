---
title: 个人主页
translateHelp: false
---

```jsx
import React, { useEffect } from 'react';

export default () => {
  // useEffect(() => {
  //   location.href = '/css';
  // }, []);

  return (
    <div>
      <h1>个人介绍</h1>
    </div>
  );
};
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
