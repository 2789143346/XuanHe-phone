$(function(){
	$('.xx-smallbiao a').hover(function(){
			$(this).addClass('xx-ajamp')
		},function(){
			$(this).removeClass('xx-ajamp')
		})
	$('.top').click(function(){
		$('body,html').animate({
			scrollTop:0
		})
	})
	$(".list").click(function(){
		if($(this).hasClass('list1')){
			$(this).removeClass('list1').addClass('list2')
		}else{
			$(this).removeClass('list2').addClass('list1')
		}
		if($('.zc-menu').hasClass('zc-menu1')){
			$('.zc-menu').removeClass('zc-menu1')
		}else{
			$('.zc-menu').addClass('zc-menu1')
		}
	})
})

