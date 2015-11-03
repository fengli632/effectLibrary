$(window).scroll(scrolls);
scrolls();

function scrolls(){
    var s1,s2,s3,s4,s5,s6;
    //获取导航条每一个项目
    var fixNav = $('div#nav ul li');
    //定义滚动的垂直距离
    var sTop = $(window).scrollTop();
    //每一个section距离顶部的偏移量
    s1 = $('#section1').offset().top;
    s2 = $('#section2').offset().top;
    s3 = $('#section3').offset().top;
    s4 = $('#section4').offset().top;
    s5 = $('#section5').offset().top;
    s6 = $('#section6').offset().top;

    //如果垂直滚动距离到达每一个section,就给相应的nav导航li添加"cur"类否则去除"cur"类
    if(sTop>=s1){
       fixNav.eq(0).addClass('cur').siblings().removeClass('cur');
   }
    if(sTop>=s2-100){
       fixNav.eq(1).addClass('cur').siblings().removeClass('cur');
       }
    if(sTop>=s3-100){
       fixNav.eq(2).addClass('cur').siblings().removeClass('cur');
       }
    if(sTop>=s4-100){
       fixNav.eq(3).addClass('cur').siblings().removeClass('cur');
       }
    if(sTop>=s5-100){
       fixNav.eq(4).addClass('cur').siblings().removeClass('cur');
       }
    if(sTop>=s6-400){
       fixNav.eq(5).addClass('cur').siblings().removeClass('cur');
       }

}