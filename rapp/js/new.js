var headerHeight = 117;
var currentPlace = 1;
var posWas= 0;
var x = 0;
var animationOnDisplacement = 300;
$("document").ready(function() {

	init();
	beforeCity1Adjustments();

	$( window ).resize(function() {
	  init();
	});


	$(window).on('scroll resize', function(e) {
 			var pos = $(window).scrollTop(); //position of the scrollbar
	 		var temppos= 0;
	 		
	 		
				if(pos > posWas){ //if the user is scrolling down...
					if(pos > ( animationOnDisplacement * currentPlace)){
						console.log(currentPlace);
						currentPlace = currentPlace + 1;

						x++;
						if (currentPlace === 2) { animation1(true); } else
						if (currentPlace === 3) { animation2(true); } else
						if (currentPlace === 4) { animation3(true); } else
						if (currentPlace === 5) { animation4(true); } else

						if (currentPlace === 6) { animation5(true); } else
						if (currentPlace === 7) { animation7(true); } else
						if (currentPlace === 8) { animation8(true); } else
						if (currentPlace === 9) { animation9(true); } else

						if (currentPlace === 10) { animation10(true); } else
						if (currentPlace === 11) { animation11(true); } else
						if (currentPlace === 12) { animation12(true); } else
						if (currentPlace === 13) { animation13(true); } else
						if (currentPlace === 14) { animation14(true); } else
						if (currentPlace === 15) { animation15(true); } else						

						if (currentPlace === 16) { animation16(true); } else	
						if (currentPlace === 17) { animation17(true); } else	
						if (currentPlace === 18) { animation18(true); } else	
						if (currentPlace === 19) { animation19(true); } else	
						if (currentPlace === 20) { animation20(true); } else	
						if (currentPlace === 21) { animation21(true); } else	
						if (currentPlace === 22) { animation22(true); } else	

						if (currentPlace === 23) { animation23(true); } else	
						if (currentPlace === 24) { animation24(true); } else	
						if (currentPlace === 25) { animation25(true); } else																		
						if (currentPlace === 26) { /*animation26(true);*/ } else																		
						{}	

					}
				}
				if(pos < posWas){ //if the user is scrolling up...
					if(pos < ( animationOnDisplacement * currentPlace)){
						console.log("-"+currentPlace);
						x--;
						if (currentPlace === 2) { animation1r(true); } else
						if (currentPlace === 3) { animation2r(true); } else
						if (currentPlace === 4) { animation3r(true); } else
						if (currentPlace === 5) { animation4r(true); } else

						if (currentPlace === 6) { animation5r(true); } else						
						if (currentPlace === 7) { animation7r(true); } else
						if (currentPlace === 8) { animation8r(true); } else
						if (currentPlace === 9) { animation9r(true); } else

						if (currentPlace === 10) { animation10r(true); } else
						if (currentPlace === 11) { animation11r(true); } else
						if (currentPlace === 12) { animation12r(true); } else
						if (currentPlace === 13) { animation13r(true); } else
						if (currentPlace === 14) { animation14r(true); } else
						if (currentPlace === 15) { animation15r(true); } else							

						if (currentPlace === 16) { animation16r(true); } else
						if (currentPlace === 17) { animation17r(true); } else	
						if (currentPlace === 18) { animation18r(true); } else	
						if (currentPlace === 19) { animation19r(true); } else	
						if (currentPlace === 20) { animation20r(true); } else	
						if (currentPlace === 21) { animation21r(true); } else	
						if (currentPlace === 22) { animation22r(true); } else	

						if (currentPlace === 23) { animation23r(true); } else	
						if (currentPlace === 24) { animation24r(true); } else	
						if (currentPlace === 25) { animation25r(true); } else	
						if (currentPlace === 26) { animation26r(true); } else																																			
						{}

						currentPlace = currentPlace - 1;
					}
				}
			posWas = pos; //save the current position for the next pass
	});

});

function animation1(flag){
	$('.text_1965').animate({'left': '150px' },'slow');
	$('.division').animate({'right': '17%' },'slow');
}
function animation1r(flag){
	$('.text_1965').animate({'left': 0 - $('.text_1965').width() },'slow');
	$('.division').animate({'right': 0 - $('.division').width() },'slow');
}

function animation2(flag){
	if(flag){animation1r(false);}
	$('.text_1969').animate({'left': '150px' },'slow');
}
function animation2r(flag){
	$('.text_1969').animate({'left': 0 - $('.text_1965').width() },'slow');
	if(flag){animation1(false);}
}

function animation3(flag){
	if(flag){animation2r(false);}
	$('.text_1971').animate({'left': '150px' },'slow');
}
function animation3r(flag){
	$('.text_1971').animate({'left': 0 - $('.text_1965').width() },'slow');
	if(flag){animation2(false);}
}

function animation4(flag){
	if(flag){animation3r(false);}
	$('.text_1977').animate({'left': '150px' },'slow');
	$('.division2').animate({'right': '17%' },'slow');
}
function animation4r(flag){
	$('.division2').animate({'right': 0 - $('.division2').width() },'slow');
	$('.text_1977').animate({'left': 0 - $('.text_1965').width() },'slow');
	if(flag){animation3(false);}
}

/********   city 2     ********/

function animation5(flag){
	if(flag){
		beforeCity2Adjustments();	
		animation6(true);
	}
}
function animation5r(flag){
	if(flag){
		animation6r(true);
		beforeCity2AdjustmentsRev();	
	}
}

function animation6(flag){
	$('.text_1983').animate({'left': '150px', 'top' : '200px'},
    {
	    easing: 'swing',
	    duration: 1000,
	    complete: function(){
	    	$('.city2-high-layer').fadeIn('slow');
	    }
    });
	
}
function animation6_1(flag){
	$('.text_1983').animate({'top' : '-=100' },'slow');
}

function animation6r(flag){
	$('.city2-high-layer').fadeOut('slow');
	$('.text_1983').animate({'left': 0 - $('.text_1983').width()});
}
function animation6r_1(flag){
	$('.text_1983').animate({'top' : '+=100'},'slow');
}

function animation7(flag){
	animation6_1();
	$('.rapp_collinsbubble').animate({'left': '75%'},'slow');
	$('.shapes_bubble').animate({'left': '55%'},'slow');
	$('.text_1986').animate({'left': '150px','top' : '250px'},'slow');
}
function animation7_1(flag){
	animation6_1();

	$('.text_1986').animate({'top' : '-=100px'},'slow');
}

function animation7r(flag){
	animation6r_1();
	$('.rapp_collinsbubble').animate({'left': $(window).width() + $('.rapp_collinsbubble').width()},'slow')
	$('.shapes_bubble').animate({'left': $(window).width() + $('.shapes_bubble').width()},'slow')
	$('.text_1986').animate({'left': 0 - $('.text_1986').width()},'slow');
}
function animation7r_1(flag){
	animation6r_1();
	$('.text_1986').animate({'top' : '+=100px'},'slow');
}

function animation8(flag){
	animation7_1();
	$('.rapp_collinsbubble').animate({'top': '-=50'},'slow');
	$('.shapes_bubble').animate({'top': '-=50'},'slow');
	$('.text_1988').animate({'left': '150px','top' : '320px'},'slow');
}
function animation8_1(flag){
	animation7_1();
	$('.text_1988').animate({'top' : '-=100px'},'slow');
}

function animation8r(flag){
	animation7r_1();
	$('.rapp_collinsbubble').animate({'top': '+=50'},'slow');
	$('.shapes_bubble').animate({'top': '+=50'},'slow');
	$('.text_1988').animate({'left': 0 - $('.text_1988').width()});
}
function animation8r_1(flag){
	animation7r_1();
	$('.text_1988').animate({'top' : '+=100px'},'slow');
}


function animation9(flag){
	animation8_1();
	$('.rapp_collinsbubble').animate({'top': '-=50'},'slow');
	$('.shapes_bubble').animate({'top': '-=50'},'slow');
	$('.text_1989').animate({'left': '150px','top' : '350px'},'slow');
}
function animation9_1(flag){
	animation8_1();
	$('.text_1989').animate({'top' : '-=100px'},'slow');
}

function animation9r(flag){
	animation8r_1();
	$('.rapp_collinsbubble').animate({'top': '+=50'},'slow');
	$('.shapes_bubble').animate({'top': '+=50'},'slow');
	$('.text_1989').animate({'left': 0 - $('.text_1989').width()});
}
function animation9r_1(flag){
	animation8r_1();
	$('.text_1989').animate({'top' : '+=100px'},'slow');
}

/**********  city 3  **********/ 

function animation10(flag){
	if(flag){
		beforeCity3Adjustments();
		animation11(true);
	}
}
function animation10r(flag){
	if(flag){
		beforeCity3AdjustmentsRev();
		animation11r(true);
	}
}


/*********************************** ################################# ***************************************/
function animation11(flag){
	$('.text_1992').animate({'top' : '100px'},'slow');
	$('.pepsi_bubble').animate({'top': '-=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '-=50'},'slow');
}
function animation11_1(flag){
	$('.text_1992').animate({'top' : '-=100' },'slow');
}

function animation11r(flag){
	$('.pepsi_bubble').animate({'top': '+=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '+=50'},'slow');
	$('.text_1992').animate({'top': $(window).height() + $('.text_1992').height()});
}
function animation11r_1(flag){
	$('.text_1992').animate({'top' : '+=100'},'slow');
}

function animation12(flag){
	animation11_1();
	$('.pepsi_bubble').animate({'top': '-=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '-=50'},'slow');
	$('.text_1993').animate({'top' : '150px'},'slow');
}
function animation12_1(flag){
	animation11_1();
	$('.text_1993').animate({'top' : '-=100px'},'slow');
}

function animation12r(flag){
	animation11r_1();
	$('.pepsi_bubble').animate({'top': '+=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '+=50'},'slow');
	$('.text_1993').animate({'top': $(window).height() + $('.text_1993').height()});
}
function animation12r_1(flag){
	animation11r_1();
	$('.text_1993').animate({'top' : '+=100px'},'slow');
}

function animation13(flag){
	animation12_1();
	$('.pepsi_bubble').animate({'top': '-=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '-=50'},'slow');
	$('.text_1994').animate({'top' : '220px'},'slow');
}
function animation13_1(flag){
	animation12_1();
	$('.text_1994').animate({'top' : '-=100px'},'slow');
}

function animation13r(flag){
	animation12r_1();
	$('.pepsi_bubble').animate({'top': '+=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '+=50'},'slow');
	$('.text_1994').animate({'top': $(window).height() + $('.text_1994').height()});
}
function animation13r_1(flag){
	animation12r_1();
	$('.text_1994').animate({'top' : '+=100px'},'slow');
}


function animation14(flag){
	animation13_1();
	$('.pepsi_bubble').animate({'top': '-=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '-=50'},'slow');
	$('.text_1995').animate({'top' : '350px'},'slow');
}
function animation14_1(flag){
	animation13_1();
	$('.text_1995').animate({'top' : '-=100px'},'slow');
}

function animation14r(flag){
	animation13r_1();
	$('.pepsi_bubble').animate({'top': '+=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '+=50'},'slow');
	$('.text_1995').animate({'top': $(window).height() + $('.text_1995').height()});
}
function animation14r_1(flag){
	animation13r_1();
	$('.text_1995').animate({'top' : '+=100px'},'slow');
}

function animation15(flag){
	animation14_1();
	$('.pepsi_bubble').animate({'top': '-=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '-=50'},'slow');
	$('.text_1996').animate({'top' : '400px'},'slow');
	$('.globe').animate({'top':'-=205'},'slow');
}
function animation15_1(flag){
	animation14_1();
	$('.text_1996').animate({'top' : '-=100px'},'slow');
}

function animation15r(flag){
	$('.globe').animate({'top':'+=205'},'slow');
	animation14r_1();
	$('.pepsi_bubble').animate({'top': '+=50'},'slow');
	$('.pizzahut_bubble').animate({'top': '+=50'},'slow');
	$('.text_1996').animate({'top': $(window).height() + $('.text_1996').height()});
}
function animation15r_1(flag){
	animation14r_1();
	$('.text_1996').animate({'top' : '+=100px'},'slow');
}
/*********************************** ############### city 5 ################## ***************************************/
function animation16(flag){
	if(flag){
		beforeCity4Adjustments();
		animation11(true);
	}
}
function animation16r(flag){
	if(flag){
		beforeCity4AdjustmentsRev();
		animation11r(true);
	}
}

function animation17(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');
	$('.text_2000').animate({'left': 0 - $('.text_2000').width()},'slow');
	$('.text_2002').animate({'left': '84px'},'slow');
}
function animation17r(flag){
	$('.text_2002').animate({'left': $(window).width()},'slow');
	$('.text_2000').animate({'left': '84px'},'slow');
	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');
}

function animation18(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');

	$('.text_2002').animate({'left': 0 - $('.text_2002').width()},'slow');
	$('.text_2004').animate({'left': '84px'},'slow');

}
function animation18r(flag){
	$('.text_2004').animate({'left': $(window).width()},'slow');
	$('.text_2002').animate({'left': '84px'},'slow');

	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');

}

function animation19(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');
	$('.text_2004').animate({'left': 0 - $('.text_2004').width()},'slow');
	$('.text_2005').animate({'left': '84px'},'slow');

}
function animation19r(flag){
	$('.text_2005').animate({'left': $(window).width()},'slow');
	$('.text_2004').animate({'left': '84px'},'slow');
	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');
}

function animation20(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');
	$('.text_2005').animate({'left': 0 - $('.text_2005').width()},'slow');
	$('.text_2008').animate({'left': '84px'},'slow');

}
function animation20r(flag){
	$('.text_2008').animate({'left': $(window).width()},'slow');
	$('.text_2005').animate({'left': '84px'},'slow');
	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');
}

function animation21(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');
	$('.text_2008').animate({'left': 0 - $('.text_2008').width()},'slow');
	$('.text_2009').animate({'left': '84px'},'slow');
}
function animation21r(flag){
	$('.text_2009').animate({'left': $(window).width()},'slow');
	$('.text_2008').animate({'left': '84px'},'slow');
	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');
}


function animation22(flag){
	$('.city4buildinglayer2').animate({'left' : '-=300px'},'slow');
	$('.text_2009').animate({'left': 0 - $('.text_2009').width()},'slow');
	$('.text_2009_2').animate({'left': '84px'},'slow');
}
function animation22r(flag){
	$('.text_2009_2').animate({'left': $(window).width()},'slow');
	$('.text_2009').animate({'left': '84px'},'slow');
	$('.city4buildinglayer2').animate({'left' : '+=300px'},'slow');
}


/*********   city 5 ********************/

function animation23(flag){
	if(flag){
		beforeCity5Adjustments();
		animation11(true);		
	}
}
function animation23r(flag){
	if(flag){
		beforeCity5AdjustmentsRev();
		animation11r(true);
	}
}


function animation24(flag){
	$('.text_2011').animate({'top': '-=30'},'slow');
	$('.text_2012').animate({'top': '200px'},'slow');
	$('.millenials_boxes').show();
	$('.millenials_boxes').animate({'top' : '200px'},'slow');
}
function animation24r(flag){
	$('.text_2011').animate({'top': '+=30'},'slow');
	$('.text_2012').animate({'top': $(window).height()},'slow');	
	$('.millenials_boxes').animate({'top' : $(window).height()},'slow');
}

function animation25(flag){
	$('.text_2012').animate({'top': '-=30'},'slow');
	$('.text_2013').animate({'top': '460px'},'slow');	
	$('.text_2015').animate({'top': '670px'},'slow');	
	$('.interactive_boxes').show();
	$('#viewport').css({'top':'-100px'});
	$('#city5').animate({'top':'-100px'},'slow');
	$('.millenials_boxes').animate({'top' : '-100px'},'slow');
	$('.interactive_boxes').animate({'top' : '460px'},'slow');
}
function animation25r(flag){
	$('.text_2012').animate({'top': '+=30'},'slow');
	$('.text_2013').animate({'top': $(window).height()},'slow');
	$('.text_2015').animate({'top': $(window).height()},'slow');
	$('#viewport').css({'top':'0'},'slow');
	$('#city5').animate({'top':'0'},'slow');
	$('.millenials_boxes').animate({'top' : '-100px'},'slow');
	$('.interactive_boxes').animate({'top' : $(window).height()},'slow');
}

function animation26(flag){
	$('.text_2013').animate({'top': '-=30'},'slow');
	$('.text_2015').animate({'top': '570px'},'slow');
}
function animation26r(flag){
	$('.text_2013').animate({'top': '+=30'},'slow');
	$('.text_2015').animate({'top': $(window).height()},'slow');
}





/***************************************/

function init(){

	// #TODO : calculate document height 
	$('#dummydiv').height('10000px');	

	/* set dimentions for viewport */
	
	$('#viewport').css({'top':headerHeight});
	$('#viewport').height($(window).height() - headerHeight);
	$('#viewport').width($(window).width());

	/* set person on current viewport*/
	$('.person').css({'left': ($(window).width()/2 - $('.person').width()/2) + 8});
	$('.person').css({'top':  $(window).height() - headerHeight - $('.person').height()});
	$('.person').css({'width': 80});

	/* adjust height and width for city1 background*/
	$('#city1').height($(window).height() - headerHeight);
	//$('.building').width($(window).width());

}

function beforeCity1Adjustments(){
	$('.text_1965').css({'left': 0 - $('.text_1965').width() });
	$('.text_1969').css({'left': 0 - $('.text_1969').width() });
	$('.text_1971').css({'left': 0 - $('.text_1971').width() });
	$('.text_1977').css({'left': 0 - $('.text_1977').width() });

	$('.division').css({'right': 0 - $('.division').width() });
	$('.division2').css({'right': 0 - $('.division2').width() });
}

function beforeCity2Adjustments(){
	$('#city2').css({'background-color':'#f8931D'});
	$('#viewport').css({'top':0});
	$('#viewport').height($(window).height());
	var calLeft = ($(window).width() - $('.city2_elevator').width())/2;
	$('.city2_elevator').css({'left':calLeft});

	$('#city2').show();
	$('#city2').width($(window).width());
	$('#city2').css({'top':$(window).height() - headerHeight});
	$('#city1').animate({'top': 0 - $('#city1').height()},'slow');
	$('#city2').animate({'top':0},'slow');
	$('.person').animate({'top':'-=50'},'slow');
	$('.person').removeClass("initperson");
	$('.person').addClass("city1person");
	/* align bg image to center */
	var calLeft = ($(window).width() - $('.city2-bg-layer').width())/2;
	$('.city2-bg-layer').css({'left': calLeft});
	$('.city2-high-layer').css({'left': calLeft})  

	/* text placement */
	$('.text_1983').css({'left': 0 - $('.text_1983').width() });
	$('.text_1986').css({'left': 0 - $('.text_1986').width() });
	$('.text_1988').css({'left': 0 - $('.text_1988').width() });
	$('.text_1989').css({'left': 0 - $('.text_1989').width() });

	/* bubble placement */	
	$('.rapp_collinsbubble').css({'left': $(window).width() + $('.rapp_collinsbubble').width()})

	$('.shapes_bubble').css({'left': $(window).width() + $('.shapes_bubble').width()})

}

function beforeCity2AdjustmentsRev(){
	$('#viewport').css({'top':headerHeight});
	$('#viewport').height($(window).height() - headerHeight);
	$('.person').animate({'top':'+=50'},'slow');
	//$('#city2').width($(window).width());
	$('#city2').animate({'top':$(window).height() - headerHeight},'slow');
	$('#city1').animate({'top': 0},'slow');
	$('.person').removeClass("city1person");
	$('.person').addClass("initperson");
	
}

function beforeCity3Adjustments(){
	$('#city3').css({'background-color':'#4c2901'});
	$('#viewport').css({'top':0});
	$('#viewport').height($(window).height());
	var calLeft = ($(window).width() - $('.city3_elevator').width())/2;
	$('.city3_elevator').css({'left':calLeft});
	$('.globe').css({'width':$(window).width()});
	$('.globe').css({'top':$(window).height()});
	$('.globe').show();
	$('.person').removeClass("city1person");
	$('.person').addClass("city2person");
	$('#city3').show();
	$('#city3').width($(window).width());
	$('#city3').css({'top':$(window).height()});
	$('#city2').animate({'top': 0 - $('#city2').height()},'slow');
	$('#city3').animate({'top':0},'slow');

	//$('.pepsi_bubble').css({'top': $(window).height() + $('.pepsi_bubble').height()});
	$('.pepsi_bubble').css({'top': '25%'});
	$('.pepsi_bubble').css({'left': '30%'});

	//$('.pizzahut_bubble').css({'top': $(window).height() + $('.pizzahut_bubble').height()});
	$('.pizzahut_bubble').css({'top': '10%'});
	$('.pizzahut_bubble').css({'left': '65%'});
	


	$('.rapp_collinsww').css({'top': $(window).height() + $('.rapp_collinsww').height()});
	$('.rapp_collinsww2').css({'left': 0 - $('.rapp_collinsww').width()});

	$('.text_1992').css({'top': $(window).height() + $('.text_1992').height()});
	$('.text_1993').css({'top': $(window).height() + $('.text_1993').height()});
	$('.text_1994').css({'top': $(window).height() + $('.text_1994').height()});
	$('.text_1995').css({'top': $(window).height() + $('.text_1995').height()});
	$('.text_1996').css({'top': $(window).height() + $('.text_1996').height()});
	$('.city3-bg-layer').css({'height' : $(window).height()});
	$('.city3-bg-layer').css({'width' : $(window).width()});
	$('.city3_1-bg-layer').css({'height' : $(window).height()});
	$('.city3_1-bg-layer').css({'width' : $(window).width()});
	
}
function beforeCity3AdjustmentsRev(){
	$('.person').animate({'top':'+=50'},'slow');
	//$('#city2').width($(window).width());
	$('#city3').animate({'top':$(window).height()},'slow');
	$('#city2').animate({'top': 0},'slow');
	$('.person').removeClass("city2person");
	$('.person').addClass("city1person");

}

function beforeCity4Adjustments(){
	$('#viewport').css({'top':0});
	$('#viewport').height($(window).height());
	var calLeft = ($(window).width() - $('.city4_elevator').width())/2;
	$('.city4_elevator').css({'left':calLeft});

	$('#city4').show();
	$('#city4').width($(window).width());
	$('#city4').css({'top':$(window).height()});
	$('#city3').animate({'top': 0 - $('#city2').height()},'slow');
	$('#city4').animate({'top':0},'slow');
	$('.person').removeClass("city2person");
	$('.person').addClass("city3person");

	//$('.text_2000 
	$('.text_2002').css({'left': $('.text_2002').width() + $(window).width()}); 
	$('.text_2004').css({'left': $('.text_2004').width() + $(window).width()});  
	$('.text_2005').css({'left': $('.text_2005').width() + $(window).width()});  
	$('.text_2008').css({'left': $('.text_2008').width() + $(window).width()});  
	$('.text_2009').css({'left': $('.text_2009').width() + $(window).width()});  
	$('.text_2009_2').css({'left': $('.text_2009_2').width() + $(window).width()}); 

}
function beforeCity4AdjustmentsRev(){
	$('#city4').animate({'top':$(window).height()},'slow');
	$('#city3').animate({'top': 0},'slow');
	$('.person').removeClass("city3person");
	$('.person').addClass("city2person");
}


function beforeCity5Adjustments(){
	$('#viewport').css({'top':0});
	$('#viewport').height($(window).height());
	var calLeft = ($(window).width() - $('.city5_elevator').width())/2;
	$('.city5_elevator').css({'left':calLeft});
	$('.person').removeClass("city3person");
	$('.person').addClass("city4person");
	$('#city5').show();
	$('#city5').width($(window).width());
	$('#city5').css({'top':$(window).height()});
	$('#city4').animate({'top': 0 - $('#city3').height()},'slow');
	$('#city5').animate({'top':0},'slow');
	$('.text_2012').css({'top' : $(window).height()});
	$('.millenials_boxes').hide();
	$('.interactive_boxes').hide();
	$('.text_2013').css({'top' : $(window).height()});
	$('.text_2015').css({'top' : $(window).height()});
}

function beforeCity5AdjustmentsRev(){
	$('#city5').animate({'top':$(window).height()},'slow');
	$('#city4').animate({'top': 0},'slow');
	$('.person').removeClass("city4person");
	$('.person').addClass("city3person");
}
