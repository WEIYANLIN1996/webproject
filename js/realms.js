$(function(){
	var subnavtop=$('.subnav').offset().top;
	var newstuff=$('.newstuff').offset().top;
    var media=$('.media').offset().top;
    var youtube=$('.youtube').offset().top;
    var create=$('.create').offset().top;
    var help=$('.help').offset().top;
    var reply=$('.reply').offset().top;
    var footer=$('.footer').offset().top;
    console.log(newstuff)
    $(".nav-ul li").eq(1).hover(function(){
		$(this).children('img').attr('src','images/menu-buy.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-buy--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".nav-ul li").eq(2).hover(function(){
		$(this).children('img').attr('src','images/menu-realms.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-realms--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".nav-ul li").eq(3).hover(function(){
		$(this).children('img').attr('src','images/menu-store.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-store--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".nav-ul li").eq(4).hover(function(){
		$(this).children('img').attr('src','images/menu-support--reversed.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-support.gif');
		$(this).children('p').css('color','white');
	})
	$(window).scroll(function(){
		var top_h=$(window).scrollTop();
		if(top_h>subnavtop){
			$('.subnav').css({'position':'fixed','top':'90px','z-index':'500'});			
		}
		if(top_h<subnavtop){
			$('.subnav').css({'position':'static'});			
		}
		if(top_h>40){
			$('.nav').css({'position':'fixed','top':'0','height':'90px'});
			$('.menu').css({'top':'0'});
			$('.header .nav .container .title img').css({'width':'100%','height':'110px'});
			$('.game-menu').css({'top':'50px'});
		}
		if(top_h<38){
			$('.nav').css({'position':'static','height':'100px'});
			$('.menu').css({'top':'35px'});
			$('.header .nav .container .title img').css({'width':'110%','height':'120px'});
			$('.game-menu').css({'top':'85px'});
		}
		if(top_h>=newstuff&&top_h<media){
			$('.subnav ul li').eq(0).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});			
		}
		if(top_h>=media&&top_h<youtube){
			$('.subnav ul li').eq(1).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});		
		}
		if(top_h>=youtube&&top_h<create){
			$('.subnav ul li').eq(2).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});			
		}
		if(top_h>=create&&top_h<help){
			$('.subnav ul li').eq(3).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});			
		}
		if(top_h>=help&&top_h<reply){
			$('.subnav ul li').eq(4).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});				
		}
		if(top_h>=reply&&top_h<footer){
			$('.subnav ul li').eq(5).css({'background-color':'black','color':'white'}).siblings().css({'background-color':'','color':'black'});			
		}
	})
	$('.nav .container .nav-ul  li:nth-child(2)').hover(function() {
		$('.game-menu').show();
		$('.game-menu').stop().animate({'height':'400px'},200);
		$('.nav .container .nav-ul .span').css({'transform':'rotate(-90deg)'})
		/* Act on the event */
	},function() {
		console.log(isOngm("#gmenu"))
		if(!isOngm("#gmenu")){
		    $('.game-menu').stop().animate({'height':'0px'},200);
		    $('.game-menu').hide();
		    $('.nav .container .nav-ul .span').css({'transform':'rotate(90deg)'});
		}
		
	})
	$('.game-menu').hover(function(){
		$('.nav .container .nav-ul .span').css({'transform':'rotate(-90deg)'})
	},function(){
		console.log(isOngm("#game"))
		if(!isOngm('#game')){
		    $('.game-menu').stop().animate({'height':'0px'},500);
		    $('.game-menu').hide();
		    $('.nav .container .nav-ul .span').css({'transform':'rotate(90deg)'})
		}				
	})
	var x;
	var y;
	$('body').mousemove(function(e) {
        e = e || window.event;
        x = e.pageX || e.clientX + document.body.scroolLeft;
        y = e.pageY || e.clientY + document.body.scrollTop;
    });
	function isOngm(id,e)
    {
    	
	    	
		var div = $(id);
		var y1 = div.offset().top;  //div上面两个的点的y值
		var y2 = y1 + div.height();//div下面两个点的y值
		var x1 = div.offset().left;  //div左边两个的点的x值
		var x2 = x1 + div.width();  //div右边两个点的x的值
		 
		if( x < x1 || x > x2 || y < y1 || y > y2){
			console.log('鼠标不在该DIV中');
			return false;
		}else{
			console.log('鼠标在该DIV中');
			return true;
		};
    }
    $(".nav-ul li").eq(1).hover(function(){
		$(this).find('img').attr('src','images/menu-buy.gif');
		$(this).children('a').css('color','green');
	},function(){
		$(this).find('img').attr('src','images/menu-buy--reversed.gif');
		$(this).children('a').css('color','white');
	})
	$(".nav-ul li").eq(2).hover(function(){
		$(this).find('img').attr('src','images/menu-realms.gif');
		$(this).children('a').css('color','green');
	},function(){
		$(this).find('img').attr('src','images/menu-realms--reversed.gif');
		$(this).children('a').css('color','white');
	})
	$(".nav-ul li").eq(3).hover(function(){
		$(this).find('img').attr('src','images/menu-store.gif');
		$(this).children('a').css('color','green');
	},function(){
		$(this).find('img').attr('src','images/menu-store--reversed.gif');
		$(this).children('a').css('color','white');
	})
	$(".nav-ul li").eq(4).hover(function(){
		$(this).find('img').attr('src','images/menu-support.gif');
		$(this).children('a').css('color','green');
	},function(){
		$(this).find('img').attr('src','images/menu-support--reversed.gif');
		$(this).children('a').css('color','white');
	})

    $('.liveshow .opacity span').click(function(){
    	$('.liveshow .opacity').hide();
    	var video=document.getElementById('Yt-video');
    	video.play();
    })


})

