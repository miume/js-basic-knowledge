## 文档流 Document Flow

- #### 浏览器会从上到下加载块级元素，从左到右加载行内元素

## 格式化上下文（如何排列HTML元素）

- #### BFC Block Formatting Context 块级格式化上下文

- #### IFC Inline Formatting Context 行内格式化上下文

- #### css中可以通过float或者positive:absolute两种方法让元素脱离文档流

  - ##### float（部分无视）：其它盒子会无视这个元素，但其它盒子的文本仍然会让出位置，环绕在周围

  - ##### Positive:absolute（完全无视）：其它盒子与其它盒子的文本都会无视这个元素