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

### 配置项

`sectionsColor`:通过设置sectionsColor来为背景设置背景色；
```
sectionsColor:['green''red''gray''black']
```
`controlArrows`:设置幻灯片slide是否显示左右箭头，默认为true设置为false幻灯片左右的箭头就会消失，在移动设备上，我们可以通过滑动来操作幻灯片

`verticalCentered`:每一页内容是否垂直居中，默认为true

`resize`:设置字体是否随着窗口缩放而缩放，默认为false

`scrollingSpeed`:页面切换时滚动速度，单位为毫秒，默认为700毫秒

`anchors`:锚链接，默认为[],有了锚链接，用户就可以根据链接地址快速打开定位到某一页面

> 注意：定义锚链接时，值不要和页面中任意的id或name相同，尤其是在ie浏览器下。而且定义时不需要加 `#`号.
```
anchors:['page1','page2','page3','page4']
```
链接地址
```
file:///D:/git/effectLibrary/FullPagejs/index.html#page2
```
还可以在section类中添加active类名，默认打开链接就会跳到active页面,如下：打开`file:///D:/git/effectLibrary/FullPagejs/index.html`就会跳到page3页面
```
<div class="section section3 active">
    <h1>庙里有个和尚……</h1>
</div>
```
`lockAnchors`:锁定锚链接，页面地址不发生改变，一般不使用，默认为false






