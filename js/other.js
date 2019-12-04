$(function(){
	//网易官网入口js
	var timer;
	var i=0;
	var n=0;
	function topSlide(i){
		clearInterval(timer);
		timer=setInterval(function(){
		    if(i==-162){
               i=0;
               $('.topBar .topBar-rd ul').stop().animate({'margin-top':i+'px'},0)
		    }
		    else{
               $('.topBar .topBar-rd ul').stop().animate({'margin-top':i+'px'},500)
		    }           
            i-=54;
            n=i;
		},2000)		
	}
	topSlide(i);
	$('.topBar .topBar-rd ul li').hover(function(){
		clearInterval(timer);
	},function(){
		topSlide(n);
	})
	$('.topBar .topBar-menu').hover(function(){
		$('.topBar .topBar-menu .mega-menu').stop().animate({'height':'600px'},500);
		$('.topBar .topBar-menu .mega-menu').show();

	},function(){
		$('.topBar .topBar-menu .mega-menu').stop().animate({'height':'0px'},500);
		$('.topBar .topBar-menu .mega-menu').hide();
	})
	$('.topBar .topBar-right').hover(function(){
		$('.rd-menu').stop().animate({'height':'400px'},500);
		$('.rd-menu').show();

	},function(){
		$('.rd-menu').stop().animate({'height':'0px'},500);
		$('.rd-menu').hide();
	})
    
    function codegd(){
    	var top=$('.header .lt .down-way .nie-download .code-img .code-down .slide').css('margin-top');
    	if(top=='0px'){
    		$('.header .lt .down-way .nie-download .code-img .code-down .slide').stop().animate({'margin-top':'99px'},1500);
    		$('.header .lt .down-way .video-look .play').stop().animate({'width':'20px','height':'35px'},500);
    	}
    	if(top=='99px'){
    		$('.header .lt .down-way .nie-download .code-img .code-down .slide').stop().animate({'margin-top':'0px'},1500);
    		$('.header .lt .down-way .video-look .play').stop().animate({'width':'25px','height':'45px'},500);
    	}
    }
	setInterval(codegd,1000);

	//固定扫码提示框事件
	$('.download-left span').click(function(){
		$('.download-left').stop().animate({'left':'-250px'},500);
	})
	$('.download-right span').click(function(){
		$('.download-right').stop().animate({'right':'-200px'},500);
	})
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		var banner=$('.banner').offset().top;
		console.log(top+','+banner);
		if(top>=1100&&top<=1300){
			$('.download-left').stop().animate({'left':'20px'},500);
			$('.download-right').stop().animate({'right':'20px'},500);

		}
		if(top<=900){
			$('.download-left').stop().animate({'left':'-250px'},500);
			$('.download-right').stop().animate({'right':'-200px'},500);
		}
		
	})	/* Act on the event */
	


})