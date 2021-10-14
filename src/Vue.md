---
title: Vue 知识点
nav:
  path: /vue
  title: Vue 知识点
  order: 5
---

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>vue 组件通讯方式有哪些方法</h2>
    <ol>
      <li>
        props 和$emit 父组件向子组件传递数据是通过 prop
        传递的，子组件传递数据给父组件是通过$emit 触发事件来做到的
      </li>
      <li>$parent,$children 获取当前组件的父组件和当前组件的子组件</li>
      <li>
        $attrs 和$listeners A->B->C。Vue 2.4 开始提供了$attrs 和$listeners
        来解决这个问题
      </li>
      <li>
        父组件中通过 provide 来提供变量，然后在子组件中通过 inject
        来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)
      </li>
      <li>$refs 获取组件实例</li>
      <li>envetBus 兄弟组件数据传递 这种情况下可以使用事件总线的方式</li>
      <li>vuex 状态管理</li>
    </ol>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>Vue 响应式原理</h2>
    <div>整体思路是数据劫持+观察者模式</div>
    <div>
      对象内部通过 defineReactive 方法，使用 Object.defineProperty
      将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。当页面使用对应属性时，每个属性都拥有自己的
      dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的
      watcher 去更新(派发更新)。
    </div>
  </div>
);
```

```jsx | pure
class Observer {
  // 观测值
  constructor(value) {
    this.walk(value);
  }
  walk(data) {
    // 对象上的所有属性依次进行观测
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}
// Object.defineProperty数据劫持核心 兼容性在ie9以及以上
function defineReactive(data, key, value) {
  observe(value); // 递归关键
  // --如果value还是一个对象会继续走一遍odefineReactive 层层遍历一直到value不是对象才停止
  //   思考？如果Vue数据嵌套层级过深 >>性能会受影响
  Object.defineProperty(data, key, {
    get() {
      console.log('获取值');

      //需要做依赖收集过程 这里代码没写出来
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      console.log('设置值');
      //需要做派发更新过程 这里代码没写出来
      value = newValue;
    },
  });
}
export function observe(value) {
  // 如果传过来的是对象或者数组 进行属性劫持
  if (
    Object.prototype.toString.call(value) === '[object Object]' ||
    Array.isArray(value)
  ) {
    return new Observer(value);
  }
}
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>Vue nextTick 原理</h2>
    <div>
      nextTick 中的回调是在下次 DOM
      更新循环结束之后执行的延迟回调。在修改数据之后立即使用这个方法，获取更新后的
      DOM。主要思路就是采用微任务优先的方式调用异步方法去执行 nextTick
      包装的方法
    </div>
  </div>
);
```

```jsx | pure
let callbacks = [];
let pending = false;
function flushCallbacks() {
  pending = false; //把标志还原为false
  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}
let timerFunc; //定义异步方法  采用优雅降级
if (typeof Promise !== 'undefined') {
  // 如果支持promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== 'undefined') {
  // MutationObserver 主要是监听dom变化 也是一个异步方法
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined') {
  // 如果前面都不支持 判断setImmediate
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // 最后降级采用setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nextTick(cb) {
  // 除了渲染watcher  还有用户自己手动调用的nextTick 一起被收集到数组
  callbacks.push(cb);
  if (!pending) {
    // 如果多次调用nextTick  只会执行一次异步 等异步队列清空之后再把标志变为false
    pending = true;
    timerFunc();
  }
}
```

```jsx
import React from 'react';
import { Image, BackTop } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default () => (
  <div>
    <h2>Vue diff 原理</h2>

    <div>
      <Image
        style={{ width: '100%' }}
        src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e3c68d1b0884d9ca0f8ffc5ee64a28e~tplv-k3u1fbpfcp-watermark.awebp"
      ></Image>
      <BackTop />
    </div>
  </div>
);
```
