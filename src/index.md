---
title: 首页
---

```jsx
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    location.href = '/css';
  }, []);

  return (
    <div>
      <h1>个人介绍</h1>
    </div>
  );
};
```
