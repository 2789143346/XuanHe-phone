    window.onload=function(){
	var them=new Date();
	var count=0;
	var ul=$('.x-list');
	$('.x-rightlist-lists>li').eq(count).css({
		border:"1px solid #ff5400"
	});
	$('.x-rightlist-lists>li').eq(count).find('p').css({
		background: "#ff5400",
		transform: "scale(1.1)",
		transformOrigin: "center,center"
	})
	$(".x-list").on("touchstart", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }	
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
		// console.log(startX,startY)
	});
	$(".x-list").on("touchend", function(e) {			
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }			    
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
		if ( Y < 0 ) {
	       count++;
		   if(count>4){
		   	count=4
		   }
		   color(count)
		   
		   
		   ul.css({
		   	top:-100*count+"%"
		   })
	    }else if(Y>0){
			count--;
			if(count<0){
				count=0
			}
			color(count)
			
			
			ul.css({
				top:-100*count+"%"
			})
		}else{
			
		}
	});
	$(".x-three>ul>li").on("touchstart", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }	
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
		// console.log(startX,startY)
	});
	$(".x-three>ul>li").on("touchend", function(e) {			
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }			    
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
		if ( Y < 0 ) {
	       
	    }else if(Y>0){
			
		}else{
			$(this).css({
				width:'40%'
			}).siblings().css({
				width:"20%"
			})
			$(this).find('.x-three-bottom').addClass('x-top').removeClass('x-bottom').parent('li').siblings().find('.x-three-bottom').removeClass('x-top').addClass('x-bottom')
			$(this).find('.x-three-top img').addClass('x-scale').removeClass('x-scale1').parent().parent().siblings().find('img').addClass('x-scale1').removeClass('x-scale')
			$(this).find('.x-three-top').addClass('x-three-toptop').removeClass('x-three-toptop1').parent().siblings().find('.x-three-top').removeClass('x-three-toptop').addClass('x-three-toptop1')
		}
	});
	$(".x-three>ul>li").click(function(){
		$(this).css({
				width:'40%'
			}).siblings().css({
				width:"20%"
			})
			$(this).find('.x-three-bottom').addClass('x-top').removeClass('x-bottom').parent('li').siblings().find('.x-three-bottom').removeClass('x-top').addClass('x-bottom')
			$(this).find('.x-three-top img').addClass('x-scale').removeClass('x-scale1').parent().parent().siblings().find('img').addClass('x-scale1').removeClass('x-scale')
			$(this).find('.x-three-top').addClass('x-three-toptop').removeClass('x-three-toptop1').parent().siblings().find('.x-three-top').removeClass('x-three-toptop').addClass('x-three-toptop1')
		
	})
	$('.zc-btn').on('tap',function(){
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
	function color(num){
		$(".x-rightnums").html(num+1)
		$('.x-rightlist-lists>li').eq(num).css({
			border:'1px solid #ff5400',
			animation: 'shadow 1s'
		}).siblings().css({
			border:"",
			animation:''
		})
		$('.x-rightlist-lists>li').eq(num).find('p').css({
			background:"#ff5400",
			transform:"scale(1.1)",
		}).parent().siblings().find('p').css({
			background:"",
			transform:""
		})
		if(num>0){
			$('.x-box-lists').fadeIn()
		}else{
			$('.x-box-lists').fadeOut()
		}
		if(num==1){
			$('.x-tow-img').addClass('x-imgright')
			$('.x-tow-right img').addClass('x-imgleft')
			$('.x-tow-zbot').addClass('x-imgright1')
			$('.x-tow-right p span').addClass('x-txttop')
			$('.x-tow-right button').addClass('x-btnfadIn')
		}
		if(num==2){
			$('.x-three').addClass('x-three-trans')
			$('.x-three p').addClass('x-p-opt')
			
		}
		if(num==3){
			$('.x-four-di').addClass('animated fadeInDown delay')
			$('.x-four-leftjiao').addClass('animated fadeInUp delay')
			$('.x-four-left img').addClass('animated fadeInLeft delay')
			$('.x-four-right').addClass('animated fadeInRight delay')
			$('.x-four-left p span').addClass('animated fadeInUp delay-1s')
			$('.x-fourmb1').addClass('animated fadeInLeft delay-2s')
			$('.x-fourmb2').addClass('animated fadeInRight delay-2s')
			$('.x-fourmb3').addClass('animated fadeInUp delay-2s')
			$('.x-four-left button').addClass('animated fadeIn delay-2s')
			$('.x-four-right-mb').addClass('x-rightmb')
		}
		if(num==4){
			$('.x-five-left').addClass('animated fadeInLeft')
			$('.x-five>img').addClass('animated fadeIn')
			$('.x-banquan').addClass('animated fadeIn')
		}
	}
	$('.x-rightlist-lists>li').click(function(){
		var index=$(this).index()
		var rTop=-100*index+"%"
		$('.x-list').css({
			top:rTop
		})
		color(index)
		count=index
	})
	
	function wheelFn(e){
		console.log(1)
		var now=new Date()
		var e=e||window.event
		if(now-them>500){
		if(e.detail){
			if(e.detail>0){
				count++
			}else{
				count--
			}
		}else if(e.wheelDelta){
			if(e.wheelDelta>0){
				count--
			}else{
				count++
			}
		}
		if(count<0){
			count=0
		}
		if(count>4){
			count=4
		}
		color(count)
		
		
		ul.css({
			top:-100*count+"%"
		})
		them=new Date()	
	}
  }
    document.body.onmousewheel=wheelFn	
	document.body.addEventListener("DOMMouseScroll",wheelFn)
	
	
	$('.x-one-header a').hover(function(){
		$(this).addClass('x-ajamp')
	},function(){
		$(this).removeClass('x-ajamp')
	})
	$('.x-smallbiao a').hover(function(){
		$(this).addClass('x-ajamp')
	},function(){
		$(this).removeClass('x-ajamp')
	})
	$('.x-three-bottom').eq(0).addClass('x-top')
	$('.x-three-top').eq(0).addClass('x-three-toptop')
	$('.x-three-top').eq(0).find('img').addClass('x-scale')
	
	}
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

$(".one-a").on("touchstart", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }	
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
		// console.log(startX,startY)
	});
	$(".one-a").on("touchend", function(e) {			
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }			    
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    X = moveEndX - startX,
	    Y = moveEndY - startY;
		if ( Y < 0 ) {
	       
	    }else if(Y>0){
			
		}else{
			$(window).attr('location','./pages/about-xuan.html');
		}
	});
	$(".two-a").on("touchstart", function(e) {
		    // 判断默认行为是否可以被禁用
		    if (e.cancelable) {
		        // 判断默认行为是否已经被禁用
		        if (!e.defaultPrevented) {
		            e.preventDefault();
		        }
		    }	
		    startX = e.originalEvent.changedTouches[0].pageX,
		    startY = e.originalEvent.changedTouches[0].pageY;
			// console.log(startX,startY)
		});
		$(".two-a").on("touchend", function(e) {			
		    // 判断默认行为是否可以被禁用
		    if (e.cancelable) {
		        // 判断默认行为是否已经被禁用
		        if (!e.defaultPrevented) {
		            e.preventDefault();
		        }
		    }			    
		    moveEndX = e.originalEvent.changedTouches[0].pageX,
		    moveEndY = e.originalEvent.changedTouches[0].pageY,
		    X = moveEndX - startX,
		    Y = moveEndY - startY;
			if ( Y < 0 ) {
		       
		    }else if(Y>0){
				
			}else{
				$(window).attr('location','./pages/about-xuan.html');
			}
		});
		$(".three-a").on("touchstart", function(e) {
			    // 判断默认行为是否可以被禁用
			    if (e.cancelable) {
			        // 判断默认行为是否已经被禁用
			        if (!e.defaultPrevented) {
			            e.preventDefault();
			        }
			    }	
			    startX = e.originalEvent.changedTouches[0].pageX,
			    startY = e.originalEvent.changedTouches[0].pageY;
				// console.log(startX,startY)
			});
			$(".three-a").on("touchend", function(e) {			
			    // 判断默认行为是否可以被禁用
			    if (e.cancelable) {
			        // 判断默认行为是否已经被禁用
			        if (!e.defaultPrevented) {
			            e.preventDefault();
			        }
			    }			    
			    moveEndX = e.originalEvent.changedTouches[0].pageX,
			    moveEndY = e.originalEvent.changedTouches[0].pageY,
			    X = moveEndX - startX,
			    Y = moveEndY - startY;
				if ( Y < 0 ) {
			       
			    }else if(Y>0){
					
				}else{
					$(window).attr('location','./pages/product.html');
				}
			});
			$(".four-a").on("touchstart", function(e) {
				    // 判断默认行为是否可以被禁用
				    if (e.cancelable) {
				        // 判断默认行为是否已经被禁用
				        if (!e.defaultPrevented) {
				            e.preventDefault();
				        }
				    }	
				    startX = e.originalEvent.changedTouches[0].pageX,
				    startY = e.originalEvent.changedTouches[0].pageY;
					// console.log(startX,startY)
				});
				$(".four-a").on("touchend", function(e) {			
				    // 判断默认行为是否可以被禁用
				    if (e.cancelable) {
				        // 判断默认行为是否已经被禁用
				        if (!e.defaultPrevented) {
				            e.preventDefault();
				        }
				    }			    
				    moveEndX = e.originalEvent.changedTouches[0].pageX,
				    moveEndY = e.originalEvent.changedTouches[0].pageY,
				    X = moveEndX - startX,
				    Y = moveEndY - startY;
					if ( Y < 0 ) {
				       
				    }else if(Y>0){
						
					}else{
						$(window).attr('location','./pages/product.html');
					}
				});
				$(".five-a").on("touchstart", function(e) {
					    // 判断默认行为是否可以被禁用
					    if (e.cancelable) {
					        // 判断默认行为是否已经被禁用
					        if (!e.defaultPrevented) {
					            e.preventDefault();
					        }
					    }	
					    startX = e.originalEvent.changedTouches[0].pageX,
					    startY = e.originalEvent.changedTouches[0].pageY;
						// console.log(startX,startY)
					});
					$(".five-a").on("touchend", function(e) {			
					    // 判断默认行为是否可以被禁用
					    if (e.cancelable) {
					        // 判断默认行为是否已经被禁用
					        if (!e.defaultPrevented) {
					            e.preventDefault();
					        }
					    }			    
					    moveEndX = e.originalEvent.changedTouches[0].pageX,
					    moveEndY = e.originalEvent.changedTouches[0].pageY,
					    X = moveEndX - startX,
					    Y = moveEndY - startY;
						if ( Y < 0 ) {
					       
					    }else if(Y>0){
							
						}else{
							$(window).attr('location','./pages/product.html');
						}
					});
					$(".six-a").on("touchstart", function(e) {
						    // 判断默认行为是否可以被禁用
						    if (e.cancelable) {
						        // 判断默认行为是否已经被禁用
						        if (!e.defaultPrevented) {
						            e.preventDefault();
						        }
						    }	
						    startX = e.originalEvent.changedTouches[0].pageX,
						    startY = e.originalEvent.changedTouches[0].pageY;
							// console.log(startX,startY)
						});
						$("six-a").on("touchend", function(e) {			
						    // 判断默认行为是否可以被禁用
						    if (e.cancelable) {
						        // 判断默认行为是否已经被禁用
						        if (!e.defaultPrevented) {
						            e.preventDefault();
						        }
						    }			    
						    moveEndX = e.originalEvent.changedTouches[0].pageX,
						    moveEndY = e.originalEvent.changedTouches[0].pageY,
						    X = moveEndX - startX,
						    Y = moveEndY - startY;
							if ( Y < 0 ) {
						       
						    }else if(Y>0){
								
							}else{
								$(window).attr('location','./pages/product.html');
							}
						});
						$(".seven-a").on("touchstart", function(e) {
							    // 判断默认行为是否可以被禁用
							    if (e.cancelable) {
							        // 判断默认行为是否已经被禁用
							        if (!e.defaultPrevented) {
							            e.preventDefault();
							        }
							    }	
							    startX = e.originalEvent.changedTouches[0].pageX,
							    startY = e.originalEvent.changedTouches[0].pageY;
								// console.log(startX,startY)
							});
							$(".seven-a").on("touchend", function(e) {			
							    // 判断默认行为是否可以被禁用
							    if (e.cancelable) {
							        // 判断默认行为是否已经被禁用
							        if (!e.defaultPrevented) {
							            e.preventDefault();
							        }
							    }			    
							    moveEndX = e.originalEvent.changedTouches[0].pageX,
							    moveEndY = e.originalEvent.changedTouches[0].pageY,
							    X = moveEndX - startX,
							    Y = moveEndY - startY;
								if ( Y < 0 ) {
							       
							    }else if(Y>0){
									
								}else{
									$(window).attr('location','./pages/press.html');
								}
							});