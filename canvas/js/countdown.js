var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8; //时间像素小球的半径 
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime =  new Date(2015,7,25,19,30,00);// 倒计时截止日期 注意:js的月份是从0开始的 即0-11表示1到12月
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];//生成小球的颜色


window.onload = function(){

    //初始参数设置
    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    RADIUS = Math.round(WINDOW_WIDTH * 4/5 /108) - 1; //每一个数字占空间 15(RADIUS+1)
    MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10);    //整个倒计时数字画面占4/5  左边距占 1/10
    MARGIN_TOP = Math.round(WINDOW_HEIGHT *1/5); 



    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d"); //获取绘图的上下文环境

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();

    //改为动画显示
    setInterval(
        function(){
            render(context);

            update();
        }, 50);

}

//更新时间及小球动态运动
function update(){
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours = parseInt(nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600) / 60);
    var nextSeconds = nextShowTimeSeconds % 60;

    var curHours = parseInt(curShowTimeSeconds / 3600); //小时数
    var curMinutes = parseInt((curShowTimeSeconds-curHours*3600)/60); //分钟数
    var curSeconds = curShowTimeSeconds % 60; //秒数

    if(nextSeconds != curSeconds){

        //判断改变的数字 -- 小时十位数上的小球
        if(parseInt(curHours/10) != parseInt(nextHours/10)){
            addBalls(MARGIN_LEFT + 0,MARGIN_TOP, parseInt(curHours/10));
        }
        //小时个位数上的小球
        if(parseInt(curHours%10) != parseInt(nextHours%10)){
            addBalls(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }

        //分钟十位数上的小球
        if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
            addBalls(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes/10));
        }
        //分钟个位数上的小球
        if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
            addBalls(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes%10));
        }

        //秒十位数上的小球
        if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
            addBalls(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds/10));
        }
        //秒个位数上的小球
        if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
            addBalls(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds%10));
        }

        curShowTimeSeconds = nextShowTimeSeconds;
    }

    updateBalls();

    console.log(balls.length);
}
//更新绘制的彩色小球
function updateBalls(){
    for(var i=0;i<balls.length;i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if(balls[i].y >= WINDOW_HEIGHT - RADIUS){
            balls[i].y = WINDOW_HEIGHT - RADIUS;
            balls[i].vy = -balls[i].vy*0.75;
        }
    }

    //对小球的数量进行控制,看小球是否还在画面内
    var cnt = 0;
    for(var i=0;i<balls.length;i++){
        if(balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH)
        balls[cnt++] = balls[i]; //如果小球在画面内,就把小球留在数组中
    }
    while(balls.length > Math.min(300,cnt)){
        balls.pop();    //删掉末尾抛出画面的小球
    }
   
}

//绘制添加的彩色小球
function addBalls(x,y,num){
    for(var i=0; i<digit[num].length;i++){
        for(var j=0; j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                var aBall = {
                    x: x + j*2*(RADIUS+1)+(RADIUS+1),   //圆心位置x
                    y: y + i*2*(RADIUS+1)+(RADIUS+1),   //圆心位置y
                    g: 1.5+Math.random(),               //加速度,random让小球加速度不等,显得更活泼
                    vx:Math.pow(-1, Math.ceil(Math.random()*1000)) * 4, //x轴速度 -4到+4之间
                    vy:-5,  //y轴速度
                    color:colors[Math.floor(Math.random()*colors.length)] //随机取颜色
                }
                balls.push(aBall);
            }
        }
    }
}

//计算距离倒计时时间的间隔秒数
function getCurrentShowTimeSeconds(){
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);
    return ret >= 0 ? ret : 0;
}

function render(cxt){

    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);//刷新屏幕

    var hours = parseInt(curShowTimeSeconds / 3600); //小时数
    var minutes = parseInt((curShowTimeSeconds-hours*3600)/60); //分钟数
    var seconds = curShowTimeSeconds % 60; //秒数

    //console.log(hours+":"+minutes +":"+seconds);
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt); //绘制小时数字的十位数
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), cxt); //小时数字的个位数
    renderDigit(MARGIN_LEFT + 30*(RADIUS+1), MARGIN_TOP, 10, cxt);//绘制冒号，站位4个小球 所以总长为8(r+1);

    renderDigit(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10),cxt); //绘制分钟数字的十位数
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt); //分钟数字的个位数
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1), MARGIN_TOP, 10, cxt);//绘制冒号

    renderDigit(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10),cxt); //绘制秒位数字的十位数
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), cxt); //秒位数字的个位数

    for(var i=0;i<balls.length;i++){
        cxt.fillStyle = balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2*Math.PI, true);
        cxt.closePath();

        cxt.fill();
    }
}

//参数x:圆心横坐标，y:圆心纵坐标，num:数字索引,cxt:绘图环境。
function renderDigit(x,y,num,cxt){
    cxt.fillStyle = "rgb(0,102,153)"; //绘制小球的颜色

    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                cxt.beginPath();
                //绘制函数 参数：(圆心x轴坐标,y轴坐标，半径，起始位置，结束位置)
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI); 
                cxt.closePath();

                cxt.fill(); 
            }
        }
    }
}