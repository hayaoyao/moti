window.onload=function(){
    $('.glide').click(function () {
        $("html,body").animate({ scrollTop: $('.total').offset().top - 200 }, 700);
    }); 
	$('.online #seek').click(function(){
		console.log(1)
		$("body,html").animate({
			"scrollTop":0
		},1000)		
	})      
}
$(function(){
	$('.phnavbtn').click(function(){
		$('.moveMenu').css('left','0px');
	})
	$('.moveClose').click(function(){
		$('.moveMenu').css('left','-100%');
	})
	$('.wapClose>span').click(function(){
		$('.total,.generalize').removeClass('left');
		$(".wapMenu").removeClass('show');		
		$('.navIco').show();
	})	
	$('.close').click(function(){
		$(".wapMenu").addClass('show');
		$('.total,.generalize').addClass('left');				
	})	
	$('.more').click(function(){
		$('.reveal').show();
		$(this).hide();
	})
	$('.headline h5').mouseenter(function(){		
		$(this).addClass('active').siblings().removeClass('active');
		$('.newVessel:eq('+$(this).index()+')').fadeIn().siblings().hide().stop();
	})	
})
function show(){
	$(window).on('scroll',function(){		
		var scrollTop=$(window).scrollTop();
        var scrollHeight = $(window).height();
        var htmlHeihgt = $("html").height();	
		if($(window).width()>200){
			var scroll=$('.total,.introduce').offset().top;
            if (scrollTop > scroll) {
                $(".navIco a").addClass('cur');
            } else {
                $(".navIco a").removeClass('cur');
            }  
		}	
        if ($(window).width() > 700) {
			if(scrollTop>0){
				$('.online').css('right','0')
			}else{
				$('.online').css('right','-100%')
			}            
            if (scrollTop > 100) {
                if (scrollTop + scrollHeight < htmlHeihgt - 160 && scrollTop > scroll) {

                    $('.footer').addClass('footerFix');

                } else {
                    $('.footer').removeClass('footerFix');
                }
            }
            else {
                $('.footer').removeClass('footerFix');
            }	
        }
	})
}
show()
$(window).resize(function () {
    show()
});