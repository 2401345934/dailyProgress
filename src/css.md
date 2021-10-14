---
title: 'CSS 知识点'
nav:
  path: /css
  title: CSS 知识点
  order: 2
---

```jsx
import React from 'react';
import './css.less';

export default () => (
  <div>
    <h1>CSS 介绍</h1>
    <h2>CSS 常用网站介绍</h2>
    <ul>
      <li>
        <a
          target="_blank"
          href="https://lhammer.cn/You-need-to-know-css/#/zh-cn/"
        >
          css 的各种效果实现
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/QiShaoXuan/css_tricks">
          css 的常用样式
        </a>
      </li>

      <li>
        <a target="_blank" href="https://sass.bootcss.com/documentation">
          Sass官网
        </a>
      </li>
      <li>
        <a target="_blank" href="https://less.bootcss.com/">
          Less官网
        </a>
      </li>
    </ul>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2> css 的渲染层合成是什么 浏览器如何创建新的渲染层</h2>
    <div>
      在 DOM
      树中每个节点都会对应一个渲染对象（RenderObject），当它们的渲染对象处于相同的坐标空间（z
      轴空间）时，就会形成一个
      RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。
    </div>
    <h3>浏览器如何创建新的渲染层</h3>
    <ol>
      <li> 元素 document</li>
      <li>有明确的定位属性（relative、fixed、sticky、absolute）</li>
      <li>opacity</li>
      <li>有 CSS fliter 属性</li>
      <li>有 CSS mask 属性</li>
      <li>有 CSS mix-blend-mode 属性且值不为 normal</li>
      <li>有 CSS transform 属性且值不为 none</li>
      <li>backface-visibility 属性为 hidden</li>
      <li>有 CSS reflection 属性</li>
      <li>
        有 CSS column-count 属性且值不为 auto 或者有 CSS column-width
        属性且值不为 auto
      </li>
      <li>当前有对于 opacity、transform、fliter、backdrop-filter 应用动画</li>
      <li>overflow 不为 visible</li>
    </ol>
    <h3>
      <a target="_blank" href="https://juejin.cn/post/6844903966573068301">
        注意！不少人会将这些合成层的条件和渲染层产生的条件混淆，
      </a>
    </h3>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>
      css 优先级是怎么计算的 (注意这里的权限值只是为了方便看 并不是 20个ID选择器
      就大于 内联样式)
    </h2>
    <ol>
      <li> 第一优先级：!important 会覆盖页面内任何位置的元素样式</li>
      <li>内联样式，如 style="color: green"，权值为 1000</li>
      <li>ID 选择器，如#app，权值为 0100</li>
      <li>
        类、伪类、属性选择器，如.foo, :first-child, div[class="foo"]，权值为
        0010
      </li>
      <li>标签、伪元素选择器，如 div::first-line，权值为 0001</li>
      <li>通配符、子类选择器、兄弟选择器，如*, >, +，权值为 0000</li>
      <li>继承的样式没有权值</li>
    </ol>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h1>BFC</h1>
    <h2>什么是BFC</h2>
    <div>
      BFC 全称为块级格式化上下文 (Block Formatting Context) 。BFC是 W3C CSS 2.1
      规范中的一个概念，它决定了元素如何对其内容进行定位以及与其他元素的关系和相互作用，当涉及到可视化布局的时候，Block
      Formatting
      Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。可以说BFC就是一个作用范围，把它理解成是一个独立的容器，并且这个容器里box的布局与这个容器外的box毫不相干。
    </div>
    <h2>触发BFC的条件</h2>
    <ul>
      <li>
        根元素或其它包含它的元素 浮动元素 (元素的 float 不是 none) 绝对定位元素
      </li>
      <li>
        (元素具有 position 为 absolute 或 fixed) 内联块 (元素具有 display:
      </li>
      <li>inline-block) 表格单元格 (元素具有 display:</li>
      <li>table-cell，HTML表格单元格默认属性) 表格标题 (元素具有 display:</li>
      <li>
        table-caption, HTML表格标题默认属性) 具有overflow 且值不是 visible
      </li>
      <li>
        的块元素 弹性盒（flex或inline-flex） display: flow-root column-span: all
      </li>
    </ul>
    <h2>BFC的约束规则</h2>
    <ul>
      <li>内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）</li>
      <li>
        处于同一个BFC中的元素相互影响，可能会发生外边距重叠 每个元素的margin
      </li>
      <li> box的左边，与容器块border</li>
      <li>
        box的左边相接触(对于从左往右的格式化，否则相反)，即使存在浮动也是如此
      </li>
      <li>
        BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然
      </li>
      <li> 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算</li>
      <li> 浮动盒区域不叠加到BFC上</li>
    </ul>
    <h2>BFC可以解决的问题</h2>
    <ul>
      <li>垂直外边距重叠问题</li>
      <li>去除浮动</li>
      <li>自适用两列布局（float + overflow）</li>
    </ul>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <div>
    <h2>position 有哪些值，作用分别是什么</h2>
    <h3>static</h3>
    <div>
      static(没有定位)是 position 的默认值，元素处于正常的文档流中，会忽略
      left、top、right、bottom 和 z-index 属性。
    </div>
    <h3>relative</h3>
    <div>
      relative(相对定位)是指给元素设置相对于原本位置的定位，元素并不脱离文档流，因此元素原本的位置会被保留，其他的元素位置不会受到影响。
    </div>
    <div>使用场景：子元素相对于父元素进行定位</div>
    <h3>absolute</h3>
    <div>
      absolute(绝对定位)是指给元素设置绝对的定位，相对定位的对象可以分为两种情况：
    </div>
    <ul>
      <li>
        {' '}
        设置了absolute 的元素如果存在有祖先元素设置了 position 属性为 relative 或者
        absolute，则这时元素的定位对象为此已设置 position 属性的祖先元素。
      </li>
      <li>
        如果并没有设置了 position 属性的祖先元素，则此时相对于 body 进行定位。
        使用场景：跟随图标 图标使用不依赖定位父级的 absolute 和 margin
        属性进行定位，这样，当文本的字符个数改变时，图标的位置可以自适应
      </li>
    </ul>
    <h3>fixed</h3>
    <div>
      可以简单说 fixed 是特殊版的 absolute，fixed 元素总是相对于 body 定位的。
      使用场景：侧边栏或者广告图
    </div>

    <h3>inherit</h3>
    <div>
      继承父元素的 position 属性，但需要注意的是 IE8 以及往前的版本都不支持
      inherit 属性。
    </div>

    <h3>sticky</h3>
    <div>
      sticky 设置了 sticky
      的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是
      top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成
      fixed，根据设置的 left、top 等属性成固定位置的效果。
      当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了
      top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px
      的位置时固定，不再向上移动（相当于此时 fixed 定位）
    </div>
  </div>
);
```

```jsx
import React from 'react';

export default () => (
  <h2>
    <a target="_blank" href="https://juejin.cn/post/6844903982960214029">
      垂直水平居中实现方式
    </a>
  </h2>
);
```
