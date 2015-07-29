;(function($){
    
    var LightBox = function(){
        var self = this;
        //创建遮罩层和弹出框
        this.popupMask = $('<div id="G-lightbox-mask">');
        this.popupWin = $('<div id="G-lightbox-popup">');

        //保存body
        this.bodyNode = $(document.body); 
        
        //渲染剩余的dom，并且插入到body
        this.renderDOM();
        this.picViewArea = this.popupWin.find("div.lightbox-pic-view");//图片预览区域
        this.popupPic = this.popupWin.find("img.lightbox-image");//图片
        this.picCaptionArea =  this.popupWin.find("div.lightbox-pic-caption");//图片描述区域
        this.nextBtn = this.popupWin.find("span.lightbox-next-btn");//下一张按钮
        this.prevBtn = this.popupWin.find("span.lightbox-prev-btn");//上一张按钮

        this.captionText = this.popupWin.find("p.lightbox-pic-desc");//图片描述
        this.currentIndex = this.popupWin.find("span.lightbox-of-index");//图片当前索引
        this.closeBtn = this.popupWin.find("span.lightbox-btn-close");//关闭按钮


        //准备开发时间委托，获取组数据
        this.groupName = null;
        this.groupData = [];    //定义一个数组，放置同一组数据
        /*var lightbox = $(".js-lightbox,[data-role=lightbox]");
        lightbox.click(function(){
            alert(1);  //这种添加监听的方式不利于后面出现新元素时的事件绑定
        })*/
        this.bodyNode.delegate(".js-lightbox,*[data-role=lightbox]","click",function(e){
            
            //阻止事件冒泡
            e.stopPropagation();
            //alert($(this).attr("data-group"));

            var currentGroupName = $(this).attr("data-group");

            //第一次点击获取同一组的数据，再次点击时，如果和上一个属于同一组数据，就不再重复获取
            if(currentGroupName != self.groupName){
                self.groupName = currentGroupName;
                //根据当前组别获取同一组数据
                self.getGroup();
            };
           //初始化弹出
            self.initPopup($(this));
        });
        
    };
    LightBox.prototype = {
        showMaskAndPoupup:function(sourceSrc,currentId){
            //console.log(sourceSrc);
            var self = this;

            this.popupPic.hide();
            this.picCaptionArea.hide();

            this.popupMask.fadeIn();
            //获取视口宽高
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            
            //设置图片区域宽度高度
            this.picViewArea.css({
                                 width:winWidth/2,
                                 height:winHeight/2
                                });
            this.popupWin.fadeIn();

            var viewHeight = winHeight/2+10;
            //设置弹出框位置
            this.popupWin.css({
                                width:winWidth/2+10,
                                height:winHeight/2+10,
                                marginLeft:-(winWidth/2+10)/2,
                                top:-viewHeight
                                }).animate({
                                    top:(winHeight-viewHeight)/2
                                    },function(){
                                        //
                                });
            //根据当前点击的元素id获取在当前组别里的索引
            //注册到当前类（LightBox）上去
            this.index = this.getIndexOf(currentId);
            //$(this).index();  不用jQuery自带index 的原因是：防止img标签被其他标签比如p隔开，获取不到正确的index，数组下并不是按img分类的。
            console.log(this.index);
            
        },
        getIndexOf:function(currentId){
            var index = 0;
            $(this.groupData).each(function(i){
                index++;
                if(this.id === currentId){
                    return false;
                }
            });

            return index;
        },
        initPopup:function(currentObj){
            var self = this,
                sourceSrc = currentObj.attr("data-source"),
                currentId = currentObj.attr("data-id");


                //显示遮罩层和弹出框
                this.showMaskAndPoupup(sourceSrc,currentId);
        },

        getGroup:function(){
            var self = this;

            //根据当前的组别名称获取页面中所有相同组别的对象
            var groupList = this.bodyNode.find("*[data-group="+this.groupName+"]");
            //alert(groupList.size());
            //清空数组数据
            self.groupData.length = 0;
            groupList.each(function(){
                self.groupData.push({
                    src:$(this).attr("data-source"),
                    id:$(this).attr("data-id"),
                    caption:$(this).attr("data-caption")
                });
            });

            console.log(self.groupData);
            

        },
        renderDOM:function(){
            var strDom = '<div class="lightbox-pic-view">'+
                            '<span class="lightbox-btn lightbox-prev-btn ">  </span>'+
                            '<img class="lightbox-image" src="images/2-2.jpg" width="100%" alt="">'+
                            '<span class="lightbox-btn lightbox-next-btn ">  </span>'+
                        '</div>'+ 
                        '<div class="lightbox-pic-caption">'+
                            '<div class="lightbox-caption-area">'+
                                '<p class="lightbox-pic-desc">图片标题</p>'+
                                '<span class="lightbox-of-index">当前索引：1 of 4</span>'+
                            '</div>'+
                            '<span class="lightbox-btn-close"></span>'+
                       '</div>';
       // 插入到this.popumWin  
       this.popupWin.html(strDom);
       //把遮罩层和弹出框插入到body
       this.bodyNode.append(this.popupMask, this.popupWin);
        }
    };
    window["LightBox"] = LightBox;
})(jQuery);