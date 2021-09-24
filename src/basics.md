---
title: 计算机基础
nav:
  path: /basics
  title: 计算机基础
  order: 1
---

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>JavaScript 中的数组和函数在内存中是如何存储的!</h2>
    <h3> JavaScript 中的数组存储大致需要分为两种情况：</h3>
    <ul>
      <li> 同种类型数据的数组分配连续的内存空间</li>
      <li>存在非同种类型数据的数组使用哈希映射分配内存空间</li>
    </ul>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2> 浏览器和 Node.js 中的事件循环机制有什么区别？</h2>
    <h3> JS中有两种任务类型?</h3>
    <ul>
      <li>
        微任务（microtask）和宏任务（macrotask），在ES6中，microtask称为
        jobs，macrotask称为 task：
      </li>
      <li>
        宏任务： script （主代码块）、setTimeout 、setInterval 、setImmediate
        、I/O 、UI rendering
      </li>
      <li>
        微任务：process.nextTick（Nodejs） 、Promise 、Object.observe
        、MutationObserver
      </li>
    </ul>
    <h3> Node.js中Event Loop和浏览器中Event Loop有什么区别</h3>
    <ul>
      <li>
        {' '}
        Node.js中宏任务分成了几种类型，并且放在了不同的task queue里。不同的task queue在执行顺序上也有区别，微任务放在了每个task
        queue的末尾：
      </li>
      <li> setTimeout/setInterval 属于 timers 类型；</li>
      <li>setImmediate 属于 check 类型；</li>
      <li>socket 的 close 事件属于 close callbacks 类型；</li>
      <li>其他 MacroTask 都属于 poll 类型。</li>
      <li>
        process.nextTick 本质上属于 MicroTask，但是它先于所有其他 MicroTask
        执行；
      </li>
      <li>所有 MicroTask 的执行时机在不同类型的 MacroTask 切换后。</li>
      <li>idle/prepare 仅供内部调用，我们可以忽略。</li>
      <li>pending callbacks 不太常见，我们也可以忽略。</li>
    </ul>
    <div></div>
  </div>
);
```
