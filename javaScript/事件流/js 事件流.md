## 事件流

- ##### 事件流是指事件发生后，在页面中传播的顺序

  - 事件捕获阶段

  - 处于目标阶段

  - 事件冒泡阶段

    

  事件捕获：从最不具体的元素开始，往下传播，到最具体的元素（document -> html -> body -> div -> ...）

  处于目标阶段：被点击的元素

  事件冒泡阶段：从最具体的元素（就是被点击的元素）往上传播，到最不具体的元素

- ##### 阻止事件冒泡和阻止默认行为的兼容性写法

  ```js
  //阻止冒泡事件
  function stopPropagation(e) {
    if(e && e.stopPropagation) {
      e.stopPropagation(); //非IE下
    } else {
      window.event.cancleBubble(); //IE下
    }
  }
  
  //阻止默认行为
  function stopDefault(e) {
    if(e && e.stopDefault) {
      e.stopDefault(); //非IE下
    } else {
       window.event.returnValue = false; //IE下
    }
    return false;
  }
  ```

  - js原生事件

    - addEventListener(event, function,useCapture) 
      - event 事件名称
      - function 事件触发后的回调函数
      - useCapture 可选参数，是否开启捕获，默认为false
    - IE 只支持冒泡，不支持捕获，e.attachEvent(event,function)

  - ##### 事件委托和事件代理

    - 原理：利用事件冒泡原理，只指定一个事件处理程序，来管理某一类型的所有事件
    - 为什么使用事件委托？
      - 网上大部分都是用取快递来解释
      - 公司前台（负责代收快递），员工有时间来拿快递

    ```html
    <html>
      <body>
        <div>
          <p>事件委托的原理：利用事件冒泡原理，只指定一个事件处理函数，来管理某一类型的所有事件</p>
        <p>优点：只需操作一次DOM，就可以完成所有的效果</p>
        <p>新增的子元素都是带有事件效果的；用事件委托，根本不需要去遍历元素的子节点，只需要给父元素添加事件就好来，其它的判断都在js里面执行</p>
          <ul id='parent'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </body>
    </html>
    <script>
      var obj = document.getElementById('parent');
        obj.addEventListener('click',eventAgent,false);
        function eventAgent(e) {
            e = e || window.event;
            target = e.target || e.srcElement; //用来兼容IE浏览器
            if(target.nodeName.toLowerCase() === 'li') {
                console.log(target.innerHTML);
            }
        }
    </script>
    ```

    - ###### 事件委托场景

      - 如果想在大量子元素（包括动态添加的）中单击任何一个就可以运行一段代码，则可以选择把事件监听器设置在父节点上