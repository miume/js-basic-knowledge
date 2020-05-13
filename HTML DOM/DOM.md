## HTML DOM

- DOM(Document Object Model)文档对象模型：定义了访问和操作HTML文档的标准方法

- HTML DOM定义了所有HTML元素的对象和属性以及访问它们的方法

  ```html
  <html>
  
    <head>
    <title>文本属性Text</title>
  	</head>
  
    <body>
  
      <div>
        <p>
          元素element：div p span a h1~h6等
          元素属性：Attribute
          元素文本：Text
        </p>
      </div>
  
    </body>
  </html>
  ```

- HTML DOM节点

  - 文档节点 document
  - 元素节点 element
  - 属性节点 attribute
  - 文本节点 text
  - 注释节点

- HTML DOM方法

  - document.getElementById()
  - document.getElementsByTagName()
  - document.getElementsByClassName()
  - appendChild()
  - removeChild()
  - replaceChild()
  - insertBefore()
  - document.createElement() ：创建元素
  - document.createTextNode()：创建文本节点

- HTML DOM属性

  - innerHTML：对于获取或替换HTML元素的内容很有用
  - nodeName：节点的名称
  - nodeValue
    - 元素节点的nodeValue是undefined或null
    - 文本节点的nodeValue是文本本身
    - 属性节点的nodeValue是属性值
  - nodeType
  - parentNode：节点的父节点
  - childNodes：节点的字节点
  - attributes：节点的属性节点

- HTML DOM访问

  - document.getElementById()
  - document.getElementsByTagName()
  - document.getElementsByClassName()

- HTML DOM修改

  ```html
  //修改HTML内容
  document.getElementById('id').innerHTML  = 'new text'
  
  //修改CSS样式
  document.getElementById('test').style.color = 'red'
  document.getElementById('test').style.fontSize = '16px'
  ```

- HTML DOM元素

  - 创建、添加、删除和替换HTML元素
    - createElement()
    - A.appendChild(B)
    - parent.removeChild(child)
    - parent.replaceChild(A,B)

- HTML DOM事件

  - onClick()
  - onChange()
  - onmouseover、onmouseout
  - onmousedown、onmouseup、onclick
  - onload和onunload事件
    - 当用户进入或者离开界面时，会触发

