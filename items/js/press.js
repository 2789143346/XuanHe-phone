$(function(){
	$.ajax({
		type: "get",
		url: "../data/news.json",
		async: true,
		success: function(data) {
			console.log(data)
			data.CooperativPartner.forEach(function(item,index){
				// console.log(item)
				$('<li class="list-uLi" index='+index+' data="true">'+
					'<div class="imgDiv">'+
						'<img src="'+item.src+'" /></div>'+
					'<div class="list-uLi-box">'+
						'<h2 class="h2">'+item.title+'</h2>'+
						'<span class="width-55"></span>'+
						'<div class="textBox">'+
							'<p class="text" title='+item.text+'>'+item.text+'</p>'+
						'</div>'+
						'<div class="floor-ul-btn" data-id='+item.id+'>'+
							'<a href="details.html" class="floor-xbox-btn" data-id="${item.id}">MORE<span class="carte-right"></span></a>'+
						'</div>'+
					'</div>'+
				'</li>').appendTo('.M-List')
				if(index%3==0){
					$(".list-uLi").eq(index).css('float','left');
				}
				if(index%3==1){
					$(".list-uLi").eq(index).css('margin','25px 5%');
				}
				if(index%3==2){
					$(".list-uLi").eq(index).css('float','right');
				}
			})
			$('.list-uLi').on({
				mouseenter: function () {
					var index=$(this).attr("index");
					var width=$('.h2').eq(index).width();
					$(".width-55").eq(index).css('width',width+5+'px');
				},
				mouseleave:function () {
					var index=$(this).attr("index");
					var width=$('.h2').eq(index).width();
					$(".width-55").eq(index).css('width',20+'px');
				}
			})
			$('.text').each(function(item){
				var oHeight = $(this).height()
				console.log(oHeight)
				if((oHeight/20)>3){
					$(this).addClass('texter')
				}
			})
			
		}
	})
})
	