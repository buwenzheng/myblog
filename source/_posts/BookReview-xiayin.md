---
title: 侠之陌路
date: 2018-08-07 17:59:29
tags: 
- 书评
categories:
- 杂谈
- 书评
copyright: true
description: 张北海 --《侠隐》有感
---

# 面试题目收集

### 编程思维
1. 如果让你用原生js设计一个树控件，说说你的设计思路


2.  如果让你基于localstorage的1m空间，实现一个具有淘汰缓存机制的数据缓存系统，说说你的设计思路
  


3. 举几个业务里的实际例子，说说你在设计模式的实际应用场景


1. 10个ajax请求同时发起，全部返回后展示所有响应结果，如何展现？如果容忍最多失败3个http请求失败，如何设计这个功能


1. 通过监控发现某页面A，全国范围内访问正常，但山东省内访问速度异常缓慢，是什么原因造成的？有什么办法能预防此类事故的发生？


1. 10W条记录的数组，一次性渲染到页面上，如何处理可以不冻结UI？


### 拓展类问题
1. 在前端或者整个计算机领域最擅长的那个点？

1. 数据意义上的函数是如何定义的？


1. 你觉得有什么问题我没问到你但是你又特别想跟我讲的


1. 说一下你项目中用到的技术栈，以及觉得得意和出色的点，以及让你头疼的点，怎么解决的。


1. 实现一个数组扁平化函数flatten进一步如何使之效率更高


1. 压缩数据[{id: 1, name: "1"}{id: 2, name: "2"}...{id: 10000, name: "10000"}]，使之更少的占用带宽


1. 实现一个事件Event类，包含on,off,emit方法

### CSS
1. 盒子模型
html文档中的每个元素都被描绘成矩形盒子，这些矩形盒子通过一个模型来描述其占用空间，这个模型称为盒模型。盒模型通过四个边界来描述：margin（外边距），border（边框），padding（内边距），content（内容区域），如图所示
**几点要注意的地方**
  1. padding，border，margin都是可选的，默认值为0，但是浏览器会自行设置元素的margin和padding，需要手动覆盖掉
  2. 如果给元素设置背景，并且边框的颜色为透明，背景将应用于内容，内边距和边框组成的区域。
  3. 浏览器兼容性
一旦为页面设置了恰当的 DTD，大多数浏览器都会按照上面的图示来呈现内容。然而 IE 5 和 6 的呈现却是不正确的。
根据 W3C 的规范，元素内容占据的空间是由 width 属性设置的，而内容周围的 padding 和 border 值是另外计算的。
不幸的是，IE5.X 和 6 在怪异模式中使用自己的非标准模型。这些浏览器的 width 属性不是内容的宽度，而是内容、内边距和边框的宽度的总和。

1. 浮动为什么会引起高度塌陷 
> [使用float造成容器高度塌陷的原理与解决方法](http://wiki.jikexueyuan.com/project/liujinsheng/note/float%E9%80%A0%E6%88%90%E7%9A%84%E9%AB%98%E5%BA%A6%E5%A1%8C%E9%99%B7.html) 
> - 塌陷：父元素只包含浮动元素，那么它的高度就会塌缩为零（前提就是没有设置高度height属性,或者设置了为auto就会出现这种情况，当然不是所用的浏览器都是这样的，在IE8下面没有这种情况。）<tr/>
> - 造成原因：float属性会使元素`脱离文档流`，这样会使该元素的父容器在计算自身高度的时候忽略了这个元素，加上父元素没有定义height或height为auto的时候就会造成高度塌陷
> - 自己的认知：脱离文档流的元素跟父元素不处于同一个纬度

1. 清除浮动有哪几种方法  
    1. IE下给元素添加zoom:1仰视，不会干扰其他样式，haslayout
    1. 一个`<div style="clear:both;"></div>`当作最后一个字元素标签放在父元素中
     - 原理：clear:both 属性使该元素左右不允许产生浮动元素
      - 优点：简单直接，兼容性强
    2. `overflow:hidden`，开启BFC--块级排版上下文
      - 原理： 相当于开启一块独立于文档流的区域，可以包裹浮动流
      - 缺点：溢出文本不显示
    3.`.fix{zoom:1;}
.fix:after{display:block; content:'clear'; clear:both; line-height:0; visibility:hidden;}  
`
     - (1) `display:block`使生成的元素以块级元素显示,占满剩余空间;
     - (2) `height:0`避免生成内容破坏原有布局的高度。
     - (3) `visibility:hidden`使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互;
     - (4) 通过`content:""`生成内容作为最后一个元素，至于content里面是点还是其他都是可以的
     - (5) `zoom:1`触发IE hasLayout。
     - 除了`clear:both`用来闭合浮动的，其他代码无非都是为了隐藏掉`content`生成的内容，这也就是其他版本的闭合浮动为什么会有`font-size:0，line-height:0`
1. 清除浮动的原理
  - 总结：几种清除浮动的方式都是为了弥补浮动的缺陷，或者说是为了弥补浮动造成的恶果

1. BFC
  - 什么是：一些元素，`1、float属性不为none.
2、position属性不为static和relative.
3、display属性为下列之一:table-cell,table-caption,inline-block,flex,or inline-flex.
4、overflow属性不为visible.
，`他会建立一个新的块级格式化上下文。（相当于形成了一个独立于文档流之外的空间，内部不受外部文档流影响）
  - 作用： 阻止文本换行，（图片在左，文本不围绕图片）

1. 哪些属性可以继承
    [可继承属性详解](https://www.jianshu.com/p/34044e3c9317)
    贴合实际运用分析： 
    - 所有元素可继承：visibility和cursor。
    - 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction。
    - 块状元素可继承：text-indent和text-align。
    - 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。
    - 表格元素可继承：border-collapse。
    - 分析： 可继承的，字体样式：font-size color等，但是a标签是不继承color的，text-indent与text-align只有块元素能继承，行内元素无效，list-style等有序无序列表可继承
    

1. 两栏布局  
 - 什么是： 左边定宽，右列自适应，反之
 - 实现：[链接](https://segmentfault.com/a/1190000004424442)
     1. 纯左右浮动 
     2. 相对定位，控制left距离
     3. float+BFC，左/右浮动，左/右BFC
     4. table（没用过）
     5. flex



1. 三栏布局 
 - 什么是： 两边固定，中间自适应
 - 实现：[链接](https://segmentfault.com/a/1190000008705541)
      1. float实现
      2. position
      3. float+BFC
      4. flex

1. 移动端适配 
 - 说自己运用的，rem布局，[淘宝移动端布局方案](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html?utm_source=tuicool&utm_medium=referral) 

1. 浏览器兼容 
[浏览器兼容性问题及解决方案](https://www.jianshu.com/p/eba18372a3c1)
说下几个常遇到的点
    1. 浏览器的初始化样式不同导致的兼容性问题
      - 解决：[Normalize.js](https://link.jianshu.com/?t=http://necolas.github.io/normalize.css/)和[reset.js](https://link.jianshu.com/?t=http://meyerweb.com/eric/tools/css/reset/)，Normalize 的理念则是尽量保留浏览器的默认样式，不进行太多的重置；而Reset的目的，是将所有的浏览器的自带样式重置掉，这样更易于保持各浏览器渲染的一致性。
    2. 局部样式解析不同的兼容问题，主要是IE与非IE浏览器之间的区别opacity的设置、盒模型解析方式不同、滚动条颜色设置

1. line-height: 150%和line-height:1.5的区别
   - [深入了解line-height属性](http://www.cnblogs.com/fengzheng126/archive/2012/05/18/2507632.html)


1. 移动端边框1px看起来很粗的解决办法 
 - [移动端1px细线解决方案](https://juejin.im/post/5a800ca95188257a604991e4)
 - 为什么----viewport的设置和屏幕物理分辨率是按比例而不是相同的. 移动端window对象有个devicePixelRatio属性, 它表示设备物理像素和css像素的比例, 在retina屏的iphone手机上, 这个值为2或3, css里写的1px长度映射到物理像素上就有2px或3px那么长.（物理像素与css像素差距）
 - 解决方案：
      1. 使用小数来写px值---即通过媒体查询，media query对应devicePixelRatio有个查询值-webkit-min-device-pixel-ratio配置不同的比值下的边框宽度
      2. border-image--一张6x6的图片，九宫格等分填充border-image
      3. background渐变--背景渐变，渐变在透明色和边框色中间分割  
      
1. css3了解多少，渐进增强和优雅降级
[渐进增强和优雅降级解析](https://juejin.im/post/58eda95261ff4b005819faf9)
css3新[特性](https://www.ibm.com/developerworks/cn/web/1202_zhouxiang_css3/)
  1. 选择器、@Font-face特性（可使用服务端字体）


1. 实现水平垂直居中的几种方法（高度和宽度不确定）
  [不定元素宽高居中方法](https://www.tangshuang.net/3197.html)
  1. position:fixed、0、margin:auto
  2. position:absolute、0、margin:auto
  3. display:table display:table-cell
  4. flex
  
### Javascript
1. 数据类型有哪些(参考[JavaScript基本数据类型和内置数据类型
](https://blog.csdn.net/a597926661/article/details/8000275))
    - 基本数据类型
        undefined
        null
        string
        number
        boolean 
        
        注意:描述中仅仅是指代数据类型的名称，与js的全局对象Nan、Boolen、Number等不是一种概念
    - 内置数据类型：
      Function:函数类型的用户接口
      Object:对象类型的用户接口
      Boolean,Number,String:分别为这三种简单数据类型的[对象包装器](http://www.cnblogs.com/dolphinX/p/3280340.html)
      Date,Array,RegExp:内置拓展数据类型
    - 区别：
      存储位置不同，基本（原始）数据类型直接存储在栈(stack)中的简单数据段，占用空间小、大小固定，且会频繁使用，所以会放到栈中存储
      引用（内置）数据类型存储在堆(heap)中的对象，占据空间打、大小不固定，如果存储在栈中会影响性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体地址的起始地址。当解释器寻找引用值的时候，会首先检索其在栈中的地址，取得地址后从堆中获得实体。[堆栈的概念](https://blog.csdn.net/byr_syr/article/details/8573623)
    
1. 闭包 
    

1. 原型链 
 原型的继承机制是js设计之初所决定的，js的设计者设计这个语言的目的。选择了原型继承机制。

1. 继承 


1. this指向 


1. 作用域 


1. cookie和session有什么区别，cookie的大小是多少（4kb 二十条）
   区别： 
   - session在服务端，cookie在客户端
   - session默认被存在在服务器的一个文件里（不是内存）
   - session 的运行依赖 session id，而 session id 是存在 cookie 中的，也就是说，如果浏览器禁用了 cookie ，同时 session 也会失效（但是可以通过其它方式实现，比如在 url 中传递 session_id）
   - session 可以放在 文件、数据库、或内存中都可以。
   - session维持客户端一个会话的唯一标识，即确认用户身份

1. 深拷贝和浅拷贝的区别，手写深拷贝
    浅拷贝：复制对象的一层属性----简单赋值，而且复制出的值与被复制的值指向同一个内存，修改任意一个两者的值都会改变。`Object.assign()`，浅拷贝，只拷贝属性值
    深拷贝：完全复制一个新的对象出来，并且与被复制的不是同一引用。对两者任一的更改操作不会相互影响
    
1. 你的node项目中有几个进程，有几个线程，如果node进程崩溃了，如何知道


1. node中的process是什么


1. 你未来的发展规划


1. localStorage和sessionStorage的区别是什么


1. 页面加载速度很慢，如何加速页面的渲染速度


1. 图片很大，如何进行优化
 


#### 博文链接
[前端开发面试题总结之——CSS3](https://www.jianshu.com/p/f60b619aa52b)



