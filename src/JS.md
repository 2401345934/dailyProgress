---
title: JS 介绍
nav:
  path: /js
  title: JS 知识点
  order: 3
---

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>什么是事件代理（事件委托） 有什么好处</h2>
    <h3>
      事件委托的原理：不给每个子节点单独设置事件监听器，而是设置在其父节点上，然后利用冒泡原理设置每个子节点。
    </h3>
    <ol>
      <li>
        减少内存消耗和 dom 操作，提高性能 在 JavaScript
        中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能，因为需要不断的操作
        dom,那么引起浏览器重绘和回流的可能也就越多，页面交互的事件也就变的越长，这也就是为什么要减少
        dom
        操作的原因。每一个事件处理函数，都是一个对象，多一个事件处理函数，内存中就会被多占用一部分空间。如果要用事件委托，就会将所有的操作放到
        js 程序里面，只对它的父级进行操作，与 dom
        的操作就只需要交互一次，这样就能大大的减少与 dom 的交互次数，提高性能；
      </li>
      <li>
        动态绑定事件 因为事件绑定在父级元素 所以新增的元素也能触发同样的事件
      </li>
    </ol>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>addEventListener 默认是捕获还是冒泡</h2>
    <ol>
      <li>默认是冒泡</li>
      <li>addEventListener第三个参数默认为 false 代表执行事件冒泡行为。</li>
      <li>当为 true 时执行事件捕获行为。</li>
    </ol>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>apply call bind 区别</h2>
    <ol>
      <li>三者都可以改变函数的 this 对象指向。</li>
      <li>
        三者第一个参数都是 this
        要指向的对象，如果如果没有这个参数或参数为undefined 或
        null，则默认指向全局 window。
      </li>
      <li>
        三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call
        是一次性传入参数，而 bind 可以分为多次传入。
      </li>
      <li>
        bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行
        。
      </li>
      <li>
        bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时
        this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
      </li>
    </ol>
  </div>
);
```

```jsx | preview
import React from 'react';

export default () => {
  // 防抖
  function debounce(fn, delay = 300) {
    let timer; //闭包引用的外界变量
    return function () {
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  // 使用闭包可以在 JavaScript 中模拟块级作用域
  function outputNumbers(count) {
    (function () {
      for (var i = 0; i < count; i++) {
        alert(i);
      }
    })();
    alert(i); //导致一个错误！
  }

  // 闭包可以用于在对象中创建私有变量
  var aaa = (function () {
    var a = 1;
    function bbb() {
      a++;
      console.log(a);
    }
    function ccc() {
      a++;
      console.log(a);
    }
    return {
      b: bbb, //json结构
      c: ccc,
    };
  })();
  console.log(aaa.a); //undefined
  aaa.b(); //2
  aaa.c(); //3

  return (
    <div>
      <h2>闭包常用的场景</h2>
      <h3>比如常见的防抖节流 展开可查看</h3>
      <h3>使用闭包可以在 JavaScript 中模拟块级作用域 展开可查看</h3>
      <h3>闭包可以用于在对象中创建私有变量 展开可查看</h3>
    </div>
  );
};
```

```jsx
import React from 'react';
import SymbolComponent from './JS/Symbol';

export default () => <SymbolComponent></SymbolComponent>;
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
