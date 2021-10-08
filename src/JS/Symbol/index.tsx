/*
 * @Author: your name
 * @Date: 2021-10-08 16:18:34
 * @LastEditTime: 2021-10-08 16:42:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dailyProgress\src\JS\Symbol\index.tsx
 */
import React from 'react';
import './index.less';

export default () => {
  return (
    <div>
      <h2>Symbol 知识点</h2>
      <h3>Symbol 含义及使用方法</h3>
      <ol>
        <li>我认为 Symbol 是独一无二的值 是不会重复的</li>
        <li>并且从我们创建 Symbol 类型的时候 可以看的出来</li>
        <span className="md">const a = Symbol()</span>
        <li>
          这里创建的 Symbol 类型的是不能用 new 关键字 来创建 Symbol 类型的
        </li>
        <li>
          原因是通过 new 实例化的结果是一个 object 对象，而不是原始类型的 Symbol
          <br />
          并且 new Symbol() 控制台会给出相应的错误{' '}
          <span className="red">Symbol is not a constructor</span>
        </li>
        <li>Symbol 方法接收一个参数，表示对生成的 symbol 值的一种描述</li>
        <span className="md">const s = Symbol('foo');</span>

        <li>
          即使是传入相同的参数，生成的 symbol 值也是不相等的，因为 Symbol
          本来就是独一无二的意思
        </li>
        <span className="md">const foo = Symbol('foo');</span>
        <span className="md">const bar = Symbol('foo');</span>
        <span className="md">console.log(foo === bar); // false</span>
        <h3>Symbol.for 方法</h3>
        <div>
          Symbol.for 方法可以检测上下文中是否已经存在使用该方法且相同参数创建的
          symbol 值，如果存在则返回已经存在的值，如果不存在则新建。
        </div>
        <span className="md">const s1 = Symbol.for('foo');</span>
        <span className="md">const s2 = Symbol.for('foo');</span>
        <span className="md">console.log(s1 === s2); // true</span>
        <span className="md">console.log(foo === bar); // false</span>
        <h3>Symbol.keyFor 方法</h3>
        <div>
          Symbol.keyFor 方法返回一个使用 Symbol.for 方法创建的 symbol 值的 key
        </div>
        <span className="md">const foo = Symbol.for("foo");</span>
        <span className="md">const key = Symbol.keyFor(foo);</span>
        <span className="md">console.log(key); // foo</span>
      </ol>
      <h2>Symbol 使用场景</h2>
      <h3>消除魔法字符</h3>
      <h3>模拟类的私有方法</h3>
      ES6 中的类是没有 private
      关键字来声明类的私有方法和私有变量的，但是我们可以利用 Symbol
      的唯一性来模拟。
      <div>
        {` const speak = Symbol();
        class Person {
            [speak]() {
                ...
            }
        }`}
      </div>
      <h3>作为对象属性</h3>
      <span className="md">const name = Symbol('name');</span>
      <span className="md">const obj = {`{`}</span>
      <span className="md">const name = [name]: 'ClickPaas',</span>
      <span className="md">{`}`}</span>
    </div>
  );
};
