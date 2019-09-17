## 防抖debounce和节流throttle

##### 目的：减少调用频率，同时不影响实际效果，提高用户体验

#### 防抖debounce：

##### 概念：在事件被触发n秒后在执行回调函数，如果这n秒内又被触发，则重新计时

##### 应用场景：

- ###### 用户在输入框连续输入一串字符后，只会在输入完成后去执行最后一次的查询ajax操作

- ###### window的resize、scroll事件，不断得调整浏览器的窗口大小、或者滚动时会触发对应事件，防抖只让其触发一次

##### 	原理：

- ###### 维护一个定时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，都会清除当前的timer，然后重新设置超时调用，即重新计时。（只有最后一次操作能被触发）

##### 思路：

- ###### 持续触发不会执行回调函数

- ###### 停止触发后一段时间，执行回调函数

  ```js
  
  function handle() {
    console.log('debounce')
  }
  
  function debounce(fn, ms) {
    return function(args) {
      let context = this;
      //每次事件被触发，都会清除当前的timer，然后重写设置超时调用
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, ms);
    }
  }
  
  //滚动事件
  var debounceAjax = debounce(handle, 1000)
  window.addEventListener('scroll', function(e) {
    debounceAjax(e)
  });
  ```



#### 节流throttle

##### 概念：

- ##### 在规定时间内，只有一次触发事件的回调函数执行，如果在同一个规定事件内某事件被触发多次，只有一次能生效

##### 应用场景：

- ###### 鼠标连续不断地触发某事件

- ###### 在页面无限加载场景下

- ###### 监听滚动事件，比如是否滑到底部自动加载更多

##### 原理：

- ###### 通过判断是否到达一定时间来触发函数，若没到规定时间则使用计时器延后，而下一次事件则会重新设置计时器

##### 思路：

- ###### 持续触发时，并不会立即执行回调函数

- ###### 一段时间内只执行一次回调函数

  ```js
  //实现函数节流有两种方法
  //1、时间戳
  //2、定时器
  window.addEventListener('scroll', throttle(handle, 1000));
  
  function handle() {
    console.log('debounce')
  }
  
  function throttle(fn, ms) {
    var timer = null;
    return function() {
      var context = this;
      if(!timer) {
        timer = setTimeout(function() {
          fn.call(context, ...arguments)
          timer = null;
        }, ms)
      }
    }
  }
  
  function throttle1(fn, ms) {
    var start = Date.now();
    return function() {
      var context = this;
      var now = Date.now();
      if(now - start >= ms) {
        fn.call(context, ...arguments)；
        start = Date.now();
      }
    }
  }
  ```

  