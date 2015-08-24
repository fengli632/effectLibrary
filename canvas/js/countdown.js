var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8; //时间像素小球的半径 
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime =  new Date(2015,7,25,19,30,00);// 倒计时截止日期 注意:js的月份是从0开始的 即0-11表示1到12月
var curShowTimeSeconds = 0;
console.log(endTime);

window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d"); //获取绘图的上下文环境

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    curShowTimeSeconds = getCurrentShowTimeSeconds();
    render(context);
}
//计算距离倒计时时间的间隔秒数
function getCurrentShowTimeSeconds(){
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);
    console.log(ret);
    return ret >= 0 ? ret : 0;
}

function render(cxt){

    var hours = parseInt(curShowTimeSeconds / 3600); //小时数
    var minutes = parseInt((curShowTimeSeconds-hours*3600)/60); //分钟数
    var seconds = curShowTimeSeconds % 60; //秒数

    console.log(hours+":"+minutes +":"+seconds);
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt); //绘制小时数字的十位数
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), cxt); //小时数字的个位数
    renderDigit(MARGIN_LEFT + 30*(RADIUS+1), MARGIN_TOP, 10, cxt);//绘制冒号，站位4个小球 所以总长为8(r+1);

    renderDigit(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10),cxt); //绘制分钟数字的十位数
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt); //分钟数字的个位数
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1), MARGIN_TOP, 10, cxt);//绘制冒号

    renderDigit(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10),cxt); //绘制秒位数字的十位数
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), cxt); //秒位数字的个位数
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