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

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>从输入一个 URL 地址到浏览器完成渲染的整个过程!</h2>
    <h3> 这个问题属于老生常谈的经典问题了 下面给出面试简单版作答</h3>
    <ol>
      <li> 浏览器地址栏输入 URL 并回车</li>
      <li>浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期</li>
      <li>DNS 解析 URL 对应的 IP</li>
      <li>根据 IP 建立 TCP 连接（三次握手）</li>
      <li>发送 http 请求</li>
      <li>服务器处理请求，浏览器接受 HTTP 响应</li>
      <li>浏览器解析并渲染页面</li>
      <li>关闭 TCP 连接（四次握手）</li>
    </ol>
    <h3>
      <a target="_blank" href="https://juejin.cn/post/6844903832435032072">
        复杂版
      </a>
    </h3>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>事件循环相关题目--必考（一般是代码输出顺序判断）</h2>
  </div>
);
```

```jsx | pure
setTimeout(function () {
  console.log('1');
}, 0);
async function async1() {
  console.log('2');
  const data = await async2();
  console.log('3');
  return data;
}
async function async2() {
  return new Promise((resolve) => {
    console.log('4');
    resolve('async2的结果');
  }).then((data) => {
    console.log('5');
    return data;
  });
}
async1().then((data) => {
  console.log('6');
  console.log(data);
});
new Promise(function (resolve) {
  console.log('7');
  //   resolve()
}).then(function () {
  console.log('8');
});
// 输出结果：247536 async2 的结果 1
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2> http 状态码 204 301 302 304 400 401 403 404 含义</h2>
    <ol>
      <li>
        http 状态码 204 （无内容） 服务器成功处理了请求，但没有返回任何内容
      </li>
      <li>
        http 状态码 301 （永久移动） 请求的网页已永久移动到新位置。
        服务器返回此响应（对 GET 或 HEAD
        请求的响应）时，会自动将请求者转到新位置。
      </li>
      <li>
        http 状态码 302 （临时移动）
        服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。
      </li>
      <li>
        http 状态码 304 （未修改） 自从上次请求后，请求的网页未修改过。
        服务器返回此响应时，不会返回网页内容。
      </li>
      <li>
        http 状态码 400 （错误请求） 服务器不理解请求的语法（一般为参数错误）。
      </li>
      <li>
        http 状态码 401 （未授权） 请求要求身份验证。
        对于需要登录的网页，服务器可能返回此响应。
      </li>
      <li>
        http 状态码 403 （禁止） 服务器拒绝请求。（一般为客户端的用户权限不够）
      </li>
      <li>http 状态码 404 （未找到） 服务器找不到请求的网页。</li>
    </ol>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2> http2.0 做了哪些改进 3.0 呢</h2>
    <h3> http2.0 特性如下</h3>
    <ol>
      <li> 二进制分帧传输</li>
      <li>多路复用</li>
      <li>头部压缩</li>
      <li>服务器推送</li>
    </ol>
    <div>Http3.0 相对于 Http2.0 是一种脱胎换骨的改变！</div>
    <div>
      http
      协议是应用层协议，都是建立在传输层之上的。我们也都知道传输层上面不只有 TCP
      协议，还有另外一个强大的协议 UDP 协议，2.0 和 1.0 都是基于 TCP
      的，因此都会有 TCP 带来的硬伤以及局限性。而 Http3.0 则是建立在 UDP
      的基础上。所以其与 Http2.0 之间有质的不同。
    </div>
    <h3> http3.0 特性如下</h3>
    <ol>
      <li>连接迁移</li>
      <li>无队头阻塞</li>
      <li>自定义的拥塞控制</li>
      <li>前向安全和前向纠错</li>
    </ol>
    <h3>
      <a
        target="_blank"
        href="https://blog.csdn.net/m0_60360320/article/details/119812431"
      >
        详细细节
      </a>
    </h3>
  </div>
);
```
