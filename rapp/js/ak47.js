$("document").ready(function() {            
	var posWas = 0;
 	var x = 0;

 

 	$(window).on('scroll resize', function(e) {
 		
 			var pos = $(window).scrollTop(); //position of the scrollbar
	 		console.log("pos : "+pos)
			var temppos= 0;

			if(pos > posWas){ //if the user is scrolling down...
				//do something
				
				temppos = pos * (-1) - 117;
				x++;

				if (pos < 101 && pos > 0) { /*do something */  console.log("animation 1");animation1(); } else
				if (pos < 201 && pos > 101) { /*do something */  console.log("animation 2");animation2(); } else
				if (pos < 301 && pos > 201) { /*do something */  console.log("animation 3");animation3(); } else
				if (pos < 401 && pos > 301) { /*do something */  console.log("animation 4");animation4(); } else
				if (pos < 501 && pos > 401) { /*do something */  slideCity1();   						 } else
				if (pos < 601 && pos > 501) { /*do something */  console.log("animation 7");animation6(); } else
				if (pos < 701 && pos > 601) { /*do something */  console.log("animation 8");animation7(); } else
				if (pos < 801 && pos > 701) { /*do something */  console.log("animation 9");animation8(); } else
				if (pos < 901 && pos > 801) { /*do something */  console.log("animation 10");animation9(); } else
				if (pos < 1001 && pos > 901) { /*do something */  console.log("animation 10");slideCity2(); } else 
				if (pos < 1101 && pos > 1001) { /*do something */  console.log("animation 11");animation10(); } else 
				if (pos < 1201 && pos > 1101) { /*do something */  console.log("animation 12");animation11(); } else 
				if (pos < 1301 && pos > 1201) { /*do something */  console.log("animation 13");animation12(); } else 
				if (pos < 1401 && pos > 1301) { /*do something */  console.log("animation 13");animation13(); } else 
				if (pos < 1501 && pos > 1401) { /*do something */  console.log("animation 14 city change ");slideCity3(); } else 
				if (pos < 1601 && pos > 1501) { /*do something */  console.log("animation 13");animation15(); } else 
				if (pos < 1701 && pos > 1601) { /*do something */  console.log("animation 13");animation16(); } else 
				if (pos < 1801 && pos > 1701) { /*do something */  console.log("animation 13");animation17(); } else 
				if (pos < 1901 && pos > 1801) { /*do something */  console.log("animation 13");animation18(); } else 
				if (pos < 2001 && pos > 1901) { /*do something */  console.log("animation 13");animation19(); } else 
				if (pos < 2101 && pos > 2001) { /*do something */  console.log("animation 13");animation20(); } else 
				if (pos < 2201 && pos > 2101) { /*do something */  console.log("animation 13");slideCity4(); } else 
				if (pos < 2301 && pos > 2201) { /*do something */  console.log("animation 13");animation21(); } else 
				if (pos < 2401 && pos > 2301) { /*do something */  console.log("animation 13");animation22(); } else 
				if (pos < 2501 && pos > 2401) { /*do something */  console.log("animation 13");animation23(); } else 
				{}	
			}
			if(pos < posWas){ //if the user is scrolling up...
				//do something
				x--;
				temppos = pos + 117;
				temppos = pos;
			}
				//
			posWas = pos; //save the current position for the next pass
 		

	})
	/*$(window).bind('scroll', function(){ 
		var pos = $(window).scrollTop(); 
		
		if(pos > posWas){
			
			x++;
		}
		if(pos < posWas){ 
			
			x--;
		}
		if(x < 5){
			$('body').css('position','absolute');
			$('body').css('top',pos);
		}else{
			$('body').css('position','relative');
		}
		posWas = pos; 

		console.log(posWas);
		console.log(x);
	});*/

	/* initially set left to hidden */
	init();
	function init(){
		$(window).scrollTop(0);
		//1275px 

		var allleft = (parseInt($(window).width()) - 1275) / 2;
		var hiddenRight = (parseInt($(window).width()));  
		$('.header').css({'left' : allleft + 'px'});
		$('#city1').css({'left' : allleft + 'px'});
		$('#city2').css({'left' : allleft + 'px'});
		$('#city3').css({'left' : allleft + 'px'});
		$('#city4').css({'left' : allleft + 'px'});
		$('#city5').css({'left' : allleft + 'px'});
		
		$(".person").css({top : '500px',left : '-100px' });	
		$(".text_1965").css({ left: '-800px' });
		$(".text_1969").css({ left: '-800px' });
		$(".text_1971").css({ left: '-800px' });
		$(".text_1977").css({ left: '-800px' });
		$(".division").css({ right : -(hiddenRight)+'px' });

		$('.text_1983').css({'left':'-200px'});
		$('.text_1983').css({'left':'-200px'});
		$('.text_1983').css({'left':'-200px'});
		$('.text_1983').css({'left':'-200px'});

		$('.highlightmap1').hide();
		$('.highlightmap2').hide();
		$('.highlightmap3').hide();
		$('.highlightmap4').hide();

		$('.rapp_collinsbubble').css('right',-hiddenRight);
		$('.shapes_bubble').css('right',-hiddenRight);

		$('.text_1993').css({'top':$(window).height()});
		$('.text_1994').css({'top':$(window).height()});
		

		$('.rapp_collinsww').css({'top': (parseInt($(window).height())) });
		$('.rapp_collinsww2').css({'right': -(parseInt($('.rapp_collinsww2').width())) });

		$('.text_1995').css({'top':$(window).height()});
		

	}
	function animation1(){
		var tempPersonLeft = (parseInt($(window).width()) / 2 - 33) + "px";
		$(".person").animate({"left":tempPersonLeft}, "slow");
		$(".text_1965").animate({"left":"20px"}, "slow");
		$(".division").animate({ "right" : "200px" },"slow");
	}
	function animation2(){
		$(".text_1965").animate({"left":"-800px"}, "slow");
		$(".division").animate({ "right" : -(parseInt($(window).width()))+'px' },"slow");
		$(".text_1969").animate({"left":"20px"}, "slow");
	}
	function animation3(){
		$(".text_1969").animate({"left":"-800px"}, "slow");
		$(".text_1971").animate({"left":"20px"}, "slow");
	}
	function animation4(){
		$(".text_1971").animate({"left":"-800px"}, "slow");
		$(".text_1977").animate({"left":"20px"}, "slow");
	}


	function slideCity1(){
		$('.header').animate({'top' : parseInt($('.header').css('top')) - 595},"slow");	
		$('#city1').animate({'top' : parseInt($('#city1').css('top')) - 595},"slow");	
		$('#city2').animate({'top': parseInt($('#city2').css('top')) - 595},"slow");	
		$('#city3').animate({'top': parseInt($('#city3').css('top')) - 595},"slow");	
		$('#city4').animate({'top': parseInt($('#city4').css('top')) - 595},"slow");	
		$('#city5').animate({'top': parseInt($('#city5').css('top')) - 595},"slow");	

		$('.text_1983').animate({'left':'150px'},'slow');

		$('.person').removeClass('initperson');
		$('.person').addClass('city1person');
	}

	function animation6(){
		// highlight regions on map
		$('.highlightmap1').fadeIn("slow", function() { });
		$('.highlightmap2').fadeIn("slow", function() { });
		$('.highlightmap3').fadeIn("slow", function() { });
		$('.highlightmap4').fadeIn("slow", function() { });
	}

	function animation7(){
		$('.text_1983').animate({'top':'250px'},'slow');
		$('.text_1986').animate({'left':'150px'},'slow');

		$('.rapp_collinsbubble').animate({'right': '130px'},'slow');
		$('.shapes_bubble').animate({'right': '260px'},'slow');

		$('.header').animate({'top' : "-=30"},"slow");	
		$('#city1').animate({'top' : "-=30"},"slow");	
		$('#city2').animate({'top': "-=30"},"slow");	
		$('#city3').animate({'top': "-=30"},"slow");	
		$('#city4').animate({'top': "-=30"},"slow");	
		$('#city5').animate({'top': "-=30"},"slow");	
	}

	function animation8(){
		$('.text_1983').animate({'top':'200px'},'slow');
		$('.text_1986').animate({'top':'350px'},'slow');
		$('.text_1988').animate({'left':'150px'},'slow');

		$('.rapp_collinsbubble').animate({'top': "-=50"},'slow');
		$('.shapes_bubble').animate({'top': "-=50"},'slow');

		$('.header').animate({'top' : "-=30"},"slow");	
		$('#city1').animate({'top' : "-=30"},"slow");	
		$('#city2').animate({'top': "-=30"},"slow");	
		$('#city3').animate({'top': "-=30"},"slow");	
		$('#city4').animate({'top': "-=30"},"slow");	
		$('#city5').animate({'top': "-=30"},"slow");	
	}

	function animation9(){
		$('.text_1983').animate({'top':'150px'},'slow');
		$('.text_1986').animate({'top':'300px'},'slow');
		$('.text_1988').animate({'top':'470px'},'slow');
		$('.text_1989').animate({'left':'150px'},'slow');	

		$('.rapp_collinsbubble').animate({'top': "-=50"},'slow');
		$('.shapes_bubble').animate({'top': "-=50"},'slow');

		$('.header').animate({'top' : "-=30"},"slow");	
		$('#city1').animate({'top' : "-=30"},"slow");	
		$('#city2').animate({'top': "-=30"},"slow");	
		$('#city3').animate({'top': "-=30"},"slow");	
		$('#city4').animate({'top': "-=30"},"slow");	
		$('#city5').animate({'top': "-=30"},"slow");	
	}

	function slideCity2(){
		$('.person').animate({'top' : "-=980"},"slow");
		$('.header').animate({'top' : "-=980"},"slow");	
		$('#city1').animate({'top' : "-=980"},"slow");	
		$('#city2').animate({'top': "-=980"},"slow");	
		$('#city3').animate({'top': "27px"},"slow");	
		$('#city4').animate({'top': "-=980"},"slow");	
		$('#city5').animate({'top': "-=980"},"slow");	

		$('.person').removeClass('city1person');
		$('.person').addClass('city2person');
		$('.person').animate({'top' : "+=780"},"slow");
	}

	function animation10(){
		$('.soda_bubbles').animate({'top': "-=30"},"slow");	
		$('.pepsi_bubble').animate({'top': "-=50"},"slow");	
		$('.pizzahut_bubble').animate({'top': "-=100"},"slow");	

		$('.text_1993').animate({'top':'215px'},'slow');
		$('.rapp_collinsww').animate({'top': '215px' },'slow');
				
	}

	function animation11(){
		$('.soda_bubbles').animate({'top': "-=30"},"slow");	
		$('.pepsi_bubble').animate({'top': "-=50"},"slow");	
		$('.pizzahut_bubble').animate({'top': "-=50"},"slow");	

		$('.text_1992').animate({'top': "-=50"},'slow');
		$('.text_1993').animate({'top': "-=50"},'slow');

		$('.text_1994').animate({'top':'300px'},'slow');		

		$('.rapp_collinsww').animate({'top':"-=50"},'slow');
		$('.rapp_collinsww2').animate({'right': '142px' },'slow');
		

		/// #TODO - do somehitng with this
		$('.text_1996').css({'display':'none'});
	}

	function animation12(){
		$('.person').animate({'top' : "-=200"},"slow");
		$('.header').animate({'top' : "-=200"},"slow");	
		$('#city1').animate({'top' : "-=200"},"slow");	
		$('#city2').animate({'top': "-=200"},"slow");	
		$('#city3').animate({'top': "-=200"},"slow");	
		$('#city4').animate({'top': "-=200"},"slow");	
		$('#city5').animate({'top': "-=200"},"slow");

		$('.soda_bubbles').animate({'top': "-=30"},"slow");	
		$('.pepsi_bubble').animate({'top': "-=50"},"slow");	
		$('.pizzahut_bubble').animate({'top': "-=50"},"slow");	
		
		$('.text_1995').animate({'top':'560px'},"slow");
		$('.text_1996').css({'top':$(window).height()});
		$('.globe').css({'display':'none'});
		$('.globe').css({'top':parseInt($(window).height()) + 505});
	}

	function animation13(){
		$('.text_1996').css({'display':'block'});
		$('.globe').css({'display':'block'});

		

		$('.person').animate({'top' : "+=150"},"slow");
		$('.header').animate({'top' : "-=150"},"slow");	
		$('#city1').animate({'top' : "-=150"},"slow");	
		$('#city2').animate({'top': "-=150"},"slow");	
		$('#city3').animate({'top': "-=150"},"slow");	
		$('#city4').animate({'top': "-=150"},"slow");	
		$('#city5').animate({'top': "-=150"},"slow");

		$('.soda_bubbles').animate({'top': "-=30"},"slow");	
		$('.pepsi_bubble').animate({'top': "-=50"},"slow");	
		$('.pizzahut_bubble').animate({'top': "-=50"},"slow");	

		$('.text_1996').animate({'top':'760px'});		
		$('.globe').animate({'top':'830px'},"slow");		
				
	}

	function slideCity3(){
		$('.city4_pattern').hide();

		$('.person').removeClass('city2person');
		$('.person').addClass('city3person');

		$('.header').animate({'top' : "-=900"},"slow");	
		$('#city1').animate({'top' : "-=900"},"slow");	
		$('#city2').animate({'top': "-=900"},"slow");	
		$('#city3').animate({'top': "-=900"},"slow");	
		$('#city4').animate({'top': "-=900"},"slow");	
		$('#city5').animate({'top': "-=1190"},"slow");	

		$('.person').animate({'top' : "+=350"},"slow");

		$('.text_2002').css({'left':parseInt($(window).width()) + 100});
		$('.text_2002').css({'display':'block'});

	}

	function animation15(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=100"},"slow");
		
		$('.text_2004').css({'left':parseInt($(window).width()) + 100});
		$('.text_2004').css({'display':'block'});


		$('.text_2000').animate({'left': '-500px'},"slow");
		$('.text_2002').animate({'left': '84px'},"slow");

		
	}

	function animation16(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=100"},"slow");
			
		$('.text_2005').css({'left':parseInt($(window).width()) + 100});
		$('.text_2005').css({'display':'block'});

		$('.text_2002').animate({'left': '-500px'},"slow");
		$('.text_2004').animate({'left': '84px'},"slow");


		
	}
	function animation17(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=100"},"slow");

		$('.text_2008').css({'left':parseInt($(window).width()) + 100});
		$('.text_2008').css({'display':'block'});

		$('.text_2004').animate({'left': '-500px'},"slow");
		$('.text_2005').animate({'left': '84px'},"slow");
		
	}
	function animation18(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=250"},"slow");

		$('.text_2009').css({'left':parseInt($(window).width()) + 100});
		$('.text_2009').css({'display':'block'});
		
		$('.text_2005').animate({'left': '-500px'},"slow");
		$('.text_2008').animate({'left': '84px'},"slow");

		$('.rapp_logo').css({'left':parseInt($('.city4_elevator').css('right')) + 56});
		$('.rapp_logo').css({'bottom': '473px'});
		$('.rapp_logo').fadeIn();


		
	}
	function animation19(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=400"},"slow");

		$('.text_2009_2').css({'left':parseInt($(window).width()) + 100});
		$('.text_2009_2').css({'display':'block'});

		$('.text_2008').animate({'left': '-500px'},"slow");
		$('.text_2009').animate({'left': '84px'},"slow");
		
	}
	function animation20(){
		$('.city4buildinglayer1').animate({'left' : "-=60"},"slow");
		$('.city4buildinglayer2').animate({'left' : "-=300"},"slow");

		$('.text_2009').animate({'left': '-500px'},"slow");
		$('.text_2009_2').animate({'left': '84px'},"slow");

		$('.city4_pattern').show();
		$('.millenials_boxes').css({'top':parseInt($(window).height()) + 350});
		$('.text_2012').css({'top':parseInt($(window).height())+ 350});
		
	}

	function slideCity4 () {


		$('.header').animate({'top' : "-=300"},"slow");	
		$('#city1').animate({'top' : "-=300"},"slow");	
		$('#city2').animate({'top': "-=300"},"slow");	
		$('#city3').animate({'top': "-=300"},"slow");	
		$('#city4').animate({'top': "-=300"},"slow");	
		$('#city5').animate({'top': "-=300"},"slow");	

		$('.interactive_boxes').hide();
		$('.text_2013').hide();
		$('.text_2015').hide();
		//$('.person').animate({'top' : "+=350"},"slow");

	}

	function animation21 () {
		$('.header').animate({'top' : "-=300"},"slow");	
		$('#city1').animate({'top' : "-=300"},"slow");	
		$('#city2').animate({'top': "-=300"},"slow");	
		$('#city3').animate({'top': "-=300"},"slow");	
		$('#city4').animate({'top': "-=300"},"slow");	
		$('#city5').animate({'top': "-=300"},"slow");	

		$('.millenials_boxes').animate({'top':'260px'},'slow');
		$('.text_2012').animate({'top':'260px'},'slow');

		$('.interactive_boxes').css({'top':parseInt($(window).height()) + 350});
		$('.text_2013').css({'top':parseInt($(window).height())+ 350});
		//$('.person').animate({'top' : "+=350"},"slow");
		//260px
	}

	function animation22 () {
		$('.header').animate({'top' : "-=300"},"slow");	
		$('#city1').animate({'top' : "-=300"},"slow");	
		$('#city2').animate({'top': "-=300"},"slow");	
		$('#city3').animate({'top': "-=300"},"slow");	
		$('#city4').animate({'top': "-=300"},"slow");	
		$('#city5').animate({'top': "-=300"},"slow");	

		$('.text_2011').animate({'top':'-=200'},'slow');
		$('.millenials_boxes').animate({'top':'-=500'},'slow');
		$('.text_2012').animate({'top':'-=200'},'slow');


		$('.interactive_boxes').show();
		$('.text_2013').show();
		$('.interactive_boxes').animate({'top':'400px'},'slow');
		$('.text_2013').animate({'top':'400px'},'slow');

		$('.text_2015').css({'top':parseInt($(window).height())+ 350});
		//$('.person').animate({'top' : "+=350"},"slow");
			//260px
	}
	
	function animation23 () {
		$('.header').animate({'top' : "-=100"},"slow");	
		$('#city1').animate({'top' : "-=100"},"slow");	
		$('#city2').animate({'top': "-=100"},"slow");	
		$('#city3').animate({'top': "-=100"},"slow");	
		$('#city4').animate({'top': "-=100"},"slow");	
		$('#city5').animate({'top': "-=100"},"slow");	

		$('.text_2011').animate({'top':'-=200'},'slow');
		$('.millenials_boxes').animate({'top':'-=500'},'slow');
		$('.text_2012').animate({'top':'-=200'},'slow');
		$('.interactive_boxes').animate({'top':'-=200'},'slow');
		$('.text_2013').animate({'top':'-=200'},'slow');

		$('.text_2015').show();

		$('.text_2015').animate({'top':'360px'});
		//$('.person').animate({'top' : "+=350"},"slow");
			//260px
	}

});     

