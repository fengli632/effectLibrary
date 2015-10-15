# FullPage.js

---

##介绍

一个基于jQuery的插件,灵活方便，可以很方便轻松的做出全屏网站，主要功能有：

* 支持鼠标滚动

* 多个回调函数

* 支持手机、平板触摸事件

* 支持css3动画

* 支持窗口缩放

* 窗口缩放时自动调整

* 可设置滚动宽度、背景颜色、滚动速度、循环选项、回调、文本对齐方式、前进后退键盘控制等

可以去github主页获取：
https://github.com/alvarotrigo/fullPage.js

一些很漂亮的使用网站：

* 一生通账：https://moneytree.jp
* 启维echo：www.kibey.com
* cloudmagic:https://cloudmagic.com

## 使用方式

### 使用cdnjs加载插件(也可以本地导入)

https://cdnjs.com

```
//css样式引入
<link rel="stylesheet" type="text/css" href="https://cdnjs/cloudflare.com/ajax/libs/fullPage.js/2.6.7/jquery.fullPage.css">
//jquery引入
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.js"></script>
//jquery的动画，需要如引入
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.js"></script>
//最主要的fullpagejs引入
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.7/jquery.fullPage.js"></script>

```
### 基本页面结构

```
<div id="fullpage">
    <div class="section">第一页</div>
    <div class="section">第二页</div>
    <div class="section">第三页</div>
    <div class="section">第四页</div>
</div>
```

###也可以给某一页（section）增加slide（幻灯片）

```
<div class="section">
    <div class="slide">slide1</div>
    <div class="slide">slide2</div>
    <div class="slide">slide3</div>
    <div class="slide">slide4</div>
</div>
```

### 激活fullpage效果

```
<script>
    $(document).ready(function(){
        $('#fullpage').fullpage();
    });
</script>
```









