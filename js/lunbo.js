/*
* @Author: admin
* @Date:   2019-12-03 22:44:21
* @Last Modified by:   admin
* @Last Modified time: 2019-12-04 04:02:05
*/
$(function(){
	var timer;
	$('.swiper .lunbo-item').eq(0).addClass('lunbo-left');
	$('.swiper .lunbo-item').eq(1).addClass('lunbo-center');
	$('.swiper .lunbo-item').eq(2).addClass('lunbo-right');
    var i=0;
	function autoLunbo(){
     	$('.swiper .lunbo-item').eq(0).removeClass('lunbo-left');
     	$('.swiper .lunbo-item').eq(0).addClass('swiper-img');
     	$('.swiper').append($('.swiper .lunbo-item').eq(0));	     	
     	$('.swiper .lunbo-item').eq(0).removeClass('lunbo-center');
     	$('.swiper .lunbo-item').eq(0).addClass('lunbo-left');
     	$('.swiper .lunbo-item').eq(1).removeClass('lunbo-right');
     	$('.swiper .lunbo-item').eq(1).addClass('lunbo-center');
     	$('.swiper .lunbo-item').eq(2).removeClass('swiper-img');
     	$('.swiper .lunbo-item').eq(2).addClass('lunbo-right');
	}

	function rightLunbo(){
        $('.swiper .lunbo-item').eq(0).removeClass('lunbo-left');
     	$('.swiper .lunbo-item').eq(1).removeClass('lunbo-center');
     	$('.swiper .lunbo-item').eq(2).removeClass('lunbo-right');
     	$('.swiper .lunbo-item').eq(2).addClass('swiper-img');
     	$('.swiper').prepend($('.swiper .lunbo-item').eq(5));	     	
     	$('.swiper .lunbo-item').eq(0).removeClass('swiper-img');
     	$('.swiper .lunbo-item').eq(0).addClass('lunbo-left');
     	$('.swiper .lunbo-item').eq(1).addClass('lunbo-center');
     	$('.swiper .lunbo-item').eq(2).addClass('lunbo-right');
     	i-=1;
     	lunboSpan(i);
	}
    function lunboSpan(i){
        $('.circle span').eq(i).css({'border':'2px solid #BBFFBB','background-color':'#00DB00','width':'15px','height':'15px'}).siblings().css({'border':'none','background-color':' #CCC','width':'12px','height':'12px'})
    }

	function looplb(){
	     clearInterval(timer);
	     timer=setInterval(function(){
	     	i++;
	     	if(i>5){
	     		i=0;
	     		lunboSpan(i);
	     		autoLunbo();
	     	}
            else{
               autoLunbo();
	     	   lunboSpan(i);

            }
	     },4000);
	}
	$('.circle span').eq(0).css({'border':'2px solid #BBFFBB','background-color':'#00DB00','width':'15px','height':'15px'})
    looplb();
    $('.slide-left').click(function(){
    	i++;
    	if(i>5){
    		i=0;
    	}
    	autoLunbo();
    	lunboSpan(i);
    });
    $('.slide-right').click(rightLunbo);

})
