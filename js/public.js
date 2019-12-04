$(function(){  
	$('#myModal').modal("show");
	$('#myModal').modal("show");
	$('.tip-link p a').click(function(){
		$('#myModal').modal('hide');
	})
	$(".a-box").eq(0).hover(function(){
		$(this).children('img').attr('src','images/menu-buy.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-buy--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".a-box").eq(1).hover(function(){
		$(this).children('img').attr('src','images/menu-realms.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-realms--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".a-box").eq(2).hover(function(){
		$(this).children('img').attr('src','images/menu-store.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-store--reversed.gif');
		$(this).children('p').css('color','white');
	})
	$(".a-box").eq(3).hover(function(){
		$(this).children('img').attr('src','images/menu-hamburger--mouse-enter.gif');
		$(this).children('p').css('color','green');
	},function(){
		$(this).children('img').attr('src','images/menu-hamburger--mouse-leave.gif');
		$(this).children('p').css('color','white');
	})
	$('.a-box').eq(3).click(function(){
		$('.menu').show();
		$('.menu').animate({'height':'400px'},500)
	})
	$('.close-menu').click(function(){
		$('.menu').hide();
		$('.menu').animate({'height':'0px'},1000)
	})
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>40){
			$('.nav').css({'position':'fixed','top':'0','height':'90px'});
			$('.menu').css({'top':'0'});
			$('.header .nav .container .title img').css({'width':'100%','height':'110px'});
		}
		if(top<=38){
			$('.nav').css({'position':'static','height':'100px'});
			$('.menu').css({'top':'35px'});
			$('.header .nav .container .title img').css({'width':'110%','height':'120px'});
			
		}
	})
	$('.subnav ul li').click(function(){
		$(this).css({'background-color':' #000000','color':'white'}).siblings().css({'background-color':'#F0F0F0','color':'black'});
	})
	$('.sub-banner').hover(function(){
		$(this).addClass('change-black');
		$(this).css({'width':'40%','height':'130px'});
		$(this).siblings().css("width","30%");	
	},function(){
		$(this).removeClass('change-black');
		$(this).css({'width':'33%','height':'120px'});
		$(this).siblings().css("width","33%");

	})
	$('.loadmore .btn').hover(function(){
		$(this).addClass('change-black');
		$(this).css({'width':'210px','height':'70px'});	

	},function(){
		$(this).removeClass('change-black');
		$(this).css({'width':'200px','height':'60px'});
	})
	$('.loadmore .btn').click(function(){
		var block7='<div class="row block3-1"><div>'
		var block8='<div class="row block1"><div>'
		var a1='<a href="index.html" class="a-img col-lg-6"></a>'
		var a2='<a href="index.html" class="a-img col-lg-6"></a>'
		var a3='<a href="index.html" class="a-img col-lg-3"></a>'
		var a4='<a href="index.html" class="a-img col-lg-6"></a>'
		var a5='<a href="index.html" class="a-img col-lg-3"></a>'
		var tips='<div class="tips"></div>'
		var tips_con='<span>INSIDER</span><h3>New on Realms: Diamond Defense and Islands Immense</h3><p>Smorgasbord? This is a julbord of Java Realms maps!</p>'
				
        var tips1=$(tips).html(tips_con);
        var tips2=$('<div class="tips"></div>').html(tips_con);
        var tips3=$('<div class="tips"></div>').html(tips_con);
        var tips4=$('<div class="tips"></div>').html(tips_con);
        var tips5=$('<div class="tips"></div>').html(tips_con);

        a1=$(a1).html(tips1);
        a2=$(a2).html(tips2);
        a3=$(a3).html(tips3);
        a4=$(a4).html(tips4);
        a5=$(a5).html(tips5);
        block7=$(block7).html(a1);
        block7=$(block7).append(a2);
        block8=$(block8).html(a3);
        block8=$(block8).append(a4);
        block8=$(block8).append(a5);
	    $('.content').append(block7);
	    $('.content').append(block8);										
	})
	$('.game-menu .game-menu-center a img').hover(function(){
		$(this).stop().animate({ 'width': '150px','height': '240px','border': '2px solid green'},500);

	},function(){
		$(this).stop().animate({ 'width': '140px','height': '220px','border-color': '#CCC'},500)
	})
	
	//商城轮播图js
	var i=1;
	function lunbo(i){
		var lunbo=$('.lunbo');
		if(i==1){
			var src=$('.lunbo a img').attr('src');
			$('.lunbo a img').attr('src','images/market/lunbo2.webp');
			$('.span-wrap span').eq(0).css('background-color','rgb(0,0,0,0.7)').siblings().css('background-color','rgba(255,255,255,0.8)');
			console.log(src)
		}
	    if(i==2){
			$('.lunbo a img').attr('src','images/market/lunbo3.webp');
			$('.span-wrap span').eq(1).css('background-color','rgb(0,0,0,0.7)').siblings().css('background-color','rgba(255,255,255,0.8)');
		}
	    if(i==3){
			$('.lunbo a img').attr('src','images/market/lunbo2.webp');
			$('.span-wrap span').eq(2).css('background-color','rgb(0,0,0,0.7)').siblings().css('background-color','rgba(255,255,255,0.8)');
			console.log(i)
		}
        
	}
	function trade(i){
		var lis=$('.trade-container ul li');
		if(i==1){
			lis.eq(0).children('img').attr('src','images/market/commdity1.webp')
			lis.eq(1).children('img').attr('src','images/market/commdity2-1.webp')
			lis.eq(2).children('img').attr('src','images/market/commdity3-1.webp')
			lis.eq(3).children('img').attr('src','images/market/commdity4-1.webp')
			lis.eq(5).children('img').attr('src','images/market/commdity6-1.webp')					
		}
		else if(i==2){
			lis.eq(0).children('img').attr('src','images/market/commdity1-1.webp')
			lis.eq(1).children('img').attr('src','images/market/commdity2-2.webp')
			lis.eq(2).children('img').attr('src','images/market/commdity3-2.webp')
			lis.eq(3).children('img').attr('src','images/market/commdity4-3.jpg')
			lis.eq(5).children('img').attr('src','images/market/commdity6-2.webp')
		}
		else if(i==3){
			lis.eq(0).children('img').attr('src','images/market/commdity1-2.webp')
			lis.eq(1).children('img').attr('src','images/market/commdity2-3.webp')
			lis.eq(2).children('img').attr('src','images/market/commdity3-3.webp')
			lis.eq(3).children('img').attr('src','images/market/commdity4-1.webp')
			lis.eq(5).children('img').attr('src','images/market/commdity6-3.webp')
		}
		else{
			lis.eq(0).children('img').attr('src','images/market/commdity1.webp')
			lis.eq(1).children('img').attr('src','images/market/commdity2-1.webp')
			lis.eq(2).children('img').attr('src','images/market/commdity3-1.webp')
			lis.eq(3).children('img').attr('src','images/market/commdity4-1.webp')
			lis.eq(5).children('img').attr('src','images/market/commdity6-1.webp')
		}
	}
	var timer;
	function startlunbo(){
		clearInterval(timer);
		timer=setInterval(function(){
	        i++;
	        if(i>3){
	        	i=1;
	        }
			lunbo(i);
			trade(i);
		},1000)
	}
	startlunbo();
	


})