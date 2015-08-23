var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8; //时间像素小球的半径 

window.onload = function(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d"); //获取绘图的上下文环境

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    render(context);
}

function render(cxt){

    var hours = 12;
    var minutes = 34;
    var seconds = 56;

    renderDigit(0,0,parseInt(hours/10),cxt);
}

function renderDigit(x,y,num,cxt){
    cxt.fillStyle = "rgb(0,102,153)";

    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                cxt.beginPath();
                //绘制函数 参数：(圆心x轴坐标,y轴坐标，半径，起始位置，结束位置)
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math*Math.PI); 
                cxt.closePath();

                cxt.fill(); 
            }
        }
    }
}