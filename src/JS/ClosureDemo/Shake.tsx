/*
 * @Author: your name
 * @Date: 2021-10-11 16:00:06
 * @LastEditTime: 2021-10-11 16:01:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dailyProgress\src\JS\ClosureDemo\Shake.ts
 */
import React from 'react';

export default () => {
  // 防抖
  function debounce(fn: any, delay = 300) {
    let timer: any; //闭包引用的外界变量
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

  return <div></div>;
};
